"use client";

import Link from "next/link";
import { buttonClassName } from "@/components/ui/Button";

export function ResumeActions() {
  return (
    <div className="flex flex-wrap gap-3 print:hidden">
      <Link
        href="/resume/resume.pdf"
        download
        className={buttonClassName({ variant: "primary" })}
      >
        Download PDF
      </Link>
      <button
        type="button"
        onClick={() => window.print()}
        className={buttonClassName({ variant: "outline" })}
      >
        Print Resume
      </button>
    </div>
  );
}
