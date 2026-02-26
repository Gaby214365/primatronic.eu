import Link from "next/link";

export function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Speaks to Alex's aspiration: becoming an industry leader */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Ready to lead, not catch up.
        </h2>
        <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">
          Tell us about your production challenges, your infrastructure, and
          where you want to be. We&apos;ll architect the system that gets you there.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-foreground px-8 py-4 text-sm font-medium text-white no-underline transition-all hover:opacity-80 hover:scale-[1.02]"
          >
            Start a technical review
          </Link>
          <a
            href="mailto:office@primatronic.eu"
            className="inline-flex items-center rounded-full border border-ring px-8 py-4 text-sm font-medium no-underline transition-all hover:bg-surface"
          >
            office@primatronic.eu
          </a>
        </div>
      </div>
    </section>
  );
}
