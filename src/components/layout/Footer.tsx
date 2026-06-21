import Link from "next/link";
import { getSiteConfig } from "@/lib/content";
import { navItems } from "@/lib/navigation";
import { Container } from "@/components/ui/Container";
import { SocialIcon, socialLabels, type SocialIconKey } from "@/components/ui/SocialIcons";
import { BackToTop } from "./BackToTop";

export function Footer() {
  const site = getSiteConfig();
  const year = new Date().getFullYear();

  const socialLinks: { key: SocialIconKey; href: string; label: string }[] = [
    { key: "github", href: site.social.github, label: socialLabels.github },
    { key: "linkedin", href: site.social.linkedin, label: socialLabels.linkedin },
    ...(site.social.twitter
      ? [{ key: "twitter" as const, href: site.social.twitter, label: socialLabels.twitter }]
      : []),
  ];

  return (
    <footer className="border-t border-border bg-secondary/30">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link href="/" className="text-lg font-bold tracking-tight text-foreground">
              {site.name}
            </Link>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
              {site.tagline}
            </p>
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-muted transition-colors hover:border-primary/30 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <SocialIcon icon={link.key} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h2>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-primary"
                >
                  {site.email}
                </a>
              </li>
              <li>{site.location}</li>
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-muted">
              This site does not use tracking cookies. Contact form submissions are used only to respond to your inquiry.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">
            © {year} {site.name}. All rights reserved.
          </p>
          <BackToTop />
        </div>
      </Container>
    </footer>
  );
}
