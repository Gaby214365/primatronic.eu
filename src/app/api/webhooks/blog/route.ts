import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";

const WEBHOOK_SECRET = process.env.WUDO_WEBHOOK_SECRET ?? "";

function verifySignature(payload: string, signature: string): boolean {
  if (!WEBHOOK_SECRET) return false;

  const expected = createHmac("sha256", WEBHOOK_SECRET)
    .update(payload)
    .digest("hex");

  try {
    return timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expected),
    );
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  const signature = req.headers.get("x-wudo-signature") ?? "";
  const body = await req.text();

  if (!verifySignature(body, signature)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let payload: { event?: string; data?: { slug?: string } };
  try {
    payload = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (payload.event === "blog.published") {
    revalidatePath("/blog");
    if (payload.data?.slug) {
      revalidatePath(`/blog/${payload.data.slug}`);
    }
  }

  return NextResponse.json({ ok: true });
}
