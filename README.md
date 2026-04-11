# Tailcast

**Dark-themed website template built with Astro 6 & Tailwind CSS**<br>
Responsive, fast, and ready to customize.

[Live Demo](https://tailcast.vercel.app) · [Getting Started](#quickstart) · [Changelog](https://github.com/matt765/Tailcast/blob/main/CHANGELOG.md)

![Forks](https://img.shields.io/github/forks/matt765/Tailcast?style=flat) ![Version](https://img.shields.io/github/package-json/v/matt765/Tailcast?color=green)

<br>

![Tailcast preview](https://github.com/user-attachments/assets/0bb55d93-227b-4f7a-b8bc-ddce5d54db15)

## Overview

Tailcast is an open-source and free Astro theme with multiple pages, designed for a fictional startup.

## Tech stack

Astro 6, TypeScript, Tailwind CSS 4, ESLint, Prettier

## Features

- **8 pages** - Home, About, Services, Blog, Article, Careers, Contact, 404
- **SEO optimization** - Sitemap, Open Graph, canonical URLs, meta descriptions
- **Accessible** - Semantic HTML, ARIA attributes, keyboard navigation
- **View Transitions** - Smooth page navigation with Astro Client Router, no full-page reloads
- **Responsive** - Mobile-first design that adapts to any screen size
- **Code quality** - ESLint, Prettier and CI pipeline pre-configured with Astro and Tailwind plugins

## Quickstart

```bash
git clone https://github.com/matt765/Tailcast.git
cd Tailcast
npm install
npm run dev
```

Navigate to [http://localhost:4321](http://localhost:4321) to see the site.

You can also deploy on Vercel with one click:

[<img src="https://vercel.com/button" alt="Deploy with Vercel" height="32">](https://vercel.com/new/clone?repository-url=https://github.com/matt765/Tailcast)

## Project structure

```
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── icons/          # SVG icon components
│   │   ├── images/         # Optimized with Astro Image
│   │   └── logos/          # Brand logo components
│   ├── components/         # Reusable Astro components
│   ├── content/
│   │   └── blog/           # Markdown blog posts
│   ├── data/               # Static data (positions)
│   ├── layouts/
│   │   └── Layout.astro    # Base layout with SEO meta
│   ├── pages/              # File-based routing
│   │   ├── about.astro
│   │   ├── blog/
│   │   ├── careers/
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   └── 404.astro
│   └── styles/
│       ├── Theme.css       # Design tokens & utility classes
│       └── diagonals.css
├── astro.config.mjs
├── eslint.config.js
├── package.json
└── tsconfig.json
```

## Available commands

| Command           | Action                           |
| :---------------- | :------------------------------- |
| `npm run dev`     | Start development server         |
| `npm run build`   | Build for production (`./dist/`) |
| `npm run preview` | Preview production build locally |
| `npm run lint`    | Run ESLint                       |
| `npm run format`  | Format code with Prettier        |

## License

This project is open source and available under the MIT License. See [LICENSE](license) for details.

## Author

Made by [matt765](https://github.com/matt765/)
