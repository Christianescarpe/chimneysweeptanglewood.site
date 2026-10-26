import fs from 'fs';

const csv = fs.readFileSync('sheet_locations.csv', 'utf8');
const lines = csv.split('\n');
console.log('Header:', lines[0]);
console.log('Row 1 snippet:');
console.log(lines[1].slice(0, 500));
