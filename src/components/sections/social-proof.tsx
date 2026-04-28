"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { STATS } from "@/lib/constants";

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  const numericPart = value.replace(/[^0-9.]/g, "");
  const prefix = value.match(/^[^0-9]*/)?.[0] || "";
  const suffix = value.match(/[^0-9.]*$/)?.[0] || "";

  useEffect(() => {
    if (!isInView) return;
    const target = parseFloat(numericPart);
    const hasDecimal = numericPart.includes(".");
    const duration = 1500;
    const start = performance.now();

    function animate(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      if (hasDecimal) {
        setDisplay(current.toFixed(1));
      } else {
        setDisplay(Math.floor(current).toLocaleString());
      }

      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [isInView, numericPart]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function SocialProof() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="relative border-y border-white/[0.04] bg-carbon/50"
    >
      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(226,75,74,0.03)_0%,_transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-3 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center relative"
            >
              {/* Divider */}
              {i > 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-white/[0.06]" />
              )}
              <div className="font-heading text-4xl md:text-5xl tracking-wider text-white">
                <AnimatedNumber value={stat.value} />
              </div>
              <div className="mt-2 text-xs md:text-sm text-steel tracking-widest uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
