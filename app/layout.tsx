import "./globals.css";

import React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { cn } from "lib/utils";
import AIChatWidget from "@/components/chat/AIChatWidget";
import CalendlyBadge from "@/components/calendly/CalendlyBadge";
import SchemaScript from "@/components/SchemaScript";
import {
  generateRealEstateAgentSchema,
  generateWebSiteSchema,
  combineSchemas,
} from "@/lib/schema";

const title = "Providence Las Vegas | Dr. Jan Duffy, REALTOR®";
const description =
  "Expert real estate in Providence, Las Vegas. Dr. Jan Duffy with BHHS Nevada Properties offers buying, selling, and investing—backed by Warren Buffett's legacy of trust.";
const url = "https://www.providencelasvegas.com";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Berkshire Hathaway HomeServices Nevada Properties",
  },
  description,
  metadataBase: new URL(url),
  keywords: [
    "Providence Las Vegas real estate",
    "Berkshire Hathaway HomeServices Nevada Properties",
    "Dr. Jan Duffy",
    "Providence Las Vegas homes for sale",
    "BHHS real estate agent",
    "Las Vegas real estate",
    "Providence neighborhood",
  ],
  openGraph: {
    title,
    description,
    url,
    siteName: "Providence Las Vegas | Berkshire Hathaway HomeServices Nevada Properties",
    type: "website",
    locale: "en_US",
    images: [{ url: "/hero_bg_1.jpg", width: 1200, height: 630, alt: "Providence Las Vegas | Dr. Jan Duffy, REALTOR®" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/hero_bg_1.jpg"],
  },
  icons: {
    icon: "/favicon-32x32.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: "index, follow",
  },
  alternates: {
    canonical: url,
  },
  // Add your Google Search Console verification code in .env as GOOGLE_SITE_VERIFICATION
  ...(process.env.GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  }),
};

// Combined site-wide schemas using the schema utility
const siteWideSchemas = combineSchemas(
  generateRealEstateAgentSchema(),
  generateWebSiteSchema()
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        {/* Site-wide JSON-LD Schema: RealEstateAgent + WebSite */}
        <SchemaScript schema={siteWideSchemas} id="site-schema" />
        {/* Google tag (gtag.js) - Providence Las Vegas - lazyOnload for performance */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L5B3V7RE8R"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L5B3V7RE8R');
          `}
        </Script>
        {/* RealScout Widget Script - loaded once globally - afterInteractive for performance */}
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="afterInteractive"
        />
        {/* Calendly Widget Script - loaded once globally - lazyOnload for performance */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </head>
      <body
        className={cn(
          GeistSans.variable,
          "antialiased bg-white text-sm md:text-base text-slate-800",
        )}
      >
        {children}
        <AIChatWidget />
        <CalendlyBadge />
      </body>
    </html>
  );
}
