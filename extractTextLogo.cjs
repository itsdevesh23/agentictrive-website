const sharp = require('sharp');
const fs = require('fs');

async function extractText() {
  const src = 'src/assets/agentictrive_icon_2.png';
  const meta = await sharp(src).metadata();
  
  // Extract text portion (crop off the logo at starting x = 460)
  const textPngBuffer = await sharp(src)
    .extract({ left: 460, top: 0, width: meta.width - 460, height: meta.height })
    .trim()
    .png()
    .toBuffer();

  fs.writeFileSync('src/assets/agentictrive_text.png', textPngBuffer);
  fs.writeFileSync('public/agentictrive_text.png', textPngBuffer);

  const textMeta = await sharp(textPngBuffer).metadata();
  console.log('Extracted AGENTIC TRIVE text logo PNG:', textMeta.width, 'x', textMeta.height);
}

extractText().catch(console.error);
