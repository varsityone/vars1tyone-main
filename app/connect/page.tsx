import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Wes Starke — VarsityOne",
  description: "Founder of VarsityOne Group. Football. Business. Culture.",
  openGraph: {
    title: "Wes Starke | VarsityOne",
    description: "Football. Business. Culture.",
    url: "https://vars1tyone.com/connect",
    siteName: "VarsityOne",
    type: "profile",
    images: [{ url: "/coach-wes-starke-profile2.png" }],
  },
};

function IGIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TTIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.69a4.85 4.85 0 01-1.01 0z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.258 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function YTIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

type SocialItem = { platform: "ig" | "tt" | "x" | "yt"; url: string; label: string };

function SocialIcon({ platform }: { platform: SocialItem["platform"] }) {
  if (platform === "ig") return <IGIcon />;
  if (platform === "tt") return <TTIcon />;
  if (platform === "x")  return <XIcon />;
  return <YTIcon />;
}

const PERSONAL: SocialItem[] = [
  { platform: "ig", url: "https://instagram.com/0nlywes",   label: "Instagram @0nlywes" },
  { platform: "tt", url: "https://tiktok.com/@0nlywes",     label: "TikTok @0nlywes" },
  { platform: "x",  url: "https://x.com/0nlywes",           label: "X @0nlywes" },
  { platform: "yt", url: "https://youtube.com/@0nlywes",    label: "YouTube @0nlywes" },
];

const V1_BRAND: SocialItem[] = [
  { platform: "ig", url: "https://instagram.com/varsityone", label: "Instagram @varsityone" },
  { platform: "tt", url: "https://tiktok.com/@varsityone",   label: "TikTok @varsityone" },
  { platform: "x",  url: "https://x.com/varsityone",         label: "X @varsityone" },
  { platform: "yt", url: "https://youtube.com/@varsityone",  label: "YouTube @varsityone" },
];

const V1_PORTAL: SocialItem[] = [
  { platform: "ig", url: "https://instagram.com/v1portal",  label: "Instagram @v1portal" },
  { platform: "tt", url: "https://tiktok.com/@v1portal",    label: "TikTok @v1portal" },
  { platform: "x",  url: "https://x.com/v1portal",          label: "X @v1portal" },
  { platform: "yt", url: "https://youtube.com/@v1portal",   label: "YouTube @v1portal" },
];

const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

