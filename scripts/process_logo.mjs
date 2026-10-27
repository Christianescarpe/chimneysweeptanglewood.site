import sharp from 'sharp';
import fs from 'fs';

const inputPath = 'C:/Users/Christian/.gemini/antigravity/brain/d20bddf7-52b3-4904-a43c-98d6d2c72519/.user_uploaded/media_1793070676577_1189de11.png';

async function inspectAndOptimize() {
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  console.log('Original Logo Metadata:', metadata);

  // Ensure public/images/ directory exists
  if (!fs.existsSync('public/images')) {
    fs.mkdirSync('public/images', { recursive: true });
  }

  // 1. High-resolution optimized WebP for Navbar and Footer (lossless or high-quality WebP with transparency)
  // Let's create multiple sizes:
  // - public/images/logo.webp (original aspect ratio, max width ~800 for high DPI)
  // - public/images/logo-sm.webp (height ~120 for fast loading on nav/mobile)
  // - public/favicon.ico or public/images/icon.png for browser tab icon

  await sharp(inputPath)
    .resize({ width: 800, withoutEnlargement: true })
    .webp({ quality: 95, effort: 6 })
    .toFile('public/images/logo.webp');
  console.log('Created public/images/logo.webp');

  await sharp(inputPath)
    .resize({ width: 400, withoutEnlargement: true })
    .webp({ quality: 90, effort: 6 })
    .toFile('public/images/logo-sm.webp');
  console.log('Created public/images/logo-sm.webp');

  // Also an optimized transparent PNG fallback
  await sharp(inputPath)
    .resize({ width: 600, withoutEnlargement: true })
    .png({ compressionLevel: 9, effort: 10 })
    .toFile('public/images/logo.png');
  console.log('Created public/images/logo.png');

  // Also create icon for favicon
  await sharp(inputPath)
    .resize({ width: 192, height: 192, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('public/icon.png');
  console.log('Created public/icon.png');

  // Also copy to src/app/icon.png so Next.js automatically uses it as app icon / favicon!
  fs.copyFileSync('public/icon.png', 'src/app/icon.png');
  console.log('Copied to src/app/icon.png');
}

inspectAndOptimize();
