# BMS POS — Landing Page

Marketing and download landing page for [BMS Point of Sale](https://github.com/decentaro/BMS-Point-of-Sale-System), a free, offline-capable retail POS built for kiosks and Raspberry Pi.

**Live site:** https://bms-pos.pages.dev *(update this once deployed)*

---

## What's in this repo

```
landing/
├── index.html              # HTML structure only — no inline styles or scripts
├── css/
│   └── styles.css          # All styles: design tokens, components, responsive breakpoints
├── js/
│   └── main.js             # Screenshot tabs, FAQ accordion, GitHub release API
├── _headers                # Cloudflare Pages security headers
└── assets/
    └── screenshots/        # App screenshots used in the Features and Screenshots sections
```

No build step, no dependencies, no npm. Open `index.html` in a browser and it works.

---

## Tech

| Layer | Choice | Why |
|-------|--------|-----|
| Markup | Semantic HTML5 | Clean, accessible, zero overhead |
| Styles | Vanilla CSS with custom properties | No framework needed for a single page |
| Icons | [Lucide](https://lucide.dev/) (UMD, unpkg CDN) | Consistent stroke icons, ~4 KB gzipped |
| Fonts | [Nunito](https://fonts.google.com/specimen/Nunito) (Google Fonts) | Rounded, friendly — matches the app's UI |
| Tech logos | [SimpleIcons CDN](https://simpleicons.org/) | SVG brand icons, no local assets needed |
| Hosting | [Cloudflare Pages](https://pages.cloudflare.com/) | Free tier, global CDN, `_headers` support |

---

## Responsive design

Two breakpoints cover the full range of devices:

- **≤ 768 px** — tablets and phones: single-column feature grid, stacked download buttons, hidden nav links, touch-friendly tap targets
- **≤ 480 px** — small phones: single-column stats, steps, and tech stack; vertical hero CTA buttons

---

## Deploying to Cloudflare Pages

1. **Push this repo to GitHub** (the root of the repo should be the `landing/` folder contents).
2. Go to **Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git**.
3. Select your repo.
4. Build settings:
   - Framework preset: **None**
   - Build command: *(leave blank)*
   - Build output directory: `/`
5. Click **Save and Deploy**.

The `_headers` file is picked up automatically by Cloudflare Pages — no extra config needed.

---

## Keeping it up to date

### Version badge & download links
The download section fetches the latest GitHub release via the GitHub API at page load time and updates the version badge and direct download URLs automatically. No manual update needed when a new release is published.

### Screenshots
Screenshots live in `assets/screenshots/`. To replace one, drop in a new file with the same name. Recommended resolution: **1366 × 768 px** (matches the app's target kiosk resolution).

### Feature copy or FAQ
Edit `index.html` directly. The CSS is organised with section comments (`/* ─── Features ─── */` etc.) so it's easy to navigate.

---

## Related

- **Main app repo:** [decentaro/BMS-Point-of-Sale-System](https://github.com/decentaro/BMS-Point-of-Sale-System)
- **Issues / bug reports:** [GitHub Issues](https://github.com/decentaro/BMS-Point-of-Sale-System/issues)

---

## License

[ISC License](https://github.com/decentaro/BMS-Point-of-Sale-System/blob/main/LICENSE) — free to use, modify, and distribute.
