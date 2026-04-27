"use client";

import type { ReactNode } from "react";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <StaggerContainer
      className={`mb-20 text-center md:mb-32 ${className}`}
      stagger={0.12}
      delayChildren={0.06}
    >
      <StaggerItem>
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          {children}
        </h2>
      </StaggerItem>
      <StaggerItem>
        <div
          className="mx-auto mt-8 h-1.5 w-32 rounded-full bg-gradient-to-r from-primary via-secondary to-tertiary shadow-[0_0_28px_rgba(0,51,102,0.5)] md:mt-10"
          aria-hidden
        />
      </StaggerItem>
    </StaggerContainer>
  );
}
