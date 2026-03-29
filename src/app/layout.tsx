import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
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
  title: "Punch AI - Your AI Boxing Coach",
  description:
    "Train smarter with AI-powered boxing coaching. Defensive drills, offensive combos, personalized training plans, and video feedback — all in your pocket.",
  keywords: [
    "boxing",
    "AI coach",
    "boxing training",
    "boxing drills",
    "fitness app",
    "punch AI",
  ],
  openGraph: {
    title: "Punch AI - Your AI Boxing Coach",
    description:
      "Train smarter with AI-powered boxing coaching. Defensive drills, offensive combos, personalized training plans, and video feedback.",
    type: "website",
    siteName: "Punch AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Punch AI - Your AI Boxing Coach",
    description:
      "Train smarter with AI-powered boxing coaching. Defensive drills, offensive combos, personalized training plans, and video feedback.",
  },
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
      </body>
    </html>
  );
}
