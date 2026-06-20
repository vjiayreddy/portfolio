import { getAllProjects, getAllTechnologies } from "@/lib/content";

export default function ProjectsPage() {
  const projects = getAllProjects();
  const technologies = getAllTechnologies();

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="mt-4 text-muted">
        {projects.length} projects · {technologies.length} technologies — gallery UI coming in Sprint 2.
      </p>
    </main>
  );
}
