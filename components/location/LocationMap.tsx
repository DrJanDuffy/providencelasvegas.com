"use client";

import { useState, useEffect } from "react";
import { MapPin, Phone, Star, ExternalLink } from "lucide-react";
import { businessInfo } from "@/lib/gbp-schema";
import { gbpUrls } from "@/lib/site-config";

type LocationMapVariant = "full" | "compact" | "embed-only";
type LocationMapTheme = "light" | "dark";

type LocationMapProps = {
  variant?: LocationMapVariant;
  theme?: LocationMapTheme;
  className?: string;
};

/**
 * Build Maps Embed API URL (place mode).
 * Requires Maps Embed API enabled in Google Cloud + NEXT_PUBLIC_GOOGLE_MAPS_API_KEY.
 * Use NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID so the map highlights Providence Real Estate (not another business at the same address).
 * Place ID: Google Business Profile → or https://developers.google.com/maps/documentation/places/web-service/place-id
 * @see https://developers.google.com/maps/documentation/embed/embedding-map
 */
function getMapEmbedUrl(): string | null {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!key) return null;
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID?.trim();
  const q = placeId
    ? `place_id:${encodeURIComponent(placeId)}`
    : encodeURIComponent(
        `${businessInfo.name}, ${businessInfo.address.streetAddress}, ${businessInfo.address.addressLocality}, ${businessInfo.address.addressRegion} ${businessInfo.address.postalCode}`
      );
  return `https://www.google.com/maps/embed/v1/place?key=${key}&q=${q}&zoom=15`;
}

export default function LocationMap({
  variant = "full",
  theme = "light",
  className = "",
}: LocationMapProps) {
  const directionsUrl = gbpUrls.directions;
  const mapsUrl = gbpUrls.maps;
  const reviewUrl = gbpUrls.review;

  // Prefer static embed (highlights Providence Real Estate, no API key). Fallback to Embed API if no mapEmbed.
  const embedUrl = gbpUrls.mapEmbed ?? getMapEmbedUrl();
  const [embedLoaded, setEmbedLoaded] = useState(false);
  const [embedFailed, setEmbedFailed] = useState(false);

  // If embed never loads (e.g. network), show fallback link instead of blank box
  useEffect(() => {
    if (!embedUrl) return;
    const t = setTimeout(() => {
      setEmbedFailed(true);
    }, 8000);
    return () => clearTimeout(t);
  }, [embedUrl]);

  const showEmbed = embedUrl && !embedFailed;
  const showFallback = !embedUrl || embedFailed;

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
      <div className="relative w-full aspect-[16/10] min-h-[200px] md:min-h-[280px]" aria-label="Office location map">
        {showEmbed && (
          <>
            {!embedLoaded && (
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center gap-4 z-10 p-6 ${
                  isDark ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600"
                }`}
                aria-live="polite"
              >
                <div className="text-center">
                  <p className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                    {businessInfo.name}
                  </p>
                  <p className="text-sm mt-1">
                    {businessInfo.address.streetAddress}, {businessInfo.address.addressLocality},{" "}
                    {businessInfo.address.addressRegion} {businessInfo.address.postalCode}
                  </p>
                  <p className="text-sm mt-0.5">
                    <a href={`tel:${businessInfo.phone.tel}`} className={linkClass}>
                      {businessInfo.phone.display}
                    </a>
                  </p>
                </div>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    isDark
                      ? "bg-slate-700 text-white hover:bg-slate-600"
                      : "bg-white text-slate-800 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <ExternalLink className="h-4 w-4" />
                  View on Google Maps
                </a>
                <span className="text-xs opacity-80">Loading map…</span>
              </div>
            )}
            <iframe
              src={embedUrl!}
              width="100%"
              height="100%"
              className="border-0 absolute inset-0 w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Providence Real Estate - Office Location"
              onLoad={() => setEmbedLoaded(true)}
            />
          </>
        )}
        {showFallback && (
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute inset-0 flex flex-col items-center justify-center gap-3 transition-colors ${
              isDark ? "bg-slate-800 hover:bg-slate-700/80" : "bg-slate-100 hover:bg-slate-200"
            }`}
          >
            <MapPin className={`h-12 w-12 ${isDark ? "text-slate-400" : "text-slate-500"}`} />
            <span className={`font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>
              View on Google Maps
            </span>
            <ExternalLink className={`h-5 w-5 ${isDark ? "text-slate-400" : "text-slate-500"}`} />
          </a>
        )}
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
            aria-label="Get directions to our office"
          >
            <MapPin className="h-4 w-4" />
            Get Directions
          </a>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
            aria-label="View office location on Google Maps"
          >
            <ExternalLink className="h-4 w-4" />
            View on Google Maps
          </a>
          <a
            href={`tel:${businessInfo.phone.tel}`}
            className={linkClass}
            aria-label="Call our office"
          >
            <Phone className="h-4 w-4" />
            {businessInfo.phone.display}
          </a>
        </div>
      )}
    </section>
  );
}
