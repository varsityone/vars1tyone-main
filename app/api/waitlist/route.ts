import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  );

  const { email, entity } = await request.json();

  if (!email || !String(email).includes("@")) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }

  const { error } = await supabase
    .from("waitlist")
    .insert({ email, entity, subscribed: true });

  // 23505 = unique violation (already signed up) — treat as success
  if (error && error.code !== "23505") {
    console.error("[waitlist]", error.message);
    return Response.json({ error: "Failed to save" }, { status: 500 });
  }

  return Response.json({ success: true });
}
