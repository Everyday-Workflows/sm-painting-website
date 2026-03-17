'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/context/LanguageContext';
import { Sun, Moon, Languages, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const logoSrc = resolvedTheme === 'dark' 
    ? '/images/logos/Logo_Dark_Mode.webp' 
    : '/images/logos/Logo_Light_Mode.webp';

  return (
    <nav className="bg-white dark:bg-black shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src={logoSrc} 
                alt="S&M Painting - Professional Painting Services Logo" 
                width={150} 
                height={50} 
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link 
              href="/" 
              className="border-transparent text-gray-500 dark:text-gray-400 hover:border-brand-primary hover:text-brand-primary dark:hover:text-brand-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200"
            >
              {t('nav.home')}
            </Link>
            <Link 
              href="/gallery" 
              className="border-transparent text-gray-500 dark:text-gray-400 hover:border-brand-primary hover:text-brand-primary dark:hover:text-brand-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200"
            >
              {t('nav.gallery')}
            </Link>
            <Link 
              href="/services" 
              className="border-transparent text-gray-500 dark:text-gray-400 hover:border-brand-primary hover:text-brand-primary dark:hover:text-brand-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200"
            >
              {t('nav.services')}
            </Link>

            <div className="flex items-center space-x-4 ml-4 border-l border-gray-200 dark:border-gray-800 pl-6">
              {/* Language Toggle */}
              <button
                type="button"
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-500 dark:text-gray-400 transition-colors"
                aria-label="Toggle language"
              >
                <div className="flex items-center space-x-1">
                  <Languages size={20} />
                  <span className="text-xs font-bold uppercase">{language}</span>
                </div>
              </button>

              {/* Theme Toggle */}
              <button
                type="button"
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-500 dark:text-gray-400 transition-colors"
                aria-label="Toggle theme"
              >
                {resolvedTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden space-x-2">
            <button
              type="button"
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400"
              aria-label="Toggle theme"
            >
              {resolvedTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-brand-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-100 dark:border-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-brand-primary hover:bg-gray-50 dark:hover:bg-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link
              href="/gallery"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-brand-primary hover:bg-gray-50 dark:hover:bg-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.gallery')}
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-brand-primary hover:bg-gray-50 dark:hover:bg-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.services')}
            </Link>
            <button
              type="button"
              onClick={() => {
                setLanguage(language === 'en' ? 'es' : 'en');
                setIsMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-brand-primary hover:bg-gray-50 dark:hover:bg-gray-900 flex items-center space-x-2"
            >
              <Languages size={20} />
              <span>{language === 'en' ? 'Español' : 'English'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
