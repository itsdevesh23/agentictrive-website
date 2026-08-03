import fs from 'fs';
import path from 'path';

const SRC_BASE = '../stitch_vertex_ai_agency/stitch_vertex_ai_agency';
const DEST_BASE = './src/pages';

const filesToProcess = [
  { src: 'nexus_ai_home/code.html', dest: 'Home.jsx', name: 'Home' },
  { src: 'nexus_ai_about_contact/code.html', dest: 'AboutContact.jsx', name: 'AboutContact' },
  { src: 'nexus_ai_marketplace/code.html', dest: 'Marketplace.jsx', name: 'Marketplace' },
  { src: 'nexus_ai_solutions/code.html', dest: 'Solutions.jsx', name: 'Solutions' }
];

if (!fs.existsSync(DEST_BASE)) {
  fs.mkdirSync(DEST_BASE, { recursive: true });
}

function convertHtmlToJsx(html) {
  // Extract body content
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let bodyContent = bodyMatch ? bodyMatch[1] : html;

  // Basic HTML to JSX conversions
  let jsx = bodyContent
    // Remove script tags at the end of body if any
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    // Replace class with className
    .replace(/class=/g, 'className=')
    // Replace for with htmlFor
    .replace(/for=/g, 'htmlFor=')
    // Fix self closing tags
    .replace(/<(img|input|br|hr)([^>]*?)(?<!\/)>/g, '<$1$2 />')
    // Fix HTML comments
    .replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}')
    // Fix inline styles - simple heuristic for string based inline styles
    // .replace(/style="([^"]*)"/g, (match, p1) => {
    //   // Note: full inline style conversion is complex, we'll just remove them or do simple
    //   return 'style={{}}';
    // })
    // SVG properties
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/clip-rule=/g, 'clipRule=')
    // SVG and other specific attrs
    .replace(/viewBox=/g, 'viewBox=');

  return jsx;
}

filesToProcess.forEach(fileInfo => {
  const fullSrc = path.join(SRC_BASE, fileInfo.src);
  const fullDest = path.join(DEST_BASE, fileInfo.dest);
  
  if (fs.existsSync(fullSrc)) {
    const html = fs.readFileSync(fullSrc, 'utf8');
    let jsxContent = convertHtmlToJsx(html);
    
    const componentCode = `import React from 'react';
import { Link } from 'react-router-dom';

export default function ${fileInfo.name}() {
  return (
    <>
      ${jsxContent}
    </>
  );
}
`;
    fs.writeFileSync(fullDest, componentCode, 'utf8');
    console.log(`Converted ${fileInfo.src} to ${fileInfo.dest}`);
  } else {
    console.log(`File not found: ${fullSrc}`);
  }
});
