import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function InterestsSection({ interests }: { interests: string[] }) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Beyond Code"
          title="Personal Interests"
          description="What keeps me curious, balanced, and inspired outside of work."
        />
        <div className="flex flex-wrap gap-3">
          {interests.map((interest) => (
            <Badge key={interest} variant="accent" className="px-4 py-2 text-sm">
              {interest}
            </Badge>
          ))}
        </div>
      </Container>
    </section>
  );
}
