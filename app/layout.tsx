import type { Metadata } from "next";
import ConsentBanner from "@/components/ConsentBanner";
import "./globals.css";

export const metadata: Metadata = {
  title: "VarsityOne Group — A Multi-Vertical Sports Company",
  description: "VarsityOne Group is a sports holding company building tools, leagues, media, apparel, and education for athletes and the culture around the game.",
  openGraph: {
    title: "VarsityOne Group",
    description: "Building the future of athlete development.",
    url: "https://vars1tyone.com",
    siteName: "VarsityOne",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#000", color: "#fff" }}>
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}