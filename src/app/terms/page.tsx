import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Terms of Service - Punch AI",
  description: "Terms of Service for Punch AI, your AI-powered boxing coach.",
};

export default function TermsPage() {
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
        <article className="mx-auto max-w-3xl">
          <h1 className="font-heading text-5xl md:text-6xl tracking-wide mb-4">
            TERMS OF <span className="text-gradient-red">SERVICE</span>
          </h1>
          <p className="text-steel text-sm mb-12">
            Last updated: March 29, 2026
          </p>

          <div className="space-y-10 text-steel leading-relaxed text-[15px]">
            {/* Intro */}
            <section>
              <p>
                Welcome to Punch AI. By downloading, accessing, or using our app, you agree
                to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree with
                these Terms, please do not use Punch AI.
              </p>
            </section>

            {/* About the App */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                ABOUT THE APP
              </h2>
              <p>
                Punch AI is an AI-powered boxing training application that uses your
                device&apos;s camera and computer vision technology for real-time pose detection.
                The app provides guided workouts, AI pad work, defensive drills, and
                personalized coaching feedback to help you improve your boxing skills.
              </p>
            </section>

            {/* Eligibility */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                ELIGIBILITY
              </h2>
              <p>
                You must be at least 17 years old to use Punch AI. By using the app, you
                confirm that you meet this age requirement.
              </p>
            </section>

            {/* Subscription Terms */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                SUBSCRIPTION TERMS
              </h2>
              <p className="mb-4">Punch AI offers the following subscription plans:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong className="text-white">Free Trial:</strong> 3-day free trial, no
                  credit card required
                </li>
                <li>
                  <strong className="text-white">Monthly Plan:</strong> $6.99/month
                </li>
                <li>
                  <strong className="text-white">Annual Plan:</strong> $39.99/year
                </li>
              </ul>
              <p>
                All subscriptions are managed and billed through the Apple App Store. To
                cancel your subscription, manage it through your Apple ID settings. After
                your free trial ends, a subscription is required to continue using Punch AI.
              </p>
            </section>

            {/* Health & Safety Disclaimer */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                HEALTH & SAFETY DISCLAIMER
              </h2>
              <p className="mb-3">
                <strong className="text-white">
                  Punch AI is not a substitute for professional boxing training or medical
                  advice.
                </strong>
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  You should consult a physician or healthcare provider before starting any
                  new exercise program, including training with Punch AI.
                </li>
                <li>
                  You assume all risk associated with physical activity when using the app.
                  Punch AI is not liable for any injuries sustained during training.
                </li>
                <li>
                  AI coaching suggestions are informational only and do not constitute
                  professional advice. Always prioritize your safety and listen to your body.
                </li>
              </ul>
            </section>

            {/* User Accounts */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                USER ACCOUNTS
              </h2>
              <p>
                You are responsible for maintaining the security of your account credentials.
                You agree not to share your account or use Punch AI for any unlawful purpose.
                We reserve the right to suspend or terminate accounts that violate these
                Terms or engage in abusive behavior.
              </p>
            </section>

            {/* Data Ownership */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                DATA OWNERSHIP
              </h2>
              <p>
                You own your session data (training stats, progress, performance metrics).
                We use this data to provide and improve the service as described in our{" "}
                <Link href="/privacy" className="text-strike-red hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                INTELLECTUAL PROPERTY
              </h2>
              <p>
                All content, branding, design, and technology in Punch AI are owned by us
                and protected by applicable intellectual property laws. You may not copy,
                modify, distribute, or reverse-engineer any part of the app.
              </p>
            </section>

            {/* Modifications to the Service */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                MODIFICATIONS TO THE SERVICE
              </h2>
              <p>
                We reserve the right to modify, suspend, or discontinue Punch AI (or any
                part of it) at any time, with or without notice. We will not be liable to you
                or any third party for any modification, suspension, or discontinuation of
                the service.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                LIMITATION OF LIABILITY
              </h2>
              <p>
                To the maximum extent permitted by law, Punch AI and its developer shall not
                be liable for any indirect, incidental, special, consequential, or punitive
                damages arising from your use of the app. This includes, but is not limited
                to, physical injuries, data loss, or service interruptions.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                GOVERNING LAW
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of
                the State of California, USA, without regard to its conflict of law
                provisions.
              </p>
            </section>

            {/* Changes to These Terms */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                CHANGES TO THESE TERMS
              </h2>
              <p>
                We may update these Terms from time to time. If we make significant changes,
                we will notify you through the app or by email. Continued use of Punch AI
                after changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                CONTACT US
              </h2>
              <p>
                If you have any questions about these Terms, reach out to us at{" "}
                <a href="mailto:support@punchai.app" className="text-strike-red hover:underline">
                  support@punchai.app
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
