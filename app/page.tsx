import Navbar from "@/components/layouts/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/layouts/Footer";
import FAQSchema from "@/components/schemas/FAQSchema";
import Link from "next/link";
import type { Metadata } from "next";
import { Home as HomeIcon, TrendingUp, Shield, Users, Phone } from "lucide-react";
import { providenceNeighborhoods, providenceCommunity } from "@/lib/site-config";
import { getFAQsForPage } from "@/lib/faq-library";

export const metadata: Metadata = {
  title: "Providence Las Vegas | Dr. Jan Duffy, REALTOR®",
  description:
    "Expert real estate in Providence, Las Vegas. Dr. Jan Duffy with BHHS Nevada Properties offers buying, selling, and investing. Call (702) 500-1942.",
  keywords: [
    "Providence Las Vegas real estate",
    "Berkshire Hathaway HomeServices Nevada Properties",
    "Dr. Jan Duffy realtor",
    "Providence Las Vegas homes",
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

        {/* Providence Las Vegas SEO intro - one H1 is in Hero; this section adds H2 + copy */}
        <section className="py-12 md:py-16 bg-white" aria-labelledby="why-providence">
          <div className="container mx-auto px-4 max-w-4xl mx-auto">
            <h2 id="why-providence" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Why Providence Las Vegas Real Estate?
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Providence Las Vegas is a master-planned community in the northwest Las Vegas Valley
              with 27 neighborhoods and more than 5,600 homes. Whether you are buying or selling in
              Providence, Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties
              offers hyperlocal expertise in every Providence neighborhood—from Oxford Commons and
              Saratoga Highlands to Auburn & Bradford and beyond. Providence residents enjoy three
              community parks (The Promenade, Knickerbocker Park, and Huckleberry Park), and the
              Providence Master HOA keeps the community well maintained. For Providence Las Vegas
              homes for sale, market insights, and HOA resale guidance, contact Dr. Jan Duffy.
            </p>
          </div>
        </section>

        {/* Berkshire Hathaway Value Proposition Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Why Choose Berkshire Hathaway HomeServices?
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                When you work with a <strong>Berkshire Hathaway HomeServices</strong> agent, you're
                backed by a name synonymous with trust, ethical standards, and financial
                strength—the same principles that built Warren Buffett's empire.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-6">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Trusted Brand</h3>
                <p className="text-slate-600 text-sm">
                  Backed by Warren Buffett's Berkshire Hathaway Inc.—unmatched financial stability
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Global Network</h3>
                <p className="text-slate-600 text-sm">
                  50,000+ agents worldwide for seamless referrals and relocations
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Market Expertise</h3>
                <p className="text-slate-600 text-sm">
                  Serving Las Vegas since 2008, $127M+ in closed transactions
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <HomeIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Full Service</h3>
                <p className="text-slate-600 text-sm">
                  Buying, selling, luxury, investment, relocation—we do it all
                </p>
              </div>
            </div>

            {/* Expert Quote */}
            <div className="max-w-3xl mx-auto mt-12 bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "When clients ask why they should choose a Berkshire Hathaway HomeServices agent, I
                tell them: you're not just getting me—you're getting a global network of 50,000
                agents, world-class marketing, and a brand that's synonymous with trust."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, BHHS Nevada Properties
              </cite>
            </div>
          </div>
        </section>

        {/* Market Stats Section */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Providence & Las Vegas Real Estate Market | January 2026
              </h2>
              <p className="text-slate-300">
                Current market data including Providence's 27 neighborhoods. Berkshire Hathaway
                HomeServices Nevada Properties.
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

        <RealScoutListings />

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
          title="Frequently Asked Questions About Providence Las Vegas Real Estate"
          subtitle="Common questions about buying, selling, and living in Providence Las Vegas"
          faqs={homeFAQs}
        />

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Buy or Sell in Providence?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether you're buying, selling, or investing in Providence real estate, Dr. Jan Duffy
              is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17025001942"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702) 500-1942
              </a>
              <Link
                href="/contact"
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
              >
                Send a Message
              </Link>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              Dr. Jan Duffy | License S.0197614.LLC | Berkshire Hathaway HomeServices Nevada
              Properties
            </p>
          </div>
        </section>

        {/* Last Updated */}
        <div className="bg-slate-100 py-4 text-center text-sm text-slate-500">
          Last Updated: January 2026 | Providence Las Vegas | Berkshire Hathaway HomeServices
          Nevada Properties
        </div>
      </main>
      <Footer />
    </>
  );
}
