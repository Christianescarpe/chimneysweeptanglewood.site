import fs from 'fs';

const raw = fs.readFileSync('./src/data/site-data.json', 'utf8');
const data = JSON.parse(raw);
const loc = data.locations[0];
console.log('=== Tanglewood contentHtml ===');
console.log(loc.contentHtml);
