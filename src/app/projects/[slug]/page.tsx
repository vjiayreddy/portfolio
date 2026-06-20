import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/content";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-4 text-muted">{project.description}</p>
    </div>
  );
}
