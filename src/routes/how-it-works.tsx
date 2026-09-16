import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-land.jpg";
import { PageShell, PageHero, CtaBand } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Buying and Selling Land with LANDCOMING" },
      {
        name: "description",
        content:
          "The LANDCOMING process from first enquiry to closing: parcel review, buyer due diligence, cash terms and escrow, explained without jargon.",
      },
      { property: "og:title", content: "How It Works — LANDCOMING" },
      {
        property: "og:description",
        content: "Our process for buying and selling vacant California land, step by step.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: HowItWorks,
});

const buying = [
  { t: "Choose a parcel", b: "Browse the listings and shortlist by county, acreage and budget." },
  { t: "Request the file", b: "We share what we hold: address, lot size, parcel maps, MLS number where one exists, and the current price." },
  { t: "Do your due diligence", b: "Verify zoning, use, access, utilities and taxes with the City, County and Assessor. Visit the site." },
  { t: "Agree terms", b: "Purchases are cash or hard money, net to seller, buyer pays closing costs. No document fees." },
  { t: "Close through escrow", b: "The transaction is documented and recorded, and the deed transfers to you." },
];

const selling = [
  { t: "Send the property details", b: "Location, acreage, asking price and anything relevant about the parcel." },
  { t: "We review it", b: "County records and comparable sales tell us quickly whether it fits our buyers." },
  { t: "You get an answer", b: "A purchase conversation, or a clear no with the reason." },
  { t: "Close through escrow", b: "If we proceed, escrow or title handles the funds and the recording." },
];

function Column({ title, items }: { title: string; items: { t: string; b: string }[] }) {
  return (
    <div>
      <h2 className="text-3xl text-forest-deep">{title}</h2>
      <ol className="mt-8 space-y-8">
        {items.map((s, i) => (
          <Reveal key={s.t} as="li" delay={i * 60} className="flex gap-5">
            <span className="font-display text-2xl text-gold" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-lg text-forest-deep">{s.t}</h3>
              <p className="mt-1 text-base leading-relaxed text-muted-foreground">{s.b}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

function HowItWorks() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Process"
        title="How it works"
        lead="Two short paths — one for buyers, one for owners selling. Both end at escrow, and neither depends on you taking our word for anything."
        image={heroImg}
        alt="California high desert valley at golden hour"
      />

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-16 lg:grid-cols-2">
          <Column title="Buying a parcel" items={buying} />
          <Column title="Selling your land" items={selling} />
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}
