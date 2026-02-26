// ---------------------------------------------------------------------------
// WudoSEO Blog API Client + static fallback
// ---------------------------------------------------------------------------

const WUDO_API_BASE = "https://wudoseo.com/api/v1";
const WUDO_API_KEY = process.env.WUDO_API_KEY ?? "";


// ---- WudoSEO API types (matching docs at wudoseo.com/docs/blogs) ----------

export interface WudoBlogSummary {
  title: string;
  slug: string;
  metaDescription: string;
  featuredImageUrl?: string;
  category: string;
  readingTimeMinutes: number;
  wordCount: number;
  publishedAt: string;
}

export interface WudoBlogPost {
  title: string;
  slug: string;
  htmlContent: string;
  cssContent?: string;
  jsContent?: string;
  metaDescription: string;
  schemaOrgJson?: string;
  featuredImageUrl?: string;
  ogImageUrl?: string;
  keywords?: string[];
  readingTimeMinutes: number;
  wordCount: number;
  publishedAt: string;
  category: string;
}

export interface WudoRelatedPost {
  title: string;
  slug: string;
  metaDescription: string;
  category: string;
  publishedAt: string;
}

export interface WudoCategory {
  name: string;
  count: number;
}

interface WudoBlogsResponse {
  blogs: WudoBlogSummary[];
  total: number;
  page: number;
  pageSize: number;
}

interface WudoRelatedResponse {
  blogs: WudoRelatedPost[];
}

interface WudoCategoriesResponse {
  categories: WudoCategory[];
}

// ---- Helpers --------------------------------------------------------------

function isApiConfigured(): boolean {
  return WUDO_API_KEY.length > 0;
}

/** Resolve relative Wudo image paths to absolute URLs. */
export function resolveWudoImageUrl(path?: string): string | undefined {
  if (!path) return undefined;
  if (path.startsWith("http")) return path;
  return `${WUDO_API_BASE.replace("/api/v1", "")}${path}`;
}

async function wudoFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${WUDO_API_BASE}${path}`, {
    headers: { "X-Api-Key": WUDO_API_KEY },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`WudoSEO API error ${res.status}: ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}

// ---- Public API functions -------------------------------------------------

export async function getBlogs(
  page = 1,
  pageSize = 12,
  category?: string,
  search?: string,
): Promise<WudoBlogsResponse> {
  if (!isApiConfigured()) {
    return { blogs: [], total: 0, page: 1, pageSize };
  }

  const params = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
  });
  if (category) params.set("category", category);
  if (search) params.set("search", search);

  return wudoFetch<WudoBlogsResponse>(`/blogs?${params.toString()}`);
}

export async function getBlogBySlug(
  slug: string,
): Promise<WudoBlogPost | null> {
  if (!isApiConfigured()) return null;

  try {
    return await wudoFetch<WudoBlogPost>(`/blogs/${encodeURIComponent(slug)}`);
  } catch {
    return null;
  }
}

export async function getRelatedPosts(
  slug: string,
  limit = 3,
): Promise<WudoRelatedPost[]> {
  if (!isApiConfigured()) return [];

  try {
    const res = await wudoFetch<WudoRelatedResponse>(
      `/blogs/${encodeURIComponent(slug)}/related?limit=${limit}`,
    );
    return res.blogs;
  } catch {
    return [];
  }
}

export async function getCategories(): Promise<WudoCategory[]> {
  if (!isApiConfigured()) return [];

  try {
    const res = await wudoFetch<WudoCategoriesResponse>("/blogs/categories");
    return res.categories;
  } catch {
    return [];
  }
}
