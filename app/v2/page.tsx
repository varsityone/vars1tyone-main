"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

/* ─── DIGITAL FLIP TEXT ─── */
const FLIP_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&";

function FlipText({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) {
  const [display, setDisplay] = useState(() => Array(text.length).fill("▓"));
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    let iteration = 0;
    const totalIterations = 36;
    const lockAt = (i: number) => Math.floor((i / text.length) * totalIterations);

    intervalRef.current = setInterval(() => {
      setDisplay(
        text.split("").map((char, i) => {
          if (iteration >= lockAt(i) + 6) return char;
          return FLIP_CHARS[Math.floor(Math.random() * FLIP_CHARS.length)];
        })
      );
      iteration++;
      if (iteration > totalIterations + 6) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplay(text.split(""));
      }
    }, 85);

    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [text]);

  return <span className={className} style={style}>{display.join("")}</span>;
}

/* ─── DATA ─── */
const PRODUCTS = [
  {
    id: "v1portal",   name: "V1Portal",
    tagline: "Athletes discovering level + fit.",
    description: "Data-driven recruiting score, program matches, and a week-by-week action plan to get in front of the right coaches.",
    accent: "#FF6B2B", status: "Live Now", live: true,
    href: "https://v1portal.com", cta: "Open App",
    logo: "/nav-logo-v1portal-dark-mode-only.png",
    photo: "/v1portal-iphone-hand.png", cat: "tech",
  },
  {
    id: "v1coach",    name: "V1Coach",
    tagline: "Recruiters managing boards.",
    description: "One command center for athlete discovery, pipeline tracking, film tagging, and outreach. Recruit faster and sign the right players.",
    accent: "#22C55E", status: "Q4 2026", live: false,
    href: "#", cta: "Get Early Access",
    logo: null, photo: null, cat: "tech",
  },
  {
    id: "v1college",  name: "V1College",
    tagline: "Programs managing pipeline.",
    description: "Live access to V1Portal-verified athletes — grade-matched, position-filtered, at every level from D1 to JUCO.",
    accent: "#818CF8", status: "Q4 2026", live: false,
    href: "#", cta: "Get Early Access",
    logo: null, photo: null, cat: "tech",
  },
  {
    id: "koda",       name: "Koda",
    tagline: "Your AI recruiting agent.",
    description: "Guides athletes and parents through every step — target school lists, outreach timing, film strategy, and the full recruiting timeline. Always on.",
    accent: "#06B6D4", status: "Q1 2027", live: false,
    href: "#", cta: "Get Early Access",
    logo: null, photo: null, cat: "tech",
  },
  {
    id: "v1academy",  name: "V1Academy",
    tagline: "Training content + frameworks.",
    description: "Training programs, recruiting education, film study — the knowledge every athlete and parent needs to navigate the process.",
    accent: "#4F8EF7", status: "Coming Soon", live: false,
    href: "#", cta: "Get Early Access",
    logo: null, photo: "/varsityone-v1-university-training-bg-cover.png", cat: "dev",
  },
  {
    id: "v1sportz",   name: "V1Sportz",
    tagline: "League + event management.",
    description: "National 7on7 and flag football tournaments built to give athletes real reps, real film, and real pathways to the next level.",
    accent: "#C850C0", status: "2027", live: false,
    href: "#", cta: "Get Early Access",
    logo: "/V1SPORTZ-LOGO+MARK-VARSITYONE.png", photo: "/v1-league2.png", cat: "dev",
  },
  {
    id: "v1gear",     name: "V1Gear",
    tagline: "Brand + merch.",
    description: "Culture-forward gear built for athletes who take their craft seriously — on and off the field.",
    accent: "#00C9A7", status: "Coming Soon", live: false,
    href: "#", cta: "Get Early Access",
    logo: "/V1SHOP-LOGO+MARK-VARSITYONE.png", photo: "/varsityone-v1-shop-bg-cover2.png", cat: "brand",
  },
  {
    id: "v1studios",  name: "V1Studios",
    tagline: "Content production.",
    description: "Cinema-quality highlight reels, promo content, and brand storytelling built to get noticed by coaches, scouts, and fans.",
    accent: "#FFAA00", status: "Coming Soon", live: false,
    href: "#", cta: "Get Early Access",
    logo: null, photo: "/videography.png", cat: "brand",
  },
] as const;

