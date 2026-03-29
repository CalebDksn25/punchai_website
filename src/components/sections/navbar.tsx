"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, APP_STORE_URL } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-onyx/70 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <Image
            src="/punchai_logo.png"
            alt="Punch AI"
            width={36}
            height={36}
            className="rounded-lg transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-heading text-xl tracking-widest">
            PUNCH AI
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="relative text-sm text-steel hover:text-white transition-colors duration-300 py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-strike-red transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-full bg-strike-red px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(226,75,74,0.3)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Download
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-onyx/95 backdrop-blur-xl border-t border-white/[0.06] overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-10">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => handleNavClick(link.href)}
                  className="font-heading text-2xl tracking-widest text-steel hover:text-white transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full bg-strike-red px-10 py-3 text-sm font-semibold text-white"
              >
                Download
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
