# Azhaanul Haque Farooqui — Portfolio

React, TypeScript and Vite portfolio for software engineering internships. The existing editorial layout and interactive Venue Vendors architecture case study are preserved.

## Development and validation

Use Node.js 24 (locally verified: 24.11.1).

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
npm run preview
```

There is no automated test suite or test script in this repository. Venue Vendors testing claims refer to that university project.

## Structure and content

- src/data/portfolio.ts: contact destinations, navigation, project evidence, proposed projects and architecture data.
- src/pages/: homepage, case studies and client-side not-found page.
- src/components/: accessible navigation, route focus/scroll handling, metadata and interactive architecture plate.
- src/styles/portfolio.css: existing palette, typography, responsive layout and accessibility styles.
- public/resume.pdf: supplied PDF served at /resume.pdf; all résumé actions open a new tab.
- docs/Azhaanul_Haque_Farooqui_Resume.docx: editable source document, excluded from public assets.

Featured order: Venue Vendors, Australian Climate Data Explorer, then CommunityEats (in progress). Job Application Tracker is absent. No Minecraft placeholder exists. AI-Assisted Career Platform and Launchpad are separately labelled design-stage/planned work; intended capabilities have not shipped.

Case studies: /projects/venue-vendors and /projects/australian-climate-data-explorer. Venue Vendors retains its simplified authentication, limited frontend test coverage and unavailable historical deployment. CommunityEats has no case-study route; its summary reflects existing portfolio evidence, with no new claims inferred from unavailable source. User instructions supersede older design/planning notes.

## Cloudflare Pages preparation

- Build command: npm run build
- Output directory: dist
- Root directory: this repository root
- Build environment: Node.js 24
- Deploy at the domain root. No backend or runtime secrets are required.

[Cloudflare Pages SPA fallback](https://developers.cloudflare.com/pages/configuration/serving-pages/) serves index.html when there is no top-level 404.html. Keep that default so direct case-study URLs and refreshes work. Unknown routes render a client-side not-found page, generally with HTTP 200; genuine HTTP 404 responses require host-level work. No deployment has been performed.

index.html includes static title, description and Open Graph fallbacks. React updates title/description/OG text per route. Crawlers that do not execute JavaScript see generic portfolio metadata, including on case-study URLs; route-specific previews require prerendering. Canonical, og:url and og:image are intentionally absent because no production domain or social image was supplied. Add verified absolute URLs when the deployment domain is chosen; never derive canonical URLs from preview hosts.

External contact links use supplied destinations. Mail delivery and third-party availability cannot be guaranteed locally. Existing Climate Explorer demo/repository URLs must be checked before publishing; never substitute guessed URLs. Internal planning documents and the editable résumé are not bundled.
