"use client";

import { Award, ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import { SectionShell } from "./SectionShell";
import { SectionTitle } from "./SectionTitle";
import type { Certification } from "@/lib/types";

export function CertificationsSection({ items }: { items: Certification[] }) {
  const reduce = useReducedMotion();
  if (items.length === 0) return null;
  return (
    <SectionShell className="bg-[#0f0f0f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle>Certifications</SectionTitle>
        <StaggerContainer className="grid gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16" stagger={0.12}>
          {items.map((cert) => (
            <StaggerItem key={cert.name}>
              <motion.div
                whileHover={reduce ? undefined : { y: -8 }}
                className="group h-full rounded-2xl border border-dark-border bg-dark-card p-7 shadow-lg transition duration-300 hover:border-primary/35 hover:shadow-[0_24px_50px_-20px_rgba(0,33,71,0.4)]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <Award className="h-9 w-9 text-sky-400 transition group-hover:scale-110 group-hover:text-sky-300" aria-hidden />
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 transition hover:scale-110 hover:text-white"
                      aria-label="Open credential"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white transition group-hover:text-sky-100 md:text-xl">{cert.name}</h3>
                {cert.issuer ? <p className="mb-1 text-sm text-gray-400">{cert.issuer}</p> : null}
                {cert.issueDate ? <p className="text-sm text-gray-500">{cert.issueDate}</p> : null}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionShell>
  );
}
