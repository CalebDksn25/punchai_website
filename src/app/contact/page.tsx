import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Punch AI team. Reach us via email at support@punchai.app or follow us on Instagram and TikTok.",
  alternates: {
    canonical: "https://punchai.app/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-onyx/70 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/punchai_logo.png"
              alt="Punch AI"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="font-heading text-xl tracking-widest">
              PUNCH AI
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-steel hover:text-white transition-colors duration-300"
          >
            &larr; Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="font-heading text-5xl md:text-6xl tracking-wide mb-4">
            GET IN <span className="text-gradient-red">TOUCH</span>
          </h1>
          <p className="text-steel text-lg leading-relaxed mb-12">
            Have a question, issue, or feedback? We&apos;d love to hear from you.
          </p>

          {/* Email card */}
          <div className="rounded-2xl border border-white/[0.04] bg-carbon/60 backdrop-blur-sm p-10 mb-8">
            <p className="text-steel text-sm uppercase tracking-widest mb-4">
              Email us at
            </p>
            <a
              href="mailto:support@punchai.app"
              className="text-2xl md:text-3xl font-heading tracking-wide text-strike-red hover:underline"
            >
              support@punchai.app
            </a>
            <p className="text-steel text-sm mt-6 leading-relaxed">
              We typically respond within 24 hours.
            </p>
          </div>

          {/* Social links */}
          <div className="rounded-2xl border border-white/[0.04] bg-carbon/60 backdrop-blur-sm p-8">
            <p className="text-steel text-sm uppercase tracking-widest mb-6">
              Follow us
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.instagram.com/punchai_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-steel hover:text-white transition-colors duration-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span className="text-sm">@punchai_app</span>
              </a>
              <a
                href="https://www.tiktok.com/@punchai.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-steel hover:text-white transition-colors duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.51a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.65a8.35 8.35 0 0 0 4.76 1.48v-3.44h-1z" />
                </svg>
                <span className="text-sm">@punchai.app</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
