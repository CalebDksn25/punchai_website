import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { Features } from "@/components/sections/features";
import { AppScreenshots } from "@/components/sections/app-screenshots";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { APP_STORE_URL } from "@/lib/constants";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Punch AI",
  url: "https://punchai.app",
  logo: "https://punchai.app/punchai_logo.png",
  sameAs: [
    "https://www.instagram.com/punchai_app",
    "https://www.tiktok.com/@punchai.app",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@punchai.app",
    contactType: "customer support",
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Punch AI",
  operatingSystem: "iOS",
  applicationCategory: "HealthApplication",
  description:
    "AI-powered boxing coach with real-time pose detection, defensive drills, offensive combos, personalized training plans, and video feedback.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free 3-day trial, then $6.99/month or $39.99/year",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "50000",
    bestRating: "5",
  },
  screenshot: [
    "https://punchai.app/screenshots/guidedworkouts.png",
    "https://punchai.app/screenshots/padworkex.png",
    "https://punchai.app/screenshots/videoreview.png",
  ],
  featureList: [
    "AI Pad Holding",
    "Defensive Drills",
    "Offensive Drills",
    "Tailored Training Plans",
    "Video Feedback",
    "Progress Tracking",
  ],
  downloadUrl: APP_STORE_URL,
  installUrl: APP_STORE_URL,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Punch AI",
  url: "https://punchai.app",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(appJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <AppScreenshots />
        <HowItWorks />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
