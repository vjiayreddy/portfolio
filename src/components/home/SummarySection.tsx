import Link from "next/link";
import { buttonClassName } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SummarySection({ summary }: { summary: string }) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <SectionHeading
              eyebrow="About"
              title="Professional Summary"
              description={summary}
            />
          </div>
          <Link
            href="/about"
            className={buttonClassName({ variant: "outline" })}
          >
            Read Full Bio
          </Link>
        </div>
      </Container>
    </section>
  );
}
