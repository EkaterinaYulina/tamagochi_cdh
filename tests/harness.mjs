// Запускает index.html в jsdom с управляемыми часами и без реального setInterval.
import { JSDOM } from 'jsdom';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const HTML = readFileSync(
  path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'index.html'),
  'utf8'
);

export async function boot({ species = 'cat', start = Date.UTC(2026, 9, 21, 12, 0, 0) } = {}) {
  const clock = { now: start };
  const dom = new JSDOM(HTML, {
    url: 'https://localhost/',
    runScripts: 'dangerously',
    pretendToBeVisual: true,
    beforeParse(w) {
      const RD = w.Date;
      w.Date = class extends RD {
        constructor(...a) { a.length ? super(...a) : super(clock.now); }
        static now() { return clock.now; }
      };
      w.setInterval = () => 0; // цикл игры гоняем вручную через dbg.loop()
    },
  });
  const w = dom.window;
  const doc = w.document;
  // initSDK/load асинхронные: ждём, пока игра покажет экран выбора питомца
  for (let i = 0; i < 100 && !doc.querySelector('#go'); i++) await new Promise(r => setTimeout(r, 10));

  // стартуем питомца настоящим путём: выбор вида -> кнопка «Начать»
  if (species !== 'cat') doc.querySelector(`[data-sp="${species}"]`).click();
  doc.querySelector('#go').click();

  const dbg = w.dbg;
  const S = () => dbg.state();
  S().coins = 100;
  const advance = (min) => { clock.now += Math.round(min * 60000); };
  const tick = (min = 0) => { advance(min); dbg.loop(); };
  const dismiss = () => {
    const b = doc.querySelector('#gtake'); if (b) b.click();
    // всплывающие иконки в игре удаляются по таймеру в реальном времени; в тесте часы стоят, поэтому чистим сами
    doc.querySelectorAll('.fl').forEach((e) => e.remove());
  };
  const rand = (v) => { w.Math.random = typeof v === 'function' ? v : () => v; };
  return { w, doc, dbg, S, clock, advance, tick, dismiss, rand, close: () => w.close() };
}

// детерминированный генератор для фаззинга
export function mulberry32(a) {
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
