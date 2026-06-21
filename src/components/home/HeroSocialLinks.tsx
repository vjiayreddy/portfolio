import { SocialIcon, socialLabels, type SocialIconKey } from "@/components/ui/SocialIcons";
import type { SiteConfig } from "@/types";

interface HeroSocialLinksProps {
  social: SiteConfig["social"];
}

export function HeroSocialLinks({ social }: HeroSocialLinksProps) {
  const links: { key: SocialIconKey; href: string; label: string }[] = [
    { key: "github", href: social.github, label: socialLabels.github },
    { key: "linkedin", href: social.linkedin, label: socialLabels.linkedin },
    ...(social.twitter
      ? [{ key: "twitter" as const, href: social.twitter, label: socialLabels.twitter }]
      : []),
  ];

  return (
    <div className="flex items-center gap-2">
      {links.map((link) => (
        <a
          key={link.key}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-primary transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <SocialIcon icon={link.key} size={22} />
        </a>
      ))}
    </div>
  );
}
