"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

export function ProjectsGallery({
  projects,
  technologies,
}: {
  projects: Project[];
  technologies: string[];
}) {
  const [activeTech, setActiveTech] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (!activeTech) return projects;
    return projects.filter((project) =>
      project.technologies.includes(activeTech)
    );
  }, [projects, activeTech]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveTech(null)}
          className={cn(
            "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            activeTech === null
              ? "border-primary bg-primary/10 text-primary"
              : "border-border bg-background text-muted hover:text-foreground"
          )}
        >
          All
        </button>
        {technologies.map((tech) => (
          <button
            key={tech}
            type="button"
            onClick={() => setActiveTech(tech)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              activeTech === tech
                ? "border-primary bg-primary/10 text-primary"
                : "border-border bg-background text-muted hover:text-foreground"
            )}
          >
            {tech}
          </button>
        ))}
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-border bg-secondary/20 px-6 py-12 text-center">
          <p className="text-muted">No projects match this filter.</p>
          <button
            type="button"
            onClick={() => setActiveTech(null)}
            className="mt-4 text-sm font-medium text-primary hover:underline"
          >
            Clear filter
          </button>
        </div>
      )}

      <p className="mt-6 text-sm text-muted">
        Showing {filteredProjects.length} of {projects.length} projects
        {activeTech && (
          <>
            {" "}
            tagged with <Badge variant="primary" className="mx-1">{activeTech}</Badge>
          </>
        )}
      </p>
    </div>
  );
}
