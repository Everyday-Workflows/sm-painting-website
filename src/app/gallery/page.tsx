'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

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
  const { t } = useLanguage();

  return (
    <div className="bg-white dark:bg-black py-12 sm:py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            {t('gallery.title')}
          </h1>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image} 
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <Image 
                src={`/images/gallery/${image}`} 
                alt={`S&M Painting project ${index + 1}`} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
