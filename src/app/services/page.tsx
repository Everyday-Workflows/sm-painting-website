'use client';

import React from 'react';
import Button from '@/components/Button';
import { useLanguage } from '@/context/LanguageContext';

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
    <div className="bg-white dark:bg-black py-12 sm:py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            {t('services.title')}
          </h1>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="bg-gray-50 dark:bg-zinc-950 p-8 rounded-2xl border border-gray-100 dark:border-gray-900 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {getFeatures(index).map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="h-5 w-5 text-brand-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <title>Check</title>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'tertiary'} className="w-full">
                {t('services.cta')} {service.title}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-brand-secondary rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">{t('services.footer.title')}</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('services.footer.description')}
          </p>
          <Button variant="primary" className="bg-white text-brand-secondary hover:bg-gray-100 hover:text-brand-secondary px-10 py-4 text-lg font-bold shadow-md">
            {t('services.footer.cta')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
