import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  );

  const { email } = await request.json();

  if (!email || !String(email).includes("@")) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }

  const { error } = await supabase
    .from("waitlist")
    .update({ subscribed: false, unsubscribed_at: new Date().toISOString() })
    .eq("email", email);

  if (error) {
    console.error("[unsubscribe]", error.message);
    return Response.json({ error: "Failed to unsubscribe" }, { status: 500 });
  }

  return Response.json({ success: true });
}
