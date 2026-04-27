"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SocialIconLinks } from "./SocialIconLinks";
import type { Profile } from "@/lib/types";

const ease = [0.22, 1, 0.36, 1] as const;

function GradientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -left-20 top-1/4 h-72 w-72 animate-pulse rounded-full bg-primary/20 blur-[80px]" />
      <div className="absolute right-0 top-1/2 h-96 w-96 animate-pulse rounded-full bg-secondary/20 blur-[100px] [animation-delay:1s]" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-tertiary/15 blur-[90px]" />
    </div>
  );
}

const heroContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.12 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease },
  },
};

export function Hero({ profile }: { profile: Profile }) {
  const initial = profile.fullName.slice(0, 1).toUpperCase();
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="gradient-bg relative flex min-h-[100svh] items-center justify-center pt-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:50px_50px]"
        aria-hidden
      />
      <GradientOrbs />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        {reduce ? (
          <StaticHero profile={profile} initial={initial} />
        ) : (
          <motion.div
            className="flex flex-col items-center"
            initial="hidden"
            animate="visible"
            variants={heroContainer}
          >
            <motion.div variants={heroItem} className="mb-10 flex justify-center">
              {profile.profileImageSrc ? (
                <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl ring-1 ring-white/10">
                  <Image
                    src={profile.profileImageSrc}
                    alt={profile.fullName}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover object-top"
                    priority
                  />
                </div>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="flex h-40 w-40 cursor-default items-center justify-center rounded-full border-4 border-white/20 bg-gradient-to-br from-primary via-secondary to-tertiary text-5xl font-bold text-white shadow-2xl ring-1 ring-sky-500/20"
                >
                  {initial}
                </motion.div>
              )}
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="mb-5 max-w-4xl text-5xl font-bold tracking-tight text-white drop-shadow-sm md:text-7xl lg:text-8xl"
            >
              {profile.fullName}
            </motion.h1>
            <motion.p variants={heroItem} className="mb-3 text-2xl text-gray-300 md:text-3xl">
              <span className="bg-gradient-to-r from-sky-200 to-sky-400 bg-clip-text text-transparent">
                {profile.tagline}
              </span>
            </motion.p>
            <motion.p variants={heroItem} className="mb-12 text-lg text-gray-400 md:text-xl">
              {profile.location}
            </motion.p>

            <motion.div variants={heroItem} className="mb-12">
              <SocialIconLinks profile={profile} />
            </motion.div>

            <motion.div variants={heroItem}>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block rounded-full bg-gradient-to-r from-primary to-secondary px-12 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/30 ring-1 ring-white/10 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/40"
              >
                Explore My Work
              </motion.a>
            </motion.div>

            <motion.div variants={heroItem} className="mt-20">
              <motion.a
                href="#about"
                className="inline-flex text-gray-400"
                aria-label="Scroll to about"
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              >
                <ChevronDown className="h-8 w-8" />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function StaticHero({ profile, initial }: { profile: Profile; initial: string }) {
  return (
    <div className="flex flex-col items-center">
      {profile.profileImageSrc ? (
        <div className="mb-10 h-40 w-40 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl">
          <Image
            src={profile.profileImageSrc}
            alt={profile.fullName}
            width={160}
            height={160}
            className="h-full w-full object-cover object-top"
            priority
          />
        </div>
      ) : (
        <div className="mb-10 flex h-40 w-40 items-center justify-center rounded-full border-4 border-white/20 bg-gradient-to-br from-primary via-secondary to-tertiary text-5xl font-bold text-white">
          {initial}
        </div>
      )}
      <h1 className="mb-5 max-w-4xl text-5xl font-bold text-white md:text-7xl lg:text-8xl">{profile.fullName}</h1>
      <p className="mb-3 text-2xl text-gray-300 md:text-3xl">
        <span className="bg-gradient-to-r from-sky-200 to-sky-400 bg-clip-text text-transparent">{profile.tagline}</span>
      </p>
      <p className="mb-12 text-lg text-gray-400 md:text-xl">{profile.location}</p>
      <SocialIconLinks profile={profile} className="mb-12" />
      <a
        href="#about"
        className="mb-20 inline-block rounded-full bg-gradient-to-r from-primary to-secondary px-12 py-4 text-lg font-semibold text-white shadow-lg"
      >
        Explore My Work
      </a>
      <a href="#about" className="text-gray-400" aria-label="Scroll to about">
        <ChevronDown className="h-8 w-8" />
      </a>
    </div>
  );
}
