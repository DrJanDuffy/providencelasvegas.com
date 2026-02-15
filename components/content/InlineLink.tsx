import Link from "next/link";

interface InlineLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

/**
 * Contextual inline link component for SEO-rich internal linking
 * Use within page content to link to related pages with proper styling
 */
export default function InlineLink({
  href,
  children,
  external = false,
}: InlineLinkProps) {
  const className = "text-blue-600 hover:text-blue-700 underline font-medium";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
