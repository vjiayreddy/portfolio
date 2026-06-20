import { AboutHero } from "@/components/about/AboutHero";
import { CareerTimeline } from "@/components/about/CareerTimeline";
import { CertificationsSection } from "@/components/about/CertificationsSection";
import { EducationSection } from "@/components/about/EducationSection";
import { InterestsSection } from "@/components/about/InterestsSection";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { createMetadata } from "@/lib/metadata";
import {
  getAboutContent,
  getCertifications,
  getEducation,
  getExperiences,
  getInterests,
  getSiteConfig,
} from "@/lib/content";

export const metadata = createMetadata({
  title: "About",
  description: "Learn about my background, career journey, education, and interests.",
  path: "/about",
});

export default function AboutPage() {
  const site = getSiteConfig();
  const about = getAboutContent();
  const experiences = getExperiences();
  const education = getEducation();
  const certifications = getCertifications();
  const interests = getInterests();

  return (
    <>
      <ScrollReveal>
        <AboutHero site={site} bio={about.bio} />
      </ScrollReveal>
      <ScrollReveal>
        <CareerTimeline experiences={experiences} />
      </ScrollReveal>
      <ScrollReveal>
        <EducationSection education={education} />
      </ScrollReveal>
      <ScrollReveal>
        <CertificationsSection certifications={certifications} />
      </ScrollReveal>
      <ScrollReveal>
        <InterestsSection interests={interests} />
      </ScrollReveal>
    </>
  );
}
