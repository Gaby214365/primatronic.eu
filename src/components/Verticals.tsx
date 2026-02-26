import Image from "next/image";
import Link from "next/link";

const verticals = [
  {
    label: "Manufacturing",
    title: "Smart factory operations",
    description:
      "Replace isolated systems with integrated production monitoring. Real-time KPIs, predictive maintenance, and automation your floor staff can run without retraining.",
    cta: "See MES case study",
    href: "/case-studies/mes-production-monitoring",
    image: "/images/MES_photo.png",
    imageAlt: "Manufacturing Execution System (MES) for real-time production monitoring and factory analytics",
    imageTitle: "MES - Smart Factory Production Monitoring",
  },
  {
    label: "Automotive",
    title: "Next-gen HMI controls",
    description:
      "Smart knobs, haptic interfaces, and integrated displays that meet automotive-grade safety and certification standards. From concept to production-ready components.",
    cta: "See HMI case study",
    href: "/case-studies/automotive-hmi-smart-knob",
    image: "/images/smart_knob.png",
    imageAlt: "Smart rotary knob with LED haptic feedback for automotive HMI interface design",
    imageTitle: "Automotive Smart Knob - Haptic HMI Controller",
  },
  {
    label: "Research & Labs",
    title: "Precision lab automation",
    description:
      "Custom-built automation for experimental setups, data acquisition, and process control. Higher throughput, fewer manual errors, more time for actual research.",
    cta: "Get in touch",
    href: "/contact",
    image: "/images/PCB_design.png",
    imageAlt: "Custom PCB circuit board design with microcontrollers for precision lab automation",
    imageTitle: "Custom PCB Design for Lab & Research Automation",
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
              className="rounded-2xl bg-white border border-ring overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={v.image}
                  alt={v.imageAlt}
                  title={v.imageTitle}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
