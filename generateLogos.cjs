const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/deves/.gemini/antigravity/brain/6068235a-26ca-4182-a7ac-add8012657d9/.user_uploaded/';
const srcIcon = path.join(dir, 'media_1787852066745.png');
const srcFull = path.join(dir, 'media_1787854756587.png');

async function processIconToTransparentPng() {
  const image = sharp(srcIcon);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Mask out dark background colors (RGB < 25)
  const transparentData = Buffer.alloc(width * height * 4);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      const r = data[i];
      const g = data[i+1];
      const b = data[i+2];

      const isBg = (r < 25 && g < 25 && b < 30);
      
      if (isBg) {
        transparentData[i] = 0;
        transparentData[i+1] = 0;
        transparentData[i+2] = 0;
        transparentData[i+3] = 0;
      } else {
        transparentData[i] = r;
        transparentData[i+1] = g;
        transparentData[i+2] = b;
        transparentData[i+3] = 255;
      }
    }
  }

  const pngBuffer = await sharp(transparentData, { raw: { width, height, channels: 4 } })
    .trim()
    .png()
    .toBuffer();

  return pngBuffer;
}

async function processFullToTransparentPng() {
  const image = sharp(srcFull);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  const transparentData = Buffer.alloc(width * height * 4);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      const r = data[i];
      const g = data[i+1];
      const b = data[i+2];

      const isBg = (r < 25 && g < 25 && b < 30);

      if (isBg) {
        transparentData[i] = 0;
        transparentData[i+1] = 0;
        transparentData[i+2] = 0;
        transparentData[i+3] = 0;
      } else {
        transparentData[i] = r;
        transparentData[i+1] = g;
        transparentData[i+2] = b;
        transparentData[i+3] = 255;
      }
    }
  }

  const pngBuffer = await sharp(transparentData, { raw: { width, height, channels: 4 } })
    .trim()
    .png()
    .toBuffer();

  return pngBuffer;
}

async function main() {
  const iconPng = await processIconToTransparentPng();
  const fullPng = await processFullToTransparentPng();

  // Save PNGs to src/assets and public
  fs.writeFileSync('src/assets/agentictrive_icon.png', iconPng);
  fs.writeFileSync('public/agentictrive_icon.png', iconPng);
  fs.writeFileSync('public/favicon.png', iconPng);

  fs.writeFileSync('src/assets/agentictrive_logo.png', fullPng);
  fs.writeFileSync('public/agentictrive_logo.png', fullPng);

  console.log('Successfully generated transparent PNG assets!');
}

main().catch(console.error);
