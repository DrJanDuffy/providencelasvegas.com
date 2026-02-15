import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RelatedPage {
  title: string;
  description: string;
  href: string;
}

interface RelatedPagesProps {
  title?: string;
  pages: RelatedPage[];
}

export default function RelatedPages({
  title = "Related Pages",
  pages,
}: RelatedPagesProps) {
  if (pages.length === 0) return null;

  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pages.map((page, index) => (
            <Link
              key={index}
              href={page.href}
              className="group bg-white rounded-lg border border-slate-200 p-6 hover:border-blue-500 hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 mb-2 flex items-center justify-between">
                {page.title}
                <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-600 text-sm">{page.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
