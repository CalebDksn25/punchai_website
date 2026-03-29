"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { Target, Calendar, Video } from "lucide-react";

const screens = [
  {
    label: "AI Pad Work",
    icon: Target,
    color: "from-strike-red/20 to-strike-red/5",
  },
  {
    label: "Training Plans",
    icon: Calendar,
    color: "from-white/10 to-white/[0.02]",
  },
  {
    label: "Video Analysis",
    icon: Video,
    color: "from-strike-red/15 to-strike-red/5",
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
          {screens.map((screen, i) => {
            const Icon = screen.icon;
            return (
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
                  <div className="flex flex-col items-center justify-center h-full px-6">
                    {/* Mock app UI */}
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${screen.color} flex items-center justify-center mb-4 border border-white/[0.06]`}
                    >
                      <Icon className="w-7 h-7 text-white/60" />
                    </div>
                    <p className="text-white text-sm font-medium tracking-wide">
                      {screen.label}
                    </p>
                    <div className="mt-8 space-y-3 w-full px-2">
                      <div className="h-8 bg-white/[0.03] rounded-xl border border-white/[0.04]" />
                      <div className="h-8 bg-white/[0.03] rounded-xl border border-white/[0.04] w-4/5" />
                      <div className="h-8 bg-white/[0.03] rounded-xl border border-white/[0.04] w-3/5" />
                      <div className="mt-4 h-10 bg-strike-red/10 rounded-xl border border-strike-red/20 flex items-center justify-center">
                        <span className="text-strike-red text-[10px] font-medium tracking-wider uppercase">
                          Start Session
                        </span>
                      </div>
                    </div>
                  </div>
                </PhoneMockup>
                <p className="text-center text-steel text-xs mt-5 tracking-widest uppercase">
                  {screen.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
