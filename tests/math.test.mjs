import test from 'node:test';
import assert from 'node:assert/strict';
import { boot, mulberry32 } from './harness.mjs';

const NEEDS = ['hunger', 'energy', 'mood', 'clean'];
const full = (S) => Object.assign(S(), { hunger: 100, energy: 100, mood: 100, clean: 100, sleeping: false, walk: null });
const near = (a, b, eps = 1e-6) => assert.ok(Math.abs(a - b) <= eps, `${a} ≠ ${b}`);

/* ---------- потребности ---------- */

test('потери за время отсутствия не уменьшаются с ростом времени (нет «обрыва» на 2 минутах)', async () => {
  const g = await boot();
  let prev = -1;
  for (const m of [0.5, 1, 1.9, 2, 2.1, 3, 5, 10, 30]) {
    full(g.S); g.S().last = g.clock.now;
    g.tick(m);
    const loss = 100 - g.S().hunger;
    assert.ok(loss >= prev, `за ${m} мин потеряно ${loss.toFixed(2)}, а за предыдущий интервал было ${prev.toFixed(2)}`);
    prev = loss;
  }
  g.close();
});

test('онлайн-скорость убывания: 1.5 / 1 / 1.2 / 1 в минуту', async () => {
  const g = await boot();
  full(g.S); g.S().last = g.clock.now;
  g.tick(1);
  near(100 - g.S().hunger, 1.5); near(100 - g.S().energy, 1); near(100 - g.S().mood, 1.2); near(100 - g.S().clean, 1);
  g.close();
});

test('сон: энергия +4/мин, голод −0.8/мин, пробуждение при 100', async () => {
  const g = await boot();
  Object.assign(g.S(), { hunger: 100, energy: 50, mood: 100, clean: 100, sleeping: true, last: g.clock.now });
  for (let i = 0; i < 12; i++) g.tick(1);
  near(g.S().energy, 98); near(g.S().hunger, 100 - 0.8 * 12);
  assert.equal(g.S().sleeping, true);
  g.tick(1);
  assert.equal(g.S().energy, 100);
  assert.equal(g.S().sleeping, false);
  g.close();
});

test('часы, переведённые назад: потерь нет, метка времени исправляется', async () => {
  const g = await boot();
  full(g.S); g.S().last = g.clock.now + 10 * 60000;
  g.tick(0);
  assert.equal(g.S().hunger, 100);
  assert.equal(g.S().last, g.clock.now);
  g.close();
});

test('отсутствие дольше 8 часов считается как 8 часов, значения остаются в 0..100', async () => {
  const g = await boot();
  full(g.S); g.S().last = g.clock.now;
  g.tick(60 * 24 * 7);
  for (const k of NEEDS) assert.ok(g.S()[k] >= 0 && g.S()[k] <= 100, k);
  g.close();
});

test('питомец на прогулке: время после её окончания тоже считается отсутствием', async () => {
  const g = await boot();
  Object.assign(g.S(), { hunger: 100, energy: 100, mood: 100, clean: 100 });
  g.dbg.startWalk('yard'); // 20 минут
  assert.ok(g.S().walk);
  g.rand(0.999);
  g.tick(200); // вернулся давно: 180 минут сверх прогулки
  g.dismiss();
  assert.equal(g.S().walk, null);
  // без учёта простоя было бы ровно 100 − 15 = 85
  assert.ok(g.S().hunger < 85, `голод ${g.S().hunger}: простой после прогулки не засчитан`);
  g.close();
});

/* ---------- рост ---------- */

test('границы стадий: 40 и 120 опыта', async () => {
  const g = await boot();
  const at = (xp) => { g.S().stage = 1; g.S().xp = xp; g.dbg.step(0); return g.S().stage; };
  assert.equal(at(39.99), 1); assert.equal(at(40), 2);
  assert.equal(at(119.99), 2); assert.equal(at(120), 3);
  g.close();
});

test('опыт идёт со скоростью 1/мин, пока средний уровень потребностей ≥ 55, и не идёт ниже', async () => {
  const g = await boot();
  full(g.S); g.S().xp = 0; g.S().last = g.clock.now;
  for (let i = 0; i < 39; i++) { full(g.S); g.tick(1); }
  near(g.S().xp, 39); assert.equal(g.S().stage, 1);
  full(g.S); g.tick(1);
  near(g.S().xp, 40); assert.equal(g.S().stage, 2);
  Object.assign(g.S(), { hunger: 40, energy: 40, mood: 40, clean: 40, xp: 50 });
  g.tick(1);
  assert.equal(g.S().xp, 50);
  g.close();
});

/* ---------- действия ---------- */

