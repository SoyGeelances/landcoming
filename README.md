# LANDCOMING

Premium editorial website for **LANDCOMING** — vacant land investment in California.
Built with TanStack Start (React 19 + Vite 7 + Tailwind CSS v4).

## Run it locally

Requirements: Node.js 20+ and npm (or `bun install` if you use Bun).

```sh
unzip landcoming.zip
cd landcoming
npm install
npm run dev
```

Open the local URL printed in your terminal (usually `http://localhost:5173`).

Other commands:

```sh
npm run build     # production build
npm run build:vercel # Vercel deployment build
npm run preview   # serve the production build
npm run lint      # ESLint
npm run format    # Prettier
```

## Pages

| Route             | What it does                                                       |
| ----------------- | ------------------------------------------------------------------ |
| `/`               | Home: hero, buy/sell, featured listings, why invest, testimonials  |
| `/listings`       | All listings with search, county, acreage and price filters        |
| `/listings/$slug` | Property detail: gallery, facts, disclaimer, enquiry form          |
| `/buy-land`       | Buying guidance                                                    |
| `/sell-land`      | Seller submission form (name, email, phone, location, size, price) |
| `/how-it-works`   | Step-by-step process                                               |
| `/about`          | Company story and values                                           |
| `/faq`            | Questions and answers (with FAQ structured data)                   |
| `/contact`        | Phone, email, address, map and contact form                        |

## Where the data lives

- `src/data/properties.ts` — the nine listings, their published prices, MLS numbers,
  acreage and images, plus the `getProperty` / `formatPrice` / `formatAcres` helpers.
  Listings without a published price show **"Price on request"** rather than an invented figure.
- `src/data/site.ts` — brand name, phone, email, address, legal disclaimer and navigation.
- `src/styles.css` — the blue design tokens taken from the LANDCOMING logo, plus the
  Fraunces / Inter type pairing.
- `src/components/site/` — reusable Header, Footer, PropertyCard, LeadForm, Reveal and
  page layout primitives.

Images for the listings load from the original landcoming.com URLs. The logo files
(`src/assets/logo-landcoming-colors.webp` and `logo-landcoming-negative.webp`) and the
editorial photography are bundled locally, so the site works offline apart from those
listing photos.

## Notes

- The lead and enquiry forms build a pre-filled `mailto:` message — no backend is required
  to run the site. Wire them to a form service or a server function if you want submissions
  stored in a database.
- Listing facts (acreage, price, MLS) are reproduced as published; Bishop Drive carries the
  same acreage discrepancy the source listing does (50.8 acres in the description, 45 acres
  in the property record).
