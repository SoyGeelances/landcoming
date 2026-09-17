import { createFileRoute, Link } from "@tanstack/react-router";
const buyImg = "/images/buy-land.jpg";
import { PageShell, PageHero, CtaBand } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { LeadForm } from "@/components/site/LeadForm";
import { PropertyCard } from "@/components/site/PropertyCard";
import { properties } from "@/data/properties";

export const Route = createFileRoute("/buy-land")({
  head: () => ({
    meta: [
      { title: "Buy Vacant Land in California — LANDCOMING" },
      {
        name: "description",
        content:
          "How to buy vacant land through LANDCOMING: what we disclose, what you verify, and how cash purchases in Kern, San Bernardino, Los Angeles and Riverside counties are closed.",
      },
      { property: "og:title", content: "Buy Vacant Land in California — LANDCOMING" },
      {
        property: "og:description",
        content: "A plain description of how buying vacant California land through LANDCOMING works.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/buy-land" },
    ],
    links: [{ rel: "canonical", href: "/buy-land" }],
  }),
  component: BuyLand,
});

const checklist = [
  {
    title: "Confirm zoning and permitted use",
    body: "Call the City or County planning department with the address or APN. Ask what the parcel is zoned for and what a change of use would require.",
  },
  {
    title: "Check access and utilities",
    body: "Ask whether access is by public road or easement, and what it costs to bring power, water or septic to the site — if it is possible at all.",
  },
  {
    title: "Review taxes and any liens",
    body: "The County Assessor and Recorder hold tax history and recorded encumbrances. Review both before you make an offer.",
  },
  {
    title: "Walk the parcel",
    body: "Terrain, drainage and neighbouring uses are best judged in person. We will give you the location details you need to find it.",
  },
];

function BuyLand() {
  const sample = properties.slice(0, 3);

  return (
    <PageShell>
      <PageHero
        eyebrow="For buyers"
        title="Buying land, step by step"
        lead="We publish what we know about each parcel and expect you to verify it. This page explains exactly what that looks like from first enquiry to closing."
        image={buyImg}
        alt="Rolling California grassland in soft morning light"
      />

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <h2 className="text-3xl text-forest-deep">What we provide</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              For every listing you will find the street address, city, county, ZIP where recorded, the lot size as
              listed, MLS number where one exists, and photographs or parcel maps. When a price is not published, it is
              because we quote it on request — not because it is hidden.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Properties are sold for cash or hard money. Prices are net to seller, with the buyer paying all closing
              costs. We do not charge document fees on top of the listed price.
            </p>
            <Link
              to="/listings"
              className="mt-8 inline-block bg-forest px-7 py-3 eyebrow text-primary-foreground transition-colors hover:bg-forest-deep"
            >
              View Land
            </Link>
          </Reveal>

          <Reveal delay={90}>
            <h2 className="text-3xl text-forest-deep">What you verify</h2>
            <ol className="mt-6 space-y-6">
              {checklist.map((c, i) => (
                <li key={c.title} className="border-l-2 border-gold pl-5">
                  <p className="eyebrow text-forest/70">Step {i + 1}</p>
                  <h3 className="mt-1 text-lg text-forest-deep">{c.title}</h3>
                  <p className="mt-1 text-base leading-relaxed text-muted-foreground">{c.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl text-forest-deep">A sample of what is available</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {sample.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80} className="h-full">
                <PropertyCard property={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20">
        <h2 className="text-3xl text-forest-deep">Tell us what you are looking for</h2>
        <p className="mt-3 text-base text-muted-foreground">
          Not every parcel we source reaches the website. Describe what you want and we will send matches as they come
          in.
        </p>
        <div className="mt-8">
          <LeadForm
            subject="Buyer criteria — LANDCOMING"
            submitLabel="Send my criteria"
            fields={[
              { name: "name", label: "Name", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: "Phone", type: "tel" },
              { name: "area", label: "Counties or cities of interest", required: true },
              { name: "size", label: "Acreage range" },
              { name: "budget", label: "Budget" },
              { name: "notes", label: "Intended use or other notes", type: "textarea" },
            ]}
          />
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}
