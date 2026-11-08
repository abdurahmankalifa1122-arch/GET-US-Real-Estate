import React from 'react';
import { ArrowUpRight, Hammer, TrendingUp, KeyRound } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { propertyImages } from '../assets/images';

interface ServicesSectionProps {
  currentLang: Language;
  onContactClick: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ currentLang, onContactClick }) => {
  const t = translations[currentLang];

  const serviceImages = [
    propertyImages.heroKazanchis,
    propertyImages.villaSummit72,
    propertyImages.interiorLiving,
  ];

  const serviceIcons = [
    <Hammer className="w-5 h-5 text-[#C5A46D]" />,
    <TrendingUp className="w-5 h-5 text-[#C5A46D]" />,
    <KeyRound className="w-5 h-5 text-[#C5A46D]" />,
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-px bg-[#C5A46D]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#101D2B]">
                {t.services.kicker}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#101D2B] leading-tight">
              {t.services.heading}
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* 3 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.services.cards.map((card, idx) => (
            <div
              key={idx}
              className="group bg-[#F7F5F0] rounded overflow-hidden border border-slate-200 hover:border-[#C5A46D]/60 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              {/* Card Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
                <img
                  src={serviceImages[idx]}
                  alt={card.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101D2B]/80 via-transparent to-transparent" />
                
                {/* Index Number Badge */}
                <div className="absolute top-4 left-4 w-9 h-9 rounded bg-[#101D2B]/90 backdrop-blur-sm border border-[#C5A46D]/40 flex items-center justify-center text-[#C5A46D] font-mono font-semibold text-xs">
                  {card.number}
                </div>

                {/* Floating Icon */}
                <div className="absolute top-4 right-4 p-2 rounded bg-white/90 backdrop-blur-sm border border-slate-200">
                  {serviceIcons[idx]}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#101D2B] mb-3 group-hover:text-[#B5935A] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                  <button
                    onClick={onContactClick}
                    className="text-xs font-semibold uppercase tracking-wider text-[#101D2B] group-hover:text-[#C5A46D] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Consult Specialists</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
