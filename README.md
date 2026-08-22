# Mob Hub — Cloudflare/OpenNext Production Build

Mob Hub is a mobile creative production business serving Uganda with podcast and interview production, film support, voice-over recording, photography, videography, and travel documentation.

## Production architecture

`mob-hub.com` → Cloudflare DNS → Cloudflare Workers → Next.js 16 via OpenNext.

The custom domain must only be attached after the temporary `*.workers.dev` deployment has been visually and functionally verified.

## Core stack

- Next.js 16.2.12
- React 19.2.8
- TypeScript 5.9.3
- OpenNext Cloudflare 1.20.2
- Wrangler 4.125.0
- Cloudflare Workers

## Commands

```bash
npm install --package-lock=false
npm run lint
npm run cloudflare:build
npm run preview
npm run deploy
```

## Canonical domain

- https://mob-hub.com

## WhatsApp contacts

- +256 780 122 080
- +256 787 735 756

## Deployment notes

- `wrangler.jsonc` targets a Worker named `mob-hub`.
- `.open-next/worker.js` is the generated Worker entrypoint.
- `.open-next/assets` contains generated static assets.
- `nodejs_compat` is enabled with compatibility date `2026-08-22`.
- No D1, KV, R2, Durable Objects, Queues, Supabase, Firebase, or Cloudflare Images dependency is required for this release.
- Runtime Next.js image transformation is disabled because media is pre-optimized.
- The build deliberately uses `next build --webpack` for the current Next.js/OpenNext launch path.

See `CLOUDFLARE.md` for the deployment contract.

## Stage 9 verification

GitHub Actions runs linting and builds the OpenNext Worker bundle before the first Cloudflare deployment. `mob-hub.com` DNS is not changed during this verification stage.
