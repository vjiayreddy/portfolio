import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HeroAvatar } from "@/components/home/HeroAvatar";
import { HeroBackground } from "@/components/home/HeroBackground";
import { HeroSocialLinks } from "@/components/home/HeroSocialLinks";
import type { SiteConfig } from "@/types";

interface HeroSectionProps {
  site: SiteConfig;
}

function EnvelopeIcon() {
  return (
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function HeroSection({ site }: HeroSectionProps) {
  const { hero } = site;

  return (
    <section
      className="relative flex min-h-[480px] items-center justify-center overflow-hidden bg-background py-16 md:min-h-[540px] md:py-20 lg:py-24 dark:bg-[#141414]"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at center, rgba(255,255,255,0.06) 0%, transparent 70%)",
      }}
    >
      <HeroBackground />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.03)_0%,transparent_70%)] dark:hidden"
        aria-hidden="true"
      />
      <Container className="relative z-10 flex w-full flex-col items-center justify-center text-center">
        <HeroAvatar name={site.name} avatarSrc={hero.avatar} />

        <h1 className="mx-auto max-w-2xl text-2xl font-semibold leading-snug tracking-tight text-foreground md:text-3xl lg:text-4xl">
          {hero.headline.before}
          <span className="text-primary">
            {hero.headline.highlight}
          </span>
          {hero.headline.after}
        </h1>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:bg-white dark:text-neutral-900"
          >
            <EnvelopeIcon />
            Contact me
          </Link>
          <HeroSocialLinks social={site.social} />
        </div>
      </Container>
    </section>
  );
}
