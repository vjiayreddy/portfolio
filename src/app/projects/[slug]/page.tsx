import { notFound } from "next/navigation";
import { PageContent } from "@/components/layout/PageContent";
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
    <PageContent>
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-4 text-muted">{project.description}</p>
    </PageContent>
  );
}
