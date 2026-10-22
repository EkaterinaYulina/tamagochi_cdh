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

**P-RELIGHT** (поправить свет на готовой картинке). Прикрепи один исходник, сохрани результат под тем же именем. Нужен для `happy`, `sad` и `eat`. `sleep` не трогай: ночью тёмная шерсть уместна. Работает для всех видов и окрасов.
```
Using the attached image as the exact reference, keep everything identical: same character, same pose, same camera angle, same silhouette and proportions, same fur strands and fur pattern, same face and expression, same eye color, same scarf if there is one (same red color, shape and folds), same stylized 3D animated feature-film rendering, same plain flat mid-gray background (#808080). Change ONLY the lighting and shading on the character, so that it sits naturally in a warm cozy room with a cream and peach wall and a honey-colored wooden floor, lit by soft warm sunlight. The shadows and reflected light on the fur must be warm: every cool gray, bluish, lavender or neutral-gray shadow becomes a soft warm darker shade of the fur's own base color (for white fur: soft cream, light beige and peach), as if the fur were bouncing the warm colors of the room. The belly, chest, paws and the underside of the tail pick up a gentle honey-peach bounce light from the floor, the sides facing the wall pick up a soft cream glow, highlights are warm creamy white, not pure white. Keep a clear soft form shadow on the shadow side, just warm instead of gray, and keep a soft warm rim light. Only the shadows and reflections get warmer: the fur must not turn yellow, orange or sepia overall, must not look dirty, and must still read as clean and bright. Brightness and contrast stay about the same. Do not change the colors of the eyes, nose, inner ears, tongue and scarf. No ground shadow, no new props, no text. Square 1:1.
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
Create an image: a stylized 3D animated feature-film character, an adult white short-haired cat with big green eyes, pink nose and inner ears, wearing a small red scarf with a tiny gold tag. Sitting pose, full body visible including tail and paws, three-quarter view facing the camera, happy open smile, ears up. Soft cinematic lighting as in a warm cozy room: a warm rim light, and the shadows and reflected light on the fur are warm (soft cream, beige and peach tones, never gray, bluish or lavender shadows), fine realistic fur strands with a gentle glow, large glossy expressive eyes with long lashes and catchlights, smooth appealing proportions, high detail. Plain flat neutral gray background, no ground shadow, no props, no text. Square 1:1.
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
Create an image: a stylized 3D animated feature-film character, an adult golden retriever dog with warm brown eyes, wearing a small red scarf with a tiny gold tag. Sitting pose, full body visible including tail and paws, three-quarter view facing the camera, happy open smile with tongue out, ears relaxed. Soft cinematic lighting as in a warm cozy room: a warm rim light, and the shadows and reflected light on the fur are warm (soft cream, beige and peach tones, never gray, bluish or lavender shadows), fine realistic fur strands with a gentle glow, large glossy expressive eyes with long lashes and catchlights, smooth appealing proportions, high detail. Plain flat neutral gray background, no ground shadow, no props, no text. Square 1:1.
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
Create an image: a stylized 3D animated feature-film character, an adult golden and white hamster with round chubby cheeks and a plump body, wearing a small red scarf with a tiny gold tag. Sitting upright, full body visible, three-quarter view facing the camera, happy smile showing two tiny front teeth. Soft cinematic lighting as in a warm cozy room: a warm rim light, and the shadows and reflected light on the fur are warm (soft cream, beige and peach tones, never gray, bluish or lavender shadows), fine realistic fur strands with a gentle glow, large glossy expressive eyes with long lashes and catchlights, smooth appealing proportions, high detail. Plain flat neutral gray background, no ground shadow, no props, no text. Square 1:1.
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
Фон должен быть в том же стиле, что и звери: стилизованный 3D-мультфильм, мягкие округлые формы, без фотореализма. Два шага.

**Шаг 1. День.** Новый чат. **Прикрепи `cat_0_3_happy.png`**: только как образец стиля, кота в кадре быть не должно. Сохрани как `bg_room.png`
```
Create an image: the interior of a cozy cartoon attic nook as a background for a pet game, in the same stylized 3D animated feature-film look and the same soft lighting as the attached cat (use the attached image ONLY as a reference for rendering style, softness, color warmth and lighting; do not include the cat or any other animal or character in the picture). Everything is simplified, chubby and soft, like a premium toy diorama: smooth matte surfaces, rounded edges, gentle clay-like and felt-like materials, no photorealistic wood grain, no harsh textures, no dirt, no clutter. Straight-on eye-level camera facing the back wall, simple calm perspective; the back wall and the floor fill the whole frame edge to edge, with no visible side walls, ceiling or room edges. Palette: warm cream and peach wall, light honey-colored floor planks drawn as large smooth soft shapes, accents of terracotta, sage green, dusty blue and mustard yellow. Props, all rounded and soft: a large round window with a thick cream frame in the upper middle showing a pastel daytime sky with a few fluffy clouds, a pile of chunky knitted blankets and patchwork pillows along the left wall where it meets the floor, a small potted plant with big round leaves on a little wooden crate at the right, a string of softly glowing warm bulbs hanging in a gentle curve across the wall, a round woven rug on the floor. Soft warm sunlight from the window with a gentle glow on the floor, soft ambient occlusion, slight depth of field on the far wall. Keep the top 15% of the image calm and light with almost no details, and keep the whole lower center empty floor with no objects, for a character and for interface elements. No characters, no animals, no text, no logos. Vertical 9:16 format.
```

**Шаг 2. Ночь.** **Прикрепи `bg_room.png`**. Сохрани как `bg_room_night.png`
```
Using the attached image as the exact reference (same room, same composition, same camera angle, same furniture and objects in the same places, same stylized 3D animated feature-film rendering, same empty floor area), change only the time of day to night: the window shows a deep blue starry sky with a glowing round pale-yellow moon and tiny stars, the wall and floor turn into soft muted indigo and violet tones, the only light comes from the warm string bulbs and a faint cool moonlight patch on the floor, cozy and calm, still soft and clean with no harsh shadows. Keep the top 15% calm and the lower center empty. No characters, no animals, no text. Vertical 9:16 format.
```

Обработка: положи оба PNG в папку `raw_bg/` и запусти `python3 prepare_assets.py raw_bg assets`. Для файлов `bg_*` скрипт не вырезает фон и не обрезает, а только уменьшает до 768 px по ширине и сохраняет WebP.

Если Gemini ошибается с фоном
- **В кадре появился кот или другой зверь.** Допиши: `Absolutely no animals or characters anywhere in the picture.`
- **Фон снова выходит фотореалистичным.** Допиши: `Clearly stylized, not photorealistic: simplified shapes, smooth surfaces, painted-looking soft textures like a modern animated film.`
- **Вверху или в центре пола много деталей.** Допиши: `Leave the top 15% and the entire lower center completely plain and empty.`
- **Ночь не совпала с днём по композиции.** Открой новый чат, прикрепи `bg_room.png` и повтори промпт шага 2.

---

## Магазин: предметы комнаты, темы, образы, окрасы
Пока картинок нет, магазин работает на запасных: предметы рисуются кодом, темы дают цветокор. Игра сама подхватывает файл по имени, ничего менять не нужно. Свет у всех картинок тёплый, как в `bg_room.png`.

### Предметы комнаты (11 штук)
Один чат на все предметы. **Прикрепи `bg_room.png`** как образец стиля и света. Подставь описание из таблицы вместо `[ITEM]`. Сохраняй как `decor_<id>.png` и клади в `raw/`: `prepare_assets.py` вырежет фон и уменьшит до 512 px.

**P-DECOR**
```
Create an image: [ITEM], a single object for a cozy pet-game room, in the same stylized 3D animated feature-film look as the attached image (use the attached image ONLY as a reference for rendering style, softness, color warmth and lighting; do not include any room, animal or character). Chubby, soft, rounded shapes like a premium toy diorama, smooth matte surfaces, felt and clay-like materials, no photorealism, no harsh textures. Soft warm sunlight from the upper left, with warm cream and peach shadows and reflected light, never gray or bluish shadows. Palette: warm cream, terracotta, sage green, dusty blue, mustard yellow. Only this one object, centered, fully visible with a small margin around it, plain flat mid-gray background (#808080), no floor, no ground shadow, no other objects, no text. Square 1:1.
```

| Файл | Подставь вместо [ITEM] |
|---|---|
| decor_bowl.png | a round terracotta-red ceramic pet food bowl filled with golden kibble, slightly high three-quarter view |
| decor_bed.png | a soft round fluffy pet bed with a thick cushioned rim in lavender and cream, slightly high three-quarter view |
| decor_picture.png | a framed painting with a thick rounded warm orange wooden frame, a cheerful soft landscape with green hills, a yellow sun and a blue sky, straight front view |
| decor_clock.png | a round wall clock with a thick coral-red rim and a cream face with simple hands, straight front view |
| decor_shelf.png | a small wooden wall shelf with a few chunky colorful books and a tiny potted plant on it, straight front view |
| decor_starlamp.png | a chunky glowing yellow star-shaped hanging lamp on a thin cord with the cord visible at the top, soft warm glow, straight front view |
| decor_rugpink.png | a round pink woven rug with concentric rings in two shades of pink and a soft tufted texture, high three-quarter view, the rug fills the frame width |
| decor_rugblue.png | an oval dusty-blue woven rug with concentric rings in two blues and a small yellow star in the middle, high three-quarter view, the rug fills the frame width |
| decor_house.png | a cute chunky wooden pet house with a pitched terracotta roof and a round arched doorway, three-quarter view |
| decor_post.png | a tall cat scratching post wrapped in cream sisal rope on a wooden base with a red ball on top, three-quarter view |
| decor_aqua.png | a small rounded glass aquarium on a wooden stand with blue water, one golden fish, green seaweed and a few bubbles, straight front view |

### Темы комнаты (3 штуки × день и ночь)
Игра берёт `bg_<тема>.webp` и `bg_<тема>_night.webp`, только если есть **оба** файла. Пока их нет, тема даёт цветокор и частицы (снег, лепестки, звёзды).

**Шаг 1. День.** Новый чат, **прикрепи `bg_room.png`**. Сохрани как `bg_winter.png`, `bg_spring.png`, `bg_space.png`. Подставь тему вместо `[THEME]`
```
Using the attached image as the exact reference (same room, same composition, same camera angle, same furniture and props in the same places, same stylized 3D animated feature-film rendering, same empty floor area), change only the seasonal theme to [THEME]. Keep the interior warm and cozy with warm cream and peach shadows, never gray or bluish ones. Keep the top 15% calm and the lower center empty. No characters, no animals, no text. Vertical 9:16 format.
```
Значения `[THEME]`
- winter: `winter: snow and a frosty rim on the window, fluffy snowdrifts outside, a few white and blue knitted accents on the pillows, tiny snowflakes in the glass`
- spring: `spring: a blossoming cherry branch outside the window with soft pink petals, a fresh pastel green sky, a small vase of tulips standing on the wooden crate`
- space: `space: the window shows a deep violet cosmos with a ringed planet and soft nebula, small glowing star stickers on the wall, cool violet tint in the shadows with the warm bulbs still glowing`

**Шаг 2. Ночь.** Новый чат, **прикрепи день этой темы** (например `bg_winter.png`). Сохрани как `bg_winter_night.png` и т. д.
```
Using the attached image as the exact reference (same room, same composition, same camera angle, same furniture and objects in the same places, same stylized 3D animated feature-film rendering, same empty floor area), change only the time of day to night: the window shows a deep blue starry night in the same seasonal theme, the wall and floor turn into soft muted indigo and violet tones, the only light comes from the warm string bulbs and a faint cool moonlight patch on the floor, cozy and calm, still soft and clean with no harsh shadows. Keep the top 15% calm and the lower center empty. No characters, no animals, no text. Vertical 9:16 format.
```
Обработка: `bg_*` кладутся в `raw_bg/`, затем `python3 prepare_assets.py raw_bg assets`.

### Образы для питомца (шапка, очки, бант)
Образ показывается как отдельный файл спрайта. Нужны минимум `happy` всех трёх стадий, лучше все 12 спрайтов, иначе в других позах будет виден обычный кот без образа. В магазине образ появляется, когда есть `<вид>_<окрас>_3_happy_<образ>.webp`.

Один чат на один образ. Прикрепляй исходный спрайт (после P-RELIGHT), сохраняй как `<имя спрайта>_<образ>.png`, например `cat_0_3_happy_hat.png`, `cat_0_2_sad_glasses.png`.

**P-HAT** (суффикс `_hat`)
```
Using the attached image as the exact reference, keep everything identical: same character, same pose, same camera angle, same expression, same fur, same scarf if there is one, same warm lighting and warm shadows, same plain flat mid-gray background (#808080). Add only one thing: a small cute party hat in pink with a golden pom-pom on top of the head, tilted slightly, sitting between the ears without covering the eyes. Do not change anything else. Square 1:1.
```

**P-GLASSES** (суффикс `_glasses`)
```
Using the attached image as the exact reference, keep everything identical: same character, same pose, same camera angle, same expression, same fur, same scarf if there is one, same warm lighting and warm shadows, same plain flat mid-gray background (#808080). Add only one thing: a pair of round thin dark-brown glasses with clear lenses sitting on the nose in front of the eyes. For a sleeping pose, put them folded or slightly slipped down the nose. Do not change anything else. Square 1:1.
```

**P-BOW** (суффикс `_bow`)
```
Using the attached image as the exact reference, keep everything identical: same character, same pose, same camera angle, same expression, same fur, same scarf if there is one, same warm lighting and warm shadows, same plain flat mid-gray background (#808080). Add only one thing: a soft red bow with a small golden center on one side of the head near an ear. Do not change anything else. Square 1:1.
```

### Платные окрасы
Окрас 1 и 2 из разделов про кота, щенка и хомяка продаются в магазине как «Новый окрас», если для вида уже есть настоящие спрайты. Для продажи нужны минимум `<вид>_<окрас>_1_happy` и `<вид>_<окрас>_3_happy`, лучше все 12. Для видов без спрайтов (пёс и хомяк пока) все три окраса остаются бесплатными, как раньше.

## Если Gemini ошибается
- **Стадия выглядит взрослой.** Сначала сделай малыша, затем используй P-MID с двумя прикреплёнными картинками. Игра сама масштабирует стадии (малыш 62%, подросток 80%, взрослый 100%), так что размер на картинке важен меньше, чем пропорции: большая голова, короткие ноги, детское лицо.
- **У малыша появился шарф, или шарф стал другого цвета.** Допиши: `No scarf at all.` (для малыша) или `The scarf must be red, exactly as in the reference.` (для подростка и взрослого).
- **Поза или ракурс поплыли.** Допиши в конец промпта: `Keep exactly the same pose and camera angle as the attached image.`
- **Появились пол, тень или предметы.** Допиши: `No floor, no shadow, no props, plain flat gray background.`
- **Стиль дрейфует.** Открой новый чат, прикрепи лучший файл героя и повтори промпт.
- **Серый фон плохо вырезается.** Допиши: `Plain flat mid-gray background (#808080).`
- **После P-RELIGHT тени всё ещё серые.** Допиши: `The shadows must read clearly warm: cream, beige and peach, with no gray or blue left anywhere in the fur.`
- **После P-RELIGHT кот стал жёлтым или грязным.** Допиши: `Keep the fur white and clean, warm only the shadow areas and the reflected light, lighter touch.`
- **Оттенок теней плавает от файла к файлу.** Прикрепи вторым изображением первый удачный результат и допиши: `Match the shadow and reflected-light colors of image 2.`
- **P-RELIGHT изменил позу, мордочку или шарф.** Открой новый чат и повтори, добавив в начало: `Do not redraw anything, only recolor the lighting.`

## Порядок работы, чтобы не тратить лишнее
1. Герой котёнка, окрас 0. Положи `cat_0_3_happy.png` в `assets/` и посмотри, как стиль выглядит в игре.
2. Остальные шаги котёнка, окрас 0 (шаги 2–12).
3. Щенок и хомяк, окрас 0.
4. Дополнительные окрасы и фон.
