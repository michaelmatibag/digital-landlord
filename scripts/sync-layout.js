#!/usr/bin/env node
// Copies shared/js/layout.js into every site's js/ directory.
// Run locally after pulling changes: npm run prepare
// CI runs this automatically before each deploy.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const src = path.join(root, 'shared/js/layout.js');
const sitesDir = path.join(root, 'sites');

fs.readdirSync(sitesDir).forEach((site) => {
  const jsDir = path.join(sitesDir, site, 'js');
  if (!fs.existsSync(jsDir)) return;
  const dest = path.join(jsDir, 'layout.js');
  fs.copyFileSync(src, dest);
  console.log(`synced → sites/${site}/js/layout.js`);
});
