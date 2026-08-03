import fs from 'fs';
import path from 'path';

const PAGES_DIR = './src/pages';
const files = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(PAGES_DIR, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace style="font-variation-settings: 'FILL' 1;"
  // with style={{ fontVariationSettings: "'FILL' 1" }}
  content = content.replace(/style="font-variation-settings:\s*'FILL'\s*1;?"/g, `style={{ fontVariationSettings: "'FILL' 1" }}`);
  
  // Just in case, catch any other style="..."
  // but it's dangerous without a proper parser. We know the specific one though.

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated styles in ${file}`);
});
