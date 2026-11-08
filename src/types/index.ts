export type Language = 'en' | 'am';

export type PropertyType = 'apartment' | 'flat' | 'building' | 'house' | 'villa' | 'office';
export type PropertyPurpose = 'sale' | 'rent';
export type PropertyLocation = 'kazanchis' | 'summit' | 'addis_ababa' | 'other';

export interface Property {
  id: string;
  name: {
    en: string;
    am: string;
  };
  locationName: {
    en: string;
    am: string;
  };
  locationCategory: PropertyLocation;
  type: PropertyType;
  purpose: PropertyPurpose;
  priceFormatted: {
    en: string;
    am: string;
  };
  priceRaw?: number;
  verificationNote?: {
    en: string;
    am: string;
  };
  size: {
    en: string;
    am: string;
  };
  sizeNote?: {
    en: string;
    am: string;
  };
  bedrooms: number;
  bathrooms: number;
  kitchens: number;
  balconies: number;
  images: string[];
  description: {
    en: string;
    am: string;
  };
  features: {
    en: string[];
    am: string[];
  };
  isFeatured?: boolean;
  deliveryYear?: string;
}

export interface FilterState {
  type: string;
  purpose: string;
  location: string;
  searchQuery: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  propertyInterest: string;
  message: string;
}
