# Internal Linking Implementation Checklist

Track your progress updating pages with internal and external links.

## ✅ Phase 1: Critical Pages (Priority 1)

### Core Pages
- [ ] **Homepage** (`/app/page.tsx`)
  - [ ] Add breadcrumbs
  - [ ] Add 5+ contextual `<InlineLink>` components
  - [ ] Add `<RelatedPages pages={getRelatedPages("home")} />`
  - **Expected:** +6 internal links

- [ ] **About** (`/app/about/page.tsx`)
  - [ ] Add breadcrumbs: `[{ label: "About Dr. Jan Duffy" }]`
  - [ ] Add 4-5 contextual links (BHHS, Providence, contact, reviews)
  - [ ] Add `<RelatedPages pages={getRelatedPages("about")} />`
  - **Expected:** +5 internal links

- [ ] **Contact** (`/app/contact/page.tsx`)
  - [ ] Add breadcrumbs: `[{ label: "Contact" }]`
  - [ ] Add 3-4 contextual links (valuation, market report, search)
  - [ ] Add `<RelatedPages pages={getRelatedPages("contact")} />`
  - **Expected:** +4 internal links

- [ ] **Market Report** (`/app/market-report/page.tsx`)
  - [ ] Add breadcrumbs: `[{ label: "Market Report" }]`
  - [ ] Add 5+ contextual links (neighborhoods, services)
  - [ ] Add `<ExternalResources resources={getExternalResources("marketData")} />`
  - [ ] Add `<RelatedPages pages={getRelatedPages("marketReport")} />`
  - **Expected:** +7 internal, +3 external links

- [x] **Providence Hub** (`/app/providence/page.tsx`) ✅ DONE
  - [x] Breadcrumbs added
  - [x] 15+ contextual links added
  - [x] External Providence HOA resources added
  - [x] Related pages added

**Phase 1 Subtotal:** 5 pages updated, ~30 internal links, ~3 external links

---

## ✅ Phase 2: Service Hubs (Priority 2)

### Buyer Services
- [ ] **Buyers Hub** (`/app/buyers/page.tsx`)
  - [ ] Add breadcrumbs: `[{ label: "Home Buying Services" }]`
  - [ ] Link to 3 buyer personas (first-time, California, luxury)
  - [ ] Add 3-4 other contextual links
  - [ ] Add `<ExternalResources resources={getExternalResources("buyerResources")} />`
  - [ ] Add `<RelatedPages pages={getRelatedPages("buyers")} />`
  - **Expected:** +9 internal, +3 external links

- [ ] **First-Time Buyers** (`/app/buyers/first-time-buyers/page.tsx`)
  - [ ] Add breadcrumbs: `[{ label: "Buyers", href: "/buyers" }, { label: "First-Time Buyers" }]`
  - [ ] Link back to buyers hub
  - [ ] Add 4-5 contextual links
  - [ ] Add `<RelatedPages pages={getRelatedPages("buyers")} />`

- [ ] **California Relocators** (`/app/buyers/california-relocator/page.tsx`)
  - [ ] Add breadcrumbs: `[{ label: "Buyers", href: "/buyers" }, { label: "California Relocators" }]`
  - [ ] Link back to buyers hub
  - [ ] Add 4-5 contextual links
  - [ ] Add `<RelatedPages pages={getRelatedPages("buyers")} />`

- [ ] **Luxury Home Buyers** (`/app/buyers/luxury-homes-las-vegas/page.tsx`)
  - [ ] Add breadcrumbs: `[{ label: "Buyers", href: "/buyers" }, { label: "Luxury Homes" }]`
  - [ ] Link back to buyers hub
  - [ ] Add 4-5 contextual links
  - [ ] Add `<RelatedPages pages={getRelatedPages("buyers")} />`

### Seller Services
- [ ] **Sellers Hub** (`/app/sellers/page.tsx`)
  - [ ] Add breadcrumbs: `[{ label: "Home Selling Services" }]`
  - [ ] Link to 4 seller personas
  - [ ] Add 3-4 other contextual links
  - [ ] Add `<ExternalResources resources={getExternalResources("sellerResources")} />`
  - [ ] Add `<RelatedPages pages={getRelatedPages("sellers")} />`
  - **Expected:** +8 internal, +2 external links

