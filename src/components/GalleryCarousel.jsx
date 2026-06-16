import { ArrowLeft, ArrowRight, Images } from "lucide-react";
import { useMemo, useState } from "react";
import { gallery } from "../data/profile.js";
import SectionHeader from "./SectionHeader.jsx";

function GalleryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = gallery[activeIndex];

  const slideLabel = useMemo(() => `${activeIndex + 1} of ${gallery.length}`, [activeIndex]);

  const showPrevious = () => {
    setActiveIndex((index) => (index === 0 ? gallery.length - 1 : index - 1));
  };

  const showNext = () => {
    setActiveIndex((index) => (index === gallery.length - 1 ? 0 : index + 1));
  };

  if (!gallery.length) {
    return null;
  }

  return (
    <section id="gallery" className="section-offset bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Gallery" title="Field practice in focus">
          Selected moments from clinical and community-facing work, presented as professional context for her practice experience.
        </SectionHeader>

        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
          <div className="grid lg:grid-cols-[1.4fr_0.8fr]">
            <div className="relative bg-slate-100">
              <img
                key={activeItem.image}
                src={activeItem.image}
                alt={activeItem.alt}
                className="h-[22rem] w-full animate-fade object-cover sm:h-[30rem] lg:h-[34rem]"
                loading="lazy"
              />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-bold text-medical-700 shadow-sm backdrop-blur">
                <Images size={15} aria-hidden="true" />
                {slideLabel}
              </div>
            </div>

            <div className="flex flex-col justify-between p-6 sm:p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-medical-600">
                  Practice Documentation
                </p>
                <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink">
                  {activeItem.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">{activeItem.description}</p>
                <p className="mt-5 text-sm leading-6 text-slate-500">
                  Publish only images with appropriate consent and institutional approval where required.
                </p>
              </div>

              <div className="mt-8">
                <div className="mb-5 flex gap-3">
                  <button className="carousel-control" type="button" onClick={showPrevious} aria-label="Show previous gallery image">
                    <ArrowLeft size={19} aria-hidden="true" />
                  </button>
                  <button className="carousel-control" type="button" onClick={showNext} aria-label="Show next gallery image">
                    <ArrowRight size={19} aria-hidden="true" />
                  </button>
                </div>

                <div className="flex gap-2" aria-label="Gallery slide selector">
                  {gallery.map((item, index) => (
                    <button
                      key={item.image}
                      type="button"
                      className={`h-2.5 rounded-full transition-all ${
                        activeIndex === index ? "w-8 bg-medical-600" : "w-2.5 bg-slate-300 hover:bg-medical-300"
                      }`}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Show ${item.title}`}
                      aria-current={activeIndex === index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GalleryCarousel;
