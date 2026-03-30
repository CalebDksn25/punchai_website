import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Privacy Policy - Punch AI",
  description: "Privacy Policy for Punch AI, your AI-powered boxing coach.",
};

export default function PrivacyPage() {
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
            PRIVACY <span className="text-gradient-red">POLICY</span>
          </h1>
          <p className="text-steel text-sm mb-12">
            Last updated: March 29, 2026
          </p>

          <div className="space-y-10 text-steel leading-relaxed text-[15px]">
            {/* Intro */}
            <section>
              <p>
                Punch AI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is an AI-powered boxing training app
                developed by Caleb as an independent project. This Privacy Policy explains
                how we collect, use, and protect your information when you use our iOS
                application and related services.
              </p>
              <p className="mt-3">
                By using Punch AI, you agree to the practices described in this policy. If
                you have any questions, contact us at{" "}
                <a href="mailto:support@punchai.app" className="text-strike-red hover:underline">
                  support@punchai.app
                </a>
                .
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                INFORMATION WE COLLECT
              </h2>

              <h3 className="text-white font-semibold text-lg mb-2">Account Information</h3>
              <p>
                When you create an account, we collect your name, email address, age,
                gender, boxing experience level, and training goals. You may also optionally
                provide your height and weight to improve coaching accuracy.
              </p>

              <h3 className="text-white font-semibold text-lg mt-6 mb-2">Camera Data</h3>
              <p>
                Punch AI uses your device camera and Apple&apos;s Vision framework for
                real-time pose detection during training sessions.{" "}
                <strong className="text-white">
                  Camera frames are processed entirely on your device.
                </strong>{" "}
                No video is recorded, stored, or transmitted to any server. We never have
                access to your camera footage.
              </p>

              <h3 className="text-white font-semibold text-lg mt-6 mb-2">Session Data</h3>
              <p>
                We collect training session data including punch count, accuracy, session
                duration, and areas for improvement. This data is stored securely in our
                database to track your progress over time.
              </p>

              <h3 className="text-white font-semibold text-lg mt-6 mb-2">Subscription Data</h3>
              <p>
                We use RevenueCat to manage subscription status. We do not directly process
                or store payment information — all billing is handled through Apple&apos;s App
                Store.
              </p>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                HOW WE USE YOUR INFORMATION
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>To provide personalized boxing training and AI coaching</li>
                <li>To track your progress and adapt training plans to your skill level</li>
                <li>To generate AI coaching feedback based on your session stats (not video)</li>
                <li>To manage your account and subscription</li>
                <li>To send optional push notifications (e.g., trial reminders)</li>
              </ul>
            </section>

            {/* AI Coaching */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                AI COACHING
              </h2>
              <p>
                Session data (punch counts, accuracy, weak areas) may be sent to the
                Anthropic Claude API to generate personalized coaching feedback. No video or
                camera data is ever sent — only aggregated training statistics.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                THIRD-PARTY SERVICES
              </h2>
              <p className="mb-4">We use the following third-party services:</p>
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <strong className="text-white">Supabase</strong> — Database and
                  authentication.{" "}
                  <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-strike-red hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <strong className="text-white">RevenueCat</strong> — Subscription
                  management.{" "}
                  <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-strike-red hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <strong className="text-white">Anthropic Claude API</strong> — AI coaching
                  feedback.{" "}
                  <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" className="text-strike-red hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <strong className="text-white">Apple</strong> — Sign in with Apple and
                  StoreKit for payments and authentication.
                </li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                DATA SHARING
              </h2>
              <p>
                <strong className="text-white">
                  We do not sell your data to third parties — ever.
                </strong>{" "}
                Your information is only shared with the third-party services listed above,
                strictly for the purpose of providing the app&apos;s functionality.
              </p>
            </section>

            {/* Data Retention & Deletion */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                DATA RETENTION & DELETION
              </h2>
              <p>
                We retain your data for as long as your account is active. You can request
                complete deletion of your account and all associated data at any time by
                emailing{" "}
                <a href="mailto:support@punchai.app" className="text-strike-red hover:underline">
                  support@punchai.app
                </a>
                . We will process deletion requests within 30 days.
              </p>
            </section>

            {/* Age Requirements */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                AGE REQUIREMENTS
              </h2>
              <p>
                Punch AI is intended for users aged 17 and older due to the physical
                activity nature of the app. We do not knowingly collect information from
                anyone under 17. If we learn that we have collected data from someone under
                17, we will delete it promptly.
              </p>
            </section>

            {/* Push Notifications */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                PUSH NOTIFICATIONS
              </h2>
              <p>
                Push notifications are optional and used for trial reminders and training
                nudges. You can disable them at any time through your device settings.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                CHANGES TO THIS POLICY
              </h2>
              <p>
                We may update this Privacy Policy from time to time. If we make significant
                changes, we will notify you through the app or by email. Continued use of
                Punch AI after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                CONTACT US
              </h2>
              <p>
                If you have any questions about this Privacy Policy or your data, reach out
                to us at{" "}
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
