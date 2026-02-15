# Deploy & Google Search Console Monitoring

After the Schema Fix & FAQ Enhancement implementation, follow these steps.

## Pre-Launch Checklist

| Step | Action |
| --- | --- |
| GSC verification | Add `GOOGLE_SITE_VERIFICATION` in Vercel Project Settings → Environment Variables (production). Value = the `content` from the meta tag GSC provides. |
| Schema validation | After deploy: `npm run schema:validate` |
| Rich Results Test | Test `https://www.providencelasvegas.com`, `/about`, `/providence` at [Google Rich Results Test](https://search.google.com/test/rich-results) |
| Submit sitemap | GSC → Sitemaps → Add `https://www.providencelasvegas.com/sitemap.xml` |
| Request indexing | GSC → URL Inspection → Request indexing for homepage and 3–5 key pages |

## Deploy

### Option A: Vercel (recommended per project rules)

```bash
# If not linked: vercel link
vercel build
vercel --prod
```

Or push to your connected Git repository; Vercel will build and deploy automatically.

### Option B: Standard build

```bash
npm run build
# Deploy .next/ output per your hosting setup
```

## Post-Deploy: Schema Validation

1. Run local schema check: `npm run schema:validate`
2. Test a live URL at [Google Rich Results Test](https://search.google.com/test/rich-results)
3. Verify [Schema.org Validator](https://validator.schema.org/) shows no errors

## Google Search Console Monitoring

### What to watch (1–2 weeks)

- **Enhancements → Structured Data**: "Missing field itemReviewed" errors should clear
- **Enhancements → FAQ**: FAQ pages may become eligible for rich results
- **Coverage**: No new schema-related errors

### What to expect (2–3 months)

- FAQ snippets may appear in search results
- Improved rich result eligibility
- Potential traffic lift from FAQ targeting

### Manual GSC steps

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select property: www.providencelasvegas.com
3. **Enhancements** → **Structured Data** → Check for errors
4. **Enhancements** → **FAQ** (when available) → Monitor impressions
5. Use **URL Inspection** on key pages to trigger re-indexing after deploy
