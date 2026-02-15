import Navbar from "@/components/layouts/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import RealScoutInContractSection from "@/components/sections/RealScoutInContractSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/layouts/Footer";
import FAQSchema from "@/components/schemas/FAQSchema";
import Link from "next/link";
import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { providenceNeighborhoods, providenceCommunity, realscoutUrls } from "@/lib/site-config";
import { getFAQsForPage } from "@/lib/faq-library";

export const metadata: Metadata = {
  title: "Providence Real Estate | Homes for Sale in Providence Las Vegas",
  description:
    "Providence Real Estate. Homes for sale in Providence Las Vegas and North Las Vegas. Real Estate Agency. Call (702) 744-2993.",
  keywords: [
    "Las Vegas real estate",
    "Providence Las Vegas homes",
    "Summerlin real estate",
    "Henderson real estate",
    "hyperlocal Las Vegas",
  ],
};

// RealEstateAgent schema is provided site-wide in root layout (SchemaScript)
// Do not duplicate - causes GSC "missing itemReviewed" errors

export default function Home() {
  const homeFAQs = getFAQsForPage("home");

  return (
    <>
      <FAQSchema faqs={homeFAQs} />
      <Navbar />
      <main>
        <HeroSection />
        <RealScoutListings />
        <RealScoutInContractSection />

        {/* Services + Locations - Providence Real Estate */}
        <section className="py-12 md:py-16 bg-white" aria-labelledby="services-locations">
          <div className="container mx-auto px-4">
            <h2 id="services-locations" className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
              Services &amp; Locations
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Services</h3>
                <ul className="space-y-2 text-slate-700">
                  <li><Link href="/buyers" className="text-blue-600 hover:underline">Home Buying</Link></li>
                  <li><Link href="/sellers" className="text-blue-600 hover:underline">Home Selling</Link></li>
                  <li><Link href="/luxury-homes" className="text-blue-600 hover:underline">Luxury Homes</Link></li>
                  <li><Link href="/55-plus-communities" className="text-blue-600 hover:underline">55+ Communities</Link></li>
                  <li><Link href="/new-construction" className="text-blue-600 hover:underline">New Construction</Link></li>
                  <li><Link href="/relocation" className="text-blue-600 hover:underline">Relocation</Link></li>
                  <li><Link href="/home-valuation" className="text-blue-600 hover:underline">Home Valuation</Link></li>
                  <li><a href={realscoutUrls.searchHomepageServices} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Search Providence Homes</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Locations</h3>
                <ul className="space-y-2 text-slate-700">
                  <li><Link href="/providence" className="text-blue-600 hover:underline">Providence (27 neighborhoods)</Link></li>
                  <li><Link href="/neighborhoods/summerlin" className="text-blue-600 hover:underline">Summerlin</Link></li>
                  <li><Link href="/neighborhoods/henderson" className="text-blue-600 hover:underline">Henderson</Link></li>
                  <li><Link href="/neighborhoods/green-valley" className="text-blue-600 hover:underline">Green Valley</Link></li>
                  <li><Link href="/neighborhoods/the-ridges" className="text-blue-600 hover:underline">The Ridges</Link></li>
                  <li><Link href="/neighborhoods" className="text-blue-600 hover:underline">All Las Vegas Neighborhoods</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition - Providence Real Estate */}
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Providence Real Estate
              </h2>
              <p className="text-slate-700 leading-relaxed">
                <strong>Providence Real Estate</strong> serves Providence and North Las Vegas, NV 89166. 
                Homes for sale in Providence Las Vegas. Buy or sell with expert local guidance. 
                Dr. Jan Duffy | Berkshire Hathaway HomeServices Nevada Properties.
              </p>
            </div>
          </div>
        </section>

        {/* Market Stats Section */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Las Vegas Real Estate Market
              </h2>
              <p className="text-slate-300">
                Current market data for Providence, Summerlin, Henderson, and Las Vegas.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">$450K</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
                <div className="text-green-400 text-sm">+4.2% YoY</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">28</div>
                <div className="text-slate-300 text-sm">Avg Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">4,850</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">2.1</div>
                <div className="text-slate-300 text-sm">Months Inventory</div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/market-report"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                View Full Market Report
              </Link>
            </div>
          </div>
        </section>

        {/* The Neighborhoods of Providence */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                The Neighborhoods of Providence
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Providence is a master-planned community of {providenceCommunity.neighborhoodCount}{" "}
                neighborhoods and more than {providenceCommunity.homeCount} homes. Each neighborhood
                has its own amenities.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-4 text-center">
                Community Parks
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {providenceCommunity.parks.map((park) => (
                  <span
                    key={park.slug}
                    className="bg-slate-100 rounded-lg px-4 py-2 text-slate-700 font-medium"
                  >
                    {park.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {providenceNeighborhoods.map((area) => (
                <Link
                  key={area.slug}
                  href={`/providence/neighborhoods/${area.slug}`}
                  className="bg-slate-50 hover:bg-blue-50 rounded-lg p-4 text-center transition-colors group"
                >
                  <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">
                    {area.name}
                  </h3>
                  <p className="text-sm text-slate-500">Providence</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/providence"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Explore Providence →
              </Link>
              <a
                href={providenceCommunity.hoaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-800 font-medium"
              >
                Providence HOA
              </a>
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <ReviewsSection />
        <FAQSection
          title="Las Vegas Real Estate FAQs"
          subtitle="Questions about services, locations, buying, and selling"
          faqs={homeFAQs}
        />

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Providence Real Estate
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Homes for sale in Providence Las Vegas and North Las Vegas. Call (702) 744-2993.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17027442993"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702) 744-2993
              </a>
              <Link
                href="/contact"
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
              >
                Send a Message
              </Link>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              Providence Real Estate | (702) 744-2993 | 7181 N Hualapai Way #135, Las Vegas, NV 89166
            </p>
          </div>
        </section>

        {/* Last Updated */}
        <div className="bg-slate-100 py-4 text-center text-sm text-slate-500">
          Last Updated: January 2026 | Providence Real Estate | Providence, North Las Vegas
        </div>
      </main>
      <Footer />
    </>
  );
}
