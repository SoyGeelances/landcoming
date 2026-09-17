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

## Web3Forms

The lead forms submit to Web3Forms. Copy `.env.example` to `.env`, set
`VITE_WEB3FORMS_ACCESS_KEY` to the access key from the Web3Forms dashboard, and
restart the dev server. Add the same variable to the environment variables for
the production deployment; do not commit `.env`.

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

Images for the listings load from the original landcoming.com URLs. The logo files and
editorial photography are served locally from `public/images`, so the site works offline
apart from those listing photos.

## Notes

- The lead and enquiry forms submit to Web3Forms — no backend is required to run the site.
- Listing facts (acreage, price, MLS) are reproduced as published; Bishop Drive carries the
  same acreage discrepancy the source listing does (50.8 acres in the description, 45 acres
  in the property record).
