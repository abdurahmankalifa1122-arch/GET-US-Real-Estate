import React from 'react';
import { Building, Layers, Paintbrush, ExternalLink, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface SisterCompaniesProps {
  currentLang: Language;
}

export const SisterCompanies: React.FC<SisterCompaniesProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const icons = [
    <Building className="w-6 h-6 text-[#C5A46D]" />,
    <Layers className="w-6 h-6 text-[#C5A46D]" />,
    <Paintbrush className="w-6 h-6 text-[#C5A46D]" />,
  ];

  return (
    <section id="group-companies" className="py-20 lg:py-28 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-[#C5A46D]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#101D2B]">
              {t.sisterCompanies.kicker}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#101D2B] leading-tight mb-4">
            {t.sisterCompanies.heading}
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            {t.sisterCompanies.subtitle}
          </p>
        </div>

        {/* 3 Sister Company Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.sisterCompanies.companies.map((comp, idx) => (
            <div
              key={idx}
              className="bg-white rounded p-7 sm:p-8 border border-slate-200 hover:border-[#C5A46D]/60 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Header Lockup */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded bg-[#101D2B] flex items-center justify-center border border-[#C5A46D]/30 shadow-sm shrink-0">
                    {icons[idx]}
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A46D] block">
                      {comp.badge}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {comp.established}
                    </span>
                  </div>
                </div>

                {/* Company Name */}
                <h3 className="font-serif text-xl font-bold text-[#101D2B] mb-3">
                  {comp.name}
                </h3>

                {/* Narrative Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {comp.description}
                </p>
              </div>

              {/* Verified Trust Stamp */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="truncate">Integrated GET-AS Supply Chain</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
