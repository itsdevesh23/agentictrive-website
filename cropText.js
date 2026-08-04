import fs from 'fs';

const svg = fs.readFileSync('public/agentictrive_logo.svg', 'utf8');

// Tightly crop ONLY the AGENTICTRIVE text line (x: 120, y: 980, w: 1260, h: 140)
const textSvg = svg.replace(/viewBox="0 0 1500 1499.999933"/g, 'viewBox="120 980 1260 140"');

fs.writeFileSync('public/agentictrive_text.svg', textSvg);
fs.writeFileSync('src/assets/agentictrive_text.svg', textSvg);

console.log('✅ Tightly cropped AGENTICTRIVE text SVG generated!');
