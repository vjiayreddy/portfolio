import { Badge } from "@/components/ui/Badge";
import { formatDate, formatDateRange } from "@/lib/utils";
import type {
  Certification,
  Education,
  Experience,
  SiteConfig,
  SkillCategory,
} from "@/types";

export function ResumeViewer({
  site,
  experiences,
  education,
  certifications,
  skills,
}: {
  site: SiteConfig;
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  skills: SkillCategory[];
}) {
  return (
    <article className="rounded-xl border border-border bg-background p-6 md:p-10 print:border-0 print:p-0">
      <header className="border-b border-border pb-6 print:pb-4">
        <h1 className="text-3xl font-bold tracking-tight">{site.name}</h1>
        <p className="mt-1 text-lg text-primary">{site.title}</p>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted">{site.summary}</p>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
          <span>{site.location}</span>
          <a href={`mailto:${site.email}`} className="text-primary hover:underline">
            {site.email}
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            GitHub
          </a>
        </div>
      </header>

      <section className="mt-8">
        <h2 className="text-lg font-semibold uppercase tracking-wider">
          Experience
        </h2>
        <div className="mt-4 space-y-6">
          {experiences.map((exp) => (
            <div key={exp.id}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-semibold">{exp.role}</h3>
                  <p className="text-primary">
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <p className="text-sm text-muted">
                  {formatDateRange(exp.startDate, exp.endDate, exp.current)}
                </p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {exp.description}
              </p>
              <ul className="mt-3 space-y-1">
                {exp.achievements.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold uppercase tracking-wider">
          Education
        </h2>
        <div className="mt-4 space-y-4">
          {education.map((item) => (
            <div key={`${item.institution}-${item.degree}`}>
              <h3 className="font-semibold">{item.degree}</h3>
              <p className="text-sm text-primary">
                {item.institution} · {item.startDate} — {item.endDate}
              </p>
              <p className="mt-1 text-sm text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold uppercase tracking-wider">
          Skills
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {skills.map((category) => (
            <div key={category.name}>
              <h3 className="text-sm font-semibold">{category.name}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill.name} variant="secondary">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold uppercase tracking-wider">
          Certifications
        </h2>
        <ul className="mt-4 space-y-2">
          {certifications.map((cert) => (
            <li key={cert.name} className="text-sm text-muted">
              <span className="font-medium text-foreground">{cert.name}</span>
              {" — "}
              {cert.issuer} ({formatDate(`${cert.date}-01`)})
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
