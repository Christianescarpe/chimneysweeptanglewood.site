import fs from 'fs';

const raw = fs.readFileSync('./src/data/site-data.json', 'utf8');
const data = JSON.parse(raw);

async function verifyAll() {
  console.log('=== VERIFYING ALL 10 LOCATION PAGES ===');
  for (const loc of data.locations) {
    const url = `http://localhost:3000${loc.slug}`;
    const res = await fetch(url);
    const html = await res.text();
    
    // Check internal links
    const internalLinksFound = loc.internalLinks.every(il => html.includes(il.link));
    // Check external link
    const externalLinkFound = html.includes(loc.externalLink.link);
    // Check reference directory
    const hasDirectory = html.includes('Reference Directory');

    console.log(`[${res.status}] ${loc.slug.padEnd(35)} | Internal: ${internalLinksFound} | External: ${externalLinkFound} | Directory: ${hasDirectory}`);
  }

  console.log('\n=== VERIFYING ALL 10 SERVICE PAGES ===');
  for (const srv of data.services) {
    const url = `http://localhost:3000${srv.slug}`;
    const res = await fetch(url);
    const html = await res.text();
    
    // Check 2-column sections
    const hasTwoCol = html.includes('lg:grid-cols-12 gap-12 items-center');
    // Check internal links
    const internalLinksFound = srv.internalLinks.every(il => html.includes(il.link));
    // Check external link
    const externalLinkFound = html.includes(srv.externalLink.link);

    console.log(`[${res.status}] ${srv.slug.padEnd(30)} | 2-Col Grid: ${hasTwoCol} | Internal: ${internalLinksFound} | External: ${externalLinkFound}`);
  }
}

verifyAll();
