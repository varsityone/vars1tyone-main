import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  const { email, entity } = await request.json();

  if (!email || !String(email).includes("@")) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }

  const { error } = await supabase
    .from("waitlist")
    .upsert({ email, entity, subscribed: true }, { onConflict: "email,entity" });

  if (error) {
    console.error("[waitlist]", error.message);
    return Response.json({ error: "Failed to save" }, { status: 500 });
  }

  return Response.json({ success: true });
}
