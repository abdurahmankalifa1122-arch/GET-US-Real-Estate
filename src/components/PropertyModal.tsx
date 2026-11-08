import React, { useState } from 'react';
import { X, Bed, Bath, ChefHat, Maximize2, MapPin, Phone, Send, CheckCircle2, AlertCircle, Share2, Compass } from 'lucide-react';
import { Property, Language } from '../types';
import { translations } from '../data/translations';

interface PropertyModalProps {
  property: Property | null;
  currentLang: Language;
  onClose: () => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({ property, currentLang, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!property) return null;

  const t = translations[currentLang];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryPhone.trim()) {
      return;
    }
    // Simulate real client submission
    setSubmitted(true);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello GET-AS Real Estate, I am interested in inquiring about ${property.name.en} located at ${property.locationName.en}. Please share full details and pricing.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-[#101D2B] text-white px-6 py-4 flex items-center justify-between border-b border-[#C5A46D]/20 shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider bg-[#C5A46D] text-[#101D2B]">
              {property.purpose === 'sale' ? t.search.purposes.sale : t.search.purposes.rent}
            </span>
            <span className="text-sm font-medium text-slate-300 hidden sm:inline">
              {property.locationName[currentLang]}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-1.5 text-slate-300 hover:text-white rounded hover:bg-white/10 transition-colors text-xs flex items-center gap-1 cursor-pointer"
              title="Share listing"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">{copiedLink ? 'Copied' : 'Share'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-300 hover:text-white rounded hover:bg-white/10 transition-colors cursor-pointer"
              aria-label={t.propertyModal.close}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-8 space-y-8">
          {/* Main Title & Price Row */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>{property.locationName[currentLang]}</span>
                {property.deliveryYear && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-700 font-medium">{property.deliveryYear}</span>
                  </>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#101D2B]">
                {property.name[currentLang]}
              </h2>
            </div>

            <div className="text-left md:text-right">
              <span className="text-xs text-slate-500 uppercase tracking-wider block mb-0.5">
                Listing Price
              </span>
              <span className="text-xl sm:text-2xl font-serif font-semibold text-[#101D2B] text-[#C5A46D]">
                {property.priceFormatted[currentLang]}
              </span>
            </div>
          </div>

          {/* Verification Notice Banner if present */}
          {property.verificationNote && (
            <div className="p-3.5 bg-amber-50/90 border border-amber-200/80 rounded text-xs text-amber-900 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-semibold">{property.verificationNote[currentLang]}</p>
                {property.sizeNote && <p className="text-amber-800">{property.sizeNote[currentLang]}</p>}
              </div>
            </div>
          )}

          {/* Gallery View */}
          <div>
            <div className="relative h-64 sm:h-96 rounded overflow-hidden bg-slate-900 border border-slate-200">
              <img
                src={property.images[activeImageIndex] || property.images[0]}
                alt={property.name[currentLang]}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-sm text-white text-xs font-mono">
                {activeImageIndex + 1} / {property.images.length}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            {property.images.length > 1 && (
              <div className="flex gap-3 mt-3 overflow-x-auto pb-1">
                {property.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`relative w-24 h-16 rounded overflow-hidden border-2 shrink-0 cursor-pointer ${
                      activeImageIndex === i ? 'border-[#C5A46D]' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Key Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 p-4 bg-[#F7F5F0] rounded border border-slate-200 text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <Bed className="w-4 h-4 text-[#C5A46D]" />
              <div>
                <span className="block font-semibold text-[#101D2B]">{property.bedrooms}</span>
                <span className="text-slate-500">{t.propertiesSection.beds}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Bath className="w-4 h-4 text-[#C5A46D]" />
              <div>
                <span className="block font-semibold text-[#101D2B]">{property.bathrooms}</span>
                <span className="text-slate-500">{t.propertiesSection.baths}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <ChefHat className="w-4 h-4 text-[#C5A46D]" />
              <div>
                <span className="block font-semibold text-[#101D2B]">{property.kitchens}</span>
                <span className="text-slate-500">{t.propertiesSection.kitchen}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Compass className="w-4 h-4 text-[#C5A46D]" />
              <div>
                <span className="block font-semibold text-[#101D2B]">{property.balconies}</span>
                <span className="text-slate-500">{t.propertiesSection.balcony}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-700 col-span-2 sm:col-span-1">
              <Maximize2 className="w-4 h-4 text-[#C5A46D]" />
              <div>
                <span className="block font-semibold text-[#101D2B] truncate">{property.size[currentLang]}</span>
                <span className="text-slate-500">Area</span>
              </div>
            </div>
          </div>

          {/* Description & Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-lg font-semibold text-[#101D2B] mb-3">
                {t.propertyModal.overview}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {property.description[currentLang]}
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold text-[#101D2B] mb-3">
                {t.propertyModal.featuresAndAmenities}
              </h3>
              <ul className="grid grid-cols-1 gap-2 text-xs text-slate-700">
                {property.features[currentLang].map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Inquiry Panel */}
          <div className="p-6 bg-slate-50 rounded border border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <h4 className="font-serif text-lg font-semibold text-[#101D2B]">
                  {t.propertyModal.inquiryTitle}
                </h4>
                <p className="text-xs text-slate-600">
                  {t.propertyModal.inquirySubtitle}
                </p>
              </div>

              {/* Direct Actions */}
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="tel:+251983018080"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#101D2B] text-white rounded text-xs font-medium hover:bg-[#182B3E] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A46D]" />
                  <span>{t.propertyModal.callNow}</span>
                </a>
                <a
                  href={`https://wa.me/251983018080?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 text-white rounded text-xs font-medium hover:bg-emerald-700 transition-colors"
                >
                  <span>{t.propertyModal.whatsappBtn}</span>
                </a>
              </div>
            </div>

            {submitted ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t.propertyModal.formSuccess}</span>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="Your Full Name *"
                    className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-[#20252B] focus:outline-none focus:border-[#C5A46D]"
                  />
                  <input
                    type="tel"
                    required
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    placeholder="Phone Number (+251...) *"
                    className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-[#20252B] focus:outline-none focus:border-[#C5A46D]"
                  />
                  <input
                    type="email"
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-[#20252B] focus:outline-none focus:border-[#C5A46D]"
                  />
                </div>
                <textarea
                  rows={2}
                  value={inquiryMsg}
                  onChange={(e) => setInquiryMsg(e.target.value)}
                  placeholder="I would like to inquire regarding pricing, payment options, or scheduling a visit for this listing..."
                  className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-[#20252B] focus:outline-none focus:border-[#C5A46D]"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#C5A46D] hover:bg-[#B5935A] text-[#101D2B] font-semibold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer inline-flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t.propertyModal.sendInquiry}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
