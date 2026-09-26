# Azhaanul Haque Farooqui — Portfolio

A recruiter-first React + TypeScript portfolio built with Vite. The Personal Systems Monograph direction uses an editorial layout and an interactive, factual system diagram.

## Development

```sh
npm ci
npm run dev
```

## Validation

```sh
npm run lint
npm run typecheck
npm run build
npm run preview
```

## Structure

- `src/data/portfolio.ts`: verified public project content, education, navigation and architecture lanes.
- `src/pages/`: homepage, two case studies and the not-found page.
- `src/components/`: route shell, metadata and purpose-built architecture plate.
- `src/styles/portfolio.css`: visual tokens, layout, responsive and accessibility styles.

Project pages are available at `/projects/venue-vendors` and `/projects/australian-climate-data-explorer`. Job Application Tracker is an in-progress homepage entry only.

## Deployment

Deploy the `dist/` directory produced by `npm run build`. Configure the static host to serve `index.html` for non-file requests so direct case-study URLs and refreshes work with browser-history routing. The site assumes deployment at the domain root. Unknown routes render the client-side not-found page; configure host-level handling separately if an HTTP 404 status is required.

Route titles and descriptions are set in React. Rich previews on crawlers that do not execute JavaScript would require prerendering or server rendering; no deployment domain or social image has been invented.

## Content boundaries

Only verified public content belongs in `src/` and `public/`. Internal planning files are not imported. Optional email, résumé, repository, demo and screenshot UI is omitted until those assets are supplied and verified. Venue Vendors has no live-demo action because its previous Render deployment is currently unavailable.
