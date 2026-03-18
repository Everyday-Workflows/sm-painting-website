'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/context/LanguageContext';
import { Sun, Moon, Languages, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const isDarkTheme = mounted && resolvedTheme === 'dark';
  const logoSrc = isDarkTheme
    ? '/images/logos/Logo_Dark_Mode.webp'
    : '/images/logos/Logo_Light_Mode.webp';

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white/70 dark:bg-black/70 backdrop-blur-xl shadow-sm sticky top-0 z-50 transition-colors duration-300 border-b border-gray-200/20 dark:border-gray-800/20"
    >
      <div className="max-w-full mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex justify-between h-20 items-center relative">
          {/* Left: Logo */}
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

          {/* Center: Navigation Links */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-8">
            <Link 
              href="/" 
              className="border-transparent text-gray-500 dark:text-gray-400 hover:border-brand-primary hover:text-brand-primary dark:hover:text-brand-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-subtitle font-medium transition-all duration-200"
            >
              {t('nav.home')}
            </Link>
            <Link 
              href="/gallery" 
              className="border-transparent text-gray-500 dark:text-gray-400 hover:border-brand-primary hover:text-brand-primary dark:hover:text-brand-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-subtitle font-medium transition-all duration-200"
            >
              {t('nav.gallery')}
            </Link>
            <Link 
              href="/services" 
              className="border-transparent text-gray-500 dark:text-gray-400 hover:border-brand-primary hover:text-brand-primary dark:hover:text-brand-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-subtitle font-medium transition-all duration-200"
            >
              {t('nav.services')}
            </Link>
          </div>

          {/* Right Side: Toggles & Mobile Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex md:items-center md:space-x-4">
              {/* Phone Number */}
              <a 
                href="tel:+15551234567" 
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-brand-primary transition-colors font-subtitle font-bold text-sm mr-2"
              >
                <Phone size={16} className="text-brand-primary" />
                <span className="hidden lg:inline">(555) 123-4567</span>
              </a>

              <div className="h-6 w-px bg-gray-200 dark:bg-gray-800 mx-2" />

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
                {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden space-x-2">
              <button
                type="button"
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full text-gray-500 dark:text-gray-400"
                aria-label="Toggle theme"
              >
                {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
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
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden absolute top-20 left-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-2xl border-b border-gray-100 dark:border-gray-900 shadow-lg overflow-hidden"
          >
            <div className="px-6 pt-4 pb-8 space-y-4">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  href="/"
                  className="block px-3 py-3 rounded-md text-lg font-subtitle font-medium text-gray-700 dark:text-gray-300 hover:text-brand-primary hover:bg-gray-50 dark:hover:bg-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.home')}
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  href="/gallery"
                  className="block px-3 py-3 rounded-md text-lg font-subtitle font-medium text-gray-700 dark:text-gray-300 hover:text-brand-primary hover:bg-gray-50 dark:hover:bg-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.gallery')}
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/services"
                  className="block px-3 py-3 rounded-md text-lg font-subtitle font-medium text-gray-700 dark:text-gray-300 hover:text-brand-primary hover:bg-gray-50 dark:hover:bg-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.services')}
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="tel:+15551234567"
                  className="flex items-center space-x-3 px-3 py-3 rounded-md text-lg font-subtitle font-bold text-gray-700 dark:text-gray-300 hover:text-brand-primary hover:bg-gray-50 dark:hover:bg-gray-900"
                >
                  <Phone size={20} className="text-brand-primary" />
                  <span>(555) 123-4567</span>
                </a>
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <button
                  type="button"
                  onClick={() => {
                    setLanguage(language === 'en' ? 'es' : 'en');
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-3 rounded-md text-lg font-subtitle font-medium text-gray-700 dark:text-gray-300 hover:text-brand-primary hover:bg-gray-50 dark:hover:bg-gray-900 flex items-center space-x-2"
                >
                  <Languages size={20} />
                  <span>{language === 'en' ? 'Español' : 'English'}</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
