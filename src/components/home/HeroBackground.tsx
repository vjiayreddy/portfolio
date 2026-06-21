"use client";

import { motion } from "framer-motion";
import {
  FrameworkIcon,
  type FrameworkIconKey,
} from "@/components/ui/FrameworkIcons";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

type FloatConfig = {
  top: string;
  left: string;
  duration: number;
  delay: number;
  yOffset: number;
  xOffset: number;
};

type IconItem = FloatConfig & {
  type: "icon";
  icon: FrameworkIconKey;
  size?: number;
};

type CodeItem = FloatConfig & {
  type: "code";
  lines: CodeLine[];
};

type CodeLine = {
  parts: { text: string; tone?: "keyword" | "string" | "tag" | "plain" | "comment" }[];
};

const iconItems: IconItem[] = [
  { type: "icon", icon: "react", top: "10%", left: "6%", size: 32, duration: 6, delay: 0, yOffset: 18, xOffset: 10 },
  { type: "icon", icon: "nextjs", top: "20%", left: "88%", size: 30, duration: 7, delay: 0.4, yOffset: 16, xOffset: -8 },
  { type: "icon", icon: "typescript", top: "72%", left: "8%", size: 30, duration: 6.5, delay: 0.8, yOffset: 20, xOffset: 12 },
  { type: "icon", icon: "tailwind", top: "82%", left: "84%", size: 28, duration: 7.5, delay: 1.2, yOffset: 18, xOffset: -10 },
  { type: "icon", icon: "nodejs", top: "44%", left: "90%", size: 28, duration: 6, delay: 0.6, yOffset: 22, xOffset: -12 },
  { type: "icon", icon: "graphql", top: "28%", left: "4%", size: 26, duration: 8, delay: 1.5, yOffset: 16, xOffset: 8 },
  { type: "icon", icon: "vercel", top: "88%", left: "48%", size: 24, duration: 6.5, delay: 0.3, yOffset: 14, xOffset: 6 },
  { type: "icon", icon: "git", top: "58%", left: "3%", size: 26, duration: 7, delay: 1, yOffset: 18, xOffset: 10 },
];

const codeItems: CodeItem[] = [
  {
    type: "code",
    top: "14%",
    left: "72%",
    duration: 8,
    delay: 0.2,
    yOffset: 14,
    xOffset: -6,
    lines: [
      {
        parts: [
          { text: "import ", tone: "keyword" },
          { text: "{ useState }", tone: "plain" },
          { text: " from ", tone: "keyword" },
          { text: "'react'", tone: "string" },
        ],
      },
      {
        parts: [
          { text: "const ", tone: "keyword" },
          { text: "[count, setCount]", tone: "plain" },
          { text: " = ", tone: "keyword" },
          { text: "useState(0)", tone: "plain" },
        ],
      },
    ],
  },
  {
    type: "code",
    top: "36%",
    left: "12%",
    duration: 7,
    delay: 1.1,
    yOffset: 16,
    xOffset: 8,
    lines: [
      {
        parts: [
          { text: "export default ", tone: "keyword" },
          { text: "function ", tone: "keyword" },
          { text: "Page()", tone: "plain" },
          { text: " {", tone: "plain" },
        ],
      },
      {
        parts: [
          { text: "  return ", tone: "keyword" },
          { text: "<Hero />", tone: "tag" },
        ],
      },
      { parts: [{ text: "}", tone: "plain" }] },
    ],
  },
  {
    type: "code",
    top: "62%",
    left: "68%",
    duration: 9,
    delay: 0.7,
    yOffset: 18,
    xOffset: -8,
    lines: [
      {
        parts: [
          { text: "interface ", tone: "keyword" },
          { text: "Props ", tone: "plain" },
          { text: "{", tone: "plain" },
        ],
      },
      {
        parts: [
          { text: "  title: ", tone: "plain" },
          { text: "string", tone: "tag" },
          { text: ";", tone: "plain" },
        ],
      },
      { parts: [{ text: "}", tone: "plain" }] },
    ],
  },
  {
    type: "code",
    top: "48%",
    left: "22%",
    duration: 6.5,
    delay: 1.6,
    yOffset: 12,
    xOffset: 6,
    lines: [
      {
        parts: [
          { text: "<Button ", tone: "tag" },
          { text: 'variant="primary"', tone: "string" },
          { text: " />", tone: "tag" },
        ],
      },
    ],
  },
  {
    type: "code",
    top: "78%",
    left: "18%",
    duration: 7.5,
    delay: 0.5,
    yOffset: 16,
    xOffset: 10,
    lines: [
      {
        parts: [
          { text: "npm ", tone: "keyword" },
          { text: "run ", tone: "plain" },
          { text: "dev", tone: "string" },
        ],
      },
      {
        parts: [{ text: "// localhost:3000", tone: "comment" }],
      },
    ],
  },
  {
    type: "code",
    top: "8%",
    left: "42%",
    duration: 8.5,
    delay: 1.3,
    yOffset: 14,
    xOffset: 5,
    lines: [
      {
        parts: [
          { text: "async ", tone: "keyword" },
          { text: "function ", tone: "keyword" },
          { text: "fetchData()", tone: "plain" },
          { text: " {", tone: "plain" },
        ],
      },
      {
        parts: [
          { text: "  const ", tone: "keyword" },
          { text: "res ", tone: "plain" },
          { text: "= ", tone: "keyword" },
          { text: "await fetch(url)", tone: "plain" },
        ],
      },
      { parts: [{ text: "}", tone: "plain" }] },
    ],
  },
  {
    type: "code",
    top: "52%",
    left: "78%",
    duration: 7,
    delay: 1.8,
    yOffset: 20,
    xOffset: -10,
    lines: [
      {
        parts: [
          { text: "type ", tone: "keyword" },
          { text: "Skill ", tone: "plain" },
          { text: "= ", tone: "keyword" },
          { text: "{ name: string }", tone: "plain" },
        ],
      },
    ],
  },
];

