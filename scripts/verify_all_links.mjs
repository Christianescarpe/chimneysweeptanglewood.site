import fs from 'fs';

const raw = fs.readFileSync('./src/data/site-data.json', 'utf8');
const data = JSON.parse(raw);

console.log('=== ALL 10 SERVICES LINKS ===');
data.services.forEach(s => {
  console.log(`\nService: ${s.title}`);
  console.log(`  Slug: ${s.slug}`);
  console.log(`  Internal Links:`, JSON.stringify(s.internalLinks));
  console.log(`  External Link:`, JSON.stringify(s.externalLink));
});

console.log('\n=== ALL 10 LOCATIONS LINKS ===');
data.locations.forEach(l => {
  console.log(`\nLocation: ${l.title}`);
  console.log(`  Slug: ${l.slug}`);
  console.log(`  Internal Links:`, JSON.stringify(l.internalLinks));
  console.log(`  External Link:`, JSON.stringify(l.externalLink));
});
