const fs = require('fs');

// We need a proper CSV parser because the Page content (HTML) has multiline strings and quotes
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

const files = ['sheet_pages.csv', 'sheet_locations.csv', 'sheet_blogs.csv', 'sheet_notes.csv'];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const rows = parseCSV(content);
  console.log(`\n================== ${file} ==================`);
  console.log(`Total rows: ${rows.length}`);
  if (rows.length > 0) {
    console.log('Headers:', rows[0]);
    for (let r = 1; r < rows.length; r++) {
      const row = rows[r];
      if (row.length <= 1 && !row[0]) continue;
      // print summary of row
      console.log(`Row ${r}: type="${row[1]}" | title="${row[2]}" | slug="${row[7]}" | contentLen=${(row[row.length - 1] || '').length}`);
    }
  }
}
