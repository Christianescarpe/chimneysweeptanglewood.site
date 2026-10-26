import fs from 'fs';

const html = fs.readFileSync('scripts/rendered_tanglewood.html', 'utf8');
const srvIdx = html.indexOf('Specialized Solutions');
if (srvIdx !== -1) {
  console.log(html.slice(srvIdx - 100, srvIdx + 1500));
} else {
  console.log('Not found');
}
