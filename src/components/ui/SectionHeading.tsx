"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number?: string;
  label: string;
  title: string;
  className?: string;
  /** Heading level for the title. Defaults to "h2". Use "h1" for page titles. */
  as?: "h1" | "h2";
}

export function SectionHeading({
  number,
  label,
  title,
  className,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 md:mb-14", className)}>
      {label && (
        <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">
          {label}
        </p>
      )}
      <Heading className="text-3xl md:text-4xl font-bold text-foreground">
        {number && (
          <span className="text-accent/60 mr-3 font-mono">{number}</span>
        )}
        {title}
      </Heading>
    </div>
  );
}