- [ ] **Move-Up Sellers** (`/app/sellers/move-up/page.tsx`)
  - [ ] Add breadcrumbs: `[{ label: "Sellers", href: "/sellers" }, { label: "Move-Up Sellers" }]`
  - [ ] Link back to sellers hub
  - [ ] Add `<RelatedPages pages={getRelatedPages("sellers")} />`

- [ ] **Downsizing** (`/app/sellers/downsizing/page.tsx`)
  - [ ] Add breadcrumbs: `[{ label: "Sellers", href: "/sellers" }, { label: "Downsizing" }]`
  - [ ] Link back to sellers hub
  - [ ] Add `<RelatedPages pages={getRelatedPages("sellers")} />`

- [ ] **Divorce/Probate** (`/app/sellers/divorce-probate/page.tsx`)
  - [ ] Add breadcrumbs: `[{ label: "Sellers", href: "/sellers" }, { label: "Divorce & Probate" }]`
  - [ ] Link back to sellers hub
  - [ ] Add `<RelatedPages pages={getRelatedPages("sellers")} />`

- [ ] **Relocation Sellers** (`/app/sellers/relocation/page.tsx`)
  - [ ] Add breadcrumbs: `[{ label: "Sellers", href: "/sellers" }, { label: "Relocation" }]`
  - [ ] Link back to sellers hub
  - [ ] Add `<RelatedPages pages={getRelatedPages("sellers")} />`

**Phase 2 Subtotal:** 9 pages updated, ~60 internal links, ~5 external links

---

## ✅ Phase 3: Providence Neighborhoods (Priority 3)

### Template for All 27 Neighborhoods
Use this template for each Providence neighborhood page:

```tsx
<Breadcrumbs items={[
  { label: "Providence", href: "/providence" },
  { label: "Neighborhoods", href: "/providence" },
  { label: "{Neighborhood Name}" },
]} />

// Add 3-5 contextual links in content:
// - Link "Providence Master HOA" to external providencelvhoa.com
// - Link "community parks" to /providence
// - Link "buy" to /buyers
// - Link "sell" to /sellers
// - Link to 2-3 nearby neighborhoods

<ExternalResources resources={getExternalResources("providenceResources")} />
<RelatedPages pages={getRelatedPages("providenceNeighborhood")} />
```

### Providence Neighborhood Pages (27 total)
- [ ] Auburn & Bradford
- [ ] Bar Arbor Glen
- [ ] Barrington Manor
- [ ] Brighton
- [ ] Cambridge
- [ ] Chestnut Hill
- [ ] Easton Place
- [ ] Emerson
- [ ] Franklin Park
- [ ] Hearthstone/Brookstone
- [ ] Highgate
- [ ] Kensington
- [ ] Living Smart
- [ ] Madison Colony
- [ ] Madison Grove
- [ ] Manchester Park
- [ ] Monticello/Liberty Hill
- [ ] Northern Terrace
- [ ] Oak Ridge
- [ ] Oxford Commons
- [ ] Saratoga Highlands
- [ ] Somerset
- [ ] Thrive
- [ ] Verada View
- [ ] West End
- [ ] Westminster
- [ ] Windimere

**Phase 3 Subtotal:** 27 pages, ~135 internal links, ~81 external links

---

## ✅ Phase 4: Other Neighborhoods (Priority 4)

### Major Las Vegas Neighborhoods
- [ ] **Summerlin** (`/app/neighborhoods/summerlin/page.tsx`)
  - [ ] Add breadcrumbs: `[{ label: "Neighborhoods", href: "/neighborhoods" }, { label: "Summerlin" }]`
  - [ ] Add 5+ contextual links (The Ridges, Skye Canyon, luxury homes)
  - [ ] Add `<ExternalResources resources={getExternalResources("lasVegasInfo")} />`
  - [ ] Add `<RelatedPages pages={getRelatedPages("summerlin")} />`

- [ ] **Henderson** (`/app/neighborhoods/henderson/page.tsx`)
  - [ ] Add breadcrumbs: `[{ label: "Neighborhoods", href: "/neighborhoods" }, { label: "Henderson" }]`
  - [ ] Add 5+ contextual links
  - [ ] Add `<ExternalResources resources={getExternalResources("lasVegasInfo")} />`
  - [ ] Add `<RelatedPages pages={getRelatedPages("henderson")} />`

