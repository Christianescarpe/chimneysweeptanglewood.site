import fs from 'fs';

const files = fs.readdirSync('public/images/chimney');
console.log('Total chimney images:', files.length);
files.forEach((f, i) => console.log(`  [${i}] ${f}`));
