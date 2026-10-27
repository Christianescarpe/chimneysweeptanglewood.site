const routes = [
  'https://www.chimneysweeptanglewood.site/',
  'https://chimneysweeptanglewood.site/',
  'https://www.chimneysweeptanglewood.site/contact/',
  'https://www.chimneysweeptanglewood.site/services/',
  'https://www.chimneysweeptanglewood.site/locations/',
  'https://www.chimneysweeptanglewood.site/chimney-cleaning/',
  'https://www.chimneysweeptanglewood.site/tanglewood-fort-worth-tx/',
  'https://www.chimneysweeptanglewood.site/blog/'
];

async function checkAll() {
  console.log('Testing live production routes...');
  for (const url of routes) {
    try {
      const res = await fetch(url, { redirect: 'follow' });
      console.log(`[${res.status}] ${url} -> final URL: ${res.url}`);
    } catch (err) {
      console.error(`[ERROR] ${url}: ${err.message}`);
    }
  }
}

checkAll();
