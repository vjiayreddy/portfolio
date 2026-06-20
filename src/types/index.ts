export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  email: string;
  location: string;
  summary: string;
  social: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
  seo: {
    title: string;
    description: string;
  };
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url: string;
}

export interface AboutContent {
  bio: string;
}

export interface ProjectFrontmatter {
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  featured: boolean;
  github: string;
  live: string | null;
  outcomes: string[];
  images: string[];
  publishedAt: string;
}

export interface Project extends ProjectFrontmatter {
  content: string;
}
