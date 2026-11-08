import React from 'react';
import { Phone, Mail, MessageSquare, Award } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface AgentsSectionProps {
  currentLang: Language;
}

export const AgentsSection: React.FC<AgentsSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="agents" className="py-20 lg:py-24 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-[#C5A46D]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#101D2B]">
              {t.agents.kicker}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#101D2B] leading-tight mb-3">
            {t.agents.heading}
          </h2>

          <p className="text-sm text-slate-600">
            {t.agents.subtitle}
          </p>
        </div>

        {/* 3 Advisor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.agents.list.map((agent, idx) => {
            const cleanPhone = agent.phone.replace(/[^0-9+]/g, '');
            const whatsappUrl = `https://wa.me/${cleanPhone.replace('+', '')}?text=${encodeURIComponent(
              `Hello ${agent.name}, I am contacting you regarding GET-AS Real Estate listings.`
            )}`;

            return (
              <div
                key={idx}
                className="bg-white rounded p-7 border border-slate-200 hover:border-[#C5A46D]/60 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded bg-[#101D2B] text-[#C5A46D] font-serif font-bold text-xl flex items-center justify-center border border-[#C5A46D]/30 shadow-sm">
                      {agent.name.charAt(0)}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                      <Award className="w-3.5 h-3.5 text-[#C5A46D]" />
                      <span>Licensed Advisor</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#101D2B] mb-1">
                    {agent.name}
                  </h3>

                  <p className="text-xs font-semibold text-[#C5A46D] uppercase tracking-wider mb-4">
                    {agent.role}
                  </p>

                  <div className="space-y-2 text-xs text-slate-600 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">Office:</span>
                      <span className="font-medium text-[#101D2B]">Kazanchis HQ / Summit 72</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">Languages:</span>
                      <span className="font-medium text-[#101D2B]">{agent.languages}</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Links */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                  <a
                    href={`tel:${cleanPhone}`}
                    className="flex-1 py-2 px-3 bg-[#101D2B] hover:bg-[#182B3E] text-white text-xs font-medium rounded text-center transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C5A46D]" />
                    <span>Call</span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium rounded text-center transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
