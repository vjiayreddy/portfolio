import { cn } from "@/lib/utils";

const variantStyles = {
  default: "border-border bg-secondary/70 text-foreground",
  primary: "border-primary/20 bg-primary/10 text-primary",
  secondary: "border-border bg-background text-muted",
  accent: "border-accent/20 bg-accent/10 text-accent",
  outline: "border-border bg-transparent text-foreground",
} as const;

export type BadgeVariant = keyof typeof variantStyles;

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
