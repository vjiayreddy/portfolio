"use client";

import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";

export function PageContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ScrollReveal>
      <div className={cn("mx-auto max-w-3xl px-6 py-24", className)}>
        {children}
      </div>
    </ScrollReveal>
  );
}
