import { PageContent } from "@/components/layout/PageContent";
import { getAllProjects, getAllTechnologies } from "@/lib/content";

export default function ProjectsPage() {
  const projects = getAllProjects();
  const technologies = getAllTechnologies();

  return (
    <PageContent>
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="mt-4 text-muted">
        {projects.length} projects · {technologies.length} technologies — gallery UI coming in Sprint 2.
      </p>
    </PageContent>
  );
}
