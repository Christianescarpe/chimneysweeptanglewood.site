import fs from 'fs';

const files = [
  'src/app/services/page.tsx', 
  'src/app/locations/page.tsx', 
  'src/app/blog/page.tsx', 
  'src/app/contact/page.tsx', 
  'src/app/layout.tsx', 
  'src/app/page.tsx'
];

files.forEach(f => {
  const code = fs.readFileSync(f, 'utf8');
  const titleMatch = code.match(/title:\s*({[\s\S]*?}|['"`][\s\S]*?['"`])/);
  console.log(`\n=== ${f} ===`);
  console.log(titleMatch ? titleMatch[0] : 'None');
});
