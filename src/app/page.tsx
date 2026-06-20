import { CTABanner } from "@/components/home/CTABanner";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HeroSection } from "@/components/home/HeroSection";
import { SkillsPreview } from "@/components/home/SkillsPreview";
import { SummarySection } from "@/components/home/SummarySection";
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
      <HeroSection site={site} />
      <SummarySection summary={site.summary} />
      <SkillsPreview categories={skills} />
      <FeaturedProjects projects={featuredProjects} />
      <CTABanner site={site} />
    </>
  );
}
