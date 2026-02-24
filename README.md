# sargis.qa — Personal QA Portfolio

A clean, professional portfolio site for Sargis Mkrtchyan, QA Engineer.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, About, Skills, Certifications, Contact |
| Bug Hall of Fame | `pages/bug-hall-of-fame.html` | Notable bugs discovered, with impact & resolution |
| Automation Showcase | `pages/automation-showcase.html` | Sample test frameworks (Cypress, Postman, k6) |
| Case Studies | `pages/case-studies.html` | Full QA cycles on public websites |

## Project Structure

```
sargis-in-qa/
├── index.html
├── pages/
│   ├── bug-hall-of-fame.html
│   ├── automation-showcase.html
│   └── case-studies.html
├── css/
│   ├── main.css          # Shared styles, variables, components
│   ├── home.css          # Homepage-specific styles
│   ├── bug-hall.css      # Bug Hall of Fame styles
│   ├── automation.css    # Automation Showcase styles
│   └── case-studies.css  # Case Studies styles
├── js/
│   └── main.js           # Navigation, animations, tabs, filter
└── assets/
    ├── images/
    └── resume/
        └── sargis-mkrtchyan-resume.pdf   ← add your resume here
```

## Setup

This is a **static HTML/CSS/JS site** — no build tools or dependencies required.

### Run locally

Open `index.html` directly in a browser, or use any static server:

```bash
# Python
python3 -m http.server 8080

# Node (npx)
npx serve .

# VS Code: Live Server extension
```

### Customize

Before publishing, update these placeholders in `index.html` and the pages:

- `sargis@example.com` → your real email
- `linkedin.com/in/sargis-mkrtchyan` → your LinkedIn URL
- `github.com/sargis-mkrtchyan` → your GitHub URL
- Stats (years experience, bugs documented, etc.)
- Skill proficiency bars (`--pct` values in `index.html`)
- Certifications (names, dates, status)
- Add `assets/resume/sargis-mkrtchyan-resume.pdf`

## Deployment

### GitHub Pages (free)
1. Push to GitHub
2. Settings → Pages → Source: `main` branch, `/ (root)`
3. Site live at `https://yourusername.github.io/repo-name`

### Custom Domain
1. Buy domain (Namecheap, Cloudflare, Google Domains)
2. In GitHub Pages settings → add custom domain
3. Add CNAME record at your DNS provider pointing to `yourusername.github.io`

## Tech Stack

- Pure HTML5, CSS3, Vanilla JS — no frameworks, no build step
- [Feather Icons](https://feathericons.com) via CDN
- [Google Fonts](https://fonts.google.com) — Inter + JetBrains Mono
- CSS custom properties for theming
- IntersectionObserver for scroll animations

## License

MIT — feel free to fork and adapt for your own portfolio.
