"use client";

import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useCallback, useRef, forwardRef } from "react";
import { getProjectBrand, projectInitials } from "@/lib/project-branding";
import { truncateWords } from "@/lib/strings";
import type { Project } from "@/lib/types";

const TILT = 7;
const spring = { stiffness: 280, damping: 24, mass: 0.4 };

const CardBody = forwardRef(function CardBody(
  {
    project,
    className = "",
    style,
    onMouseMove,
    onMouseLeave,
    reduce,
    ...rest
  }: {
    project: Project;
    className?: string;
    style?: React.ComponentProps<typeof motion.article>["style"];
    onMouseMove?: (e: React.MouseEvent) => void;
    onMouseLeave?: () => void;
    reduce?: boolean;
  },
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const brand = getProjectBrand(project);
  const Icon = brand.Icon;
  const initials = projectInitials(project);
  return (
    <motion.article
      ref={ref}
      className={[
        "group relative overflow-hidden rounded-2xl border border-dark-border bg-dark-card shadow-xl",
        "will-change-transform",
        "hover:border-primary/30 hover:shadow-[0_32px_80px_-28px_rgba(0,33,71,0.55)] hover:ring-1 hover:ring-primary/15",
        reduce ? "transition-shadow transition-transform duration-300 hover:-translate-y-0.5" : "transition-shadow duration-300",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ transformStyle: "preserve-3d", ...style }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 transition duration-500 ease-out group-hover:translate-x-[100%] group-hover:opacity-100"
        aria-hidden
      />
      <div className="relative z-[1] flex flex-col gap-6 p-6 md:flex-row md:gap-8 md:p-8">
        <div className="flex shrink-0 flex-row items-start gap-4 md:flex-col md:items-stretch">
          <div
            className={[
              "flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg ring-2",
              brand.from,
              brand.to,
              brand.ring,
            ].join(" ")}
          >
            <Icon className="h-9 w-9 text-white drop-shadow-md" aria-hidden />
            <span className="sr-only">{project.title}</span>
          </div>
          <p className="text-center text-[0.65rem] font-semibold tracking-widest text-white/50 md:pt-1">
            {initials}
          </p>
          {project.imageSrc ? (
            <div className="relative h-24 w-40 overflow-hidden rounded-xl border border-white/10 md:h-28 md:w-44">
              <Image
                src={project.imageSrc}
                alt=""
                fill
                sizes="(max-width: 768px) 200px, 360px"
                className="object-cover transition duration-700 ease-out group-hover:scale-105"
              />
            </div>
          ) : null}
        </div>

        <div className="min-w-0 flex-1">
          {!project.imageSrc ? (
            <div
              className={[
                "mb-4 flex h-32 w-full items-center justify-center md:hidden",
                "rounded-xl border border-white/5 bg-gradient-to-br",
                brand.from,
                brand.to,
              ].join(" ")}
            >
              <Icon className="h-12 w-12 text-white/90" aria-hidden />
            </div>
          ) : null}

          <h3 className="mb-2 text-xl font-bold text-white transition group-hover:text-sky-200 md:text-2xl">
            {project.title}
          </h3>
          <p className="mb-3 text-sm text-gray-500">{project.projectDate}</p>
          <p className="mb-5 text-sm leading-relaxed text-gray-300 md:text-base">
            {truncateWords(project.description, 32)}
          </p>
          <div className="mb-5 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-dark-border/80 bg-[#141414] px-3 py-1 text-xs text-gray-300 transition duration-200 group-hover:border-primary/35 group-hover:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
          {project.features.length > 0 ? (
            <ul className="mb-6 list-inside list-disc space-y-2 text-sm text-gray-400">
              {project.features.slice(0, 4).map((f, i) => (
                <li key={`${project.title}-feat-${i}`}>{f}</li>
              ))}
            </ul>
          ) : null}
          <div className="flex flex-wrap gap-3 pt-1">
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
      </div>
    </motion.article>
  );
});

CardBody.displayName = "ProjectCardBody";

function ProjectCardInteractive({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width);
      my.set((e.clientY - r.top) / r.height);
    },
    [mx, my]
  );

  const onLeave = useCallback(() => {
    mx.set(0.5);
    my.set(0.5);
  }, [mx, my]);

  const rX = useSpring(useTransform(my, [0, 1], [TILT, -TILT]), spring);
  const rY = useSpring(useTransform(mx, [0, 1], [-TILT, TILT]), spring);

  return (
    <div className="[perspective:1200px]">
      <CardBody
        ref={ref}
        project={project}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: rX, rotateY: rY }}
        reduce={false}
      />
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <CardBody project={project} reduce />;
  }
  return <ProjectCardInteractive project={project} />;
}
