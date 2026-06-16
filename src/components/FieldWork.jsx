import { Activity, Building2, ClipboardCheck, HeartHandshake, Map, ShieldCheck } from "lucide-react";
import { fieldWork } from "../data/profile.js";
import SectionHeader from "./SectionHeader.jsx";

const icons = [HeartHandshake, Building2, Activity, Map, ClipboardCheck, ShieldCheck];

function FieldWork() {
  return (
    <section id="field-work" className="section-offset bg-medical-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Field Work" title="Core skills and public health exposure">
          Field-facing community medicine experience across outreach, health centres, district systems, and preventive care programs.
        </SectionHeader>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {fieldWork.map((item, index) => {
            const Icon = icons[index] || ClipboardCheck;
            return (
              <article key={item.area} className="rounded-xl border border-medical-100 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-soft">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-medical-600 text-white">
                  <Icon size={21} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-ink">{item.area}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.detail}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FieldWork;
