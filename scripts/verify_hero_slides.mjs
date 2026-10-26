async function verifyHeroSlides() {
  const urls = [
    'http://localhost:3000/',
    'http://localhost:3000/tanglewood-fort-worth-tx/',
    'http://localhost:3000/chimney-cleaning/'
  ];

  for (const url of urls) {
    const res = await fetch(url);
    const html = await res.text();
    console.log(`\n========================================`);
    console.log(`Testing: ${url} (Status: ${res.status})`);
    const hasOpacity70 = html.includes('opacity-70');
    const hasSlideImages = html.includes('Embercrest Chimney Background Slide') || html.includes('chimney-on-a-shingled-roof');
    const hasIndicators = html.includes('Go to slide');
    console.log(`  Has opacity-70 container: ${hasOpacity70}`);
    console.log(`  Has background slide images: ${hasSlideImages}`);
    console.log(`  Has slide navigation dots: ${hasIndicators}`);
  }
}

verifyHeroSlides();
