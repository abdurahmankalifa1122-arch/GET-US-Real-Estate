import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';
import { Language, ContactFormData } from '../types';
import { translations } from '../data/translations';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    propertyInterest: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [activeMapTab, setActiveMapTab] = useState<'kazanchis' | 'summit'>('kazanchis');

  const phoneNumbers = [
    { display: '+251-983-018080', raw: '+251983018080', label: 'Senior Advisor Line' },
    { display: '+251-942-654444', raw: '+251942654444', label: 'Summit 72 Sales' },
    { display: '+251-932-312727', raw: '+251932312727', label: 'Commercial & Rental' },
  ];

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage(t.contact.form.validationError);
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    // Simulate real client-side validation and receipt recording
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Also save inquiry in localStorage for persistence
      try {
        const existingInquiries = JSON.parse(localStorage.getItem('getas_inquiries') || '[]');
        existingInquiries.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('getas_inquiries', JSON.stringify(existingInquiries));
      } catch (err) {
        // ignore storage error
      }
    }, 600);
  };

  const whatsappInquiryUrl = `https://wa.me/251983018080?text=${encodeURIComponent(
    `Hello GET-AS Real Estate, I would like to schedule a property consultation in Kazanchis.`
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-[#C5A46D]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#101D2B]">
              {t.contact.kicker}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#101D2B] leading-tight mb-4">
            {t.contact.heading}
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Split: Direct Contact & Location info vs. Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Phone numbers, Address, Map */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Telephone Access */}
            <div className="bg-[#F7F5F0] p-6 rounded border border-slate-200">
              <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#101D2B] mb-4">
                <Phone className="w-4 h-4 text-[#C5A46D]" />
                <span>{t.contact.phonesTitle}</span>
              </div>

              <div className="space-y-3">
                {phoneNumbers.map((phone, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-white rounded border border-slate-200">
                    <div>
                      <span className="font-mono text-sm font-semibold text-[#101D2B] block">
                        {phone.display}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        {phone.label}
                      </span>
                    </div>

                    <a
                      href={`tel:${phone.raw}`}
                      className="px-3 py-1.5 bg-[#101D2B] hover:bg-[#C5A46D] text-white hover:text-[#101D2B] text-xs font-semibold uppercase tracking-wider rounded transition-colors whitespace-nowrap"
                    >
                      {t.contact.directCall}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Email & Instant Messaging */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-emerald-50 rounded border border-emerald-200 hover:border-emerald-400 transition-colors flex flex-col justify-between"
              >
                <div>
                  <MessageSquare className="w-5 h-5 text-emerald-700 mb-2" />
                  <span className="font-semibold text-xs text-emerald-950 block mb-1">
                    WhatsApp Chat
                  </span>
                  <p className="text-[11px] text-emerald-800">
                    Direct conversation with sales advisors
                  </p>
                </div>
                <span className="mt-3 text-xs font-bold text-emerald-700 inline-flex items-center gap-1">
                  <span>{t.contact.whatsappChat}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>

              <a
                href="mailto:john.andu89@gmail.com?subject=GET-AS%20Real%20Estate%20Inquiry"
                className="p-5 bg-[#F7F5F0] rounded border border-slate-200 hover:border-[#C5A46D] transition-colors flex flex-col justify-between"
              >
                <div>
                  <Mail className="w-5 h-5 text-[#C5A46D] mb-2" />
                  <span className="font-semibold text-xs text-[#101D2B] block mb-1">
                    {t.contact.emailTitle}
                  </span>
                  <p className="text-[11px] text-slate-600 truncate font-mono">
                    john.andu89@gmail.com
                  </p>
                </div>
                <span className="mt-3 text-xs font-bold text-[#101D2B] inline-flex items-center gap-1">
                  <span>{t.contact.sendEmail}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>

            {/* Address & Working Hours */}
            <div className="p-6 bg-white rounded border border-slate-200 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#101D2B] block mb-0.5">
                    {t.contact.addressTitle}
                  </span>
                  <p className="text-sm text-slate-700 font-medium">
                    {t.contact.addressValue}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Kazanchis Financial & Diplomatic Corridor, Addis Ababa
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <Clock className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#101D2B] block mb-0.5">
                    {t.contact.hoursTitle}
                  </span>
                  <p className="text-xs text-slate-700">
                    {t.contact.hoursValue}
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Map Selector */}
            <div className="rounded overflow-hidden border border-slate-200">
              <div className="bg-[#101D2B] p-3 text-white flex items-center justify-between text-xs">
                <span className="font-semibold">{t.contact.mapLocationTitle}</span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveMapTab('kazanchis')}
                    className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                      activeMapTab === 'kazanchis' ? 'bg-[#C5A46D] text-[#101D2B]' : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    Kazanchis HQ
                  </button>
                  <button
                    onClick={() => setActiveMapTab('summit')}
                    className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                      activeMapTab === 'summit' ? 'bg-[#C5A46D] text-[#101D2B]' : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    Summit 72 Compound
                  </button>
                </div>
              </div>

              <div className="relative h-56 bg-slate-100 overflow-hidden">
                {activeMapTab === 'kazanchis' ? (
                  <iframe
                    title="Kazanchis Addis Ababa Location"
                    src="https://maps.google.com/maps?q=Kazanchis%2C%20Addis%20Ababa%2C%20Ethiopia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                ) : (
                  <iframe
                    title="Summit 72 Addis Ababa Location"
                    src="https://maps.google.com/maps?q=Summit%2072%2C%20Addis%20Ababa%2C%20Ethiopia&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F7F5F0] p-7 sm:p-10 rounded border border-slate-200 shadow-sm">
              <div className="mb-8">
                <h3 className="font-serif text-2xl font-bold text-[#101D2B] mb-2">
                  {t.contact.form.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t.contact.form.subtitle}
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 bg-white rounded border border-emerald-300 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#101D2B]">
                    Inquiry Successfully Logged
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    {t.contact.form.successMessage}
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          propertyInterest: '',
                          message: '',
                        });
                      }}
                      className="px-5 py-2.5 bg-[#101D2B] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#182B3E] transition-colors cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded text-xs text-red-800 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#101D2B] mb-1.5">
                        {t.contact.form.nameLabel}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder={t.contact.form.namePlaceholder}
                        className="w-full bg-white border border-slate-300 rounded px-3.5 py-2.5 text-xs text-[#20252B] focus:outline-none focus:border-[#C5A46D] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#101D2B] mb-1.5">
                        {t.contact.form.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder={t.contact.form.phonePlaceholder}
                        className="w-full bg-white border border-slate-300 rounded px-3.5 py-2.5 text-xs text-[#20252B] focus:outline-none focus:border-[#C5A46D] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#101D2B] mb-1.5">
                        {t.contact.form.emailLabel}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder={t.contact.form.emailPlaceholder}
                        className="w-full bg-white border border-slate-300 rounded px-3.5 py-2.5 text-xs text-[#20252B] focus:outline-none focus:border-[#C5A46D] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#101D2B] mb-1.5">
                        {t.contact.form.interestLabel}
                      </label>
                      <select
                        value={formData.propertyInterest}
                        onChange={(e) => handleInputChange('propertyInterest', e.target.value)}
                        className="w-full bg-white border border-slate-300 rounded px-3.5 py-2.5 text-xs text-[#20252B] focus:outline-none focus:border-[#C5A46D] transition-colors cursor-pointer"
                      >
                        <option value="">{t.contact.form.interestOptions.select}</option>
                        <option value="Wing 1 Type 1 Kazanchis">{t.contact.form.interestOptions.wing1}</option>
                        <option value="Summit 72 Luxury Villa">{t.contact.form.interestOptions.summitVilla}</option>
                        <option value="Summit 72 Family Rent">{t.contact.form.interestOptions.summitRent}</option>
                        <option value="Commercial Tower Kazanchis">{t.contact.form.interestOptions.commercial}</option>
                        <option value="General Consultation">{t.contact.form.interestOptions.general}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#101D2B] mb-1.5">
                      {t.contact.form.messageLabel}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder={t.contact.form.messagePlaceholder}
                      className="w-full bg-white border border-slate-300 rounded px-3.5 py-2.5 text-xs text-[#20252B] focus:outline-none focus:border-[#C5A46D] transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 bg-[#101D2B] hover:bg-[#182B3E] text-white font-semibold text-xs uppercase tracking-wider rounded transition-all duration-200 shadow cursor-pointer active:scale-95 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>{t.contact.form.sending}</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#C5A46D]" />
                          <span>{t.contact.form.submitBtn}</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
