# Google Maps Platform Setup

The site uses Google Maps Platform for:

- **Amenity Map** (`/amenities`) – Nearby restaurants, parks, parking, etc.
- **Directions** (`/directions`) – Plan your visit with driving, walking, transit, or cycling routes.

Both components share a centralized loader (`lib/google-maps-loader.ts`) that loads the Maps JavaScript API once via `@googlemaps/js-api-loader`. Only map pages (`/amenities`, `/directions`) trigger the load when their components mount.

## Get Started at No Cost

Google provides **$200/month free credit** for Maps Platform. For a typical real estate site, this usually covers moderate traffic at no charge.

## Setup Steps

### 1. Create/Configure Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a project or select an existing one
3. Enable these APIs:
   - **Maps JavaScript API**
   - **Places API (New)** (for amenity map)
   - **Directions API** (for directions page)
   - **Geocoding API** (required for "My Location" on directions page)

### 2. Create API Key

1. APIs & Services → Credentials → Create Credentials → API Key
2. Restrict the key (recommended):
   - Application restrictions: HTTP referrers → `https://www.providencelasvegas.com/*` (and `http://localhost:3000/*` for dev)
   - API restrictions: restrict to Maps JavaScript API, Places API (New), Directions API, and Geocoding API

### 3. Add Environment Variable

Add to your `.env.local` (and Vercel → Project Settings → Environment Variables):

```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

### 4. Deploy

The amenity map loads on `/amenities` and the directions map on `/directions`. If the key is missing, a helpful error message with setup instructions is shown. The loader uses `loadGoogleMaps()` from `lib/google-maps-loader.ts`; navigating between map pages reuses the same script load.

## Centralized Loader

The `loadGoogleMaps()` function in `lib/google-maps-loader.ts` loads the Maps API using `@googlemaps/js-api-loader`. It returns a cached promise, so concurrent or repeated calls only trigger one script load. The loader preloads `places`, `geometry`, and `geocoding` for both AmenityMap and DirectionsMap.

## Embedding the Map Elsewhere

You can add the map to any page:

```tsx
import dynamic from "next/dynamic";

const AmenityMap = dynamic(
  () => import("@/components/location/AmenityMap").then((m) => ({ default: m.default })),
  { ssr: false }
);

// In your component:
<AmenityMap
  defaultType="park"
  radiusMeters={3000}
  maxResults={10}
/>
```

## Place Types Available

The map supports: Restaurants, Cafes, Parks, Parking, Grocery Stores, Gyms, Schools, Shopping Malls, Pharmacies, Banks, Gas Stations, Libraries.

## Future Considerations

Additional [Google Maps Platform tools](https://github.com/GoogleMaps) to consider if requirements change:

- **js-markerclusterer**: Use if AmenityMap `maxResults` increases (e.g., 25+ markers) and clustering improves UX.
- **extended-component-library**: Web components (`<gmp-map>`, `<gmp-advanced-marker>`) if migrating to a declarative approach.
- **js-jest-mocks**: Use when adding Jest unit tests for map components to avoid hitting the real API.