type P = typeof PRODUCTS[number];

/* ─── HERO CARD (V1Portal) ─── */
function HeroCard({ p }: { p: P }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={p.href} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display:"block", position:"relative", borderRadius:20, overflow:"hidden",
        height:440, textDecoration:"none",
        transition:"transform 0.35s, box-shadow 0.35s",
        transform: hov ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hov
          ? "0 32px 80px rgba(0,0,0,0.7), 0 12px 32px rgba(0,0,0,0.5)"
          : "0 16px 48px rgba(0,0,0,0.55), 0 6px 18px rgba(0,0,0,0.35)",
      }}
    >
      <Image src={p.photo!} alt="" fill
        style={{ objectFit:"cover", objectPosition:"center",
          transition:"transform 0.6s", transform: hov ? "scale(1.04)" : "scale(1)" }} />
      {/* Cinematic overlay */}
      <div style={{ position:"absolute", inset:0,
        background:"linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.1) 100%)" }} />
      {/* Bottom shadow gradient */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:120, pointerEvents:"none",
        background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)" }} />
      <div style={{ position:"absolute", inset:0,
        background:`radial-gradient(ellipse at 100% 0%, ${p.accent}18 0%, transparent 55%)` }} />

      {/* Live badge */}
      <div style={{ position:"absolute", top:24, left:24,
        display:"flex", alignItems:"center", gap:7,
        background:"#ffffff1c", backdropFilter:"blur(12px)",
        borderRadius:999, padding:"6px 14px" }}>
        <span style={{ width:6, height:6, borderRadius:"50%", background:"#22C55E",
          boxShadow:"0 0 8px #22C55E", display:"block" }} />
        <span style={{ fontFamily:"'Inter',sans-serif", fontSize:11, fontWeight:500,
          letterSpacing:1.5, textTransform:"uppercase", color:"#fff" }}>Live Now</span>
      </div>

      {/* Content */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"32px 32px 36px" }}>
        {"logo" in p && p.logo &&
          <Image src={p.logo as string} alt={p.name} width={140} height={42}
            style={{ objectFit:"contain", objectPosition:"left", marginBottom:0 }} />
        }
        <p style={{ fontFamily:"'Inter',sans-serif", fontSize:13, fontWeight:400,
          letterSpacing:0.3, color:"rgba(255,255,255,0.5)", marginBottom:20 }}>{p.description}</p>
        <span style={{
          display:"inline-flex", alignItems:"center", gap:8,
          padding:"11px 24px", borderRadius:12,
          background:"linear-gradient(135deg, red, #ffd000)",
          fontFamily:"'Inter',sans-serif", fontSize:13, fontWeight:600,
          color:"#fff",
        }}>
          Get Score
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </span>
      </div>
    </a>
  );
}

