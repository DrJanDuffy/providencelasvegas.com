/**
 * Related Pages Configuration
 * Defines internal linking relationships for SEO and user navigation
 */

import { realscoutUrls } from "./site-config";

export const relatedPagesMap = {
  // Homepage
  home: [
    {
      title: "Search Providence Homes",
      description: "View current listings in Providence Las Vegas",
      href: realscoutUrls.searchRelated,
    },
    {
      title: "Providence Neighborhoods",
      description: "Explore all 27 neighborhoods in the Providence master-planned community",
      href: "/providence",
    },
    {
      title: "Luxury Homes in Las Vegas",
      description: "View luxury properties in Summerlin, The Ridges, and Southern Highlands",
      href: "/luxury-homes",
    },
    {
      title: "Market Report",
      description: "Current Las Vegas real estate market statistics and trends",
      href: "/market-report",
    },
  ],

  // Providence pages
  providence: [
    {
      title: "Search Providence Homes",
      description: "View current listings in Providence Las Vegas",
      href: realscoutUrls.searchRelated,
    },
    {
      title: "Why Berkshire Hathaway",
      description: "Learn about the BHHS advantage and Warren Buffett's real estate brand",
      href: "/why-berkshire-hathaway",
    },
    {
      title: "Contact Dr. Jan Duffy",
      description: "Schedule a consultation for buying or selling in Providence",
      href: "/contact",
    },
    {
      title: "Market Insights",
      description: "Providence and Las Vegas market trends and analysis",
      href: "/market-insights",
    },
  ],

  providenceNeighborhood: [
    {
      title: "All Providence Neighborhoods",
      description: "Browse all 27 neighborhoods in the Providence community",
      href: "/providence",
    },
    {
      title: "Search Providence Homes",
      description: "View current listings in Providence Las Vegas",
      href: realscoutUrls.searchRelated,
    },
    {
      title: "Contact About This Neighborhood",
      description: "Get expert guidance from Dr. Jan Duffy about this community",
      href: "/contact",
    },
  ],

  // Buyer pages
  buyers: [
    {
      title: "Search Providence Homes",
      description: "View current listings in Providence Las Vegas",
      href: realscoutUrls.searchRelated,
    },
    {
      title: "First-Time Home Buyers",
      description: "Essential guide for first-time buyers in Las Vegas",
      href: "/buyers/first-time-buyers",
    },
    {
      title: "California Relocators",
      description: "Moving from California? Learn about the Las Vegas advantage",
      href: "/buyers/california-relocator",
    },
    {
      title: "Luxury Homes Las Vegas",
      description: "Explore high-end properties in premier Las Vegas communities",
      href: "/buyers/luxury-homes-las-vegas",
    },
  ],

  // Seller pages
  sellers: [
    {
      title: "Search Providence Homes",
      description: "Browse current listings in Providence Las Vegas",
      href: realscoutUrls.searchRelated,
    },
    {
      title: "Move-Up Sellers",
      description: "Ready to upgrade? Learn how to sell and buy simultaneously",
      href: "/sellers/move-up",
    },
    {
      title: "Downsizing Guide",
      description: "Transition to a smaller home with expert guidance",
      href: "/sellers/downsizing",
    },
    {
      title: "Relocation Sellers",
      description: "Selling your home due to relocation? We can help",
      href: "/sellers/relocation",
    },
  ],

  // Service pages
  luxuryHomes: [
    {
      title: "Search Providence Homes",
      description: "View luxury and all listings in Providence Las Vegas",
      href: realscoutUrls.searchRelated,
    },
    {
      title: "The Ridges Summerlin",
      description: "Ultra-luxury guard-gated community with celebrity homes",
      href: "/neighborhoods/the-ridges",
    },
    {
      title: "Southern Highlands",
      description: "Master-planned luxury community with championship golf",
      href: "/neighborhoods/southern-highlands",
    },
    {
      title: "Summerlin Luxury Real Estate",
      description: "Explore luxury properties in master-planned Summerlin",
      href: "/neighborhoods/summerlin",
    },
  ],

  fiftyPlusCommunities: [
    {
      title: "Search 55+ Homes",
      description: "Browse active adult and all listings in Las Vegas",
      href: realscoutUrls.searchRelated,
    },
    {
      title: "Sun City Summerlin",
      description: "Premier active adult community in Las Vegas",
      href: "/55-plus-communities/sun-city-summerlin",
    },
    {
      title: "Heritage at Stonebridge",
      description: "Gated 55+ community in northwest Las Vegas",
      href: "/55-plus-communities/heritage-stonebridge",
    },
    {
      title: "Sun City Anthem Henderson",
      description: "Active adult living in Henderson's Black Mountain area",
      href: "/55-plus-communities/sun-city-anthem",
    },
  ],

  newConstruction: [
    {
      title: "Search New Construction",
      description: "Browse new build and all Las Vegas listings",
      href: realscoutUrls.searchRelated,
    },
    {
      title: "Skye Canyon",
      description: "Newer master-planned community with new construction homes",
      href: "/neighborhoods/skye-canyon",
    },
    {
      title: "Inspirada Henderson",
      description: "Henderson master-planned community with resort-style living",
      href: "/neighborhoods/inspirada",
    },
    {
      title: "North Las Vegas",
      description: "Rapidly growing area with affordable new construction",
      href: "/neighborhoods/north-las-vegas",
    },
  ],

  // Neighborhood pages
  neighborhoods: [
    {
      title: "Search Providence Homes",
      description: "View current listings across Las Vegas",
      href: realscoutUrls.searchRelated,
    },
    {
      title: "Providence Las Vegas",
      description: "Master-planned community with 27 neighborhoods",
      href: "/providence",
    },
    {
      title: "Summerlin Real Estate",
      description: "Las Vegas's premier master-planned community",
      href: "/neighborhoods/summerlin",
    },
    {
      title: "Henderson Neighborhoods",
      description: "Family-friendly communities in Nevada's second-largest city",
      href: "/neighborhoods/henderson",
    },
  ],

  summerlin: [
    {
      title: "The Ridges",
      description: "Ultra-luxury guard-gated community in Summerlin",
      href: "/neighborhoods/the-ridges",
    },
    {
      title: "Skye Canyon",
      description: "Newer master-planned community in northwest Las Vegas",
      href: "/neighborhoods/skye-canyon",
    },
    {
      title: "Luxury Homes in Las Vegas",
      description: "View all luxury properties across Las Vegas",
      href: "/luxury-homes",
    },
  ],

  henderson: [
    {
      title: "Green Valley Henderson",
      description: "Established community with mature landscaping",
      href: "/neighborhoods/green-valley",
    },
    {
      title: "Inspirada",
      description: "Henderson master-planned community with resort-style living",
      href: "/neighborhoods/inspirada",
    },
    {
      title: "55+ Communities in Henderson",
      description: "Active adult living options in Henderson",
      href: "/55-plus-communities",
    },
  ],

  // Market pages
  marketReport: [
    {
      title: "Search Providence Homes",
      description: "View current listings in Providence Las Vegas",
      href: realscoutUrls.searchRelated,
    },
    {
      title: "Market Update",
      description: "Latest Las Vegas real estate market trends and news",
      href: "/market-update",
    },
    {
      title: "Market Insights",
      description: "In-depth analysis of Las Vegas market conditions",
      href: "/market-insights",
    },
    {
      title: "Home Valuation",
      description: "Get a free estimate of your home's current market value",
      href: "/home-valuation",
    },
  ],

  // About/Contact pages
  about: [
    {
      title: "Search Providence Homes",
      description: "View current listings in Providence Las Vegas",
      href: realscoutUrls.searchRelated,
    },
    {
      title: "Why Berkshire Hathaway",
      description: "Learn about the BHHS brand and its Warren Buffett connection",
      href: "/why-berkshire-hathaway",
    },
    {
      title: "Contact Dr. Jan Duffy",
      description: "Schedule a consultation or property showing",
      href: "/contact",
    },
    {
      title: "Client Reviews",
      description: "See what clients say about working with Dr. Jan Duffy",
      href: "/google-business",
    },
  ],

  contact: [
    {
      title: "Free Home Valuation",
      description: "Find out what your home is worth in today's market",
      href: "/home-valuation",
    },
    {
      title: "Search Properties",
      description: "Browse current listings in Las Vegas and Henderson",
      href: realscoutUrls.searchRelated,
    },
    {
      title: "About Dr. Jan Duffy",
      description: "Learn about your BHHS Nevada Properties agent",
      href: "/about",
    },
  ],
};

/**
 * Get related pages for a specific page type
 */
export function getRelatedPages(pageType: keyof typeof relatedPagesMap) {
  return relatedPagesMap[pageType] || [];
}
