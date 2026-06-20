import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Education } from "@/types";

export function EducationSection({ education }: { education: Education[] }) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Background"
          title="Education"
          description="Formal training that built my foundation in computer science and software engineering."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <div
              key={`${item.institution}-${item.degree}`}
              className="rounded-xl border border-border bg-background p-6"
            >
              <h3 className="text-lg font-semibold">{item.degree}</h3>
              <p className="mt-1 text-primary">{item.institution}</p>
              <p className="mt-2 text-sm text-muted">
                {item.location} · {item.startDate} — {item.endDate}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
