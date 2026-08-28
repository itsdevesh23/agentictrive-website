const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const dir = 'C:/Users/deves/.gemini/antigravity/brain/6068235a-26ca-4182-a7ac-add8012657d9/.user_uploaded/';
const srcIcon = path.join(dir, 'media_1787852066745.png');
const srcFull = path.join(dir, 'media_1787854756587.png');

const outDirSrc = 'c:/Users/deves/OneDrive/Documents/Agency/nexus-ai-react/src/assets/';
const outDirPub = 'c:/Users/deves/OneDrive/Documents/Agency/nexus-ai-react/public/';

async function processIcon() {
  const { data, info } = await sharp(srcIcon).raw().toBuffer({ resolveWithObject: true });
  const width = info.width;
  const height = info.height;

  // Make background transparent (where R > 240, G > 240, B > 240 or near dark background)
  // Let's inspect the corner color of srcIcon:
  const cornerR = data[0], cornerG = data[1], cornerB = data[2];
  console.log('Icon corner color:', cornerR, cornerG, cornerB);

  const outBuffer = Buffer.alloc(width * height * 4);

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i+1];
    const b = data[i+2];
    const a = data[i+3];

    // If near white background (r > 240 & g > 240 & b > 240) or near black depending on corner
    let isBg = false;
    if (cornerR > 200) {
      // White background
      if (r > 230 && g > 230 && b > 230) isBg = true;
    } else {
      // Dark background
      if (r < 25 && g < 25 && b < 30) isBg = true;
    }

    if (isBg) {
      outBuffer[i] = 0;
      outBuffer[i+1] = 0;
      outBuffer[i+2] = 0;
      outBuffer[i+3] = 0;
    } else {
      outBuffer[i] = r;
      outBuffer[i+1] = g;
      outBuffer[i+2] = b;
      outBuffer[i+3] = a;
    }
  }

  // Trim transparent edges
  const trimmed = await sharp(outBuffer, { raw: { width, height, channels: 4 } })
    .trim()
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(outDirSrc, 'agentictrive_icon.png'), trimmed);
  fs.writeFileSync(path.join(outDirPub, 'agentictrive_icon.png'), trimmed);
  fs.writeFileSync(path.join(outDirPub, 'favicon.png'), trimmed);
  console.log('Saved transparent agentictrive_icon.png!');
}

async function processFullLogo() {
  const { data, info } = await sharp(srcFull).raw().toBuffer({ resolveWithObject: true });
  const width = info.width;
  const height = info.height;

  const cornerR = data[0], cornerG = data[1], cornerB = data[2];
  console.log('Full logo corner color:', cornerR, cornerG, cornerB);

  const outBuffer = Buffer.alloc(width * height * 4);

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i+1];
    const b = data[i+2];
    const a = data[i+3];

    let isBg = false;
    if (cornerR > 200) {
      if (r > 235 && g > 235 && b > 235) isBg = true;
    } else {
      if (r < 20 && g < 20 && b < 25) isBg = true;
    }

    if (isBg) {
      outBuffer[i] = 0;
      outBuffer[i+1] = 0;
      outBuffer[i+2] = 0;
      outBuffer[i+3] = 0;
    } else {
      outBuffer[i] = r;
      outBuffer[i+1] = g;
      outBuffer[i+2] = b;
      outBuffer[i+3] = a;
    }
  }

  const trimmed = await sharp(outBuffer, { raw: { width, height, channels: 4 } })
    .trim()
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(outDirSrc, 'agentictrive_logo.png'), trimmed);
  fs.writeFileSync(path.join(outDirPub, 'agentictrive_logo.png'), trimmed);
  console.log('Saved transparent agentictrive_logo.png!');
}

async function main() {
  await processIcon();
  await processFullLogo();
}

main().catch(console.error);
