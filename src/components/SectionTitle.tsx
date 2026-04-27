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
    <StaggerContainer className={`mb-16 text-center md:mb-24 ${className}`}>
      <StaggerItem>
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          {children}
        </h2>
      </StaggerItem>
      <StaggerItem>
        <div
          className="mx-auto mt-6 h-1.5 w-28 rounded-full bg-gradient-to-r from-primary via-secondary to-tertiary shadow-[0_0_24px_rgba(0,51,102,0.45)]"
          aria-hidden
        />
      </StaggerItem>
    </StaggerContainer>
  );
}
