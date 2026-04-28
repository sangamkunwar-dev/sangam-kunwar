"use client";

import { createBrowserClient } from "@supabase/ssr";

const url =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://uhunxhnvvadynrfbsowp.supabase.co";

const key =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVodW54aG52dmFkeW5yZmJzb3dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA4MjQ4MzksImV4cCI6MjA3NjQwMDgzOX0._-PUTbuGWF43nTZYOotl3zCem9S_vLVJe2lg0mRtx1E";

if (!url || !key) {
  console.error("[Supabase] Missing URL or Key");
} else {
  console.log("[Supabase] Client initialized");
}

// ✅ IMPORTANT: export as `supabase`
export const supabase = createBrowserClient(url, key);