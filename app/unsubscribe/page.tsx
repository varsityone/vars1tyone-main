"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Unsubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const e = params.get("email");
    if (e) setEmail(e);
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main style={{ background: "#000", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", fontFamily: "'Barlow', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Barlow:wght@300;400;500&display=swap');
        @font-face {
          font-family: 'BankGothic';
          src: url('/fonts/BankGothic Bold.ttf') format('truetype');
          font-weight: 700;
          font-style: normal;
        }
        .unsub-input {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 4px;
          color: #fff;
          font-family: 'Barlow', sans-serif;
          font-size: 15px;
          padding: 13px 16px;
          outline: none;
          transition: border-color 0.2s;
          box-sizing: border-box;
        }
        .unsub-input::placeholder { color: rgba(255,255,255,0.2); }
        .unsub-input:focus { border-color: rgba(255,255,255,0.35); }
        .unsub-btn {
          width: 100%;
          margin-top: 12px;
          padding: 14px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #fff;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 999px;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .unsub-btn:hover:not(:disabled) { background: rgba(255,255,255,0.15); transform: translateY(-1px); }
        .unsub-btn:disabled { opacity: 0.45; cursor: default; }
      `}</style>

      <div style={{ maxWidth: 420, width: "100%", textAlign: "center" }}>
        <Link href="/">
          <Image src="/varsityone-logo-mark-full-palette.png" alt="VarsityOne" width={36} height={52} style={{ objectFit: "contain", marginBottom: 32 }} />
        </Link>

        {status === "success" ? (
          <>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" style={{ marginBottom: 20 }}>
              <circle cx="12" cy="12" r="10"/>
              <path d="M8 12l3 3 5-5"/>
            </svg>
            <h1 style={{ fontFamily: "'BankGothic','Barlow Condensed',sans-serif", fontSize: 36, fontWeight: 700, fontStyle: "italic", color: "#fff", marginBottom: 12, letterSpacing: -1 }}>
              Unsubscribed.
            </h1>
            <p style={{ fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, marginBottom: 32 }}>
              You&apos;ve been removed from all VarsityOne waitlists. Sorry to see you go.
            </p>
            <Link href="/" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>
              ← Back to VarsityOne
            </Link>
          </>
        ) : (
          <>
            <h1 style={{ fontFamily: "'BankGothic','Barlow Condensed',sans-serif", fontSize: 38, fontWeight: 700, fontStyle: "italic", color: "#fff", marginBottom: 10, letterSpacing: -1, lineHeight: 1 }}>
              Unsubscribe
            </h1>
            <p style={{ fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, marginBottom: 32 }}>
              Enter your email to be removed from all VarsityOne waitlists.
            </p>
            <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
              <input
                className="unsub-input"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {status === "error" && (
                <p style={{ fontSize: 13, color: "#ff5555", marginTop: 8 }}>
                  Something went wrong. Please try again.
                </p>
              )}
              <button className="unsub-btn" type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Processing..." : "Unsubscribe"}
              </button>
            </form>
            <Link href="/" style={{ display: "block", marginTop: 24, fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>
              ← Back to VarsityOne
            </Link>
          </>
        )}
      </div>
    </main>
  );
}
