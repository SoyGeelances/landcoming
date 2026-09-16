import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Reveal } from "./Reveal";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-deep">
      <img
        src={image}
        alt={alt}
        width={1400}
        height={900}
        className="absolute inset-0 -z-10 size-full object-cover opacity-45"
      />
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] text-background md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-sand/90 md:text-lg">{lead}</p>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <Reveal as="section" className="mx-auto max-w-6xl px-5 py-20">
      <div className="border border-forest/20 bg-secondary/60 px-6 py-14 text-center md:px-16">
        <p className="eyebrow text-forest/70">Next step</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl leading-tight text-forest-deep md:text-4xl">
          Tell us the county, the acreage and the budget. We will send what matches.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/listings"
            className="bg-forest px-7 py-3 eyebrow text-primary-foreground transition-colors hover:bg-forest-deep"
          >
            View Land
          </Link>
          <Link
            to="/contact"
            className="border border-forest px-7 py-3 eyebrow text-forest transition-colors hover:bg-forest hover:text-primary-foreground"
          >
            Contact us
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
