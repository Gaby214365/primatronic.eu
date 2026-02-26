import Link from "next/link";

const verticals = [
  {
    label: "Manufacturing",
    title: "Smart factory operations",
    description:
      "Replace isolated systems with integrated production monitoring. Real-time KPIs, predictive maintenance, and automation your floor staff can run without retraining.",
    cta: "See MES case study",
    href: "/case-studies/mes-production-monitoring",
    // For Alex & Maria
  },
  {
    label: "Automotive",
    title: "Next-gen HMI controls",
    description:
      "Smart knobs, haptic interfaces, and integrated displays that meet automotive-grade safety and certification standards. From concept to production-ready components.",
    cta: "See HMI case study",
    href: "/case-studies/automotive-hmi-smart-knob",
    // For Sarah
  },
  {
    label: "Research & Labs",
    title: "Precision lab automation",
    description:
      "Custom-built automation for experimental setups, data acquisition, and process control. Higher throughput, fewer manual errors, more time for actual research.",
    cta: "Get in touch",
    href: "/contact",
    // For Dr. Reed
  },
];

export function Verticals() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-4">
            Industries
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            We speak your
            <br />
            industry&apos;s language.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {verticals.map((v) => (
            <div
              key={v.label}
              className="rounded-2xl bg-white border border-ring p-8 flex flex-col"
            >
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted mb-6">
                {v.label}
              </p>
              <h3 className="text-2xl font-semibold mb-4">{v.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-8 flex-1">
                {v.description}
              </p>
              <Link
                href={v.href}
                className="text-sm font-medium no-underline hover:text-muted transition-colors"
              >
                {v.cta} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
