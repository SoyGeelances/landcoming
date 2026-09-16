import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileSearch, Handshake, Map, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-land.jpg";
import buyImg from "@/assets/buy-land.jpg";
import sellImg from "@/assets/sell-land.jpg";
import { PageShell, CtaBand } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { PropertyCard } from "@/components/site/PropertyCard";
import { properties } from "@/data/properties";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LANDCOMING — Vacant Land for Sale in California" },
      {
        name: "description",
        content:
          "LANDCOMING offers vacant land across Kern, San Bernardino, Los Angeles and Riverside counties. Browse verified parcels, or sell your California land direct.",
      },
      { property: "og:title", content: "LANDCOMING — Vacant Land for Sale in California" },
      {
        property: "og:description",
        content: "Vacant California land, documented parcel by parcel. Buy direct or sell your land to LANDCOMING.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: "LANDCOMING",
          telephone: site.phone,
          email: site.email,
          areaServed: "California",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1211 Center Court Dr #200",
            addressLocality: "Covina",
            addressRegion: "CA",
            postalCode: "91724",
            addressCountry: "US",
          },
        }),
      },
    ],
  }),
  component: Home,
});

const reasons = [
  {
    icon: Map,
    title: "Land you can actually inspect",
    body: "Every parcel we publish has an address, a county and a lot size. Drive it, walk it, or send a surveyor before you commit.",
  },
  {
    icon: ShieldCheck,
    title: "Due diligence stays with the buyer",
    body: "We tell you what we know and point you to the City or County for zoning, use and utilities. No guarantees are implied.",
  },
  {
    icon: Handshake,
    title: "Direct, cash-based transactions",
    body: "Properties are sold for cash or hard money, net to seller, with the buyer covering closing costs. The terms are stated up front.",
  },
  {
    icon: FileSearch,
    title: "Long-hold desert corridors",
    body: "Our inventory sits along Highway 14, US-395 and the Barstow rail corridor — areas investors hold with a long horizon in mind.",
  },
];

const testimonials = [
  {
    quote:
      "The paperwork and the parcel details matched exactly what I was shown before I drove out to Rosamond. No surprises at closing.",
    name: "Land buyer, Kern County",
  },
  {
    quote:
      "I had inherited acreage I was never going to use. LANDCOMING gave me a straight answer on what they could do and how long it would take.",
    name: "Seller, San Bernardino County",
  },
];

function Home() {
  const featured = properties.filter((p) => p.featured).slice(0, 3);

  return (
    <PageShell>
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Open California high desert valley at golden hour"
          width={1920}
          height={1200}
          fetchPriority="high"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-forest-deep/90 via-forest-deep/70 to-forest-deep/25" />
        <div className="mx-auto max-w-6xl px-5 py-28 md:py-44">
          <p className="eyebrow rise text-gold">California vacant land</p>
          <h1 className="rise mt-5 max-w-3xl text-[2.6rem] leading-[1.05] text-background md:text-7xl">
            Acreage worth holding, offered without the theatre.
          </h1>
          <p className="rise mt-7 max-w-xl text-base leading-relaxed text-sand/90 md:text-lg">
            LANDCOMING sources unimproved vacant land across Kern, San Bernardino, Los Angeles and Riverside counties,
            and publishes what we know about each parcel so you can verify it yourself.
          </p>
          <div className="rise mt-10 flex flex-wrap gap-3">
            <Link
              to="/listings"
              className="inline-flex items-center gap-2 bg-gold px-8 py-4 eyebrow text-forest-deep transition-transform duration-300 hover:-translate-y-0.5"
            >
              View Land
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              to="/sell-land"
              className="border border-sand/60 px-8 py-4 eyebrow text-sand transition-colors hover:bg-sand hover:text-forest-deep"
            >
              Sell your land
            </Link>
          </div>
        </div>
      </section>

      {/* Buy / Sell */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-2">
          {[
            {
              img: buyImg,
              alt: "Rolling California grassland at dawn",
              eyebrow: "For buyers",
              title: "Buy land",
              body: "Browse the current inventory by county, acreage and budget. Ask for the parcel data, then verify it with the County before you buy.",
              to: "/buy-land" as const,
              cta: "How buying works",
            },
            {
              img: sellImg,
              alt: "Dirt road crossing empty California desert acreage at dusk",
              eyebrow: "For owners",
              title: "Sell land",
              body: "Own vacant California land you no longer use? Send the location, size and your asking price, and we will tell you honestly whether it fits.",
              to: "/sell-land" as const,
              cta: "Submit your land",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 90} className="group">
              <Link to={c.to} className="block">
                <div className="aspect-16/10 overflow-hidden bg-secondary">
                  <img
                    src={c.img}
                    alt={c.alt}
                    loading="lazy"
                    width={1400}
                    height={1000}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="eyebrow mt-6 text-gold">{c.eyebrow}</p>
                <h2 className="mt-3 text-3xl text-forest-deep">{c.title}</h2>
                <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">{c.body}</p>
                <span className="eyebrow mt-5 inline-flex items-center gap-2 text-forest">
                  {c.cta} <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-forest/70">Current inventory</p>
              <h2 className="mt-3 text-3xl text-forest-deep md:text-4xl">Featured parcels</h2>
            </div>
            <Link to="/listings" className="eyebrow inline-flex items-center gap-2 text-forest hover:underline">
              All listings <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90} className="h-full">
                <PropertyCard property={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why invest */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <p className="eyebrow text-forest/70">Why California land</p>
          <h2 className="mt-3 max-w-2xl text-3xl text-forest-deep md:text-4xl">
            Simple assets, plainly described.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 70}>
              <r.icon className="size-6 text-gold" aria-hidden="true" />
              <h3 className="mt-4 text-xl text-forest-deep">{r.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{r.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-forest text-sand">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <p className="eyebrow text-gold">In their words</p>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <blockquote className="border-l border-gold/60 pl-6">
                  <p className="font-display text-xl leading-relaxed text-background">“{t.quote}”</p>
                  <footer className="eyebrow mt-4 text-sand/70">{t.name}</footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-xs text-sand/50">
            Comments shared with LANDCOMING by past clients; names withheld at their request.
          </p>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}
