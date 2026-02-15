import { ExternalLink } from "lucide-react";

interface ExternalResource {
  title: string;
  url: string;
  description: string;
  source: string;
}

interface ExternalResourcesProps {
  title?: string;
  resources: ExternalResource[];
}

/**
 * External Resources component for E-E-A-T (Experience, Expertise, Authoritativeness, Trust)
 * Links to authoritative external sources improve content credibility and SEO
 */
export default function ExternalResources({
  title = "Helpful Resources",
  resources,
}: ExternalResourcesProps) {
  if (resources.length === 0) return null;

  return (
    <section className="py-8 bg-blue-50 border-l-4 border-blue-600">
      <div className="container mx-auto px-4 max-w-4xl">
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
          <ExternalLink className="h-5 w-5 mr-2 text-blue-600" />
          {title}
        </h3>
        <ul className="space-y-3">
          {resources.map((resource, index) => (
            <li key={index}>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex items-start">
                  <ExternalLink className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <div>
                    <span className="text-blue-700 font-semibold group-hover:text-blue-800 group-hover:underline">
                      {resource.title}
                    </span>
                    <p className="text-slate-600 text-sm mt-1">
                      {resource.description}
                    </p>
                    <span className="text-xs text-slate-500">{resource.source}</span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
