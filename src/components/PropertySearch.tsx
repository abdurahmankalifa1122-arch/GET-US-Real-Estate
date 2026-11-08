import React from 'react';
import { Search, MapPin, Home, Key, RotateCcw } from 'lucide-react';
import { Language, FilterState } from '../types';
import { translations } from '../data/translations';

interface PropertySearchProps {
  currentLang: Language;
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  onSearchSubmit: () => void;
  onReset: () => void;
  totalMatches: number;
}

export const PropertySearch: React.FC<PropertySearchProps> = ({
  currentLang,
  filters,
  onFilterChange,
  onSearchSubmit,
  onReset,
  totalMatches,
}) => {
  const t = translations[currentLang];

  const handleFieldChange = (field: keyof FilterState, value: string) => {
    onFilterChange({
      ...filters,
      [field]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit();
  };

  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 mb-16">
      <div className="bg-white rounded-lg shadow-2xl border border-slate-200/80 p-5 sm:p-7">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row lg:items-end gap-4">
            {/* Property Type */}
            <div className="flex-1 min-w-[180px]">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>{t.search.typeLabel}</span>
              </label>
              <select
                value={filters.type}
                onChange={(e) => handleFieldChange('type', e.target.value)}
                className="w-full bg-[#F7F5F0] border border-slate-300 rounded px-3.5 py-2.5 text-sm font-medium text-[#20252B] focus:outline-none focus:border-[#C5A46D] transition-colors cursor-pointer"
              >
                <option value="">{t.search.allTypes}</option>
                <option value="apartment">{t.search.types.apartment}</option>
                <option value="flat">{t.search.types.flat}</option>
                <option value="villa">{t.search.types.villa}</option>
                <option value="house">{t.search.types.house}</option>
                <option value="building">{t.search.types.building}</option>
                <option value="office">{t.search.types.office}</option>
              </select>
            </div>

            {/* Purpose */}
            <div className="flex-1 min-w-[160px]">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                <Key className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>{t.search.purposeLabel}</span>
              </label>
              <select
                value={filters.purpose}
                onChange={(e) => handleFieldChange('purpose', e.target.value)}
                className="w-full bg-[#F7F5F0] border border-slate-300 rounded px-3.5 py-2.5 text-sm font-medium text-[#20252B] focus:outline-none focus:border-[#C5A46D] transition-colors cursor-pointer"
              >
                <option value="">{t.search.allPurposes}</option>
                <option value="sale">{t.search.purposes.sale}</option>
                <option value="rent">{t.search.purposes.rent}</option>
              </select>
            </div>

            {/* Location */}
            <div className="flex-1 min-w-[180px]">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>{t.search.locationLabel}</span>
              </label>
              <select
                value={filters.location}
                onChange={(e) => handleFieldChange('location', e.target.value)}
                className="w-full bg-[#F7F5F0] border border-slate-300 rounded px-3.5 py-2.5 text-sm font-medium text-[#20252B] focus:outline-none focus:border-[#C5A46D] transition-colors cursor-pointer"
              >
                <option value="">{t.search.allLocations}</option>
                <option value="kazanchis">{t.search.locations.kazanchis}</option>
                <option value="summit">{t.search.locations.summit}</option>
                <option value="addis_ababa">{t.search.locations.addis_ababa}</option>
                <option value="other">{t.search.locations.other}</option>
              </select>
            </div>

            {/* Keyword Search */}
            <div className="flex-1 min-w-[200px]">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>Keyword / Unit</span>
              </label>
              <input
                type="text"
                value={filters.searchQuery}
                onChange={(e) => handleFieldChange('searchQuery', e.target.value)}
                placeholder="e.g. Wing 1, Villa, 2 Bed..."
                className="w-full bg-[#F7F5F0] border border-slate-300 rounded px-3.5 py-2.5 text-sm font-medium text-[#20252B] placeholder-slate-400 focus:outline-none focus:border-[#C5A46D] transition-colors"
              />
            </div>

            {/* Actions: Search Button & Reset */}
            <div className="flex items-center gap-2 pt-2 lg:pt-0 shrink-0">
              <button
                type="submit"
                className="flex-1 lg:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#101D2B] hover:bg-[#182B3E] text-white font-semibold text-xs uppercase tracking-wider rounded transition-all duration-200 shadow active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <Search className="w-4 h-4 text-[#C5A46D]" />
                <span>{t.search.searchBtn}</span>
              </button>

              {(filters.type || filters.purpose || filters.location || filters.searchQuery) && (
                <button
                  type="button"
                  onClick={onReset}
                  className="p-2.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded transition-colors cursor-pointer"
                  title={t.search.resetBtn}
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </form>

        {/* Active Filter Indicator */}
        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>Filtering Portfolio</span>
            <span aria-hidden="true">·</span>
            <span className="font-semibold text-[#101D2B] tabular-nums">{totalMatches}</span>
            <span>{t.search.resultsCount}</span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-[11px] text-slate-400">
            <span>Primary Hubs: Kazanchis & Summit 72</span>
          </div>
        </div>
      </div>
    </div>
  );
};
