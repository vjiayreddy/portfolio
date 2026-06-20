import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mb-4 text-3xl font-bold tracking-tight">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-3 mt-8 text-2xl font-semibold tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-2 mt-6 text-xl font-semibold">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="mb-4 leading-relaxed text-muted-foreground">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mb-4 list-disc space-y-1 pl-6">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 list-decimal space-y-1 pl-6">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-primary underline-offset-4 hover:underline"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    ...components,
  };
}
