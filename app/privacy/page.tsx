import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Privacy Policy — VarsityOne Group' };

const sections = [
  {
    title: '1. Information We Collect',
    body: `We collect information you voluntarily submit on this website, including your name and email address when you join a waitlist or contact us.

We also collect usage data automatically, including your IP address, browser type, device identifiers, pages visited, time spent on pages, and referring URLs.`,
  },
  {
    title: '2. How We Use Your Information',
    body: `We use the information we collect to operate and improve vars1tyone.com, to send you updates about VarsityOne Group products and launches when you have opted in, and to communicate with you about your inquiries.

We may use aggregated, de-identified data for internal analytics and product development.`,
  },
  {
    title: '3. Information Shared With Third Parties',
    body: `We share data with third-party service providers to operate this website. These providers access only the data necessary to perform their services and are bound by data processing agreements.

Current third-party service providers include:

• Supabase — backend database. Stores email addresses and entity preferences submitted via waitlist forms.
• Vercel — cloud hosting provider. Serves the VarsityOne website and processes page requests.
• Google Analytics — website traffic analytics. Collects anonymized data about how visitors navigate our site (pages viewed, session duration, device type). This data may be used by Google for its own purposes per Google's privacy policy.
• Meta Pixel — conversion tracking and advertising measurement. When enabled, Meta (Facebook) may place cookies on your browser to track actions you take on our site and to show you relevant ads on Meta platforms. This data is processed by Meta under Meta's data policy.

We do not sell your personal data for monetary compensation. However, under California law (CCPA), sharing personal information with advertising-related third parties such as Google Analytics and Meta Pixel may be considered "sharing" or "selling" of personal data. California residents have the right to opt out — see Section 7 below.

We may also disclose information if required by law, or to protect the rights, property, or safety of VarsityOne Group, our users, or the public.`,
  },
  {
    title: '4. Cookies and Tracking Technologies',
    body: `We use cookies and similar technologies to operate the website and, where you have consented, to analyze traffic and support advertising.

Essential cookies are required for the site to function and are always active. Analytics cookies (Google Analytics) and advertising cookies (Meta Pixel) are only loaded after you provide consent via our cookie banner.

You can update your cookie preferences at any time by clearing your browser's local storage and revisiting the site, or by contacting us at thevarsityone@gmail.com.`,
  },
  {
    title: '5. Your Consent and Choices',
    body: `When you first visit vars1tyone.com, we display a cookie consent banner that lets you accept all cookies or reject non-essential cookies. We will not load Google Analytics or Meta Pixel until you provide your explicit consent.

You can unsubscribe from our marketing emails at any time by clicking the unsubscribe link in any email we send or by contacting us directly.`,
  },
  {
    title: '6. Data Security',
    body: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We use industry-standard encryption for data transmission and storage. However, no method of internet transmission is 100% secure.`,
  },
  {
    title: '7. California Privacy Rights (CCPA)',
    body: `If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA):

• Right to Know — You may request details about the personal information we collect, use, disclose, and sell.
• Right to Delete — You may request deletion of your personal information, subject to certain exceptions.
• Right to Opt Out — You may opt out of the "sale" or "sharing" of your personal information to third parties, including for advertising purposes. To opt out of analytics and advertising data sharing, reject non-essential cookies in our consent banner or contact us at thevarsityone@gmail.com.
• Right to Non-Discrimination — We will not discriminate against you for exercising your privacy rights.

To submit a request, contact us at thevarsityone@gmail.com with the subject line "California Privacy Request." We will respond within 45 days.`,
  },
  {
    title: '8. Data Retention',
    body: `We retain waitlist email addresses for as long as needed to notify you of product launches or until you unsubscribe. You can request deletion of your data at any time by contacting thevarsityone@gmail.com.`,
  },
  {
    title: '9. Changes to This Policy',
    body: `We may update this Privacy Policy from time to time. Material changes will be noted on this page with an updated date. Continued use of vars1tyone.com after changes take effect constitutes acceptance of the updated policy.`,
  },
  {
    title: '10. Contact',
    body: `Questions about this Privacy Policy? Contact us at:\n\nVarsityOne Group LLC\nMurrieta, CA 92562\nthevarsityone@gmail.com`,
  },
];

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', fontFamily: "'Barlow', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Barlow:wght@400;500;600&display=swap');`}</style>

      <header style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/nav-logo-varsityone-dark-mode-only.png" alt="VarsityOne" style={{ height: 28, width: 'auto', objectFit: 'contain' }} />
        </Link>
        <Link href="/" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>← Back to Home</Link>
      </header>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px 80px' }}>
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(28px,4vw,40px)', fontWeight: 900, letterSpacing: '-0.01em', marginBottom: 8 }}>Privacy Policy</h1>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 40 }}>Last updated: June 23, 2026</p>

        <div style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, marginBottom: 40 }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>
            VarsityOne Group uses Google Analytics and Meta Pixel for traffic measurement and ad conversion tracking. These tools are only activated after you provide explicit consent via our cookie banner. You can manage your preferences at any time.
          </p>
        </div>

        {sections.map((section, i) => (
          <div key={i} style={{ marginBottom: 36 }}>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 10, letterSpacing: '0.01em' }}>{section.title}</h2>
            {section.body.split('\n\n').map((p, j) => (
              <p key={j} style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 12, whiteSpace: 'pre-line' }}>{p}</p>
            ))}
          </div>
        ))}
      </main>
    </div>
  );
}
