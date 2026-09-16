import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, MapPin, Ruler, Tag } from "lucide-react";
import { PageShell } from "@/components/site/Layout";
import { LeadForm } from "@/components/site/LeadForm";
import { PropertyCard } from "@/components/site/PropertyCard";
import { formatAcres, formatPrice, getProperty, properties } from "@/data/properties";
import { site } from "@/data/site";

export const Route = createFileRoute("/listings/$slug")({
  loader: ({ params }) => {
    const property = getProperty(params.slug);
    if (!property) throw notFound();
    return { property };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Parcel unavailable — LANDCOMING" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.property;
    const title = `${p.title}, ${p.city} — ${formatAcres(p)} | LANDCOMING`;
    const description = `${formatAcres(p)} of unimproved vacant land at ${p.address}, ${p.city}, ${p.county}, California. ${formatPrice(p)}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/listings/${params.slug}` },
        { property: "og:image", content: p.images[0] },
        { name: "twitter:image", content: p.images[0] },
      ],
      links: [{ rel: "canonical", href: `/listings/${params.slug}` }],
    };
  },
  component: PropertyDetail,
});

function PropertyDetail() {
  const { property } = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const others = properties.filter((p) => p.slug !== property.slug).slice(0, 3);

  const facts = [
    { label: "Address", value: property.address },
    { label: "City", value: property.city },
    { label: "County", value: property.county },
    { label: "ZIP code", value: property.zip },
    { label: "Lot size", value: property.lotSizeLabel ?? formatAcres(property) },
    { label: "MLS", value: property.mls },
    { label: "Status", value: property.status },
    { label: "Price", value: property.priceNote ?? formatPrice(property) },
  ].filter((f) => f.value);

  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-5 pt-8">
        <Link to="/listings" className="eyebrow inline-flex items-center gap-2 text-forest hover:underline">
          <ArrowLeft className="size-4" aria-hidden="true" /> All listings
        </Link>
      </div>

      <article className="mx-auto max-w-6xl px-5 py-8">
        <header>
          <p className="eyebrow text-gold">{property.county}</p>
          <h1 className="mt-3 text-4xl text-forest-deep md:text-5xl">{property.title}</h1>
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPin className="size-4" aria-hidden="true" />
              {property.city}, CA {property.zip ?? ""}
            </span>
            <span className="flex items-center gap-2">
              <Ruler className="size-4" aria-hidden="true" />
              {formatAcres(property)}
            </span>
            <span className="flex items-center gap-2">
              <Tag className="size-4" aria-hidden="true" />
              {formatPrice(property)}
            </span>
          </div>
        </header>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <div className="aspect-4/3 overflow-hidden bg-secondary">
              <img
                src={property.images[active]}
                alt={`${property.title} — view ${active + 1}`}
                width={1200}
                height={900}
                className="size-full object-cover"
              />
            </div>
            {property.images.length > 1 && (
              <ul className="mt-3 grid grid-cols-3 gap-3">
                {property.images.map((src, i) => (
                  <li key={src}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-label={`Show image ${i + 1}`}
                      aria-current={i === active}
                      className={`block aspect-4/3 w-full overflow-hidden border transition-opacity ${
                        i === active ? "border-forest" : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={src}
                        alt=""
                        loading="lazy"
                        width={400}
                        height={300}
                        className="size-full object-cover"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <h2 className="mt-12 text-2xl text-forest-deep">About this parcel</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{property.description}</p>

            <h2 className="mt-10 text-2xl text-forest-deep">Details</h2>
            <dl className="mt-4 grid gap-x-8 sm:grid-cols-2">
              {facts.map((f) => (
                <div key={f.label} className="flex justify-between gap-4 border-b border-border py-3">
                  <dt className="text-sm text-muted-foreground">{f.label}</dt>
                  <dd className="text-right text-sm font-medium text-charcoal">{f.value}</dd>
                </div>
              ))}
            </dl>

            <h2 className="mt-10 text-2xl text-forest-deep">Highlights</h2>
            <ul className="mt-4 space-y-2 text-base text-muted-foreground">
              {property.highlights.map((h) => (
                <li key={h} className="border-l-2 border-gold pl-4">
                  {h}
                </li>
              ))}
            </ul>

            <p className="mt-10 border border-border bg-secondary/50 p-6 text-sm leading-relaxed text-muted-foreground">
              {site.disclaimer}
            </p>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-border bg-card p-7">
              <h2 className="text-2xl text-forest-deep">Enquire about this property</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Ask for APN, access notes and the current price. Call {site.phone} or send the form.
              </p>
              <div className="mt-6">
                <LeadForm
                  subject={`Property enquiry — ${property.title} (${property.city})`}
                  submitLabel="Enquire about this property"
                  fields={[
                    { name: "name", label: "Name", required: true },
                    { name: "email", label: "Email", type: "email", required: true },
                    { name: "phone", label: "Phone", type: "tel" },
                    { name: "message", label: "Your question", type: "textarea" },
                  ]}
                />
              </div>
            </div>
          </aside>
        </div>
      </article>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-2xl text-forest-deep">Other parcels</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {others.map((p) => (
            <PropertyCard key={p.slug} property={p} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
