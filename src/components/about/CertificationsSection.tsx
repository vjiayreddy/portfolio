import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatDate } from "@/lib/utils";
import type { Certification } from "@/types";

export function CertificationsSection({
  certifications,
}: {
  certifications: Certification[];
}) {
  return (
    <section className="border-y border-border bg-secondary/20 py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          description="Professional certifications that validate my technical expertise."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((cert) => (
            <Link
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-border bg-background p-5 transition-colors hover:border-primary/30"
            >
              <h3 className="font-semibold group-hover:text-primary">
                {cert.name}
              </h3>
              <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
              <p className="mt-2 text-sm text-muted">
                Issued {formatDate(`${cert.date}-01`)}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
