"use client";

import { MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import { SectionTitle } from "./SectionTitle";
import type { WorkExperience } from "@/lib/types";

function sortedExperience(items: WorkExperience[]) {
  return items.slice().sort((a, b) => b.order - a.order);
}

export function ExperienceSection({ items }: { items: WorkExperience[] }) {
  const list = sortedExperience(items);
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="bg-dark-bg py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle>Work Experience</SectionTitle>
        <StaggerContainer className="space-y-12 md:space-y-16">
          {list.length === 0 ? (
            <p className="text-center text-gray-400">Work experience information coming soon.</p>
          ) : (
            list.map((exp) => (
              <StaggerItem key={`${exp.company}-${exp.startDate}`}>
                <motion.article
                  whileHover={
                    reduce
                      ? undefined
                      : {
                          y: -8,
                          transition: { type: "spring", stiffness: 300, damping: 24 },
                        }
                  }
                  className="group rounded-2xl border border-dark-border border-l-[5px] !border-l-primary bg-dark-card p-8 shadow-xl transition-shadow duration-500 hover:shadow-[0_28px_60px_-24px_rgba(0,33,71,0.5)] md:p-10"
                >
                  <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    <div>
                      <h3 className="mb-2 text-2xl font-bold text-white transition-colors group-hover:text-sky-200 md:text-3xl">
                        {exp.position}
                      </h3>
                      <p className="mb-2 text-xl font-semibold text-sky-300/90 md:text-2xl">{exp.company}</p>
                      <p className="text-gray-400">
                        <MapPin className="mr-1 inline h-4 w-4" aria-hidden />
                        {exp.location}
                      </p>
                    </div>
                    <div>
                      <span className="inline-block rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/20">
                        {exp.startDate} – {exp.isCurrent ? "Present" : exp.endDate}
                      </span>
                    </div>
                  </div>
                  <p className="mb-6 text-base leading-[1.8] text-gray-300 md:text-lg">{exp.description}</p>
                  {exp.achievements.length > 0 ? (
                    <div>
                      <h4 className="mb-4 text-lg font-semibold text-white">Key Achievements</h4>
                      <ul className="space-y-3 md:space-y-4">
                        {exp.achievements.map((a) => (
                          <li
                            key={a}
                            className="flex items-start gap-3 text-gray-300 transition-colors duration-200 hover:text-gray-200"
                          >
                            <span className="mt-0.5 font-bold text-sky-500">▸</span>
                            <span className="leading-relaxed">{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </motion.article>
              </StaggerItem>
            ))
          )}
        </StaggerContainer>
      </div>
    </section>
  );
}
