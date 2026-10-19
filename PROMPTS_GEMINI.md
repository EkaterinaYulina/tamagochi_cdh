# Готовые промпты для Gemini

Как работать
1. Один чат на один вид и один окрас.
2. Шаг 1 — промпт героя, без вложений.
3. Дальше на каждом шаге: **прикрепи указанный файл**, вставь указанный промпт, сохрани результат под указанным именем.
4. Все промпты готовы, ничего подставлять не нужно. Форматы 1:1.
5. В конце: все PNG в папку `raw/`, затем `python3 prepare_assets.py raw assets --rembg`.

Свои референсы (кошку и лисов) в Gemini не загружай: получатся копии известных героев.

Важно про стадии: Gemini копирует пропорции референса, поэтому в промптах малыша и подростка заданы возраст, размер тела и приметы возраста. Не сокращай их.

---

## Универсальные промпты состояний
Одни и те же для всех видов, стадий и окрасов. Работают с прикреплённой картинкой.

**P-SAD**
```
Using the attached image as the exact character reference (same character, same size and proportions, same fur, same scarf if there is one, same rendering style, lighting, camera angle and plain flat gray background), change only the expression: sad, big watery eyes, mouth turned down, ears drooping. Keep the same sitting pose. Full body visible, centered, no ground shadow, no props, no text. Square 1:1.
```

**P-SLEEP**
```
Using the attached image as the exact character reference (same character, same body proportions, same fur, same scarf if there is one, same rendering style, lighting and plain flat gray background), change the pose: the animal is fast asleep, lying down curled up in a tight cozy ball, head resting on its front paws or tucked against its body, tail wrapped around itself, eyes closed, peaceful relaxed face. Slightly high three-quarter view, the whole curled-up body visible and centered, filling most of the frame. No ground shadow, no props, no text. Square 1:1.
```

**Еда** у каждого вида своя, потому что нужна другая поза и предмет в кадре (одной улыбкой с закрытыми глазами еду не показать).

**CAT-EAT**
```
Using the attached image as the exact character reference (same character, same body proportions, same fur, same scarf if there is one, same rendering style, lighting and plain flat gray background), change the pose: the cat is eating, standing on all four paws in a three-quarter view with its head lowered toward a small round ceramic plate on the floor in front of it, taking a bite of a whole small fish lying on the plate, eyes happy. Keep the scarf exactly as in the reference if it has one (same red color and shape); if the reference has no scarf, the cat must not wear any scarf. The whole body and the plate visible and centered. No ground shadow, no other props, no text. Square 1:1.
```

**DOG-EAT**
```
Using the attached image as the exact character reference (same character, same body proportions, same fur, same scarf if there is one, same rendering style, lighting and plain flat gray background), change the pose: the dog is eating, standing on all four paws in a three-quarter view with its head lowered toward a small round ceramic plate on the floor in front of it, chewing on a large bone lying on the plate, tail raised and wagging, eyes happy. Keep the scarf exactly as in the reference if it has one (same red color and shape); if the reference has no scarf, the dog must not wear any scarf. The whole body and the plate visible and centered. No ground shadow, no other props, no text. Square 1:1.
```

**HAM-EAT**
```
Using the attached image as the exact character reference (same character, same body proportions, same fur, same scarf if there is one, same rendering style, lighting and plain flat gray background), change the pose: the hamster is eating, sitting upright and holding a big sunflower seed in both front paws, nibbling it with its cheeks puffed full, eyes happy and wide open. Keep the scarf exactly as in the reference if it has one (same red color and shape); if the reference has no scarf, the hamster must not wear any scarf. The whole body visible and centered. No ground shadow, no other props, no text. Square 1:1.
```

**P-MID** (запасной вариант для подростка, если он всё равно выходит взрослым). Прикрепи сразу две картинки: малыша и взрослого этого же вида.
```
Image 1 is the baby version and image 2 is the adult version of the same character. Create an in-between growth stage: an adolescent about halfway between them in age, size and proportions. Keep the same face design, fur color, eye color, rendering style, lighting, camera angle and plain flat gray background. Wearing a small red scarf without any tag. Same sitting pose and happy open smile. Full body visible, centered, no ground shadow, no props, no text. Square 1:1.
```

---

## Котёнок (cat)

### Окрас 0: белый
**Шаг 1. Герой.** Новый чат, без вложений. Сохрани как `cat_0_3_happy.png`
```
Create an image: a stylized 3D animated feature-film character, an adult white short-haired cat with big green eyes, pink nose and inner ears, wearing a small red scarf with a tiny gold tag. Sitting pose, full body visible including tail and paws, three-quarter view facing the camera, happy open smile, ears up. Soft cinematic lighting with a warm rim light, fine realistic fur strands with a gentle glow, large glossy expressive eyes with long lashes and catchlights, smooth appealing proportions, high detail. Plain flat neutral gray background, no ground shadow, no props, no text. Square 1:1.
```

