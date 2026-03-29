"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({
  id,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`py-32 px-6 ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </motion.section>
  );
}