test('кормление: −3 монеты, +25 сытости, +0.5 опыта; при сытости ≥95 отказ без списания', async () => {
  const g = await boot();
  Object.assign(g.S(), { hunger: 50, coins: 10, xp: 0 });
  g.dbg.act('feed');
  assert.equal(g.S().hunger, 75); assert.equal(g.S().coins, 7); near(g.S().xp, 0.5);
  g.S().hunger = 95; g.dbg.act('feed');
  assert.equal(g.S().coins, 7);
  g.S().hunger = 90; g.dbg.act('feed');
  assert.equal(g.S().hunger, 100);
  g.close();
});

test('кормление без монет не меняет состояние', async () => {
  const g = await boot();
  Object.assign(g.S(), { hunger: 50, coins: 2 });
  g.dbg.act('feed');
  assert.equal(g.S().hunger, 50); assert.equal(g.S().coins, 2);
  g.close();
});

/* ---------- мини-игра ---------- */

async function play(g, { score, hunger = 80, mood = 80, agiPts = 0, boost = false }) {
  Object.assign(g.S(), { hunger, mood, energy: 100, coins: 0, xp: 0, best: 0, sleeping: false });
  g.S().skl = { agi: agiPts, int: 0, bea: 0 };
  g.S().boost = boost ? g.clock.now + 60000 : 0;
  g.dbg.act('play');
  const G = g.dbg.game(); assert.ok(G, 'мини-игра не открылась');
  const care = G.care;
  G.score = score; g.dbg.endGame();
  return { care, coins: g.S().coins };
}

test('множитель заботы: ≥75 → ×1.3, 45–74 → ×1, <45 → ×0.75 (по среднему сытости и настроения)', async () => {
  const g = await boot();
  assert.equal((await play(g, { score: 1, hunger: 75, mood: 75 })).care, 1.3);
  assert.equal((await play(g, { score: 1, hunger: 74, mood: 75 })).care, 1);
  assert.equal((await play(g, { score: 1, hunger: 45, mood: 45 })).care, 1);
  assert.equal((await play(g, { score: 1, hunger: 44, mood: 45 })).care, 0.75);
  g.close();
});

test('награда за мини-игру: round(очки × забота × (1 + 3% × ловкость)) × буст', async () => {
  const g = await boot();
  assert.equal((await play(g, { score: 10 })).coins, 13);
  assert.equal((await play(g, { score: 10, hunger: 30, mood: 30 })).coins, 8);
  assert.equal((await play(g, { score: 10, agiPts: 50 })).coins, 15);
  assert.equal((await play(g, { score: 10, boost: true })).coins, 26);
  assert.equal((await play(g, { score: 0 })).coins, 0);
  g.close();
});

test('итог мини-игры: энергия −15, опыт +2, настроение +min(40, очки×3), рекорд обновляется', async () => {
  const g = await boot();
  Object.assign(g.S(), { mood: 10 });
  await play(g, { score: 20, mood: 10 });
  assert.equal(g.S().mood, 50); assert.equal(g.S().energy, 85); near(g.S().xp, 2); assert.equal(g.S().best, 20);
  g.close();
});

/* ---------- прогулки ---------- */

test('прогулка: награда, затраты потребностей и опыт', async () => {
  const g = await boot();
  Object.assign(g.S(), { hunger: 100, energy: 100, clean: 100, mood: 50, xp: 0, coins: 0 });
  g.dbg.startWalk('yard');
  g.rand(0.999); // монеты на верхней границе, находок нет
  g.S().walk.until = 0; g.tick(0); g.dismiss();
  assert.equal(g.S().coins, 14);
  assert.deepEqual([g.S().hunger, g.S().energy, g.S().clean, g.S().mood], [85, 80, 80, 65]);
  near(g.S().xp, 1);
  g.close();
});

test('прогулка: ловкость 10 даёт +30%, буст ×2', async () => {
  const g = await boot();
  const run = (extra) => {
    Object.assign(g.S(), { hunger: 100, energy: 100, clean: 100, coins: 0, boost: 0 }, extra);
    g.dbg.startWalk('yard'); g.rand(0.999);
    g.S().walk.until = 0; g.tick(0); g.dismiss();
    return g.S().coins;
  };
  assert.equal(run({ skl: { agi: 100, int: 0, bea: 0 } }), 18);
  assert.equal(run({ skl: { agi: 0, int: 0, bea: 0 }, boost: g.clock.now + 600000 }), 28);
  g.close();
});

test('длительность прогулки: −3% за уровень интеллекта, не короче 5 минут', async () => {
  const g = await boot();
  const dur = (id, int) => {
    Object.assign(g.S(), { hunger: 100, energy: 100, walk: null, skl: { agi: 0, int, bea: 0 } });
    g.dbg.startWalk(id);
    const m = (g.S().walk.until - g.clock.now) / 60000; g.S().walk = null; return m;
  };
  assert.equal(dur('trip', 0), 120); assert.equal(dur('trip', 100), 84); assert.equal(dur('yard', 100), 14);
  g.close();
});

