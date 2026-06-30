import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wes Starke — VarsityOne",
  description: "Founder of VarsityOne Group. Football. Business. Culture.",
  openGraph: {
    title: "Wes Starke | VarsityOne",
    description: "Football. Business. Culture.",
    url: "https://vars1tyone.com/connect",
    siteName: "VarsityOne",
    type: "profile",
    images: [{ url: "/wes-starke-ceo.png" }],
  },
};

export default function ConnectLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
