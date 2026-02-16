"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, ExternalLink, Loader2 } from "lucide-react";
import { officeInfo } from "@/lib/site-config";
import { loadGoogleMaps } from "@/lib/google-maps-loader";

// Place types for nearby search - Table A supported types
const AMENITY_TYPES = [
  { value: "restaurant", label: "Restaurants" },
  { value: "cafe", label: "Cafes" },
  { value: "park", label: "Parks" },
  { value: "parking", label: "Parking" },
  { value: "grocery_or_supermarket", label: "Grocery Stores" },
  { value: "gym", label: "Gyms" },
  { value: "school", label: "Schools" },
  { value: "shopping_mall", label: "Shopping Malls" },
  { value: "pharmacy", label: "Pharmacies" },
  { value: "bank", label: "Banks" },
  { value: "gas_station", label: "Gas Stations" },
  { value: "library", label: "Libraries" },
] as const;

type PlaceResult = {
  displayName: string;
  formattedAddress?: string;
  googleMapsURI?: string;
  location?: { lat: () => number; lng: () => number };
};

type AmenityMapProps = {
  apiKey?: string;
  center?: { lat: number; lng: number };
  radiusMeters?: number;
  maxResults?: number;
  defaultType?: string;
  className?: string;
};

export default function AmenityMap({
  apiKey,
  center = officeInfo.coordinates,
  radiusMeters = 5000,
  maxResults = 15,
  defaultType = "restaurant",
  className = "",
}: AmenityMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedType, setSelectedType] = useState(defaultType);
  const [places, setPlaces] = useState<PlaceResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);

  useEffect(() => {
    let cancelled = false;

    loadGoogleMaps()
      .then(async () => {
        if (cancelled || !mapRef.current) return;

        try {
          const { Map } = (await google.maps.importLibrary(
            "maps"
          )) as google.maps.MapsLibrary;
          const { Place, SearchNearbyRankPreference } =
            (await google.maps.importLibrary("places")) as google.maps.PlacesLibrary;

          if (cancelled || !mapRef.current) return;

          const map = new Map(mapRef.current, {
            center: { lat: center.lat, lng: center.lng },
            zoom: 14,
            mapTypeControl: true,
            streetViewControl: false,
            fullscreenControl: true,
            zoomControl: true,
          });
          mapInstanceRef.current = map;

          const runSearch = async () => {
            setLoading(true);
            setPlaces([]);

            markersRef.current.forEach((m) => m.setMap(null));
            markersRef.current = [];

            const request = {
              fields: ["displayName", "location", "formattedAddress", "googleMapsURI"],
              locationRestriction: {
                center: { lat: center.lat, lng: center.lng },
                radius: radiusMeters,
              },
              includedPrimaryTypes: [selectedType],
              maxResultCount: maxResults,
              rankPreference: SearchNearbyRankPreference.POPULARITY,
            };

            try {
              const { places: results } = await Place.searchNearby(request);

              if (cancelled) return;

              const placeData: PlaceResult[] = results.map((p) => ({
                displayName: p.displayName || "Unnamed",
                formattedAddress: p.formattedAddress ?? undefined,
                googleMapsURI: p.googleMapsURI ?? undefined,
                location: p.location ?? undefined,
              }));
              setPlaces(placeData);

              const bounds = new google.maps.LatLngBounds();
              results.forEach((place) => {
                if (place.location) {
                  bounds.extend(place.location);
                  const marker = new google.maps.Marker({
                    map,
                    position: place.location,
                    title: place.displayName || undefined,
                  });
                  marker.addListener("click", () => {
                    map.panTo(place.location!);
                    map.setZoom(16);
                  });
                  markersRef.current.push(marker);
                }
              });

              if (results.length > 1) {
                map.fitBounds(bounds, 80);
              }
            } catch (err) {
              if (!cancelled) {
                setError(
                  err instanceof Error ? err.message : "Failed to load nearby places"
                );
              }
            } finally {
              if (!cancelled) setLoading(false);
            }
          };

          runSearch();
        } catch (err) {
          if (!cancelled) {
            setError(
              err instanceof Error ? err.message : "Failed to initialize map"
            );
            setLoading(false);
          }
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "Failed to load Google Maps"
          );
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
      mapInstanceRef.current = null;
      markersRef.current = [];
    };
  }, [center.lat, center.lng, radiusMeters, maxResults]);

  // Re-run search when type changes
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    const runSearch = async () => {
      setLoading(true);
      setPlaces([]);

      markersRef.current.forEach((m) => m.setMap(null));
      markersRef.current = [];

      try {
        const { Place, SearchNearbyRankPreference } =
          (await google.maps.importLibrary("places")) as google.maps.PlacesLibrary;

        const request = {
          fields: ["displayName", "location", "formattedAddress", "googleMapsURI"],
          locationRestriction: {
            center: { lat: center.lat, lng: center.lng },
            radius: radiusMeters,
          },
          includedPrimaryTypes: [selectedType],
          maxResultCount: maxResults,
          rankPreference: SearchNearbyRankPreference.POPULARITY,
        };

        const { places: results } = await Place.searchNearby(request);

        const placeData: PlaceResult[] = results.map((p) => ({
          displayName: p.displayName || "Unnamed",
          formattedAddress: p.formattedAddress ?? undefined,
          googleMapsURI: p.googleMapsURI ?? undefined,
          location: p.location ?? undefined,
        }));
        setPlaces(placeData);

        const map = mapInstanceRef.current;
        if (map) {
          const bounds = new google.maps.LatLngBounds();
          results.forEach((place) => {
            if (place.location) {
              bounds.extend(place.location);
              const marker = new google.maps.Marker({
                map,
                position: place.location,
                title: place.displayName || undefined,
              });
              marker.addListener("click", () => {
                map.panTo(place.location!);
                map.setZoom(16);
              });
              markersRef.current.push(marker);
            }
          });
          if (results.length > 1) map.fitBounds(bounds, 80);
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load nearby places"
        );
      } finally {
        setLoading(false);
      }
    };

    runSearch();
  }, [selectedType]);

  if (error) {
    return (
      <div
        className={`rounded-xl overflow-hidden bg-slate-100 p-8 text-center ${className}`}
      >
        <MapPin className="h-12 w-12 text-slate-400 mx-auto mb-4" />
        <p className="text-slate-700 font-medium mb-2">Amenity Map</p>
        <p className="text-slate-600 text-sm">{error}</p>
        <p className="text-slate-500 text-xs mt-2">
          Enable Maps JavaScript API and Places API (New) in Google Cloud, then
          add <code className="bg-slate-200 px-1 rounded">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> to your environment.
        </p>
      </div>
    );
  }

  return (
    <div className={`rounded-xl overflow-hidden bg-white border border-slate-200 ${className}`}>
      <div className="p-4 border-b border-slate-200 bg-slate-50">
        <label htmlFor="amenity-type" className="sr-only">
          Select amenity type
        </label>
        <select
          id="amenity-type"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="w-full md:w-auto min-w-[200px] rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {AMENITY_TYPES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full h-[400px] md:h-[500px] md:min-w-[50%]">
          <div ref={mapRef} className="absolute inset-0 w-full h-full" />
          {loading && (
            <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
              <Loader2 className="h-10 w-10 text-blue-600 animate-spin" />
            </div>
          )}
        </div>
        <div className="w-full md:w-[320px] max-h-[400px] overflow-y-auto bg-slate-50 p-4">
          <h3 className="font-bold text-slate-900 mb-3">
            Nearby {AMENITY_TYPES.find((t) => t.value === selectedType)?.label}
          </h3>
          {loading && places.length === 0 ? (
            <p className="text-slate-500 text-sm">Loading...</p>
          ) : places.length === 0 ? (
            <p className="text-slate-500 text-sm">
              No results found. Try a different type or zoom out.
            </p>
          ) : (
            <ul className="space-y-3">
              {places.map((place, i) => (
                <li
                  key={`${place.displayName}-${i}`}
                  className="bg-white rounded-lg p-3 border border-slate-200"
                >
                  <p className="font-medium text-slate-900 text-sm">
                    {place.displayName}
                  </p>
                  {place.formattedAddress && (
                    <p className="text-slate-600 text-xs mt-1 flex items-start gap-1">
                      <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                      {place.formattedAddress}
                    </p>
                  )}
                  {place.googleMapsURI && (
                    <a
                      href={place.googleMapsURI}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-blue-600 hover:text-blue-700 text-xs font-medium"
                    >
                      View on Google Maps
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
