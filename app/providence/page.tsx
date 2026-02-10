import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import { Phone, ExternalLink, MapPin } from "lucide-react";
import { providenceCommunity, providenceNeighborhoods } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Providence Las Vegas Community | Dr. Jan Duffy, REALTOR®",
  description:
    "Providence is a master-planned community in Las Vegas with 27 neighborhoods and 5,600+ homes. Community parks, HOA info, and real estate with Dr. Jan Duffy, BHHS Nevada Properties.",
  keywords: [
    "Providence Las Vegas",
    "Providence community",
    "Providence neighborhoods",
    "Providence HOA",
    "homes for sale Providence Las Vegas",
  ],
};

export default function ProvidencePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-24 pb-12 md:pt-28 md:pb-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Providence, Las Vegas
            </h1>
            <p className="text-lg text-slate-700 max-w-3xl mb-4">
              Providence Las Vegas is a master-planned community in the northwest Las Vegas
              Valley with <strong>{providenceCommunity.neighborhoodCount} neighborhoods</strong> and
              more than <strong>{providenceCommunity.homeCount} homes</strong>. Each Providence
              neighborhood has its own unique amenities. Residents enjoy three community
              parks—The Promenade, Knickerbocker Park, and Huckleberry Park—and the Providence
              Master HOA keeps the community well maintained. Providence Las Vegas real estate
              is served by Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties.
            </p>
            <p className="text-slate-700 max-w-3xl">
              Whether you are buying or selling a home in Providence Las Vegas, from Oxford
              Commons to Saratoga Highlands to Auburn & Bradford and all 27 neighborhoods, Dr.
              Jan Duffy offers hyperlocal expertise and HOA resale guidance for Providence Las
              Vegas.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Community Parks in Providence Las Vegas
            </h2>
            <p className="text-slate-700 mb-6 max-w-2xl">
              All Providence Las Vegas residents have access to three community parks. Each park
              offers amenities for families, fitness, and outdoor recreation in Providence.
            </p>
            <ul className="space-y-4 text-slate-700">
              {providenceCommunity.parks.map((park) => (
                <li key={park.slug} className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-slate-900">{park.name}</h3>
                    <span className="text-sm">
                      {park.slug === "the-promenade" &&
                        "Linear walking park and community centerpiece with seating, landscaping, and interactive playground."}
                      {park.slug === "knickerbocker-park" &&
                        "Multigenerational park with Las Vegas skyline views, workout stations, baseball field, playgrounds, splash pad, and dog parks."}
                      {park.slug === "huckleberry-park" &&
                        "Basketball, tennis, pickleball courts, multi-use fields, two playgrounds, splash pad, and large and small dog parks."}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href={providenceCommunity.hoaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-blue-600 hover:text-blue-700 font-medium"
            >
              Community park info – Providence HOA
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              The 27 Neighborhoods of Providence Las Vegas
            </h2>
            <p className="text-slate-700 mb-4 max-w-2xl">
              Providence Las Vegas is comprised of 27 unique neighborhoods, each with its own
              character and amenities. All Providence neighborhoods have access to Knickerbocker
              Park, Huckleberry Park, and The Promenade. Some neighborhoods have private entry
              gates, community pools, and other amenities.
            </p>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Explore Each Providence Las Vegas Neighborhood</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {providenceNeighborhoods.map((n) => (
                <Link
                  key={n.slug}
                  href={`/providence/neighborhoods/${n.slug}`}
                  className="bg-white hover:bg-blue-50 rounded-lg p-4 text-slate-800 hover:text-blue-600 font-medium transition-colors border border-slate-200"
                >
                  {n.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              For Buyers & Sellers in Providence Las Vegas
            </h2>
            <p className="text-slate-700 mb-8 max-w-2xl">
              Whether you are buying or selling a home in Providence Las Vegas, Dr. Jan Duffy
              knows the 27 neighborhoods, HOA resale process, and Design Review. Providence Las
              Vegas real estate is served by Berkshire Hathaway HomeServices Nevada Properties.
            </p>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Resale in Providence Las Vegas</h3>
            <p className="text-slate-700 mb-6 max-w-2xl">
              Dr. Jan Duffy can help you buy or sell in any Providence neighborhood. Familiar with
              Providence Master HOA resale requirements and Design Review so your Providence Las
              Vegas transaction stays on track.
            </p>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">HOA Assessments for Providence</h3>
            <p className="text-slate-700 mb-6 max-w-2xl">
              Providence Master HOA assessments are due {providenceCommunity.hoaAssessmentDueDates}{" "}
              of each year. The HOA oversees community standards and Design Review for
              modifications. New homeowners can find New Homeowner Info and Community Contacts on
              the official Providence HOA site.
            </p>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Design Review & Documents</h3>
            <p className="text-slate-700 mb-6 max-w-2xl">
              The Providence Master HOA oversees design review for exterior changes. For
              guidelines, Realtors/Resale info, and community documents, visit the official
              Providence HOA website.
            </p>
            <ul className="space-y-2 text-slate-700 max-w-2xl list-disc list-inside">
              <li>Providence Las Vegas HOA assessments: {providenceCommunity.hoaAssessmentDueDates}</li>
              <li>Design Review and Realtors/Resale: Providence HOA</li>
              <li>New Homeowner Info and Community Contacts: Providence HOA</li>
            </ul>
            <a
              href={providenceCommunity.hoaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-blue-600 hover:text-blue-700 font-medium"
            >
              Providence HOA – Design Review, Documents, Payment Info
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Buy or Sell in Providence?
            </h2>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              Dr. Jan Duffy knows Providence and can guide you through buying or selling in any of
              the 27 neighborhoods.
            </p>
            <a
              href="tel:+17025001942"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call (702) 500-1942
            </a>
            <p className="mt-4 text-blue-200 text-sm">
              Dr. Jan Duffy | License S.0197614.LLC | Berkshire Hathaway HomeServices Nevada
              Properties
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
