# hollow.rs

Website for **Hollow Technologies Pty Ltd**, served at [hollow.rs](https://hollow.rs).

Built with [Astro](https://astro.build) (static output) and deployed to
**Cloudflare Workers Static Assets** — all pages and fonts serve from
Cloudflare's edge, no third-party CDN.

## Develop

```sh
pnpm install
pnpm dev        # local dev server
pnpm build      # static build → dist/
pnpm preview    # preview the built site
```

## Deploy

Cloudflare builds from Git: **build command** `pnpm build`, **deploy command**
`npx wrangler deploy`. Config lives in `wrangler.jsonc` (assets-only, serves
`dist/`). `pnpm deploy` runs both locally.

## Structure

- `src/layouts/DrawingSheet.astro` — shared frame, fonts, theme toggle
- `src/pages/index.astro` — landing (`/`)
- `src/pages/plate-connect/index.astro` — Plate + Connect (`/plate-connect`)
- `src/pages/drive/index.astro` — Drive (`/drive`)
- `public/assets/` — logo SVGs

Fonts (Outfit, Spline Sans Mono) are self-hosted via `@fontsource`.
Design source: the "Hollow Engineering Website Redesign" Claude Design project.
