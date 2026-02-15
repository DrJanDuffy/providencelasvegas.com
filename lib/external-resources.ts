/**
 * External Authority Links for E-E-A-T
 * Linking to authoritative external sources improves content credibility and SEO
 */

export const externalResources = {
  // Real Estate Market Data
  marketData: [
    {
      title: "Las Vegas Housing Market Trends",
      url: "https://www.zillow.com/las-vegas-nv/home-values/",
      description: "Current home values, market trends, and forecasts for Las Vegas",
      source: "Zillow",
    },
    {
      title: "Greater Las Vegas Association of REALTORS® Market Statistics",
      url: "https://www.glvar.org/",
      description: "Official MLS statistics and market reports for Las Vegas",
      source: "GLVAR",
    },
    {
      title: "NAR Housing Market Reports",
      url: "https://www.nar.realtor/research-and-statistics/housing-statistics",
      description: "National housing statistics and research from NAR",
      source: "National Association of REALTORS®",
    },
  ],

  // Providence HOA & Community
  providenceResources: [
    {
      title: "Providence Master HOA Official Website",
      url: "https://www.providencelvhoa.com/home/",
      description: "Official HOA website with community info, design review, and resale documents",
      source: "Providence Las Vegas HOA",
    },
    {
      title: "Providence Neighborhood Communities",
      url: "https://www.providencelvhoa.com/neighborhood-communities-2/",
      description: "Complete list of all 27 neighborhoods in Providence",
      source: "Providence Las Vegas HOA",
    },
    {
      title: "Providence HOA Documents & CC&Rs",
      url: "https://www.providencelvhoa.com/community-info/documents/",
      description: "Official HOA documents, CC&Rs, bylaws, and community guidelines",
      source: "Providence Las Vegas HOA",
    },
  ],

  // Las Vegas Living & Relocation
  lasVegasInfo: [
    {
      title: "City of Las Vegas Official Website",
      url: "https://www.lasvegasnevada.gov/",
      description: "Official city services, permits, and community information",
      source: "City of Las Vegas",
    },
    {
      title: "Clark County School District",
      url: "https://www.ccsd.net/",
      description: "School ratings, boundaries, and enrollment information",
      source: "CCSD",
    },
    {
      title: "Las Vegas Convention and Visitors Authority",
      url: "https://www.lvcva.com/",
      description: "Visitor information, events, and attractions in Las Vegas",
      source: "LVCVA",
    },
  ],

  // Berkshire Hathaway Resources
  bhhsResources: [
    {
      title: "Berkshire Hathaway HomeServices Global Network",
      url: "https://www.berkshirehathawayhs.com/",
      description: "Official BHHS website with 50,000+ agents worldwide",
      source: "Berkshire Hathaway HomeServices",
    },
    {
      title: "Berkshire Hathaway Inc.",
      url: "https://www.berkshirehathaway.com/",
      description: "Warren Buffett's Berkshire Hathaway - the parent company",
      source: "Berkshire Hathaway Inc.",
    },
  ],

  // Home Buying Resources
  buyerResources: [
    {
      title: "Consumer Financial Protection Bureau - Buying a House",
      url: "https://www.consumerfinance.gov/owning-a-home/",
      description: "Federal guide to buying a home, mortgages, and closing costs",
      source: "CFPB",
    },
    {
      title: "FHA Loan Limits",
      url: "https://www.hud.gov/program_offices/housing/sfh/lender/origination/mortgage_limits",
      description: "Official FHA loan limits for Clark County, Nevada",
      source: "HUD",
    },
    {
      title: "Nevada Real Estate Division",
      url: "https://red.nv.gov/",
      description: "Nevada real estate licensing and consumer protection",
      source: "State of Nevada",
    },
  ],

  // Seller Resources
  sellerResources: [
    {
      title: "IRS Capital Gains Tax on Home Sales",
      url: "https://www.irs.gov/taxtopics/tc701",
      description: "Tax implications of selling your home",
      source: "IRS",
    },
    {
      title: "Nevada Property Disclosure Requirements",
      url: "https://red.nv.gov/",
      description: "Nevada seller disclosure obligations and requirements",
      source: "Nevada Real Estate Division",
    },
  ],

  // 55+ Community Resources
  seniorResources: [
    {
      title: "Sun City Summerlin Community Association",
      url: "https://www.suncitysum.com/",
      description: "Official website for Sun City Summerlin residents",
      source: "Sun City Summerlin",
    },
    {
      title: "Del Webb Communities",
      url: "https://www.delwebb.com/",
      description: "Official Del Webb 55+ community builder information",
      source: "Del Webb",
    },
  ],

  // Luxury Home Resources
  luxuryResources: [
    {
      title: "The Ridges Village Association",
      url: "https://www.theridgesvillage.com/",
      description: "Official website for The Ridges luxury community",
      source: "The Ridges",
    },
    {
      title: "Luxury Home Magazine - Las Vegas",
      url: "https://luxuryhomemagazine.com/nevada/las-vegas",
      description: "Luxury real estate trends and market insights",
      source: "Luxury Home Magazine",
    },
  ],

  // Market Insights Resources
  marketInsights: [
    {
      title: "Federal Reserve Economic Data",
      url: "https://fred.stlouisfed.org/",
      description: "Economic indicators including mortgage rates and housing data",
      source: "Federal Reserve",
    },
    {
      title: "U.S. Census Bureau - Las Vegas",
      url: "https://www.census.gov/quickfacts/lasvegascitynevada",
      description: "Population, demographics, and housing statistics",
      source: "U.S. Census Bureau",
    },
    {
      title: "Redfin Data Center - Las Vegas",
      url: "https://www.redfin.com/city/10201/NV/Las-Vegas/housing-market",
      description: "Real-time housing market data and trends",
      source: "Redfin",
    },
  ],
};

/**
 * Get external resources for a specific category
 */
export function getExternalResources(category: keyof typeof externalResources) {
  return externalResources[category] || [];
}
