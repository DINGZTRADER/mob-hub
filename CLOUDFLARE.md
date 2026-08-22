# Cloudflare Workers deployment

This project targets Cloudflare Workers using the OpenNext Cloudflare adapter.

## Runtime configuration

- Worker name: `mob-hub`
- Worker entrypoint after adaptation: `.open-next/worker.js`
- Static asset output: `.open-next/assets`
- Compatibility date: `2026-08-22`
- Compatibility flag: `nodejs_compat`
- Worker observability: enabled
- No D1, KV, R2, Durable Objects, Queues, or Cloudflare Images binding is required for this release.

## Why image optimization is disabled at runtime

The Stage 6 photographs and logo are already compressed into web-ready JPEG/WebP files. `next/image` is retained for layout sizing and lazy loading, while `images.unoptimized` avoids adding a Cloudflare Images dependency to this simple brochure/enquiry site.

## Commands

```bash
npm ci
npm run lint
npm run build
npm run preview
npm run deploy
```

`preview` and `deploy` install exact, non-persisted deployment-tool versions before running:

- `@opennextjs/cloudflare@1.20.2`
- `wrangler@4.125.0`

They are installed with `--no-save --package-lock=false`, so the existing application dependency lock remains unchanged. This is intentional for Stage 8 because the audit environment cannot access npm to regenerate the lockfile safely.

## Cloudflare Workers Builds

Use the repository root as the build root. The deploy command can be:

```bash
npm run deploy
```

Do not configure a Pages project for this build. It is a Workers/OpenNext deployment.

The custom domain is attached only after the first `*.workers.dev` deployment has been verified. Preserve existing MX and TXT records when attaching `mob-hub.com`.

## Public environment values

The two WhatsApp numbers already have production defaults in the application. Optional overrides are documented in `.env.example` and, if used in Workers Builds, must be supplied as build variables because `NEXT_PUBLIC_*` values are inlined during the Next.js build.