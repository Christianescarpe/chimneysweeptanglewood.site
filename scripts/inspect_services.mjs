import fs from 'fs';

const raw = fs.readFileSync('./src/data/site-data.json', 'utf8');
const data = JSON.parse(raw);

data.services.forEach(srv => {
  console.log(`\n========================================`);
  console.log(`SERVICE: ${srv.title} (${srv.slug})`);
  const h2Matches = [...srv.contentHtml.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)];
  console.log(`H2 Sections (${h2Matches.length}):`);
  h2Matches.forEach((m, i) => console.log(`  [${i + 1}] ${m[1].trim()}`));
});