export default function ConnectPage() {
  return (
    <main style={{ background: "#000", minHeight: "100vh", fontFamily: "'Barlow Condensed', sans-serif" }}>
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

        .c-wrap { max-width: 480px; margin: 0 auto; }

        /* ── FIXED OVERLAYS ── */
        .c-grain-fixed {
          position: fixed; inset: 0; pointer-events: none; z-index: 9999;
          opacity: 0.038;
          background-image: ${GRAIN};
          background-size: 200px 200px;
        }
        .c-vignette {
          position: fixed; inset: 0; pointer-events: none; z-index: 9998;
          background: radial-gradient(ellipse at 50% 40%, transparent 45%, rgba(0,0,0,0.72) 100%);
        }

        /* ── HERO ── */
        .c-hero {
          position: relative; width: 100%; height: 65vh;
          min-height: 380px; overflow: hidden;
        }
        .c-hero-grade {
          position: absolute; inset: 0; z-index: 1;
          background:
            linear-gradient(to bottom,
              rgba(0,0,0,0.3)  0%,
              rgba(0,0,0,0)    22%,
              rgba(0,0,0,0.55) 60%,
              #000             100%),
            linear-gradient(to right, rgba(0,5,25,0.45) 0%, transparent 55%);
        }
        .c-hero-grain {
          position: absolute; inset: 0; z-index: 2; pointer-events: none;
          opacity: 0.055;
          background-image: ${GRAIN};
          background-size: 200px 200px;
        }
        .c-hero-mark { position: absolute; top: 22px; left: 22px; z-index: 3; opacity: 0.5; }
        .c-hero-bottom {
          position: absolute; bottom: 0; left: 0; right: 0;
          z-index: 3; padding: 0 22px 28px;
        }
        .c-hero-eyebrow {
          font-family: 'Barlow', sans-serif; font-size: 10px; font-weight: 500;
          letter-spacing: 4px; text-transform: uppercase;
          color: rgba(255,255,255,0.35); margin-bottom: 5px;
        }
        .c-hero-name {
          font-family: 'BankGothic', 'Barlow Condensed', sans-serif;
          font-size: clamp(46px, 13vw, 68px); font-weight: 700; font-style: italic;
          letter-spacing: -2px; line-height: 0.88; color: #fff;
          text-transform: uppercase; margin-bottom: 20px;
        }

        /* ── SOCIAL BUTTONS ── */
        .c-social-row { display: flex; gap: 9px; align-items: center; }
        .c-social-btn {
          width: 40px; height: 40px; border-radius: 50%;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.7); text-decoration: none;
          transition: background 0.2s, color 0.2s, transform 0.2s;
          flex-shrink: 0; border: none;
        }
        .c-social-btn:hover {
          background: rgba(255,255,255,0.2); color: #fff; transform: translateY(-2px);
        }
        .c-handle-tag {
          font-family: 'Barlow', sans-serif; font-size: 10px;
          letter-spacing: 2.5px; text-transform: uppercase;
          color: rgba(255,255,255,0.2); margin-left: 6px;
        }

        /* ── BODY ── */
        .c-body { padding: 0 14px 56px; }
        .c-section-label {
          font-family: 'Barlow', sans-serif; font-size: 9px; font-weight: 500;
          letter-spacing: 4px; text-transform: uppercase;
          color: rgba(255,255,255,0.2); margin-bottom: 10px;
        }
        .c-spacer { height: 24px; }

        /* ── BRAND CARD ── */
        .c-card {
          position: relative; overflow: hidden; border-radius: 16px;
          margin-bottom: 10px; min-height: 230px;
        }
        .c-card-photo { position: absolute; inset: 0; }
        .c-card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            135deg,
            rgba(0,0,0,0.78) 0%,
            rgba(0,0,0,0.55) 50%,
            rgba(0,0,0,0.72) 100%
          );
        }
        .c-card-grain {
          position: absolute; inset: 0; pointer-events: none;
          opacity: 0.06;
          background-image: ${GRAIN};
          background-size: 200px 200px;
        }
        .c-card-inner {
          position: relative; z-index: 1; padding: 20px 18px 18px;
        }
        .c-card-logo { margin-bottom: 12px; }
        .c-card-handle {
          font-family: 'Barlow', sans-serif; font-size: 10px;
          letter-spacing: 3px; text-transform: uppercase;
          color: rgba(255,255,255,0.28); margin-bottom: 12px;
        }
        .c-card-footer {
          margin-top: 16px; padding-top: 14px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        /* ── CTA BUTTON ── */
        .c-cta {
          display: flex; align-items: center; justify-content: space-between;
          padding: 13px 18px; border-radius: 9px; border: none;
          color: rgba(255,255,255,0.8); text-decoration: none;
          font-family: 'Barlow Condensed', sans-serif; font-size: 13px;
          font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(6px);
          transition: background 0.2s, color 0.2s;
        }
        .c-cta:hover { background: rgba(255,255,255,0.18); color: #fff; }
        .c-cta.portal {
          background: linear-gradient(135deg, rgba(200,0,220,0.22), rgba(120,0,255,0.22));
        }
        .c-cta.portal:hover {
          background: linear-gradient(135deg, rgba(200,0,220,0.35), rgba(120,0,255,0.35));
          color: #fff;
        }

        /* ── COMING SOON GRID ── */
        .c-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 9px; }
        .c-mini {
          position: relative; overflow: hidden; border-radius: 12px;
          min-height: 160px; display: block; text-decoration: none;
          transition: transform 0.2s;
        }
        .c-mini:hover { transform: scale(1.015); }
        .c-mini-photo { position: absolute; inset: 0; }
        .c-mini-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.35) 0%,
            rgba(0,0,0,0.72) 100%
          );
        }
        .c-mini-grain {
          position: absolute; inset: 0; pointer-events: none;
          opacity: 0.06;
          background-image: ${GRAIN};
          background-size: 200px 200px;
        }
        .c-mini-inner {
          position: relative; z-index: 1;
          padding: 14px; height: 100%; min-height: 160px;
          display: flex; flex-direction: column; justify-content: flex-end;
        }
        .c-mini-name {
          font-family: 'Barlow Condensed', sans-serif; font-size: 15px;
          font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase;
          color: rgba(255,255,255,0.9); margin-bottom: 3px;
        }
        .c-mini-sub {
          font-family: 'Barlow', sans-serif; font-size: 9px;
          letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,0.28);
        }

        /* ── FOOTER ── */
        .c-footer {
          text-align: center; padding: 20px 20px 52px;
          border-top: 1px solid rgba(255,255,255,0.12);
        }
        .c-footer-text {
          font-family: 'Barlow', sans-serif; font-size: 10px;
          letter-spacing: 1.5px; color: rgba(255,255,255,0.5); margin-top: 10px;
        }

        @media (max-width: 480px) {
          .c-hero { height: 58vh; min-height: 340px; }
        }
      `}</style>

      {/* Cinematic overlays */}
      <div className="c-vignette" aria-hidden="true" />
      <div className="c-grain-fixed" aria-hidden="true" />

      <div className="c-wrap">

        {/* ── HERO ── */}
        <div className="c-hero">
          <Image
            src="/wes-starke-ceo.png"
            alt="Wes Starke"
            fill priority
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
          <div className="c-hero-grade" />
          <div className="c-hero-grain" aria-hidden="true" />
          <div className="c-hero-mark">
            <Image src="/v1-mark.png" alt="VarsityOne" width={16} height={26} style={{ objectFit: "contain" }} />
          </div>
          <div className="c-hero-bottom">
            <p className="c-hero-eyebrow">Founder · VarsityOne Group</p>
            <h1 className="c-hero-name">Wes Starke</h1>
            <div className="c-social-row">
              {PERSONAL.map(({ platform, url, label }) => (
                <a key={platform} href={url} target="_blank" rel="noopener noreferrer" aria-label={label} className="c-social-btn">
                  <SocialIcon platform={platform} />
                </a>
              ))}
              <span className="c-handle-tag">@0nlywes</span>
            </div>
          </div>
        </div>

        {/* ── BODY ── */}
        <div className="c-body">

          {/* VarsityOne brand */}
          <p className="c-section-label" style={{ marginTop: 24 }}>The Brand</p>
          <div className="c-card">
            <div className="c-card-photo">
              <Image src="/coach-wes-starke-profile2.png" alt="" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
            </div>
            <div className="c-card-overlay" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.72) 100%)" }} />
            <div className="c-card-grain" aria-hidden="true" />
            <div className="c-card-inner" style={{ paddingTop: 28 }}>
              <div className="c-card-logo">
                <Image src="/nav-logo-varsityone-dark-mode-only.png" alt="VarsityOne" width={148} height={44} style={{ objectFit: "contain", objectPosition: "left" }} />
              </div>
              <p className="c-card-handle">@varsityone</p>
              <div className="c-social-row">
                {V1_BRAND.map(({ platform, url, label }) => (
                  <a key={platform} href={url} target="_blank" rel="noopener noreferrer" aria-label={label} className="c-social-btn">
                    <SocialIcon platform={platform} />
                  </a>
                ))}
              </div>
              <div className="c-card-footer">
                <a href="https://vars1tyone.com" target="_blank" rel="noopener noreferrer" className="c-cta">
                  <span>vars1tyone.com</span>
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>

          {/* V1Portal */}
          <div className="c-spacer" />
          <p className="c-section-label">The App</p>
          <div className="c-card">
            <div className="c-card-photo">
              <Image src="/v1portal-iphone-hand.png" alt="" fill style={{ objectFit: "cover", objectPosition: "center" }} />
            </div>
            <div className="c-card-overlay" />
            <div className="c-card-grain" aria-hidden="true" />
            <div className="c-card-inner">
              <div className="c-card-logo">
                <Image src="/nav-logo-v1portal-dark-mode-only.png" alt="V1Portal" width={136} height={42} style={{ objectFit: "contain", objectPosition: "left" }} />
              </div>
              <p className="c-card-handle">@v1portal</p>
              <div className="c-social-row">
                {V1_PORTAL.map(({ platform, url, label }) => (
                  <a key={platform} href={url} target="_blank" rel="noopener noreferrer" aria-label={label} className="c-social-btn">
                    <SocialIcon platform={platform} />
                  </a>
                ))}
              </div>
              <div className="c-card-footer">
                <a href="https://v1portal.com" target="_blank" rel="noopener noreferrer" className="c-cta portal">
                  <span>Launch V1Portal</span>
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Coming soon */}
          <div className="c-spacer" />
          <p className="c-section-label">Coming Soon</p>
          <div className="c-grid">

            <a href="https://vars1tyone.com#v1sportz" target="_blank" rel="noopener noreferrer" className="c-mini">
              <div className="c-mini-photo">
                <Image src="/v1-league2.png" alt="" fill style={{ objectFit: "cover", objectPosition: "center" }} />
              </div>
              <div className="c-mini-overlay" />
              <div className="c-mini-grain" aria-hidden="true" />
              <div className="c-mini-inner">
                <p className="c-mini-name">V1Sportz</p>
                <p className="c-mini-sub">Leagues · 2027</p>
              </div>
            </a>

            <a href="https://vars1tyone.com#v1studios" target="_blank" rel="noopener noreferrer" className="c-mini">
              <div className="c-mini-photo">
                <Image src="/videography.png" alt="" fill style={{ objectFit: "cover", objectPosition: "center" }} />
              </div>
              <div className="c-mini-overlay" />
              <div className="c-mini-grain" aria-hidden="true" />
              <div className="c-mini-inner">
                <p className="c-mini-name">V1Studios</p>
                <p className="c-mini-sub">Film · Coming Soon</p>
              </div>
            </a>

            <a href="https://vars1tyone.com#v1clothing" target="_blank" rel="noopener noreferrer" className="c-mini">
              <div className="c-mini-photo">
                <Image src="/varsityone-v1-shop-bg-cover2.png" alt="" fill style={{ objectFit: "cover", objectPosition: "center" }} />
              </div>
              <div className="c-mini-overlay" />
              <div className="c-mini-grain" aria-hidden="true" />
              <div className="c-mini-inner">
                <p className="c-mini-name">V1Gear</p>
                <p className="c-mini-sub">Apparel · Coming Soon</p>
              </div>
            </a>

            <a href="https://vars1tyone.com#v1university" target="_blank" rel="noopener noreferrer" className="c-mini">
              <div className="c-mini-photo">
                <Image src="/varsityone-v1-university-training-bg-cover.png" alt="" fill style={{ objectFit: "cover", objectPosition: "center" }} />
              </div>
              <div className="c-mini-overlay" />
              <div className="c-mini-grain" aria-hidden="true" />
              <div className="c-mini-inner">
                <p className="c-mini-name">V1University</p>
                <p className="c-mini-sub">Training · Coming Soon</p>
              </div>
            </a>

          </div>
        </div>

        {/* ── FOOTER ── */}
        <div className="c-footer">
          <Image src="/v1-mark.png" alt="VarsityOne" width={14} height={22} style={{ objectFit: "contain", opacity: 0.55 }} />
          <p className="c-footer-text">© {new Date().getFullYear()} VarsityOne Group LLC — San Diego, CA</p>
        </div>

      </div>
    </main>
  );
}
