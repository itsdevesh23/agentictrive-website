import fs from 'fs';

const svg = fs.readFileSync('public/agentictrive_logo.svg', 'utf8');

// Crop viewBox to focus on the 3D Growth Arrow Icon
const iconSvg = svg.replace(/viewBox="0 0 1500 1499.999933"/g, 'viewBox="320 200 860 760"');

fs.writeFileSync('public/agentictrive_icon.svg', iconSvg);
fs.writeFileSync('src/assets/agentictrive_icon.svg', iconSvg);

console.log('✅ agentictrive_icon.svg created successfully!');
