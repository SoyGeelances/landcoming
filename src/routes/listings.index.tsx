import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import aboutImg from "@/assets/about-land.jpg";
import { PageShell, PageHero, CtaBand } from "@/components/site/Layout";
import { PropertyCard } from "@/components/site/PropertyCard";
import { Reveal } from "@/components/site/Reveal";
import { counties, properties } from "@/data/properties";

export const Route = createFileRoute("/listings/")({
  head: () => ({
    meta: [
      { title: "California Land Listings — LANDCOMING" },
      {
        name: "description",
        content:
          "Search LANDCOMING's current vacant land listings in California by county, acreage and price, from 9 to 82 acres in Kern, San Bernardino, Los Angeles and Riverside counties.",
      },
      { property: "og:title", content: "California Land Listings — LANDCOMING" },
      {
        property: "og:description",
        content: "Filter vacant California parcels by location, price and acreage.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/listings" },
    ],
    links: [{ rel: "canonical", href: "/listings" }],
  }),
  component: Listings,
});

const ACRE_BANDS = [
  { id: "all", label: "Any acreage", min: 0, max: Infinity },
  { id: "s", label: "Under 20 acres", min: 0, max: 20 },
  { id: "m", label: "20 – 50 acres", min: 20, max: 50 },
  { id: "l", label: "Over 50 acres", min: 50, max: Infinity },
];

const PRICE_BANDS = [
  { id: "all", label: "Any price" },
  { id: "under5", label: "Priced under $5,000" },
  { id: "request", label: "Price on request" },
];

function Listings() {
  const [q, setQ] = useState("");
  const [county, setCounty] = useState("all");
  const [acres, setAcres] = useState("all");
  const [price, setPrice] = useState("all");

  const results = useMemo(() => {
    const band = ACRE_BANDS.find((b) => b.id === acres)!;
    const needle = q.trim().toLowerCase();
    return properties.filter((p) => {
      if (county !== "all" && p.county !== county) return false;
      if (acres !== "all" && (p.acres === null || p.acres < band.min || p.acres >= band.max)) return false;
      if (price === "under5" && !(p.price !== null && p.price < 5000)) return false;
      if (price === "request" && p.price !== null) return false;
      if (needle) {
        const hay = `${p.title} ${p.address} ${p.city} ${p.county} ${p.zip ?? ""}`.toLowerCase();
        if (!hay.includes(needle)) return false;
      }
      return true;
    });
  }, [q, county, acres, price]);

  const select =
    "w-full border border-input bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-forest focus:ring-2 focus:ring-ring/30";

  return (
    <PageShell>
      <PageHero
        eyebrow="Inventory"
        title="Available land in California"
        lead="Nine parcels currently offered across four counties. Filter by location, price and acreage, then request the parcel data for anything you want to look at closely."
        image={aboutImg}
        alt="Wide Mojave desert plain with distant mountains"
      />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <form
          role="search"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Filter listings"
          className="grid gap-4 border border-border bg-card p-6 md:grid-cols-4"
        >
          <div className="md:col-span-1">
            <label htmlFor="q" className="eyebrow block text-charcoal/70">
              Search
            </label>
            <div className="relative mt-2">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                id="q"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Street, city or ZIP"
                className={`${select} pl-9`}
              />
            </div>
          </div>

          <div>
            <label htmlFor="county" className="eyebrow block text-charcoal/70">
              Location
            </label>
            <select id="county" value={county} onChange={(e) => setCounty(e.target.value)} className={`${select} mt-2`}>
              <option value="all">All counties</option>
              {counties.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="acres" className="eyebrow block text-charcoal/70">
              Acreage
            </label>
            <select id="acres" value={acres} onChange={(e) => setAcres(e.target.value)} className={`${select} mt-2`}>
              {ACRE_BANDS.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="price" className="eyebrow block text-charcoal/70">
              Price
            </label>
            <select id="price" value={price} onChange={(e) => setPrice(e.target.value)} className={`${select} mt-2`}>
              {PRICE_BANDS.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.label}
                </option>
              ))}
            </select>
          </div>
        </form>

        <p className="mt-6 text-sm text-muted-foreground" role="status">
          {results.length} {results.length === 1 ? "parcel" : "parcels"} shown
        </p>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60} className="h-full">
              <PropertyCard property={p} eager={i < 3} />
            </Reveal>
          ))}
        </div>

        {results.length === 0 && (
          <p className="mt-10 border border-dashed border-border p-10 text-center text-muted-foreground">
            No parcels match these filters. Widen the acreage or clear the search to see the full inventory.
          </p>
        )}
      </section>

      <CtaBand />
    </PageShell>
  );
}
