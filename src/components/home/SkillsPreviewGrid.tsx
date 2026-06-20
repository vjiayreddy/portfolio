"use client";

import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import type { SkillCategory } from "@/types";

export function SkillsPreviewGrid({
  categories,
}: {
  categories: SkillCategory[];
}) {
  return (
    <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <StaggerItem key={category.name}>
          <Card className="h-full">
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
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
