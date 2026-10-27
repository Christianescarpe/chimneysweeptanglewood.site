import fs from 'fs';

const data = JSON.parse(fs.readFileSync('src/data/site-data.json', 'utf8'));

console.log('--- HOMEPAGE ---');
console.log(data.homepage.seoTitle);

console.log('\n--- SERVICES ---');
data.services.forEach(s => console.log(s.seoTitle));

console.log('\n--- LOCATIONS ---');
data.locations.forEach(l => console.log(l.seoTitle));

console.log('\n--- BLOGS ---');
data.blogs.forEach(b => console.log(b.seoTitle));
