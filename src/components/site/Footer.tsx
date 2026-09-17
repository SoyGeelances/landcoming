import { Link } from "@tanstack/react-router";
import { nav, site } from "@/data/site";
const logoUrl = "/images/logo-landcoming-negative.webp";

export function Footer() {
  return (
    <footer className="mt-24 bg-forest-deep text-sand">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3">
        <div>
          <Link to="/" aria-label="LANDCOMING home" className="inline-block">
            <img
              src={logoUrl}
              alt="LANDCOMING"
              width={1800}
              height={426}
              loading="lazy"
              className="h-auto w-52"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand/80">
            Vacant land in California — sourced, documented and offered directly to investors and end users.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow text-gold">Navigation</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sand/85 transition-colors hover:text-background">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow text-gold">Contact</h2>
          <address className="mt-4 space-y-2 text-sm not-italic text-sand/85">
            <p>
              <a href={site.phoneHref} className="hover:text-background">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-background">
                {site.email}
              </a>
            </p>
            <p>{site.address}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-sand/15">
        <div className="mx-auto max-w-6xl px-5 py-8 text-xs leading-relaxed text-sand/60">
          <p>{site.disclaimer}</p>
          <p className="mt-4">© {new Date().getFullYear()} LANDCOMING. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
