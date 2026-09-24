import { useEffect, useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
const sellImg = "/images/sell-land.jpg";
import { PageShell, PageHero } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/data/site";

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "d6de9eb6-05ac-4918-a20c-eea52a635c29";
const WEB3FORMS_SCRIPT_URL = "https://web3forms.com/client/script.js";

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
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${WEB3FORMS_SCRIPT_URL}"]`);
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = WEB3FORMS_SCRIPT_URL;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const captchaField = form.querySelector<HTMLTextAreaElement>('textarea[name="h-captcha-response"]');

    if (!captchaField || !captchaField.value.trim()) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    const data = new FormData(form);
    data.set("access_key", WEB3FORMS_ACCESS_KEY);
    data.set("subject", "Land submission — LANDCOMING");
    data.set("from_name", "LANDCOMING website");
    data.set("page_url", window.location.href);
    data.set("replyto", String(data.get("email") ?? "").trim());

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = (await response.json()) as { success?: boolean };

      if (!response.ok || !result.success) {
        throw new Error("Web3Forms submission failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

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
            <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="eyebrow block text-charcoal/70">
                  Name *
                </label>
                <input id="name" name="name" type="text" required className="mt-2 w-full border border-input bg-card px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-forest focus:ring-2 focus:ring-ring/30" />
              </div>

              <div>
                <label htmlFor="email" className="eyebrow block text-charcoal/70">
                  Email *
                </label>
                <input id="email" name="email" type="email" required className="mt-2 w-full border border-input bg-card px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-forest focus:ring-2 focus:ring-ring/30" />
              </div>

              <div>
                <label htmlFor="phone" className="eyebrow block text-charcoal/70">
                  Phone *
                </label>
                <input id="phone" name="phone" type="tel" required className="mt-2 w-full border border-input bg-card px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-forest focus:ring-2 focus:ring-ring/30" />
              </div>

              <div>
                <label htmlFor="location" className="eyebrow block text-charcoal/70">
                  Property location (city, county, APN) *
                </label>
                <input id="location" name="location" type="text" required className="mt-2 w-full border border-input bg-card px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-forest focus:ring-2 focus:ring-ring/30" />
              </div>

              <div>
                <label htmlFor="size" className="eyebrow block text-charcoal/70">
                  Size (acres) *
                </label>
                <input id="size" name="size" type="text" required className="mt-2 w-full border border-input bg-card px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-forest focus:ring-2 focus:ring-ring/30" />
              </div>

              <div>
                <label htmlFor="price" className="eyebrow block text-charcoal/70">
                  Asking price *
                </label>
                <input id="price" name="price" type="text" required className="mt-2 w-full border border-input bg-card px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-forest focus:ring-2 focus:ring-ring/30" />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="details" className="eyebrow block text-charcoal/70">
                  Details (access, zoning, taxes, liens)
                </label>
                <textarea id="details" name="details" rows={5} className="mt-2 w-full border border-input bg-card px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-forest focus:ring-2 focus:ring-ring/30" />
              </div>

              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="sm:col-span-2">
                <div className="h-captcha" data-captcha="true" data-theme="light" aria-label="Security check" />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-forest px-8 py-4 eyebrow text-primary-foreground transition-colors hover:bg-forest-deep sm:w-auto"
                >
                  {status === "sending" ? "Sending..." : "Submit my land"}
                </button>

                <p className="mt-4 text-sm text-muted-foreground" role="status">
                  {status === "success"
                    ? `Thanks. Your message was sent. We will be in touch soon, or call ${site.phone}.`
                    : status === "error"
                      ? "Please complete the captcha and try again. If it keeps failing, contact us directly by phone or email."
                      : "Your details are sent securely to the LANDCOMING team."}
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