**CAT-BABY**
```
Using the attached image as the exact character reference for the face design, fur color, eye color, rendering style, lighting and plain flat gray background, create a much younger version of this same cat: a 6-week-old baby kitten. The kitten must look clearly tiny and newborn-like compared to the reference: body about 45% of the reference's size, very round chubby body, oversized round head, tiny short legs and tiny paws, big round eyes, small ears, short fluffy tail, very soft fuzzy fur. Do not keep the adult body proportions. No scarf. Sitting pose, three-quarter view facing the camera, the same happy open smile. Full body visible, centered, no ground shadow, no props, no text. Square 1:1.
```

**CAT-TEEN**
```
Using the attached image as the exact character reference for the face design, fur color, eye color, rendering style, lighting and plain flat gray background, create a much younger version of this same cat: a 5-month-old adolescent kitten. The kitten must look clearly younger and smaller than the reference: body about 70% of the reference's size, slender gangly body, long thin legs, head and ears slightly too big for the body, rounder face with a shorter muzzle, big curious eyes, thinner tail with less fluff. Do not keep the adult body proportions. Wearing a small red scarf without any tag. Sitting pose, three-quarter view facing the camera, the same happy open smile. Full body visible, centered, no ground shadow, no props, no text. Square 1:1.
```

| Шаг | Прикрепи | Промпт | Сохрани как |
|---|---|---|---|
| 2 | cat_0_3_happy.png | CAT-BABY | cat_0_1_happy.png |
| 3 | cat_0_3_happy.png | CAT-TEEN | cat_0_2_happy.png |
| 4 | cat_0_1_happy.png | P-SAD | cat_0_1_sad.png |
| 5 | cat_0_1_happy.png | P-SLEEP | cat_0_1_sleep.png |
| 6 | cat_0_1_happy.png | CAT-EAT | cat_0_1_eat.png |
| 7 | cat_0_2_happy.png | P-SAD | cat_0_2_sad.png |
| 8 | cat_0_2_happy.png | P-SLEEP | cat_0_2_sleep.png |
| 9 | cat_0_2_happy.png | CAT-EAT | cat_0_2_eat.png |
| 10 | cat_0_3_happy.png | P-SAD | cat_0_3_sad.png |
| 11 | cat_0_3_happy.png | P-SLEEP | cat_0_3_sleep.png |
| 12 | cat_0_3_happy.png | CAT-EAT | cat_0_3_eat.png |

Если на шаге 3 всё равно получается взрослый: прикрепи `cat_0_1_happy.png` и `cat_0_3_happy.png` вместе и вставь P-MID.

### Окрас 1: рыжий
**Шаг 1.** Прикрепи `cat_0_3_happy.png`. Сохрани как `cat_1_3_happy.png`
```
Using the attached image as the character reference, keep everything identical (pose, camera angle, proportions, red scarf with a tiny gold tag, rendering style, lighting, plain flat gray background), but change the fur to ginger tabby with darker orange stripes, a cream chest, and change the eye color to amber. Square 1:1.
```
Шаги 2–12: та же таблица, везде `cat_0_` заменяется на `cat_1_`.

### Окрас 2: серый
**Шаг 1.** Прикрепи `cat_0_3_happy.png`. Сохрани как `cat_2_3_happy.png`
```
Using the attached image as the character reference, keep everything identical (pose, camera angle, proportions, red scarf with a tiny gold tag, rendering style, lighting, plain flat gray background), but change the fur to soft gray with a white chest, and change the eye color to blue. Square 1:1.
```
Шаги 2–12: та же таблица, везде `cat_0_` заменяется на `cat_2_`.

---

## Щенок (dog)

### Окрас 0: золотистый
**Шаг 1. Герой.** Новый чат, без вложений. Сохрани как `dog_0_3_happy.png`
```
Create an image: a stylized 3D animated feature-film character, an adult golden retriever dog with warm brown eyes, wearing a small red scarf with a tiny gold tag. Sitting pose, full body visible including tail and paws, three-quarter view facing the camera, happy open smile with tongue out, ears relaxed. Soft cinematic lighting with a warm rim light, fine realistic fur strands with a gentle glow, large glossy expressive eyes with long lashes and catchlights, smooth appealing proportions, high detail. Plain flat neutral gray background, no ground shadow, no props, no text. Square 1:1.
```

