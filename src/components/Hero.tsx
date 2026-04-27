"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { SocialIconLinks } from "./SocialIconLinks";
import { heroContainerVariants, heroItemVariants } from "@/lib/motion";
import type { Profile } from "@/lib/types";

function GradientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -left-20 top-1/4 h-72 w-72 animate-pulse rounded-full bg-primary/20 blur-[80px]" />
      <div className="absolute right-0 top-1/2 h-96 w-96 animate-pulse rounded-full bg-secondary/20 blur-[100px] [animation-delay:1s]" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-tertiary/15 blur-[90px]" />
    </div>
  );
}

const gridClassName =
  "pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:50px_50px]";

export function Hero({ profile }: { profile: Profile }) {
  const initial = profile.fullName.slice(0, 1).toUpperCase();
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const orbsY = useTransform(scrollY, [0, 600], [0, 120]);
  const gridY = useTransform(scrollY, [0, 600], [0, 45]);
  const chevronOpacity = useTransform(scrollY, [0, 220], [1, 0.25]);

  return (
    <section
      id="home"
      className="gradient-bg relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-20"
    >
      {reduce ? (
        <>
          <div className={gridClassName} aria-hidden />
          <GradientOrbs />
        </>
      ) : (
        <>
          <motion.div className={gridClassName} style={{ y: gridY }} aria-hidden />
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{ y: orbsY }}
            aria-hidden
          >
            <GradientOrbs />
          </motion.div>
        </>
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 sm:py-36 lg:px-8 lg:py-40">
        {reduce ? (
          <StaticHero profile={profile} initial={initial} />
        ) : (
          <motion.div
            className="flex flex-col items-center"
            initial="hidden"
            animate="visible"
            variants={heroContainerVariants}
          >
            <motion.div variants={heroItemVariants} className="mb-12 flex justify-center">
              {profile.profileImageSrc ? (
                <div className="relative h-52 w-52 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl ring-1 ring-white/10 md:h-56 md:w-56">
                  <Image
                    src={profile.profileImageSrc}
                    alt={profile.fullName}
                    width={224}
                    height={224}
                    className="h-full w-full object-cover object-top"
                    priority
                  />
                </div>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="flex h-52 w-52 cursor-default items-center justify-center rounded-full border-4 border-white/20 bg-gradient-to-br from-primary via-secondary to-tertiary text-6xl font-bold text-white shadow-2xl ring-1 ring-sky-500/20 md:h-56 md:w-56 md:text-7xl"
                >
                  {initial}
                </motion.div>
              )}
            </motion.div>

            <motion.h1
              variants={heroItemVariants}
              className="font-display mb-6 max-w-4xl text-5xl font-bold tracking-tight text-white drop-shadow-sm md:mb-8 md:text-7xl lg:text-8xl"
            >
              {profile.fullName}
            </motion.h1>
            <motion.p variants={heroItemVariants} className="mb-4 text-2xl text-gray-300 md:mb-5 md:text-3xl">
              <span className="bg-gradient-to-r from-sky-200 to-sky-400 bg-clip-text text-transparent">
                {profile.tagline}
              </span>
            </motion.p>
            <motion.p variants={heroItemVariants} className="mb-14 text-lg text-gray-400 md:mb-16 md:text-xl">
              {profile.location}
            </motion.p>

            <motion.div variants={heroItemVariants} className="mb-14 md:mb-16">
              <SocialIconLinks profile={profile} />
            </motion.div>

            <motion.div variants={heroItemVariants}>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block rounded-full bg-gradient-to-r from-primary to-secondary px-12 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/30 ring-1 ring-white/10 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/40"
              >
                Explore My Work
              </motion.a>
            </motion.div>

            <motion.div variants={heroItemVariants} className="mt-24 md:mt-28">
              <motion.a
                href="#about"
                className="inline-flex text-gray-400"
                aria-label="Scroll to about"
                style={{ opacity: chevronOpacity }}
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
        <div className="mb-12 h-52 w-52 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl md:h-56 md:w-56">
          <Image
            src={profile.profileImageSrc}
            alt={profile.fullName}
            width={224}
            height={224}
            className="h-full w-full object-cover object-top"
            priority
          />
        </div>
      ) : (
        <div className="mb-12 flex h-52 w-52 items-center justify-center rounded-full border-4 border-white/20 bg-gradient-to-br from-primary via-secondary to-tertiary text-6xl font-bold text-white md:h-56 md:w-56 md:text-7xl">
          {initial}
        </div>
      )}
      <h1 className="font-display mb-6 max-w-4xl text-5xl font-bold text-white md:mb-8 md:text-7xl lg:text-8xl">
        {profile.fullName}
      </h1>
      <p className="mb-4 text-2xl text-gray-300 md:mb-5 md:text-3xl">
        <span className="bg-gradient-to-r from-sky-200 to-sky-400 bg-clip-text text-transparent">{profile.tagline}</span>
      </p>
      <p className="mb-14 text-lg text-gray-400 md:mb-16 md:text-xl">{profile.location}</p>
      <SocialIconLinks profile={profile} className="mb-14 md:mb-16" />
      <a
        href="#about"
        className="mb-24 inline-block rounded-full bg-gradient-to-r from-primary to-secondary px-12 py-4 text-lg font-semibold text-white shadow-lg md:mb-28"
      >
        Explore My Work
      </a>
      <a href="#about" className="text-gray-400" aria-label="Scroll to about">
        <ChevronDown className="h-8 w-8" />
      </a>
    </div>
  );
}
