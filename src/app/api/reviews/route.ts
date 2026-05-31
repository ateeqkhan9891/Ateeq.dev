import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { readAll, writeAll, isSupabaseReady } from "@/lib/local-reviews";
import type { LocalReview } from "@/lib/local-reviews";

const submissionCache = new Map<string, number>();

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";

  const lastSubmit = submissionCache.get(ip);
  if (lastSubmit && Date.now() - lastSubmit < 10 * 60 * 1000) {
    return NextResponse.json(
      { error: "Please wait before submitting another review." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try { body = await req.json(); }
  catch { return NextResponse.json({ error: "Invalid request body." }, { status: 400 }); }

  const {
    name, role, company, email, linkedin_url,
    project, rating, feedback, permission_to_publish,
  } = body as Record<string, string | number | boolean>;


  if (!name || typeof name !== "string" || name.trim().length < 2)
    return NextResponse.json({ error: "Name must be at least 2 characters." }, { status: 400 });
  if (!role || typeof role !== "string" || role.trim().length < 2)
    return NextResponse.json({ error: "Role / Position is required." }, { status: 400 });
  if (!project || typeof project !== "string" || project.trim().length < 2)
    return NextResponse.json({ error: "Please select the project you worked on." }, { status: 400 });
  if (!rating || typeof rating !== "number" || rating < 1 || rating > 5)
    return NextResponse.json({ error: "Please select a rating (1-5)." }, { status: 400 });
  if (!feedback || typeof feedback !== "string")
    return NextResponse.json({ error: "Feedback is required." }, { status: 400 });
  if (feedback.trim().length < 30)
    return NextResponse.json({ error: "Feedback must be at least 30 characters." }, { status: 400 });
  if (feedback.trim().length > 1000)
    return NextResponse.json({ error: "Feedback cannot exceed 1000 characters." }, { status: 400 });
  if (email && typeof email === "string" && email.trim()) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }
  if (!permission_to_publish)
    return NextResponse.json({ error: "Please grant permission to publish your review." }, { status: 400 });

  const reviewData: LocalReview = {
    id:                   randomUUID(),
    name:                 String(name).trim(),
    role:                 String(role).trim(),
    company:              company ? String(company).trim() : null,
    email:                email   ? String(email).trim()   : null,
    linkedin_url:         linkedin_url ? String(linkedin_url).trim() : null,
    project:              String(project).trim(),
    rating:               Number(rating),
    feedback:             String(feedback).trim(),
    permission_to_publish: Boolean(permission_to_publish),
    status:               "pending",
    featured:             false,
    admin_note:           null,
    created_at:           new Date().toISOString(),
    approved_at:          null,
  };


  if (isSupabaseReady()) {
    const { supabaseAdmin } = await import("@/lib/supabase");
    const { error } = await supabaseAdmin.from("reviews").insert(reviewData);
    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to save review. Please try again." },
        { status: 500 }
      );
    }
  } else {
    try {
      const existing = readAll();
      writeAll([...existing, reviewData]);
    } catch (err) {
      console.error("Local save error:", err);
      return NextResponse.json(
        { error: "Failed to save review. Please try again." },
        { status: 500 }
      );
    }
  }

  submissionCache.set(ip, Date.now());
  return NextResponse.json({
    success: true,
    message: "Thank you! Your review has been submitted for approval.",
  });
}

export async function GET() {
  if (isSupabaseReady()) {
    const { supabasePublic } = await import("@/lib/supabase");
    const { data, error } = await supabasePublic
      .from("reviews")
      .select("id, name, role, company, project, rating, feedback, featured, created_at")
      .eq("status", "approved")
      .eq("permission_to_publish", true)
      .order("featured", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(20);

    if (error) return NextResponse.json({ reviews: [] });
    return NextResponse.json({ reviews: data ?? [] });
  }


  const all = readAll();
  const approved = all
    .filter((r) => r.status === "approved" && r.permission_to_publish === true)
    .sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    })
    .slice(0, 20);

  return NextResponse.json({ reviews: approved });
}
