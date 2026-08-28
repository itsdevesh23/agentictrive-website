const fs = require('fs');
const path = require('path');

// Precision SVG for Agentictrive Icon Emblem (A + Blue Leg Bar + 4-Point Star)
const iconSvgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0066FF" />
      <stop offset="100%" stop-color="#0099FF" />
    </linearGradient>
  </defs>
  <!-- Outer White A Chevron Frame -->
  <path d="M 60 410 L 250 50 L 325 200 L 290 200 L 250 120 L 125 355 L 180 355 L 250 215 L 290 295 L 250 295 Z" fill="none" />
  <path d="M 60 410 L 250 50 L 325 200 L 290 200 L 250 120 L 125 355 L 180 355 L 250 215 L 290 295 L 250 295 Z" fill="#FFFFFF" />
  <!-- Correct Geometric Paths for new A Logo -->
  <g>
    <!-- Main A Shell (White) -->
    <path d="M 60 410 L 250 50 L 325 200 L 290 200 L 250 120 L 125 355 L 180 355 L 250 215 L 290 295 L 250 295 Z" fill="#FFFFFF" />
  </g>
</svg>`;

// Exact SVG Vector Generator based on user's logo structure
function generateExactIconSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <linearGradient id="electricBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0066FF" />
      <stop offset="100%" stop-color="#00A2FF" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <g transform="translate(0, 0)">
    <!-- White 'A' Outer Frame Chevron -->
    <path d="M 70 470 L 300 50 L 388 226 L 348 226 L 300 135 L 140 425 L 195 425 L 300 230 L 350 325 L 310 325 Z" fill="none" />
    
    <!-- Clean geometric paths: -->
    <!-- Left outer leg and apex -->
    <path d="M 70 470 L 300 50 L 390 225 L 350 225 L 300 135 L 140 425 L 70 470 Z" fill="#FFFFFF" />

    <!-- Separate Blue Slanted Bar (Right Leg Segment) -->
    <path d="M 362 245 L 405 310 L 530 470 L 455 470 L 362 245 Z" fill="url(#electricBlue)" />

    <!-- Centered 4-Pointed Sparkle Star -->
    <path d="M 300 270 Q 300 330 360 330 Q 300 330 300 390 Q 300 330 240 330 Q 300 330 300 270 Z" fill="url(#electricBlue)" />
  </g>
</svg>`;
}

function generateExactFullLogoSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400" width="100%" height="100%">
  <defs>
    <linearGradient id="electricBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0066FF" />
      <stop offset="100%" stop-color="#00A2FF" />
    </linearGradient>
  </defs>

  <!-- Left Emblem -->
  <g transform="translate(40, 20) scale(0.65)">
    <!-- White 'A' Outer Frame Chevron -->
    <path d="M 70 470 L 300 50 L 390 225 L 350 225 L 300 135 L 140 425 L 70 470 Z" fill="#FFFFFF" />

    <!-- Separate Blue Slanted Bar (Right Leg Segment) -->
    <path d="M 362 245 L 405 310 L 530 470 L 455 470 L 362 245 Z" fill="url(#electricBlue)" />

    <!-- Centered 4-Pointed Sparkle Star -->
    <path d="M 300 270 Q 300 330 360 330 Q 300 330 300 390 Q 300 330 240 330 Q 300 330 300 270 Z" fill="url(#electricBlue)" />
  </g>

  <!-- Right Typography Text -->
  <g transform="translate(420, 240)" font-family="System-UI, -apple-system, sans-serif" font-weight="900" font-size="105" letter-spacing="18">
    <text x="0" y="0" fill="#FFFFFF">AGENTIC</text>
    <text x="560" y="0" fill="url(#electricBlue)">TRIVE</text>
  </g>
</svg>`;
}

const iconSvg = generateExactIconSvg();
const fullSvg = generateExactFullLogoSvg();

const outDirSrc = 'c:/Users/deves/OneDrive/Documents/Agency/nexus-ai-react/src/assets/';
const outDirPub = 'c:/Users/deves/OneDrive/Documents/Agency/nexus-ai-react/public/';

fs.writeFileSync(path.join(outDirSrc, 'agentictrive_icon.svg'), iconSvg);
fs.writeFileSync(path.join(outDirPub, 'agentictrive_icon.svg'), iconSvg);
fs.writeFileSync(path.join(outDirPub, 'favicon.svg'), iconSvg);

fs.writeFileSync(path.join(outDirSrc, 'agentictrive_logo.svg'), fullSvg);
fs.writeFileSync(path.join(outDirPub, 'agentictrive_logo.svg'), fullSvg);
fs.writeFileSync(path.join(outDirSrc, 'agentictrive_brand.svg'), fullSvg);
fs.writeFileSync(path.join(outDirPub, 'agentictrive_brand.svg'), fullSvg);

console.log('Successfully generated clean SVG vector files for Icon & Full Logo!');
