import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "./mdx-components";

export function MdxContent({ source }: { source: string }) {
  return (
    <article className="max-w-none">
      <MDXRemote source={source} components={mdxComponents} />
    </article>
  );
}
