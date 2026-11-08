import React, { useState } from 'react';
import { MapPin, Bed, Bath, Maximize2, ArrowRight, PlusCircle, AlertCircle } from 'lucide-react';
import { Property, Language } from '../types';
import { translations } from '../data/translations';

interface FeaturedPropertiesProps {
  properties: Property[];
  currentLang: Language;
  onSelectProperty: (property: Property) => void;
  onOpenAddModal: () => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  properties,
  currentLang,
  onSelectProperty,
  onOpenAddModal,
}) => {
  const [purposeFilter, setPurposeFilter] = useState<'all' | 'sale' | 'rent'>('all');
  const t = translations[currentLang];

  const displayedProperties = properties.filter((item) => {
    if (purposeFilter === 'all') return true;
    return item.purpose === purposeFilter;
  });

  return (
    <section id="properties" className="py-20 lg:py-28 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Segmented Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-px bg-[#C5A46D]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#101D2B]">
                {t.propertiesSection.kicker}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#101D2B] leading-tight mb-2">
              {t.propertiesSection.heading}
            </h2>
            <p className="text-sm text-slate-600 max-w-xl">
              {t.propertiesSection.subtitle}
            </p>
          </div>

          {/* Interactive Filter Segmented Control & Add Listing Button */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center p-1 bg-white rounded border border-slate-200 shadow-sm">
              <button
                onClick={() => setPurposeFilter('all')}
                className={`px-4 py-1.5 text-xs font-semibold rounded transition-colors whitespace-nowrap cursor-pointer ${
                  purposeFilter === 'all'
                    ? 'bg-[#101D2B] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.propertiesSection.filterAll}
              </button>
              <button
                onClick={() => setPurposeFilter('sale')}
                className={`px-4 py-1.5 text-xs font-semibold rounded transition-colors whitespace-nowrap cursor-pointer ${
                  purposeFilter === 'sale'
                    ? 'bg-[#101D2B] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.propertiesSection.filterSale}
              </button>
              <button
                onClick={() => setPurposeFilter('rent')}
                className={`px-4 py-1.5 text-xs font-semibold rounded transition-colors whitespace-nowrap cursor-pointer ${
                  purposeFilter === 'rent'
                    ? 'bg-[#101D2B] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.propertiesSection.filterRent}
              </button>
            </div>

            <button
              onClick={onOpenAddModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold bg-white hover:bg-slate-50 text-[#101D2B] border border-[#C5A46D] rounded transition-colors shadow-sm cursor-pointer whitespace-nowrap"
            >
              <PlusCircle className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>{t.propertiesSection.addNewListing}</span>
            </button>
          </div>
        </div>

        {/* Property Grid */}
        {displayedProperties.length === 0 ? (
          <div className="text-center py-16 bg-white rounded border border-slate-200 p-8">
            <p className="text-sm text-slate-500 mb-4">{t.search.noResults}</p>
            <button
              onClick={() => setPurposeFilter('all')}
              className="px-4 py-2 bg-[#101D2B] text-white text-xs font-medium rounded"
            >
              Show All Properties
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProperties.map((prop) => (
              <div
                key={prop.id}
                className={`bg-white rounded overflow-hidden border transition-all duration-300 hover:shadow-2xl flex flex-col justify-between group ${
                  prop.id === 'wing-1-type-1'
                    ? 'border-[#C5A46D] ring-1 ring-[#C5A46D]/30'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Image Section */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
                  <img
                    src={prop.images[0]}
                    alt={prop.name[currentLang]}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Purpose Status Badge (Top-left) */}
                  <div className="absolute top-3.5 left-3.5 px-2.5 py-1 bg-[#101D2B]/90 backdrop-blur-sm border border-white/20 text-white text-[10px] uppercase font-bold tracking-wider rounded">
                    {prop.purpose === 'sale' ? t.search.purposes.sale : t.search.purposes.rent}
                  </div>

                  {/* Featured Badge if applicable */}
                  {prop.id === 'wing-1-type-1' && (
                    <div className="absolute top-3.5 right-3.5 px-2.5 py-1 bg-[#C5A46D] text-[#101D2B] text-[10px] uppercase font-bold tracking-wider rounded shadow">
                      Featured Listing
                    </div>
                  )}

                  {/* Price Banner overlay */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-white">
                    <div>
                      <span className="text-[10px] text-slate-300 uppercase tracking-widest block">
                        Price
                      </span>
                      <span className="font-serif text-lg font-bold text-[#DFCA9E]">
                        {prop.priceFormatted[currentLang]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Location kicker */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A46D]" />
                      <span className="truncate">{prop.locationName[currentLang]}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl font-bold text-[#101D2B] mb-2 group-hover:text-[#B5935A] transition-colors">
                      {prop.name[currentLang]}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {prop.description[currentLang]}
                    </p>

                    {/* Verification Note for Wing 1 Type 1 */}
                    {prop.verificationNote && (
                      <div className="mb-4 p-2 bg-amber-50 rounded border border-amber-200/80 text-[11px] text-amber-900 flex items-start gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                        <span className="leading-tight">
                          115 Sqft record preserved &bull; Verified upon consultation
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Meta Specs Bar */}
                  <div>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 mb-4">
                      {prop.bedrooms > 0 && (
                        <div className="flex items-center gap-1">
                          <Bed className="w-3.5 h-3.5 text-[#C5A46D]" />
                          <span>{prop.bedrooms} {t.propertiesSection.beds}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Bath className="w-3.5 h-3.5 text-[#C5A46D]" />
                        <span>{prop.bathrooms} {t.propertiesSection.baths}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Maximize2 className="w-3.5 h-3.5 text-[#C5A46D]" />
                        <span className="truncate max-w-[100px]">{prop.size[currentLang]}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => onSelectProperty(prop)}
                      className="w-full py-2.5 px-4 bg-[#101D2B] hover:bg-[#182B3E] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm group-hover:bg-[#C5A46D] group-hover:text-[#101D2B]"
                    >
                      <span>{t.propertiesSection.viewDetails}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
