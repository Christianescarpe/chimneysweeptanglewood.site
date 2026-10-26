import http from 'http';

const urls = [
  '/',
  '/chimney-cleaning/',
  '/chimney-inspection/',
  '/tanglewood-fort-worth-tx/',
  '/westover-hills-tx/',
  '/blog/how-often-to-clean-chimney-north-texas/',
  '/blog/',
  '/services/',
  '/locations/'
];

function check(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${urlPath}`, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        const hasMap = body.includes('google.com/maps/embed');
        const hasPhone = body.includes('682') && body.includes('350-5722');
        const hasWebp = body.includes('.webp');
        console.log(`[${res.statusCode}] ${urlPath} (${body.length} bytes) - Map: ${hasMap}, Phone: ${hasPhone}, WebP: ${hasWebp}`);
        resolve();
      });
    }).on('error', (err) => {
      console.error(`Error on ${urlPath}:`, err.message);
      resolve();
    });
  });
}

async function run() {
  console.log('Testing site preview endpoints...');
  for (const u of urls) {
    await check(u);
  }
}

run();
