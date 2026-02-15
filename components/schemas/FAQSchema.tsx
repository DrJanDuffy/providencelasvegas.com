/**
 * FAQSchema - Reusable FAQ JSON-LD schema component
 * Generates valid FAQPage structured data for Google rich results
 *
 * Usage:
 * <FAQSchema faqs={getFAQsForPage("home")} />
 * <FAQSchema pageType="providence" />
 */

import { FAQSchema as FAQSchemaScript } from "@/components/SchemaScript";
import { getFAQsForPage, type FAQItem } from "@/lib/faq-library";

interface FAQSchemaProps {
  /** FAQ items array (use when you have custom or pre-fetched FAQs) */
  faqs?: FAQItem[];
  /** Page type from faq-library (use when you want to pull from library) */
  pageType?: string;
  /** Optional replacements for template variables (e.g. { neighborhoodName: "Oxford Commons" }) */
  replacements?: Record<string, string>;
}

/**
 * Renders JSON-LD FAQPage schema for SEO rich results
 * Pass either faqs directly or pageType to pull from faq-library
 */
export default function FAQSchema({
  faqs,
  pageType = "home",
  replacements,
}: FAQSchemaProps) {
  const faqItems = faqs ?? getFAQsForPage(pageType, replacements);

  if (!faqItems || faqItems.length === 0) {
    return null;
  }

  return (
    <FAQSchemaScript
      faqs={faqItems.map((f) => ({ question: f.question, answer: f.answer }))}
    />
  );
}
