"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const entities = [
  {
    id: "v1portal",
    name: "V1PORTAL",
    logo: "/nav-logo-v1portal-dark-mode-only.png",
    tagline: "College Football Recruiting Intelligence",
    description:
      "Know exactly where you stand. V1Portal gives athletes a data-driven recruiting score, matches them with programs at their level, and builds a week-by-week action plan to get in front of the right coaches.",
    cta: "Visit V1Portal",
    ctaHref: "https://v1portal.com",
    ctaLive: true,
    accent: "#FF6B2B",
    bg: "#0a0a0a",
  },
  {
    id: "v1sportz",
    name: "V1SPORTZ",
    logo: "/V1SPORTZ-LOGO+MARK-VARSITYONE.png",
    tagline: "Competitive Leagues. Real Opportunity.",
    description:
      "V1Sportz runs competitive football leagues in the Inland Empire and beyond — built to give athletes real game reps, real film, and real pathways to the next level.",
    cta: "Coming Soon",
    ctaHref: "#",
    ctaLive: false,
    accent: "#C850C0",
    bg: "#080810",
  },
  {
    id: "v1studios",
    name: "V1STUDIOS",
    tagline: "Your Story on Film.",
    description:
      "Cinema-quality production for athletes. Highlight reels, promo content, and brand storytelling built to get noticed by coaches, scouts, and fans.",
    cta: "Coming Soon",
    ctaHref: "#",
    ctaLive: false,
    accent: "#FFAA00",
    bg: "#0d0900",
  },
  {
    id: "v1clothing",
    name: "V1GEAR",
    tagline: "Wear the Standard.",
    description:
      "The VarsityOne clothing brand. Culture-forward gear built for athletes who take their craft seriously — on and off the field.",
    cta: "Coming Soon",
    ctaHref: "#",
    ctaLive: false,
    accent: "#00C9A7",
    bg: "#00100d",
  },
  {
    id: "v1university",
    name: "V1UNIVERSITY",
    tagline: "Train. Learn. Dominate.",
    description:
      "Everything high school football — training programs, recruiting education, film study, and the knowledge base every athlete and parent needs to navigate the process.",
    cta: "Coming Soon",
    ctaHref: "#",
    ctaLive: false,
    accent: "#4F8EF7",
    bg: "#060810",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const [menuOpen, setMenuOpen] = useState(false);
  const [waitlistEntity, setWaitlistEntity] = useState<typeof entities[0] | null>(null);
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistStatus, setWaitlistStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const openWaitlist = (entity: typeof entities[0]) => {
    setWaitlistEntity(entity);
    setWaitlistEmail("");
    setWaitlistStatus("idle");
  };

  const closeWaitlist = () => setWaitlistEntity(null);

  const handleWaitlistSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!waitlistEntity) return;
    setWaitlistStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: waitlistEmail, entity: waitlistEntity.id }),
      });
      if (!res.ok) throw new Error();
      setWaitlistStatus("success");
    } catch {
      setWaitlistStatus("error");
    }
  };

  useEffect(() => {
    if (!waitlistEntity) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeWaitlist(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [waitlistEntity]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    if (menuOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, i) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },
        { threshold: 0.5 }
      );
      observer.observe(ref);
      return observer;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <main style={{ background: "#000", minHeight: "100vh", fontFamily: "'Barlow Condensed', sans-serif" }}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@300;400;500&display=swap');

        @font-face {
          font-family: 'BankGothic';
          src: url('/fonts/BankGothic Bold.ttf') format('truetype');
          font-weight: 700;
          font-style: normal;
        }
        @font-face {
          font-family: 'BankGothic';
          src: url('/fonts/BankGothic Md BT.ttf') format('truetype');
          font-weight: 500;
          font-style: normal;
        }
        @font-face {
          font-family: 'BankGothic';
          src: url('/fonts/Bank Gothic Light Regular.otf') format('opentype');
          font-weight: 300;
          font-style: normal;
        }
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        html { scroll-behavior: smooth; }

        .nav-dot {
          width: 8px; height: 8px; border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.4);
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .nav-dot.active {
          background: #fff;
          border-color: #fff;
          transform: scale(1.3);
        }

        .entity-section {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .parallax-bg {
          position: absolute;
          inset: -20%;
          background-size: cover;
          background-position: center;
          will-change: transform;
          transition: transform 0.1s linear;
        }

        .noise-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          background-size: 200px 200px;
          pointer-events: none;
        }

        .diagonal-line {
          position: absolute;
          top: -10%;
          right: 15%;
          width: 1px;
          height: 120%;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.06), transparent);
          transform: rotate(12deg);
        }

        .content-wrapper {
          position: relative;
          z-index: 2;
          padding: 0 8vw;
          max-width: 1200px;
        }

        .entity-number {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(120px, 20vw, 280px);
          font-weight: 900;
          line-height: 0.85;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.07);
          position: absolute;
          right: 6vw;
          top: 50%;
          transform: translateY(-50%);
          user-select: none;
          letter-spacing: -8px;
        }

        .entity-label {
          font-family: 'Barlow', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin-bottom: 20px;
        }

        .entity-name {
          font-family: 'BankGothic', 'BankGothic Md BT', 'Bank Gothic', sans-serif;
          font-size: clamp(52px, 9vw, 110px);
          font-weight: 700;
          font-style: italic;
          line-height: 0.9;
          text-transform: uppercase;
          letter-spacing: -8px;
          color: #fff;
          margin-bottom: 16px;
        }

        .entity-tagline {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(20px, 3vw, 32px);
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 28px;
        }

        .entity-description {
          font-family: 'Barlow', sans-serif;
          font-size: clamp(15px, 1.4vw, 18px);
          font-weight: 300;
          line-height: 1.7;
          color: rgba(255,255,255,0.6);
          max-width: 520px;
          margin-bottom: 40px;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          border: 1.5px solid currentColor;
          border-radius: 999px;
          transition: all 0.25s ease;
          cursor: pointer;
        }

        .cta-btn.live:hover {
          background: currentColor;
        }
        .cta-btn.live:hover span {
          color: #000;
        }

        .cta-btn.coming-soon {
          opacity: 0.35;
          cursor: default;
          pointer-events: none;
        }

        .accent-bar {
          width: 48px;
          height: 3px;
          margin-bottom: 32px;
        }

        .hero-section {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #000;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 80px 80px;
        }

        .hero-gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 60%, rgb(255 255 255 / 12%) 0%, transparent 60%);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }

        .logo-mark-svg {
          animation: fadeInUp 1s ease both;
        }

        .hero-wordmark {
          animation: fadeInUp 1s ease 0.2s both;
        }

        .hero-sub {
          animation: fadeInUp 1s ease 0.4s both;
        }

        .hero-entities {
          animation: fadeInUp 1s ease 0.6s both;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .entity-content {
          animation: none;
        }

        .entity-section.in-view .entity-content {
          animation: slideInLeft 0.7s ease both;
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .footer-section {
          background: #000;
          border-top: 1px solid rgba(255,255,255,0.07);
          padding: 60px 8vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
        }

        .footer-legal {
          font-family: 'Barlow', sans-serif;
          font-size: 12px;
          color: rgba(255,255,255,0.25);
          letter-spacing: 0.5px;
        }
        .footer-location { display: inline; }

        .nav-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 24px 6vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(to bottom, rgba(0,0,0,0.8), transparent);
          backdrop-filter: blur(0px);
        }

        .nav-links {
          display: flex;
          gap: 32px;
          list-style: none;
        }

        .nav-links a {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: rgba(255,255,255,0.9);
        }

        .dot-nav {
          position: fixed;
          right: 32px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 100;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
        }

        /* Hamburger button */
        .hamburger {
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          z-index: 150;
          position: relative;
        }
        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: rgba(255,255,255,0.8);
          transition: all 0.3s ease;
          transform-origin: center;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Slide-out menu */
        .slide-menu-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          z-index: 130;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .slide-menu-overlay.open { opacity: 1; pointer-events: all; }

        .slide-menu {
          position: fixed;
          top: 0; left: 0; bottom: 0;
          width: 280px;
          background: rgba(8,8,8,0.98);
          border-right: 1px solid rgba(255,255,255,0.07);
          z-index: 140;
          transform: translateX(-100%);
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          display: flex;
          flex-direction: column;
          padding: 88px 32px 40px;
        }
        .slide-menu.open { transform: translateX(0); }

        .slide-menu-links {
          list-style: none;
          display: flex;
          flex-direction: column;
        }
        .slide-menu-links a {
          font-family: 'BankGothic','Barlow Condensed',sans-serif;
          font-size: 26px;
          font-weight: 700;
          font-style: italic;
          letter-spacing: -1px;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          transition: color 0.2s;
          display: block;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .slide-menu-links a:hover { color: #fff; }
        .slide-menu-links li:last-child a { border-bottom: none; }

        /* Nav logo wrapper */
        .nav-logo-wrap { position: relative; width: 27px; height: 48px; }

        @media (max-width: 768px) {
          .entity-number { display: none; }
          .nav-links { display: none; }
          .dot-nav { right: 12px; }
          .content-wrapper { padding: 0 6vw; }
          .nav-logo img { width: 21px !important; height: auto !important; }
          .entity-section { height: auto; min-height: 100svh; padding: 120px 0 64px; }
          .entity-name { letter-spacing: -4px; }
          .footer-section {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 48px 6vw;
          }
          .footer-location { display: block; }
        }

        .waitlist-overlay {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(14px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 24px;
          animation: fadeIn 0.2s ease;
        }

        .waitlist-modal {
          max-width: 440px;
          width: 100%;
          position: relative;
          background: #111;
          padding: 44px 44px 40px;
          border-radius: 6px;
          animation: slideUp 0.25s ease;
        }

        .waitlist-input {
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
        .waitlist-input::placeholder { color: rgba(255,255,255,0.2); }
        .waitlist-input:focus { border-color: rgba(255,255,255,0.35); }

        .waitlist-submit {
          width: 100%;
          margin-top: 12px;
          padding: 14px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #fff;
          border: none;
          border-radius: 999px;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.2s;
        }
        .waitlist-submit:hover:not(:disabled) { opacity: 0.85; transform: translateY(-1px); }
        .waitlist-submit:disabled { opacity: 0.45; cursor: default; }

        .waitlist-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: none;
          border: none;
          color: rgba(255,255,255,0.3);
          cursor: pointer;
          padding: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s;
        }
        .waitlist-close:hover { color: rgba(255,255,255,0.8); }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* SLIDE MENU OVERLAY */}
      <div className={`slide-menu-overlay ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)} />

      {/* SLIDE MENU */}
      <div className={`slide-menu ${menuOpen ? "open" : ""}`}>
        <a href="#hero" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none", marginBottom: 36 }}>
          <Image src="/nav-logo-varsityone-dark-mode-only.png" alt="VarsityOne" width={160} height={48} style={{ objectFit: "contain" }} />
        </a>
        <ul className="slide-menu-links">
          {entities.map((e) => (
            <li key={e.id}>
              <a href={`#${e.id}`} onClick={() => setMenuOpen(false)}>{e.name}</a>
            </li>
          ))}
        </ul>
        <a href="/unsubscribe" style={{ marginTop: "auto", fontFamily: "'Barlow',sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.2)", textDecoration: "none" }}>
          Unsubscribe
        </a>
      </div>

      {/* NAV */}
      <nav className="nav-bar">
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span /><span /><span />
          </button>
          <a href="#hero" style={{ textDecoration: "none" }}>
            <Image src="/varsityone-logo-mark-WHITE.png" alt="VarsityOne" width={27} height={40} style={{ objectFit: "contain", display: "block" }} />
          </a>
        </div>
        <ul className="nav-links">
          {entities.map((e) => (
            <li key={e.id}>
              <a href={`#${e.id}`}>{e.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* DOT NAV */}
      <div className="dot-nav">
        {entities.map((e, i) => (
          <button
            key={e.id}
            className={`nav-dot ${activeIndex === i ? "active" : ""}`}
            onClick={() => document.getElementById(e.id)?.scrollIntoView({ behavior: "smooth" })}
            aria-label={`Go to ${e.name}`}
            style={{ background: activeIndex === i ? "#fff" : "transparent", borderColor: activeIndex === i ? "#fff" : "rgba(255,255,255,0.3)" }}
          />
        ))}
      </div>

      {/* HERO */}
      <section id="hero" className="hero-section">
        <div className="hero-grid" />
        <div className="hero-gradient" />
        <div className="noise-overlay" />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Full Logo Mark */}
          <div className="logo-mark-svg" style={{ marginBottom: 0 }}>
            <Image src="/nav-logo-varsityone-dark-mode-only.png" alt="VarsityOne" width={400} height={120} style={{ objectFit: "contain", maxWidth: "80vw", height: "auto" }} />
          </div>
          <div className="hero-sub" style={{ marginTop: 16 }}>
            <span style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "clamp(11px, 2.5vw, 17px)",
              fontWeight: 300,
              letterSpacing: "clamp(2px, 1vw, 8px)",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
            }}>The V1 Hub. Everything Football.</span>
          </div>
          <div className="hero-entities" style={{ marginTop: 25, display: "flex", gap: "clamp(12px, 3vw, 40px)", flexWrap: "wrap", justifyContent: "center", padding: "0 24px" }}>
            {entities.map((e) => (
              <span key={e.id} style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.25)",
              }}>{e.name}</span>
            ))}
          </div>
        </div>
        <div className="scroll-indicator">
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}>Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <path d="M8 0v20M1 14l7 8 7-8" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
          </svg>
        </div>
      </section>

      {/* ENTITY SECTIONS */}
      {entities.map((entity, i) => (
        <section
          key={entity.id}
          id={entity.id}
          className="entity-section"
          ref={(el) => { sectionRefs.current[i] = el; }}
          style={{ background: entity.bg }}
        >
          {/* Section-specific background image */}
          {(entity.id === "v1university" || entity.id === "v1clothing" || entity.id === "v1sportz") && (
            <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
              <Image
                src={entity.id === "v1university" ? "/varsityone-v1-university-training-bg-cover.png" : entity.id === "v1clothing" ? "/varsityone-v1-shop-bg-cover2.png" : "/v1-league2.png"}
                alt="" fill style={{ objectFit: "cover", objectPosition: "center", opacity: 0.15 }}
              />
            </div>
          )}

          {/* BG gradient blob */}
          <div style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background: entity.id === "v1portal"
              ? "radial-gradient(ellipse at 80% 50%, #ff00e418 0%, transparent 55%)"
              : `radial-gradient(ellipse at 80% 50%, ${entity.accent}18 0%, transparent 55%)`,
            pointerEvents: "none"
          }} />
          <div className="noise-overlay" />
          <div className="diagonal-line" />

          {/* Ghost number */}
          <span className="entity-number">0{i + 1}</span>

          <div className="content-wrapper entity-content">
            <div className="entity-label">VarsityOne Group — 0{i + 1} / 0{entities.length}</div>
            <div className="accent-bar" style={{ background: entity.accent }} />

            {/* Entity logo */}
            <div style={{ marginBottom: 24 }}>
              {"logo" in entity && entity.logo ? (
                <Image src={entity.logo} alt={entity.name} width={160} height={48} style={{ objectFit: "contain", objectPosition: "left" }} />
              ) : (
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <Image src="/v1-mark.png" alt={entity.name} width={24} height={36} style={{ objectFit: "contain" }} />
                  <span style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 22,
                    fontWeight: 800,
                    letterSpacing: 3,
                    color: "rgba(255,255,255,0.9)"
                  }}>{entity.name}</span>
                </div>
              )}
            </div> 

            <h2 className="entity-name">{entity.name}</h2>
            <p className="entity-tagline" style={{ color: "#fff" }}>{entity.tagline}</p>
            <p className="entity-description">{entity.description}</p>

            {entity.ctaLive ? (
              <a
                href={entity.ctaHref}
                className="cta-btn live"
                style={{
                  color: entity.id === "v1portal" ? "#fff" : entity.accent,
                  borderColor: entity.id === "v1portal" ? "transparent" : entity.accent,
                  background: entity.id === "v1portal" ? "linear-gradient(135deg, red, #a0f)" : undefined,
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ color: entity.id === "v1portal" ? "#fff" : entity.accent }}>{entity.cta}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>
            ) : (
              <button
                className="cta-btn"
                onClick={() => openWaitlist(entity)}
                style={{ color: entity.accent, borderColor: entity.accent, background: "none", cursor: "pointer" }}
              >
                <span style={{ color: entity.accent }}>Join Waitlist</span>
              </button>
            )}
          </div>
        </section>
      ))}

      {/* WAITLIST MODAL */}
      {waitlistEntity && (
        <div
          className="waitlist-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) closeWaitlist(); }}
        >
          <div className="waitlist-modal" style={{ borderTop: `2px solid ${waitlistEntity.accent}` }}>
            <button className="waitlist-close" onClick={closeWaitlist} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>

            {waitlistStatus === "success" ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke={waitlistEntity.accent} strokeWidth="1.5" style={{ marginBottom: 20 }}>
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 12l3 3 5-5"/>
                </svg>
                <h2 style={{ fontFamily: "'BankGothic','Barlow Condensed',sans-serif", fontSize: 40, fontWeight: 700, fontStyle: "italic", color: "#fff", marginBottom: 12, letterSpacing: -1, lineHeight: 1 }}>
                  You&apos;re in.
                </h2>
                <p style={{ fontFamily: "'Barlow',sans-serif", fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                  We&apos;ll reach out when {waitlistEntity.name} is ready to launch.
                </p>
              </div>
            ) : (
              <>
                <p style={{ fontFamily: "'Barlow',sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: waitlistEntity.accent, marginBottom: 16 }}>
                  {waitlistEntity.name}
                </p>
                <h2 style={{ fontFamily: "'BankGothic','Barlow Condensed',sans-serif", fontSize: 38, fontWeight: 700, fontStyle: "italic", color: "#fff", marginBottom: 10, letterSpacing: -1, lineHeight: 1 }}>
                  Get Early Access
                </h2>
                <p style={{ fontFamily: "'Barlow',sans-serif", fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.45)", marginBottom: 32, lineHeight: 1.6 }}>
                  Be first to know when {waitlistEntity.name} launches.
                </p>
                <form onSubmit={handleWaitlistSubmit}>
                  <input
                    className="waitlist-input"
                    type="email"
                    placeholder="your@email.com"
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    required
                    autoFocus
                  />
                  {waitlistStatus === "error" && (
                    <p style={{ fontFamily: "'Barlow',sans-serif", fontSize: 13, color: "#ff5555", marginTop: 8 }}>
                      Something went wrong. Please try again.
                    </p>
                  )}
                  <button
                    className="waitlist-submit"
                    type="submit"
                    disabled={waitlistStatus === "loading"}
                    style={{ background: waitlistEntity.accent }}
                  >
                    {waitlistStatus === "loading" ? "Joining..." : "Join Waitlist"}
                  </button>
                </form>
                <p style={{ fontFamily: "'Barlow',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.2)", marginTop: 16, textAlign: "center" }}>
                  No spam.{" "}
                  <a href={`/unsubscribe?email=${encodeURIComponent(waitlistEmail)}`} style={{ color: "rgba(255,255,255,0.3)", textDecoration: "underline" }}>
                    Unsubscribe anytime.
                  </a>
                </p>
              </>
            )}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="footer-section">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Image src="/v1-mark.png" alt="VarsityOne" width={20} height={30} style={{ objectFit: "contain" }} />
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: 0, color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>VarsityOne Group LLC</span>
        </div>
        <p className="footer-legal">© {new Date().getFullYear()} VarsityOne Group LLC. All rights reserved. <span className="footer-location">San Diego, CA</span></p>
        <p className="footer-legal">www.vars1tyone.com</p>
      </footer>
    </main>
  );
}