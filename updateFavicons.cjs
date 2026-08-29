const fs = require('fs');
const sharp = require('sharp');

async function updateFavicons() {
  const iconSrc = 'src/assets/agentictrive_icon.png';
  if (!fs.existsSync(iconSrc)) {
    console.error('Missing src/assets/agentictrive_icon.png');
    return;
  }

  // Generate 64x64 PNG for favicon
  const favicon64 = await sharp(iconSrc)
    .resize(64, 64)
    .png()
    .toBuffer();

  // Generate 180x180 PNG for Apple Touch Icon
  const apple180 = await sharp(iconSrc)
    .resize(180, 180)
    .png()
    .toBuffer();

  fs.writeFileSync('public/favicon.png', favicon64);
  fs.writeFileSync('public/agentictrive_icon.png', fs.readFileSync(iconSrc));
  fs.writeFileSync('public/apple-touch-icon.png', apple180);

  // Convert PNG to Base64 SVG so favicon.svg and agentictrive_icon.svg render the PNG icon cleanly
  const base64 = fs.readFileSync(iconSrc).toString('base64');
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <image href="data:image/png;base64,${base64}" x="0" y="0" width="500" height="500"/>
</svg>`;

  fs.writeFileSync('public/favicon.svg', svgContent);
  fs.writeFileSync('public/agentictrive_icon.svg', svgContent);

  console.log('Successfully updated all public favicon files with new emblem!');
}

updateFavicons().catch(console.error);
