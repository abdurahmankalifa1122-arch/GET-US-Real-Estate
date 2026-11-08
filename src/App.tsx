import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PropertySearch } from './components/PropertySearch';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedProperties } from './components/FeaturedProperties';
import { Summit72Showcase } from './components/Summit72Showcase';
import { HowItWorks } from './components/HowItWorks';
import { SisterCompanies } from './components/SisterCompanies';
import { StatsSection } from './components/StatsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AgentsSection } from './components/AgentsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PropertyModal } from './components/PropertyModal';
import { AddPropertyModal } from './components/AddPropertyModal';
import { initialProperties } from './data/properties';
import { Language, Property, FilterState } from './types';

export default function App() {
  // Language State with persistence
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('getas_lang');
      return saved === 'am' ? 'am' : 'en';
    } catch {
      return 'en';
    }
  });

  const toggleLanguage = () => {
    const nextLang: Language = currentLang === 'en' ? 'am' : 'en';
    setCurrentLang(nextLang);
    try {
      localStorage.setItem('getas_lang', nextLang);
    } catch {
      // ignore
    }
  };

  // Property Listings State with custom added properties persistence
  const [properties, setProperties] = useState<Property[]>(() => {
    try {
      const savedCustom = localStorage.getItem('getas_custom_properties');
      if (savedCustom) {
        const parsed = JSON.parse(savedCustom);
        return [...initialProperties, ...parsed];
      }
    } catch {
      // fallback
    }
    return initialProperties;
  });

  // Filter State
  const [filters, setFilters] = useState<FilterState>({
    type: '',
    purpose: '',
    location: '',
    searchQuery: '',
  });

  // Modals State
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Filter properties based on search inputs
  const filteredProperties = useMemo(() => {
    return properties.filter((prop) => {
      // Type filter
      if (filters.type && prop.type !== filters.type) {
        return false;
      }
      // Purpose filter
      if (filters.purpose && prop.purpose !== filters.purpose) {
        return false;
      }
      // Location filter
      if (filters.location && prop.locationCategory !== filters.location) {
        return false;
      }
      // Keyword search
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase();
        const matchEn =
          prop.name.en.toLowerCase().includes(query) ||
          prop.locationName.en.toLowerCase().includes(query) ||
          prop.description.en.toLowerCase().includes(query);
        const matchAm =
          prop.name.am.toLowerCase().includes(query) ||
          prop.locationName.am.toLowerCase().includes(query) ||
          prop.description.am.toLowerCase().includes(query);

        if (!matchEn && !matchAm) {
          return false;
        }
      }
      return true;
    });
  }, [properties, filters]);

  const handleResetFilters = () => {
    setFilters({
      type: '',
      purpose: '',
      location: '',
      searchQuery: '',
    });
  };

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleAddNewProperty = (newProp: Property) => {
    setProperties((prev) => [newProp, ...prev]);
    try {
      const savedCustom = JSON.parse(localStorage.getItem('getas_custom_properties') || '[]');
      savedCustom.unshift(newProp);
      localStorage.setItem('getas_custom_properties', JSON.stringify(savedCustom));
    } catch {
      // ignore
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${currentLang === 'am' ? 'font-ethiopic-clean' : ''}`}>
      {/* Fixed Navigation */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={toggleLanguage}
        onNavigate={handleScrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Architectural Hero */}
        <Hero
          currentLang={currentLang}
          onExploreClick={() => handleScrollToSection('properties')}
          onStoryClick={() => handleScrollToSection('about')}
        />

        {/* Working Search & Filter Panel */}
        <PropertySearch
          currentLang={currentLang}
          filters={filters}
          onFilterChange={setFilters}
          onSearchSubmit={() => handleScrollToSection('properties')}
          onReset={handleResetFilters}
          totalMatches={filteredProperties.length}
        />

        {/* About GET-AS Section */}
        <AboutSection
          currentLang={currentLang}
          onExploreProperties={() => handleScrollToSection('properties')}
        />

        {/* Our Services */}
        <ServicesSection
          currentLang={currentLang}
          onContactClick={() => handleScrollToSection('contact')}
        />

        {/* Featured Properties */}
        <FeaturedProperties
          properties={filteredProperties}
          currentLang={currentLang}
          onSelectProperty={setSelectedProperty}
          onOpenAddModal={() => setIsAddModalOpen(true)}
        />

        {/* Summit 72 Major Development Feature */}
        <Summit72Showcase
          currentLang={currentLang}
          onInquireClick={() => handleScrollToSection('contact')}
        />

        {/* How It Works (Discussion, Reservation, Contract) */}
        <HowItWorks
          currentLang={currentLang}
          onContactClick={() => handleScrollToSection('contact')}
        />

        {/* Verified Company Statistics */}
        <StatsSection currentLang={currentLang} />

        {/* Sister Companies (Dugda, Habesha Cement, Global Paint) */}
        <SisterCompanies currentLang={currentLang} />

        {/* Homeowner Testimonials */}
        <TestimonialsSection
          currentLang={currentLang}
          onContactRelations={() => handleScrollToSection('contact')}
        />

        {/* Dedicated Advisory Team */}
        <AgentsSection currentLang={currentLang} />

        {/* Contact & Inquiry Section */}
        <ContactSection currentLang={currentLang} />
      </main>

      {/* Luxury Footer */}
      <Footer
        currentLang={currentLang}
        onNavigate={handleScrollToSection}
      />

      {/* Property Details Modal */}
      <PropertyModal
        property={selectedProperty}
        currentLang={currentLang}
        onClose={() => setSelectedProperty(null)}
      />

      {/* Add Property Listing Modal */}
      <AddPropertyModal
        currentLang={currentLang}
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddProperty={handleAddNewProperty}
      />
    </div>
  );
}
