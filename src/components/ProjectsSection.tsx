"use client";

import { Code, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import { SectionTitle } from "./SectionTitle";
import { truncateWords } from "@/lib/strings";
import type { Project } from "@/lib/types";

function sortedProjects(items: Project[]) {
  return items.slice().sort((a, b) => b.order - a.order);
}

export function ProjectsSection({ items }: { items: Project[] }) {
  const list = sortedProjects(items);
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="bg-dark-bg py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle>Projects</SectionTitle>
        <StaggerContainer
          className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12"
          stagger={0.11}
        >
          {list.length === 0 ? (
            <p className="col-span-full text-center text-gray-400">Projects information coming soon.</p>
          ) : (
            list.map((project) => (
              <StaggerItem key={project.title}>
                <motion.article
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-dark-border bg-dark-card shadow-xl"
                  whileHover={
                    reduce
                      ? undefined
                      : {
                          y: -14,
                          rotateX: 2,
                          transition: { type: "spring", stiffness: 320, damping: 22 },
                        }
                  }
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {project.imageSrc ? (
                    <div className="relative h-52 w-full overflow-hidden">
                      <Image
                        src={project.imageSrc}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                    </div>
                  ) : (
                    <div className="relative flex h-52 w-full items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-tertiary">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_50%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                      <Code className="relative h-16 w-16 text-white/90 drop-shadow-md transition duration-500 group-hover:scale-110 group-hover:rotate-6" aria-hidden />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="mb-2 text-lg font-bold text-white transition group-hover:text-sky-200 md:text-xl">
                      {project.title}
                    </h3>
                    <p className="mb-3 text-sm text-gray-500">{project.projectDate}</p>
                    <p className="mb-5 text-sm leading-relaxed text-gray-300 md:text-base">
                      {truncateWords(project.description, 20)}
                    </p>
                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-dark-border/80 bg-[#141414] px-3 py-1 text-xs text-gray-300 transition duration-200 group-hover:border-primary/30 group-hover:text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.features.length > 0 ? (
                      <ul className="mb-6 list-inside list-disc space-y-2 text-sm text-gray-400">
                        {project.features.slice(0, 3).map((f, i) => (
                          <li key={`${project.title}-feat-${i}`}>{f}</li>
                        ))}
                      </ul>
                    ) : null}
                    <div className="mt-auto flex flex-wrap gap-3 pt-2">
                      {project.githubUrl ? (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex min-h-[2.5rem] flex-1 items-center justify-center gap-1.5 rounded-lg border border-dark-border bg-[#1a1a1a] px-3 py-2.5 text-center text-sm text-white"
                          whileHover={reduce ? undefined : { scale: 1.04 }}
                          whileTap={reduce ? undefined : { scale: 0.98 }}
                        >
                          <SiGithub className="h-4 w-4" />
                          GitHub
                        </motion.a>
                      ) : null}
                      {project.liveUrl ? (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex min-h-[2.5rem] flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-primary to-secondary px-3 py-2.5 text-center text-sm font-medium text-white shadow-md shadow-primary/25"
                          whileHover={reduce ? undefined : { scale: 1.04 }}
                          whileTap={reduce ? undefined : { scale: 0.98 }}
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live
                        </motion.a>
                      ) : null}
                    </div>
                  </div>
                </motion.article>
              </StaggerItem>
            ))
          )}
        </StaggerContainer>
      </div>
    </section>
  );
}
