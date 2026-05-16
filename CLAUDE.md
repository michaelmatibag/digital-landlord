# digital-landlord

Local lead-gen sites deployed to Azure Static Web Apps — one site per folder under `sites/`.

## Commands

```bash
npm ci                    # install deps
npm run format            # auto-format all HTML/CSS/JS/JSON
npm run format:check      # check formatting (runs in CI on every PR)
node scripts/sync-layout.js  # copy shared/js/layout.js into every site's js/ dir
```

`npm run prepare` runs `sync-layout.js` automatically after `npm ci`.

## Architecture

- `shared/js/layout.js` — single rendering engine for top-bar, header, footer, FAQ. Copied into each site's `js/` before deploy via `scripts/sync-layout.js`.
- `sites/<site-name>/js/site.js` — site-specific config (passed to the shared layout engine).
- HTML pages use JS-rendered mount points; static header/footer markup is not duplicated across pages.

## SITE object schema

Every site's `js/site.js` exports a global `SITE` object consumed by `shared/js/layout.js`. All fields are required:

```javascript
var SITE = {
  name: 'Business Name',           // displayed in header logo and footer
  tagline: 'City • Certified • 24/7',
  phone: {
    display: '(555) 555-5555',     // shown in top bar, header, footer
    href: 'tel:+15555555555',      // used in all tel: links
  },
  address: 'City, ST 00000',       // footer address line
  nav: [                           // header + mobile nav links
    { href: '/', label: 'Home' },
    // ...
  ],
  footerServices: [                // services column in footer
    { href: 'services.html#anchor', label: 'Service Name' },
    // ...
  ],
  footerDesc: 'Short business description for footer.',
  footerNote: 'Certifications • Tagline',
};
```

## Troubleshooting

**Layout not rendering (header/footer blank)**
- Ensure `js/site.js` is loaded before `js/layout.js` in every HTML file.
- Run `node scripts/sync-layout.js` — `js/layout.js` inside each site is a copy; editing `shared/js/layout.js` alone has no effect until synced.

**Form submissions not working**
- Verify the Formspree endpoint in each form's `action` attribute is the correct project ID.
- The `_gotcha` honeypot field must be present and empty; Formspree rejects submissions if it is missing.

**Deploy failed — empty or missing token**
- Check that `AZURE_STATIC_WEB_APPS_API_TOKEN_<site-name>` exists as a GitHub Actions secret (Settings → Secrets → Actions).
- The secret name must exactly match the uppercased, hyphen-to-underscore version of the site folder name.

## Adding a new site

1. Create `sites/<site-name>/` with the standard structure (HTML pages, `css/`, `js/site.js`, `staticwebapp.config.json`, `sitemap.xml`).
2. Add a `<site-name>` filter entry in `.github/workflows/ci.yml` under the `detect` job's `paths-filter` config.
3. Add an `AZURE_STATIC_WEB_APPS_API_TOKEN_<site-name>` secret in GitHub repo settings.
4. Update the portfolio table in `README.md`.

## CI/CD

- **PRs**: runs format check only; no deploy.
- **Push to main**: detects which `sites/` folders changed (or all sites if `shared/` changed), then deploys only those to Azure Static Web Apps.
- Branch protection uses the `deploy-complete` job as the stable required status check.

## Conventions

- Prettier enforces formatting — always run `npm run format` before committing.
- No framework, no build step — plain HTML/CSS/JS.
- Font loading via `<link rel="preconnect">` + `<link rel="stylesheet">` in `<head>`, not CSS `@import`.
- Contact forms use `action="https://formspree.io/f/xzdonzkp"` as a JS-free fallback, plus a `_gotcha` honeypot field.
- 404 pages include `<meta name="robots" content="noindex">`.
