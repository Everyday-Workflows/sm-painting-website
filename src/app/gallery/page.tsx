'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';

const galleryImages = [
  "03f36018-e2da-49ff-a7d3-ce16ebcd2127.jpeg",
  "3248cf5d-16fe-4d74-b57b-a7030ff5908d.jpeg",
  "3b2dc259-ffde-4026-87d4-41cd2d8224e5.jpeg",
  "4bb99444-ace9-4aeb-8333-61c9a5c5ab8f.jpeg",
  "589deba1-7a7b-496e-b8be-3ba64166a15e.jpeg",
  "5b9a8b60-8d7f-4a13-bb09-6e69d8382b3e.jpeg",
  "7b51ddca-47a8-4380-80b4-d3189b80b6af.jpeg",
  "8510a805-0725-415e-a482-d3b7fe91cfe4.jpeg",
  "8cf01e68-8464-4091-bab9-69c94208c746.jpeg",
  "ac4643e0-8d07-4469-b497-623bdb26c6db.jpeg",
  "bdfe8dac-2dd9-49d0-b0a9-83ac6c9ec408.jpeg",
  "c02cf30a-4ea3-4e7e-b6e6-71e96cd2cedd.jpeg"
];

const GalleryPage = () => {
  const { language, t } = useLanguage();

  return (
    <div className="relative py-12 sm:py-20 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <ScrollReveal>
            <h1 className="text-3xl sm:text-4xl font-display text-brand-secondary dark:text-brand-accent-1 lg:text-5xl leading-tight">
              {t('gallery.title')}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-4 text-lg sm:text-xl font-sans text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              {t('gallery.subtitle')}
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <StaggerItem key={image}>
              <div 
                className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group"
              >
                <Image 
                  src={`/images/gallery/${image}`} 
                  alt={language === 'es' ? `Proyecto de pintura profesional de S&M Painting - Imagen ${index + 1}` : `Professional painting project by S&M Painting - Showcase image ${index + 1}`}
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <svg aria-hidden="true" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
};

export default GalleryPage;
