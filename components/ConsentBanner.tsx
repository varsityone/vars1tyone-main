'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import Link from 'next/link';

const CONSENT_KEY = 'varsityone_consent';

interface Consent {
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

function getStoredConsent(): Consent | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export default function ConsentBanner() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    setConsent(stored);
    if (!stored) setShowBanner(true);
    setMounted(true);
  }, []);

  const saveConsent = (analytics: boolean, marketing: boolean) => {
    const c: Consent = { analytics, marketing, timestamp: Date.now() };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(c));
    setConsent(c);
    setShowBanner(false);
  };

  const acceptAll = () => saveConsent(true, true);

  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  if (!mounted) return null;

  return (
    <>
      {consent?.analytics && gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}</Script>
        </>
      )}

      {consent?.analytics && pixelId && (
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
          document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','${pixelId}');
          fbq('track','PageView');
        `}</Script>
      )}

      {showBanner && (
        <div style={{ position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 9999, width: 'calc(100% - 32px)', maxWidth: 560, pointerEvents: 'none' }}>
          <div style={{
            background: 'rgba(15,15,15,0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: 28,
            padding: '20px 24px',
            boxShadow: '0 4px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)',
            textAlign: 'center',
            pointerEvents: 'all',
          }}>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: 14, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, letterSpacing: '0.01em' }}>
              We use analytics and advertising cookies to understand traffic and grow VarsityOne. Read our{' '}
              <Link href="/privacy" style={{ color: '#ffd000', textDecoration: 'none', fontWeight: 700 }}>Privacy Policy</Link>.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
              <button
                onClick={acceptAll}
                style={{ padding: '8px 18px', borderRadius: 100, background: 'linear-gradient(135deg, #e63000, #ffd000)', color: '#fff', border: 'none', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.04em' }}
              >
                Accept All
              </button>
              <button
                onClick={() => saveConsent(false, false)}
                style={{ padding: '8px 18px', borderRadius: 100, background: 'transparent', color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.2)', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.04em' }}
              >
                Reject Non-Essential
              </button>
              <button
                onClick={() => saveConsent(false, false)}
                style={{ padding: '8px 18px', borderRadius: 100, background: 'transparent', color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.1)', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.04em' }}
              >
                Manage Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