test('время прогулки показывается без дробей', async () => {
  const g = await boot();
  for (let m = 5; m <= 180; m++) {
    assert.match(g.dbg.fmtMin(m), /^\d+ (мин|ч)( \d+ мин)?$/, `${m} мин → «${g.dbg.fmtMin(m)}»`);
  }
  g.close();
});

/* ---------- магазин и комната ---------- */

test('скидки дня недели: целые цены, дешевле обычных', async () => {
  const g = await boot();
  const price = (id, p, day) => { g.dbg.setDay(day); return g.dbg.cprice({ id, price: p }); };
  assert.equal(price('spa', 18, 3), 13); assert.equal(price('toy', 15, 5), 9);
  assert.equal(price('cake', 10, 6), 7); assert.equal(price('treat', 8, 0), 6); assert.equal(price('feast', 25, 6), 18);
  assert.equal(price('spa', 18, 1), 18); assert.equal(price('toy', 15, 3), 15);
  g.close();
});

test('любая комбинация предметов комнаты оставляет множитель в 0.6..1.3', async () => {
  const g = await boot();
  const slots = {};
  for (const d of g.dbg.DEC) (slots[d.slot] ||= [null]).push(d.id);
  const names = Object.keys(slots);
  const keys = ['hunger', 'energy', 'mood', 'clean', 'sleep', 'xp'];
  let n = 0;
  const walk = (i) => {
    if (i === names.length) { n++; for (const k of keys) { const v = g.dbg.fxm(k); assert.ok(v >= 0.6 && v <= 1.3, `${k}=${v}`); } return; }
    for (const id of slots[names[i]]) { if (id) g.S().placed[names[i]] = id; else delete g.S().placed[names[i]]; walk(i + 1); }
  };
  walk(0);
  assert.ok(n > 100);
  g.close();
});

test('бонус за комнату: +25 за 4 предмета, +50 за 8, +100 за все, каждый один раз', async () => {
  const g = await boot();
  const ids = g.dbg.DEC.map((d) => d.id);
  g.S().coins = 0;
  for (const id of ids.slice(0, 4)) g.S().owned[id] = 1;
  g.dbg.roomBonus(); g.dbg.roomBonus();
  assert.equal(g.S().coins, 25);
  for (const id of ids.slice(4, 8)) g.S().owned[id] = 1;
  g.dbg.roomBonus();
  assert.equal(g.S().coins, 75);
  for (const id of ids.slice(8)) g.S().owned[id] = 1;
  g.dbg.roomBonus(); g.dbg.roomBonus();
  assert.equal(g.S().coins, 175);
  assert.equal(g.S().roomRw, 3);
  g.close();
});

/* ---------- устойчивость: случайные действия и пропуски времени ---------- */

test('фаззинг: потребности в 0..100, монеты — неотрицательные целые, опыт и стадия согласованы', async () => {
  const g = await boot({ species: 'hamster' === 'x' ? 'ham' : 'dog' });
  const rnd = mulberry32(20261023);
  let prevStage = g.S().stage;
  for (let i = 0; i < 1500; i++) {
    const r = rnd();
    if (r < 0.35) g.tick(rnd() < 0.1 ? rnd() * 900 : rnd() * 3);
    else if (r < 0.55) g.dbg.act('feed');
    else if (r < 0.65) g.dbg.act('wash');
    else if (r < 0.75) g.dbg.act('sleep');
    else if (r < 0.80) g.dbg.startWalk(['yard', 'park', 'trip'][Math.floor(rnd() * 3)]);
    else if (r < 0.85) { g.S().coins += 50; }
    else if (r < 0.90) g.dbg.gain(['agi', 'int', 'bea'][Math.floor(rnd() * 3)], rnd() * 30);
    else g.tick(rnd() * 60);
    g.dismiss();
    const s = g.S();
    for (const k of NEEDS) assert.ok(Number.isFinite(s[k]) && s[k] >= 0 && s[k] <= 100, `шаг ${i}: ${k}=${s[k]}`);
    assert.ok(Number.isInteger(s.coins) && s.coins >= 0, `шаг ${i}: coins=${s.coins}`);
    assert.ok(Number.isFinite(s.xp) && s.xp >= 0, `шаг ${i}: xp=${s.xp}`);
    const want = s.xp >= 120 ? 3 : s.xp >= 40 ? 2 : 1;
    assert.equal(s.stage, want, `шаг ${i}: xp=${s.xp}, stage=${s.stage}`);
    assert.ok(s.stage >= prevStage); prevStage = s.stage;
    for (const k of ['agi', 'int', 'bea']) assert.ok(s.skl[k] >= 0 && s.skl[k] <= 100);
  }
  g.close();
});
