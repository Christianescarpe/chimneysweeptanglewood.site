import fs from 'fs';

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

const locsRows = parseCSV(fs.readFileSync('sheet_locations.csv', 'utf8')).slice(1).filter(r => r[1]);

for (let i = 0; i < 3; i++) {
  const row = locsRows[i];
  console.log(`\nLocation ${i + 1}: ${row[7]}`);
  const servicesMatch = row[17].match(/<section[^>]*class=["']services["'][^>]*>([\s\S]*?)<\/section>/i);
  if (servicesMatch) {
    console.log(servicesMatch[1]);
  }
}
