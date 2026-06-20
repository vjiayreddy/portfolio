import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { buttonClassName } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
  path: "/404",
});

export default function NotFound() {
  return (
    <>
      <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">Page not found</h1>
        <p className="mt-4 max-w-md text-muted">
          The page you requested doesn&apos;t exist or may have been moved.
        </p>
        <Link href="/" className={buttonClassName({ variant: "primary", className: "mt-8" })}>
          Back to Home
        </Link>
      </Container>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Page Not Found",
        }}
      />
    </>
  );
}
