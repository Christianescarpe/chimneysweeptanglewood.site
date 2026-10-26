import fs from 'fs';

const raw = fs.readFileSync('./src/data/site-data.json', 'utf8');
const data = JSON.parse(raw);

console.log('--- LOCATION PAGES LINKS ---');
data.locations.forEach(loc => {
  console.log(`\nLocation: ${loc.title} (${loc.slug})`);
  console.log(`  Internal Links array:`, loc.internalLinks);
  console.log(`  External Link:`, loc.externalLink);
  const matches = [...loc.contentHtml.matchAll(/<a[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi)];
  console.log(`  Links in contentHtml (${matches.length}):`);
  matches.forEach(m => console.log(`    href: "${m[1]}" -> text: "${m[2].trim()}"`));
});

console.log('\n--- SERVICE PAGES LINKS ---');
data.services.slice(0, 3).forEach(srv => {
  console.log(`\nService: ${srv.title} (${srv.slug})`);
  console.log(`  Internal Links array:`, srv.internalLinks);
  console.log(`  External Link:`, srv.externalLink);
  const matches = [...srv.contentHtml.matchAll(/<a[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi)];
  console.log(`  Links in contentHtml (${matches.length}):`);
  matches.forEach(m => console.log(`    href: "${m[1]}" -> text: "${m[2].trim()}"`));
});
