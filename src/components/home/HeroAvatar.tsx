import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";

interface HeroAvatarProps {
  name: string;
  avatarSrc: string;
}

export function HeroAvatar({ name, avatarSrc }: HeroAvatarProps) {
  return (
    <div className="relative mx-auto mb-6 w-fit pt-4 md:pt-5">
      <FadeIn>
        <div className="relative h-28 w-28 overflow-hidden rounded-full ring-2 ring-white/10 ring-offset-2 ring-offset-transparent md:h-32 md:w-32">
          <Image
            src={avatarSrc}
            alt={`${name} profile photo`}
            width={128}
            height={128}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div
          className="absolute -top-3 right-0 translate-x-1/4 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow-lg shadow-black/20 after:absolute after:-bottom-1.5 after:left-5 after:h-2.5 after:w-2.5 after:rotate-45 after:bg-white md:-top-4 md:right-2 md:px-5 md:py-2.5 md:text-base md:after:left-6"
          aria-hidden="true"
        >
          {name} 👋
        </div>
      </FadeIn>
    </div>
  );
}
