"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { AppStoreBadge } from "@/components/ui/app-store-badge";

export function FinalCta() {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-strike-red/[0.06] rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-strike-red/[0.08] rounded-full blur-[60px]" />
      </div>

      {/* Top border accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-strike-red/40 to-transparent" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <motion.div variants={fadeInUp}>
          <span className="inline-block text-xs font-semibold text-strike-red tracking-[0.3em] uppercase mb-6">
            Get Started
          </span>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="font-heading text-5xl md:text-8xl tracking-wide leading-[0.9]"
        >
          READY TO
          <br />
          STEP INTO THE
          <br />
          <span className="text-gradient-red">RING?</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
          className="mt-8 text-steel text-lg max-w-md mx-auto leading-relaxed"
        >
          Download Punch AI and start training like a champion. Your AI coach
          is waiting.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <AppStoreBadge />
        </motion.div>
      </motion.div>
    </section>
  );
}
