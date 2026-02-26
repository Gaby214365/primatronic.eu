import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: cs.title,
    description: cs.excerpt,
    keywords: [
      cs.category.toLowerCase(),
      "case study",
      "industrial automation",
      "Primatronic",
    ],
    alternates: { canonical: `/case-studies/${slug}` },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <article className="py-24 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: cs.title,
            description: cs.excerpt,
            datePublished: cs.date,
            author: {
              "@type": "Organization",
              name: "Primatronic",
            },
            publisher: {
              "@type": "Organization",
              name: "Primatronic",
              url: "https://primatronic.eu",
              logo: {
                "@type": "ImageObject",
                url: "https://primatronic.eu/logo.svg",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://primatronic.eu/case-studies/${slug}`,
            },
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
                name: "Case Studies",
                item: "https://primatronic.eu/case-studies",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: cs.title,
                item: `https://primatronic.eu/case-studies/${slug}`,
              },
            ],
          }),
        }}
      />
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/case-studies"
          className="inline-flex items-center text-sm text-muted no-underline hover:text-foreground transition-colors mb-8"
        >
          &larr; All case studies
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted">
            {cs.category}
          </span>
          {cs.client && (
            <span className="text-xs text-muted">{cs.client}</span>
          )}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          {cs.title}
        </h1>

        <div className="flex items-center text-sm text-muted mb-12 pb-12 border-b border-border">
          <time>
            {new Date(cs.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

        <div className="prose prose-lg max-w-none">
          {cs.content.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-muted leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-surface p-8 text-center">
          <h3 className="text-xl font-semibold mb-3">
            Have a similar challenge?
          </h3>
          <p className="text-sm text-muted mb-6">
            Let&apos;s discuss how we can engineer the right solution for your production line.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-white no-underline transition-opacity hover:opacity-80"
          >
            Start a conversation
          </Link>
        </div>
      </div>
    </article>
  );
}
