"use client";

import { Button } from "@/components/ui/Button";

export function BackToTop() {
  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="text-muted hover:text-primary"
    >
      Back to top
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </Button>
  );
}
