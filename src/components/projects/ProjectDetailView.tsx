import Link from "next/link";
import { MdxContent } from "@/components/mdx/MdxContent";
import { Badge } from "@/components/ui/Badge";
import { buttonClassName } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { formatDate } from "@/lib/utils";
import type { Project } from "@/types";

export function ProjectDetailView({ project }: { project: Project }) {
  const initial = project.title.charAt(0).toUpperCase();

  return (
    <>
      <section className="border-b border-border py-12 md:py-16">
        <Container>
          <Link
            href="/projects"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
          >
            ← Back to Projects
          </Link>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm text-muted">
                Published {formatDate(project.publishedAt)}
              </p>
              <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                {project.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="primary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClassName({ variant: "primary" })}
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClassName({ variant: "outline" })}
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-border bg-gradient-to-br from-primary/10 via-secondary to-accent/10">
              <div className="flex aspect-[4/3] items-center justify-center">
                <span className="text-7xl font-bold text-primary/30">
                  {initial}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {project.outcomes.length > 0 && (
        <section className="bg-secondary/20 py-12 md:py-16">
          <Container>
            <h2 className="mb-6 text-2xl font-bold">Key Outcomes</h2>
            <ul className="grid gap-4 md:grid-cols-2">
              {project.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="rounded-xl border border-border bg-background p-5 text-sm leading-relaxed text-muted"
                >
                  {outcome}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {project.images.length > 1 && (
        <section className="py-12 md:py-16">
          <Container>
            <h2 className="mb-6 text-2xl font-bold">Screenshots</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {project.images.map((image, index) => (
                <div
                  key={image}
                  className="flex aspect-video items-center justify-center rounded-xl border border-border bg-gradient-to-br from-primary/5 to-accent/5"
                >
                  <span className="text-sm text-muted">
                    Screenshot {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <MdxContent source={project.content} />
          </div>
        </Container>
      </section>
    </>
  );
}
