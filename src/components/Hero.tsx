import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Building2, Compass } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { propertyImages } from '../assets/images';

interface HeroProps {
  currentLang: Language;
  onExploreClick: () => void;
  onStoryClick: () => void;
}

interface SlideItem {
  image: string;
  category: { en: string; am: string };
  title: { en: string; am: string };
  location: { en: string; am: string };
}

const slides: SlideItem[] = [
  {
    image: propertyImages.heroKazanchis,
    category: { en: 'Luxury Apartments', am: 'የቅንጦት አፓርታማዎች' },
    title: { en: 'Kazanchis Metropolitan Towers', am: 'የካዛንቺስ ዘመናዊ ታወሮች' },
    location: { en: 'Kazanchis, Addis Ababa', am: 'ካዛንቺስ፣ አዲስ አበባ' },
  },
  {
    image: propertyImages.villaSummit72,
    category: { en: 'Family Villas', am: 'የቤተሰብ ቪላዎች' },
    title: { en: 'Summit 72 Contemporary G+1 Villas', am: 'ሰሚት 72 ዘመናዊ ጂ+1 ቪላዎች' },
    location: { en: 'Summit 72, Addis Ababa', am: 'ሰሚት 72፣ አዲስ አበባ' },
  },
  {
    image: propertyImages.commercialTower,
    category: { en: 'Commercial Buildings', am: 'የንግድ ሕንፃዎች' },
    title: { en: 'Addis Ababa Corporate Spaces', am: 'የአዲስ አበባ የንግድና ቢሮ ማዕከላት' },
    location: { en: 'Addis Ababa Business District', am: 'የአዲስ አበባ የንግድ ቀጠና' },
  },
];

export const Hero: React.FC<HeroProps> = ({ currentLang, onExploreClick, onStoryClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = translations[currentLang];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#101D2B]">
      {/* Background Carousel Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform', transitionDuration: '1.2s' }}
        >
          <img
            src={slide.image}
            alt={slide.title[currentLang]}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          {/* Elegant Dark Vignette & Scrim for WCAG readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#101D2B] via-[#101D2B]/60 to-[#101D2B]/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101D2B]/85 via-[#101D2B]/40 to-transparent" />
        </div>
      ))}

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full flex flex-col justify-between min-h-[85vh]">
        {/* Top / Main Hero Content */}
        <div className="max-w-3xl my-auto">
          {/* Subtle Label / Kicker */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-[#C5A46D]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C5A46D]">
              {t.hero.kicker}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white font-medium leading-[1.15] mb-6 tracking-tight text-balance">
            {t.hero.title}
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#C5A46D] hover:bg-[#B5935A] text-[#101D2B] font-semibold text-xs uppercase tracking-wider rounded transition-all duration-200 shadow-lg active:scale-95 cursor-pointer"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onStoryClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-medium text-xs uppercase tracking-wider rounded border border-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <span>{t.hero.ctaSecondary}</span>
            </button>
          </div>

          {/* Subtle Trust Badges */}
          <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A46D]" />
              <span>International Construction Standards</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#C5A46D]" />
              <span>Kazanchis & Summit 72</span>
            </div>
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#C5A46D]" />
              <span>GET-AS International PLC</span>
            </div>
          </div>
        </div>

        {/* Bottom Carousel Selector Bar */}
        <div className="pt-8 flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-white/10">
          {/* Active Carousel Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full md:max-w-2xl">
            {slides.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`text-left p-3.5 rounded transition-all duration-300 border text-xs cursor-pointer ${
                    isActive
                      ? 'bg-white/15 border-[#C5A46D] text-white shadow-md backdrop-blur-md'
                      : 'bg-black/25 border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[10px] text-[#C5A46D]">0{index + 1}</span>
                    <span className="text-[10px] text-slate-300 uppercase tracking-wider">
                      {slide.category[currentLang]}
                    </span>
                  </div>
                  <div className="font-semibold truncate text-white">
                    {slide.title[currentLang]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Slider Arrows */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
