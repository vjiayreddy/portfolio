"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { navItems } from "@/lib/navigation";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  menuTriggerRef?: React.RefObject<HTMLButtonElement | null>;
}

export function MobileMenu({ open, onClose, menuTriggerRef }: MobileMenuProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  const handleClose = useCallback(() => {
    onClose();
    menuTriggerRef?.current?.focus();
  }, [onClose, menuTriggerRef]);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, handleClose]);

  if (!open || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] md:hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-menu-title"
    >
      <button
        type="button"
        aria-label="Close menu"
        className="absolute inset-0 z-0 bg-background/80 backdrop-blur-sm"
        onClick={handleClose}
      />
      <div className="absolute inset-y-0 right-0 z-10 flex h-dvh min-h-0 w-full max-w-sm flex-col border-l border-border bg-background shadow-xl">
        <div className="flex shrink-0 items-center justify-between border-b border-border px-6 py-4">
          <span id="mobile-menu-title" className="text-sm font-medium text-muted">
            Menu
          </span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={handleClose}
            aria-label="Close navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/50 transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav
          className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto p-4"
          aria-label="Mobile navigation"
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
                onClick={handleClose}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-lg px-4 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-secondary"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>,
    document.body
  );
}
