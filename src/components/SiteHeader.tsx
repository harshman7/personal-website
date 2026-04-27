"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, useMotionTemplate, useReducedMotion, useScroll, useTransform } from "framer-motion";

const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader({ siteTitle }: { siteTitle: string }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const bgAlpha = useTransform(scrollY, [0, 100], [0.76, 0.94]);
  const borderAlpha = useTransform(scrollY, [0, 100], [0.07, 0.16]);
  const blurPx = useTransform(scrollY, [0, 100], [12, 22]);
  const heightPx = useTransform(scrollY, [0, 100], [64, 56]);

  const backgroundColor = useMotionTemplate`rgba(10, 10, 10, ${bgAlpha})`;
  const borderBottomColor = useMotionTemplate`rgba(255, 255, 255, ${borderAlpha})`;
  const backdropFilter = useMotionTemplate`blur(${blurPx}px) saturate(1.12)`;

  const headerClass = reduce
    ? "fixed top-0 z-50 w-full border-b border-white/5 bg-[#0a0a0a]/85 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-md"
    : "fixed top-0 z-50 w-full border-b border-transparent shadow-[0_8px_32px_rgba(0,0,0,0.08)]";

  return (
    <motion.header
      className={headerClass}
      style={
        reduce
          ? undefined
          : {
              backgroundColor,
              borderBottomColor,
              backdropFilter,
            }
      }
    >
      <motion.div
        className={`mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 ${reduce ? "h-16" : ""}`}
        style={reduce ? undefined : { minHeight: heightPx }}
      >
        <a href="#home" className="text-xl font-bold text-white">
          {siteTitle}
        </a>
        <button
          type="button"
          className="rounded-lg p-2 text-gray-300 transition hover:bg-white/10 hover:text-white md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-gray-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </motion.div>
      {open && (
        <div className="border-t border-white/5 bg-[#0a0a0a]/95 px-4 py-4 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-gray-300 transition hover:bg-[#1a1a1a] hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </motion.header>
  );
}
