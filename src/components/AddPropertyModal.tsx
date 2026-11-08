import React, { useState } from 'react';
import { X, Plus, AlertCircle, CheckCircle } from 'lucide-react';
import { Property, PropertyType, PropertyPurpose, PropertyLocation, Language } from '../types';
import { translations } from '../data/translations';

interface AddPropertyModalProps {
  currentLang: Language;
  isOpen: boolean;
  onClose: () => void;
  onAddProperty: (newProperty: Property) => void;
}

export const AddPropertyModal: React.FC<AddPropertyModalProps> = ({
  currentLang,
  isOpen,
  onClose,
  onAddProperty,
}) => {
  const t = translations[currentLang];
  const [nameEn, setNameEn] = useState('');
  const [nameAm, setNameAm] = useState('');
  const [locationEn, setLocationEn] = useState('Kazanchis, Addis Ababa');
  const [locationAm, setLocationAm] = useState('ካዛንቺስ፣ አዲስ አበባ');
  const [category, setCategory] = useState<PropertyLocation>('kazanchis');
  const [type, setType] = useState<PropertyType>('apartment');
  const [purpose, setPurpose] = useState<PropertyPurpose>('sale');
  const [priceEn, setPriceEn] = useState('Contact for Price');
  const [priceAm, setPriceAm] = useState('ዋጋ በውይይት');
  const [sizeEn, setSizeEn] = useState('140 Sqm');
  const [sizeAm, setSizeAm] = useState('140 ካሬ ሜትር');
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(2);
  const [kitchens, setKitchens] = useState(1);
  const [balconies, setBalconies] = useState(1);
  const [descEn, setDescEn] = useState('');
  const [descAm, setDescAm] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameEn.trim()) return;

    const newUnit: Property = {
      id: `prop-${Date.now()}`,
      name: {
        en: nameEn,
        am: nameAm || nameEn,
      },
      locationName: {
        en: locationEn,
        am: locationAm || locationEn,
      },
      locationCategory: category,
      type,
      purpose,
      priceFormatted: {
        en: priceEn,
        am: priceAm,
      },
      size: {
        en: sizeEn,
        am: sizeAm,
      },
      bedrooms: Number(bedrooms),
      bathrooms: Number(bathrooms),
      kitchens: Number(kitchens),
      balconies: Number(balconies),
      images: [
        type === 'villa'
          ? '/src/assets/images/villa_summit72_exterior_1794125396413.jpg'
          : type === 'office'
          ? '/src/assets/images/commercial_tower_addis_1794125397455.jpg'
          : '/src/assets/images/hero_kazanchis_luxury_1794125396070.jpg',
        '/src/assets/images/interior_living_kazanchis_1794125397684.jpg',
      ],
      description: {
        en: descEn || 'Architecturally designed luxury space constructed with high standard finishes and modern infrastructure.',
        am: descAm || 'በዓለም አቀፍ ደረጃ የተገነባና ዘመናዊ መገልገያዎችን ያካተተ ቅንጡ ንብረት።',
      },
      features: {
        en: [
          'High standard reinforced structure',
          'Elevator & Generator backup',
          'Assigned Parking',
          '24/7 Security & CCTV',
        ],
        am: [
          'ጥንካሬው የተረጋገጠ መዋቅር',
          'የሊፍትና የጄኔሬተር አገልግሎት',
          'የመኪና ማቆሚያ',
          'የ24 ሰዓት ጥበቃ',
        ],
      },
    };

    onAddProperty(newUnit);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#101D2B] text-white p-5 flex items-center justify-between border-b border-[#C5A46D]/20">
          <div>
            <h3 className="font-serif text-xl font-bold">
              {t.modalAddListing.title}
            </h3>
            <p className="text-xs text-slate-300">
              {t.modalAddListing.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white rounded hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSuccess ? (
            <div className="py-12 text-center space-y-3">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
              <p className="font-serif text-lg font-bold text-[#101D2B]">Listing Added to Portfolio</p>
              <p className="text-xs text-slate-500">The property is now immediately discoverable on the website.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.modalAddListing.nameEn} *
                  </label>
                  <input
                    type="text"
                    required
                    value={nameEn}
                    onChange={(e) => setNameEn(e.target.value)}
                    placeholder="e.g. Tower B - Penthouse Suite"
                    className="w-full bg-[#F7F5F0] border border-slate-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#C5A46D]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.modalAddListing.nameAm}
                  </label>
                  <input
                    type="text"
                    value={nameAm}
                    onChange={(e) => setNameAm(e.target.value)}
                    placeholder="ምሳሌ፡ ታወር ቢ - ፔንትሀውስ"
                    className="w-full bg-[#F7F5F0] border border-slate-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#C5A46D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.modalAddListing.category}
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as PropertyLocation)}
                    className="w-full bg-[#F7F5F0] border border-slate-300 rounded px-3 py-2 text-xs"
                  >
                    <option value="kazanchis">Kazanchis</option>
                    <option value="summit">Summit 72</option>
                    <option value="addis_ababa">Addis Ababa Central</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.modalAddListing.type}
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value as PropertyType)}
                    className="w-full bg-[#F7F5F0] border border-slate-300 rounded px-3 py-2 text-xs"
                  >
                    <option value="apartment">Apartment</option>
                    <option value="flat">Flat</option>
                    <option value="villa">Villa</option>
                    <option value="house">House</option>
                    <option value="building">Building</option>
                    <option value="office">Office</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.modalAddListing.purpose}
                  </label>
                  <select
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value as PropertyPurpose)}
                    className="w-full bg-[#F7F5F0] border border-slate-300 rounded px-3 py-2 text-xs"
                  >
                    <option value="sale">For Sale</option>
                    <option value="rent">For Rent</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.modalAddListing.priceEn}
                  </label>
                  <input
                    type="text"
                    value={priceEn}
                    onChange={(e) => setPriceEn(e.target.value)}
                    placeholder="e.g. Contact for Price / $550,000"
                    className="w-full bg-[#F7F5F0] border border-slate-300 rounded px-3 py-2 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.modalAddListing.sizeEn}
                  </label>
                  <input
                    type="text"
                    value={sizeEn}
                    onChange={(e) => setSizeEn(e.target.value)}
                    placeholder="e.g. 185 Sqm"
                    className="w-full bg-[#F7F5F0] border border-slate-300 rounded px-3 py-2 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Beds
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={bedrooms}
                    onChange={(e) => setBedrooms(Number(e.target.value))}
                    className="w-full bg-[#F7F5F0] border border-slate-300 rounded px-2 py-1.5 text-xs text-center"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Baths
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={bathrooms}
                    onChange={(e) => setBathrooms(Number(e.target.value))}
                    className="w-full bg-[#F7F5F0] border border-slate-300 rounded px-2 py-1.5 text-xs text-center"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Kitchen
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={kitchens}
                    onChange={(e) => setKitchens(Number(e.target.value))}
                    className="w-full bg-[#F7F5F0] border border-slate-300 rounded px-2 py-1.5 text-xs text-center"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Balconies
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={balconies}
                    onChange={(e) => setBalconies(Number(e.target.value))}
                    className="w-full bg-[#F7F5F0] border border-slate-300 rounded px-2 py-1.5 text-xs text-center"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-slate-300 text-slate-700 text-xs font-semibold rounded hover:bg-slate-100"
                >
                  {t.modalAddListing.cancelBtn}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#101D2B] hover:bg-[#182B3E] text-white text-xs font-semibold uppercase tracking-wider rounded"
                >
                  {t.modalAddListing.submitBtn}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
