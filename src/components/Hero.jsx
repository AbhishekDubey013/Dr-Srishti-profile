import { ArrowRight, Download, MapPin, Stethoscope } from "lucide-react";
import { profile } from "../data/profile.js";

function Hero() {
  return (
    <section id="home" className="section-offset overflow-hidden bg-gradient-to-b from-medical-50 to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div className="order-2 min-w-0 animate-rise lg:order-1">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-medical-100 bg-white px-4 py-2 text-sm font-medium text-medical-700 shadow-sm">
            <Stethoscope size={16} aria-hidden="true" />
            Public Health Physician
          </div>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg font-semibold text-medical-700">{profile.credentials}</p>
          <p className="mt-2 max-w-2xl text-base font-medium text-slate-600 sm:text-lg">{profile.role}</p>
          <p className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-600">
            <MapPin size={17} aria-hidden="true" />
            {profile.location}
          </p>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700">{profile.heroText}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href={profile.cvPath} download>
              <Download size={18} aria-hidden="true" />
              Download CV
            </a>
            <a className="btn-secondary" href="#contact">
              Contact
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="btn-quiet" href="#publications">
              View Publications
            </a>
          </div>
        </div>

        <div className="order-1 min-w-0 animate-rise lg:order-2" style={{ animationDelay: "120ms" }}>
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] border border-white bg-white shadow-soft sm:max-w-md lg:max-w-none">
            <img
              src={profile.imagePath}
              alt="Professional portrait of Dr. Srishti"
              className="aspect-[4/5] w-full object-cover object-center"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
