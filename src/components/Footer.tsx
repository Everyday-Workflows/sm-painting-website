'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image 
              src="/images/logos/Logo_White.webp" 
              alt="S&M Painting Logo" 
              width={120} 
              height={40} 
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm">
              {t('footer.description')}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.links')}</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-brand-primary transition-colors">{t('nav.home')}</a></li>
              <li><a href="/gallery" className="hover:text-brand-primary transition-colors">{t('nav.gallery')}</a></li>
              <li><a href="/services" className="hover:text-brand-primary transition-colors">{t('nav.services')}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <p className="text-gray-400 text-sm">
              Email: info@smpainting.com<br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} S&M Painting. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
