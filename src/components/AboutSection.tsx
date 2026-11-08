import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Building, ShieldCheck, X } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { propertyImages } from '../assets/images';

interface AboutSectionProps {
  currentLang: Language;
  onExploreProperties: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang, onExploreProperties }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const t = translations[currentLang];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F7F5F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with 2 Architectural Images */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded overflow-hidden shadow-2xl border border-slate-200">
              <img
                src={propertyImages.villaGardenCompound}
                alt="GET-AS Summit 72 Compound Development"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[11px] font-semibold tracking-widest uppercase text-[#C5A46D] block mb-1">
                  Master Development
                </span>
                <p className="font-serif text-lg sm:text-xl font-medium">
                  Summit 72 Residential Community — Addis Ababa
                </p>
              </div>
            </div>

            {/* Overlapping Inset Card */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-64 rounded overflow-hidden shadow-2xl border-4 border-white z-20">
              <img
                src={propertyImages.interiorLiving}
                alt="Luxury Penthouse Finishes"
                referrerPolicy="no-referrer"
                className="w-full h-44 object-cover"
              />
              <div className="p-3 bg-[#101D2B] text-white">
                <p className="text-xs font-semibold text-[#C5A46D]">Kazanchis Interior Finishes</p>
                <p className="text-[11px] text-slate-300">Engineered with international standards</p>
              </div>
            </div>

            {/* Subtle Architectural Accent Box */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-[#C5A46D]/30 -z-0 hidden md:block" />
          </div>

          {/* Right Column: Editorial Text & Corporate Credentials */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-px bg-[#C5A46D]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#101D2B]">
                {t.about.kicker}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#101D2B] leading-tight mb-6">
              {t.about.heading}
            </h2>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed mb-8">
              <p className="font-medium text-[#101D2B]">
                {t.about.intro1}
              </p>
              <p>
                {t.about.intro2}
              </p>
              <p className="text-slate-600">
                {t.about.intro3}
              </p>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pt-4 border-t border-slate-300">
              {t.about.keyHighlights.map((item, idx) => (
                <div key={idx} className="bg-white/80 p-3.5 rounded border border-slate-200">
                  <span className="font-serif font-bold text-sm text-[#101D2B] block mb-1">
                    {item.title}
                  </span>
                  <span className="text-xs text-slate-600 leading-snug block">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#101D2B] hover:bg-[#182B3E] text-white text-xs uppercase font-semibold tracking-wider rounded transition-all duration-200 active:scale-95 cursor-pointer shadow"
              >
                <span>{t.about.learnMoreBtn}</span>
                <ArrowRight className="w-4 h-4 text-[#C5A46D]" />
              </button>

              <button
                onClick={onExploreProperties}
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#C5A46D] text-[#101D2B] hover:bg-[#C5A46D]/10 text-xs uppercase font-semibold tracking-wider rounded transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>{t.nav.exploreBtn}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Story & Vision Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden border border-slate-200 max-h-[90vh] flex flex-col">
            <div className="bg-[#101D2B] text-white p-6 flex items-center justify-between border-b border-[#C5A46D]/20">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C5A46D] font-semibold block mb-1">
                  GET-AS INTERNATIONAL PLC
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-medium">
                  {t.about.heading}
                </h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 text-slate-300 hover:text-white rounded hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-700 leading-relaxed">
              <div>
                <h4 className="font-serif text-lg font-semibold text-[#101D2B] mb-2">
                  Our Origins & Heritage
                </h4>
                <p>
                  GET-AS Real Estate was founded as the flagship property development arm of GET-AS International PLC. With decades of institutional presence across Ethiopia’s commerce, manufacturing, and construction industries, we recognized the acute demand for residences constructed without structural compromises.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#F7F5F0] rounded border border-slate-200">
                  <div className="flex items-center gap-2 mb-2 text-[#101D2B] font-semibold">
                    <ShieldCheck className="w-4 h-4 text-[#C5A46D]" />
                    <span>Grade-1 Quality Assurance</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Constructed in direct collaboration with sister enterprise Dugda Construction PLC, incorporating deep foundation piling and seismically certified structural frames.
                  </p>
                </div>

                <div className="p-4 bg-[#F7F5F0] rounded border border-slate-200">
                  <div className="flex items-center gap-2 mb-2 text-[#101D2B] font-semibold">
                    <Building className="w-4 h-4 text-[#C5A46D]" />
                    <span>40,000 sqm Compound Mastery</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Summit 72 represents one of the largest single gated residential developments in Addis Ababa, integrating private villa plots, delivered towers, and communal avenues.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-serif text-lg font-semibold text-[#101D2B] mb-2">
                  Verified Construction Partners
                </h4>
                <p className="text-xs text-slate-600">
                  Every GET-AS home benefits from vertically integrated supply lines: premium cement from Habesha Cement, certified coatings from Global Paint (Sons Industry PLC), and specialized engineering execution by Dugda Construction PLC.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-2.5 bg-[#101D2B] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#182B3E] transition-colors cursor-pointer"
                >
                  {t.about.closeBtn}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
