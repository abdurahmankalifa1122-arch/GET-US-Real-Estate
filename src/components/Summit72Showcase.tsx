import React from 'react';
import { ArrowRight, Trees, ShieldCheck, MapPin, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface Summit72ShowcaseProps {
  currentLang: Language;
  onInquireClick: () => void;
}

export const Summit72Showcase: React.FC<Summit72ShowcaseProps> = ({ currentLang, onInquireClick }) => {
  const t = translations[currentLang];

  return (
    <section id="summit" className="py-20 lg:py-28 bg-[#101D2B] text-white relative overflow-hidden">
      {/* Subtle Architectural Grid Background */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-[#C5A46D]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C5A46D]">
              {t.summitSection.kicker}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-white leading-tight mb-6">
            {t.summitSection.heading}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            {t.summitSection.lead}
          </p>
        </div>

        {/* 4 Verified Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="p-6 rounded bg-white/5 border border-white/10 hover:border-[#C5A46D]/50 transition-colors">
            <span className="font-serif text-2xl sm:text-4xl font-bold text-[#C5A46D] block mb-1">
              {t.summitSection.statCompound}
            </span>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-medium block">
              {t.summitSection.statCompoundLabel}
            </span>
          </div>

          <div className="p-6 rounded bg-white/5 border border-white/10 hover:border-[#C5A46D]/50 transition-colors">
            <span className="font-serif text-2xl sm:text-4xl font-bold text-white block mb-1">
              {t.summitSection.statVillas}
            </span>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-medium block">
              {t.summitSection.statVillasLabel}
            </span>
          </div>

          <div className="p-6 rounded bg-white/5 border border-white/10 hover:border-[#C5A46D]/50 transition-colors">
            <span className="font-serif text-2xl sm:text-4xl font-bold text-white block mb-1">
              {t.summitSection.statTowers}
            </span>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-medium block">
              {t.summitSection.statTowersLabel}
            </span>
          </div>

          <div className="p-6 rounded bg-white/5 border border-white/10 hover:border-[#C5A46D]/50 transition-colors">
            <span className="font-serif text-2xl sm:text-4xl font-bold text-emerald-400 block mb-1">
              {t.summitSection.statCompletion}
            </span>
            <span className="text-xs tracking-wider text-slate-400 font-medium block leading-snug">
              {t.summitSection.statCompletionLabel}
            </span>
          </div>
        </div>

        {/* Editorial Content & Photography Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Main Hero Photo for Summit 72 */}
          <div className="lg:col-span-7 relative rounded overflow-hidden shadow-2xl border border-white/15 min-h-[360px] sm:min-h-[460px]">
            <img
              src="/src/assets/images/villa_summit72_exterior_1794125396413.jpg"
              alt="Summit 72 Luxury Modern G+1 Villa Architecture"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101D2B]/90 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase tracking-widest text-[#C5A46D] font-semibold block mb-1">
                Contemporary G+1 Villa Showcase
              </span>
              <p className="font-serif text-xl sm:text-2xl font-medium text-white">
                Summit 72 Master-Planned Residential Compound
              </p>
            </div>
          </div>

          {/* Right Narrative Card */}
          <div className="lg:col-span-5 bg-white/5 rounded p-7 sm:p-9 border border-white/10 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs text-[#C5A46D]">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">Summit 72, Bole Sub-City, Addis Ababa</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white leading-snug">
                Private Sanctuary with Master Gated Security
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {t.summitSection.bodyText1}
              </p>

              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {t.summitSection.bodyText2}
              </p>

              {/* Verified Feature Points */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-[#C5A46D] shrink-0" />
                  <span>32 Two-Story G+1 Standalone Luxury Residences</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-[#C5A46D] shrink-0" />
                  <span>Two Completed Towers Delivered to Homeowners</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-[#C5A46D] shrink-0" />
                  <span>Integrated Cobblestone Roads & Communal Landscaping</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-white/10">
              <button
                onClick={onInquireClick}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C5A46D] hover:bg-[#B5935A] text-[#101D2B] font-semibold text-xs uppercase tracking-wider rounded transition-all duration-200 shadow cursor-pointer active:scale-95"
              >
                <span>{t.summitSection.inquireSummitBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
