import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Search } from "lucide-react";
import { realscoutUrls } from "@/lib/site-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl mb-4">Providence Real Estate</h3>
            <p className="text-slate-300 mb-4 text-sm">
              Homes for sale in Providence Las Vegas and North Las Vegas. Real Estate Agency serving Providence, NV 89166.
            </p>
            <a
              href={realscoutUrls.searchFooter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              <Search className="h-4 w-4" />
              Search Providence Homes
            </a>
            <div className="flex space-x-4 mt-4">
              <a
                href={realscoutUrls.searchFooter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Search Providence homes on RealScout"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={realscoutUrls.searchFooter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Search Providence homes on RealScout"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={realscoutUrls.searchFooter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Search Providence homes on RealScout"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-bold text-lg mb-4">Locations</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/providence"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Providence
                </Link>
              </li>
              <li>
                <Link
                  href="/neighborhoods"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  All Neighborhoods
                </Link>
              </li>
              <li>
                <Link
                  href="/neighborhoods/summerlin"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Summerlin
                </Link>
              </li>
              <li>
                <Link
                  href="/neighborhoods/henderson"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Henderson
                </Link>
              </li>
              <li>
                <a
                  href={realscoutUrls.searchFooter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Search All Properties
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/buyers"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Home Buying
                </Link>
              </li>
              <li>
                <Link
                  href="/buyers/california-relocator"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  California Relocators
                </Link>
              </li>
              <li>
                <Link
                  href="/sellers"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Home Selling
                </Link>
              </li>
              <li>
                <Link
                  href="/luxury-homes"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Luxury Homes
                </Link>
              </li>
              <li>
                <Link
                  href="/55-plus-communities"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  55+ Communities
                </Link>
              </li>
              <li>
                <Link
                  href="/new-construction"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  New Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/market-insights"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Market Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - NAP (must match GBP exactly) */}
          <div>
            <h3 className="font-bold text-lg mb-4">Providence Real Estate</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">
                  7181 N Hualapai Way #135
                  <br />
                  Las Vegas, NV 89166
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <Link
                  href="tel:+17027442993"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  (702) 744-2993
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <Link
                  href="mailto:DrDuffy@ProvidenceLasVegas.com"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  DrDuffy@ProvidenceLasVegas.com
                </Link>
              </li>
            </ul>
            {/* GBP CTA Buttons */}
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://www.google.com/maps/dir//7181+N+Hualapai+Way+%23135,+Las+Vegas,+NV+89166"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-white transition-colors"
              >
                <MapPin className="h-4 w-4" />
                Get directions
              </a>
              <a
                href="https://search.google.com/local/writereview?query=Providence+Real+Estate+Las+Vegas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-white transition-colors"
              >
                Leave us a review
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Providence Real Estate. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/faq" className="text-slate-400 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="/sitemap.xml" className="text-slate-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-4 text-center">
            © 2026 Providence Real Estate. All Rights Reserved. | Serving All 27 Providence Neighborhoods, Las Vegas NV 89166 | Dr. Jan Duffy, Team Leader | License S.0197614.LLC | (702) 744-2993
          </p>
          <p className="text-slate-600 text-xs mt-2 text-center max-w-3xl mx-auto">
            When you work with a Berkshire Hathaway HomeServices agent, you're backed by a name
            synonymous with trust, ethical standards, and financial strength.
          </p>
        </div>
      </div>
    </footer>
  );
}
