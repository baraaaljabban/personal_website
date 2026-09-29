# 🚀 Portfolio v2 — Upgrade Guide

This folder is a **drop-in replacement** for your current site at
`baraaaljabban.github.io/personal_website/`.

---

## ✨ What's new (v1 → v2)

| Area | Before | Now |
|---|---|---|
| **Design system** | Basic dark theme | Token-based design system, refined typography (Space Grotesk + Inter + JetBrains Mono + Cairo), consistent spacing/radius/shadows |
| **Hero** | Static rotating words | Typewriter effect, live Kuala Lumpur clock in the badge, animated stat counters (incl. new "40% Perf. Boost" stat), interactive particle canvas with mouse attraction, floating tech chips, code window with status bar |
| **Trust signals** | — | "Trusted by" infinite marquee (HLB, Taskworld, Astro…), availability card, response-time promise |
| **Experience** | — | New interactive timeline: SSG → Astro → Taskworld → Hong Leong Bank + inline education card |
| **Services** | Flat cards | Hover lift + gradient top border + "Request this service" links that **auto-select the right option in the contact form** |
| **Process** | — | New 4-step "How We'll Work" section (Discovery → Architecture → Build → Launch) |
| **Projects** | Raw screenshot rows | Real **phone-frame carousels** (arrows, dots, autoplay, swipe on mobile), metrics chips, store badges, "Your Project Here" CTA card |
| **Testimonials** | — | New slider section ⚠️ *(placeholder quotes — see action items!)* |
| **FAQ** | — | New accordion + **FAQPage JSON-LD schema** (rich Google results) |
| **Contact** | Basic form | AJAX submit (no redirect), inline validation, loading spinner, success panel, copy-email/phone buttons with toast |
| **A11y** | Partial | Focus-visible rings, aria states, ESC closes menu/lightbox, keyboard arrows in lightbox, `prefers-reduced-motion` honored |
| **Performance** | AOS + 3d-effects.js + script.js | One dependency-free `script.js` (removed AOS & jQuery-era stack), lazy images, rAF-throttled scroll, particles pause off-screen |
| **PWA** | — | `site.webmanifest` + theme colors → installable |
| **i18n** | EN/AR | Kept + extended to every new string; RTL-safe layout |

## 🐞 Bugs fixed

1. **`Astro/` screenshots were 404 on the live site** — the repo folder is `astro/` (lowercase) but v1 referenced `Astro/1.webp`. GitHub Pages URLs are case-sensitive. Fixed → all My Astro screenshots now load.
2. **Duplicate `author` meta tag** removed.
3. **Legacy CSS variables** (`--text-primary`, `--accent-primary`…) kept as aliases so `privacy.html` keeps working.
4. Removed the AOS CDN dependency (one less render-blocking request + one less point of failure).

---

## 📦 How to deploy (5 minutes)

1. Copy everything from this folder into your `personal_website` repo, **overwriting** existing files.
2. **Delete these old files** from the repo (no longer used):
   - `3d-effects.js`
   - `3D-FEATURES.md`
   - `README.md` (replace with this one if you like)
3. Keep as-is (already copied here): `privacy.html`, `404.html`, `robots.txt`, `sitemap.xml`, `googlea807b8a6cfdf965a.html`, all image folders.
4. Commit & push → GitHub Pages deploys automatically.

```bash
cp -r personal_website_v2/* /path/to/repo/personal_website/
cd /path/to/repo/personal_website
rm 3d-effects.js 3D-FEATURES.md
git add -A && git commit -m "v2: professional redesign" && git push
```

## 👀 Preview locally first

```bash
cd personal_website_v2
python -m http.server 8000    # → http://localhost:8000
```

---

## ⚠️ Action items before/after deploying

0. **JobHunt section is now hidden** from the homepage (it stays in the HTML source only).
   The privacy policy remains publicly reachable at `privacy.html` — the URL you gave Google
   during OAuth verification. If you ever delete the hidden block entirely, that's safe too:
   verification only requires the live `privacy.html` page.

1. **Testimonials are PLACEHOLDERS.** Replace the 3 quotes in `index.html`
   (search for `⚠️ PLACEHOLDER`) with your real LinkedIn recommendations —
   names, titles and companies. Your profile has them:
   https://linkedin.com/in/baraaaljabban/details/recommendations/
2. *(Optional)* Add dates to the Experience timeline — each `timeline-card` has a
   `timeline-step` (01–04); you can add a `timeline-date` element or replace the step number.
3. The contact form still uses your existing **Formspree endpoint** (`mjknoowo`) — it keeps
   working exactly as before, just nicer.
4. *(Optional SEO)* Update `sitemap.xml`'s `<lastmod>` date after deploying.
5. *(Optional)* Replace `personal.PNG`-based favicon with a real 512×512 icon later.

## 🎨 Customizing

- **Colors**: edit the tokens at the top of `styles.css` (`:root` / `[data-theme="light"]`).
- **Typed hero words**: edit `i18n.en.typed` / `i18n.ar.typed` at the top of `script.js`.
- **Any text**: every string carries `data-en` / `data-ar` attributes — edit both.
