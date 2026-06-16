import { BookOpenCheck } from "lucide-react";
import { education } from "../data/profile.js";
import SectionHeader from "./SectionHeader.jsx";

function Education() {
  return (
    <section id="education" className="section-offset bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Education" title="Medical and academic foundation" />
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((item) => (
            <article key={`${item.degree}-${item.institution}`} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-medical-50 text-medical-700">
                <BookOpenCheck size={21} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-ink">{item.degree}</h3>
              <p className="mt-2 font-medium text-slate-600">{item.institution}</p>
              {item.date ? <p className="mt-3 text-sm font-semibold text-medical-700">{item.date}</p> : null}
              {item.detail ? <p className="mt-3 text-sm text-slate-600">{item.detail}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
