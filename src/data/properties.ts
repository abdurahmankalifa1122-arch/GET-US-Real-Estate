import { Property } from '../types';
import { propertyImages } from '../assets/images';

export const initialProperties: Property[] = [
  {
    id: 'wing-1-type-1',
    name: {
      en: 'Wing 1 Type 1',
      am: 'ዊንግ 1 ታይፕ 1',
    },
    locationName: {
      en: 'Kazanchis, Addis Ababa',
      am: 'ካዛንቺስ፣ አዲስ አበባ',
    },
    locationCategory: 'kazanchis',
    type: 'apartment',
    purpose: 'sale',
    priceFormatted: {
      en: 'Contact for Price ($990,000 ref)',
      am: 'ዋጋ በውይይት ($990,000 ማመሳከሪያ)',
    },
    priceRaw: 990000,
    verificationNote: {
      en: 'Price Verification Notice: Official listing price of $990,000 is preserved from supplied documentation; final price is verified upon direct consultation.',
      am: 'የዋጋ ማረጋገጫ ማስታወሻ፡ በመዝገብ የተጠቀሰው የ$990,000 ዋጋ ከተያያዘው መረጃ የተወሰደ ሲሆን፣ ትክክለኛው ዋጋ በውይይት ወቅት ይረጋገጣል።',
    },
    size: {
      en: '115 Sqft (Preserved record)',
      am: '115 ስኩዌር ፊት (የመዝገብ ስፋት)',
    },
    sizeNote: {
      en: 'Size Note: 115 Sqft preserved from company records; floor layout spans 2 bedrooms, 2 bathrooms, kitchen and 2 balconies.',
      am: 'የስፋት ማስታወሻ፡ 115 ስኩዌር ፊት ከመዝገብ የተጠበቀ ሲሆን 2 መኝታ፣ 2 መታጠቢያ፣ ወጥ ቤትና 2 በረንዳዎችን ያካተተ ነው።',
    },
    bedrooms: 2,
    bathrooms: 2,
    kitchens: 1,
    balconies: 2,
    images: [
      propertyImages.heroKazanchis,
      propertyImages.interiorLiving,
    ],
    description: {
      en: 'Wing 1 Type 1 is a premium residential unit located in the prestigious Kazanchis corridor of Addis Ababa. Meticulously designed with two private bedrooms, two fully finished bathrooms, an ergonomic modern kitchen, and dual scenic balconies with views over the Addis Ababa cityscape. Built to international structural standards with imported finishes.',
      am: 'ዊንግ 1 ታይፕ 1 በካዛንቺስ አዲስ አበባ ውስጥ የሚገኝ ድንቅ የመኖሪያ ክፍል ነው። ሁለት የግል መኝታ ቤቶች፣ ሁለት የተሟሉ መታጠቢያ ቤቶች፣ ዘመናዊ ወጥ ቤትና የከተማዋን ውበት የሚያሳዩ ሁለት በረንዳዎችን ያካተተ ነው። በዓለም አቀፍ ደረጃ የተገነባና የጥራት ማረጋገጫ ያለው።',
    },
    features: {
      en: [
        'Dual Panoramic Balconies',
        '2 Finished Modern Bathrooms',
        'Custom Contemporary Kitchen',
        'High-Speed Schindler Elevators',
        '24/7 Security & CCTV Monitoring',
        'Backup Generator & Deep Well Water',
        'Underground Assigned Parking',
        'Close to UNECA & Kazanchis Business Hub',
      ],
      am: [
        'ሁለት ውብ በረንዳዎች',
        'ሁለት የተሟሉ ዘመናዊ መታጠቢያዎች',
        'ዘመናዊ የወጥ ቤት ዕቃዎች',
        'ፈጣን የሊፍት አገልግሎት',
        'የ24 ሰዓት የጥበቃና የCCTV ቁጥጥር',
        'አስተማማኝ ጄኔሬተርና የከርሰ ምድር ውሃ',
        'የከርሰ ምድር የመኪና ማቆሚያ',
        'ለኢኮኖሚክ ኮሚሽንና ለካዛንቺስ ንግድ ማዕከላት ቅርብ',
      ],
    },
    isFeatured: true,
    deliveryYear: 'Ready for Handover',
  },
  {
    id: 'summit-72-signature-villa',
    name: {
      en: 'Summit 72 Signature G+1 Villa',
      am: 'ሰሚት 72 ሲግኔቸር ጂ+1 ቪላ',
    },
    locationName: {
      en: 'Summit 72, Addis Ababa',
      am: 'ሰሚት 72፣ አዲስ አበባ',
    },
    locationCategory: 'summit',
    type: 'villa',
    purpose: 'sale',
    priceFormatted: {
      en: 'Contact for Price / Milestone Plan',
      am: 'ዋጋ በውይይት / የክፍያ አማራጭ',
    },
    size: {
      en: '380 Sqm Compound Area',
      am: '380 ካሬ ሜትር ግቢ',
    },
    bedrooms: 4,
    bathrooms: 4,
    kitchens: 2,
    balconies: 3,
    images: [
      propertyImages.villaSummit72,
      propertyImages.villaGardenCompound,
      propertyImages.interiorLiving,
    ],
    description: {
      en: 'An architectural centerpiece within GET-AS’s premier 40,000 square meter compound in Summit 72. This private G+1 villa offers four lavish en-suite bedrooms, open-concept living salons, private outdoor terrace, manicured lawn garden, family entertainment room, and staff quarters.',
      am: 'በጌት-አስ 40,000 ካሬ ሜትር የሰሚት 72 ግቢ ውስጥ የተገነባ ድንቅ ጂ+1 ቪላ። አራት ሰፋፊ መኝታ ቤቶች፣ ዘመናዊ ሳሎን፣ የግል የአትክልት ስፍራ፣ የቤተሰብ መዝናኛ እና የሰራተኛ ክፍሎችን ያካተተ ውብ መኖሪያ።',
    },
    features: {
      en: [
        'Private G+1 Standalone Villa',
        '4 En-Suite Bedrooms with Walk-in Closets',
        'Manicured Private Lawn & Terrace',
        'Modern Dirty & Clean Kitchens',
        'Gated Community 24/7 Security Gatehouse',
        'Paved Cobblestone Avenues',
        'Guaranteed Title Deed Transfer',
      ],
      am: [
        'የግል ጂ+1 ዘመናዊ ቪላ',
        '4 ሰፋፊ መኝታ ቤቶች ከመታጠቢያ ጋር',
        'የግል አትክልት ስፍራና ቴራስ',
        'ዘመናዊ ንጹህና የባህል ወጥ ቤቶች',
        'አስተማማኝ የጥበቃ አጥርና በር',
        'የተጣፈ የድንጋይ ጎዳናዎች',
        'ህጋዊ የይዞታ ማረጋገጫ (ካርታ)',
      ],
    },
    isFeatured: true,
    deliveryYear: '90% Complete / Phase Delivery',
  },
  {
    id: 'kazanchis-executive-suite',
    name: {
      en: 'Kazanchis Sky Suite',
      am: 'የካዛንቺስ ስካይ ስዊት',
    },
    locationName: {
      en: 'Kazanchis, Addis Ababa',
      am: 'ካዛንቺስ፣ አዲስ አበባ',
    },
    locationCategory: 'kazanchis',
    type: 'apartment',
    purpose: 'sale',
    priceFormatted: {
      en: 'Contact for Price',
      am: 'ዋጋ በውይይት',
    },
    size: {
      en: '165 Sqm',
      am: '165 ካሬ ሜትር',
    },
    bedrooms: 3,
    bathrooms: 3,
    kitchens: 1,
    balconies: 2,
    images: [
      propertyImages.heroKazanchis,
      propertyImages.interiorLiving,
    ],
    description: {
      en: 'Positioned on the upper floors of GET-AS Kazanchis tower, featuring expansive glass windows, uninterrupted panoramic vistas of the capital, European oak engineered floors, and sound-insulated double glazing.',
      am: 'በካዛንቺስ ታወር ላይ የሚገኝ ባለ 3 መኝታ ቅንጡ አፓርታማ። የአዲስ አበባን ፓኖራሚክ እይታ የሚያሳይ፣ ድምፅ የማይሰሙ መስኮቶችና ከፍተኛ የደህንነት ስርዓት ያለው።',
    },
    features: {
      en: [
        'Panoramic Skyline City View',
        'Master Bedroom with Jacuzzi Suite',
        'Central Intercom & Fiber Internet',
        '2 Dedicated Parking Bays',
        'Card Access Electronic Security',
      ],
      am: [
        'የአዲስ አበባን ከተማ የሚያሳይ እይታ',
        'ዋናው መኝታ ቤት ከጃኩዚ ጋር',
        'ኢንተርኮምና ፈጣን ፋይበር ኢንተርኔት',
        '2 የተመደቡ የመኪና ማቆሚያዎች',
        'በካርድ የሚሰራ ዘመናዊ ደህንነት',
      ],
    },
    isFeatured: true,
  },
  {
    id: 'commercial-business-plaza',
    name: {
      en: 'Kazanchis Business Tower Floor',
      am: 'የካዛንቺስ ቢዝነስ ታወር ሙሉ ወለል',
    },
    locationName: {
      en: 'Kazanchis Corporate District',
      am: 'ካዛንቺስ የንግድ ቀጠና',
    },
    locationCategory: 'kazanchis',
    type: 'office',
    purpose: 'rent',
    priceFormatted: {
      en: 'Contact for Commercial Lease',
      am: 'ለኪራይ ዋጋ በውይይት',
    },
    size: {
      en: '320 Sqm Open Floor',
      am: '320 ካሬ ሜትር ክፍት ወለል',
    },
    bedrooms: 0,
    bathrooms: 4,
    kitchens: 1,
    balconies: 1,
    images: [
      propertyImages.commercialTower,
    ],
    description: {
      en: 'Prime commercial office floor with flexible open-plan layout, bronze sun-shading facade, dual high-capacity generators, executive conference rooms, and high visibility on the main Kazanchis thoroughfare.',
      am: 'በካዛንቺስ ዋና መንገድ ላይ የሚገኝ ለድርጅቶችና ለባንኮች ምቹ የሆነ የቢሮ ወለል። ሙሉ ኃይል ሰጪ ጄኔሬተሮች፣ የኮንፈረንስ አዳራሾችና ምቹ የመኪና ማቆሚያ ያለው።',
    },
    features: {
      en: [
        'Column-Free Open Workspaces',
        'Executive Restrooms & Pantry',
        'Continuous Industrial Power Backup',
        'Corporate Lobby with Reception Desk',
      ],
      am: [
        'ሰፊና ምቹ ክፍት የቢሮ ቦታ',
        'የአስተዳዳሪ መታጠቢያዎችና ሻይ ቤት',
        'ቀጣይነት ያለው የጄኔሬተር ኃይል',
        'የእንግዳ መቀበያ ሎቢ',
      ],
    },
    isFeatured: false,
  },
  {
    id: 'summit-72-residence-flat',
    name: {
      en: 'Summit 72 Garden Flat',
      am: 'ሰሚት 72 ጋርደን ፍላት',
    },
    locationName: {
      en: 'Summit 72, Addis Ababa',
      am: 'ሰሚት 72፣ አዲስ አበባ',
    },
    locationCategory: 'summit',
    type: 'flat',
    purpose: 'rent',
    priceFormatted: {
      en: 'Contact for Rental Terms',
      am: 'ለኪራይ ዋጋ ይጠይቁ',
    },
    size: {
      en: '140 Sqm',
      am: '140 ካሬ ሜትር',
    },
    bedrooms: 3,
    bathrooms: 2,
    kitchens: 1,
    balconies: 2,
    images: [
      propertyImages.villaGardenCompound,
      propertyImages.interiorLiving,
    ],
    description: {
      en: 'Well-appointed three-bedroom flat located inside the delivered residential towers at Summit 72 compound. Features garden outlooks, generous natural daylight, modern fittings, and quiet environment.',
      am: 'በሰሚት 72 ግቢ ውስጥ በተረከቡት የመኖሪያ ሕንፃዎች ውስጥ የሚገኝ ባለ 3 መኝታ ፍላት። የተፈጥሮ ብርሃን፣ ጸጥ ያለ አካባቢና የተሟላ አገልግሎት ያለው።',
    },
    features: {
      en: [
        'Delivered & Move-In Ready',
        'Peaceful Master Compound Setting',
        'Dedicated Gated Parking',
        'Children Safe Play Courtyard',
      ],
      am: [
        'ሙሉ በሙሉ የተጠናቀቀና ዝግጁ',
        'ሰላማዊ የመኖሪያ ቅጥር ግቢ',
        'የተጠበቀ የመኪና ማቆሚያ',
        'የልጆች መጫወቻ ስፍራ',
      ],
    },
    isFeatured: false,
  },
];
