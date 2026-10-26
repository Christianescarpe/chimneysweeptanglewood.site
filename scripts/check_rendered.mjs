import fs from 'fs';

const html = fs.readFileSync('scripts/rendered_tanglewood.html', 'utf8');
const links = [...html.matchAll(/<a[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi)];
console.log('Total links in rendered page:', links.length);

console.log('\n--- ALL LINKS WITH THEIR CONTAINERS ---');
links.forEach(l => {
  const href = l[1];
  const text = l[2].trim().replace(/\s+/g, ' ');
  console.log(`href: ${href.padEnd(35)} text: "${text}"`);
});
