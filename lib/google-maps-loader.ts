/**
 * Centralized Google Maps loader using @googlemaps/js-api-loader.
 * Ensures a single script load across AmenityMap and DirectionsMap.
 */

import { setOptions, importLibrary } from "@googlemaps/js-api-loader";

let loadPromise: Promise<typeof google> | null = null;

/**
 * Load the Google Maps JavaScript API. Returns a cached promise if already loading or loaded.
 * Call this from map components; only map pages trigger the load.
 *
 * @throws Error if NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is not set
 */
export async function loadGoogleMaps(): Promise<typeof google> {
  if (typeof window === "undefined") {
    throw new Error("loadGoogleMaps must be called in the browser");
  }

  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!key) {
    throw new Error(
      "Google Maps API key is required. Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your environment."
    );
  }

  if (loadPromise) {
    return loadPromise;
  }

  loadPromise = (async () => {
    setOptions({
      key,
      v: "weekly",
      libraries: ["places", "geometry", "geocoding"],
    });
    await importLibrary("maps");
    return (window as unknown as { google: typeof google }).google;
  })();

  return loadPromise;
}
