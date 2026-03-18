'use client';

import React from 'react';
import Button from '@/components/Button';
import { useLanguage } from '@/context/LanguageContext';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';

const ServicesPage = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('service.interior.title'),
      description: t('service.interior.desc'),
      features: [t('service.interior.title'), t('service.interior.desc').split('.')[0], t('service.interior.desc').split('.')[1]] // Simplified for demo
    },
    {
      title: t('service.exterior.title'),
      description: t('service.exterior.desc'),
      features: [t('service.exterior.title'), t('service.exterior.desc').split('.')[0]]
    },
    {
      title: t('service.commercial.title'),
      description: t('service.commercial.desc'),
      features: [t('service.commercial.title'), t('service.commercial.desc').split('.')[0]]
    },
    {
      title: t('service.specialty.title'),
      description: t('service.specialty.desc'),
      features: [t('service.specialty.title'), t('service.specialty.desc').split('.')[0]]
    }
  ];

  // Better feature lists for each language
  const getFeatures = (index: number) => {
    const allFeatures = {
      en: [
        ["Wall & Ceiling Painting", "Trim & Door Refinishing", "Cabinet Painting", "Color Consultation"],
        ["Siding & Stucco Painting", "Deck & Fence Staining", "Pressure Washing", "Surface Preparation"],
        ["Office Spaces", "Retail Stores", "Industrial Facilities", "Maintenance Painting"],
        ["Faux Finishes", "Texture Application", "Wallpaper Removal", "Drywall Repair"]
      ],
      es: [
        ["Pintura de Paredes y Techos", "Refinado de Molduras y Puertas", "Pintura de Gabinetes", "Consulta de Color"],
        ["Pintura de Revestimiento y Estuco", "Teñido de Terrazas y Cercas", "Lavado a Presión", "Preparación de Superficies"],
        ["Espacios de Oficina", "Tiendas Minoristas", "Instalaciones Industriales", "Pintura de Mantenimiento"],
        ["Acabados de Imitación", "Aplicación de Textura", "Eliminación de Papel Tapiz", "Reparación de Paneles de Yeso"]
      ]
    };
    
    const lang = t('nav.home') === 'Home' ? 'en' : 'es';
    return allFeatures[lang][index];
  };

  return (
    <div className="py-12 sm:py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <ScrollReveal>
            <h1 className="text-3xl sm:text-4xl font-display text-gray-900 dark:text-white lg:text-5xl leading-tight">
              {t('services.title')}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-4 text-lg sm:text-xl font-sans text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <StaggerItem key={service.title}>
              <div 
                className="bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-200/30 dark:border-gray-800/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col h-full group"
              >
                <h2 className="text-xl sm:text-2xl font-display text-gray-900 dark:text-white mb-4 group-hover:text-brand-primary transition-colors duration-300">
                  {service.title}
                </h2>
                <p className="text-base sm:text-lg font-sans text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {getFeatures(index).map((feature) => (
                    <li key={feature} className="flex items-center text-sm sm:text-base font-sans text-gray-700 dark:text-gray-300">
                      <svg className="h-5 w-5 text-brand-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <title>Check</title>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'tertiary'} className="w-full mt-auto shadow-lg shadow-brand-primary/10 group-hover:shadow-brand-primary/20 transition-all duration-300">
                  {t('services.cta')} {service.title}
                </Button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.4}>
          <div className="mt-16 sm:mt-20 bg-brand-primary/10 dark:bg-brand-primary/5 backdrop-blur-md border border-brand-primary/20 rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-display mb-4 sm:mb-6 leading-tight text-gray-900 dark:text-white">{t('services.footer.title')}</h2>
            <p className="text-lg sm:text-xl font-subtitle mb-8 opacity-90 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              {t('services.footer.description')}
            </p>
            <Button variant="primary" className="w-full sm:w-auto px-8 sm:px-10 py-4 text-lg font-bold shadow-lg shadow-brand-primary/20">
              {t('services.footer.cta')}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default ServicesPage;
