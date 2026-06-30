"use client";
import { useState } from "react";
import Image from "next/image";

/* ── Icons ── */
function IGIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
}
function TTIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 000 12.68 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.69a4.85 4.85 0 01-1.01 0z"/></svg>;
}
function XIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.258 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>;
}
function YTIcon() {
  return <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>;
}
function ArrowIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>;
}
function PlayIcon() {
  return <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="rgba(0,0,0,0.55)"/><path d="M15 12l10 6-10 6V12z" fill="#fff"/></svg>;
}

type P = "ig" | "tt" | "x" | "yt";
function SocIcon({ p }: { p: P }) {
  if (p === "ig") return <IGIcon />;
  if (p === "tt") return <TTIcon />;
  if (p === "x")  return <XIcon />;
  return <YTIcon />;
}

/* ── Data ── */
const PERSONAL = [
  { p: "ig" as P, url: "https://instagram.com/0nlywes",  label: "Instagram @0nlywes" },
  { p: "tt" as P, url: "https://tiktok.com/@0nlywes",    label: "TikTok @0nlywes" },
  { p: "x"  as P, url: "https://x.com/0nlywes",          label: "X @0nlywes" },
  { p: "yt" as P, url: "https://youtube.com/@0nlywes",   label: "YouTube @0nlywes" },
];

const BRANDS = [
  { id: "v1portal",    name: "V1PORTAL",    tagline: "Recruiting Intelligence",  status: "Live",        live: true,  href: "https://v1portal.com",                    accent: "#C850C0", photo: "/v1portal-iphone-hand.png" },
  { id: "v1sportz",   name: "V1SPORTZ",    tagline: "Competitive Leagues",      status: "2027",        live: false, href: "https://vars1tyone.com#v1sportz",          accent: "#C850C0", photo: "/v1-league2.png" },
  { id: "v1studios",  name: "V1STUDIOS",   tagline: "Your Story on Film",        status: "Coming Soon", live: false, href: "https://vars1tyone.com#v1studios",         accent: "#FFAA00", photo: "/videography.png" },
  { id: "v1gear",     name: "V1GEAR",      tagline: "Wear the Standard",         status: "Coming Soon", live: false, href: "https://vars1tyone.com#v1clothing",        accent: "#00C9A7", photo: "/varsityone-v1-shop-bg-cover2.png" },
  { id: "v1uni",      name: "V1UNIVERSITY",tagline: "Train. Learn. Dominate.",   status: "Coming Soon", live: false, href: "https://vars1tyone.com#v1university",      accent: "#4F8EF7", photo: "/varsityone-v1-university-training-bg-cover.png" },
];

const VIDEOS = [
  { title: "V1Portal — Know Where You Stand",       photo: "/v1portal-iphone-hand.png",                       href: "https://youtube.com/@varsityone" },
  { title: "The VarsityOne Story",                  photo: "/wes-starke-ceo.png",                              href: "https://youtube.com/@varsityone" },
  { title: "V1Sportz — Real Reps. Real Film.",      photo: "/v1-league2.png",                                  href: "https://youtube.com/@varsityone" },
  { title: "Train Like V1",                         photo: "/varsityone-v1-university-training-bg-cover.png",  href: "https://youtube.com/@varsityone" },
];

const PRODUCTS_FREE = {
  id: "ncaa-guide",
  title: "College Eligibility ID & Registration Guide",
  subtitle: "NCAA · NAIA · NJCAA",
  cover: "/NCAA-College-Eligibility-ID-and-Registration-NAIA-NJCAA-Guide-COVER.png",
  bullets: [
    "Step-by-step Eligibility Center ID walkthrough",
    "NAIA & NJCAA registration process explained",
    "Common mistakes that delay clearance",
    "Academic & amateurism requirements decoded",
  ],
  cta: "Download Free Guide",
  href: "https://v1portal.com/playbooks",
};

const PRODUCTS_PAID = [
  {
    id: "film-guide",
    title: "Film Guide",
    price: "$27",
    cover: "/Film-Guide-COVER.png",
    href: "https://v1portal.com/playbooks",
  },
  {
    id: "parents-guide",
    title: "Parents Guide to Recruiting",
    price: "$37",
    cover: "/Parent-Guide-To-Recruiting-COVER.png",
    href: "https://v1portal.com/playbooks",
  },
  {
    id: "recruiting-playbook",
    title: "Recruiting Playbook",
    price: "$47",
    cover: "/Recruiting-Playbook-COVER.png",
    href: "https://v1portal.com/playbooks",
  },
];

