'use client';

import React from 'react';
import Button from '@/components/Button';
import { useLanguage } from '@/context/LanguageContext';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';

const SERVICE_FEATURES: Record<'en' | 'es', string[][]> = {
  en: [
    ['Wall & ceiling painting', 'Trim & door refinishing', 'Cabinet painting', 'Color consultation'],
    ['Siding & stucco painting', 'Deck & fence staining', 'Pressure washing', 'Surface preparation'],
    ['Office spaces', 'Retail stores', 'Industrial facilities', 'Maintenance painting'],
    ['Faux finishes', 'Texture application', 'Wallpaper removal', 'Drywall repair'],
  ],
  es: [
    ['Pintura de paredes y techos', 'Renovación de molduras y puertas', 'Pintura de gabinetes', 'Asesoría de color'],
    ['Pintura de siding y estuco', 'Teñido de terrazas y cercas', 'Lavado a presión', 'Preparación de superficies'],
    ['Espacios de oficina', 'Tiendas', 'Instalaciones industriales', 'Pintura de mantenimiento'],
    ['Acabados decorativos', 'Aplicación de textura', 'Retiro de papel tapiz', 'Reparación de paneles de yeso'],
  ],
};

const ServicesPage = () => {
  const { language, t } = useLanguage();

  const services = [
    {
      title: t('service.interior.title'),
      description: t('service.interior.desc'),
    },
    {
      title: t('service.exterior.title'),
      description: t('service.exterior.desc'),
    },
    {
      title: t('service.commercial.title'),
      description: t('service.commercial.desc'),
    },
    {
      title: t('service.specialty.title'),
      description: t('service.specialty.desc'),
    }
  ];

  return (
    <div className="relative py-12 sm:py-20 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <ScrollReveal>
            <h1 className="text-3xl sm:text-4xl font-display text-brand-secondary dark:text-brand-accent-1 lg:text-5xl leading-tight">
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
                  {SERVICE_FEATURES[language][index].map((feature) => (
                    <li key={feature} className="flex items-center text-sm sm:text-base font-sans text-gray-700 dark:text-gray-300">
                      <svg aria-hidden="true" className="h-5 w-5 text-brand-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'tertiary'} className="mt-auto w-fit max-w-full self-start shadow-lg shadow-brand-primary/10 group-hover:shadow-brand-primary/20 transition-all duration-300">
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
            <Button variant="primary" className="w-fit max-w-full px-8 sm:px-10 py-4 text-lg font-bold shadow-lg shadow-brand-primary/20">
              {t('services.footer.cta')}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default ServicesPage;
