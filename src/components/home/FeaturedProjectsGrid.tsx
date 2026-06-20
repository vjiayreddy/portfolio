"use client";

import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/types";

export function FeaturedProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <StaggerContainer className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <StaggerItem key={project.slug}>
          <ProjectCard project={project} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
