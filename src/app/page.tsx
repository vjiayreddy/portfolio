import { CTABanner } from "@/components/home/CTABanner";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HeroSection } from "@/components/home/HeroSection";
import { SkillsPreview } from "@/components/home/SkillsPreview";
import { SummarySection } from "@/components/home/SummarySection";
import { FadeIn } from "@/components/motion/FadeIn";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import {
  getFeaturedProjects,
  getSiteConfig,
  getSkills,
} from "@/lib/content";

export default function HomePage() {
  const site = getSiteConfig();
  const skills = getSkills();
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <FadeIn>
        <HeroSection site={site} />
      </FadeIn>
      <ScrollReveal>
        <SummarySection summary={site.summary} />
      </ScrollReveal>
      <ScrollReveal delay={0.05}>
        <SkillsPreview categories={skills} />
      </ScrollReveal>
      <ScrollReveal delay={0.05}>
        <FeaturedProjects projects={featuredProjects} />
      </ScrollReveal>
      <ScrollReveal delay={0.05}>
        <CTABanner site={site} />
      </ScrollReveal>
    </>
  );
}
