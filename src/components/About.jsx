import { GraduationCap, HeartPulse, Users } from "lucide-react";
import { profile } from "../data/profile.js";
import SectionHeader from "./SectionHeader.jsx";

const highlights = [
  { icon: HeartPulse, label: "Clinical care and prevention" },
  { icon: Users, label: "Rural and urban field practice" },
  { icon: GraduationCap, label: "Academic and teaching support" },
];

function About() {
  return (
    <section id="about" className="section-offset bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="About" title="Community medicine, grounded in field practice">
          {profile.about}
        </SectionHeader>

        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map(({ icon: Icon, label }) => (
            <div key={label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-medical-50 text-medical-700">
                <Icon size={21} aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-ink">{label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
