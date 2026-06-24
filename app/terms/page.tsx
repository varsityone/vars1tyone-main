import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Terms of Service — VarsityOne Group' };

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: `By accessing or using vars1tyone.com, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website. vars1tyone.com is operated by VarsityOne Group LLC.`,
  },
  {
    title: '2. Description of Website',
    body: `vars1tyone.com is the corporate website for VarsityOne Group LLC, a multi-vertical sports company. The site provides information about VarsityOne Group and its subsidiary brands and products, including V1Portal, V1Sportz, V1Studios, V1Gear, and V1University. It also allows visitors to join product waitlists.`,
  },
  {
    title: '3. Waitlists and Communications',
    body: `When you submit your email address to join a product waitlist on vars1tyone.com, you agree to receive updates about that product's launch and related VarsityOne Group announcements.

You may unsubscribe from these communications at any time by clicking the unsubscribe link in any email or by contacting thevarsityone@gmail.com.`,
  },
  {
    title: '4. Intellectual Property',
    body: `All content on vars1tyone.com — including but not limited to the VarsityOne Group name and mark, V1Portal, V1Sportz, V1Studios, V1Gear, V1University, all logos, brand marks, design elements, copy, and code — is the proprietary intellectual property of VarsityOne Group LLC.

You may not reproduce, copy, distribute, modify, or create derivative works from any content on this website without prior written permission from VarsityOne Group LLC.`,
  },
  {
    title: '5. Prohibited Uses',
    body: `You may not use vars1tyone.com to:

• Attempt to access, probe, or scan the website's systems or infrastructure without authorization
• Scrape, crawl, or harvest content or data from the website
• Impersonate VarsityOne Group or any of its brands or personnel
• Use the website for any unlawful purpose`,
  },
  {
    title: '6. Disclaimer of Warranties',
    body: `vars1tyone.com and all content on it are provided "as is" without warranties of any kind, express or implied. VarsityOne Group LLC makes no representations about the accuracy, reliability, completeness, or timeliness of any content on the website.

Product descriptions, launch timelines, and features for upcoming products are subject to change without notice.`,
  },
  {
    title: '7. Limitation of Liability',
    body: `To the fullest extent permitted by law, VarsityOne Group LLC is not liable for any indirect, incidental, special, or consequential damages arising from your use of or inability to use vars1tyone.com, including reliance on any information on the website.`,
  },
  {
    title: '8. Third-Party Links',
    body: `vars1tyone.com may contain links to third-party websites (such as V1Portal, social media profiles, or partner sites). These links are provided for convenience only. VarsityOne Group LLC does not endorse and is not responsible for the content, privacy practices, or terms of any third-party website.`,
  },
  {
    title: '9. Governing Law',
    body: `These Terms are governed by the laws of the State of California, without regard to conflict of law principles. Any disputes arising from these Terms or your use of vars1tyone.com will be resolved in the courts of Riverside County, California, and you consent to personal jurisdiction in those courts.`,
  },
  {
    title: '10. Changes to These Terms',
    body: `We may update these Terms from time to time. Material changes will be noted on this page with an updated date. Continued use of vars1tyone.com after changes take effect constitutes acceptance of the updated Terms.`,
  },
  {
    title: '11. Contact',
    body: `Questions about these Terms? Contact us at:\n\nVarsityOne Group LLC\nMurrieta, CA 92562\nthevarsityone@gmail.com`,
  },
];

export default function TermsPage() {
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
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(28px,4vw,40px)', fontWeight: 900, letterSpacing: '-0.01em', marginBottom: 8 }}>Terms of Service</h1>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 40 }}>Last updated: June 23, 2026</p>

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
