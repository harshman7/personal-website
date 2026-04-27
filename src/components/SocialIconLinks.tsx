"use client";

import { Globe, Mail, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGithub, SiInstagram, SiX } from "react-icons/si";
import type { Profile } from "@/lib/types";

const linkClass =
  "flex h-12 w-12 items-center justify-center rounded-full border border-dark-border bg-[#1a1a1a] text-gray-300 shadow-lg transition-colors hover:border-primary/50 hover:text-white";

export function SocialIconLinks({ profile, className = "" }: { profile: Profile; className?: string }) {
  const reduce = useReducedMotion();
  const items: { href: string; label: string; icon: ReactNode }[] = [];
  if (profile.websiteUrl) {
    items.push({ href: profile.websiteUrl, label: "Website", icon: <Globe className="h-5 w-5" /> });
  }
  if (profile.email) {
    items.push({ href: `mailto:${profile.email}`, label: "Email", icon: <Mail className="h-5 w-5" /> });
  }
  if (profile.phone) {
    items.push({ href: `tel:${profile.phone.replace(/\s/g, "")}`, label: "Phone", icon: <Phone className="h-5 w-5" /> });
  }
  if (profile.linkedinUrl) {
    items.push({ href: profile.linkedinUrl, label: "LinkedIn", icon: <FaLinkedinIn className="h-5 w-5" /> });
  }
  if (profile.instagramUrl) {
    items.push({ href: profile.instagramUrl, label: "Instagram", icon: <SiInstagram className="h-5 w-5" /> });
  }
  if (profile.githubUrl) {
    items.push({ href: profile.githubUrl, label: "GitHub", icon: <SiGithub className="h-5 w-5" /> });
  }
  if (profile.twitterUrl) {
    items.push({ href: profile.twitterUrl, label: "X", icon: <SiX className="h-5 w-5" /> });
  }
  if (items.length === 0) return null;
  return (
    <div className={`flex flex-wrap items-center justify-center gap-5 ${className}`}>
      {items.map((item) => (
        <motion.a
          key={item.label}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={linkClass}
          aria-label={item.label}
          initial={false}
          whileHover={
            reduce
              ? undefined
              : { scale: 1.12, y: -4, boxShadow: "0 12px 40px -8px rgba(0, 51, 102, 0.5)" }
          }
          whileTap={reduce ? undefined : { scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
}
