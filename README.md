# NEXORA

NEXORA is a fictional AI-powered productivity and workflow platform for modern teams. This landing page presents the product through a focused premium SaaS experience: clear positioning, a dashboard preview, feature highlights, use cases, pricing, FAQs, and conversion-focused closing content.

## Preview

The project is designed to run locally with Vite at `http://localhost:5173/`.

![NEXORA landing page](docs/screenshots/nexora-home.png)

![NEXORA mobile layout](docs/screenshots/nexora-mobile.png)

## Technologies

- React 19
- Vite 8
- Tailwind CSS 4 with the Vite plugin
- JavaScript (ES modules)
- CSS with responsive media queries
- Oxlint
- Google Fonts: Manrope, Space Grotesk, and DM Mono

## Features

- Responsive desktop, laptop, tablet, and mobile layouts
- Dark charcoal SaaS visual system with controlled electric-blue accent
- CSS-built NEXORA dashboard preview
- Six feature cards and four solution use cases
- Three pricing plans with a highlighted Pro plan
- Five-question interactive FAQ accordion
- Mobile hamburger navigation
- Smooth anchor scrolling and visible keyboard focus states
- Reduced-motion support
- Responsive footer with product, company, resource, and social links

## Explanation

### Design direction

NEXORA uses a restrained premium SaaS language: a charcoal-black foundation, off-white typography, muted gray supporting copy, and one electric-blue accent for emphasis and actions. Thin borders, measured spacing, and a CSS-built dashboard preview create hierarchy without relying on heavy gradients or decorative noise.

### Stack

The page is built with React and Vite, with Tailwind CSS 4 integrated through the Vite plugin for shared design tokens and utility layout helpers. The detailed visual system remains in `src/App.css` so the dashboard, cards, responsive breakpoints, and interaction states stay easy to tune in one place.

### Component structure

`App.jsx` is a composition root. Each major page area lives in `src/Components/`, including the Navbar, Hero, Product, Features, How It Works, Statistics, Solutions, Testimonials, Pricing, FAQ, Final CTA, and Footer. Local state stays close to the interaction it controls: the Navbar owns its mobile menu and FAQ owns its accordion state.

### Challenges and solutions

The main implementation challenge was keeping a long, content-rich landing page visually consistent across desktop and narrow mobile widths. Shared CSS tokens, capped content widths, intentional breakpoint stacking, and overflow checks at 320px through 1440px keep the page readable without introducing separate mobile designs.

### AI use

GitHub Copilot was used as an implementation and review assistant for component organization, content iteration, accessibility improvements, responsive testing, documentation, and deployment preparation. Design decisions, code review decisions, and final validation were checked against the assignment requirements.

## Installation

```bash
npm install
npm run dev
```

Open `http://localhost:5173/` in a browser.

## Validation

```bash
npm run lint
npm run build
```

The production output is written to `dist/` and can be deployed to any static hosting provider such as Vercel, Netlify, or GitHub Pages.

## Live Demo URL

Live demo: [https://portfolio-chi-woad-46.vercel.app](https://portfolio-chi-woad-46.vercel.app)

Local demo: [http://localhost:5173/](http://localhost:5173/)

For a public submission, deploy the `dist/` output and replace this local URL with the generated deployment URL.

## GitHub Repository

Repository: [https://github.com/Vishal1pramanik/Nexora](https://github.com/Vishal1pramanik/Nexora)

## Screenshots

The primary screenshot is stored at `docs/screenshots/nexora-home.png` for repository previews.

## AI Tools Used

- GitHub Copilot for implementation assistance, code review, responsive testing, and accessibility polish
- VS Code integrated browser tools for viewport and interaction checks

## Project Structure

```text
src/
  App.jsx       Page composition root
  App.css       NEXORA visual system and responsive layout
  index.css     Global rendering defaults
  main.jsx      React entry point
  Components/   Reusable section components and local interaction state
    Navbar.jsx
    Hero.jsx
    Features.jsx
    Product.jsx
    HowItWorks.jsx
    Statistics.jsx
    Solutions.jsx
    Testimonials.jsx
    Pricing.jsx
    FAQ.jsx
    FinalCTA.jsx
    Footer.jsx
public/
  favicon.svg
index.html
```
