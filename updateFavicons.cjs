const sharp = require('sharp');
const fs = require('fs');

async function updateFavicons() {
  const iconPngPath = 'src/assets/agentictrive_icon.png';
  const iconPngBuffer = fs.readFileSync(iconPngPath);

  // Resize PNG for favicons
  const png32 = await sharp(iconPngPath).resize(32, 32).png().toBuffer();
  const png192 = await sharp(iconPngPath).resize(192, 192).png().toBuffer();
  const png512 = await sharp(iconPngPath).resize(512, 512).png().toBuffer();

  // Write PNG favicons
  fs.writeFileSync('public/favicon.png', png32);
  fs.writeFileSync('public/favicon.ico', png32);
  fs.writeFileSync('public/apple-touch-icon.png', png192);
  fs.writeFileSync('public/agentictrive_icon.png', iconPngBuffer);
  fs.writeFileSync('public/logo.png', png512);

  // Create crisp SVG favicons with base64 PNG fallback & vector path
  const base64Png = iconPngBuffer.toString('base64');
  const svgFaviconContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <image href="data:image/png;base64,${base64Png}" width="512" height="512" />
</svg>`;

  fs.writeFileSync('public/agentictrive_icon.svg', svgFaviconContent);
  fs.writeFileSync('public/favicon.svg', svgFaviconContent);
  fs.writeFileSync('public/logo.svg', svgFaviconContent);

  console.log('Successfully updated all browser favicons and icons in public/!');
}

updateFavicons().catch(console.error);
