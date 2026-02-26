import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService } from "@/lib/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) return {};
  return {
    title: svc.metaTitle,
    description: svc.metaDescription,
    keywords: svc.keywords,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: svc.title,
            description: svc.metaDescription,
            provider: {
              "@type": "Organization",
              name: "Primatronic",
              url: "https://primatronic.eu",
            },
            areaServed: "Europe",
            url: `https://primatronic.eu/services/${slug}`,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://primatronic.eu",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: "https://primatronic.eu/services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: svc.title,
                item: `https://primatronic.eu/services/${slug}`,
              },
            ],
          }),
        }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-surface to-background">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
          <div className="max-w-3xl">
            <p className="text-[10px] font-medium uppercase tracking-widest text-muted mb-6">
              {svc.heroLabel}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              {svc.heroTitle}
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted leading-relaxed max-w-xl">
              {svc.heroSubtitle}
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-white no-underline transition-all hover:opacity-80"
              >
                {svc.cta.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-4">
                The problem
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                {svc.problem.title}
              </h2>
              <div className="mt-6 space-y-4">
                {svc.problem.paragraphs.map((p, i) => (
                  <p key={i} className="text-muted leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-surface border border-ring p-8">
              <h3 className="text-sm font-semibold mb-6">Pain points you recognize</h3>
              <ul className="space-y-4">
                {svc.problem.painPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 text-[10px]">
                      !
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Failed solutions */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-4">
            Sound familiar?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            {svc.failedSolutions.title}
          </h2>
          <div className="space-y-4 text-left">
            {svc.failedSolutions.items.map((item, i) => (
              <div
                key={i}
                className="rounded-xl bg-white border border-ring p-5 flex items-start gap-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ring text-muted text-xs font-medium">
                  {i + 1}
                </span>
                <p className="text-sm text-muted leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-4">
              Our approach
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {svc.approach.title}
            </h2>
            <div className="mt-6 space-y-4">
              {svc.approach.paragraphs.map((p, i) => (
                <p key={i} className="text-lg text-muted leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {svc.approach.steps.map((step, i) => (
              <div
                key={step.title}
                className="rounded-2xl border border-ring bg-white p-8 flex flex-col"
              >
                <span className="text-4xl font-bold text-ring mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-foreground text-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50 mb-4">
              Results
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {svc.outcomes.title}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {svc.outcomes.items.map((item) => (
              <div key={item.label} className="border-t border-white/10 pt-6">
                <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {svc.cta.title}
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            {svc.cta.description}
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-foreground px-8 py-4 text-sm font-medium text-white no-underline transition-all hover:opacity-80"
            >
              {svc.cta.buttonText}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
