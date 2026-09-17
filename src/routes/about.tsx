import { createFileRoute } from "@tanstack/react-router";
const aboutImg = "/images/about-land.jpg";
import { PageShell, PageHero, CtaBand } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { properties } from "@/data/properties";
import { site } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About LANDCOMING — California Land Investment" },
      {
        name: "description",
        content:
          "LANDCOMING is a Covina, California land company offering unimproved vacant parcels across Kern, San Bernardino, Los Angeles and Riverside counties.",
      },
      { property: "og:title", content: "About LANDCOMING" },
      {
        property: "og:description",
        content: "Who we are, how we work, and what we will and will not promise.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { t: "Say what we know", b: "Listings carry the data we hold and nothing we cannot support. Where a figure is missing, we say so rather than estimate." },
  { t: "No pressure", b: "Land is a long-horizon asset. If a parcel is not right for you, waiting for the next one costs nothing." },
  { t: "Documented transactions", b: "Every purchase closes through escrow or title, with the terms written down before anyone signs." },
];

function About() {
  const counties = Array.from(new Set(properties.map((p) => p.county)));

  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title="A land company, not a sales floor"
        lead="LANDCOMING works out of Covina, California, buying and offering unimproved vacant land in the state's desert and high-desert corridors."
        image={aboutImg}
        alt="Mojave desert plain under a wide pale sky"
      />

      <section className="mx-auto max-w-3xl px-5 py-20">
        <Reveal>
          <p className="text-lg leading-relaxed text-charcoal">
            We source parcels that are simple to understand: raw acreage with a recorded address, a county of record and
            a stated lot size. Some are held for the long term, some are used for RV placement or a private ranch, some
            are leased in part. What each one can legally be used for is a question for the City or County — and we tell
            buyers that before they ask.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Our current inventory spans {counties.join(", ")}. Properties are sold for cash or hard money. We do not
            publish yield projections or appreciation forecasts, because no one can honestly guarantee them.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 80}>
              <h2 className="text-lg text-forest-deep">{v.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.b}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 border border-border bg-card p-8">
          <h2 className="text-2xl text-forest-deep">Where to find us</h2>
          <address className="mt-4 space-y-1 text-base not-italic text-muted-foreground">
            <p>{site.address}</p>
            <p>
              <a href={site.phoneHref} className="text-forest hover:underline">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="text-forest hover:underline">
                {site.email}
              </a>
            </p>
          </address>
        </Reveal>
      </section>

      <CtaBand />
    </PageShell>
  );
}
