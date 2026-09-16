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
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = fields
      .map((f) => `${f.label}: ${String(data.get(f.name) ?? "").trim()}`)
      .join("\n");
    setSent(true);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full bg-forest px-8 py-4 eyebrow text-primary-foreground transition-colors hover:bg-forest-deep sm:w-auto"
        >
          {submitLabel}
        </button>
        <p className="mt-4 text-sm text-muted-foreground" role="status">
          {sent
            ? `Your email client should open with the details. If it does not, write to ${site.email} or call ${site.phone}.`
            : (note ?? `Submitting opens your email client with the details addressed to ${site.email}.`)}
        </p>
      </div>
    </form>
  );
}
