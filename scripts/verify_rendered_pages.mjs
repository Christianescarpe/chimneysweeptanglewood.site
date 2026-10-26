import fs from 'fs';

async function testPages() {
  const testUrls = [
    'http://localhost:3000/tanglewood-fort-worth-tx/',
    'http://localhost:3000/overton-park-fort-worth-tx/',
    'http://localhost:3000/chimney-cleaning/',
    'http://localhost:3000/chimney-caps/'
  ];

  for (const url of testUrls) {
    const res = await fetch(url);
    const html = await res.text();
    console.log(`\n========================================`);
    console.log(`TEST: ${url} (Status: ${res.status}, Length: ${html.length})`);

    if (url.includes('-fort-worth-tx')) {
      // Check location page anchors
      const hasDirectory = html.includes('Reference Directory');
      const hasInternalAnchors = html.includes('/chimney-cleaning/') && html.includes('/chimney-inspection/') && html.includes('/chimney-repair/');
      const hasCsiaOrNfpa = html.includes('csia.org') || html.includes('nfpa.org');
      console.log(`  Reference Directory Section: ${hasDirectory}`);
      console.log(`  Internal Anchors (/chimney-cleaning/, /chimney-inspection/, /chimney-repair/): ${hasInternalAnchors}`);
      console.log(`  External Link (CSIA/NFPA): ${hasCsiaOrNfpa}`);
      
      // Look for anchor links
      const anchorMatches = [...html.matchAll(/<a[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi)];
      const filtered = anchorMatches.filter(m => m[1].includes('chimney') || m[1].includes('csia') || m[1].includes('nfpa'));
      console.log(`  Total Service/Safety Anchors found: ${filtered.length}`);
      filtered.slice(0, 8).forEach(m => console.log(`    href: "${m[1]}" text: "${m[2].trim().replace(/\s+/g, ' ').replace(/<[^>]+>/g, '')}"`));
    } else {
      // Check service page 2-column layout and images
      const hasTwoColGrid = html.includes('lg:grid-cols-12 gap-12 items-center');
      const hasServiceLinks = html.includes('Service Navigation &amp; Guidance') || html.includes('Service Navigation & Guidance');
      const imagesFound = [...html.matchAll(/<img[^>]*src=["']([^"']*)["'][^>]*>/gi)];
      console.log(`  Has 2-column grid: ${hasTwoColGrid}`);
      console.log(`  Has Service Links Section: ${hasServiceLinks}`);
      console.log(`  Total <img> elements rendered: ${imagesFound.length}`);
    }
  }
}

testPages();
