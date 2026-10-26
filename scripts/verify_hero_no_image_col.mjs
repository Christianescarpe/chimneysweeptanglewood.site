async function verifyNoHeroImageColumn() {
  const pages = [
    'http://localhost:3000/',
    'http://localhost:3000/tanglewood-fort-worth-tx/',
    'http://localhost:3000/chimney-cleaning/'
  ];

  for (const url of pages) {
    const res = await fetch(url);
    const html = await res.text();
    console.log(`\n========================================`);
    console.log(`Testing: ${url} (Status: ${res.status})`);
    
    // Find hero section
    const heroMatch = html.match(/<section[^>]*class=["'][^"']*overflow-hidden[^"']*["'][^>]*>([\s\S]*?)<\/section>/i);
    if (heroMatch) {
      const heroHtml = heroMatch[1];
      const hasRightImageCol = heroHtml.includes('lg:col-span-5');
      const hasCenteredContent = heroHtml.includes('max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center');
      const hasBackgroundSlides = heroHtml.includes('opacity-70');
      console.log(`  Hero right image column removed: ${!hasRightImageCol}`);
      console.log(`  Hero centered content present: ${hasCenteredContent}`);
      console.log(`  Hero background slides (70% opacity) present: ${hasBackgroundSlides}`);
    } else {
      console.log('  Hero section match not found!');
    }
  }
}

verifyNoHeroImageColumn();
