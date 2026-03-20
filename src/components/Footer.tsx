"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { BRAND_ASSETS } from "@/lib/siteAssets";
import { resolvePublicSiteHostname } from "@/lib/siteUrl";

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const domain = resolvePublicSiteHostname();
  const email = `info@${domain}`;

  return (
    <footer className="bg-gray-900 dark:bg-zinc-950 text-white py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image
              src={BRAND_ASSETS.logoWhiteWordmark}
              alt={t("common.logoAlt")}
              width={144}
              height={48}
              className="mb-4 h-11 w-auto"
            />
            <p className="text-gray-400 text-sm font-sans">
              {t("footer.description")}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-display mb-4">{t("footer.links")}</h3>
            <ul className="space-y-2 text-gray-400 text-sm font-subtitle">
              <li>
                <Link
                  href="/"
                  className="hover:text-brand-primary transition-colors"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-brand-primary transition-colors"
                >
                  {t("nav.gallery")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-brand-primary transition-colors"
                >
                  {t("nav.services")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-display mb-4">{t("footer.contact")}</h3>
            <p className="text-gray-400 text-sm font-sans">
              {t("footer.email")}: {email}
              <br />
              {t("footer.phone")}: (555) 123-4567
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs font-sans">
          &copy; {new Date().getFullYear()} S&H Painting. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
