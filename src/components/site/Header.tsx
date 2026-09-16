import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { nav, site } from "@/data/site";
import logoUrl from "@/assets/logo-landcoming-colors.webp";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:h-20">
        <Link to="/" aria-label="LANDCOMING home" className="shrink-0">
          <img
            src={logoUrl}
            alt="LANDCOMING"
            width={1800}
            height={426}
            className="h-auto w-40 sm:w-44 lg:w-48"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {nav.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-charcoal/80 transition-colors hover:text-forest"
              activeProps={{ className: "text-forest font-medium" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 border border-forest px-4 py-2 text-sm text-forest transition-colors hover:bg-forest hover:text-primary-foreground"
          >
            <Phone className="size-4" aria-hidden="true" />
            {site.phone}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="p-2 text-forest lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-3">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 text-base text-charcoal"
                  activeProps={{ className: "text-forest font-medium" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={site.phoneHref} className="block py-4 text-base font-medium text-forest">
                {site.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
