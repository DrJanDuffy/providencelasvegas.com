# Performance (Lighthouse & Core Web Vitals)

## Implemented (Lighthouse mobile, Feb 2026)

- **Preconnect** — `<link rel="preconnect">` in root layout for `em.realscout.com`, `www.realscout.com`, and `assets.calendly.com` to reduce connection latency when third-party scripts load.
- **RealScout script** — Loaded with `strategy="lazyOnload"` so it runs after the `load` event and does not block LCP (hero + H1). Widgets (hero search, Featured Properties) appear shortly after page load.
- **Hero images** — Next.js `Image` with `quality={75}`, AVIF/WebP via [next.config.js](../next.config.js). First hero image uses `priority` and `fetchPriority="high"`.
- **Static asset cache** — Long cache for `/_next/static/*` and `/Image/*` in [next.config.js](../next.config.js).

## Out of our control

| Issue | Reason |
|-------|--------|
| **CloudFront listing images** (RealScout) | Served by RealScout/CloudFront; we do not control URL, format, size, or cache headers. Markup is from the RealScout web component; IDX/RealScout components are not modified per project rules. |
| **Render-blocking CSS** | Single Next.js compiled CSS bundle. Reducing it would require critical-CSS extraction or splitting (larger refactor). |
| **Third-party cache** | We cannot set Cache-Control for RealScout or CloudFront responses. |
| **Unused JS in third-party** (RealScout, GTM) | Third-party bundles; we cannot tree-shake them. Deferring load (lazyOnload) limits impact on initial load. |
| **Non-composited animations** (e.g. MUI pagination in RealScout) | Comes from the RealScout widget; we cannot change that code. |
| **Legacy JavaScript polyfills** | From Next/React or dependencies. Optional: modern `browserslist` in package.json for a small gain. |

## Verification

After deployment, run Lighthouse (Chrome DevTools or PageSpeed Insights) with:

- **Device:** Moto G Power (or mobile)
- **Throttling:** Slow 4G

Confirm LCP and FCP improve and that the hero search and Featured Properties listings still render and work after load.
