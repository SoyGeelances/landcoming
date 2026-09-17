import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
const sellImg = "/images/sell-land.jpg";
import { PageShell, PageHero } from "@/components/site/Layout";
import { LeadForm } from "@/components/site/LeadForm";
import { site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact LANDCOMING — Covina, California" },
      {
        name: "description",
        content:
          "Reach LANDCOMING at +1 626-430-9966 or info@landcoming.com, or visit 1211 Center Court Dr #200, Covina, CA 91724.",
      },
      { property: "og:title", content: "Contact LANDCOMING" },
      { property: "og:description", content: "Phone, email and office address for LANDCOMING in Covina, California." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Talk to us about a parcel"
        lead="Call during business hours or send the form and we will reply with what we know about the property you are asking about."
        image={sellImg}
        alt="Desert road at dusk in California"
      />

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-2xl text-forest-deep">Details</h2>
            <ul className="mt-6 space-y-6 text-base">
              <li className="flex gap-4">
                <Phone className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
                <a href={site.phoneHref} className="text-charcoal hover:text-forest hover:underline">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="text-charcoal hover:text-forest hover:underline">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
                <address className="not-italic text-charcoal">{site.address}</address>
              </li>
            </ul>
          </div>

          <div className="mt-10 overflow-hidden border border-border">
              <iframe
                title="LANDCOMING office location map"
                loading="lazy"
                className="h-72 w-full"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=1211+Center+Court+Dr+%23200,+Covina,+CA+91724&output=embed"
              />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
