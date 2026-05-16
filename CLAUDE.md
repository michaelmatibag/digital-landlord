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
