# Azhaanul Haque Farooqui — Portfolio

A personal software engineering portfolio presenting university projects, technical case studies, current work, education and contact information.

**Live site:** [portfolio-x1v.pages.dev](https://portfolio-x1v.pages.dev)

## Features

- Project summaries with completion status and technology lists.
- Detailed case studies for Venue Vendors and Australian Climate Data Explorer.
- An interactive Venue Vendors architecture diagram with keyboard-operable controls and a text description.
- Responsive navigation, a skip link, route focus management and reduced-motion styles.
- Downloadable résumé and links to GitHub, LinkedIn and email.
- Page-specific titles and descriptions, plus a client-side not-found page.

## Technology stack

React 19, TypeScript 6, Vite 8, React Router 7 and Tailwind CSS 4, with custom CSS for the portfolio interface. ESLint provides static linting.

This repository contains the portfolio frontend. The technologies described in its case studies belong to those separate projects.

## Local setup

Requirements: Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Vite prints the local development URL in the terminal. No backend service or environment variables are required.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run lint` | Run ESLint. |
| `npm run typecheck` | Check the application and Vite configuration with TypeScript. |
| `npm run build` | Run TypeScript checks and produce the static site in `dist/`. |
| `npm run preview` | Serve the production build locally after building. |

There is currently no automated test suite for the portfolio. Testing discussed in the project case studies refers to those projects.

## Repository structure

- `src/data/portfolio.ts` — typed project content, navigation, contact links and architecture data.
- `src/pages/` — homepage, project case studies and not-found page.
- `src/components/` — shared navigation, route handling, metadata and architecture diagram.
- `src/styles/portfolio.css` — layout, typography, responsive rules and accessibility styles.
- `public/resume.pdf` — résumé served at `/resume.pdf`.
- `index.html` — HTML entry point and static metadata.

The case-study routes are `/projects/venue-vendors` and `/projects/australian-climate-data-explorer`.

## Deployment

The site is hosted on Cloudflare Pages at [portfolio-x1v.pages.dev](https://portfolio-x1v.pages.dev), with automatic deployments from `main`.

| Setting | Value |
| --- | --- |
| Project root | Repository root |
| Build command | `npm run build` |
| Build output | `dist` |
| Node.js version | 24 |

The build produces a static single-page application with no runtime secrets. Files in `public/` are copied into the build output and are publicly accessible.

React Router uses browser history. Cloudflare Pages' [default single-page application fallback](https://developers.cloudflare.com/pages/configuration/serving-pages/) serves `index.html` for direct case-study requests when there is no top-level `404.html`. Unknown routes display the application's not-found page and generally return HTTP 200.

Titles, descriptions and Open Graph text update in the browser. Crawlers that do not execute JavaScript receive the static metadata from `index.html`; route-specific social previews would require prerendering. The site currently has no canonical URL, `og:url` or social preview image configured.
