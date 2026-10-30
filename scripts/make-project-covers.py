"""Create top-cropped project covers; full screenshots remain untouched."""
from pathlib import Path
from PIL import Image

source = Path(__file__).resolve().parents[1] / 'public' / 'screenshots'
target = source / 'covers'
target.mkdir(exist_ok=True)
names = ['fibrado-gym', 'jhonees-fitness',
         'garota-fitness', 'studio-zero-7']
for name in names:
    with Image.open(source / f'{name}.png') as original:
        width, height = original.size
        crop = original.crop((0, 0, width, min(height, round(width * .75))))
        crop.convert('RGB').resize((800, 600), Image.Resampling.LANCZOS).save(
            target / f'{name}.webp', quality=82, method=6)
print(f'{len(names)} covers: {sum(p.stat().st_size for p in target.glob("*.webp")):,} bytes')
