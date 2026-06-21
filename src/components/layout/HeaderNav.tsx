"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { navItems } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

export function HeaderNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <nav
        className="hidden items-center gap-1 md:flex"
        aria-label="Main navigation"
      >
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted hover:bg-secondary hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-2 md:gap-3">
        <ThemeToggle />
        <button
          ref={menuTriggerRef}
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu-title"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/50 transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 5h16M4 12h16M4 19h16" />
          </svg>
        </button>
      </div>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        menuTriggerRef={menuTriggerRef}
      />
    </>
  );
}
