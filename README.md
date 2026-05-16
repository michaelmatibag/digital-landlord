# digital-landlord

Local lead gen sites — digital landlord model.

Each site targets a specific niche + city combination. Built as static HTML,
deployed independently to Azure Static Web Apps.

---

## Portfolio

| Site | Niche | City | Status | Monthly Revenue |
|------|-------|------|--------|-----------------|
| [lubbockbiohazardcleanup](./sites/lubbockbiohazardcleanup/) | Crime scene / biohazard cleanup | Lubbock, TX | 🔨 Building | — |

---

## Structure

```
digital-landlord/
├── sites/
│   └── lubbockbiohazardcleanup/   ← Site #1
│       ├── index.html
│       ├── services.html
│       ├── insurance.html
│       ├── service-area.html
│       ├── about.html
│       ├── contact.html
│       ├── css/style.css
│       ├── js/site.js
│       ├── robots.txt
│       ├── sitemap.xml
│       ├── staticwebapp.config.json
│       └── google*.html          ← Google Search Console verification (do not delete)
├── shared/
│   ├── css/    ← Common styles (future use)
│   └── js/     ← Shared utilities (future use)
└── README.md   ← This file — portfolio tracker
```

---

## Deploying a Site to Azure Static Web Apps

Each site in `sites/` gets its own Azure Static Web App resource.

1. Go to portal.azure.com → Create Resource → Static Web App
2. Connect to this GitHub repo (`michaelmatibag/digital-landlord`)
3. Set **App location** to `/sites/lubbockbiohazardcleanup` (or whichever site)
4. Set **Output location** to blank (static site, no build step)
5. Azure assigns a `*.azurestaticapps.net` URL
6. Add custom domain in Azure → point Namecheap DNS CNAME to that URL

---

## Adding a New Site

1. Copy an existing site folder: `cp -r sites/lubbockbiohazardcleanup sites/yourcity-niche`
2. Update `js/site.js` — phone, business name, city, Formspree ID
3. Update all HTML — title tags, meta descriptions, content
4. Update `sitemap.xml` and `robots.txt` URLs
5. Create new Azure Static Web App pointing to the new folder
6. Add new domain in Namecheap
7. Add a row to the portfolio table above

---

## Contacts / Clients

| Site | Client Name | Phone | Monthly Rate | Since |
|------|-------------|-------|--------------|-------|
| lubbockbiohazardcleanup | — | — | — | — |

---

## Tools

| Tool | Purpose | Cost |
|------|---------|------|
| Namecheap | Domain registration | ~$10/yr per domain |
| Azure Static Web Apps | Hosting | Free tier |
| CallRail | Call tracking | ~$45/mo (covers all sites) |
| Formspree | Contact forms | Free tier |
| Google Search Console | SEO monitoring | Free |
| Google Business Profile | Local SEO | Free |
