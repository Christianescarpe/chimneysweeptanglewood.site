import dns from 'dns';
import https from 'https';

console.log('Resolving DNS for chimneysweeptanglewood.site and www.chimneysweeptanglewood.site...');

dns.resolve4('chimneysweeptanglewood.site', (err, addresses) => {
  console.log('chimneysweeptanglewood.site A records:', err ? err.message : addresses);
});

dns.resolve4('www.chimneysweeptanglewood.site', (err, addresses) => {
  console.log('www.chimneysweeptanglewood.site A records:', err ? err.message : addresses);
});

dns.resolveCname('www.chimneysweeptanglewood.site', (err, addresses) => {
  console.log('www.chimneysweeptanglewood.site CNAME records:', err ? err.message : addresses);
});

dns.resolveNs('chimneysweeptanglewood.site', (err, addresses) => {
  console.log('chimneysweeptanglewood.site NS records:', err ? err.message : addresses);
});
