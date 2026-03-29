"use client";

import { motion } from "framer-motion";
import { Download, UserPlus, Flame } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { STEPS } from "@/lib/constants";

const iconMap = {
  Download,
  UserPlus,
  Flame,
} as const;

export function HowItWorks() {
  return (
    <motion.section
      id="how-it-works"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="relative py-32 px-6 bg-carbon/30"
    >
      {/* Decorative line accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-transparent to-white/10" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <span className="inline-block text-xs font-semibold text-strike-red tracking-[0.3em] uppercase mb-4">
            Getting Started
          </span>
          <h2 className="font-heading text-5xl md:text-7xl tracking-wide">
            THREE STEPS TO
            <br />
            YOUR FIRST <span className="text-gradient-red">SESSION</span>
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-[52px] left-[20%] right-[20%]">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          {STEPS.map((step) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="flex flex-col items-center text-center group"
              >
                {/* Step circle */}
                <div className="relative">
                  {/* Outer ring pulse */}
                  <div className="absolute inset-0 rounded-full border border-strike-red/20 scale-[1.15] opacity-0 group-hover:opacity-100 group-hover:scale-[1.3] transition-all duration-700" />

                  <div className="relative z-10 flex h-[104px] w-[104px] items-center justify-center rounded-full border border-white/[0.06] bg-carbon">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/[0.03] transition-all duration-500 group-hover:bg-strike-red/10">
                      <Icon className="h-6 w-6 text-steel transition-colors duration-500 group-hover:text-strike-red" />
                    </div>
                  </div>
                </div>

                <span className="mt-5 font-heading text-sm tracking-[0.3em] text-strike-red">
                  STEP {step.number}
                </span>
                <h3 className="mt-3 font-heading text-2xl tracking-wide">
                  {step.title.toUpperCase()}
                </h3>
                <p className="mt-3 text-steel text-sm max-w-[260px] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
