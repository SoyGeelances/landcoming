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

const U = "/images/properties";

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
    images: [`${U}/0-Bishop-Dr-1.png`, `${U}/0-Bishop-Dr-2.png`, `${U}/0-Bishop-Dr-3.png`],
    featured: false,
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
    images: [`${U}/0-W-Ave-F-1.png`, `${U}/0-W-Ave-F-2.png`, `${U}/0-W-Ave-F-3-1.png`],
    featured: false,
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
    images: [`${U}/0-Osborne-Rd-1.png`, `${U}/0-Osborne-Rd-2.png`, `${U}/0-Osborne-Rd-3.png`],
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
      `${U}/Mojave-Barstow-Hwy-1.png`,
      `${U}/Mojave-Barstow-Hwy-2.png`,
      `${U}/Mojave-Barstow-Hwy-3.png`,
    ],
    featured: true,
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
    images: [`${U}/O-Mojave-Dr-1.png`, `${U}/O-Mojave-Dr-2.png`, `${U}/O-Mojave-Dr-3.png`],
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
    images: [`${U}/0-violet-rd-1.png`, `${U}/0-violet-rd-2.png`, `${U}/0-violet-rd-3.png`],
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
    images: [`${U}/0-14th-ave-1.png`, `${U}/0-14th-ave-2.png`, `${U}/0-14th-ave-3.png`],
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
    images: [`${U}/0-sopp-rd-1.jpg`, `${U}/0-sopp-rd-2.jpg`, `${U}/0-sopp-rd-3.jpg`],
    featured: false,
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
      `${U}/Sand-Turtle-Dr-City-of-Mojave-Kern-County-CA-1.png`,
      `${U}/Sand-Turtle-Dr-City-of-Mojave-Kern-County-CA-2.png`,
      `${U}/Sand-Turtle-Dr-City-of-Mojave-Kern-County-CA-3.png`,
    ],
    featured: true,
  },
  {
    slug: "0-us-hwy395",
    title: "0 US Hwy395",
    address: "0 US Hwy395",
    city: "Victorville",
    county: "San Bernardino",
    state: "CA",
    zip: "92392",
    acres: 6.32,
    lotSizeLabel: "6.32 AC",
    price: 588000,
    priceNote: null,
    mls: "CV26064242",
    status: "Active",
    description:
        "6.32-acre parcel on Highway 395 in Victorville, zoned General Commercial (C-2), with approximately 55,000 cars per day. Located near the Mall of Victor Valley and numerous major retailers and amenities, including Target, Ross Dress for Less, Marshalls, Lowe's Home Improvement, Kohl’s Department Store, Best Buy, Walmart Supercenter, Cracker Barrel, Golden Corral, and Habit Burger. The property is also near the future Hesperia Station for the Brightline West high-speed rail project. APN: 3071562800000. Coordinates: 34.458963, -117.397878. Buyer to verify zoning, allowable uses, density, development standards, utilities, and availability with San Bernardino County and all applicable agencies.",
    highlights: ["6.32 acres", "General Commercial (C-2) zoning", "Highway 395 location"],
    images: [
      `${U}/0-us-Hwy395-1.webp`,
      `${U}/0-us-Hwy395-2.webp`,
      `${U}/0-us-Hwy395-3.webp`,
    ],
    featured: false,
  },{
    slug: "0-simpson-rd",
    title: "0 Simpson Rd",
    address: "0 Simpson Rd",
    city: "Winchester",
    county: "Riverside",
    state: "CA",
    zip: "92596",
    acres: 9.15,
    lotSizeLabel: "9.15 AC",
    price: null,
    priceNote: "$3,900/month",
    mls: "CV26152860",
    status: "Active",
    description:
        "±9.15-acre commercial lease opportunity along Simpson Road in Winchester, offering flexibility for a wide range of uses including parking, festivals, storage, outdoor operations, or other ground-lease opportunities. Positioned within the growing Domenigoni Parkway corridor in Southwest Riverside County, an area experiencing significant residential development. Tenant to verify zoning, allowable uses, density, development standards, utilities, and availability with Riverside County and all applicable agencies.",
    highlights: ["9.15 acres", "Commercial lease opportunity", "Mixed Use"],
    images: [
        `${U}/0-simpson-rd-1.webp`,
        `${U}/0-simpson-rd-2.webp`,
        `${U}/0-simpson-rd-3.webp`,
        `${U}/0-simpson-rd-4.webp`,
    ],
    featured: false,
  },{
    slug: "0-ramona-express-way",
    title: "0 Ramona Express Way",
    address: "0 Ramona Express Way",
    city: "Perris",
    county: "Riverside",
    state: "CA",
    zip: "92571",
    acres: 17.92,
    lotSizeLabel: "17.92 AC",
    price: null,
    priceNote: "$4,900/month",
    mls: "CV26151685",
    status: "Active",
    description:
        "17.92± acres of flat, usable land with approximately 1,800 feet of frontage along the Ramona Expressway in Perris. Ideal for agriculture, parking, festivals, storage, outdoor operations, or other ground-lease opportunities. The corridor is undergoing major road improvements, including planned interchange expansions, and is expected to improve accessibility and traffic exposure between the 215 Freeway and San Jacinto. The property is located directly across from Lake Perris State Park. APN: 308130008. Coordinates: 33.832262, -117.161408. Tenant to verify zoning, allowable uses, density, development standards, utilities, and availability with Riverside County and all applicable agencies.",
    highlights: ["17.92 acres", "Approximately 1,800 feet of frontage", "Across from Lake Perris State Park"],
    images: [
        `${U}/0-ramona-express-way-1.webp`,
        `${U}/0-ramona-express-way-2.webp`,
        `${U}/0-ramona-express-way-3.webp`,
        `${U}/0-ramona-express-way-4.webp`,
    ],
    featured: false,
  },{
    slug: "0-bellflower-st",
    title: "0 Bellflower St",
    address: "0 Bellflower St",
    city: "Adelanto",
    county: "San Bernardino",
    state: "CA",
    zip: "92301",
    acres: 19.62,
    lotSizeLabel: "19.62 AC",
    price: null,
    priceNote: "$3,000/month",
    mls: "CV26064231",
    status: "Active",
    description:
        "19.62-acre prime land and development opportunity in Adelanto, with a conceptual plan for a possible 174 tiny homes project. The property is located near Southern California Logistics Airport and the Amazon Fulfillment Center, with regional access via I-15 and Highway 395. Features long frontage on paved Bellflower Street and is adjacent to the Adelanto Post Office. The property is also near the future Hesperia Station for the Brightline West high-speed rail project. APN: 0459341020000. Coordinates: 34.561992, -117.416067. Tenant to verify zoning, allowable uses, density, development standards, utilities, and availability with San Bernardino County and all applicable agencies.",
    highlights: ["19.62 acres", "Conceptual plan for possible 174 tiny homes", "Long frontage on paved Bellflower Street"],
    images: [
        `${U}/0-bellflower-st-1.webp`,
        `${U}/0-bellflower-st-2.webp`,
        `${U}/0-bellflower-st-3.webp`,
        `${U}/0-bellflower-st-4.webp`,
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