**DOG-BABY**
```
Using the attached image as the exact character reference for the face design, fur color, eye color, rendering style, lighting and plain flat gray background, create a much younger version of this same dog: a 6-week-old baby puppy. The puppy must look clearly tiny and newborn-like compared to the reference: body about 45% of the reference's size, round potbelly, oversized round head, tiny stubby legs and big soft paws, big round eyes, small floppy ears, short fluffy tail, very soft fuzzy fur. Do not keep the adult body proportions. No scarf. Sitting pose, three-quarter view facing the camera, the same happy open smile. Full body visible, centered, no ground shadow, no props, no text. Square 1:1.
```

**DOG-TEEN**
```
Using the attached image as the exact character reference for the face design, fur color, eye color, rendering style, lighting and plain flat gray background, create a much younger version of this same dog: a 5-month-old adolescent puppy. The puppy must look clearly younger and smaller than the reference: body about 70% of the reference's size, long gangly legs, oversized paws, floppy ears slightly too big for the head, rounder face with a shorter muzzle, big curious eyes, thinner fluffy tail. Do not keep the adult body proportions. Wearing a small red scarf without any tag. Sitting pose, three-quarter view facing the camera, the same happy open smile. Full body visible, centered, no ground shadow, no props, no text. Square 1:1.
```

| Шаг | Прикрепи | Промпт | Сохрани как |
|---|---|---|---|
| 2 | dog_0_3_happy.png | DOG-BABY | dog_0_1_happy.png |
| 3 | dog_0_3_happy.png | DOG-TEEN | dog_0_2_happy.png |
| 4 | dog_0_1_happy.png | P-SAD | dog_0_1_sad.png |
| 5 | dog_0_1_happy.png | P-SLEEP | dog_0_1_sleep.png |
| 6 | dog_0_1_happy.png | DOG-EAT | dog_0_1_eat.png |
| 7 | dog_0_2_happy.png | P-SAD | dog_0_2_sad.png |
| 8 | dog_0_2_happy.png | P-SLEEP | dog_0_2_sleep.png |
| 9 | dog_0_2_happy.png | DOG-EAT | dog_0_2_eat.png |
| 10 | dog_0_3_happy.png | P-SAD | dog_0_3_sad.png |
| 11 | dog_0_3_happy.png | P-SLEEP | dog_0_3_sleep.png |
| 12 | dog_0_3_happy.png | DOG-EAT | dog_0_3_eat.png |

Если на шаге 3 всё равно получается взрослый: прикрепи `dog_0_1_happy.png` и `dog_0_3_happy.png` вместе и вставь P-MID.

### Окрас 1: шоколадный
**Шаг 1.** Прикрепи `dog_0_3_happy.png`. Сохрани как `dog_1_3_happy.png`
```
Using the attached image as the character reference, keep everything identical (pose, camera angle, proportions, red scarf with a tiny gold tag, rendering style, lighting, plain flat gray background), but change the fur to chocolate brown with a cream muzzle and chest, and change the eye color to dark brown. Square 1:1.
```
Шаги 2–12: та же таблица, везде `dog_0_` заменяется на `dog_1_`.

### Окрас 2: белый с чёрными пятнами
**Шаг 1.** Прикрепи `dog_0_3_happy.png`. Сохрани как `dog_2_3_happy.png`
```
Using the attached image as the character reference, keep everything identical (pose, camera angle, proportions, red scarf with a tiny gold tag, rendering style, lighting, plain flat gray background), but change the fur to white with black spots and black ears, and change the eye color to dark brown. Square 1:1.
```
Шаги 2–12: та же таблица, везде `dog_0_` заменяется на `dog_2_`.

---

## Хомяк (ham)

### Окрас 0: золотисто-белый
**Шаг 1. Герой.** Новый чат, без вложений. Сохрани как `ham_0_3_happy.png`
```
Create an image: a stylized 3D animated feature-film character, an adult golden and white hamster with round chubby cheeks and a plump body, wearing a small red scarf with a tiny gold tag. Sitting upright, full body visible, three-quarter view facing the camera, happy smile showing two tiny front teeth. Soft cinematic lighting with a warm rim light, fine realistic fur strands with a gentle glow, large glossy expressive eyes with long lashes and catchlights, smooth appealing proportions, high detail. Plain flat neutral gray background, no ground shadow, no props, no text. Square 1:1.
```

**HAM-BABY**
```
Using the attached image as the exact character reference for the face design, fur color, eye color, rendering style, lighting and plain flat gray background, create a much younger version of this same hamster: a 3-week-old baby hamster. The hamster must look clearly tiny compared to the reference: body about 45% of the reference's size, small round ball-shaped body, head very big for the body, very small ears, tiny paws, small cheeks, very soft fuzzy fur. Do not keep the adult body proportions. No scarf. Sitting upright, three-quarter view facing the camera, the same happy smile. Full body visible, centered, no ground shadow, no props, no text. Square 1:1.
```

