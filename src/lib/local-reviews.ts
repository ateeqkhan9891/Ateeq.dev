

import { writeFileSync, readFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const DATA_DIR  = join(process.cwd(), "data");
const DATA_FILE = join(DATA_DIR, "pending-reviews.json");

export type LocalReview = {
  id: string;
  name: string;
  role: string;
  company: string | null;
  email: string | null;
  linkedin_url: string | null;
  project: string;
  rating: number;
  feedback: string;
  permission_to_publish: boolean;
  status: "pending" | "approved" | "rejected";
  featured: boolean;
  admin_note: string | null;
  created_at: string;
  approved_at: string | null;
};

export function readAll(): LocalReview[] {
  try {
    if (!existsSync(DATA_FILE)) return [];
    return JSON.parse(readFileSync(DATA_FILE, "utf-8")) as LocalReview[];
  } catch {
    return [];
  }
}

export function writeAll(reviews: LocalReview[]): void {
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
  writeFileSync(DATA_FILE, JSON.stringify(reviews, null, 2), "utf-8");
}

export function updateById(
  id: string,
  updates: Partial<LocalReview>
): boolean {
  const reviews = readAll();
  const idx = reviews.findIndex((r) => r.id === id);
  if (idx === -1) return false;
  reviews[idx] = { ...reviews[idx], ...updates };
  writeAll(reviews);
  return true;
}

export function deleteById(id: string): boolean {
  const reviews = readAll();
  const filtered = reviews.filter((r) => r.id !== id);
  if (filtered.length === reviews.length) return false;
  writeAll(filtered);
  return true;
}

export function isSupabaseReady(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
  return (
    url.length > 0 &&
    !url.includes("placeholder") &&
    key.length > 0 &&
    !key.includes("placeholder")
  );
}
