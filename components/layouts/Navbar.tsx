"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNavLinks = [
    { href: "/", label: "Home", external: false },
    { href: "http://drjanduffy.realscout.com/", label: "Properties", external: true },
    { href: "/neighborhoods", label: "Neighborhoods", external: false },
    { href: "/about", label: "About", external: false },
    { href: "/contact", label: "Contact", external: false },
  ];

  const serviceLinks = [
    { href: "/buyers", label: "Home Buying" },
    { href: "/sellers", label: "Home Selling" },
    { href: "/luxury-homes", label: "Luxury Homes" },
    { href: "/55-plus-communities", label: "55+ Communities" },
    { href: "/new-construction", label: "New Construction" },
    { href: "/market-report", label: "Market Report" },
    { href: "/market-insights", label: "Market Insights" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300 ${
        isScrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors leading-tight">
              Berkshire Hathaway
              <span className="text-blue-600"> HomeServices</span>
            </span>
            <span className="text-xs text-slate-500 hidden sm:block">Nevada Properties</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5">
            {mainNavLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-blue-600 font-medium transition-colors text-sm"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-700 hover:text-blue-600 font-medium transition-colors text-sm"
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-slate-700 hover:text-blue-600 font-medium transition-colors text-sm"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
              >
                Services
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>

              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="tel:+17025001942" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline">(702) 500-1942</span>
                <span className="xl:hidden">Call</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Link href="tel:+17025001942">
                <Phone className="h-4 w-4" />
              </Link>
            </Button>
            <button
              className="text-slate-700 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-200">
            <div className="flex flex-col space-y-1 pt-4">
              {mainNavLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors py-2 px-3 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors py-2 px-3 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}

              {/* Services Section */}
              <div className="border-t border-slate-200 pt-2 mt-2">
                <span className="text-xs font-semibold text-slate-500 px-3 uppercase">
                  Services
                </span>
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors py-2 px-3 rounded block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="pt-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 w-full">
                  <Link
                    href="tel:+17025001942"
                    className="flex items-center justify-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Call Dr. Jan: (702) 500-1942
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
