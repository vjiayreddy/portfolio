import Link from "next/link";
import { getSiteConfig } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { HeaderNav } from "./HeaderNav";

export function Header() {
  const site = getSiteConfig();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="group flex min-w-0 flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
          >
            <span className="truncate text-base font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
              {site.name}
            </span>
            <span className="hidden truncate text-xs text-muted sm:block">
              {site.title}
            </span>
          </Link>
          <HeaderNav />
        </div>
      </Container>
    </header>
  );
}
