import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-heading",
  weight: "400",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://punchai.app"),
  title: {
    default: "Punch AI - AI-Powered Boxing Coach | Train Smarter, Hit Harder",
    template: "%s | Punch AI",
  },
  description:
    "Train smarter with Punch AI, your AI-powered boxing coach. Real-time pose detection, defensive drills, offensive combos, personalized training plans, and AI video feedback — all on your iPhone.",
  keywords: [
    "AI boxing coach",
    "boxing training app",
    "AI boxing training",
    "shadow boxing app",
    "boxing drills app",
    "AI pad work",
    "boxing workout app",
    "learn boxing at home",
    "boxing form analysis",
    "AI fitness coach",
    "combat sports training app",
    "punch tracking app",
    "boxing defense drills",
    "personalized boxing training",
    "boxing video analysis",
    "boxing app for iPhone",
    "Punch AI",
  ],
  authors: [{ name: "Punch AI" }],
  creator: "Punch AI",
  publisher: "Punch AI",
  applicationName: "Punch AI",
  alternates: {
    canonical: "https://punchai.app",
  },
  openGraph: {
    title: "Punch AI - AI-Powered Boxing Coach",
    description:
      "Train smarter with AI-powered boxing coaching. Real-time pose detection, defensive drills, offensive combos, personalized training plans, and AI video feedback.",
    url: "https://punchai.app",
    siteName: "Punch AI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Punch AI - AI-Powered Boxing Coach",
    description:
      "Train smarter with AI-powered boxing coaching. Drills, combos, video feedback, and personalized training plans.",
    creator: "@punchai_app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "apple-itunes-app": "app-id=0000000000",
    "al:ios:app_store_id": "0000000000",
    "al:ios:app_name": "Punch AI",
    "al:ios:url": "punchai://",
    "al:web:url": "https://punchai.app",
  },
  category: "fitness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${bebasNeue.variable} dark antialiased`}
    >
      <body className="min-h-screen bg-onyx text-white overflow-x-hidden">
        {/* Grain overlay */}
        <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
