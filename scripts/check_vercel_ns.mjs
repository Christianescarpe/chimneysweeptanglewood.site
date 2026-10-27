import dns from 'dns';

dns.resolve4('ns1.vercel-dns.com', (err, nsIps) => {
  if (err) {
    console.error('Failed to resolve ns1.vercel-dns.com:', err);
    return;
  }
  console.log('ns1.vercel-dns.com IP:', nsIps[0]);
  const resolver = new dns.Resolver();
  resolver.setServers([nsIps[0]]);
  resolver.resolve4('chimneysweeptanglewood.site', (err, addrs) => {
    console.log('Vercel NS response for apex:', err ? err.message : addrs);
  });
  resolver.resolve4('www.chimneysweeptanglewood.site', (err, addrs) => {
    console.log('Vercel NS response for www:', err ? err.message : addrs);
  });
});
