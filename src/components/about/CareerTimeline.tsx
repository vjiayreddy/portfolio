import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatDateRange } from "@/lib/utils";
import type { Experience } from "@/types";

export function CareerTimeline({ experiences }: { experiences: Experience[] }) {
  return (
    <section className="bg-secondary/20 py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Journey"
          title="Career Timeline"
          description="A snapshot of the roles and teams that shaped my professional growth."
        />
        <div className="relative space-y-8 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border md:before:left-[11px]">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-10">
              <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-primary bg-background md:h-5 md:w-5" />
              <div className="rounded-xl border border-border bg-background p-5 md:p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <p className="text-primary">{exp.company}</p>
                  </div>
                  <p className="text-sm text-muted">
                    {formatDateRange(exp.startDate, exp.endDate, exp.current)}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {exp.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
