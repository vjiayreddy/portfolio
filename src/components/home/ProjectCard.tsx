import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  const initial = project.title.charAt(0).toUpperCase();

  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-md">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-gradient-to-br from-primary/10 via-secondary to-accent/10">
        <div className="flex h-full items-center justify-center">
          <span className="text-5xl font-bold text-primary/30 transition-transform group-hover:scale-110">
            {initial}
          </span>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="group-hover:text-primary transition-colors">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
        {project.outcomes[0] && (
          <p className="mt-4 text-sm text-muted">
            <span className="font-medium text-foreground">Outcome:</span>{" "}
            {project.outcomes[0]}
          </p>
        )}
      </CardContent>
      <CardFooter className="mt-auto flex-wrap gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className="text-sm font-medium text-primary hover:underline"
        >
          View Case Study
        </Link>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-foreground"
          >
            Live Demo
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-foreground"
          >
            GitHub
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
