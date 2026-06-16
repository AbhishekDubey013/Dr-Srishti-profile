import { ExternalLink, FileText } from "lucide-react";
import { publications } from "../data/profile.js";
import SectionHeader from "./SectionHeader.jsx";

function Publications() {
  return (
    <section id="publications" className="section-offset bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Publications" title="Selected publications" />

        <div className="grid gap-5 lg:grid-cols-3">
          {publications.map((publication) => (
            <article key={publication.title} className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-medical-50 text-medical-700">
                <FileText size={21} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold leading-7 text-ink">{publication.title}</h3>
              <p className="mt-3 text-sm font-semibold text-medical-700">{publication.journal}</p>
              {publication.doi ? <p className="mt-2 text-sm text-slate-500">DOI: {publication.doi}</p> : null}
              <p className="mt-4 flex-1 leading-7 text-slate-600">{publication.note}</p>
              {publication.links?.length ? (
                <div className="mt-6 flex flex-wrap gap-3">
                  {publication.links.map((link) => (
                    <a key={link.href} className="link-button" href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                      <ExternalLink size={15} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Publications;
