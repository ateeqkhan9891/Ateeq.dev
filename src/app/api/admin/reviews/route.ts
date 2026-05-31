import { NextRequest, NextResponse } from "next/server";
import { readAll, isSupabaseReady } from "@/lib/local-reviews";

function isAdmin(req: NextRequest): boolean {
  const secret = req.headers.get("x-admin-secret");
  return secret === (process.env.ADMIN_SECRET ?? "admin123");
}

export async function GET(req: NextRequest) {
  if (!isAdmin(req))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const statusFilter = searchParams.get("status") ?? "all";
  const search       = (searchParams.get("search") ?? "").toLowerCase();


  if (isSupabaseReady()) {
    const { supabaseAdmin } = await import("@/lib/supabase");
    let query = supabaseAdmin
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false });

    if (statusFilter !== "all") query = query.eq("status", statusFilter);
    if (search)
      query = query.or(
        `name.ilike.%${search}%,project.ilike.%${search}%,feedback.ilike.%${search}%`
      );

    const { data, error } = await query;
    if (error) return NextResponse.json({ error: "Failed to load." }, { status: 500 });
    return NextResponse.json({ reviews: data ?? [] });
  }


  let reviews = readAll();

  if (statusFilter !== "all")
    reviews = reviews.filter((r) => r.status === statusFilter);

  if (search)
    reviews = reviews.filter(
      (r) =>
        r.name.toLowerCase().includes(search) ||
        r.project.toLowerCase().includes(search) ||
        r.feedback.toLowerCase().includes(search)
    );

  reviews.sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  return NextResponse.json({ reviews });
}
