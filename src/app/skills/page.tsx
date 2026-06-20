import { SkillsGrid } from "@/components/skills/SkillsGrid";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { createMetadata } from "@/lib/metadata";
import { getSkills } from "@/lib/content";

export const metadata = createMetadata({
  title: "Skills",
  description: "Technical skills across frontend, backend, cloud, databases, and developer tools.",
  path: "/skills",
});

export default function SkillsPage() {
  const skills = getSkills();

  return (
    <ScrollReveal>
      <SkillsGrid categories={skills} />
    </ScrollReveal>
  );
}
