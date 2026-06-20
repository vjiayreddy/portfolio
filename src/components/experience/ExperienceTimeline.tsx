import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatDateRange } from "@/lib/utils";
import type { Experience } from "@/types";

export function ExperienceTimeline({
  experiences,
}: {
  experiences: Experience[];
}) {
  return (
    <Container className="py-16 md:py-24">
      <SectionHeading
        eyebrow="Career"
        title="Work Experience"
        description="Detailed overview of my roles, responsibilities, and achievements across teams and products."
      />

      <div className="relative space-y-10 before:absolute before:left-[7px] before:top-3 before:h-[calc(100%-2rem)] before:w-px before:bg-border md:before:left-[11px]">
        {experiences.map((exp) => (
          <article key={exp.id} className="relative pl-8 md:pl-10">
            <div className="absolute left-0 top-3 h-4 w-4 rounded-full border-2 border-primary bg-background md:h-5 md:w-5" />
            <div className="rounded-xl border border-border bg-background p-6 md:p-8">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h2 className="text-xl font-semibold md:text-2xl">{exp.role}</h2>
                  <p className="mt-1 text-lg text-primary">{exp.company}</p>
                  <p className="mt-1 text-sm text-muted">
                    {exp.location}
                    {exp.current && (
                      <Badge variant="primary" className="ml-2">
                        Current
                      </Badge>
                    )}
                  </p>
                </div>
                <p className="text-sm font-medium text-muted">
                  {formatDateRange(exp.startDate, exp.endDate, exp.current)}
                </p>
              </div>

              <p className="mt-4 leading-relaxed text-muted">{exp.description}</p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    Responsibilities
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {exp.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    Achievements
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {exp.achievements.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
