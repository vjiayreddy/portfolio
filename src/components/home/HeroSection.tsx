import Link from "next/link";
import { buttonClassName } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { SiteConfig } from "@/types";

export function HeroSection({ site }: { site: SiteConfig }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.12),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_55%)]"
      />
      <Container className="relative py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-sm text-muted">
            {site.location}
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {site.name}
            </span>
          </h1>
          <p className="mb-3 text-xl font-medium text-foreground md:text-2xl">
            {site.title}
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {site.tagline}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/projects"
              className={buttonClassName({ variant: "primary", size: "lg" })}
            >
              View Projects
            </Link>
            <Link
              href="/resume"
              className={buttonClassName({ variant: "outline", size: "lg" })}
            >
              Download Resume
            </Link>
            <Link
              href="/contact"
              className={buttonClassName({ variant: "ghost", size: "lg" })}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
