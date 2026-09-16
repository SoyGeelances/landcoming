import { createFileRoute } from "@tanstack/react-router";
import sellImg from "@/assets/sell-land.jpg";
import { PageShell, PageHero } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { LeadForm } from "@/components/site/LeadForm";
import { site } from "@/data/site";

export const Route = createFileRoute("/sell-land")({
  head: () => ({
    meta: [
      { title: "Sell Your California Land — LANDCOMING" },
      {
        name: "description",
        content:
          "Own vacant land in California you no longer use? Send LANDCOMING the location, size, asking price and details, and get a straight answer on whether it fits.",
      },
      { property: "og:title", content: "Sell Your California Land — LANDCOMING" },
      {
        property: "og:description",
        content: "Submit your vacant California parcel to LANDCOMING in one short form.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/sell-land" },
    ],
    links: [{ rel: "canonical", href: "/sell-land" }],
  }),
  component: SellLand,
});

const steps = [
  { n: "01", t: "Send the details", b: "Location, size, your asking price and anything you know about access, zoning or taxes." },
  { n: "02", t: "We review the parcel", b: "We check the county records and comparable sales to see whether it fits what our buyers look for." },
  { n: "03", t: "You get a clear answer", b: "Either a purchase discussion or an honest no. We will not string a seller along." },
  { n: "04", t: "Close through escrow", b: "If we move forward, the transaction is documented and closed through escrow or title." },
];

function SellLand() {
  return (
    <PageShell>
      <PageHero
        eyebrow="For owners"
        title="Sell land you are no longer using"
        lead="Inherited acreage, a lot bought years ago, land that has become a tax line and nothing more — send us the details and we will tell you honestly whether we are the right buyer."
        image={sellImg}
        alt="Dirt road crossing empty California desert acreage at dusk"
      />

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 70} className="border-t border-forest/30 pt-5">
              <p className="font-display text-3xl text-gold">{s.n}</p>
              <h2 className="mt-3 text-lg text-forest-deep">{s.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-3xl text-forest-deep">Submit your property</h2>
          <p className="mt-3 text-base text-muted-foreground">
            Fields marked with an asterisk are required. You can also call {site.phone} or write to {site.email}.
          </p>
          <div className="mt-8 border border-border bg-card p-6 md:p-10">
            <LeadForm
              subject="Land submission — LANDCOMING"
              submitLabel="Submit my land"
              fields={[
                { name: "name", label: "Name", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "phone", label: "Phone", type: "tel", required: true },
                { name: "location", label: "Property location (city, county, APN)", required: true },
                { name: "size", label: "Size (acres)", required: true },
                { name: "price", label: "Asking price", required: true },
                { name: "details", label: "Details (access, zoning, taxes, liens)", type: "textarea" },
              ]}
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
