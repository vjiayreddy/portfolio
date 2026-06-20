import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { z } from "zod";
import type {
  SiteConfig,
  SkillCategory,
  Experience,
  Education,
  Certification,
  AboutContent,
  Project,
  ProjectFrontmatter,
} from "@/types";

const contentDir = path.join(process.cwd(), "content");

const siteSchema = z.object({
  name: z.string(),
  title: z.string(),
  tagline: z.string(),
  email: z.string(),
  location: z.string(),
  summary: z.string(),
  social: z.object({
    github: z.string(),
    linkedin: z.string(),
    twitter: z.string().optional(),
  }),
  seo: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const projectFrontmatterSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  technologies: z.array(z.string()),
  featured: z.boolean(),
  github: z.string(),
  live: z.string().nullable(),
  outcomes: z.array(z.string()),
  images: z.array(z.string()),
  publishedAt: z.string(),
});

function readJsonFile<T>(filename: string): T {
  const filePath = path.join(contentDir, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

export function getSiteConfig(): SiteConfig {
  const data = readJsonFile<unknown>("site.json");
  return siteSchema.parse(data);
}

export function getSkills(): SkillCategory[] {
  const data = readJsonFile<{ categories: SkillCategory[] }>("skills.json");
  return data.categories;
}

export function getExperiences(): Experience[] {
  const data = readJsonFile<{ experiences: Experience[] }>("experience.json");
  return data.experiences;
}

export function getEducation(): Education[] {
  const data = readJsonFile<{ education: Education[] }>("education.json");
  return data.education;
}

export function getCertifications(): Certification[] {
  const data = readJsonFile<{ certifications: Certification[] }>(
    "certifications.json"
  );
  return data.certifications;
}

export function getAboutContent(): AboutContent {
  return readJsonFile<AboutContent>("about.json");
}

export function getInterests(): string[] {
  const data = readJsonFile<{ interests: string[] }>("interests.json");
  return data.interests;
}

export function getAllProjects(): Project[] {
  const projectsDir = path.join(contentDir, "projects");
  const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const filePath = path.join(projectsDir, filename);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      const frontmatter = projectFrontmatterSchema.parse(data) as ProjectFrontmatter;
      return { ...frontmatter, content };
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

export function getAllTechnologies(): string[] {
  const projects = getAllProjects();
  const techSet = new Set<string>();
  projects.forEach((p) => p.technologies.forEach((t) => techSet.add(t)));
  return Array.from(techSet).sort();
}
