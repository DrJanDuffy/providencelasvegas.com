# Schema Testing & Validation Guide

This document describes how to validate structured data (JSON-LD) after the Schema Fix & FAQ Enhancement implementation.

## Summary of Schema Fixes (Phase 1)

- **Review schema**: Each `Review` now includes required `itemReviewed` property pointing to the RealEstateAgent
- **ReviewsSection microdata**: Added `itemReviewed` with `itemScope`/`itemType` for each Review
- **Homepage**: Removed standalone `aggregateRating`; RealEstateAgent schema from root layout includes proper structure

## Manual Testing Steps

### 1. Google Rich Results Test

**URL:** https://search.google.com/test/rich-results

1. After deployment, enter your page URL (e.g. `https://www.providencelasvegas.com`)
2. Click **Test URL**
3. Verify:
   - **RealEstateAgent** schema detected with no errors
   - **FAQPage** schema detected (homepage and pages with FAQ sections)
   - **Review** schemas show no "Missing field itemReviewed" errors
4. Test additional URLs:
   - `/about` – Person/RealEstateAgent + FAQPage
   - `/providence` – Place + FAQPage
   - `/neighborhoods/summerlin` – Place + FAQPage
   - `/buyers` – FAQPage
   - `/55-plus-communities/sun-city-summerlin` – FAQPage

### 2. Schema.org Validator

**URL:** https://validator.schema.org/

1. Option A: Enter your deployed page URL
2. Option B: Paste the JSON-LD block from the page source
3. Verify:
   - No errors or warnings for required properties
   - `Review` items include `itemReviewed` with `@type`, `name`, `url`
   - `FAQPage` has valid `mainEntity` array with `Question`/`Answer` structure

### 3. Required Schema Checks

| Schema Type      | Required Fields                                        | Fixed? |
|------------------|--------------------------------------------------------|--------|
| Review           | `itemReviewed` with @type, name, url                  | ✅     |
| AggregateRating | ratingValue, reviewCount, bestRating, worstRating      | ✅     |
| FAQPage          | mainEntity[].@type=Question, acceptedAnswer            | ✅     |
| RealEstateAgent  | @context, @type, name, url, address                    | ✅     |

## Expected Results

### Immediate (1–2 weeks after deploy)

- GSC "Missing field itemReviewed" errors resolve
- FAQ rich results become eligible in search
- No new schema errors in Search Console

### Long-term (2–3 months)

- FAQ snippets may appear in SERPs
- Improved rich result eligibility
- Better E-E-A-T signals from FAQ content

## Pages with FAQ Schema (47 total)

- **Core:** home, about, contact, providence, neighborhoods
- **Providence neighborhoods:** 27 dynamic pages
- **Other neighborhoods:** summerlin, henderson, green-valley, the-ridges, southern-highlands, north-las-vegas, skye-canyon, centennial-hills, inspirada, mountains-edge
- **Service pages:** buyers, sellers, luxury-homes, new-construction, investment-properties, relocation, home-valuation, market-report, market-insights, market-update
- **55+ communities:** hub + 7 community pages

## Troubleshooting

- **"Missing field itemReviewed"**: Ensure `ReviewsSection.tsx` microdata and `SchemaScript` ReviewSchema include `itemReviewed` on each Review
- **FAQ not detected**: Verify `FAQSchema` component renders JSON-LD with valid `mainEntity` array
- **Duplicate schema**: Homepage should not duplicate RealEstateAgent from layout; only FAQ schema is page-specific
