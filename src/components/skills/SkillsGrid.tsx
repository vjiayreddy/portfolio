import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { SkillCategory } from "@/types";

export function SkillsGrid({ categories }: { categories: SkillCategory[] }) {
  return (
    <Container className="py-16 md:py-24">
      <SectionHeading
        eyebrow="Expertise"
        title="Skills & Technologies"
        description="A comprehensive overview of the tools, frameworks, and platforms I work with."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((category) => (
          <Card key={category.name} className="h-full">
            <CardHeader>
              <CardTitle>{category.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <Badge variant="secondary">{skill.name}</Badge>
                    <span className="text-sm font-medium text-muted">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      style={{ width: `${skill.level}%` }}
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${skill.name} proficiency`}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}
