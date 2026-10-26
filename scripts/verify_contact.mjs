async function testContactPage() {
  const res = await fetch('http://localhost:3000/contact/');
  const html = await res.text();
  console.log(`Status: ${res.status}`);
  console.log(`Has Phone (682) 350-5722: ${html.includes('(682) 350-5722')}`);
  console.log(`Has Address 2925 Riverglen Dr: ${html.includes('2925 Riverglen Dr')}`);
  console.log(`Has Google Map iframe: ${html.includes('maps/embed')}`);
  console.log(`Has No Contact Form (<form>): ${!html.includes('<form')}`);
  console.log(`Has Background Slides: ${html.includes('opacity-70')}`);
}

testContactPage();
