import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { buttonClassName } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createMetadata } from "@/lib/metadata";
import { getSiteConfig } from "@/lib/content";

export const metadata = createMetadata({
  title: "Contact",
  description: "Get in touch for job opportunities, freelance projects, or collaborations.",
  path: "/contact",
});

const socialLabels = {
  github: "GitHub",
  linkedin: "LinkedIn",
  twitter: "X (Twitter)",
} as const;

export default function ContactPage() {
  const site = getSiteConfig();

  const socialLinks = [
    { key: "github" as const, href: site.social.github },
    { key: "linkedin" as const, href: site.social.linkedin },
    ...(site.social.twitter
      ? [{ key: "twitter" as const, href: site.social.twitter }]
      : []),
  ];

  return (
    <ScrollReveal>
      <Container className="py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let's Connect"
              description="Have a project in mind or want to discuss an opportunity? Fill out the form and I'll respond within 1–2 business days."
              className="mb-8"
            />
            <ContactForm />
          </div>

          <aside className="rounded-xl border border-border bg-secondary/20 p-6 md:p-8">
            <h2 className="text-lg font-semibold">Direct Contact</h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-muted">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-primary hover:underline"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-muted">Location</dt>
                <dd className="mt-1 text-foreground">{site.location}</dd>
              </div>
            </dl>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-foreground">
              Social Profiles
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClassName({
                    variant: "outline",
                    className: "justify-center",
                  })}
                >
                  {socialLabels[link.key]}
                </a>
              ))}
            </div>

            <p className="mt-8 text-xs leading-relaxed text-muted">
              Prefer email? Send your message directly to{" "}
              <Link href={`mailto:${site.email}`} className="text-primary hover:underline">
                {site.email}
              </Link>
              .
            </p>
          </aside>
        </div>
      </Container>
    </ScrollReveal>
  );
}