/* ─── SMALL TECH CARD ─── */
function TechCard({ p }: { p: P }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        position:"relative", borderRadius:20, overflow:"hidden",
        background: hov ? "#141414" : "#0f0f0f",
        padding:"32px 28px 28px",
        display:"flex", flexDirection:"column",
        transition:"background 0.25s, transform 0.35s, box-shadow 0.35s",
        transform: hov ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hov
          ? `0 28px 64px rgba(0,0,0,0.65), 0 8px 24px rgba(0,0,0,0.4), 0 0 0 1px ${p.accent}22`
          : `0 12px 36px rgba(0,0,0,0.45), 0 4px 12px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.04)`,
        minHeight:240,
      }}
    >
      {/* Bottom shadow gradient */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:100, pointerEvents:"none",
        background:"linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)" }} />
      {/* Accent glow top-right */}
      <div style={{ position:"absolute", top:0, right:0, width:160, height:160,
        background:`radial-gradient(ellipse at 100% 0%, ${p.accent}18 0%, transparent 65%)`,
        pointerEvents:"none", opacity: hov ? 1 : 0.5, transition:"opacity 0.3s" }} />

      {/* Top bar */}
      <div style={{ width:36, height:3, borderRadius:999, background:p.accent, marginBottom:24 }} />

      <div style={{ flex:1 }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:12 }}>
          <h3 style={{ fontFamily:"'Outfit',sans-serif", fontSize:22, fontWeight:800,
            letterSpacing:-0.5, color:"#fff" }}>{p.name}</h3>
          <span style={{
            padding:"3px 10px", borderRadius:999,
            background:"rgba(255,255,255,0.06)",
            fontFamily:"'Inter',sans-serif", fontSize:10, fontWeight:500,
            letterSpacing:1, textTransform:"uppercase", color:"rgba(255,255,255,0.3)",
          }}>{p.status}</span>
        </div>
        <p style={{ fontFamily:"'Inter',sans-serif", fontSize:13, fontWeight:400,
          lineHeight:1.75, color:"rgba(255,255,255,0.38)" }}>{p.description}</p>
      </div>

      <div style={{ display:"flex", alignItems:"center", gap:6, marginTop:24,
        color:p.accent, opacity: hov ? 1 : 0.5, transition:"opacity 0.25s" }}>
        <span style={{ fontFamily:"'Inter',sans-serif", fontSize:12, fontWeight:600, letterSpacing:0.3 }}>{p.cta}</span>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M7 17L17 7M17 7H7M17 7v10"/>
        </svg>
      </div>
    </div>
  );
}

/* ─── PHOTO PANEL CARD (Dev + Brand) ─── */
function PhotoCard({ p }: { p: P }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        position:"relative", borderRadius:20, overflow:"hidden", height:320,
        transition:"transform 0.35s, box-shadow 0.35s",
        transform: hov ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hov
          ? `0 28px 64px rgba(0,0,0,0.65), 0 8px 24px rgba(0,0,0,0.4), 0 0 0 1px ${p.accent}22`
          : `0 12px 36px rgba(0,0,0,0.45), 0 4px 12px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.04)`,
      }}
    >
      <Image src={p.photo!} alt="" fill
        style={{ objectFit:"cover", objectPosition:"center",
          transition:"transform 0.6s", transform: hov ? "scale(1.05)" : "scale(1)" }} />
      <div style={{ position:"absolute", inset:0,
        background:`linear-gradient(160deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.88) 100%)` }} />
      {/* Bottom shadow gradient */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:100, pointerEvents:"none",
        background:"linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)" }} />
      <div style={{ position:"absolute", inset:0,
        background:`radial-gradient(ellipse at 0% 100%, ${p.accent}1a 0%, transparent 55%)` }} />

      <div style={{ position:"absolute", inset:0, padding:"28px 28px 32px",
        display:"flex", flexDirection:"column", justifyContent:"space-between", zIndex:1 }}>
        <span style={{
          alignSelf:"flex-start", padding:"4px 12px", borderRadius:999,
          background:"rgba(255,255,255,0.08)", backdropFilter:"blur(8px)",
          fontFamily:"'Inter',sans-serif", fontSize:10, fontWeight:500,
          letterSpacing:1.5, textTransform:"uppercase", color:"rgba(255,255,255,0.45)",
        }}>{p.status}</span>

        <div>
          <div style={{ width:28, height:2, background:p.accent, borderRadius:999, marginBottom:14 }} />
          <h3 style={{ fontFamily:"'Outfit',sans-serif", fontSize:32, fontWeight:800,
            letterSpacing:-1, color:"#fff", marginBottom:6 }}>{p.name}</h3>
          <p style={{ fontFamily:"'Inter',sans-serif", fontSize:12, fontWeight:500,
            letterSpacing:0.3, color:p.accent, opacity:0.85 }}>{p.tagline}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── STAT CELL ─── */
