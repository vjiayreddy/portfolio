import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { SiteConfig } from "@/types";

export function AboutHero({
  site,
  bio,
}: {
  site: SiteConfig;
  bio: string;
}) {
  const paragraphs = bio.split("\n\n").filter(Boolean);

  return (
    <section className="border-b border-border py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="About Me"
          title={site.name}
          description={site.title}
        />
        <div className="max-w-3xl space-y-4">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>
        <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:max-w-xl">
          <div>
            <dt className="text-sm font-medium text-muted">Location</dt>
            <dd className="mt-1 text-foreground">{site.location}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-muted">Email</dt>
            <dd className="mt-1">
              <a
                href={`mailto:${site.email}`}
                className="text-primary hover:underline"
              >
                {site.email}
              </a>
            </dd>
          </div>
        </dl>
      </Container>
    </section>
  );
}
