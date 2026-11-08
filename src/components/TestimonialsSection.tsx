import React from 'react';
import { Quote, MessageSquare, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface TestimonialsSectionProps {
  currentLang: Language;
  onContactRelations: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  currentLang,
  onContactRelations,
}) => {
  const t = translations[currentLang];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-[#C5A46D]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#101D2B]">
              {t.testimonials.kicker}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#101D2B] leading-tight mb-3">
            {t.testimonials.heading}
          </h2>
          <p className="text-sm text-slate-600">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* 2 Verified Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {t.testimonials.quotes.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F7F5F0] rounded p-8 sm:p-9 border border-slate-200 flex flex-col justify-between relative shadow-sm"
            >
              <Quote className="w-8 h-8 text-[#C5A46D]/40 mb-4" />
              
              <p className="font-serif text-base sm:text-lg text-[#101D2B] italic leading-relaxed mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="font-sans text-xs font-bold text-[#101D2B] uppercase tracking-wider">
                    {item.author}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    {item.context}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Resident</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Homeowner Invitation Card (Populated ethically) */}
        <div className="p-6 bg-[#101D2B] text-white rounded flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-[#C5A46D]/20">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C5A46D] font-semibold block mb-1">
              GET-AS Homeowner Community
            </span>
            <p className="text-sm text-slate-200">
              {t.testimonials.shareReviewPrompt}
            </p>
          </div>

          <button
            onClick={onContactRelations}
            className="px-5 py-2.5 bg-[#C5A46D] hover:bg-[#B5935A] text-[#101D2B] text-xs font-semibold uppercase tracking-wider rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow"
          >
            {t.testimonials.shareBtn}
          </button>
        </div>
      </div>
    </section>
  );
};
