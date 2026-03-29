"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <motion.section
      id="reviews"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="relative py-32 px-6 bg-carbon/30"
    >
      <div className="relative mx-auto max-w-7xl">
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <span className="inline-block text-xs font-semibold text-strike-red tracking-[0.3em] uppercase mb-4">
            Testimonials
          </span>
          <h2 className="font-heading text-5xl md:text-7xl tracking-wide">
            WHAT FIGHTERS ARE{" "}
            <span className="text-gradient-red">SAYING</span>
          </h2>
          <p className="mt-6 text-steel text-lg max-w-xl mx-auto leading-relaxed">
            Join thousands of boxers who train smarter with Punch AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              variants={fadeInUp}
              className={`group relative rounded-2xl border border-white/[0.04] bg-carbon/60 backdrop-blur-sm p-8 transition-all duration-500 hover:border-white/[0.08] ${
                i === 1 ? "md:-translate-y-4" : ""
              }`}
            >
              {/* Quote mark */}
              <Quote className="h-8 w-8 text-strike-red/20 mb-4 -scale-x-100" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-3.5 w-3.5 fill-strike-red text-strike-red"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/70 text-sm leading-relaxed mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="h-10 w-10 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                  <span className="text-xs font-semibold text-steel">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-steel text-xs">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