const TICKER_BRANDS = [
  "V1Portal", "Koda", "V1Coach", "V1College", "V1Sportz", "V1Studios", "V1Gear", "V1Academy",
];

function StatsTicker() {
  const items = [...TICKER_BRANDS, ...TICKER_BRANDS, ...TICKER_BRANDS, ...TICKER_BRANDS];
  return (
    <div style={{ position:"relative", overflow:"hidden", padding:"22px 0", marginBottom:50 }}>
      {/* Edge fades */}
      <div style={{ position:"absolute", left:0, top:0, bottom:0, width:"12vw", zIndex:2,
        background:"linear-gradient(to right, #080808 0%, transparent 100%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", right:0, top:0, bottom:0, width:"12vw", zIndex:2,
        background:"linear-gradient(to left, #080808 0%, transparent 100%)", pointerEvents:"none" }} />

      <div style={{ display:"flex", width:"max-content", animation:"statsTick 60s linear infinite" }}>
        {items.map((name, i) => (
          <span key={i} style={{ display:"inline-flex", alignItems:"center", flexShrink:0 }}>
            <span style={{ fontFamily:"'Outfit',sans-serif", fontWeight:800,
              fontSize:"clamp(13px,1.4vw,17px)", letterSpacing:"0.18em", textTransform:"uppercase",
              color:"rgba(255,255,255,0.10)", paddingRight:40 }}>{name}</span>
            <span style={{ width:3, height:3, borderRadius:"50%", background:"rgba(255,255,255,0.12)",
              flexShrink:0, marginRight:40 }} />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── SECTION ─── */
function Section({ id, eyebrow, title, desc, children }: {
  id: string; eyebrow: string; title: string; desc: string; children: React.ReactNode;
}) {
  return (
    <section id={id} style={{ padding:"50px 5vw" }}>
      <div style={{ marginBottom:48 }}>
        <p style={{ fontFamily:"'Inter',sans-serif", fontSize:11, fontWeight:500,
          letterSpacing:3, textTransform:"uppercase", color:"rgba(255,255,255,0.2)",
          marginBottom:10 }}>{eyebrow}</p>
        <h2 style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(32px,5vw,52px)",
          fontWeight:800, letterSpacing:-2, color:"#fff", lineHeight:0.95,
          marginBottom:16 }}>{title}</h2>
        <p style={{ fontFamily:"'Inter',sans-serif", fontSize:14, fontWeight:400,
          lineHeight:1.7, color:"rgba(255,255,255,0.3)", maxWidth:480 }}>{desc}</p>
      </div>
      {children}
    </section>
  );
}

/* ─── PAGE ─── */
export default function V2Preview() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const tech  = PRODUCTS.filter(p => p.cat === "tech");
  const dev   = PRODUCTS.filter(p => p.cat === "dev");
  const brand = PRODUCTS.filter(p => p.cat === "brand");

  return (
    <main style={{ background:"#080808", color:"#fff", minHeight:"100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap');
        @font-face { font-family:'BankGothic'; src:url('/fonts/BankGothic Bold.ttf') format('truetype'); font-weight:700; }
        * { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }

        /* ── NAV ── */
        .v2-nav {
          position:fixed; top:0; left:0; right:0; z-index:100;
          display:flex; align-items:center; justify-content:space-between;
          padding:0 5vw; height:64px;
          transition:background 0.35s, border-color 0.35s;
        }
        .v2-nav.scrolled {
          background:rgba(8,8,8,0.88);
          backdrop-filter:blur(24px) saturate(1.4);
          border-bottom:1px solid rgba(255,255,255,0.06);
        }
        .nav-wordmark {
          display:flex; align-items:center; gap:10px; text-decoration:none;
        }
        .nav-wordmark span {
          font-family:'Outfit',sans-serif; font-size:15px; font-weight:800;
          letter-spacing:-0.5px; color:rgba(255,255,255,0.8);
        }
        .nav-links { display:flex; gap:2px; list-style:none; }
        .nav-links a {
          font-family:'Inter',sans-serif; font-size:13px; font-weight:500;
          color:rgba(255,255,255,0.4); text-decoration:none;
          padding:7px 14px; border-radius:8px;
          transition:color 0.2s, background 0.2s;
        }
        .nav-links a:hover { color:#fff; background:rgba(255,255,255,0.06); }
        .nav-cta {
          font-family:'Inter',sans-serif; font-size:13px; font-weight:600;
          color:#000; background:#fff; border:none; border-radius:10px;
          padding:9px 20px; text-decoration:none; cursor:pointer;
          transition:opacity 0.2s;
        }
        .nav-cta:hover { opacity:0.85; }

        /* ── HERO ── */
        .v2-hero {
          min-height:100vh; display:flex; flex-direction:column;
          align-items:center; justify-content:center;
          text-align:center; padding:100px 5vw 60px;
          position:relative; overflow:hidden;
        }
        .hero-noise {
          position:absolute; inset:0; pointer-events:none; z-index:0;
          opacity:0.055;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size:180px 180px;
        }
        .hero-grid {
          position:absolute; inset:0; pointer-events:none; z-index:0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size:72px 72px;
          mask-image:radial-gradient(ellipse at 50% 50%, black 20%, transparent 72%);
        }
        .hero-glow {
          position:absolute; inset:0; pointer-events:none; z-index:0;
          background:
            linear-gradient(to bottom, rgba(255,255,255,0.06) 0%, transparent 55%),
            radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,255,255,0.09) 0%, transparent 100%);
        }
        .hero-os {
          font-family:'BankGothic','Outfit',sans-serif;
          font-size:clamp(72px,14vw,180px); font-weight:700; font-style:italic;
          letter-spacing:-5px; line-height:0.85; text-transform:uppercase;
          color:#fff; margin-bottom:32px; position:relative;
        }
        .hero-badge {
          display:inline-flex; align-items:center; gap:8px;
          padding:7px 16px; border-radius:999px; margin-bottom:28px;
          background:rgba(255,255,255,0.05);
          font-family:'Inter',sans-serif; font-size:12px; font-weight:500;
          color:rgba(255,255,255,0.45);
        }
        .live-dot {
          width:6px; height:6px; border-radius:50%; background:#22C55E;
          box-shadow:0 0 0 2px rgba(34,197,94,0.25);
          animation:ldot 2.5s ease-in-out infinite;
        }
        @keyframes ldot { 0%,100%{box-shadow:0 0 0 2px rgba(34,197,94,0.25);} 50%{box-shadow:0 0 0 5px rgba(34,197,94,0);} }
        @keyframes statsTick { from{transform:translateX(0);} to{transform:translateX(-33.333%);} }
        @keyframes scrollBounce { 0%,100%{transform:translateX(-50%) translateY(0);} 50%{transform:translateX(-50%) translateY(7px);} }
        .hero-sub {
          font-family:'Inter',sans-serif; font-size:clamp(15px,1.5vw,18px); font-weight:400;
          color:rgba(255,255,255,0.38); max-width:480px; line-height:1.75;
          margin-bottom:44px; position:relative;
        }
        .hero-actions { display:flex; gap:10px; flex-wrap:wrap; justify-content:center; position:relative; }
        .btn-white {
          display:inline-flex; align-items:center; gap:8px;
          padding:13px 26px; background:#fff; border:none; border-radius:12px;
          font-family:'Inter',sans-serif; font-size:14px; font-weight:600;
          color:#000; text-decoration:none; cursor:pointer;
          transition:opacity 0.2s, transform 0.2s;
        }
        .btn-white:hover { opacity:0.88; transform:translateY(-1px); }
        .btn-outline {
          display:inline-flex; align-items:center; gap:8px;
          padding:13px 26px; background:transparent;
          border:1px solid rgba(255,255,255,0.12); border-radius:12px;
          font-family:'Inter',sans-serif; font-size:14px; font-weight:500;
          color:rgba(255,255,255,0.55); text-decoration:none; cursor:pointer;
          transition:border-color 0.2s, color 0.2s, transform 0.2s;
        }
        .btn-outline:hover { border-color:rgba(255,255,255,0.28); color:#fff; transform:translateY(-1px); }

        /* ── STATS ── */
        .stats-row {
          display:flex;
          border-bottom:1px solid rgba(255,255,255,0.05);
          background:#0a0a0a;
        }
        .stats-row > div:last-child { border-right:none !important; }

        /* ── GRIDS ── */
        .tech-grid {
          display:grid;
          grid-template-columns:1fr;
          gap:14px;
        }
        .tech-sub-grid {
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:14px;
        }
        .two-grid {
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:14px;
        }

        /* ── FOOTER ── */
        .v2-footer {
          padding:20px 5vw;
          display:flex; align-items:center; justify-content:space-between;
          flex-wrap:wrap; gap:16px;
        }
        .foot-text {
          font-family:'Inter',sans-serif; font-size:11px;
          letter-spacing:0.3px; color:rgba(255,255,255,0.18);
        }

        /* ── PREVIEW CHIP ── */
        .preview-chip {
          position:fixed; bottom:20px; left:50%; transform:translateX(-50%);
          z-index:999; white-space:nowrap;
          background:rgba(10,10,10,0.9); backdrop-filter:blur(20px);
          border-radius:999px;
          padding:9px 18px; display:flex; align-items:center; gap:10px;
          font-family:'Inter',sans-serif; font-size:11px; font-weight:500;
          color:rgba(255,255,255,0.38);
        }
        .chip-dot { width:6px; height:6px; border-radius:50%; background:#06B6D4;
          animation:cdot 2s ease-in-out infinite; flex-shrink:0; }
        @keyframes cdot { 0%,100%{opacity:1;} 50%{opacity:0.25;} }

        @media(max-width:900px) {
          .tech-sub-grid { grid-template-columns:repeat(2,1fr); }
          .two-grid      { grid-template-columns:1fr; }
          .stats-row     { flex-wrap:wrap; }
          .stats-row > div { border-right:none !important; border-bottom:1px solid rgba(255,255,255,0.05); min-width:33.333%; }
          .nav-links     { display:none; }
        }
        @media(max-width:600px) {
          .tech-sub-grid { grid-template-columns:1fr; }
          .stats-row > div { min-width:100%; }
          .hero-os { letter-spacing:-3px; }
        }
      `}</style>

      {/* PREVIEW */}
      <div className="preview-chip">
        <span className="chip-dot" />
        Design Preview — v2
        <a href="/" style={{ color:"rgba(255,255,255,0.28)", textDecoration:"none" }}>← Live</a>
      </div>

      {/* NAV */}
      <nav className={`v2-nav ${scrolled ? "scrolled" : ""}`}>
        <a href="/" className="nav-wordmark">
          <Image src="/varsityone-logo-mark-WHITE.png" alt="V1" width={20} height={30} style={{ objectFit:"contain" }} />
          <span>VarsityOne</span>
        </a>
        <ul className="nav-links">
          <li><a href="#tech">V1OS Tech</a></li>
          <li><a href="#dev">Development</a></li>
          <li><a href="#brand">Brand</a></li>
        </ul>
        <a href="https://v1portal.com" target="_blank" rel="noopener noreferrer" className="nav-cta">
          Try V1Portal
        </a>
      </nav>

      {/* HERO */}
      <section className="v2-hero">
        <div className="hero-noise" />
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div style={{ position:"relative", zIndex:1, display:"flex", flexDirection:"column", alignItems:"center" }}>
          {/* V1Portal live pill above logo */}
          <div className="hero-badge">
            <span className="live-dot" />
            V1Portal is live —&nbsp;
            <a href="https://v1portal.com" target="_blank" rel="noopener noreferrer"
              style={{ color:"rgba(255,255,255,0.75)", textDecoration:"none", fontWeight:600 }}>Open the app →</a>
          </div>
          {/* VarsityOne logo */}
          <Image
            src="/nav-logo-varsityone-dark-mode-only.png"
            alt="VarsityOne"
            width={220}
            height={66}
            style={{ objectFit:"contain", opacity:0.7, marginBottom:14 }}
          />
          <h1 className="hero-os"><FlipText text="V1OS" /></h1>
          <p className="hero-sub">The Operating System for College Football. Connecting athletes, coaches, and programs at every level.</p>
          <div className="hero-actions">
            <a href="https://v1portal.com" target="_blank" rel="noopener noreferrer" className="btn-white">
              Open V1Portal
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </a>
            <a href="#tech" className="btn-outline">Explore All Products</a>
          </div>
        </div>

        {/* Scroll indicator */}
        <a href="#tech" style={{ position:"absolute", bottom:40, left:"50%", transform:"translateX(-50%)",
          zIndex:2, display:"flex", flexDirection:"column", alignItems:"center", gap:8,
          textDecoration:"none", animation:"scrollBounce 2.2s ease-in-out infinite" }}>
          <span style={{ fontFamily:"'Inter',sans-serif", fontSize:9, fontWeight:500,
            letterSpacing:3, textTransform:"uppercase", color:"rgba(255,255,255,0.25)" }}>Scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round">
            <path d="M12 5v14M5 14l7 7 7-7"/>
          </svg>
        </a>

        {/* Bottom gradient blend into next section */}
        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:180, zIndex:1, pointerEvents:"none",
          background:"linear-gradient(to bottom, transparent 0%, #080808 100%)" }} />
      </section>

      {/* STATS TICKER */}
      <StatsTicker />

      {/* V1OS TECH */}
      <Section id="tech" eyebrow="V1OS Tech — Core" title="The Tech Stack."
        desc="Four products that power the full recruiting cycle — from athlete discovery to program pipeline management.">
        <div className="tech-grid">
          <HeroCard p={tech[0]} />
          <div className="tech-sub-grid">
            {tech.slice(1).map(p => <TechCard key={p.id} p={p} />)}
          </div>
        </div>
      </Section>

      {/* DEVELOPMENT */}
      <Section id="dev" eyebrow="Development & League — Ecosystem" title="On the Field."
        desc="Training frameworks and live competition that drive athlete adoption of the V1OS tech layer.">
        <div className="two-grid">
          {dev.map(p => <PhotoCard key={p.id} p={p} />)}
        </div>
      </Section>

      {/* BRAND */}
      <Section id="brand" eyebrow="Other — Culture + Brand" title="The Culture."
        desc="Gear and content that build VarsityOne in the culture around the game.">
        <div className="two-grid">
          {brand.map(p => <PhotoCard key={p.id} p={p} />)}
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="v2-footer">
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <Image src="/v1-mark.png" alt="V1" width={14} height={22} style={{ objectFit:"contain", opacity:0.4 }} />
          <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:13, fontWeight:700,
            color:"rgba(255,255,255,0.28)", letterSpacing:-0.3 }}>VarsityOne Group LLC</span>
        </div>
        <p className="foot-text">© {new Date().getFullYear()} VarsityOne Group LLC — San Diego, CA</p>
        <p className="foot-text">vars1tyone.com</p>
      </footer>
    </main>
  );
}
