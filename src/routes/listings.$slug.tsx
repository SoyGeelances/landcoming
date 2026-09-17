import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, MapPin, Ruler, Search, Tag, X, ZoomIn, ZoomOut } from "lucide-react";
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
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragRef = useRef<{ startX: number; startY: number; originX: number; originY: number } | null>(null);
  const others = properties.filter((p) => p.slug !== property.slug).slice(0, 3);

  const goToImage = (index: number) => {
    const nextIndex = (index + property.images.length) % property.images.length;
    setActive(nextIndex);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  const handlePrevImage = () => goToImage(active - 1);
  const handleNextImage = () => goToImage(active + 1);

  useEffect(() => {
    if (!isLightboxOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setZoom(1);
    setOffset({ x: 0, y: 0 });

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isLightboxOpen, property.slug, active]);

  const handleZoomChange = (nextZoom: number) => {
    const clamped = Math.min(3, Math.max(1, Number(nextZoom.toFixed(2))));
    setZoom(clamped);
    if (clamped === 1) {
      setOffset({ x: 0, y: 0 });
    }
  };

  const handleWheelZoom = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    const delta = event.deltaY > 0 ? -0.15 : 0.15;
    handleZoomChange(zoom + delta);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (zoom <= 1) return;
    event.preventDefault();
    dragRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      originX: offset.x,
      originY: offset.y,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current || zoom <= 1) return;
    const dx = event.clientX - dragRef.current.startX;
    const dy = event.clientY - dragRef.current.startY;
    setOffset({
      x: dragRef.current.originX + dx,
      y: dragRef.current.originY + dy,
    });
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    dragRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

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
            <div className="relative">
              <div className="aspect-4/3 overflow-hidden bg-secondary">
                <img
                  src={property.images[active]}
                  alt={`${property.title} — view ${active + 1}`}
                  width={1200}
                  height={900}
                  className="size-full object-cover"
                />
              </div>

              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                aria-label="Open product image in full size"
                className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/55 px-3 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-sm transition hover:bg-black/70"
              >
                <Search className="size-4" aria-hidden="true" />
                View
              </button>
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

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative max-h-[90vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="absolute -right-3 -top-12 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 p-1.5 shadow-lg backdrop-blur-sm">
              <button
                type="button"
                aria-label="Zoom out"
                onClick={() => handleZoomChange(zoom - 0.25)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/10"
              >
                <ZoomOut className="size-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Zoom in"
                onClick={() => handleZoomChange(zoom + 0.25)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/10"
              >
                <ZoomIn className="size-4" aria-hidden="true" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Close image"
              className="absolute -right-3 -top-3 inline-flex z-100 items-center justify-center rounded-full border border-white/20 bg-black/70 p-2 text-white shadow-lg transition hover:bg-black"
            >
              <X className="size-5" aria-hidden="true" />
            </button>

            {property.images.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={handlePrevImage}
                  className="absolute left-3 top-1/2 z-10 inline-flex -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 p-2 text-white transition hover:bg-black/70"
                >
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={handleNextImage}
                  className="absolute right-3 top-1/2 z-10 inline-flex -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 p-2 text-white transition hover:bg-black/70"
                >
                  <ChevronRight className="size-5" aria-hidden="true" />
                </button>
              </>
            )}

            <div
              className="flex max-h-[90vh] cursor-grab items-center justify-center overflow-hidden rounded-2xl bg-black/10 active:cursor-grabbing"
              onWheel={handleWheelZoom}
              onDoubleClick={() => setZoom((current) => (current > 1 ? 1 : 2))}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              style={{ touchAction: "none" }}
            >
              <img
                src={property.images[active]}
                alt={`${property.title} — enlarged view`}
                className="max-h-[90vh] w-full rounded-2xl object-contain shadow-2xl transition-transform duration-200 ease-out"
                style={{
                  transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
                  transformOrigin: "center center",
                  cursor: zoom > 1 ? "grab" : "zoom-in",
                  maxWidth: zoom > 1 ? "none" : "100%",
                }}
                onClick={() => setZoom((current) => (current > 1 ? 1 : 2))}
              />
            </div>

            {property.images.length > 1 && (
              <div className="mt-4 flex items-center justify-center gap-2 overflow-x-auto pb-1">
                {property.images.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    aria-label={`View image ${index + 1}`}
                    onClick={() => goToImage(index)}
                    className={`h-16 w-20 overflow-hidden rounded-lg border transition ${
                      index === active ? "border-white shadow-lg" : "border-white/15 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

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
