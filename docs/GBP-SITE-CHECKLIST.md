# Google Business Profile – Site Preparation Checklist

This site is built to support your Google Business Profile (GBP). The website reinforces GBP for local search—NAP, schema, CTAs, and content all align with your Business Profile.

## What the Site Already Has

| Item | Location | Status |
|------|----------|--------|
| NAP (exact match) | All pages, footer, schema | Uses `businessInfo` / `officeInfo` – update in `lib/gbp-schema.ts` and `lib/site-config.ts` if GBP changes |
| LocalBusiness/RealEstateAgent schema | Root layout, all pages | JSON-LD with NAP, hours, services, aggregateRating |
| Opening hours | Schema, footer, contact, directions | M–F 9–6, Sat 10–4, Sun By Appointment |
| Map embed | Footer, contact, google-business | Maps Embed API (requires API key) |
| Call CTA | Footer, contact, directions, google-business | `tel:+17027442993` |
| Directions CTA | Footer, contact, directions, LocationMap | Links to Google Maps |
| Review CTA | Footer, directions, LocationMap, google-business | `https://g.page/r/Ca9gwAWH5oLcEBM/review` |
| GBP profile in schema `sameAs` | `lib/schema.ts`, `lib/gbp-schema.ts` | Helps Google connect site to GBP |
| FAQ schema | google-business, FAQ sections | FAQPage schema for Q&A |
| Canonical URLs | All pages | Prevents duplicate content issues |
| Sitemap | `/sitemap.xml` | Includes `/google-business` |
| Mobile-friendly | Tailwind, responsive | Core Web Vitals optimized |

## GBP Dashboard – Verify These Match the Site

Ensure your GBP dashboard shows:

- **Business name:** Providence Real Estate
- **Address:** 7181 N Hualapai Way #135, Las Vegas, NV 89166
- **Phone:** (702) 744-2993
- **Website:** https://www.providencelasvegas.com
- **Hours:** Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday By Appointment
- **Primary category:** Real Estate Agency
- **Description:** Align with `gbpDescription` in `lib/gbp-schema.ts`
- **Service areas:** Providence, North Las Vegas, Las Vegas
- **Attributes:** Wheelchair accessible, online appointments, etc. (see `businessInfo.attributes`)

If any of these differ, either update GBP to match the site or update the site to match GBP. NAP must be identical everywhere.

## GBP Verified

Your Google Business Profile has been verified using the information on this site. NAP, hours, and business details are aligned. The site supports GBP with schema, CTAs (Call, Directions, Review, View on Google), and a dedicated `/google-business` page.

## Next Steps After GBP Verification

1. **Verify website in Google Search Console**
   - Add property: https://search.google.com/search-console
   - Use HTML tag method: set `GOOGLE_SITE_VERIFICATION` in Vercel env vars
   - Submit sitemap: `https://www.providencelasvegas.com/sitemap.xml`

2. **Request indexing** for key pages in GSC (URL Inspection → Request indexing): homepage, `/contact`, `/google-business`, `/providence`

3. **In GBP dashboard**: Ensure website URL is set (Business → Info → Website) to `https://www.providencelasvegas.com`

4. **Maps API key**: If map embeds are not loading, add `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` to Vercel

## Google Search Console

1. Add the property: https://search.google.com/search-console
2. Verify ownership using HTML tag: add `GOOGLE_SITE_VERIFICATION` to `.env.local` and Vercel. Copy from `.env.example`. The root layout injects it when set.
3. Submit sitemap: `https://www.providencelasvegas.com/sitemap.xml`

## Before Launch

- [x] Confirm NAP in GBP matches site (GBP verified using site information)
- [x] Set `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (Vercel + `.env.local`) for map embeds
- [x] Add `GOOGLE_SITE_VERIFICATION` for Search Console
- [x] Confirm website URL in GBP (Business → Info → Website) points to https://www.providencelasvegas.com

## Monthly Audit (Recommended)

- [ ] NAP still matches GBP on all pages
- [ ] Schema validates at [validator.schema.org](https://validator.schema.org/)
- [ ] Review links still work (`gbpUrls.review`)
- [ ] Map loads on footer/contact (API key valid, quota ok)
- [ ] Search Console: check indexing, errors, Core Web Vitals

## Key Files to Update When GBP Changes

| Change | File(s) |
|--------|---------|
| NAP (name, address, phone) | `lib/gbp-schema.ts` (businessInfo), `lib/site-config.ts` (officeInfo, agentInfo) |
| Hours | `lib/gbp-schema.ts` (businessInfo.hours) |
| Review link | `lib/site-config.ts` (gbpUrls.review) – from GBP → Reviews → Share |
| GBP profile URL | `lib/site-config.ts` (gbpUrls.profile), `lib/gbp-schema.ts` (sameAs) |
| Services, categories | `lib/gbp-schema.ts` (businessInfo.services, categories) |
