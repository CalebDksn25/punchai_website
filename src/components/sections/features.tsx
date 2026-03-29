"use client";

import { motion } from "framer-motion";
import {
  Target,
  ShieldCheck,
  Swords,
  Calendar,
  Video,
  BarChart3,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { FEATURES } from "@/lib/constants";

const iconMap = {
  Target,
  ShieldCheck,
  Swords,
  Calendar,
  Video,
  BarChart3,
} as const;

export function Features() {
  return (
    <motion.section
      id="features"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="relative py-32 px-6"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-strike-red/[0.03] rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <span className="inline-block text-xs font-semibold text-strike-red tracking-[0.3em] uppercase mb-4">
            Features
          </span>
          <h2 className="font-heading text-5xl md:text-7xl tracking-wide">
            EVERYTHING YOU NEED
            <br />
            TO <span className="text-gradient-red">LEVEL UP</span>
          </h2>
          <p className="mt-6 text-steel text-lg max-w-xl mx-auto leading-relaxed">
            Six powerful tools designed to sharpen every aspect of your boxing
            game.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="group relative rounded-2xl border border-white/[0.04] bg-carbon/60 backdrop-blur-sm p-8 transition-all duration-500 hover:border-strike-red/20 hover:glow-red"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-strike-red/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06] transition-all duration-500 group-hover:bg-strike-red/10 group-hover:border-strike-red/20">
                    <Icon className="h-5 w-5 text-steel transition-colors duration-500 group-hover:text-strike-red" />
                  </div>
                  <h3 className="font-heading text-2xl tracking-wide mb-3">
                    {feature.title.toUpperCase()}
                  </h3>
                  <p className="text-steel text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
