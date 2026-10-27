import fs from 'fs';

const pagesToTest = [
  '.next/server/app/index.html',
  '.next/server/app/contact.html',
  '.next/server/app/services.html',
  '.next/server/app/locations.html',
  '.next/server/app/chimney-cleaning.html',
  '.next/server/app/tanglewood-fort-worth-tx.html',
  '.next/server/app/blog/how-often-to-clean-chimney-north-texas.html'
];

pagesToTest.forEach(p => {
  if (fs.existsSync(p)) {
    const html = fs.readFileSync(p, 'utf8');
    const titleMatch = html.match(/<title>(.*?)<\/title>/i);
    console.log(`${p}:`);
    console.log(`  <title>${titleMatch ? titleMatch[1] : 'NONE'}</title>`);
  } else {
    console.log(`${p} not found directly, checking .rsc or subfolder...`);
  }
});
