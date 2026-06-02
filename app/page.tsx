"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const entities = [
  {
    id: "v1portal",
    name: "V1PORTAL",
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
    name: "V1CLOTHING",
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

        @media (max-width: 768px) {
          .entity-number { display: none; }
          .nav-links { display: none; }
          .dot-nav { right: 16px; }
          .content-wrapper { padding: 0 6vw; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav-bar">
        <a href="#hero" style={{ textDecoration: "none" }}>
          <Image src="/varsityone-logo-mark-WHITE.png" alt="VarsityOne" width={160} height={48} style={{ objectFit: "contain" }} />
        </a>
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
            <Image src="/nav-logo-varsityone-dark-mode-only.png" alt="VarsityOne" width={400} height={120} style={{ objectFit: "contain" }} />
          </div>
          <div className="hero-sub" style={{ marginTop: 16 }}>
            <span style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "clamp(13px, 1.5vw, 17px)",
              fontWeight: 300,
              letterSpacing: "clamp(3px, 1vw, 8px)",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
            }}>A Multi-Vertical Sports Company</span>
          </div>
          <div className="hero-entities" style={{ marginTop: 25, display: "flex", gap: "clamp(16px, 3vw, 40px)", flexWrap: "wrap", justifyContent: "center" }}>
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
          {/* BG gradient blob */}
          <div style={{
            position: "absolute",
            inset: 0,
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

            {/* Logo placeholder — swap per entity later */}
            <div style={{ marginBottom: 24, display: "flex", alignItems: "center", gap: 12 }}>
              <Image src="/v1-mark.png" alt={entity.name} width={24} height={36} style={{ objectFit: "contain" }} />
              <span style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 22,
                fontWeight: 800,
                letterSpacing: 3,
                color: "rgba(255,255,255,0.9)"
              }}>{entity.name}</span>
            </div> 

            <h2 className="entity-name">{entity.name}</h2>
            <p className="entity-tagline" style={{ color: "#fff" }}>{entity.tagline}</p>
            <p className="entity-description">{entity.description}</p>

            <a
              href={entity.ctaHref}
              className={`cta-btn ${entity.ctaLive ? "live" : "coming-soon"}`}
              style={{
                color: entity.id === "v1portal" ? "#fff" : entity.accent,
                borderColor: entity.id === "v1portal" ? "transparent" : entity.accent,
                background: entity.id === "v1portal" ? "linear-gradient(135deg, red, #a0f)" : undefined,
              }}
              target={entity.ctaLive ? "_blank" : undefined}
              rel={entity.ctaLive ? "noopener noreferrer" : undefined}
            >
              <span style={{ color: entity.id === "v1portal" ? "#fff" : entity.accent }}>{entity.cta}</span>
              {entity.ctaLive && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              )}
            </a>
          </div>
        </section>
      ))}

      {/* FOOTER */}
      <footer className="footer-section">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Image src="/v1-mark.png" alt="VarsityOne" width={20} height={30} style={{ objectFit: "contain" }} />
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: 3, color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>VarsityOne Group LLC</span>
        </div>
        <p className="footer-legal">© {new Date().getFullYear()} VarsityOne Group LLC. All rights reserved. Murrieta, CA.</p>
        <p className="footer-legal">vars1tyone.com</p>
      </footer>
    </main>
  );
}