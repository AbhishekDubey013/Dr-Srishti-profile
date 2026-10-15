import { BarChart3, Landmark, ShieldCheck } from "lucide-react";
import { advancedTraining } from "../data/profile.js";
import SectionHeader from "./SectionHeader.jsx";

function AdvancedTraining() {
  return (
    <section id="training" className="section-offset bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Advanced Training" title="Applied epidemiology at AIIMS Nagpur">
          Focused professional development in analytical methods used to strengthen health research.
        </SectionHeader>

        <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <div className="max-w-xl">
            <div className="flex items-start gap-4">
              <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-medical-100 text-medical-700">
                <Landmark size={21} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-medical-700">
                  {advancedTraining.institution}
                </p>
                <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink">
                  {advancedTraining.title}
                </h3>
              </div>
            </div>

            <p className="mt-6 text-base leading-7 text-slate-600">{advancedTraining.description}</p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {advancedTraining.topics.map((topic, index) => (
                <div key={topic} className="flex items-center gap-3 border-l-2 border-medical-500 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                  {index === 0 ? (
                    <BarChart3 size={18} className="shrink-0 text-medical-700" aria-hidden="true" />
                  ) : (
                    <ShieldCheck size={18} className="shrink-0 text-medical-700" aria-hidden="true" />
                  )}
                  {topic}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4" aria-label="Winter Epidemiology School photographs">
            {advancedTraining.images.map((item) => (
              <figure key={item.image}>
                <img
                  src={item.image}
                  alt={item.alt}
                  className="aspect-[4/3] w-full rounded-lg object-cover shadow-sm"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdvancedTraining;
