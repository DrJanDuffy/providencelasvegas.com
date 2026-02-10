# SEO & AI Search Monitoring

## Google Search Console

- **Verification:** Set `GOOGLE_SITE_VERIFICATION` in your environment (e.g. Vercel env) to your GSC meta tag value. The root layout reads it and outputs the verification meta tag.
- **Sitemap:** Submit `https://www.providencelasvegas.com/sitemap.xml` in Google Search Console (Sitemaps section).
- **Coverage:** Monitor indexed pages and fix any errors or warnings reported.

## Core Web Vitals Targets

- **LCP (Largest Contentful Paint):** ≤ 2.5s
- **CLS (Cumulative Layout Shift):** ≤ 0.1
- **INP (Interaction to Next Paint):** ≤ 200ms

**How to check:** Use [PageSpeed Insights](https://pagespeed.web.dev/) and the Core Web Vitals report in Google Search Console monthly. Address images (sizes, priority), layout shifts, and long tasks as needed.

## Fresh Data & Market Stats

- Market statistics live in `lib/site-config.ts` (`marketStats`, `providenceCommunity`). The market report and market-update pages use these and cite sources (LVR MLS, broker analysis).
- **Refresh process:** Update `marketStats.lastUpdated` and any report dates when you refresh numbers (e.g. monthly). Consider a calendar reminder to sync with new MLS or LVR data.

## AI Citation Monitoring

- Periodically check how AI engines (e.g. ChatGPT, Perplexity, Google SGE) cite the site for Las Vegas real estate, Providence, or Dr. Jan Duffy.
- If you see incorrect or hallucinated facts, correct the source content or schema on the site so future crawls reflect the truth.

## Multi-Platform & YouTube

- Cross-link to YouTube (or other channels) from neighborhood and market-report pages where relevant.
- Embedding a video on a high-traffic page (e.g. Providence or market-report) can support dwell time and authority. Add the embed and ensure `frame-src` in CSP allows the video host.
