import Link from "next/link";
import { buttonClassName } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillsPreviewGrid } from "./SkillsPreviewGrid";
import type { SkillCategory } from "@/types";

export function SkillsPreview({ categories }: { categories: SkillCategory[] }) {
  const previewCategories = categories.slice(0, 3);

  return (
    <section className="border-y border-border bg-secondary/20 py-16 md:py-24">
      <Container>
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Expertise"
            title="Key Skills"
            description="Technologies and tools I use to build reliable, scalable products."
            className="mb-0"
          />
          <Link href="/skills" className={buttonClassName({ variant: "outline", size: "sm" })}>
            View All Skills
          </Link>
        </div>

        <SkillsPreviewGrid categories={previewCategories} />
      </Container>
    </section>
  );
}
