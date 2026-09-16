import { Link } from "@tanstack/react-router";
import { MapPin, Ruler } from "lucide-react";
import { formatAcres, formatPrice, type Property } from "@/data/properties";

export function PropertyCard({ property, eager = false }: { property: Property; eager?: boolean }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-border bg-card transition-shadow duration-500 hover:shadow-[0_24px_60px_-32px_color-mix(in_oklab,var(--forest)_55%,transparent)]">
      <Link
        to="/listings/$slug"
        params={{ slug: property.slug }}
        className="relative block aspect-4/3 overflow-hidden bg-secondary"
      >
        <img
          src={property.images[0]}
          alt={`${property.title}, ${property.city}, ${property.county}`}
          loading={eager ? "eager" : "lazy"}
          width={800}
          height={600}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span className="absolute left-4 top-4 bg-background/90 px-3 py-1 eyebrow text-forest">
          {property.status}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl text-forest-deep">{property.title}</h3>
        <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4 shrink-0" aria-hidden="true" />
          {property.city}, {property.county}
        </p>
        <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
          <Ruler className="size-4 shrink-0" aria-hidden="true" />
          {formatAcres(property)}
        </p>

        <div className="mt-6 flex items-end justify-between gap-4 border-t border-border pt-4">
          <span className="font-display text-lg text-forest">{formatPrice(property)}</span>
          <Link
            to="/listings/$slug"
            params={{ slug: property.slug }}
            className="eyebrow text-charcoal underline-offset-4 transition-colors hover:text-forest hover:underline"
          >
            View parcel
          </Link>
        </div>
      </div>
    </article>
  );
}
