import React from 'react';
import { MessageSquare, BookmarkCheck, FileText } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HowItWorksProps {
  currentLang: Language;
  onContactClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ currentLang, onContactClick }) => {
  const t = translations[currentLang];

  const stepIcons = [
    <MessageSquare className="w-5 h-5 text-[#C5A46D]" />,
    <BookmarkCheck className="w-5 h-5 text-[#C5A46D]" />,
    <FileText className="w-5 h-5 text-[#C5A46D]" />,
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-[#C5A46D]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#101D2B]">
              {t.howItWorks.kicker}
            </span>
            <span className="w-5 h-px bg-[#C5A46D]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#101D2B] leading-tight mb-4">
            {t.howItWorks.heading}
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-[#C5A46D]/20 via-[#C5A46D] to-[#C5A46D]/20 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 relative z-10">
            {t.howItWorks.steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#F7F5F0] rounded p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded bg-[#101D2B] border border-[#C5A46D]/40 flex items-center justify-center text-[#C5A46D] shadow-sm">
                      {stepIcons[idx]}
                    </div>
                    <span className="font-mono text-2xl font-bold text-[#101D2B]/30">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-serif text-xl font-bold text-[#101D2B] mb-2">
                    {step.title}
                  </h3>

                  {/* Primary Amharic / Key Prominent Tagline */}
                  <div className="p-2.5 bg-white rounded border border-slate-200 mb-4 text-xs font-semibold text-[#101D2B]">
                    {step.tagline}
                  </div>

                  {/* Narrative Body */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Subtext info */}
                <div className="pt-6 mt-6 border-t border-slate-200/70 text-[11px] text-slate-500">
                  {idx === 0 && 'Schedule at Kazanchis office or virtual call'}
                  {idx === 1 && 'Official receipt & binding unit reservation'}
                  {idx === 2 && 'Deed transfer upon completion of terms'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="mt-14 text-center">
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#101D2B] hover:bg-[#182B3E] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow active:scale-95 cursor-pointer"
          >
            <span>Begin Your Property Discussion</span>
          </button>
        </div>
      </div>
    </section>
  );
};
