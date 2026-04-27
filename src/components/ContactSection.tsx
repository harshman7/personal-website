"use client";

import { Mail, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import { SectionShell } from "./SectionShell";
import { SectionTitle } from "./SectionTitle";
import { SocialIconLinks } from "./SocialIconLinks";
import type { Profile } from "@/lib/types";

export function ContactSection({ profile }: { profile: Profile }) {
  const reduce = useReducedMotion();
  return (
    <SectionShell id="contact" className="bg-dark-bg">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <SectionTitle>Get In Touch</SectionTitle>
        <StaggerContainer className="flex flex-col items-center" stagger={0.15}>
          <StaggerItem>
            <p className="mx-auto mb-14 max-w-2xl text-lg leading-[1.85] text-gray-300 md:text-xl">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of
              your visions.
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="mb-12">
              <SocialIconLinks profile={profile} />
            </div>
          </StaggerItem>
          {profile.email ? (
            <StaggerItem>
              <div className="mb-2 flex flex-col items-center gap-4 text-gray-300 sm:flex-row sm:justify-center sm:gap-10">
                <motion.a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 transition"
                  whileHover={reduce ? undefined : { scale: 1.05, color: "#fff" }}
                >
                  <Mail className="h-4 w-4" />
                  {profile.email}
                </motion.a>
                {profile.phone ? (
                  <motion.a
                    href={`tel:${profile.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 transition"
                    whileHover={reduce ? undefined : { scale: 1.05, color: "#fff" }}
                  >
                    <Phone className="h-4 w-4" />
                    {profile.phone}
                  </motion.a>
                ) : null}
              </div>
            </StaggerItem>
          ) : null}
        </StaggerContainer>
      </div>
    </SectionShell>
  );
}
