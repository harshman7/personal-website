"use client";

import { motion, useReducedMotion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import { SectionShell } from "./SectionShell";
import { SectionTitle } from "./SectionTitle";
import { SkillBar } from "./SkillBar";
import { SKILL_CATEGORY_LABELS, type Skill, type SkillCategory } from "@/lib/types";

const CATEGORY_ORDER: SkillCategory[] = [
  "frontend",
  "backend",
  "database",
  "cloud",
  "tools",
  "other",
];

export function SkillsSection({ byCategory }: { byCategory: Record<SkillCategory, Skill[]> }) {
  const reduce = useReducedMotion();

  return (
    <SectionShell id="skills" className="bg-[#0f0f0f]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionTitle>Skills</SectionTitle>
        <StaggerContainer className="flex flex-col gap-12 md:gap-16" stagger={0.12}>
          {CATEGORY_ORDER.map((cat) => {
            const list = byCategory[cat] ?? [];
            if (list.length === 0) return null;
            return (
              <StaggerItem key={cat}>
                <motion.div
                  whileHover={reduce ? undefined : { y: -6 }}
                  className="rounded-2xl border border-dark-border bg-dark-card p-7 shadow-lg transition-shadow duration-300 hover:border-primary/30 hover:shadow-[0_20px_48px_-20px_rgba(0,33,71,0.42)] md:p-8"
                >
                  <h3 className="mb-6 flex items-center text-xl font-semibold text-white md:text-2xl">
                    <span
                      className="mr-3 h-3 w-3 rounded-full bg-gradient-to-br from-primary to-tertiary shadow-[0_0_12px_rgba(0,51,102,0.6)]"
                      aria-hidden
                    />
                    {SKILL_CATEGORY_LABELS[cat]}
                  </h3>
                  <div className="space-y-5">
                    {list.map((skill) => (
                      <div
                        key={skill.name}
                        className="rounded-lg p-0.5 transition hover:bg-white/[0.02]"
                      >
                        <div className="mb-2 flex justify-between text-sm">
                          <span className="font-medium text-gray-300">{skill.name}</span>
                          <span className="text-gray-500">{skill.proficiency}/5</span>
                        </div>
                        <SkillBar proficiency={skill.proficiency} />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </SectionShell>
  );
}
