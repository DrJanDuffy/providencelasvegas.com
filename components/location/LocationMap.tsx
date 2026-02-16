"use client";

import { MapPin, Phone, Star } from "lucide-react";
import { businessInfo } from "@/lib/gbp-schema";

// Centralized map embed URL from GBP address
const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=7181+N+Hualapai+Way+%23135,+Las+Vegas,+NV+89166&t=&z=15&ie=UTF8&iwloc=&output=embed";

type LocationMapVariant = "full" | "compact" | "embed-only";
type LocationMapTheme = "light" | "dark";

type LocationMapProps = {
  variant?: LocationMapVariant;
  theme?: LocationMapTheme;
  className?: string;
};

export default function LocationMap({
  variant = "full",
  theme = "light",
  className = "",
}: LocationMapProps) {
  const fullAddress = `${businessInfo.address.streetAddress}, ${businessInfo.address.addressLocality}, ${businessInfo.address.addressRegion} ${businessInfo.address.postalCode}`;
  const directionsUrl = `https://www.google.com/maps/dir//${encodeURIComponent(fullAddress)}`;
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(
    `${businessInfo.name} ${fullAddress}`
  )}`;
  const reviewUrl =
    "https://search.google.com/local/writereview?query=Providence+Real+Estate+Las+Vegas";

  const isDark = theme === "dark";
  const sectionClass = isDark
    ? "bg-slate-800/50 rounded-xl overflow-hidden"
    : "bg-slate-50 rounded-xl overflow-hidden";
  const titleClass = isDark ? "font-bold text-white mb-2 text-lg" : "font-bold text-slate-900 mb-2 text-lg";
  const addressClass = isDark ? "not-italic text-slate-300 text-sm" : "not-italic text-slate-700 text-sm";
  const linkClass = isDark
    ? "inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm"
    : "inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm";

  return (
    <section
      className={`${sectionClass} ${className}`}
      aria-label="Office location and map"
    >
      {(variant === "full" || variant === "compact") && (
        <div className="p-4 md:p-6">
          <h3 className={titleClass}>Find Our Office</h3>
          <address className={addressClass}>
            {businessInfo.name}
            <br />
            {businessInfo.address.streetAddress}
            <br />
            {businessInfo.address.addressLocality}, {businessInfo.address.addressRegion}{" "}
            {businessInfo.address.postalCode}
          </address>
        </div>
      )}
      <div className="relative w-full aspect-[16/10] min-h-[200px] md:min-h-[280px]">
        <iframe
          src={MAP_EMBED_URL}
          width="100%"
          height="100%"
          className="border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Providence Real Estate - Office Location"
          className="absolute inset-0 w-full h-full"
        />
      </div>
      {variant === "full" && (
        <div className="p-4 md:p-6 flex flex-wrap gap-3">
          <a
            href={`tel:${businessInfo.phone.tel}`}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors"
          >
            <Phone className="h-4 w-4" />
            Call {businessInfo.phone.display}
          </a>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-3 rounded-lg font-medium transition-colors"
          >
            <MapPin className="h-4 w-4" />
            Get Directions
          </a>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-3 rounded-lg font-medium transition-colors"
          >
            View on Google Maps
          </a>
          <a
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-3 rounded-lg font-medium transition-colors"
          >
            <Star className="h-4 w-4" />
            Leave a Review
          </a>
        </div>
      )}
      {variant === "compact" && (
        <div className="p-4 flex flex-wrap gap-3">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            <MapPin className="h-4 w-4" />
            Get Directions
          </a>
          <a
            href={`tel:${businessInfo.phone.tel}`}
            className={linkClass}
          >
            <Phone className="h-4 w-4" />
            {businessInfo.phone.display}
          </a>
        </div>
      )}
    </section>
  );
}