const SOCIAL_ACCOUNTS = [
  {
    name: "VarsityOne", handle: "@varsityone",
    links: [
      { p: "ig" as P, url: "https://instagram.com/varsityone",  label: "Instagram @varsityone" },
      { p: "tt" as P, url: "https://tiktok.com/@varsityone",    label: "TikTok @varsityone" },
      { p: "x"  as P, url: "https://x.com/varsityone",          label: "X @varsityone" },
      { p: "yt" as P, url: "https://youtube.com/@varsityone",   label: "YouTube @varsityone" },
    ],
  },
  {
    name: "V1Portal", handle: "@v1portal",
    links: [
      { p: "ig" as P, url: "https://instagram.com/v1portal",   label: "Instagram @v1portal" },
      { p: "tt" as P, url: "https://tiktok.com/@v1portal",     label: "TikTok @v1portal" },
      { p: "x"  as P, url: "https://x.com/v1portal",           label: "X @v1portal" },
      { p: "yt" as P, url: "https://youtube.com/@v1portal",    label: "YouTube @v1portal" },
    ],
  },
  {
    name: "Wes Starke", handle: "@0nlywes",
    links: PERSONAL,
  },
];

const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

/* ── Component ── */
export default function ConnectPage() {
  const [email, setEmail] = useState("");
  const [joinStatus, setJoinStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleJoin(e: React.FormEvent) {
    e.preventDefault();
    setJoinStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, entity: "newsletter" }),
      });
      if (!res.ok) throw new Error();
      setJoinStatus("success");
      setEmail("");
    } catch {
      setJoinStatus("error");
    }
  }

  return (
    <main style={{ background: "#060606", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@300;400;500&display=swap');
        @font-face { font-family:'BankGothic'; src:url('/fonts/BankGothic Bold.ttf') format('truetype'); font-weight:700; font-style:normal; }
        @font-face { font-family:'BankGothic'; src:url('/fonts/BankGothic Md BT.ttf') format('truetype'); font-weight:500; font-style:normal; }

        .grain-fx { position:fixed; inset:0; z-index:9999; pointer-events:none; opacity:0.035; background-image:${GRAIN}; background-size:200px; }
        .vig-fx   { position:fixed; inset:0; z-index:9998; pointer-events:none; background:radial-gradient(ellipse at 50% 35%, transparent 42%, rgba(0,0,0,0.6) 100%); }

        .page { max-width:480px; margin:0 auto; }

        /* ── HERO ── */
        .hero { position:relative; width:100%; height:65vh; min-height:380px; overflow:hidden; }
        .hero-grade { position:absolute; inset:0; z-index:1;
          background: linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0) 22%, rgba(0,0,0,0.55) 60%, #060606 100%),
                      linear-gradient(to right, rgba(0,5,22,0.45) 0%, transparent 55%); }
        .hero-grain { position:absolute; inset:0; z-index:2; pointer-events:none; opacity:0.055; background-image:${GRAIN}; background-size:200px; }
        .hero-mark  { position:absolute; top:20px; left:20px; z-index:3; opacity:0.5; }
        .hero-btm   { position:absolute; bottom:0; left:0; right:0; z-index:3; padding:0 20px 26px; }
        .hero-eyebrow { font-family:'Barlow',sans-serif; font-size:10px; font-weight:500; letter-spacing:4px; text-transform:uppercase; color:rgba(255,255,255,0.35); margin-bottom:4px; }
        .hero-name  { font-family:'BankGothic','Barlow Condensed',sans-serif; font-size:clamp(46px,13vw,68px); font-weight:700; font-style:italic; letter-spacing:-2px; line-height:0.88; color:#fff; text-transform:uppercase; margin-bottom:18px; }

        /* ── SOC BUTTONS ── */
        .soc-row  { display:flex; gap:9px; align-items:center; }
        .soc-btn  { width:40px; height:40px; border-radius:50%; background:rgba(255,255,255,0.1); backdrop-filter:blur(8px); display:flex; align-items:center; justify-content:center; color:rgba(255,255,255,0.7); text-decoration:none; border:none; flex-shrink:0; transition:background 0.2s,color 0.2s,transform 0.2s; }
        .soc-btn:hover { background:rgba(255,255,255,0.2); color:#fff; transform:translateY(-2px); }
        .soc-handle { font-family:'Barlow',sans-serif; font-size:10px; letter-spacing:2.5px; text-transform:uppercase; color:rgba(255,255,255,0.2); margin-left:6px; }

        /* ── FEATURED BANNER ── */
        .feat { position:relative; overflow:hidden; padding:28px 22px 28px; background:#0a0010; min-height:180px; }
        .feat-glow { position:absolute; top:-30%; right:-10%; width:55%; height:160%; background:radial-gradient(ellipse,rgba(200,80,192,0.3) 0%,transparent 65%); pointer-events:none; z-index:0; }
        .feat-img  { position:absolute; right:0; bottom:0; width:48%; height:100%; z-index:0; opacity:0.35; }
        .feat-inner { position:relative; z-index:1; max-width:58%; }
        .feat-label { font-family:'Barlow',sans-serif; font-size:9px; font-weight:500; letter-spacing:4px; text-transform:uppercase; color:#fff; margin-bottom:8px; }
        .feat-sub   { font-family:'Barlow',sans-serif; font-size:13px; font-weight:300; color:rgba(255,255,255,0.45); line-height:1.5; margin:8px 0 18px; }
        .feat-cta   { display:inline-flex; align-items:center; gap:7px; padding:10px 20px; background:linear-gradient(135deg,#ff0000,#ffb800); border-radius:999px; font-family:'Barlow Condensed',sans-serif; font-size:12px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:#fff; text-decoration:none; transition:opacity 0.2s; }
        .feat-cta:hover { opacity:0.82; }

        /* ── SECTION HEADER ── */
        .sec-pad  { padding:32px 20px 0; }
        .sec-head { display:flex; align-items:baseline; justify-content:space-between; margin-bottom:14px; }
        .sec-title { font-family:'Barlow Condensed',sans-serif; font-size:20px; font-weight:800; letter-spacing:3px; text-transform:uppercase; color:#fff; }
        .sec-more  { font-family:'Barlow',sans-serif; font-size:10px; letter-spacing:2px; text-transform:uppercase; color:rgba(255,255,255,0.3); text-decoration:none; display:flex; align-items:center; gap:4px; transition:color 0.2s; }
        .sec-more:hover { color:rgba(255,255,255,0.65); }

        /* ── BRANDS CAROUSEL ── */
        .h-scroll { display:flex; gap:10px; overflow-x:auto; scroll-snap-type:x mandatory; -webkit-overflow-scrolling:touch; scrollbar-width:none; padding:0 20px 20px; }
        .h-scroll::-webkit-scrollbar { display:none; }

        .bc { scroll-snap-align:start; flex-shrink:0; width:225px; height:300px; position:relative; border-radius:14px; overflow:hidden; text-decoration:none; display:block; transition:transform 0.25s; }
        .bc:hover { transform:scale(1.025); }
        .bc-overlay { position:absolute; inset:0; background:linear-gradient(to bottom,rgba(0,0,0,0.1) 0%,rgba(0,0,0,0) 30%,rgba(0,0,0,0.78) 100%); }
        .bc-body    { position:absolute; bottom:0; left:0; right:0; z-index:1; padding:14px 14px 18px; }
        .bc-status  { display:inline-block; padding:3px 8px; border-radius:999px; font-family:'Barlow',sans-serif; font-size:9px; font-weight:500; letter-spacing:2px; text-transform:uppercase; margin-bottom:5px; }
        .bc-name    { font-family:'BankGothic','Barlow Condensed',sans-serif; font-size:22px; font-weight:700; font-style:italic; letter-spacing:-0.5px; color:#fff; text-transform:uppercase; line-height:1; margin-bottom:3px; }
        .bc-tag     { font-family:'Barlow',sans-serif; font-size:11px; font-weight:300; color:rgba(255,255,255,0.45); }
        .bc-accent  { position:absolute; bottom:0; left:0; right:0; height:3px; }

        /* ── VIDEO CAROUSEL ── */
        .vc { scroll-snap-align:start; flex-shrink:0; width:185px; text-decoration:none; display:block; }
        .vc-thumb { position:relative; width:100%; aspect-ratio:16/9; border-radius:10px; overflow:hidden; margin-bottom:8px; }
        .vc-overlay { position:absolute; inset:0; background:rgba(0,0,0,0.28); display:flex; align-items:center; justify-content:center; transition:background 0.2s; }
        .vc:hover .vc-overlay { background:rgba(0,0,0,0.15); }
        .vc-title   { font-family:'Barlow',sans-serif; font-size:11px; font-weight:400; color:rgba(255,255,255,0.65); line-height:1.35; }
        .vc-channel { font-family:'Barlow',sans-serif; font-size:10px; color:rgba(255,255,255,0.25); letter-spacing:1px; margin-top:2px; }

        /* ── SHOP BANNER ── */
        .shop { position:relative; margin:28px 20px 0; border-radius:16px; overflow:hidden; height:210px; }
        .shop-overlay { position:absolute; inset:0; z-index:1; background:linear-gradient(to right,rgba(0,0,0,0.88) 0%,rgba(0,0,0,0.45) 55%,rgba(0,0,0,0) 100%); }
        .shop-inner   { position:relative; z-index:2; height:100%; display:flex; flex-direction:column; justify-content:center; padding:0 24px; }
        .shop-label   { font-family:'Barlow',sans-serif; font-size:9px; font-weight:500; letter-spacing:4px; text-transform:uppercase; color:rgba(0,201,167,0.8); margin-bottom:5px; }
        .shop-heading { font-family:'BankGothic','Barlow Condensed',sans-serif; font-size:40px; font-weight:700; font-style:italic; letter-spacing:-1.5px; line-height:0.88; color:#fff; text-transform:uppercase; margin-bottom:7px; }
        .shop-sub     { font-family:'Barlow',sans-serif; font-size:13px; font-weight:300; color:rgba(255,255,255,0.4); margin-bottom:14px; }
        .shop-badge   { display:inline-flex; padding:5px 14px; border-radius:999px; background:linear-gradient(135deg,#00ffff,#ffa400); font-family:'Barlow Condensed',sans-serif; font-size:11px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:#000; }

        /* ── PRODUCTS ── */
        .prod-sec { padding:32px 20px 0; }
        .prod-free { background:rgba(200,80,192,0.06); border:1px solid rgba(200,80,192,0.14); border-radius:16px; overflow:hidden; display:flex; min-height:190px; }
        .prod-free-cover { width:130px; flex-shrink:0; position:relative; }
        .prod-free-body { flex:1; padding:18px 16px 18px 14px; display:flex; flex-direction:column; justify-content:space-between; }
        .prod-free-top {}
        .prod-badge-free { display:inline-block; padding:3px 10px; border-radius:999px; background:rgba(0,201,100,0.18); color:#00C964; font-family:'Barlow',sans-serif; font-size:9px; font-weight:600; letter-spacing:2px; text-transform:uppercase; margin-bottom:8px; }
        .prod-free-title { font-family:'Barlow Condensed',sans-serif; font-size:15px; font-weight:800; letter-spacing:0.5px; text-transform:uppercase; color:#fff; line-height:1.2; margin-bottom:8px; }
        .prod-free-bullets { list-style:none; padding:0; margin:0 0 14px; }
        .prod-free-bullets li { font-family:'Barlow',sans-serif; font-size:10.5px; color:rgba(255,255,255,0.45); line-height:1.55; padding-left:12px; position:relative; }
        .prod-free-bullets li::before { content:'—'; position:absolute; left:0; color:rgba(200,80,192,0.55); }
        .prod-dl-cta { display:inline-flex; align-items:center; gap:5px; padding:8px 14px; background:linear-gradient(135deg,#ff0000,#ffb800); border-radius:999px; font-family:'Barlow Condensed',sans-serif; font-size:10px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#fff; text-decoration:none; transition:opacity 0.2s; white-space:nowrap; }
        .prod-dl-cta:hover { opacity:0.82; }
        .prod-divider { display:flex; align-items:center; gap:12px; padding:22px 0 14px; }
        .prod-div-line { flex:1; height:1px; background:rgba(255,255,255,0.07); }
        .prod-div-text { font-family:'Barlow',sans-serif; font-size:9px; font-weight:600; letter-spacing:3px; text-transform:uppercase; color:rgba(255,255,255,0.18); white-space:nowrap; }
        .gc { scroll-snap-align:start; flex-shrink:0; width:155px; text-decoration:none; display:block; }
        .gc-cover { position:relative; width:100%; aspect-ratio:3/4; border-radius:10px; overflow:hidden; margin-bottom:9px; }
        .gc-cover-shade { position:absolute; inset:0; background:linear-gradient(to bottom,transparent 60%,rgba(0,0,0,0.7) 100%); }
        .gc-price { position:absolute; top:7px; right:7px; background:rgba(200,80,192,0.92); backdrop-filter:blur(4px); padding:3px 8px; border-radius:999px; font-family:'Barlow Condensed',sans-serif; font-size:12px; font-weight:700; color:#fff; }
        .gc-title { font-family:'Barlow Condensed',sans-serif; font-size:12.5px; font-weight:700; letter-spacing:0.5px; text-transform:uppercase; color:rgba(255,255,255,0.75); line-height:1.3; margin-bottom:6px; }
        .gc-link { font-family:'Barlow',sans-serif; font-size:9.5px; color:#fff; letter-spacing:1px; text-transform:uppercase; display:flex; align-items:center; gap:3px; }

        /* ── JOIN ── */
        .join { padding:40px 20px 36px; background:#080808; margin-top:28px; }
        .join-eyebrow { font-family:'Barlow',sans-serif; font-size:9px; font-weight:500; letter-spacing:4px; text-transform:uppercase; color:rgba(255,255,255,0.2); margin-bottom:8px; }
        .join-heading { font-family:'BankGothic','Barlow Condensed',sans-serif; font-size:36px; font-weight:700; font-style:italic; letter-spacing:-1px; line-height:0.9; color:#fff; text-transform:uppercase; margin-bottom:10px; }
        .join-sub   { font-family:'Barlow',sans-serif; font-size:13px; font-weight:300; color:rgba(255,255,255,0.4); line-height:1.6; margin-bottom:22px; max-width:340px; }
        .join-form  { display:flex; gap:8px; }
        .join-input { flex:1; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); border-radius:999px; color:#fff; font-family:'Barlow',sans-serif; font-size:14px; padding:12px 18px; outline:none; transition:border-color 0.2s; min-width:0; }
        .join-input::placeholder { color:rgba(255,255,255,0.2); }
        .join-input:focus { border-color:rgba(255,255,255,0.28); }
        .join-btn   { padding:12px 22px; background:#fff; border:none; border-radius:999px; font-family:'Barlow Condensed',sans-serif; font-size:13px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:#000; cursor:pointer; white-space:nowrap; transition:opacity 0.2s; }
        .join-btn:hover:not(:disabled) { opacity:0.85; }
        .join-btn:disabled { opacity:0.45; cursor:default; }
        .join-ok { font-family:'Barlow',sans-serif; font-size:14px; color:#00C964; }
        .join-err { font-family:'Barlow',sans-serif; font-size:12px; color:#ff5555; margin-top:8px; }

        /* ── FOLLOW ── */
        .follow { padding:32px 20px 8px; }
        .follow-row { display:flex; align-items:center; justify-content:space-between; padding:14px 0; border-bottom:1px solid rgba(255,255,255,0.05); }
        .follow-row:last-child { border-bottom:none; }
        .follow-left {}
        .follow-brand  { font-family:'Barlow Condensed',sans-serif; font-size:14px; font-weight:700; letter-spacing:1px; text-transform:uppercase; color:rgba(255,255,255,0.85); }
        .follow-handle { font-family:'Barlow',sans-serif; font-size:10px; letter-spacing:1px; color:rgba(255,255,255,0.28); margin-top:1px; }
        .follow-icons  { display:flex; gap:7px; }
        .soc-sm  { width:34px; height:34px; border-radius:50%; background:rgba(255,255,255,0.06); display:flex; align-items:center; justify-content:center; color:rgba(255,255,255,0.5); text-decoration:none; transition:background 0.2s,color 0.2s; }
        .soc-sm:hover { background:rgba(255,255,255,0.14); color:#fff; }

        /* ── FOOTER ── */
        .footer { text-align:center; padding:24px 20px 56px; border-top:1px solid rgba(255,255,255,0.07); }
        .footer-text { font-family:'Barlow',sans-serif; font-size:10px; letter-spacing:1.5px; color:rgba(255,255,255,0.4); margin-top:10px; }

        @media (max-width:480px) {
          .hero { height:58vh; min-height:340px; }
          .bc   { width:calc(73vw); }
          .vc   { width:calc(58vw); }
        }
      `}</style>

      <div className="grain-fx" aria-hidden="true" />
      <div className="vig-fx"   aria-hidden="true" />

      <div className="page">

        {/* ── HERO ── */}
        <div className="hero">
          <Image src="/wes-starke-ceo.png" alt="Wes Starke" fill priority style={{ objectFit:"cover", objectPosition:"center top" }} />
          <div className="hero-grade" />
          <div className="hero-grain" aria-hidden="true" />
          <div className="hero-mark">
            <Image src="/v1-mark.png" alt="V1" width={16} height={26} style={{ objectFit:"contain" }} />
          </div>
          <div className="hero-btm">
            <p className="hero-eyebrow">Founder · VarsityOne Group</p>
            <h1 className="hero-name">Wes Starke</h1>
            <div className="soc-row">
              {PERSONAL.map(s => (
                <a key={s.p} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="soc-btn">
                  <SocIcon p={s.p} />
                </a>
              ))}
              <span className="soc-handle">@0nlywes</span>
            </div>
          </div>
        </div>

        {/* ── V1PORTAL FEATURED ── */}
        <div className="feat">
          <div className="feat-glow" aria-hidden="true" />
          <div className="feat-img">
            <Image src="/v1portal-iphone-hand.png" alt="" fill style={{ objectFit:"cover", objectPosition:"center" }} />
          </div>
          <div className="feat-inner">
            <p className="feat-label">Now Live</p>
            <Image src="/nav-logo-v1portal-dark-mode-only.png" alt="V1Portal" width={118} height={36} style={{ objectFit:"contain", objectPosition:"left" }} />
            <p className="feat-sub">Know exactly where you stand. Data-driven recruiting intelligence for high school football.</p>
            <a href="https://v1portal.com" target="_blank" rel="noopener noreferrer" className="feat-cta">
              Launch App <ArrowIcon />
            </a>
          </div>
        </div>

        {/* ── PRODUCTS / PLAYBOOKS ── */}
        <div className="prod-sec">
          <div className="sec-head">
            <span className="sec-title">Playbooks</span>
            <a href="https://v1portal.com/playbooks" target="_blank" rel="noopener noreferrer" className="sec-more">View All <ArrowIcon /></a>
          </div>

          {/* Free guide — feature card */}
          <a href={PRODUCTS_FREE.href} target="_blank" rel="noopener noreferrer" className="prod-free" style={{ textDecoration:"none" }}>
            <div className="prod-free-cover">
              <Image src={PRODUCTS_FREE.cover} alt={PRODUCTS_FREE.title} fill style={{ objectFit:"cover", objectPosition:"center" }} />
            </div>
            <div className="prod-free-body">
              <div className="prod-free-top">
                <span className="prod-badge-free">Free Guide</span>
                <p className="prod-free-title">{PRODUCTS_FREE.title}</p>
                <ul className="prod-free-bullets">
                  {PRODUCTS_FREE.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
              <span className="prod-dl-cta">{PRODUCTS_FREE.cta} <ArrowIcon /></span>
            </div>
          </a>

          {/* Premium guides */}
          <div className="prod-divider">
            <div className="prod-div-line" />
            <span className="prod-div-text">Premium Guides</span>
            <div className="prod-div-line" />
          </div>
        </div>
        <div className="h-scroll">
          {PRODUCTS_PAID.map(g => (
            <a key={g.id} href={g.href} target="_blank" rel="noopener noreferrer" className="gc">
              <div className="gc-cover">
                <Image src={g.cover} alt={g.title} fill style={{ objectFit:"cover", objectPosition:"center" }} />
                <div className="gc-cover-shade" />
                <span className="gc-price">{g.price}</span>
              </div>
              <p className="gc-title">{g.title}</p>
              <span className="gc-link">Get the Guide <ArrowIcon /></span>
            </a>
          ))}
        </div>

        {/* ── BRANDS CAROUSEL ── */}
        <div className="sec-pad">
          <div className="sec-head">
            <span className="sec-title">Explore V1</span>
            <a href="https://vars1tyone.com" target="_blank" rel="noopener noreferrer" className="sec-more">All Brands <ArrowIcon /></a>
          </div>
        </div>
        <div className="h-scroll">
          {BRANDS.map(b => (
            <a key={b.id} href={b.href} target="_blank" rel="noopener noreferrer" className="bc">
              <Image src={b.photo} alt={b.name} fill style={{ objectFit:"cover", objectPosition:"center" }} />
              <div className="bc-overlay" />
              <div className="bc-body">
                <span className="bc-status" style={{
                  background: b.live ? "rgba(0,201,100,0.18)" : "rgba(255,255,255,0.08)",
                  color:      b.live ? "#00C964"              : "rgba(255,255,255,0.45)",
                }}>{b.status}</span>
                <p className="bc-name">{b.name}</p>
                <p className="bc-tag">{b.tagline}</p>
              </div>
              <div className="bc-accent" style={{ background: b.accent }} />
            </a>
          ))}
        </div>

        {/* ── VIDEOS CAROUSEL ── */}
        <div className="sec-pad">
          <div className="sec-head">
            <span className="sec-title">Watch</span>
            <a href="https://youtube.com/@varsityone" target="_blank" rel="noopener noreferrer" className="sec-more">Subscribe <ArrowIcon /></a>
          </div>
        </div>
        <div className="h-scroll">
          {VIDEOS.map((v, i) => (
            <a key={i} href={v.href} target="_blank" rel="noopener noreferrer" className="vc">
              <div className="vc-thumb">
                <Image src={v.photo} alt={v.title} fill style={{ objectFit:"cover", objectPosition:"center" }} />
                <div className="vc-overlay"><PlayIcon /></div>
              </div>
              <p className="vc-title">{v.title}</p>
              <p className="vc-channel">@varsityone</p>
            </a>
          ))}
        </div>

        {/* ── SHOP BANNER ── */}
        <div className="shop">
          <Image src="/varsityone-v1-shop-bg-cover2.png" alt="" fill style={{ objectFit:"cover", objectPosition:"center" }} />
          <div className="shop-overlay" />
          <div className="shop-inner">
            <p className="shop-label">Apparel</p>
            <h2 className="shop-heading">V1Gear</h2>
            <p className="shop-sub">Wear the Standard.</p>
            <span className="shop-badge">Coming Soon</span>
          </div>
        </div>

        {/* ── JOIN THE MOVEMENT ── */}
        <div className="join">
          <p className="join-eyebrow">Stay Connected</p>
          <h2 className="join-heading">Join the Movement</h2>
          <p className="join-sub">Get updates on new drops, product launches, and everything VarsityOne — straight to your inbox.</p>
          {joinStatus === "success" ? (
            <p className="join-ok">You&apos;re in. We&apos;ll be in touch.</p>
          ) : (
            <>
              <form onSubmit={handleJoin} className="join-form">
                <input
                  className="join-input"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
                <button className="join-btn" type="submit" disabled={joinStatus === "loading"}>
                  {joinStatus === "loading" ? "..." : "Join"}
                </button>
              </form>
              {joinStatus === "error" && <p className="join-err">Something went wrong — try again.</p>}
            </>
          )}
        </div>

        {/* ── FOLLOW ── */}
        <div className="follow">
          <div className="sec-head" style={{ marginBottom:8 }}>
            <span className="sec-title">Follow</span>
          </div>
          {SOCIAL_ACCOUNTS.map(acct => (
            <div key={acct.handle} className="follow-row">
              <div className="follow-left">
                <p className="follow-brand">{acct.name}</p>
                <p className="follow-handle">{acct.handle}</p>
              </div>
              <div className="follow-icons">
                {acct.links.map(s => (
                  <a key={s.p} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="soc-sm">
                    <SocIcon p={s.p} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── FOOTER ── */}
        <div className="footer">
          <Image src="/v1-mark.png" alt="VarsityOne" width={14} height={22} style={{ objectFit:"contain", opacity:0.5 }} />
          <p className="footer-text">© {new Date().getFullYear()} VarsityOne Group LLC — San Diego, CA</p>
        </div>

      </div>
    </main>
  );
}