**HAM-TEEN**
```
Using the attached image as the exact character reference for the face design, fur color, eye color, rendering style, lighting and plain flat gray background, create a much younger version of this same hamster: a 2-month-old young hamster. The hamster must look clearly younger and smaller than the reference: body about 70% of the reference's size, slimmer and less plump, cheeks smaller and less puffy, big curious eyes, slightly large ears for its head. Do not keep the adult body proportions. Wearing a small red scarf without any tag. Sitting upright, three-quarter view facing the camera, the same happy smile. Full body visible, centered, no ground shadow, no props, no text. Square 1:1.
```

| Шаг | Прикрепи | Промпт | Сохрани как |
|---|---|---|---|
| 2 | ham_0_3_happy.png | HAM-BABY | ham_0_1_happy.png |
| 3 | ham_0_3_happy.png | HAM-TEEN | ham_0_2_happy.png |
| 4 | ham_0_1_happy.png | P-SAD | ham_0_1_sad.png |
| 5 | ham_0_1_happy.png | P-SLEEP | ham_0_1_sleep.png |
| 6 | ham_0_1_happy.png | HAM-EAT | ham_0_1_eat.png |
| 7 | ham_0_2_happy.png | P-SAD | ham_0_2_sad.png |
| 8 | ham_0_2_happy.png | P-SLEEP | ham_0_2_sleep.png |
| 9 | ham_0_2_happy.png | HAM-EAT | ham_0_2_eat.png |
| 10 | ham_0_3_happy.png | P-SAD | ham_0_3_sad.png |
| 11 | ham_0_3_happy.png | P-SLEEP | ham_0_3_sleep.png |
| 12 | ham_0_3_happy.png | HAM-EAT | ham_0_3_eat.png |

Если на шаге 3 всё равно получается взрослый: прикрепи `ham_0_1_happy.png` и `ham_0_3_happy.png` вместе и вставь P-MID.

### Окрас 1: серый
**Шаг 1.** Прикрепи `ham_0_3_happy.png`. Сохрани как `ham_1_3_happy.png`
```
Using the attached image as the character reference, keep everything identical (pose, camera angle, proportions, red scarf with a tiny gold tag, rendering style, lighting, plain flat gray background), but change the fur to soft gray with a cream belly, and change the eye color to dark brown. Square 1:1.
```
Шаги 2–12: та же таблица, везде `ham_0_` заменяется на `ham_1_`.

### Окрас 2: персиковый
**Шаг 1.** Прикрепи `ham_0_3_happy.png`. Сохрани как `ham_2_3_happy.png`
```
Using the attached image as the character reference, keep everything identical (pose, camera angle, proportions, red scarf with a tiny gold tag, rendering style, lighting, plain flat gray background), but change the fur to peach cream with a white belly, and change the eye color to dark brown. Square 1:1.
```
Шаги 2–12: та же таблица, везде `ham_0_` заменяется на `ham_2_`.

---

## Фон комнаты
Новый чат. Сохрани как `bg_room.png`
```
Create an image: a cozy warm interior of a small room with a wooden floor, soft window light with dust motes, shallow depth of field, stylized 3D animated feature-film look. Vertical 9:16 format, an empty floor area in the lower center for a character, no characters, no text.
```

---

## Если Gemini ошибается
- **Стадия выглядит взрослой.** Сначала сделай малыша, затем используй P-MID с двумя прикреплёнными картинками. Игра сама масштабирует стадии (малыш 62%, подросток 80%, взрослый 100%), так что размер на картинке важен меньше, чем пропорции: большая голова, короткие ноги, детское лицо.
- **У малыша появился шарф, или шарф стал другого цвета.** Допиши: `No scarf at all.` (для малыша) или `The scarf must be red, exactly as in the reference.` (для подростка и взрослого).
- **Поза или ракурс поплыли.** Допиши в конец промпта: `Keep exactly the same pose and camera angle as the attached image.`
- **Появились пол, тень или предметы.** Допиши: `No floor, no shadow, no props, plain flat gray background.`
- **Стиль дрейфует.** Открой новый чат, прикрепи лучший файл героя и повтори промпт.
- **Серый фон плохо вырезается.** Допиши: `Plain flat mid-gray background (#808080).`

## Порядок работы, чтобы не тратить лишнее
1. Герой котёнка, окрас 0. Положи `cat_0_3_happy.png` в `assets/` и посмотри, как стиль выглядит в игре.
2. Остальные шаги котёнка, окрас 0 (шаги 2–12).
3. Щенок и хомяк, окрас 0.
4. Дополнительные окрасы и фон.
