import { Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "../data/profile.js";
import SectionHeader from "./SectionHeader.jsx";

function Contact() {
  return (
    <section id="contact" className="section-offset bg-medical-900 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Contact" title="Professional inquiries">
          For Senior Resident, academic, public health, and faculty-related opportunities.
        </SectionHeader>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-serif text-2xl font-semibold">{profile.name}</h3>
            <p className="mt-2 text-medical-100">{profile.credentials}</p>

            <div className="mt-8 space-y-4">
              <a href={`mailto:${profile.email}`} className="contact-row">
                <Mail size={19} aria-hidden="true" />
                {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="contact-row">
                <Phone size={19} aria-hidden="true" />
                {profile.phone}
              </a>
              <p className="contact-row">
                <MapPin size={19} aria-hidden="true" />
                {profile.location}
              </p>
            </div>
          </div>

          <form className="rounded-2xl border border-white/10 bg-white p-6 text-slate-800 shadow-soft" action={`mailto:${profile.email}`} method="post" encType="text/plain">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Name
                <input className="form-field" name="name" type="text" autoComplete="name" required />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Email
                <input className="form-field" name="email" type="email" autoComplete="email" required />
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-700">
              Message
              <textarea className="form-field min-h-36 resize-y" name="message" required />
            </label>
            <button className="btn-primary mt-6" type="submit">
              <Send size={18} aria-hidden="true" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
