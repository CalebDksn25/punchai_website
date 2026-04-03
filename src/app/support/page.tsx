import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with Punch AI. Find answers to common questions about your AI boxing coach, troubleshoot issues, and contact our support team.",
  alternates: {
    canonical: "https://punchai.app/support",
  },
};

const faqs = [
  {
    question: "How does Punch AI track my punches?",
    answer:
      "Punch AI uses your iPhone's camera and Apple's Vision framework for real-time pose detection. All processing happens entirely on your device — no video is recorded or sent to any server.",
  },
  {
    question: "Do I need boxing experience to use Punch AI?",
    answer:
      "No. Punch AI adapts to all skill levels from complete beginner to advanced boxer. Set your level during onboarding and the AI adjusts drills, combos, and coaching to match.",
  },
  {
    question: "How much does Punch AI cost?",
    answer:
      "Punch AI offers a free 3-day trial with no credit card required. After that, plans are $6.99/month or $39.99/year. All billing is handled through the Apple App Store.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      'Go to Settings > Apple ID > Subscriptions on your iPhone, find Punch AI, and tap "Cancel Subscription." Your access continues until the end of your current billing period.',
  },
  {
    question: "What devices are supported?",
    answer:
      "Punch AI requires an iPhone running iOS 17 or later with a TrueDepth camera for accurate pose detection. iPad support is not currently available.",
  },
  {
    question: "Is my camera data private?",
    answer:
      "Absolutely. Camera frames are processed entirely on your device using Apple's Vision framework. No video is ever recorded, stored, or transmitted. We never have access to your camera footage.",
  },
  {
    question: "How do I delete my account and data?",
    answer:
      "Email support@punchai.app with your account email and request deletion. We process all deletion requests within 30 days and remove all associated data.",
  },
  {
    question: "The app isn't tracking my movements correctly. What should I do?",
    answer:
      "Make sure you're in a well-lit area with your full body visible to the camera. Position your iPhone at arm's length, propped up at chest height. Avoid backlit environments where your silhouette blends into the background.",
  },
];

export default function SupportPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

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
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-5xl md:text-6xl tracking-wide mb-4 text-center">
            SUPPORT <span className="text-gradient-red">CENTER</span>
          </h1>
          <p className="text-steel text-lg leading-relaxed mb-16 text-center max-w-xl mx-auto">
            Find answers to common questions or reach out to our team for help
            with Punch AI.
          </p>

          {/* Contact card */}
          <div className="rounded-2xl border border-white/[0.04] bg-carbon/60 backdrop-blur-sm p-8 mb-16">
            <h2 className="font-heading text-3xl tracking-wide text-white mb-6">
              CONTACT <span className="text-gradient-red">US</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-steel text-sm uppercase tracking-widest mb-2">
                  Email
                </p>
                <a
                  href="mailto:support@punchai.app"
                  className="text-lg font-heading tracking-wide text-strike-red hover:underline"
                >
                  support@punchai.app
                </a>
                <p className="text-steel text-sm mt-2">
                  We typically respond within 24 hours.
                </p>
              </div>
              <div>
                <p className="text-steel text-sm uppercase tracking-widest mb-2">
                  Social
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://www.instagram.com/punchai_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-steel text-sm hover:text-white transition-colors duration-300"
                  >
                    Instagram: @punchai_app
                  </a>
                  <a
                    href="https://www.tiktok.com/@punchai.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-steel text-sm hover:text-white transition-colors duration-300"
                  >
                    TikTok: @punchai.app
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* App info */}
          <div className="rounded-2xl border border-white/[0.04] bg-carbon/60 backdrop-blur-sm p-8 mb-16">
            <h2 className="font-heading text-3xl tracking-wide text-white mb-6">
              APP <span className="text-gradient-red">INFO</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm">
              <div className="flex justify-between border-b border-white/[0.04] pb-3">
                <span className="text-steel">Platform</span>
                <span className="text-white">iOS</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.04] pb-3">
                <span className="text-steel">Minimum iOS Version</span>
                <span className="text-white">iOS 17+</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.04] pb-3">
                <span className="text-steel">Age Rating</span>
                <span className="text-white">17+</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.04] pb-3">
                <span className="text-steel">Camera Required</span>
                <span className="text-white">Yes (TrueDepth)</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.04] pb-3">
                <span className="text-steel">Free Trial</span>
                <span className="text-white">3 days</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.04] pb-3">
                <span className="text-steel">Pricing</span>
                <span className="text-white">$6.99/mo or $39.99/yr</span>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-heading text-3xl tracking-wide text-white mb-8">
              FREQUENTLY ASKED{" "}
              <span className="text-gradient-red">QUESTIONS</span>
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-white/[0.04] bg-carbon/60 backdrop-blur-sm"
                >
                  <summary className="flex cursor-pointer items-center justify-between p-6 text-white font-medium text-[15px] leading-relaxed list-none [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span className="ml-4 flex-shrink-0 text-steel transition-transform duration-300 group-open:rotate-45">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <line x1="8" y1="2" x2="8" y2="14" />
                        <line x1="2" y1="8" x2="14" y2="8" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-steel text-[15px] leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-steel hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-steel hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="text-steel hover:text-white transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
