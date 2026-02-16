import "./globals.css";

import React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import dynamic from "next/dynamic";
import { GeistSans } from "geist/font/sans";
import { cn } from "lib/utils";
import SchemaScript from "@/components/SchemaScript";

const AIChatWidget = dynamic(() => import("@/components/chat/AIChatWidget").then((m) => ({ default: m.default })), {
  ssr: false,
  loading: () => null,
});
const CalendlyBadge = dynamic(() => import("@/components/calendly/CalendlyBadge").then((m) => ({ default: m.default })), {
  ssr: false,
  loading: () => null,
});
import {
  generateRealEstateAgentSchema,
  generateWebSiteSchema,
  combineSchemas,
} from "@/lib/schema";

const title = "Providence Las Vegas Real Estate | All 27 Neighborhoods | Dr. Jan Duffy";
const description =
  "Providence Las Vegas master-planned community expert. 27 neighborhoods, 5,600+ homes, 3 parks. Buy, sell, or invest in Providence with Dr. Jan Duffy, BHHS Nevada Properties.";
const url = "https://www.providencelasvegas.com";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Providence Las Vegas Real Estate",
  },
  description,
  metadataBase: new URL(url),
  keywords: [
    "Providence Las Vegas",
    "Providence real estate",
    "Providence homes for sale",
    "Providence neighborhoods",
    "89166 homes",
    "Oxford Commons",
    "Saratoga Highlands",
    "Providence HOA",
  ],
  openGraph: {
    title,
    description,
    url,
    siteName: "Providence Real Estate | Homes for Sale in Providence Las Vegas",
    type: "website",
    locale: "en_US",
    images: [{ url: "/Image/hero_bg_1.jpg", width: 1200, height: 630, alt: "Providence Real Estate | Homes for Sale in Providence Las Vegas" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/Image/hero_bg_1.jpg"],
  },
  icons: {
    icon: "/favicon-32x32.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: "index, follow",
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
