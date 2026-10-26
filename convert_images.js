const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = 'D:\\images\\chimney';
const destDir = path.join(__dirname, 'public', 'images', 'chimney');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

async function convertAll() {
  const files = fs.readdirSync(srcDir);
  console.log(`Found ${files.length} images to convert.`);

  const manifest = [];

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') continue;

    const baseName = path.basename(file, path.extname(file));
    // Create clean shorter alias for easy reference
    const outName = `${baseName}.webp`;
    const inPath = path.join(srcDir, file);
    const outPath = path.join(destDir, outName);

    console.log(`Converting ${file} -> ${outName}...`);
    const start = Date.now();

    // Optimize: max width 1920, quality 80
    await sharp(inPath)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 80, effort: 4 })
      .toFile(outPath);

    const stat = fs.statSync(outPath);
    console.log(`Done in ${Date.now() - start}ms (${(stat.size / 1024).toFixed(1)} KB)`);

    manifest.push({
      original: file,
      webp: outName,
      path: `/images/chimney/${outName}`,
      sizeKb: (stat.size / 1024).toFixed(1)
    });
  }

  fs.writeFileSync(path.join(__dirname, 'public', 'images', 'manifest.json'), JSON.stringify(manifest, null, 2));
  console.log(`Successfully converted ${manifest.length} images to webp.`);
}

convertAll().catch(console.error);
