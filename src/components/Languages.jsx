import { Languages as LanguagesIcon } from "lucide-react";
import { languages } from "../data/profile.js";

function Languages() {
  return (
    <section className="bg-white py-12" aria-labelledby="languages-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-medical-50 text-medical-700">
              <LanguagesIcon size={21} aria-hidden="true" />
            </span>
            <h2 id="languages-title" className="font-serif text-2xl font-semibold text-ink">
              Languages
            </h2>
          </div>
          <p className="mt-5 text-base font-medium text-slate-700 sm:mt-0">{languages.join(" | ")}</p>
        </div>
      </div>
    </section>
  );
}

export default Languages;
