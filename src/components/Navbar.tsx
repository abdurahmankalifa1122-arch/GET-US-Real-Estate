import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onToggleLang, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#101D2B]/95 backdrop-blur-md shadow-lg border-b border-[#C5A46D]/20 py-3.5'
          : 'bg-[#101D2B]/80 backdrop-blur-sm border-b border-white/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element Brand Wordmark */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
            aria-label="GET-AS Real Estate Home"
          >
            <div className="w-8 h-8 rounded-none border border-[#C5A46D] bg-[#101D2B] flex items-center justify-center text-[#C5A46D] font-serif font-bold text-lg tracking-wider shadow-sm group-hover:border-white transition-colors">
              G
            </div>
            <span className="text-lg md:text-xl font-serif tracking-wider font-semibold text-white whitespace-nowrap shrink-0 group-hover:text-[#C5A46D] transition-colors">
              GET-AS <span className="font-sans text-xs tracking-widest text-[#C5A46D] uppercase font-medium">Real Estate</span>
            </span>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200">
            <button
              onClick={() => handleNavClick('hero')}
              className="hover:text-[#C5A46D] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="hover:text-[#C5A46D] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => handleNavClick('properties')}
              className="hover:text-[#C5A46D] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {t.nav.properties}
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="hover:text-[#C5A46D] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => handleNavClick('summit')}
              className="hover:text-[#C5A46D] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {t.nav.summit}
            </button>
            <button
              onClick={() => handleNavClick('agents')}
              className="hover:text-[#C5A46D] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {t.nav.agents}
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="hover:text-[#C5A46D] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Zone 3: Language Toggle & Primary CTA Button */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              title="Switch Language / ቋንቋ ይቀይሩ"
            >
              <Globe className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span className="font-semibold">{currentLang === 'en' ? 'አማርኛ' : 'English'}</span>
            </button>

            {/* Direct Call Button (Quick Desktop Affordance) */}
            <a
              href="tel:+251983018080"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#C5A46D] hover:text-white transition-colors whitespace-nowrap shrink-0"
              title="Direct Sales Line"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="font-mono tabular-nums">+251 983 018080</span>
            </a>

            {/* Primary Action Button */}
            <button
              onClick={() => handleNavClick('properties')}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#101D2B] bg-[#C5A46D] hover:bg-[#B5935A] rounded transition-all duration-200 shadow-sm whitespace-nowrap shrink-0 active:scale-95 cursor-pointer"
            >
              {t.nav.exploreBtn}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#101D2B] border-b border-[#C5A46D]/20 px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4 text-sm font-medium text-slate-200">
            <button
              onClick={() => handleNavClick('hero')}
              className="text-left py-2 hover:text-[#C5A46D] border-b border-white/5"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left py-2 hover:text-[#C5A46D] border-b border-white/5"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => handleNavClick('properties')}
              className="text-left py-2 hover:text-[#C5A46D] border-b border-white/5"
            >
              {t.nav.properties}
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="text-left py-2 hover:text-[#C5A46D] border-b border-white/5"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => handleNavClick('summit')}
              className="text-left py-2 hover:text-[#C5A46D] border-b border-white/5"
            >
              {t.nav.summit}
            </button>
            <button
              onClick={() => handleNavClick('agents')}
              className="text-left py-2 hover:text-[#C5A46D] border-b border-white/5"
            >
              {t.nav.agents}
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left py-2 hover:text-[#C5A46D] border-b border-white/5"
            >
              {t.nav.contact}
            </button>
            
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="tel:+251983018080"
                className="flex items-center gap-2 text-sm text-[#C5A46D] py-1 font-mono"
              >
                <Phone className="w-4 h-4" />
                <span>+251-983-018080</span>
              </a>
              <button
                onClick={onToggleLang}
                className="flex items-center justify-center gap-2 py-2 px-4 rounded border border-[#C5A46D]/40 text-[#C5A46D] hover:bg-[#C5A46D]/10 text-xs font-semibold"
              >
                <Globe className="w-4 h-4" />
                <span>{currentLang === 'en' ? 'ቋንቋ ቀይር ወደ አማርኛ' : 'Switch to English'}</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
