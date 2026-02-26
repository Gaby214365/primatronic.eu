import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getBlogs, resolveWudoImageUrl } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Industrial Automation Blog & Engineering Insights",
  description:
    "Engineering insights, industry trends, and technical deep-dives on custom PCBs, MES, vision systems, and smart manufacturing from Primatronic.",
  keywords: [
    "industrial automation blog",
    "engineering insights",
    "custom PCB articles",
    "MES integration",
    "manufacturing technology",
    "Primatronic blog",
  ],
  alternates: { canonical: "/blog" },
};

interface Props {
  searchParams: Promise<{ category?: string; search?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const { category, search } = await searchParams;
  const { blogs } = await getBlogs(1, 12, category, search);

  return (
    <section className="py-24 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Industrial Automation Blog & Engineering Insights",
            description:
              "Engineering insights, industry trends, and technical deep-dives on custom PCBs, MES, vision systems, and smart manufacturing from Primatronic.",
            url: "https://primatronic.eu/blog",
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
            Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Insights & Engineering
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            Technical deep-dives, industry perspectives, and lessons from the
            production floor.
          </p>
        </div>

        {category && (
          <div className="mb-8 flex items-center gap-3">
            <span className="text-sm text-muted">
              Filtered by:{" "}
              <span className="font-medium text-foreground">{category}</span>
            </span>
            <Link
              href="/blog"
              className="text-xs text-muted underline hover:text-foreground"
            >
              Clear
            </Link>
          </div>
        )}

        {blogs.length === 0 ? (
          <p className="text-muted text-center py-20">No posts found.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {blogs.map((post) => {
              const imageUrl = resolveWudoImageUrl(post.featuredImageUrl);
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl border border-ring bg-white overflow-hidden no-underline transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  {imageUrl && (
                    <div className="relative aspect-[2/1] w-full bg-surface">
                      <Image
                        src={imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted">
                        {post.readingTimeMinutes} min read
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold mb-3 group-hover:text-muted transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted leading-relaxed">
                      {post.metaDescription}
                    </p>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-xs text-muted">
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          },
                        )}
                      </span>
                      <span className="text-sm font-medium group-hover:translate-x-1 transition-transform">
                        Read &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
