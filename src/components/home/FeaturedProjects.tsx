import Link from "next/link";
import { buttonClassName } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/types";

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Portfolio"
            title="Featured Projects"
            description="Selected work highlighting problem-solving, technical depth, and measurable outcomes."
            className="mb-0"
          />
          <Link
            href="/projects"
            className={buttonClassName({ variant: "outline", size: "sm" })}
          >
            View All Projects
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
