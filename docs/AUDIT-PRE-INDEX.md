# Pre-Index Audit (While Waiting for GSC)

Quick audit done before/during Google Search Console indexing. Items checked and fixes applied.

## Fixes Applied

### 1. Schema telephone consistency (NAP)
- **Issue:** `lib/schema.ts` used hardcoded `"+1-702-744-2993"` while `lib/gbp-schema.ts` uses `businessInfo.phone.tel` (`+17027442993`).
- **Fix:** Site-wide RealEstateAgent schema now uses `officeInfo.phoneTel.replace(/^tel:/, "")` so the phone number comes from a single source and matches GBP.

### 2. Placeholder listing detail pages
- **Issue:** `/listings/[id]` returns the same mock listing for every id, with "Summerlin" and zip 89135 (off-brand, wrong area). Those URLs could be crawled and create thin/duplicate content.
- **Fix:**
  - Added `robots: { index: false, follow: true }` so Google does not index placeholder listing URLs until RealScout is wired.
  - Updated mock copy to Providence (location, description, address zip 89166) so any traffic sees consistent branding.

## Checked and OK

- No remaining YOUR_, TODO, or FIXME placeholders in app code (only docs/examples).
- NAP and address appear consistently across pages.
- Canonical URLs set on all main pages.
- No empty or missing image `alt` in components.
- `robots.txt` allows `/`, disallows `/api/`, has sitemap.
- CSP and security headers in `next.config.js`.
- Schema validation script passes (`npm run schema:validate`).

## Optional Later

- When RealScout is wired for listing detail: remove `robots: { index: false }` and use real listing data.
- Run [validator.schema.org](https://validator.schema.org/) on a few live URLs after deploy.
- In GSC, monitor Coverage and Core Web Vitals once indexing starts.
