import type { ReactNode } from "react";

const variants = {
  default: "py-32 md:py-44 lg:py-56",
  /** Slightly less vertical padding for dense blocks */
  tight: "py-24 md:py-36 lg:py-44",
} as const;

export function SectionShell({
  id,
  children,
  className = "",
  variant = "default",
  as: Tag = "section",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variants;
  as?: "section" | "div";
}) {
  return (
    <Tag id={id} className={`${variants[variant]} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
