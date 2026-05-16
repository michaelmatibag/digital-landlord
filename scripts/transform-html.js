#!/usr/bin/env node
// One-time migration: replace hardcoded header/footer in site HTML files with
// mount points that shared/js/layout.js fills at runtime.
const fs = require('fs');
const path = require('path');

const siteDir = process.argv[2];
if (!siteDir) {
  console.error('Usage: node scripts/transform-html.js <site-dir>');
  process.exit(1);
}

const pageMap = {
  'index.html': 'home',
  'services.html': 'services',
  'service-area.html': 'service area',
  'insurance.html': 'insurance',
  'about.html': 'about',
  'contact.html': 'contact',
};

for (const [file, page] of Object.entries(pageMap)) {
  const filePath = path.join(siteDir, file);
  if (!fs.existsSync(filePath)) continue;

  let html = fs.readFileSync(filePath, 'utf8');

  // Remove top-bar + header (including mobile-nav inside header)
  html = html.replace(
    /[ \t]*<div class="top-bar">[\s\S]*?<\/header>\n?/,
    `    <div id="top-bar-mount"></div>\n    <div id="header-mount" data-page="${page}"></div>\n`,
  );

  // Remove footer
  html = html.replace(
    /[ \t]*<footer class="site-footer">[\s\S]*?<\/footer>\n?/,
    '    <div id="footer-mount"></div>\n',
  );

  // Add site.js + layout.js before main.js
  html = html.replace(
    /(\s*)(<script src="js\/main\.js"><\/script>)/,
    '$1<script src="js/site.js"></script>\n$1<script src="js/layout.js"></script>\n$1$2',
  );

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`✓ ${file}`);
}
