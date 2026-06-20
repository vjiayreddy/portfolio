import { getSiteConfig, getFeaturedProjects } from "@/lib/content";

export default function HomePage() {
  const site = getSiteConfig();
  const featuredProjects = getFeaturedProjects();

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
        Portfolio — Phase 0 Complete
      </p>
      <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
        {site.name}
      </h1>
      <p className="mb-2 text-xl text-muted">{site.title}</p>
      <p className="mb-8 max-w-xl text-muted">{site.tagline}</p>
      <div className="rounded-xl border border-border bg-secondary/50 px-6 py-4 text-left text-sm">
        <p className="mb-2 font-medium">Scaffold ready:</p>
        <ul className="space-y-1 text-muted">
          <li>Next.js 15 + TypeScript + Tailwind CSS v4 + ESLint</li>
          <li>{featuredProjects.length} featured projects loaded from MDX</li>
          <li>Theme provider (dark / light / system)</li>
          <li>Content layer with Zod validation</li>
        </ul>
      </div>
    </main>
  );
}
