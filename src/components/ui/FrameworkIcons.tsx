import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type FrameworkIconKey =
  | "react"
  | "nextjs"
  | "typescript"
  | "tailwind"
  | "nodejs"
  | "graphql"
  | "vercel"
  | "git";

const icons: Record<FrameworkIconKey, ReactNode> = {
  react: (
    <>
      <circle cx="12" cy="12" r="2.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        transform="rotate(120 12 12)"
      />
    </>
  ),
  nextjs: (
    <>
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M8 8.5v7l4.5-4.05L17 15.5V8.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  typescript: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M9 9h2.2c1.4 0 2.3.8 2.3 2s-.9 2-2.3 2H10v3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 9v6.5M15 9h3M15 12h2.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  tailwind: (
    <path
      d="M12 6c-2.8 0-4.5 1.4-5 4.2 1-1.4 2.2-1.9 3.5-1.6 0.8 0.2 1.3 0.6 1.9 1.1 1 0.9 2.1 2 4.6 2 2.8 0 4.5-1.4 5-4.2-1 1.4-2.2 1.9-3.5 1.6-0.8-0.2-1.3-0.6-1.9-1.1-1-0.9-2.1-2-4.6-2zm-5 6.8c-2.8 0-4.5 1.4-5 4.2 1-1.4 2.2-1.9 3.5-1.6 0.8 0.2 1.3 0.6 1.9 1.1 1 0.9 2.1 2 4.6 2 2.8 0 4.5-1.4 5-4.2-1 1.4-2.2 1.9-3.5 1.6-0.8-0.2-1.3-0.6-1.9-1.1-1-0.9-2.1-2-4.6-2z"
      fill="currentColor"
    />
  ),
  nodejs: (
    <>
      <path
        d="M12 2 4 6.5v11L12 22l8-4.5v-11L12 2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12.2c0-1.2 1-1.8 2.5-1.8s2.5.6 2.5 1.8-1 1.8-2.5 1.8-2.5-.6-2.5-1.8zm5 2.8v-5.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </>
  ),
  graphql: (
    <>
      <path
        d="M12 3l7.8 4.5v9L12 21l-7.8-4.5v-9L12 3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="5" r="1.2" />
      <circle cx="17" cy="14.5" r="1.2" />
      <circle cx="7" cy="14.5" r="1.2" />
    </>
  ),
  vercel: (
    <path d="M12 4 20 20H4L12 4z" fill="currentColor" />
  ),
  git: (
    <>
      <circle cx="8" cy="8" r="1.8" />
      <circle cx="16" cy="12" r="1.8" />
      <circle cx="8" cy="16" r="1.8" />
      <path
        d="M8 9.8v4.4M9.8 8h4.4M9.8 16h4.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </>
  ),
};

export function FrameworkIcon({
  icon,
  size = 28,
  className,
}: {
  icon: FrameworkIconKey;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={cn("text-primary/80", className)}
    >
      {icons[icon]}
    </svg>
  );
}
