import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { createMetadata } from "@/lib/metadata";
import { getExperiences } from "@/lib/content";

export const metadata = createMetadata({
  title: "Experience",
  description: "Work history, responsibilities, achievements, and technologies used in my roles.",
  path: "/experience",
});

export default function ExperiencePage() {
  const experiences = getExperiences();

  return (
    <ScrollReveal>
      <ExperienceTimeline experiences={experiences} />
    </ScrollReveal>
  );
}
