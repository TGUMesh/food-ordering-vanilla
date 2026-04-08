import fs from 'fs';
import path from 'path';

const srcDir = 'c:\\webp-proj\\restaurant-ui\\src';

const mappings = [
  { regex: /bg-\[#F8F8F8\]/g, replacement: 'bg-background' },
  { regex: /bg-\[#ffffff\]/g, replacement: 'bg-card-bg' },
  { regex: /bg-\[#?white\]/g, replacement: 'bg-card-bg' }, // Actually bg-white is a utility, let's just replace exact bg-[#ffffff]
  { regex: /bg-white/g, replacement: 'bg-card-bg' },
  { regex: /text-\[#212121\]/g, replacement: 'text-text-primary' },
  { regex: /text-\[#1A1816\]/g, replacement: 'text-text-primary' },
  { regex: /text-\[#4A4A4A\]/g, replacement: 'text-text-body' },
  { regex: /text-\[#333333\]/g, replacement: 'text-text-body' },
  { regex: /text-\[#6B7280\]/g, replacement: 'text-text-body' },
  { regex: /border-\[#E0DCD7\]/g, replacement: 'border-border-light' },
  { regex: /border-\[#E0E0E0\]/g, replacement: 'border-border-light' },
  { regex: /border-\[#E8E8E8\]/g, replacement: 'border-border-light' },
  { regex: /border-\[#1A1816\]/g, replacement: 'border-text-primary' },
  { regex: /border-\[#212121\]/g, replacement: 'border-text-primary' },
  { regex: /bg-\[#F5F5F5\]/g, replacement: 'bg-pill-bg' },
  { regex: /bg-\[#F0F0F0\]/g, replacement: 'bg-pill-bg' },
  { regex: /bg-\[#ff3300\]/g, replacement: 'bg-accent' },
  { regex: /text-\[#ff3300\]/g, replacement: 'text-accent' },
  { regex: /border-\[#ff3300\]/g, replacement: 'border-accent' },
  { regex: /bg-\[#d92b00\]/g, replacement: 'bg-[#d92b00]' }, // Keep explicit hex for hardcoded hovers
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      mappings.forEach(({ regex, replacement }) => {
        content = content.replace(regex, replacement);
      });
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory(srcDir);
