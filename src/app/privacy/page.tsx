import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Punch AI. Learn how we protect your data, process camera input on-device, and keep your boxing training information secure.",
  alternates: {
    canonical: "https://punchai.app/privacy",
  },
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
            Last updated: April 10, 2026
          </p>

          <div className="space-y-10 text-steel leading-relaxed text-[15px]">
            {/* Intro */}
            <section>
              <p>
                Punch AI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is an iOS boxing
                training app built by Caleb, an independent developer operating as a sole
                proprietor in California. The app uses your iPhone&apos;s front camera and
                Apple&apos;s Vision framework to detect your punches and form in real time so
                you can train without a coach, a partner, or a gym.
              </p>
              <p className="mt-3">
                This Privacy Policy explains exactly what the Punch AI iOS app (bundle ID
                <span className="font-mono text-white"> app.punchai.PunchAI</span>) and
                punchai.app collect, how we use it, and who we share it with. We&apos;ve tried
                to write it in plain English. If anything is unclear, email{" "}
                <a href="mailto:support@punchai.app" className="text-strike-red hover:underline">
                  support@punchai.app
                </a>{" "}
                and we&apos;ll answer directly. By using Punch AI, you agree to the practices
                described here.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                INFORMATION WE COLLECT
              </h2>

              <h3 className="text-white font-semibold text-lg mb-2">Account Information</h3>
              <p>
                When you sign up — using Sign in with Apple or email authentication — we
                collect the information you give us during onboarding:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>
                  <strong className="text-white">Name</strong> you provide during the
                  onboarding quiz
                </li>
                <li>
                  <strong className="text-white">Email address</strong> (either the one you
                  type, or the private relay address Apple generates when you use Sign in
                  with Apple)
                </li>
                <li>
                  <strong className="text-white">Age, height, weight, boxing experience
                  level, and training goals</strong> from the onboarding quiz
                </li>
              </ul>
              <p className="mt-3">
                You give us this information directly. We don&apos;t pull it from anywhere
                else.
              </p>

              <h3 className="text-white font-semibold text-lg mt-6 mb-2">
                Fitness &amp; Session Data
              </h3>
              <p>
                Every time you train, Punch AI records statistics from that session:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Punch counts (total, by hand, and by punch type)</li>
                <li>Accuracy scores</li>
                <li>Session duration</li>
                <li>
                  Weak areas the coach identified (e.g. dropped guard, slow return, narrow
                  stance)
                </li>
                <li>Workout history and dates</li>
              </ul>
              <p className="mt-3">
                This is classified as <strong className="text-white">Fitness</strong> data
                under Apple&apos;s App Store privacy definitions. It&apos;s stored in our
                Supabase database, linked to your account, so you can see your progress over
                time.
              </p>

              <h3 className="text-white font-semibold text-lg mt-6 mb-2">
                Automatically Collected
              </h3>
              <p>
                When you use the app, a few things are collected automatically:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>
                  <strong className="text-white">User ID</strong> — a Supabase user ID and a
                  RevenueCat app user ID, used to tie your account to your session history
                  and your subscription status.
                </li>
                <li>
                  <strong className="text-white">Purchase history</strong> — the subscription
                  tier you&apos;re on and whether you&apos;re in your 3-day free trial.
                  Handled by Apple StoreKit and RevenueCat; we never see card numbers or
                  payment details.
                </li>
                <li>
                  <strong className="text-white">Product interaction</strong> — which screens
                  you tap through, so we can understand how people use the app and remove
                  friction.
                </li>
                <li>
                  <strong className="text-white">Crash data and performance data</strong> —
                  standard diagnostics from Apple App Store Connect and TestFlight, used
                  only to find and fix bugs.
                </li>
              </ul>
              <p className="mt-3">
                These eight data types — Name, Email Address, Fitness, User ID, Purchase
                History, Product Interaction, Crash Data, and Performance Data — match the
                declarations in our App Store Connect privacy disclosure, and all of them are
                marked{" "}
                <strong className="text-white">&quot;not used for tracking.&quot;</strong>
              </p>

              <h3 className="text-white font-semibold text-lg mt-6 mb-2">
                What We Do Not Collect
              </h3>
              <p>
                To be explicit, Punch AI does{" "}
                <strong className="text-white">not</strong> collect:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Precise or coarse location</li>
                <li>Your contacts or address book</li>
                <li>HealthKit data (we do not integrate HealthKit)</li>
                <li>
                  Advertising identifiers (IDFA) — there are no ads in the app and no ad
                  network
                </li>
                <li>Your photo library or any user-recorded videos</li>
                <li>Browsing or search history from outside the app</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                HOW WE USE YOUR INFORMATION
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Run the app and personalize your training sessions</li>
                <li>Track your progress and adapt drills as your skill improves</li>
                <li>
                  Generate post-session AI coaching feedback (see &quot;Third-Party
                  Services&quot; below)
                </li>
                <li>Manage your account, trial, and subscription status</li>
                <li>
                  Send optional push notifications for trial reminders and training nudges —
                  you can turn these off in iOS Settings
                </li>
                <li>Diagnose crashes and fix bugs</li>
              </ul>
              <p className="mt-3">
                We do not use your data to serve ads, build advertising profiles, or sell
                anything to anyone.
              </p>
            </section>

            {/* On-Device Processing */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                ON-DEVICE PROCESSING
              </h2>
              <p>
                This is the section we want you to understand clearly, because it&apos;s a
                real privacy boundary — not a marketing line.
              </p>
              <p className="mt-3">
                When you train, Punch AI uses Apple&apos;s Vision framework to analyze the
                video feed from your iPhone&apos;s front camera. On-device, the app computes:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>
                  <strong className="text-white">Hand landmarks</strong> — 21 points per
                  hand, used to detect punch type, arm extension, and timing
                </li>
                <li>
                  <strong className="text-white">Body pose landmarks</strong> — used to
                  detect stance, guard position, rotation, and balance
                </li>
              </ul>
              <p className="mt-3">
                <strong className="text-white">
                  None of this ever leaves your iPhone.
                </strong>{" "}
                The raw camera frames, the hand landmarks, the body pose coordinates, and
                every intermediate computation are all processed locally and discarded after
                each frame. We do not record, store, upload, or have any access to:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Video of you training</li>
                <li>Photos or screenshots of your sessions</li>
                <li>Raw landmark or coordinate data</li>
                <li>The front camera feed at any point in time</li>
              </ul>
              <p className="mt-3">
                What does get uploaded to our servers are the{" "}
                <strong className="text-white">derived statistics</strong> from the session —
                punch counts, accuracy scores, session duration, and identified weak areas.
                Those numbers are how your progress dashboard works, and how the AI coaching
                feedback is generated.
              </p>
              <p className="mt-3">
                For the technically curious: the app only requests the iOS Camera permission.
                It does not request Photo Library access and cannot read saved videos or
                photos.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                THIRD-PARTY SERVICES
              </h2>
              <p>
                We rely on a small number of services so the app can function. Here&apos;s
                exactly what each one receives and why.
              </p>

              <h3 className="text-white font-semibold text-lg mt-6 mb-2">Supabase</h3>
              <p>
                Database and authentication provider.
                <br />
                <strong className="text-white">Receives:</strong> your account information
                (name, email, onboarding responses), your session history, and your user ID.
                <br />
                <strong className="text-white">Why:</strong> to store your profile, let you
                log in, and power your progress dashboard.
                <br />
                <a
                  href="https://supabase.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-strike-red hover:underline"
                >
                  Supabase Privacy Policy
                </a>
              </p>

              <h3 className="text-white font-semibold text-lg mt-6 mb-2">RevenueCat</h3>
              <p>
                Subscription management.
                <br />
                <strong className="text-white">Receives:</strong> your user ID and Apple
                purchase status (trial, monthly at $6.99, yearly at $39.99, expired).
                <br />
                <strong className="text-white">Why:</strong> to decide whether to unlock paid
                features and manage your subscription lifecycle across devices.
                <br />
                <a
                  href="https://www.revenuecat.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-strike-red hover:underline"
                >
                  RevenueCat Privacy Policy
                </a>
              </p>

              <h3 className="text-white font-semibold text-lg mt-6 mb-2">
                Anthropic (Claude API)
              </h3>
              <p>
                Post-session AI coaching feedback, generated by Anthropic&apos;s{" "}
                <span className="font-mono text-white">claude-sonnet-4-6</span> model.
                <br />
                <strong className="text-white">Receives:</strong> summary statistics from a
                finished session (punch counts, accuracy, weak areas).
                <br />
                <strong className="text-white">Does not receive:</strong> video, images, raw
                camera frames, hand landmarks, body pose coordinates, your name, or your
                email.
                <br />
                <strong className="text-white">When:</strong> only for paid subscribers,
                only after a session ends.
                <br />
                <a
                  href="https://www.anthropic.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-strike-red hover:underline"
                >
                  Anthropic Privacy Policy
                </a>
              </p>

              <h3 className="text-white font-semibold text-lg mt-6 mb-2">Apple</h3>
              <p>
                Sign in with Apple, StoreKit, and App Store Connect crash reporting.
                <br />
                <strong className="text-white">Receives:</strong> authentication credentials
                (when you use Sign in with Apple), purchase and subscription transactions
                (via StoreKit — Apple handles all payment information end-to-end, so we
                never see card numbers), and aggregated crash and performance data through
                App Store Connect.
                <br />
                <strong className="text-white">Why:</strong> account sign-in, billing, and
                diagnostics.
                <br />
                <a
                  href="https://www.apple.com/legal/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-strike-red hover:underline"
                >
                  Apple Privacy Policy
                </a>
              </p>

              <p className="mt-6">
                We do not share your data with anyone else, and{" "}
                <strong className="text-white">we do not sell it</strong> — not now, not
                ever.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                DATA RETENTION
              </h2>
              <p>
                We keep your account information and session history for as long as your
                account exists. If you stop using the app, your data stays in our database
                until you delete your account.
              </p>
              <p className="mt-3">
                When you delete your account, we delete all associated data from Supabase —
                profile info, session history, and user identifiers — within 30 days.
                RevenueCat&apos;s subscription records follow their own retention schedule,
                and Apple&apos;s records (purchase history, crash data) are governed by
                Apple&apos;s policies.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                YOUR RIGHTS
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>
                  <strong className="text-white">Access</strong> the personal information we
                  hold about you
                </li>
                <li>
                  <strong className="text-white">Correct</strong> information that&apos;s
                  wrong or out of date — most of it is editable directly in the
                  app&apos;s Settings screen
                </li>
                <li>
                  <strong className="text-white">Delete</strong> your account and all
                  associated data. You can do this from inside the app under{" "}
                  <span className="text-white">Settings → Account → Delete Account</span>,
                  or by emailing{" "}
                  <a
                    href="mailto:support@punchai.app"
                    className="text-strike-red hover:underline"
                  >
                    support@punchai.app
                  </a>
                  . Deletion requests are honored within 30 days.
                </li>
                <li>
                  <strong className="text-white">Export</strong> a copy of your data on
                  request — email us and we&apos;ll send you what we have
                </li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, email{" "}
                <a
                  href="mailto:support@punchai.app"
                  className="text-strike-red hover:underline"
                >
                  support@punchai.app
                </a>{" "}
                from the address associated with your account.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                CHILDREN&apos;S PRIVACY
              </h2>
              <p>
                Punch AI is rated <strong className="text-white">9+</strong> in the App Store
                but is not directed at children under 13, and we do not knowingly collect
                personal information from anyone under 13. If we learn that a child under 13
                has created an account, we will delete that account and its data immediately.
                If you believe a child under 13 has provided us information, please email{" "}
                <a
                  href="mailto:support@punchai.app"
                  className="text-strike-red hover:underline"
                >
                  support@punchai.app
                </a>
                .
              </p>
            </section>

            {/* California Privacy Rights */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                CALIFORNIA PRIVACY RIGHTS
              </h2>
              <p>
                If you are a California resident, the California Consumer Privacy Act (CCPA),
                as amended by the CPRA, gives you specific rights:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>
                  <strong className="text-white">Right to know</strong> what personal
                  information we collect, how it&apos;s used, and who we share it with. This
                  entire Privacy Policy is designed to answer that.
                </li>
                <li>
                  <strong className="text-white">Right to delete</strong> your personal
                  information — use the in-app deletion option or email us.
                </li>
                <li>
                  <strong className="text-white">Right to correct</strong> inaccurate
                  personal information.
                </li>
                <li>
                  <strong className="text-white">
                    Right to opt out of the sale or sharing
                  </strong>{" "}
                  of personal information.{" "}
                  <strong className="text-white">
                    We do not sell or share your personal information
                  </strong>{" "}
                  for cross-context behavioral advertising or any other purpose, so there is
                  nothing to opt out of and no &quot;Do Not Sell&quot; toggle in the app.
                </li>
                <li>
                  <strong className="text-white">Right to non-discrimination</strong> for
                  exercising any of these rights.
                </li>
              </ul>
              <p className="mt-3">
                To exercise a California privacy right, email{" "}
                <a
                  href="mailto:support@punchai.app"
                  className="text-strike-red hover:underline"
                >
                  support@punchai.app
                </a>
                . We will respond within 45 days.
              </p>
            </section>

            {/* International Users */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                INTERNATIONAL USERS
              </h2>
              <p>
                Punch AI is operated from the United States. Our database (Supabase) and our
                third-party services are hosted on servers located primarily in the United
                States. If you use the app from outside the United States, your information
                will be transferred to, stored, and processed in the U.S. By using Punch AI
                from outside the U.S., you consent to that transfer.
              </p>
              <p className="mt-3">
                We recognize that some jurisdictions — including the EU, UK, and others —
                have stricter data protection laws. If you&apos;d like to exercise rights
                granted by GDPR or a similar framework, email{" "}
                <a
                  href="mailto:support@punchai.app"
                  className="text-strike-red hover:underline"
                >
                  support@punchai.app
                </a>{" "}
                and we&apos;ll handle your request directly.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                CHANGES TO THIS POLICY
              </h2>
              <p>
                We may update this Privacy Policy as the app evolves. When we make meaningful
                changes, we&apos;ll update the &quot;Last updated&quot; date at the top of
                this page and, for significant changes, notify you in the app or by email.
                Continued use of Punch AI after an update constitutes acceptance of the
                revised policy.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="font-heading text-3xl tracking-wide text-white mb-4">
                CONTACT US
              </h2>
              <p>
                Punch AI is built by Caleb, an independent developer based in California.
              </p>
              <p className="mt-3">
                Questions, data requests, or privacy concerns:{" "}
                <a
                  href="mailto:support@punchai.app"
                  className="text-strike-red hover:underline"
                >
                  support@punchai.app
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
