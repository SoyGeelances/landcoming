import { createFileRoute } from "@tanstack/react-router";
const buyImg = "/images/buy-land.jpg";
import { PageShell, PageHero, CtaBand } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

const faqs = [
  {
    q: "How are LANDCOMING properties paid for?",
    a: "All properties are sold for cash or hard money. Prices are net to seller and the buyer pays all closing costs. There are no document fees added to the listed price.",
  },
  {
    q: "Why do some listings not show a price?",
    a: "Where the current price is not published on the listing, we quote it on request. We would rather leave the field blank than post a figure we cannot stand behind.",
  },
  {
    q: "Can I build on these parcels?",
    a: "That depends entirely on the parcel's zoning and the local authority. Every listing is unimproved vacant land, and buyers must confirm permitted use, zoning and utility availability with the City or County before purchasing.",
  },
  {
    q: "Are utilities connected?",
    a: "Assume not. These are unimproved parcels. Ask the County and the relevant utility providers what service to the site would involve.",
  },
  {
    q: "Can I visit the land before buying?",
    a: "Yes, and we encourage it. We will give you the address and location details so you can walk the parcel or send a surveyor.",
  },
  {
    q: "Do you offer financing?",
    a: "Transactions are cash or hard money. Where a listing states down-payment terms, those terms appear on that listing and nowhere else.",
  },
  {
    q: "How do I sell my land to LANDCOMING?",
    a: "Use the form on the Sell Land page with the location, size, asking price and any details you have. We will review the parcel and give you a clear answer.",
  },
  {
    q: "Which areas do you cover?",
    a: "The current inventory sits in Kern, San Bernardino, Los Angeles and Riverside counties. We look at other California counties case by case.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Buying California Vacant Land | LANDCOMING" },
      {
        name: "description",
        content:
          "Answers on payment terms, pricing, zoning, utilities, site visits and selling land to LANDCOMING in California.",
      },
      { property: "og:title", content: "FAQ — LANDCOMING" },
      { property: "og:description", content: "Common questions about buying and selling vacant land in California." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Faq,
});

function Faq() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Questions"
        title="Frequently asked questions"
        lead="The things buyers and sellers ask us most, answered as plainly as we can."
        image={buyImg}
        alt="California grassland at dawn"
      />

      <section className="mx-auto max-w-3xl px-5 py-20">
        <dl className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 40} className="py-7">
              <dt className="text-xl text-forest-deep">{f.q}</dt>
              <dd className="mt-3 text-base leading-relaxed text-muted-foreground">{f.a}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      <CtaBand />
    </PageShell>
  );
}
