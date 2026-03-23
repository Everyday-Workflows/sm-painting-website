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
      className="sticky top-0 z-50 border-b border-brand-tertiary/12 bg-brand-cloud/72 shadow-sm backdrop-blur-xl transition-colors duration-300 dark:border-border dark:bg-surface"
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
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-sans font-medium text-brand-tertiary/74 transition-all duration-200 hover:border-brand-highlight hover:text-brand-highlight dark:text-brand-cloud/68 dark:hover:text-brand-accent-1"
            >
              {t('nav.home')}
            </Link>
            <Link 
              href="/gallery" 
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-sans font-medium text-brand-tertiary/74 transition-all duration-200 hover:border-brand-highlight hover:text-brand-highlight dark:text-brand-cloud/68 dark:hover:text-brand-accent-1"
            >
              {t('nav.gallery')}
            </Link>
            <Link 
              href="/services" 
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-sans font-medium text-brand-tertiary/74 transition-all duration-200 hover:border-brand-highlight hover:text-brand-highlight dark:text-brand-cloud/68 dark:hover:text-brand-accent-1"
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
                className="mr-2 flex items-center space-x-2 text-sm font-sans font-semibold text-brand-accent-2 transition-colors hover:text-brand-highlight dark:text-brand-cloud dark:hover:text-brand-accent-1"
              >
                <Phone size={16} className="text-brand-highlight" />
                <span className="hidden lg:inline">{CONTACT_INFO.phoneDisplay}</span>
              </a>

              <div className="mx-2 h-6 w-px bg-brand-tertiary/15 dark:bg-brand-accent-1/18" />

              {/* Language Toggle */}
              <button
                type="button"
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="rounded-full p-2 text-brand-tertiary/74 transition-colors hover:bg-brand-highlight/10 hover:text-brand-highlight dark:text-brand-cloud/68 dark:hover:bg-brand-accent-1/10 dark:hover:text-brand-accent-1"
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
                className="rounded-full p-2 text-brand-tertiary/74 transition-colors hover:bg-brand-highlight/10 hover:text-brand-highlight dark:text-brand-cloud/68 dark:hover:bg-brand-accent-1/10 dark:hover:text-brand-accent-1"
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
                className="flex items-center space-x-1 rounded-full px-2.5 py-2 text-brand-tertiary/74 transition-colors hover:bg-brand-highlight/10 hover:text-brand-highlight dark:text-brand-cloud/68 dark:hover:bg-brand-accent-1/10 dark:hover:text-brand-accent-1"
                aria-label={languageToggleLabel}
              >
                <Languages size={18} />
                <span className="text-[11px] font-bold uppercase leading-none">{language}</span>
              </button>
              <button
                type="button"
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="rounded-full p-2 text-brand-tertiary/74 transition-colors hover:bg-brand-highlight/10 hover:text-brand-highlight dark:text-brand-cloud/68 dark:hover:bg-brand-accent-1/10 dark:hover:text-brand-accent-1"
                aria-label={themeToggleLabel}
              >
                {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="rounded-md p-2 text-brand-tertiary/74 transition-colors hover:bg-brand-highlight/10 hover:text-brand-highlight focus:outline-none dark:text-brand-cloud/68 dark:hover:bg-brand-accent-1/10 dark:hover:text-brand-accent-1"
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
            className="absolute left-0 top-20 w-full overflow-hidden border-b border-brand-tertiary/12 bg-brand-cloud/94 shadow-lg backdrop-blur-2xl dark:border-border dark:bg-surface md:hidden"
          >
            <div className="px-6 pt-4 pb-8 space-y-4">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  href="/"
                   className="block rounded-md px-3 py-3 text-lg font-sans font-medium text-brand-accent-2 transition-colors hover:bg-brand-highlight/8 hover:text-brand-highlight dark:text-brand-cloud dark:hover:bg-brand-accent-1/10 dark:hover:text-brand-accent-1"
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
                   className="block rounded-md px-3 py-3 text-lg font-sans font-medium text-brand-accent-2 transition-colors hover:bg-brand-highlight/8 hover:text-brand-highlight dark:text-brand-cloud dark:hover:bg-brand-accent-1/10 dark:hover:text-brand-accent-1"
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
                   className="block rounded-md px-3 py-3 text-lg font-sans font-medium text-brand-accent-2 transition-colors hover:bg-brand-highlight/8 hover:text-brand-highlight dark:text-brand-cloud dark:hover:bg-brand-accent-1/10 dark:hover:text-brand-accent-1"
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
                   className="flex items-center space-x-3 rounded-md px-3 py-3 text-lg font-sans font-semibold text-brand-accent-2 transition-colors hover:bg-brand-highlight/8 hover:text-brand-highlight dark:text-brand-cloud dark:hover:bg-brand-accent-1/10 dark:hover:text-brand-accent-1"
                >
                  <Phone size={20} className="text-brand-highlight" />
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
