// Listing data sourced from the live LANDCOMING inventory at
// https://www.landcoming.com/property/ — no figures are invented.
// Where the source listing does not publish a price, `price` is null.

export type Property = {
  slug: string;
  title: string;
  address: string;
  city: string;
  county: string;
  state: "CA";
  zip: string | null;
  acres: number | null;
  lotSizeLabel: string | null;
  price: number | null;
  priceNote: string | null;
  mls: string | null;
  status: string;
  description: string;
  highlights: string[];
  images: string[];
  featured: boolean;
};

const U = "https://www.landcoming.com/wp-content/uploads";

const COMMON_USE_NOTE =
  "Possible for parking or outdoor storage subject to conditional approval by the City or County. Buyers must verify use, zoning and utilities with the governing authority before purchase.";

export const properties: Property[] = [
  {
    slug: "0-bishop-dr",
    title: "0 Bishop Dr",
    address: "0 Bishop Dr",
    city: "California City area",
    county: "Kern County",
    state: "CA",
    zip: "93501",
    acres: 50.8,
    lotSizeLabel: "45 AC (per listing detail sheet)",
    price: null,
    priceNote: "Price available on request",
    mls: null,
    status: "Available",
    description:
      "50.8 acres of unimproved vacant land adjacent to Blue Star Memorial Highway, near Mojave Unified School District and the California City West Station. Suitable for holding, partial lease, RV placement or a private ranch use. " +
      COMMON_USE_NOTE,
    highlights: [
      "Adjacent to Blue Star Memorial Highway",
      "Near California City West Station",
      "Unimproved vacant land",
    ],
    images: [`${U}/2023/06/0-Bishop-Dr-1.png`, `${U}/2023/06/0-Bishop-Dr-2.png`, `${U}/2023/06/0-Bishop-Dr-3.png`],
    featured: true,
  },
  {
    slug: "0-w-ave-f",
    title: "0 W Ave F",
    address: "0 VAC/AVE F/VIC 35TH STW",
    city: "Lancaster",
    county: "Los Angeles County",
    state: "CA",
    zip: null,
    acres: 9.62,
    lotSizeLabel: "9.62994 AC",
    price: null,
    priceNote: "Price available on request",
    mls: null,
    status: "Available",
    description:
      "9.62 acres of unimproved vacant land near Apollo Community Regional Park and General William J. Fox Airfield. Suitable for holding, partial lease, RV placement or a private ranch use. " +
      COMMON_USE_NOTE,
    highlights: [
      "Near Apollo Community Regional Park",
      "Close to General William J. Fox Airfield",
      "Unimproved vacant land",
    ],
    images: [`${U}/2023/06/0-W-Ave-F-1.png`, `${U}/2023/06/0-W-Ave-F-2.png`, `${U}/2023/06/0-W-Ave-F-3-1.png`],
    featured: true,
  },
  {
    slug: "0-osborne-rd",
    title: "0 Osborne Rd",
    address: "0 Osborne Rd",
    city: "Barstow",
    county: "San Bernardino County",
    state: "CA",
    zip: "92311",
    acres: 82.5,
    lotSizeLabel: "82.5 AC",
    price: null,
    priceNote: "Price available on request",
    mls: null,
    status: "Available",
    description:
      "82.5 acres of unimproved vacant land adjacent to the BNSF Railway Barstow Terminal Building and near Barstow Unified School District. Suitable for holding, partial lease, RV placement or a private ranch use. " +
      COMMON_USE_NOTE,
    highlights: [
      "Adjacent to BNSF Railway Barstow Terminal",
      "Near Barstow Unified School District",
      "Largest parcel in the current inventory",
    ],
    images: [`${U}/2023/06/0-Osborne-Rd-1.png`, `${U}/2023/06/0-Osborne-Rd-2.png`, `${U}/2023/06/0-Osborne-Rd-3.png`],
    featured: true,
  },
  {
    slug: "mojave-barstow-hwy",
    title: "Mojave-Barstow Hwy",
    address: "Mojave-Barstow Hwy",
    city: "Mojave",
    county: "Kern County",
    state: "CA",
    zip: "93501",
    acres: 9.11,
    lotSizeLabel: "9.11849 AC",
    price: null,
    priceNote: "Price available on request",
    mls: null,
    status: "Available",
    description:
      "9.12 acres of unimproved vacant land near Mojave-Barstow Highway and Unite St Street. Suitable for holding, partial lease, RV placement or a private ranch use. " +
      COMMON_USE_NOTE,
    highlights: ["Highway frontage corridor", "Kern County parcel", "Unimproved vacant land"],
    images: [
      `${U}/2023/06/Mojave-Barstow-Hwy-1.png`,
      `${U}/2023/06/Mojave-Barstow-Hwy-2.png`,
      `${U}/2023/06/Mojave-Barstow-Hwy-3.png`,
    ],
    featured: false,
  },
  {
    slug: "o-mojave-dr",
    title: "O Mojave Dr",
    address: "O Mojave Dr",
    city: "Adelanto",
    county: "San Bernardino County",
    state: "CA",
    zip: "92301",
    acres: 33.82,
    lotSizeLabel: null,
    price: null,
    priceNote: "Price available on request",
    mls: null,
    status: "Available",
    description:
      "33.82 acres of unimproved vacant land near Adelanto Airport and Adelanto High School. Suitable for holding, partial lease, RV placement or a private ranch use. " +
      COMMON_USE_NOTE,
    highlights: ["Near Adelanto Airport", "Near Adelanto High School", "Unimproved vacant land"],
    images: [`${U}/2023/06/O-Mojave-Dr-1.png`, `${U}/2023/06/O-Mojave-Dr-2.png`, `${U}/2023/06/O-Mojave-Dr-3.png`],
    featured: false,
  },
  {
    slug: "0-violet-rd",
    title: "0 Violet Rd",
    address: "0 Violet Rd",
    city: "Adelanto",
    county: "San Bernardino County",
    state: "CA",
    zip: "92301",
    acres: 19.55,
    lotSizeLabel: null,
    price: null,
    priceNote: "Price available on request",
    mls: null,
    status: "Available",
    description:
      "19.55 acres of unimproved vacant land adjacent to a United States Postal Service facility and near US-395. Suitable for holding, partial lease, RV placement or a private ranch use. " +
      COMMON_USE_NOTE,
    highlights: ["Near US-395 corridor", "Adjacent to USPS facility", "Unimproved vacant land"],
    images: [`${U}/2023/06/MAPA-1.png`, `${U}/2023/06/MAPA-2.png`, `${U}/2023/06/MAPA-3.png`],
    featured: false,
  },
  {
    slug: "0-14th-ave",
    title: "0 14th Ave",
    address: "0 14th Ave",
    city: "Desert Hot Springs",
    county: "Riverside County",
    state: "CA",
    zip: "92240",
    acres: 23.78,
    lotSizeLabel: null,
    price: null,
    priceNote: "Price available on request",
    mls: null,
    status: "Available",
    description:
      "23.78 acres of unimproved vacant land adjacent to N Indian Canyon Dr and near the Riverside County Department of Public Social Services. Suitable for holding, partial lease, RV placement or a private ranch use. " +
      COMMON_USE_NOTE,
    highlights: ["Adjacent to N Indian Canyon Dr", "Desert Hot Springs growth corridor", "Unimproved vacant land"],
    images: [`${U}/2023/06/mapa-1-1.png`, `${U}/2023/06/mapa-2-1.png`, `${U}/2023/06/mapa-3-1.png`],
    featured: false,
  },
  {
    slug: "0-sopp-rd",
    title: "0 Sopp Rd",
    address: "Rosamond, CA 93560",
    city: "Rosamond",
    county: "Kern County",
    state: "CA",
    zip: "93560",
    acres: 20,
    lotSizeLabel: "20.00 acres",
    price: 2995,
    priceNote: "$2,995 — no doc fee, no extra charges. Listed with $500 down.",
    mls: "CV23042130",
    status: "Available",
    description:
      "20 acres of unimproved vacant land adjacent to Ancient Valley Airpark in Rosamond, with Highway 14 exposure. Suitable for holding, partial lease, RV placement or a private ranch use. " +
      COMMON_USE_NOTE,
    highlights: ["Highway 14 exposure", "Adjacent to Ancient Valley Airpark", "MLS CV23042130"],
    images: [`${U}/2023/06/closer-image.jpg`, `${U}/2023/06/tony-2.jpg`, `${U}/2023/06/tony1-4.jpg`],
    featured: true,
  },
  {
    slug: "sand-turtle-dr",
    title: "Sand Turtle Dr",
    address: "Sand Turtle Dr",
    city: "Mojave",
    county: "Kern County",
    state: "CA",
    zip: "93501",
    acres: 21,
    lotSizeLabel: "21 and 23 AC parcels",
    price: null,
    priceNote: "Price available on request",
    mls: null,
    status: "Available",
    description:
      "Unimproved vacant land in the City of Mojave (parcels listed at 21 and 23 acres) near Desert Oak Apartments and Park Palace Apartments. Suitable for holding, partial lease, RV placement or a private ranch use. " +
      COMMON_USE_NOTE,
    highlights: ["Two parcels listed: 21 AC and 23 AC", "City of Mojave", "Unimproved vacant land"],
    images: [
      `${U}/2023/05/Sand-Turtle-Dr-City-of-Mojave-Kern-County-CA-1.png`,
      `${U}/2023/05/Sand-Turtle-Dr-City-of-Mojave-Kern-County-CA-2.png`,
      `${U}/2023/05/Sand-Turtle-Dr-City-of-Mojave-Kern-County-CA-3.png`,
    ],
    featured: false,
  },
];

export const counties = Array.from(new Set(properties.map((p) => p.county))).sort();

export function getProperty(slug: string) {
  return properties.find((p) => p.slug === slug);
}

export function formatPrice(p: Property) {
  return p.price === null ? "Price on request" : `$${p.price.toLocaleString("en-US")}`;
}

export function formatAcres(p: Property) {
  return p.acres === null ? "Acreage on request" : `${p.acres} acres`;
}
