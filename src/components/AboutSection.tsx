"use client";

import { MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import { SectionTitle } from "./SectionTitle";
import type { Education, Profile } from "@/lib/types";

const cardHover =
  "rounded-2xl border border-dark-border bg-dark-card p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_24px_50px_-20px_rgba(0,33,71,0.45)]";

export function AboutSection({
  profile,
  education,
}: {
  profile: Profile;
  education: Education[];
}) {
  const reduce = useReducedMotion();
  const sorted = education.slice().sort((a, b) => a.order - b.order);

  return (
    <section id="about" className="bg-[#0f0f0f] py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle>About Me</SectionTitle>
        <StaggerContainer className="grid items-start gap-16 md:gap-20 lg:grid-cols-2">
          <StaggerItem>
            <motion.div
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className={cardHover}
            >
              <p className="text-lg leading-[1.85] text-gray-300 md:text-xl">{profile.bio}</p>
            </motion.div>
          </StaggerItem>
          <div>
            <h3 className="mb-8 text-2xl font-semibold text-white md:text-3xl">Education</h3>
            <StaggerContainer className="space-y-8" stagger={0.12}>
              {sorted.length === 0 ? (
                <p className="text-gray-400">Education information coming soon.</p>
              ) : (
                sorted.map((edu) => (
                  <StaggerItem key={edu.institution}>
                    <motion.div
                      whileHover={reduce ? undefined : { y: -4 }}
                      className="rounded-2xl border border-dark-border bg-dark-card p-7 shadow-lg transition-all duration-300 hover:border-primary/30 hover:shadow-[0_20px_40px_-20px_rgba(0,33,71,0.4)]"
                    >
                      <h4 className="mb-2 text-xl font-semibold text-white md:text-2xl">{edu.institution}</h4>
                      <p className="mb-1 font-medium text-gray-300">
                        {edu.degree}
                        {edu.major ? ` — ${edu.major}` : ""}
                      </p>
                      <p className="mb-2 text-sm text-gray-400">
                        {edu.graduationDate}
                        {edu.gpa != null ? ` | GPA: ${edu.gpa}/4.0` : ""}
                      </p>
                      <p className="text-sm text-gray-400">
                        <MapPin className="mr-1 inline h-4 w-4" aria-hidden />
                        {edu.location}
                      </p>
                      {edu.description ? <p className="mt-4 text-sm leading-relaxed text-gray-300">{edu.description}</p> : null}
                    </motion.div>
                  </StaggerItem>
                ))
              )}
            </StaggerContainer>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
