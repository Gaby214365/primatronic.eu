import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getBlogBySlug,
  getRelatedPosts,
  resolveWudoImageUrl,
} from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) return {};

  const ogImage = resolveWudoImageUrl(post.ogImageUrl);

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords ?? [
      post.category.toLowerCase(),
      "industrial automation",
      "Primatronic",
      "engineering blog",
    ],
    alternates: { canonical: `/blog/${slug}` },
    openGraph: ogImage ? { images: [{ url: ogImage }] } : undefined,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) notFound();

  const relatedPosts = await getRelatedPosts(slug);

  // Build JSON-LD — prefer Wudo's schemaOrgJson if provided
  const schemaMarkup = post.schemaOrgJson
    ? post.schemaOrgJson
    : JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.metaDescription,
        datePublished: post.publishedAt,
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
          "@id": `https://primatronic.eu/blog/${slug}`,
        },
      });

  return (
    <article className="py-24 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaMarkup }}
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
                name: "Blog",
                item: "https://primatronic.eu/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `https://primatronic.eu/blog/${slug}`,
              },
            ],
          }),
        }}
      />

      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-muted no-underline hover:text-foreground transition-colors mb-8"
        >
          &larr; Back to blog
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted">
            {post.category}
          </span>
          <span className="text-xs text-muted">
            {post.readingTimeMinutes} min read
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted mb-12 pb-12 border-b border-border">
          <span>Primatronic Team</span>
          <span>&middot;</span>
          <time>
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

        {/* ---- Blog body ---- */}
        {post.cssContent && (
          <style dangerouslySetInnerHTML={{ __html: post.cssContent }} />
        )}
        <div
          className="wudo-blog-content prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.htmlContent }}
        />
      </div>

      {/* ---- Related Posts ---- */}
      {relatedPosts.length > 0 && (
        <div className="mx-auto max-w-6xl px-6 mt-20 pt-16 border-t border-border">
          <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {relatedPosts.map((rp) => (
              <Link
                key={rp.slug}
                href={`/blog/${rp.slug}`}
                className="group block rounded-2xl border border-ring bg-white overflow-hidden no-underline transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="p-6">
                  <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted">
                    {rp.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-3 mb-2 group-hover:text-muted transition-colors">
                    {rp.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-2">
                    {rp.metaDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
