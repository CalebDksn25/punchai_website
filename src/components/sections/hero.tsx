"use client";

import { motion } from "framer-motion";
import { heroText, slideInRight, float } from "@/lib/animations";
import { AppStoreBadge } from "@/components/ui/app-store-badge";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Atmospheric background layers */}
      <div className="absolute inset-0">
        {/* Main spotlight */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-strike-red/[0.06] rounded-full blur-[120px]" />
        {/* Secondary ambient */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-strike-red/[0.03] rounded-full blur-[100px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl w-full px-6 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Copy */}
        <div className="text-center lg:text-left">
          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-strike-red/20 bg-strike-red/5 px-4 py-1.5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-strike-red opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-strike-red" />
            </span>
            <span className="text-xs font-medium text-strike-red tracking-wide uppercase">
              Now Available on iOS
            </span>
          </motion.div>

          <motion.h1
            variants={heroText}
            initial="hidden"
            animate="visible"
            className="font-heading text-[4rem] md:text-[6rem] lg:text-[7.5rem] leading-[0.9] tracking-wide text-white"
          >
            TRAIN
            <br />
            <span className="text-gradient-red">SMARTER.</span>
            <br />
            HIT HARDER.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-8 text-lg md:text-xl text-steel max-w-md mx-auto lg:mx-0 leading-relaxed"
          >
            Your AI-powered boxing coach that adapts to your skill level.
            Drills, combos, and video feedback — all in your pocket.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <AppStoreBadge />
            <button
              onClick={() =>
                document
                  .querySelector("#features")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group rounded-full border border-white/10 px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white/5 hover:border-white/25"
            >
              Learn More
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </button>
          </motion.div>
        </div>

        {/* Right: Phone mockup */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            variants={float}
            initial="initial"
            animate="animate"
            className="relative"
          >
            {/* Glow behind phone */}
            <div className="absolute -inset-12 bg-strike-red/[0.08] rounded-full blur-[60px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-strike-red/10 rounded-full blur-[40px]" />
            <PhoneMockup>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/demo.mov"
              />
            </PhoneMockup>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-steel/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
