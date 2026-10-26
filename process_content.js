const fs = require('fs');
const path = require('path');

function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  let i = 0;
  while (i < text.length) {
    const char = text[i];
    const nextChar = text[i + 1];
    if (inQuotes) {
      if (char === '"' && nextChar === '"') {
        field += '"';
        i += 2;
        continue;
      } else if (char === '"') {
        inQuotes = false;
        i++;
        continue;
      } else {
        field += char;
        i++;
        continue;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
        i++;
        continue;
      } else if (char === ',') {
        row.push(field);
        field = '';
        i++;
        continue;
      } else if (char === '\r') {
        if (nextChar === '\n') i++;
        row.push(field);
        rows.push(row);
        row = [];
        field = '';
        i++;
        continue;
      } else if (char === '\n') {
        row.push(field);
        rows.push(row);
        row = [];
        field = '';
        i++;
        continue;
      } else {
        field += char;
        i++;
        continue;
      }
    }
  }
  if (field !== '' || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

const pages = parseCSV(fs.readFileSync('sheet_pages.csv', 'utf8'));
const locations = parseCSV(fs.readFileSync('sheet_locations.csv', 'utf8'));
const blogs = parseCSV(fs.readFileSync('sheet_blogs.csv', 'utf8'));

console.log('Pages count:', pages.length - 1);
console.log('Locations count:', locations.length - 1);
console.log('Blogs count:', blogs.length - 1);

function inspectBrackets(name, rows) {
  console.log(`\n=== Bracket check for ${name} ===`);
  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    if (!row || !row[1]) continue;
    const content = row[17] || '';
    const matches = content.match(/\[[^\]]+\]/g);
    if (matches) {
      console.log(`${row[7]}:`, matches);
    }
  }
}

inspectBrackets('Pages', pages);
inspectBrackets('Locations', locations);
inspectBrackets('Blogs', blogs);