- [ ] **The Ridges** (`/app/neighborhoods/the-ridges/page.tsx`)
  - [ ] Add breadcrumbs: `[{ label: "Neighborhoods", href: "/neighborhoods" }, { label: "The Ridges" }]`
  - [ ] Add contextual links
  - [ ] Add `<RelatedPages pages={getRelatedPages("luxuryHomes")} />`

- [ ] Green Valley
- [ ] Southern Highlands
- [ ] North Las Vegas
- [ ] Skye Canyon
- [ ] Centennial Hills
- [ ] Inspirada
- [ ] Mountains Edge

**Phase 4 Subtotal:** 10 pages, ~60 internal links, ~30 external links

---

## ✅ Phase 5: 55+ Communities (Priority 5)

### Active Adult Communities
- [ ] **55+ Hub** (`/app/55-plus-communities/page.tsx`)
  - [ ] Add breadcrumbs: `[{ label: "55+ Active Adult Communities" }]`
  - [ ] Link to all 7 communities
  - [ ] Add `<ExternalResources resources={getExternalResources("seniorResources")} />`
  - [ ] Add `<RelatedPages pages={getRelatedPages("fiftyPlusCommunities")} />`

- [ ] Sun City Summerlin
- [ ] Sun City Anthem
- [ ] Sun City Aliante
- [ ] Heritage at Stonebridge
- [ ] Solera Anthem
- [ ] Trilogy Summerlin
- [ ] Del Webb Lake Las Vegas

**Phase 5 Subtotal:** 8 pages, ~40 internal links, ~16 external links

---

## ✅ Phase 6: Remaining Service Pages (Priority 6)

### Other Services
- [ ] **Luxury Homes** (`/app/luxury-homes/page.tsx`)
  - [ ] Add breadcrumbs: `[{ label: "Luxury Homes" }]`
  - [ ] Link to The Ridges, Southern Highlands, Summerlin
  - [ ] Add `<ExternalResources resources={getExternalResources("luxuryResources")} />`
  - [ ] Add `<RelatedPages pages={getRelatedPages("luxuryHomes")} />`

- [ ] **New Construction** (`/app/new-construction/page.tsx`)
  - [ ] Add breadcrumbs
  - [ ] Add contextual links (Skye Canyon, Inspirada, North LV)
  - [ ] Add `<RelatedPages pages={getRelatedPages("newConstruction")} />`

- [ ] Investment Properties
- [ ] Relocation
- [ ] Home Valuation
- [ ] Market Insights
- [ ] Market Update

**Phase 6 Subtotal:** 7 pages, ~35 internal links

---

## 📊 Progress Tracker

| Phase | Pages | Status | Internal Links | External Links |
|-------|-------|--------|----------------|----------------|
| Phase 1 | 5 | ⬜ Not Started | Target: +30 | Target: +3 |
| Phase 2 | 9 | ⬜ Not Started | Target: +60 | Target: +5 |
| Phase 3 | 27 | ⬜ Not Started | Target: +135 | Target: +81 |
| Phase 4 | 10 | ⬜ Not Started | Target: +60 | Target: +30 |
| Phase 5 | 8 | ⬜ Not Started | Target: +40 | Target: +16 |
| Phase 6 | 7 | ⬜ Not Started | Target: +35 | Target: +0 |
| **TOTAL** | **66** | **0%** | **+360** | **+135** |

---

## 🎯 Milestones

- [ ] **Quick Win:** Complete Phase 1 (5 critical pages)
  - Result: +30 internal links, +3 external links
  - GSC should show improvement within 1-2 weeks

- [ ] **Major Progress:** Complete Phases 1-2 (14 pages)
  - Result: +90 internal links, +8 external links
  - Internal link count visible in GSC

- [ ] **Bulk Complete:** Complete Phase 3 (Providence neighborhoods)
  - Result: +225 total internal links, +89 external links
  - Most pages now properly linked

- [ ] **Full Implementation:** Complete all 6 phases
  - Result: +360 internal links, +135 external links
  - GSC issue fully resolved

---

## ✅ Next Actions

1. [ ] Review example implementation: `/app/providence/page.tsx`
2. [ ] Start with homepage (`/app/page.tsx`)
3. [ ] Update about page (`/app/about/page.tsx`)
4. [ ] Update contact page (`/app/contact/page.tsx`)
5. [ ] Test locally: `vercel dev`
6. [ ] Deploy: `vercel build && vercel deploy`
7. [ ] Monitor GSC in 1-2 weeks

---

**Last Updated:** February 15, 2026
