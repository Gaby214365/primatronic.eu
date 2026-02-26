import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Industrial Automation Case Studies",
  description:
    "Real projects, real results. See how Primatronic delivers custom PCBs, MES systems, and automation solutions for industry leaders across Europe.",
  keywords: [
    "industrial automation case studies",
    "custom PCB projects",
    "MES implementation",
    "manufacturing automation",
    "Primatronic projects",
  ],
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <section className="py-24 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Industrial Automation Case Studies",
            description:
              "Real projects, real results. See how Primatronic delivers custom PCBs, MES systems, and automation solutions for industry leaders across Europe.",
            url: "https://primatronic.eu/case-studies",
            publisher: {
              "@type": "Organization",
              name: "Primatronic",
              url: "https://primatronic.eu",
            },
          }),
        }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-4">
            Case Studies
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Precision in action.
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            Each project is a deep collaboration. Here&apos;s how we solve real
            engineering challenges.
          </p>
        </div>

        {/* Dynamic grid — automatically grows as new case studies are added */}
        <div className="space-y-6">
          {caseStudies.map((cs, index) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group block rounded-2xl border border-ring bg-white no-underline transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="grid md:grid-cols-3 gap-0">
                {/* Number + Category */}
                <div className="flex flex-col justify-between p-8 md:border-r border-ring">
                  <span className="text-6xl font-bold text-ring">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="mt-6">
                    <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted">
                      {cs.category}
                    </span>
                    {cs.client && (
                      <p className="mt-3 text-xs text-muted">{cs.client}</p>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-2 p-8 flex flex-col justify-center">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 group-hover:text-muted transition-colors">
                    {cs.title}
                  </h2>
                  <p className="text-muted leading-relaxed mb-6">
                    {cs.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <time className="text-xs text-muted">
                      {new Date(cs.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                      })}
                    </time>
                    <span className="text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Read case study &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Counter showing total */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted">
            {caseStudies.length} case {caseStudies.length === 1 ? "study" : "studies"} published
          </p>
        </div>
      </div>
    </section>
  );
}
