'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/context/LanguageContext';
import { CONTACT_INFO, CONTACT_LINKS } from '@/lib/contact';
import { BRAND_ASSETS } from '@/lib/siteAssets';
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
    ? BRAND_ASSETS.logoDarkWordmark
    : BRAND_ASSETS.logoLightWordmark;
  const logoAlt = t('common.logoAlt');
  const languageToggleLabel = language === 'en' ? 'Cambiar a español' : 'Switch to English';
  const themeToggleLabel = isDarkTheme
    ? language === 'en'
      ? 'Switch to light theme'
      : 'Cambiar a tema claro'
    : language === 'en'
      ? 'Switch to dark theme'
      : 'Cambiar a tema oscuro';
  const menuToggleLabel = isMenuOpen
    ? language === 'en'
      ? 'Close menu'
      : 'Cerrar menú'
    : language === 'en'
      ? 'Open menu'
      : 'Abrir menú';

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
                alt={logoAlt}
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
              className="border-transparent text-gray-500 dark:text-gray-400 hover:border-brand-primary hover:text-brand-primary dark:hover:text-brand-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-sans font-medium transition-all duration-200"
            >
              {t('nav.home')}
            </Link>
            <Link 
              href="/gallery" 
              className="border-transparent text-gray-500 dark:text-gray-400 hover:border-brand-primary hover:text-brand-primary dark:hover:text-brand-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-sans font-medium transition-all duration-200"
            >
              {t('nav.gallery')}
            </Link>
            <Link 
              href="/services" 
              className="border-transparent text-gray-500 dark:text-gray-400 hover:border-brand-primary hover:text-brand-primary dark:hover:text-brand-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-sans font-medium transition-all duration-200"
            >
              {t('nav.services')}
            </Link>
          </div>

          {/* Right Side: Toggles & Mobile Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex md:items-center md:space-x-4">
              {/* Phone Number */}
              <a 
                href={CONTACT_LINKS.phone}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-brand-primary transition-colors font-sans font-semibold text-sm mr-2"
              >
                <Phone size={16} className="text-brand-primary" />
                <span className="hidden lg:inline">{CONTACT_INFO.phoneDisplay}</span>
              </a>

              <div className="h-6 w-px bg-gray-200 dark:bg-gray-800 mx-2" />

              {/* Language Toggle */}
              <button
                type="button"
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-500 dark:text-gray-400 transition-colors"
                aria-label={languageToggleLabel}
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
                aria-label={themeToggleLabel}
              >
                {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden space-x-2">
              <button
                type="button"
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="flex items-center space-x-1 rounded-full px-2.5 py-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                aria-label={languageToggleLabel}
              >
                <Languages size={18} />
                <span className="text-[11px] font-bold uppercase leading-none">{language}</span>
              </button>
              <button
                type="button"
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                aria-label={themeToggleLabel}
              >
                {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-brand-primary hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none transition-colors"
                aria-label={menuToggleLabel}
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
                  className="block px-3 py-3 rounded-md text-lg font-sans font-medium text-gray-700 dark:text-gray-300 hover:text-brand-primary hover:bg-gray-50 dark:hover:bg-gray-900"
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
                  className="block px-3 py-3 rounded-md text-lg font-sans font-medium text-gray-700 dark:text-gray-300 hover:text-brand-primary hover:bg-gray-50 dark:hover:bg-gray-900"
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
                  className="block px-3 py-3 rounded-md text-lg font-sans font-medium text-gray-700 dark:text-gray-300 hover:text-brand-primary hover:bg-gray-50 dark:hover:bg-gray-900"
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
                  href={CONTACT_LINKS.phone}
                  className="flex items-center space-x-3 px-3 py-3 rounded-md text-lg font-sans font-semibold text-gray-700 dark:text-gray-300 hover:text-brand-primary hover:bg-gray-50 dark:hover:bg-gray-900"
                >
                  <Phone size={20} className="text-brand-primary" />
                  <span>{CONTACT_INFO.phoneDisplay}</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
