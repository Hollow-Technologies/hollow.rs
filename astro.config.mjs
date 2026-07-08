// @ts-check
import { defineConfig } from 'astro/config';

// Pure static site (default output). Served from Cloudflare's edge via
// Workers Static Assets — see wrangler.jsonc.
export default defineConfig({
  site: 'https://hollow.rs',
});
