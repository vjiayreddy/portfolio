import { ResumeViewer } from "@/components/resume/ResumeViewer";
import { ResumeActions } from "@/components/resume/ResumeActions";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createMetadata } from "@/lib/metadata";
import {
  getCertifications,
  getEducation,
  getExperiences,
  getSiteConfig,
  getSkills,
} from "@/lib/content";

export const metadata = createMetadata({
  title: "Resume",
  description: "View my online resume or download a PDF copy.",
  path: "/resume",
});

export default function ResumePage() {
  const site = getSiteConfig();
  const experiences = getExperiences();
  const education = getEducation();
  const certifications = getCertifications();
  const skills = getSkills();

  return (
    <ScrollReveal>
      <Container className="py-16 md:py-24">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Resume"
            title="Online Resume"
            description="A structured overview of my experience, education, skills, and certifications."
            className="mb-0"
          />
          <ResumeActions />
        </div>

        <ResumeViewer
          site={site}
          experiences={experiences}
          education={education}
          certifications={certifications}
          skills={skills}
        />
      </Container>
    </ScrollReveal>
  );
}
