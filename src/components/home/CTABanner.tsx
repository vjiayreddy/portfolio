import Link from "next/link";
import { buttonClassName } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { SiteConfig } from "@/types";

export function CTABanner({ site }: { site: SiteConfig }) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-background to-accent/10 px-6 py-12 text-center md:px-12 md:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.12),transparent_45%)]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Let&apos;s build something great together
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Open to full-time roles, freelance projects, and technical
              collaborations. Reach out at{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-primary hover:underline"
              >
                {site.email}
              </a>
              .
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={buttonClassName({ variant: "primary", size: "lg" })}
              >
                Get In Touch
              </Link>
              <Link
                href="/resume"
                className={buttonClassName({ variant: "outline", size: "lg" })}
              >
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
