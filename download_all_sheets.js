const https = require('https');
const fs = require('fs');

const sheetId = '1-ky0lPW4QnBZYAM_XIGora69cGz68nZzU3Ar3sXeu7o';

const sheets = [
  { name: 'pages', gid: '797744246' },
  { name: 'locations', gid: '1189207332' },
  { name: 'blogs', gid: '1873594461' },
  { name: 'notes', gid: '525731228' }
];

function download(gid, filename) {
  return new Promise((resolve, reject) => {
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;
    function fetchUrl(u) {
      https.get(u, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
        }
      }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return fetchUrl(res.headers.location);
        }
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          fs.writeFileSync(filename, data, 'utf8');
          console.log(`Saved ${filename} (${data.length} bytes)`);
          resolve();
        });
      }).on('error', reject);
    }
    fetchUrl(url);
  });
}

async function run() {
  for (const s of sheets) {
    await download(s.gid, `sheet_${s.name}.csv`);
  }
  console.log('All sheets downloaded!');
}

run().catch(console.error);
