# Ali Zafar — AI Strategist & Digital Product Creator

[![GitHub](https://img.shields.io/badge/GitHub-AliZafar780-181717?style=flat&logo=github)](https://github.com/AliZafar780)
[![Twitter](https://img.shields.io/badge/Twitter-@AliZafarAI-1DA1F2?style=flat&logo=twitter)](https://twitter.com/AliZafarAI)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat)](#license)

> **Personal portfolio and brand website** — A modern, responsive, single-page portfolio showcasing AI strategy services, digital products, consulting, and educational content. Built with a custom dark theme, glass-morphism UI, and smooth scroll animations.

---

## Live Demo

**→ [alizafar780.github.io](https://alizafar780.github.io/)**

---

## Features

- **Dark theme with gold/amber accents** — Premium, eye-friendly design with CSS custom properties for easy theming
- **Glass-morphism UI** — Frosted glass navigation, cards with backdrop blur, subtle border glows
- **Fully responsive** — Mobile-first layout adapts from 360px to 1920px+ screens
- **Smooth scroll animations** — Fade-in, slide-up, and staggered reveal effects on scroll
- **Live counter animations** — Stats and numbers animate into view when scrolled to
- **Custom cursor** — A trailing dot that enlarges over interactive elements (desktop only)
- **Mobile hamburger menu** — Animated slide-in menu with smooth transitions
- **Contact form with validation** — Client-side validation with visual feedback and success messages
- **3 newsletter/product forms** — Free chapter download, newsletter signup, and contact inquiry
- **SEO optimized** — Open Graph, Twitter Cards, JSON-LD structured data, semantic HTML
- **Accessibility** — ARIA labels, roles, semantic landmarks, keyboard-navigable
- **Performance** — Minimal dependencies, optimized CSS, deferred JavaScript, no external bloat
- **Reduced motion support** — Respects `prefers-reduced-motion` for accessibility

---

## Tech Stack

| Technology | Purpose |
|:-----------|:--------|
| **HTML5** | Semantic markup, accessibility, JSON-LD structured data |
| **CSS3** | Custom properties, flexbox, grid, animations, glass-morphism, responsive design |
| **JavaScript (ES6+)** | DOM manipulation, Intersection Observer, event delegation, animation frames |
| **Font Awesome 6** | Social media and UI icons |
| **Google Fonts** | Cormorant Garamond (headings), DM Sans (body), DM Mono (labels) |
| **GitHub Pages** | Hosting and deployment |

---

## Project Structure

```
alizafar-website/
├── index.html          # Main HTML file (single-page portfolio)
├── style.css           # All styles — variables, layout, components, responsive
├── script.js           # All JS — menu, animations, counters, forms, cursor
├── README.md           # This file
├── LICENSE             # MIT License
├── SECURITY.md         # Security policy
└── .github/            # GitHub metadata (contributing guide, workflows)
    ├── CODEOWNERS
    ├── CONTRIBUTING.md
    ├── SECURITY.md
    └── workflows/
```

---

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/AliZafar780/alizafar-website.git
cd alizafar-website
```

### 2. Open in browser

Simply open `index.html` in any modern browser:

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

No build step, no dependencies, no server required.

### 3. Make changes

- Edit `index.html` to update content, services, products, testimonials
- Edit `style.css` to customize colors, spacing, typography
- Edit `script.js` to modify animations, form behavior, interactivity

---

## Customization Guide

### Theme Colors

All colors are defined as CSS custom properties in `:root`. Change the accent color by updating these variables:

```css
:root {
  --accent-gold: #d4a853;        /* Main accent */
  --accent-gold-light: #e8c47a;  /* Hover states */
  --accent-gold-dark: #b88930;   /* Active states */
  --bg-primary: #0b0b0f;         /* Page background */
  --text-primary: #f0eee6;       /* Main text */
}
```

### Content Updates

1. **Services** — Edit the `.service-card` blocks in `#services` section
2. **Products** — Edit `.product-card` blocks in `#products` section (update prices, descriptions, badge classes)
3. **Testimonials** — Edit `.testimonial-card` blocks
4. **Pricing** — Edit `.pricing-tier` blocks
5. **Blog** — Edit `.article-card` blocks with real article links

### Adding a Real Image

Replace the `.profile-placeholder` with an actual image:

```html
<div class="profile-circle">
  <img src="assets/ali-zafar.jpg" alt="Ali Zafar" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">
</div>
```

---

## Deployment

### GitHub Pages (Recommended)

1. Push to `main` branch of `AliZafar780/alizafar-website`
2. Go to **Settings → Pages**
3. Select **Deploy from branch: main** and folder: `/ (root)`
4. Your site is live at `https://alizafar780.github.io/`

### Custom Domain

1. Add a `CNAME` file with your domain (e.g., `alizafar.com`)
2. Configure your DNS provider with the appropriate records

---

## Browser Support

| Browser | Support |
|:--------|:--------|
| Chrome 80+ | Full |
| Firefox 75+ | Full |
| Safari 13+ | Full |
| Edge 80+ | Full |
| Opera 67+ | Full |
| iOS Safari 13+ | Full (touch cursor hidden) |
| Android Chrome 80+ | Full (touch cursor hidden) |

---

## Accessibility

- Semantic HTML5 landmarks (`<nav>`, `<section>`, `<footer>`)
- ARIA roles and labels on interactive elements
- Keyboard-navigable navigation
- Form validation with clear error states
- `prefers-reduced-motion` media query
- High contrast text on dark backgrounds
- Focus visible styles on form elements

---

## Performance Optimizations

- Deferred JavaScript loading (`DOMContentLoaded`)
- Debounced/resource-efficient scroll handlers
- Intersection Observer for animations (avoids layout thrashing)
- CSS animations over JS where possible
- No external dependencies except Font Awesome and Google Fonts
- Minimal file sizes — CSS ~20KB, JS ~10KB

---

## License

This project is open source under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Connect

- **Twitter / X**: [@AliZafarAI](https://twitter.com/AliZafarAI)
- **LinkedIn**: [Ali Zafar](https://linkedin.com/in/alizafar780)
- **YouTube**: [Ali Zafar](https://youtube.com/@alizafar780)
- **GitHub**: [AliZafar780](https://github.com/AliZafar780)
- **Email**: [ali@alizafar.com](mailto:ali@alizafar.com)

---

<p align="center">
  <sub>Built with AI tools &middot; Islamabad, Pakistan 🇵🇰</sub>
</p>
