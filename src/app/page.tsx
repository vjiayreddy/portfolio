import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { buttonClassName } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { getSiteConfig, getFeaturedProjects } from "@/lib/content";

export default function HomePage() {
  const site = getSiteConfig();
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
      <Badge variant="primary" className="mb-4">
        Sprint 1 — Design System
      </Badge>
      <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
        {site.name}
      </h1>
      <p className="mb-2 text-xl text-muted">{site.title}</p>
      <p className="mb-8 max-w-xl text-muted">{site.tagline}</p>

      <Card className="w-full text-left">
        <CardHeader>
          <CardTitle>UI primitives ready</CardTitle>
          <CardDescription>
            Button, Card, Badge, and Input components are available for page
            builds.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted">
            <li>Next.js 15 + TypeScript + Tailwind CSS v4 + ESLint</li>
            <li>{featuredProjects.length} featured projects loaded from MDX</li>
            <li>Layout shell with Header, Footer, and theme toggle</li>
            <li>Content layer with Zod validation</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Link href="/projects" className={buttonClassName({ variant: "primary" })}>
            View Projects
          </Link>
          <Link href="/contact" className={buttonClassName({ variant: "outline" })}>
            Contact Me
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
