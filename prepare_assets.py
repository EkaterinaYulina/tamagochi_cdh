#!/usr/bin/env python3
"""Подготовка спрайтов для игры.

Использование:
    python3 prepare_assets.py <папка_с_исходниками> <папка_assets> [--rembg]

Что делает: (опционально) убирает фон через rembg, обрезает прозрачные поля,
уменьшает до 768 px по длинной стороне (предметы decor_* до 512 px), сохраняет как WebP с прозрачностью.
Имена файлов сохраняются: cat_0_3_happy.png -> cat_0_3_happy.webp
"""
import sys
from pathlib import Path
from PIL import Image

MAX_SIDE = 768
DECOR_SIDE = 512
BG_WIDTH = 768
EXT = {".png", ".jpg", ".jpeg", ".webp"}


def process(src: Path, dst: Path, use_rembg: bool) -> None:
    im = Image.open(src).convert("RGBA")
    if use_rembg:
        from rembg import remove
        im = remove(im)
    alpha = im.getchannel("A")
    if alpha.getextrema()[0] == 255:
        print(f"  ! {src.name}: нет прозрачности, фон не убран (запусти с --rembg)")
    bbox = alpha.point(lambda a: 255 if a > 8 else 0).getbbox()
    if bbox:
        im = im.crop(bbox)
    side = DECOR_SIDE if src.stem.startswith("decor_") else MAX_SIDE
    im.thumbnail((side, side), Image.LANCZOS)
    im.save(dst, "WEBP", quality=88, method=6)
    print(f"  {src.name} -> {dst.name}  {im.size[0]}x{im.size[1]}  {dst.stat().st_size // 1024} KB")


def process_bg(src: Path, dst: Path) -> None:
    """Фоны (bg_*): без удаления фона и обрезки, только ресайз по ширине."""
    im = Image.open(src).convert("RGB")
    if im.width > BG_WIDTH:
        im = im.resize((BG_WIDTH, round(im.height * BG_WIDTH / im.width)), Image.LANCZOS)
    im.save(dst, "WEBP", quality=84, method=6)
    print(f"  {src.name} -> {dst.name}  {im.size[0]}x{im.size[1]}  {dst.stat().st_size // 1024} KB")


def main() -> None:
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    use_rembg = "--rembg" in sys.argv
    if len(args) != 2:
        print(__doc__)
        sys.exit(1)
    src_dir, dst_dir = Path(args[0]), Path(args[1])
    dst_dir.mkdir(parents=True, exist_ok=True)
    files = sorted(p for p in src_dir.iterdir() if p.suffix.lower() in EXT)
    if not files:
        print("В папке нет изображений")
        sys.exit(1)
    for f in files:
        if f.stem.startswith("bg_"):
            process_bg(f, dst_dir / (f.stem + ".webp"))
        else:
            process(f, dst_dir / (f.stem + ".webp"), use_rembg)


if __name__ == "__main__":
    main()
