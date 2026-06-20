import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { buttonClassName } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {previewCategories.map((category) => (
            <Card key={category.name} className="h-full">
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.slice(0, 4).map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between gap-3">
                      <Badge variant="secondary">{skill.name}</Badge>
                      <span className="text-xs font-medium text-muted">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
