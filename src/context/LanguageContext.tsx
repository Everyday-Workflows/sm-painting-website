'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.gallery': 'Gallery',
    'nav.services': 'Services',
    'hero.title1': 'Transform Your Space with',
    'hero.title2': 'Expert Painting Services',
    'hero.description': 'Professional residential and commercial painting that brings your vision to life. Quality craftsmanship, attention to detail, and a finish that lasts.',
    'hero.cta1': 'Our Services',
    'hero.cta2': 'View Gallery',
    'about.title': 'About S&M Painting',
    'about.p1': 'With years of experience in the industry, S&M Painting has built a reputation for excellence. We believe that a fresh coat of paint can do more than just change a color—it can revitalize a home or business, increase property value, and create an environment you love.',
    'about.p2': 'Our team of skilled professionals is dedicated to providing top-tier service from the initial consultation to the final walkthrough. We use only high-quality materials and proven techniques to ensure a flawless finish every time.',
    'about.cta': 'Learn More About Us',
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': "Don't just take our word for it—hear from our satisfied customers.",
    'cta.title': 'Ready to Start Your Project?',
    'cta.description': "Contact us today for a free estimate and let's bring some color to your world.",
    'cta.button': 'Get a Free Quote',
    'footer.description': 'Professional painting services for residential and commercial properties. Quality you can trust.',
    'footer.links': 'Quick Links',
    'footer.contact': 'Contact Us',
    'footer.email': 'Email',
    'footer.phone': 'Phone',
    'footer.rights': 'All rights reserved.',
    'gallery.title': 'Our Work Gallery',
    'gallery.subtitle': 'A showcase of our recent painting projects. From interior transformations to exterior revivals, we take pride in every stroke.',
    'services.title': 'Our Professional Services',
    'services.subtitle': 'We offer a comprehensive range of painting services tailored to meet your specific needs. Quality and customer satisfaction are our top priorities.',
    'services.cta': 'Get a Quote for',
    'services.footer.title': "Don't See What You're Looking For?",
    'services.footer.description': "We handle projects of all sizes and types. Contact us to discuss your specific requirements and get a custom quote.",
    'services.footer.cta': 'Contact Us Today',
    'service.interior.title': 'Interior Painting',
    'service.interior.desc': 'Transform your living spaces with our expert interior painting services. From walls and ceilings to trim and doors, we provide a flawless finish that reflects your style.',
    'service.exterior.title': 'Exterior Painting',
    'service.exterior.desc': "Protect and beautify your property's exterior. Our durable finishes withstand the elements while giving your home or business a fresh, new look.",
    'service.commercial.title': 'Commercial Painting',
    'service.commercial.desc': 'Professional painting solutions for businesses. We work around your schedule to minimize disruption while delivering high-quality results.',
    'service.specialty.title': 'Specialty Finishes',
    'service.specialty.desc': 'Add a unique touch to your space with our specialty painting techniques and finishes.',
    'video.title': 'See the Transformation',
    'video.subtitle': 'Scroll to reveal the before and after of our premium painting services.',
    'video.before': 'Before',
    'video.after': 'After',
    'video.alt': 'Before and after painting transformation animation',
    'common.logoAlt': 'S&M Painting logo',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.gallery': 'Galería',
    'nav.services': 'Servicios',
    'hero.title1': 'Transforme su Espacio con',
    'hero.title2': 'Servicios de Pintura Expertos',
    'hero.description': 'Pintura profesional residencial y comercial que da vida a su visión. Artesanía de calidad, atención al detalle y un acabado duradero.',
    'hero.cta1': 'Nuestros Servicios',
    'hero.cta2': 'Ver Galería',
    'about.title': 'Sobre S&M Painting',
    'about.p1': 'Con años de experiencia en la industria, S&M Painting ha construido una reputación de excelencia. Creemos que una capa fresca de pintura puede hacer más que solo cambiar un color: puede revitalizar un hogar o negocio, aumentar el valor de la propiedad y crear un ambiente que le encante.',
    'about.p2': 'Nuestro equipo de profesionales calificados se dedica a brindar un servicio de primer nivel desde la consulta inicial hasta la inspección final. Utilizamos solo materiales de alta calidad y técnicas probadas para garantizar un acabado impecable en todo momento.',
    'about.cta': 'Saber Más Sobre Nosotros',
    'testimonials.title': 'Lo Que Dicen Nuestros Clientes',
    'testimonials.subtitle': 'No solo tome nuestra palabra, escuche a nuestros clientes satisfechos.',
    'cta.title': '¿Listo para Comenzar su Proyecto?',
    'cta.description': 'Contáctenos hoy para un presupuesto gratuito y traigamos algo de color a su mundo.',
    'cta.button': 'Obtener Presupuesto Gratis',
    'footer.description': 'Servicios de pintura profesional para propiedades residenciales y comerciales. Calidad en la que puede confiar.',
    'footer.links': 'Enlaces Rápidos',
    'footer.contact': 'Contáctenos',
    'footer.email': 'Correo',
    'footer.phone': 'Teléfono',
    'footer.rights': 'Todos los derechos reservados.',
    'gallery.title': 'Nuestra Galería de Trabajo',
    'gallery.subtitle': 'Una muestra de nuestros proyectos de pintura recientes. Desde transformaciones interiores hasta renovaciones exteriores, nos enorgullecemos de cada trazo.',
    'services.title': 'Nuestros Servicios Profesionales',
    'services.subtitle': 'Ofrecemos una amplia gama de servicios de pintura adaptados a sus necesidades específicas. La calidad y la satisfacción del cliente son nuestras prioridades.',
    'services.cta': 'Obtener Presupuesto para',
    'services.footer.title': '¿No Ve lo que Está Buscando?',
    'services.footer.description': 'Manejamos proyectos de todos los tamaños y tipos. Contáctenos para discutir sus requisitos específicos y obtener un presupuesto personalizado.',
    'services.footer.cta': 'Contáctenos Hoy',
    'service.interior.title': 'Pintura de Interiores',
    'service.interior.desc': 'Transforme sus espacios de vida con nuestros servicios expertos de pintura de interiores. Desde paredes y techos hasta molduras y puertas, brindamos un acabado impecable que refleja su estilo.',
    'service.exterior.title': 'Pintura de Exteriores',
    'service.exterior.desc': 'Proteja y embellezca el exterior de su propiedad. Nuestros acabados duraderos resisten los elementos mientras le dan a su hogar o negocio un aspecto fresco y nuevo.',
    'service.commercial.title': 'Pintura Comercial',
    'service.commercial.desc': 'Soluciones de pintura profesional para empresas. Trabajamos según su horario para minimizar las interrupciones mientras brindamos resultados de alta calidad.',
    'service.specialty.title': 'Acabados Especiales',
    'service.specialty.desc': 'Agregue un toque único a su espacio con nuestras técnicas y acabados de pintura especializados.',
    'video.title': 'Vea la Transformación',
    'video.subtitle': 'Desplácese para revelar el antes y el después de nuestros servicios de pintura premium.',
    'video.before': 'Antes',
    'video.after': 'Después',
    'video.alt': 'Animación de transformación de pintura antes y después',
    'common.logoAlt': 'Logo de S&M Painting',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const detectBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];

  if (browserLanguages.some((language) => language?.toLowerCase().startsWith('es'))) {
    return 'es';
  }

  return 'en';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') {
      return 'en';
    }

    const savedLanguage = localStorage.getItem('language');

    if (savedLanguage === 'en' || savedLanguage === 'es') {
      return savedLanguage;
    }

    return detectBrowserLanguage();
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
