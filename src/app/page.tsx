import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { Features } from "@/components/sections/features";
import { AppScreenshots } from "@/components/sections/app-screenshots";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
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
