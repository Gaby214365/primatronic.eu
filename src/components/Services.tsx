import Link from "next/link";

const services = [
  {
    slug: "custom-pcbs",
    title: "Custom PCBs & Firmware",
    description:
      "No more adapting off-the-shelf boards to your production line. We design circuit boards optimized for your specific use case — from schematic to production-ready.",
    features: ["Multi-layer design", "Firmware development", "Prototyping to production"],
    icp: "For factories, labs & automotive",
  },
  {
    slug: "vision-systems",
    title: "Vision Systems",
    description:
      "Machine vision that catches defects, verifies assemblies, and measures tolerances — at line speed, without slowing anything down.",
    features: ["Quality inspection", "Image processing", "Sensor integration"],
    icp: "For production lines & quality teams",
  },
  {
    slug: "mes-erp",
    title: "MES/ERP Integration",
    description:
      "See exactly what's happening on your production floor, in real time. Status tracking, operation genealogy, and KPIs your team can actually use to make decisions.",
    features: ["Real-time dashboards", "Production monitoring", "Data analytics"],
    icp: "For operations managers",
  },
  {
    slug: "smart-controls",
    title: "Smart Controls & HMI",
    description:
      "Advanced rotary controllers, haptic interfaces, and smart surfaces that blend physical intuition with digital flexibility. Designed for automotive-grade reliability.",
    features: ["Haptic feedback", "Integrated displays", "Automotive HMI"],
    icp: "For automotive R&D teams",
  },
  {
    slug: "predictive-maintenance",
    title: "Predictive Maintenance",
    description:
      "Stop reacting to breakdowns. Our AI-powered monitoring detects anomalies before they become stoppages — so your line keeps running and your targets stay on track.",
    features: ["Anomaly detection", "Sensor integration", "Downtime prevention"],
    icp: "For plant managers",
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    description:
      "Automate repetitive workflows with AI-powered integrations. We connect your tools, eliminate manual steps, and build intelligent automations that scale with your business.",
    features: ["Zapier, Make & n8n flows", "AI-driven workflows", "System integration"],
    icp: "For operations & business teams",
  },
  {
    slug: "drone-simulations",
    title: "Drone Control Simulations",
    description:
      "Test and validate drone control systems in simulation before they fly. We build realistic physics-based environments for safe iteration on flight algorithms and autonomy.",
    features: ["Physics-based simulation", "Flight algorithm testing", "Hardware-in-the-loop"],
    icp: "For aerospace & R&D teams",
  },
  {
    slug: "consulting",
    title: "Technical Consulting",
    description:
      "Strategic guidance for software architecture, production automation, and MES implementation. We help you make the right technical decisions before committing resources.",
    features: ["Software architecture", "Production automation", "MES strategy"],
    icp: "For CTOs & engineering leads",
  },
  {
    slug: "mechatronic-devices",
    title: "Mechatronic Devices",
    description:
      "Custom electromechanical systems that combine precision mechanics, electronics, and PLC-based control. From concept to production-ready device.",
    features: ["PLC programming", "Electromechanical design", "Custom actuators & sensors"],
    icp: "For manufacturing & automation",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-4">
            Solutions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Built for the floor,
            <br />
            not for the brochure.
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            Every system we deliver is purpose-designed to solve a real operational problem.
            No over-engineered complexity. No retraining headaches.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group block rounded-2xl border border-ring bg-white p-8 no-underline transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted mb-4">
                {s.icp}
              </p>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-muted transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-6">{s.description}</p>
              <ul className="space-y-2 mb-6">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-muted">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-[10px] text-white">
                      &#10003;
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <span className="text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
