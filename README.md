# Baraa Aljabban — Portfolio

Personal portfolio & services website — **Senior Flutter Developer & Mobile Team Lead** based in Kuala Lumpur, Malaysia.

**Live:** https://baraaaljabban.github.io/personal_website/

## Stack

- Vanilla HTML / CSS / JS — **zero runtime dependencies**, no build step
- GitHub Pages (auto-deploy via `.github/workflows/static.yml`)
- Bilingual EN ⇄ AR (RTL) · Dark/Light themes · PWA-ready (`site.webmanifest`)
- SEO: Open Graph, Person + ProfessionalService + FAQPage JSON-LD, sitemap, robots

## Structure

```
├── index.html          # single-page portfolio
├── styles.css          # token-based design system
├── script.js           # all interactivity (i18n, carousels, typed FX, canvas…)
├── site.webmanifest    # PWA manifest
├── privacy.html        # JobHunt privacy policy (Google OAuth verification)
├── 404.html            # custom not-found page
├── personal.PNG        # profile photo / social card
├── HLB/  HLB-SG/  astro/  taskworld/   # project screenshots (webp)
└── README-UPGRADE.md   # v1→v2 change log, deploy & customization guide
```

## Customize

- Colors: `:root` tokens at the top of `styles.css`
- Text: every string carries `data-en` / `data-ar` attributes in `index.html`
- Hero typed words: `i18n` block at the top of `script.js`

See **README-UPGRADE.md** for the full guide.

## License

Personal & commercial use allowed. Built with ❤️ in Kuala Lumpur.
