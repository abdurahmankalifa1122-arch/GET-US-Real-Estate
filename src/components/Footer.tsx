import React, { useState } from 'react';
import { Phone, Mail, MapPin, X, Shield, FileText } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  currentLang: Language;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onNavigate }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);
  const t = translations[currentLang];

  return (
    <footer className="bg-[#101D2B] text-white pt-16 pb-12 border-t border-[#C5A46D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Brand & Corporate Intro (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-none border border-[#C5A46D] bg-[#101D2B] flex items-center justify-center text-[#C5A46D] font-serif font-bold text-lg tracking-wider shadow-sm">
                G
              </div>
              <span className="text-xl font-serif tracking-wider font-semibold text-white">
                GET-AS <span className="font-sans text-xs tracking-widest text-[#C5A46D] uppercase font-medium">Real Estate</span>
              </span>
            </div>

            <p className="text-xs uppercase tracking-widest text-[#C5A46D] font-semibold">
              {t.brand.tagline}
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              {t.footer.aboutCompany}
            </p>

            <div className="pt-2 text-xs text-slate-400">
              <span className="text-[#C5A46D] font-medium">Key Developments:</span> Kazanchis Luxury Towers & Summit 72 Gated Compound (40,000 sqm).
            </div>
          </div>

          {/* Quick Links (Col 6-7) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-semibold text-[#DFCA9E]">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-[#C5A46D] transition-colors cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#C5A46D] transition-colors cursor-pointer"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('properties')}
                  className="hover:text-[#C5A46D] transition-colors cursor-pointer"
                >
                  {t.nav.properties}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#C5A46D] transition-colors cursor-pointer"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('summit')}
                  className="hover:text-[#C5A46D] transition-colors cursor-pointer"
                >
                  {t.nav.summit}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('agents')}
                  className="hover:text-[#C5A46D] transition-colors cursor-pointer"
                >
                  {t.nav.agents}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#C5A46D] transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Sister Companies (Col 8-9) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-semibold text-[#DFCA9E]">
              {t.footer.sisterCompaniesTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <span className="font-medium text-white block">DUGDA CONSTRUCTION PLC</span>
                <span className="text-[11px] text-slate-400">Grade-1 Contractor (Est. 2011)</span>
              </li>
              <li>
                <span className="font-medium text-white block">HABESHA CEMENT</span>
                <span className="text-[11px] text-slate-400">OPC & PPC Manufacturer</span>
              </li>
              <li>
                <span className="font-medium text-white block">GLOBAL PAINT</span>
                <span className="text-[11px] text-slate-400">Sons Industry PLC</span>
              </li>
            </ul>
          </div>

          {/* Contact Details (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-semibold text-[#DFCA9E]">
              {t.footer.contactInfoTitle}
            </h4>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                <span>Kazanchis, Addis Ababa, Ethiopia</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                <div className="space-y-1 font-mono">
                  <a href="tel:+251983018080" className="block hover:text-[#C5A46D] transition-colors">
                    +251-983-018080
                  </a>
                  <a href="tel:+251942654444" className="block hover:text-[#C5A46D] transition-colors">
                    +251-942-654444
                  </a>
                  <a href="tel:+251932312727" className="block hover:text-[#C5A46D] transition-colors">
                    +251-932-312727
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A46D] shrink-0" />
                <a href="mailto:john.andu89@gmail.com" className="font-mono hover:text-[#C5A46D] transition-colors">
                  john.andu89@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>{t.footer.copyright}</p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.footer.privacyLink}
            </button>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.footer.termsLink}
            </button>
          </div>
        </div>
      </div>

      {/* Legal Dialog */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white text-slate-900 w-full max-w-xl rounded-lg shadow-2xl overflow-hidden border border-slate-200">
            <div className="bg-[#101D2B] text-white p-5 flex items-center justify-between border-b border-[#C5A46D]/20">
              <div className="flex items-center gap-2 font-serif text-lg font-bold">
                {legalModal === 'privacy' ? <Shield className="w-5 h-5 text-[#C5A46D]" /> : <FileText className="w-5 h-5 text-[#C5A46D]" />}
                <span>{legalModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}</span>
              </div>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1.5 text-slate-300 hover:text-white rounded hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 text-xs text-slate-600 space-y-4 max-h-[60vh] overflow-y-auto leading-relaxed">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    GET-AS Real Estate respects your privacy. Inquiries submitted via this platform are transmitted directly to our authorized sales desk in Kazanchis, Addis Ababa, solely for the purpose of communicating property specifications, payment milestones, and scheduling site visits.
                  </p>
                  <p>
                    We do not sell, rent, or distribute client contact credentials to external third parties. All documentation regarding property purchase remains strictly confidential in accordance with the regulatory framework of Ethiopia.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    All property listings, architectural renderings, and pricing indications are presented for preliminary information and marketing disclosure. Binding contractual commitments are governed exclusively by formal sales agreements executed at GET-AS Real Estate head office in Kazanchis.
                  </p>
                  <p>
                    Reservation of units is contingent upon formal agreement and a maximum reservation fee of 100,000 ETB as stipulated in company guidelines.
                  </p>
                </>
              )}
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 bg-[#101D2B] text-white text-xs font-semibold rounded hover:bg-[#182B3E]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
