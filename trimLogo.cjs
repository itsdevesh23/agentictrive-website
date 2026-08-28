const sharp = require('sharp');
const fs = require('fs');

async function trimFullLogo() {
  const src = 'src/assets/agentictrive_icon_2.png';
  const trimmedBuffer = await sharp(src)
    .trim()
    .png()
    .toBuffer();

  fs.writeFileSync('src/assets/agentictrive_icon_2.png', trimmedBuffer);
  fs.writeFileSync('public/agentictrive_icon_2.png', trimmedBuffer);
  fs.writeFileSync('src/assets/agentictrive_logo.png', trimmedBuffer);
  fs.writeFileSync('public/agentictrive_logo.png', trimmedBuffer);

  const meta = await sharp(trimmedBuffer).metadata();
  console.log('Trimmed agentictrive_icon_2.png dimensions:', meta.width, 'x', meta.height, 'Aspect ratio:', (meta.width / meta.height).toFixed(2));
}

trimFullLogo().catch(console.error);
