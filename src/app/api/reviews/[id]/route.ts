import { NextRequest, NextResponse } from "next/server";
import { updateById, deleteById, isSupabaseReady } from "@/lib/local-reviews";

function isAdmin(req: NextRequest): boolean {
  const secret = req.headers.get("x-admin-secret");
  return secret === (process.env.ADMIN_SECRET ?? "admin123");
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAdmin(req))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;

  let body: Record<string, unknown>;
  try { body = await req.json(); }
  catch { return NextResponse.json({ error: "Invalid body" }, { status: 400 }); }

  const updates: Record<string, unknown> = {};
  if (body.status)                       updates.status     = body.status;
  if (body.status === "approved")        updates.approved_at = new Date().toISOString();
  if (typeof body.featured === "boolean") updates.featured   = body.featured;
  if (body.admin_note !== undefined)     updates.admin_note = body.admin_note;

  /* ── Supabase path ─────────────────────────────────────── */
  if (isSupabaseReady()) {
    const { supabaseAdmin } = await import("@/lib/supabase");
    const { error } = await supabaseAdmin
      .from("reviews")
      .update(updates)
      .eq("id", id);
    if (error) return NextResponse.json({ error: "Update failed." }, { status: 500 });
    return NextResponse.json({ success: true });
  }

  /* ── Local file path ───────────────────────────────────── */
  const ok = updateById(id, updates as Parameters<typeof updateById>[1]);
  if (!ok) return NextResponse.json({ error: "Review not found." }, { status: 404 });
  return NextResponse.json({ success: true });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAdmin(req))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;

  /* ── Supabase path ─────────────────────────────────────── */
  if (isSupabaseReady()) {
    const { supabaseAdmin } = await import("@/lib/supabase");
    const { error } = await supabaseAdmin.from("reviews").delete().eq("id", id);
    if (error) return NextResponse.json({ error: "Delete failed." }, { status: 500 });
    return NextResponse.json({ success: true });
  }

  /* ── Local file path ───────────────────────────────────── */
  const ok = deleteById(id);
  if (!ok) return NextResponse.json({ error: "Review not found." }, { status: 404 });
  return NextResponse.json({ success: true });
}
