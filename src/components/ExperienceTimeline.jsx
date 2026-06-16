import { BriefcaseMedical } from "lucide-react";
import { experience } from "../data/profile.js";
import SectionHeader from "./SectionHeader.jsx";

function ExperienceTimeline() {
  return (
    <section id="experience" className="section-offset bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Experience" title="Academic and clinical appointments" />

        <div className="mx-auto max-w-4xl">
          {experience.map((item, index) => (
            <article key={`${item.title}-${item.date}`} className="relative pl-10">
              {index !== experience.length - 1 ? (
                <span className="absolute left-[18px] top-12 h-full w-px bg-slate-200" aria-hidden="true" />
              ) : null}
              <span className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border border-medical-100 bg-white text-medical-700 shadow-sm">
                <BriefcaseMedical size={18} aria-hidden="true" />
              </span>
              <div className="mb-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                      {item.label ? (
                        <span className="rounded-full bg-medical-50 px-3 py-1 text-xs font-semibold text-medical-700">
                          {item.label}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 font-medium text-slate-600">{item.organization}</p>
                  </div>
                  <p className="text-sm font-semibold text-medical-700">{item.date}</p>
                </div>
                <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceTimeline;
