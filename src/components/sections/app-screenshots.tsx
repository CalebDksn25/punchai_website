"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { PhoneMockup } from "@/components/ui/phone-mockup";

const screens = [
  {
    label: "Guided Workouts",
    alt: "Punch AI guided boxing workout screen showing real-time punch tracking and drill instructions",
    type: "video" as const,
    src: "/videos/appex2.mov",
  },
  {
    label: "AI Pad Work",
    alt: "Punch AI pad work training screen with AI-powered pose detection tracking boxing form in real-time",
    type: "image" as const,
    src: "/screenshots/padworkex.png",
  },
  {
    label: "Video Analysis",
    alt: "Punch AI video analysis screen providing AI-powered boxing form feedback and improvement tips",
    type: "video" as const,
    src: "/videos/appex1.mov",
  },
];

export function AppScreenshots() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(226,75,74,0.04)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <span className="inline-block text-xs font-semibold text-strike-red tracking-[0.3em] uppercase mb-4">
            Preview
          </span>
          <h2 className="font-heading text-5xl md:text-7xl tracking-wide">
            SEE IT <span className="text-gradient-red">IN ACTION</span>
          </h2>
          <p className="mt-6 text-steel text-lg max-w-xl mx-auto leading-relaxed">
            A glimpse at what your training sessions look like.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-end justify-center gap-8 md:gap-10">
          {screens.map((screen, i) => (
              <motion.div
                key={screen.label}
                variants={scaleIn}
                className={`transition-all duration-500 ${
                  i === 1
                    ? "md:-translate-y-6 md:z-10"
                    : "md:opacity-70 md:hover:opacity-100"
                }`}
              >
                <PhoneMockup>
                  {screen.type === "video" ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      aria-label={screen.alt}
                      className="absolute inset-0 w-full h-full object-cover"
                      src={screen.src}
                    />
                  ) : (
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      fill
                      className="object-cover"
                    />
                  )}
                </PhoneMockup>
                <p className="text-center text-steel text-xs mt-5 tracking-widest uppercase">
                  {screen.label}
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </motion.section>
  );
}
