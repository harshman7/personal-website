"use client";

import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import { ProjectCard } from "./ProjectCard";
import { SectionShell } from "./SectionShell";
import { SectionTitle } from "./SectionTitle";
import type { Project } from "@/lib/types";

function sortedProjects(items: Project[]) {
  return items.slice().sort((a, b) => b.order - a.order);
}

export function ProjectsSection({ items }: { items: Project[] }) {
  const list = sortedProjects(items);

  return (
    <SectionShell id="projects" className="bg-dark-bg">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionTitle>Projects</SectionTitle>
        <StaggerContainer className="flex flex-col gap-12 md:gap-16" stagger={0.14}>
          {list.length === 0 ? (
            <p className="w-full text-center text-gray-400">Projects information coming soon.</p>
          ) : (
            list.map((project) => (
              <StaggerItem key={project.title}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))
          )}
        </StaggerContainer>
      </div>
    </SectionShell>
  );
}
