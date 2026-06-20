import { ProjectsGallery } from "@/components/projects/ProjectsGallery";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createMetadata } from "@/lib/metadata";
import { getAllProjects, getAllTechnologies } from "@/lib/content";

export const metadata = createMetadata({
  title: "Projects",
  description: "Browse my portfolio of web applications, case studies, and technical projects.",
  path: "/projects",
});

export default function ProjectsPage() {
  const projects = getAllProjects();
  const technologies = getAllTechnologies();

  return (
    <ScrollReveal>
      <Container className="py-16 md:py-24">
        <SectionHeading
          eyebrow="Portfolio"
          title="All Projects"
          description="Explore my work across e-commerce, CRM, and full-stack web development. Filter by technology to find relevant case studies."
        />
        <ProjectsGallery projects={projects} technologies={technologies} />
      </Container>
    </ScrollReveal>
  );
}
