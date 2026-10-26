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

for (let i = 0; i < locsRows.length; i++) {
  const row = locsRows[i];
  const html = row[17];
  console.log(`\nLocation ${i + 1}: ${row[2]} (${row[7]})`);
  console.log(`  Col IA1: [${row[8]}](${row[9]})`);
  console.log(`  Col IA2: [${row[10]}](${row[11]})`);
  console.log(`  Col IA3: [${row[12]}](${row[13]})`);
  console.log(`  Col EA:  [${row[14]}](${row[15]})`);

  const linksInHtml = [...html.matchAll(/<a\s+[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi)];
  console.log(`  Total links in raw HTML: ${linksInHtml.length}`);
  for (const m of linksInHtml) {
    console.log(`    - [${m[2].trim()}](${m[1]})`);
  }
}
