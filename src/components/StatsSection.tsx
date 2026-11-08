import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface StatsSectionProps {
  currentLang: Language;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ currentLang }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const t = translations[currentLang];

  const targetStats = [
    { target: 40000, suffix: ' sqm', label: t.stats.items[0].label, desc: t.stats.items[0].desc },
    { target: 32, suffix: '', label: t.stats.items[1].label, desc: t.stats.items[1].desc },
    { target: 2, suffix: '', label: t.stats.items[2].label, desc: t.stats.items[2].desc },
    { target: 15, suffix: '+ Years', label: t.stats.items[3].label, desc: t.stats.items[3].desc },
  ];

  useEffect(() => {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      setCounts([40000, 32, 2, 15]);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1800;
          const steps = 40;
          const intervalTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep += 1;
            const progress = currentStep / steps;
            // easeOutQuad
            const factor = 1 - (1 - progress) * (1 - progress);

            setCounts([
              Math.floor(40000 * factor),
              Math.floor(32 * factor),
              Math.floor(2 * factor),
              Math.floor(15 * factor),
            ]);

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts([40000, 32, 2, 15]);
            }
          }, intervalTime);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-20 bg-[#101D2B] text-white border-y border-[#C5A46D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-px bg-[#C5A46D]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C5A46D]">
              {t.stats.kicker}
            </span>
            <span className="w-5 h-px bg-[#C5A46D]" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-white mb-2">
            {t.stats.heading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            {t.stats.subtitle}
          </p>
        </div>

        {/* 4 Counter Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {targetStats.map((item, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded bg-white/5 border border-white/10 hover:border-[#C5A46D]/40 transition-colors"
            >
              <div className="font-serif text-3xl sm:text-5xl font-bold text-[#C5A46D] tabular-nums mb-2">
                {counts[idx].toLocaleString()}
                <span className="text-xl sm:text-2xl text-slate-200 font-sans">{item.suffix}</span>
              </div>
              <div className="text-xs uppercase font-semibold tracking-wider text-white mb-1">
                {item.label}
              </div>
              <div className="text-[11px] text-slate-400">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