const toneClass: Record<
  NonNullable<CodeLine["parts"][number]["tone"]>,
  string
> = {
  keyword: "text-primary",
  string: "text-emerald-400/80 dark:text-emerald-300/80",
  tag: "text-primary/90",
  plain: "text-foreground/55 dark:text-foreground/50",
  comment: "text-muted/70 italic",
};

function FloatingWrapper({
  config,
  animate,
  children,
  className,
}: {
  config: FloatConfig;
  animate: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  const style = { top: config.top, left: config.left };

  if (!animate) {
    return (
      <div className={cn("absolute", className)} style={style} aria-hidden="true">
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={cn("absolute", className)}
      style={style}
      aria-hidden="true"
      animate={{
        y: [-config.yOffset, config.yOffset],
        x: [-config.xOffset, config.xOffset],
        opacity: [0.55, 0.95],
      }}
      transition={{
        duration: config.duration,
        delay: config.delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

function CodeBlock({ lines }: { lines: CodeLine[] }) {
  return (
    <div className="rounded-lg border border-primary/15 bg-background/40 px-3 py-2 shadow-sm backdrop-blur-sm dark:border-primary/20 dark:bg-black/20">
      <pre className="font-mono text-[10px] leading-relaxed md:text-[11px]">
        {lines.map((line, index) => (
          <div key={index}>
            {line.parts.map((part, partIndex) => (
              <span
                key={partIndex}
                className={toneClass[part.tone ?? "plain"]}
              >
                {part.text}
              </span>
            ))}
          </div>
        ))}
      </pre>
    </div>
  );
}

export function HeroBackground() {
  const reducedMotion = useReducedMotion();
  const animate = !reducedMotion;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-[0.22] dark:opacity-[0.3]"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(128,128,128,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(128,128,128,0.12)_1px,transparent_1px)] bg-[size:48px_48px]"
        aria-hidden="true"
      />

      {iconItems.map((item) => (
        <FloatingWrapper
          key={`icon-${item.icon}-${item.top}-${item.left}`}
          config={item}
          animate={animate}
          className="rounded-xl border border-primary/10 bg-background/30 p-2.5 shadow-sm backdrop-blur-sm dark:bg-black/15"
        >
          <FrameworkIcon icon={item.icon} size={item.size} />
        </FloatingWrapper>
      ))}

      {codeItems.map((item) => (
        <FloatingWrapper
          key={`code-${item.top}-${item.left}`}
          config={item}
          animate={animate}
        >
          <CodeBlock lines={item.lines} />
        </FloatingWrapper>
      ))}
    </div>
  );
}
