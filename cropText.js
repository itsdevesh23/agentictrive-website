import fs from 'fs';

const svg = fs.readFileSync('public/agentictrive_logo.svg', 'utf8');

// Crop viewBox to focus on the AGENTICTRIVE logo text (middle part)
const textSvg = svg.replace(/viewBox="0 0 1500 1499.999933"/g, 'viewBox="100 950 1300 250"');
fs.writeFileSync('public/agentictrive_text.svg', textSvg);
fs.writeFileSync('src/assets/agentictrive_text.svg', textSvg);

// Crop viewBox to include icon + text (omitting the bottom tagline)
const horizontalSvg = svg.replace(/viewBox="0 0 1500 1499.999933"/g, 'viewBox="100 180 1300 1050"');
fs.writeFileSync('public/agentictrive_brand.svg', horizontalSvg);
fs.writeFileSync('src/assets/agentictrive_brand.svg', horizontalSvg);

console.log('✅ agentictrive_text.svg and agentictrive_brand.svg created!');
