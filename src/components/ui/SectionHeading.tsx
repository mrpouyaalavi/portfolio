"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number?: string;
  label: string;
  title: string;
  className?: string;
}

export function SectionHeading({ number, label, title, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 md:mb-14", className)}>
      {label && (
        <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        {number && (
          <span className="text-accent/60 mr-3 font-mono">{number}</span>
        )}
        {title}
      </h2>
    </div>
  );
}

