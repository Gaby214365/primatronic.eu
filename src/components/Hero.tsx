import Link from "next/link";

const stats = [
  { value: "5+", label: "Industries served" },
  { value: "EU", label: "Based in Romania" },
  { value: "100%", label: "Custom-built" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface to-background" />

      <div className="relative mx-auto max-w-5xl px-6 pt-32 pb-20 md:pt-44 md:pb-32">
        {/* Centered content */}
        <div className="text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted mb-8">
            Precision engineering &middot; Cluj-Napoca, Europe
          </p>

          <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.08]">
            We build the systems
            <br />
            <span className="text-muted">your factory runs on.</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
            Custom electronics, vision systems, and production software —
            designed as one system, not stitched together from parts.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-white no-underline transition-all hover:opacity-80"
            >
              Schedule a technical review
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center rounded-full border border-ring px-7 py-3.5 text-sm font-medium no-underline transition-all hover:bg-surface"
            >
              See case studies &rarr;
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 md:mt-28 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold tracking-tight">{s.value}</p>
              <p className="text-[11px] text-muted mt-1 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Trusted by line */}
        <div className="mt-16 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted/50">
            Trusted by manufacturing, automotive &amp; research teams across Europe
          </p>
        </div>
      </div>
    </section>
  );
}
