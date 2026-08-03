import fs from 'fs';
import path from 'path';

const PAGES_DIR = './src/pages';
const files = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(PAGES_DIR, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Convert <a> tags to <Link> tags
  content = content.replace(/<a /g, '<Link ');
  content = content.replace(/<\/a>/g, '</Link>');

  // Map common text to routes
  content = content.replace(/href="#"(.*?>)Solutions(<\/?)/gi, 'to="/solutions"$1Solutions$2');
  content = content.replace(/href="#"(.*?>)Marketplace(<\/?)/gi, 'to="/marketplace"$1Marketplace$2');
  content = content.replace(/href="#"(.*?>)Agents(<\/?)/gi, 'to="/marketplace"$1Agents$2');
  content = content.replace(/href="#"(.*?>)Contact Us(<\/?)/gi, 'to="/about"$1Contact Us$2');
  content = content.replace(/href="#"(.*?>)About(<\/?)/gi, 'to="/about"$1About$2');
  content = content.replace(/href="#"(.*?>)Nexus AI(<\/?)/gi, 'to="/"$1Nexus AI$2');

  // For any remaining href="#", point to "/"
  content = content.replace(/href="#"/g, 'to="/"');

  // Convert <button> to <Link> to make CTAs navigate
  content = content.replace(/<button([^>]*)>([\s\S]*?)<\/button>/gi, (match, attrs, inner) => {
    let to = '"/solutions"';
    if (inner.includes('Explore Marketplace')) to = '"/marketplace"';
    else if (inner.includes('Get Started')) to = '"/solutions"';
    else if (inner.includes('Build Custom Agent')) to = '"/solutions"';
    else if (inner.includes('Submit')) return match; // keep submit buttons as buttons
    else if (inner.includes('Send Message')) return match;
    
    return `<Link to=${to}${attrs}>${inner}</Link>`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated links in ${file}`);
});
