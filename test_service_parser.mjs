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

const pagesRows = parseCSV(fs.readFileSync('sheet_pages.csv', 'utf8')).slice(1).filter(r => r[1]);

// Let's inspect how to cleanly split a service page into:
// 1. Hero (H1 + intro paragraph + cta paragraph)
// 2. Sections based on <h2>
function parseServiceHtml(html) {
  // Extract H1
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h1 = h1Match ? h1Match[1].trim() : '';

  // Content before first H2 is hero intro
  const firstH2Idx = html.indexOf('<h2');
  let heroContent = '';
  let bodyContent = html;
  if (firstH2Idx !== -1) {
    heroContent = html.slice(0, firstH2Idx).replace(/<h1[^>]*>[\s\S]*?<\/h1>/i, '').trim();
    bodyContent = html.slice(firstH2Idx);
  }

  // Split by <h2
  const h2Parts = bodyContent.split(/(?=<h2[^>]*>)/i).filter(p => p.trim());
  const sections = h2Parts.map(part => {
    const titleMatch = part.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
    const title = titleMatch ? titleMatch[1].trim() : '';
    const content = part.replace(/<h2[^>]*>[\s\S]*?<\/h2>/i, '').trim();
    return { title, content, raw: part };
  });

  return { h1, heroContent, sections };
}

for (let i = 1; i < pagesRows.length; i++) {
  const parsed = parseServiceHtml(pagesRows[i][17]);
  console.log(`\nService ${i}: ${pagesRows[i][2]}`);
  console.log(`  H1: ${parsed.h1}`);
  console.log(`  Hero content length: ${parsed.heroContent.length}`);
  console.log(`  H2 sections count: ${parsed.sections.length}`);
  console.log(`  Section titles:`, parsed.sections.map(s => s.title));
}
