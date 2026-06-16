import { interests } from "../data/profile.js";
import SectionHeader from "./SectionHeader.jsx";

function AcademicInterests() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="interests-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Interests" title="Academic interests" />
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3" aria-labelledby="interests-title">
          {interests.map((interest) => (
            <span key={interest} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              {interest}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AcademicInterests;
