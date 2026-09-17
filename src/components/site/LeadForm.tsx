import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea";
  required?: boolean;
  placeholder?: string;
};

export function LeadForm({
  fields,
  submitLabel,
  subject,
  note,
}: {
  fields: Field[];
  submitLabel: string;
  subject: string;
  note?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    const emailField = fields.find((field) => field.type === "email");
    data.set("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "");
    data.set("subject", subject);
    data.set("from_name", "LANDCOMING website");
    data.set("page_url", window.location.href);
    if (emailField) {
      data.set("replyto", String(data.get(emailField.name) ?? "").trim());
    }

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
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      {fields.map((f) => (
        <div key={f.name} className={f.type === "textarea" ? "sm:col-span-2" : ""}>
          <label htmlFor={f.name} className="eyebrow block text-charcoal/70">
            {f.label}
            {f.required ? " *" : ""}
          </label>
          {f.type === "textarea" ? (
            <textarea
              id={f.name}
              name={f.name}
              rows={5}
              required={f.required}
              placeholder={f.placeholder}
              className="mt-2 w-full border border-input bg-card px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-forest focus:ring-2 focus:ring-ring/30"
            />
          ) : (
            <input
              id={f.name}
              name={f.name}
              type={f.type ?? "text"}
              required={f.required}
              placeholder={f.placeholder}
              className="mt-2 w-full border border-input bg-card px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-forest focus:ring-2 focus:ring-ring/30"
            />
          )}
        </div>
      ))}

      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-forest px-8 py-4 eyebrow text-primary-foreground transition-colors hover:bg-forest-deep sm:w-auto"
        >
          {status === "sending" ? "Sending..." : submitLabel}
        </button>
        <p className="mt-4 text-sm text-muted-foreground" role="status">
          {status === "success"
            ? `Thanks. Your message was sent. We will be in touch soon, or call ${site.phone}.`
            : status === "error"
              ? `We could not send your message. Please write to ${site.email} or call ${site.phone}.`
              : (note ?? "Your details are sent securely to the LANDCOMING team.")}
        </p>
      </div>
    </form>
  );
}
