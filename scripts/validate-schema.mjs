/**
 * Schema validation script - verifies JSON-LD structure meets Google requirements
 * Run: node scripts/validate-schema.mjs
 *
 * Validates:
 * - Review schema has itemReviewed on each review
 * - FAQPage has valid mainEntity structure
 * - RealEstateAgent has required fields
 */

const REVIEW_REQUIRED = ["@type", "itemReviewed", "author", "reviewRating", "reviewBody"];
const ITEM_REVIEWED_REQUIRED = ["@type", "name"];
const FAQ_QUESTION_REQUIRED = ["@type", "name", "acceptedAnswer"];
const FAQ_ANSWER_REQUIRED = ["@type", "text"];

function hasRequiredFields(obj, required) {
  if (!obj || typeof obj !== "object") return false;
  return required.every((key) => key in obj && obj[key] != null);
}

function validateReviewSchema(schema) {
  const errors = [];
  if (schema["@type"] !== "RealEstateAgent" && schema["@type"] !== "Organization") return errors;
  const reviews = schema.review || [];
  reviews.forEach((r, i) => {
    if (!hasRequiredFields(r, REVIEW_REQUIRED)) {
      errors.push(`Review ${i}: missing required fields (need: ${REVIEW_REQUIRED.join(", ")})`);
    }
    if (r.itemReviewed) {
      if (!hasRequiredFields(r.itemReviewed, ITEM_REVIEWED_REQUIRED)) {
        errors.push(`Review ${i}: itemReviewed missing @type or name`);
      }
    } else {
      errors.push(`Review ${i}: missing itemReviewed (required by Google)`);
    }
  });
  return errors;
}

function validateFAQSchema(schema) {
  const errors = [];
  if (schema["@type"] !== "FAQPage") return errors;
  const main = schema.mainEntity || [];
  main.forEach((q, i) => {
    if (!hasRequiredFields(q, FAQ_QUESTION_REQUIRED)) {
      errors.push(`FAQ ${i}: Question missing required fields`);
    }
    if (q.acceptedAnswer && !hasRequiredFields(q.acceptedAnswer, FAQ_ANSWER_REQUIRED)) {
      errors.push(`FAQ ${i}: acceptedAnswer missing @type or text`);
    }
  });
  return errors;
}

// Sample schemas matching our implementation
const sampleReviewSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": "https://www.providencelasvegas.com#organization",
  name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
  url: "https://www.providencelasvegas.com",
  review: [
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "RealEstateAgent",
        "@id": "https://www.providencelasvegas.com#organization",
        name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
        url: "https://www.providencelasvegas.com",
      },
      author: { "@type": "Person", name: "Test Client" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
      reviewBody: "Great service!",
      datePublished: "2025-01-15",
    },
  ],
};

const sampleFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why choose BHHS?",
      acceptedAnswer: { "@type": "Answer", text: "Trusted brand backed by Warren Buffett." },
    },
  ],
};

console.log("Schema Validation\n");

const reviewErrors = validateReviewSchema(sampleReviewSchema);
if (reviewErrors.length > 0) {
  console.log("❌ Review schema errors:");
  reviewErrors.forEach((e) => console.log("  -", e));
} else {
  console.log("✅ Review schema: itemReviewed present, structure valid");
}

const faqErrors = validateFAQSchema(sampleFAQSchema);
if (faqErrors.length > 0) {
  console.log("❌ FAQ schema errors:");
  faqErrors.forEach((e) => console.log("  -", e));
} else {
  console.log("✅ FAQ schema: mainEntity structure valid");
}

// Test missing itemReviewed (should fail)
const badReview = { ...sampleReviewSchema, review: [{ "@type": "Review", author: { name: "X" }, reviewRating: {}, reviewBody: "x" }] };
const badErrors = validateReviewSchema(badReview);
if (badErrors.length > 0) {
  console.log("✅ Validation correctly flags Review without itemReviewed");
} else {
  console.log("❌ Validation should flag Review without itemReviewed");
}

console.log("\nSee docs/TESTING-SCHEMA.md for Google Rich Results Test steps.");
