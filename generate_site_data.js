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

const pagesRows = parseCSV(fs.readFileSync('sheet_pages.csv', 'utf8'));
const locationsRows = parseCSV(fs.readFileSync('sheet_locations.csv', 'utf8'));
const blogsRows = parseCSV(fs.readFileSync('sheet_blogs.csv', 'utf8'));
const manifest = JSON.parse(fs.readFileSync('public/images/manifest.json', 'utf8'));

// Filter out header
const pagesData = pagesRows.slice(1).filter(r => r[1]);
const locationsData = locationsRows.slice(1).filter(r => r[1]);
const blogsData = blogsRows.slice(1).filter(r => r[1]);

// List of locations with active links
const locationLinksHtml = locationsData.map(r => `<a href="${r[7]}" class="location-link">${r[2].replace('Chimney Sweep in ', '')}</a>`).join(' • ');

function cleanAndPreserveHtml(row) {
  let html = row[17] || '';

  // 1. Replace [List only the nearby cities you actually serve...] with actual location links
  html = html.replace(/\[List only the nearby cities you actually serve[^\]]*\]/g, locationLinksHtml);

  // 2. Remove editorial brackets cleanly without touching any content or links
  html = html.replace(/\[Add your real qualifications[^\]]*\]/g, '');
  html = html.replace(/\[Confirm exact repair services[^\]]*\]/g, '');
  html = html.replace(/\[Confirm this list matches[^\]]*\]/g, '');
  html = html.replace(/\[Specify which fireplace types[^\]]*\]/g, '');
  html = html.replace(/\[Add a typical range[^\]]*\]/g, '');
  html = html.replace(/\[Add pricing[^\]]*\]/g, '');
  html = html.replace(/\[Confirm which inspection levels[^\]]*\]/g, '');
  html = html.replace(/\[Confirm whether you provide[^\]]*\]/g, '');
  html = html.replace(/\[Confirm the fireplace types[^\]]*\]/g, '');
  html = html.replace(/\[Confirm exact repair warranties[^\]]*\]/g, '');
  html = html.replace(/\[[^\]]+\]/g, '');

  // 3. Ensure external link is present if specified in column 14 & 15 and not yet in html
  const extAnchor = row[14];
  const extLink = row[15];
  if (extAnchor && extLink && !html.includes(extLink)) {
    html += `\n<p>For more information, visit the <a href="${extLink}" target="_blank" rel="noopener noreferrer">${extAnchor}</a>.</p>`;
  }

  return html.trim();
}

function mapRow(row, defaultType, imgIndex) {
  const internalLinks = [];
  if (row[8] && row[9]) internalLinks.push({ anchor: row[8], link: row[9] });
  if (row[10] && row[11]) internalLinks.push({ anchor: row[10], link: row[11] });
  if (row[12] && row[13]) internalLinks.push({ anchor: row[12], link: row[13] });

  const externalLink = (row[14] && row[15]) ? { anchor: row[14], link: row[15] } : null;
  const image = manifest[imgIndex % manifest.length].path;

  return {
    id: row[0],
    type: row[1] || defaultType,
    title: row[2],
    seoTitle: row[3],
    metaDescription: row[5],
    slug: row[7],
    internalLinks,
    externalLink,
    wordCount: row[16],
    contentHtml: cleanAndPreserveHtml(row),
    image
  };
}

const services = [];
let homepage = null;

pagesData.forEach((row, i) => {
  const item = mapRow(row, 'Service', i);
  if (item.slug === '/' || item.type === 'Homepage') {
    homepage = item;
  } else {
    services.push(item);
  }
});

const locations = locationsData.map((row, i) => mapRow(row, 'Location Page', i + 4));
const blogs = blogsData.map((row, i) => mapRow(row, 'Blog Post', i + 10));

const business = {
  name: "Embercrest Chimney Sweep Tanglewood",
  tagline: "Professional Chimney Sweep in Fort Worth, TX",
  phone: "(682) 350-5722",
  phoneRaw: "+16823505722",
  address: "2925 Riverglen Dr, Fort Worth, TX 76109, United States",
  mapIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.120849093327!2d-97.389618!3d32.7094163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x81af90151c640691%3A0x7da6a4d7eaaf5b35!2sEmbercrest%20Chimney%20Sweep%20Tanglewood!5e0!3m2!1sen!2sph!4v1792998318292!5m2!1sen!2sph" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>`
};

const allData = {
  business,
  homepage,
  services,
  locations,
  blogs
};

const srcDataDir = path.join(__dirname, 'src', 'data');
if (!fs.existsSync(srcDataDir)) {
  fs.mkdirSync(srcDataDir, { recursive: true });
}

fs.writeFileSync(path.join(srcDataDir, 'site-data.json'), JSON.stringify(allData, null, 2), 'utf8');
console.log('Successfully generated src/data/site-data.json with ALL anchors and links preserved!');
