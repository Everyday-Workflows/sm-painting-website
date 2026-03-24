"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CONTACT_INFO, CONTACT_LINKS } from "@/lib/contact";
import { useLanguage } from "@/context/LanguageContext";
import { BRAND_ASSETS } from "@/lib/siteAssets";

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="relative z-10 bg-surface-muted py-12 text-brand-secondary dark:bg-surface-muted dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src={BRAND_ASSETS.logoDarkWordmark}
              alt={t("common.logoAlt")}
              width={144}
              height={48}
              className="mb-4 h-11 w-auto dark:hidden"
            />
            <Image
              src={BRAND_ASSETS.logoWhiteWordmark}
              alt={t("common.logoAlt")}
              width={144}
              height={48}
              className="mb-4 hidden h-11 w-auto dark:block"
            />
            <p className="text-sm font-sans text-foreground/74 dark:text-brand-cloud/74">
              {t("footer.description")}
            </p>
            <p className="mt-2 text-sm font-semibold text-brand-highlight">
              {language === "es" ? "¡Hablamos español!" : "We speak Spanish!"}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-display mb-4">{t("footer.links")}</h3>
            <ul className="space-y-2 text-sm font-sans text-foreground/74 dark:text-brand-cloud/74">
              <li>
                <Link
                  href="/"
                  className="hover:text-brand-highlight transition-colors"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-brand-highlight transition-colors"
                >
                  {t("nav.gallery")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-brand-highlight transition-colors"
                >
                  {t("nav.services")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-display mb-4">{t("footer.areas")}</h3>
            <p className="text-sm font-sans text-foreground/74 dark:text-brand-cloud/74">
              {t("footer.areas.list")}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-display mb-4">{t("footer.contact")}</h3>
            <p className="text-sm font-sans text-foreground/74 dark:text-brand-cloud/74">
              {t("footer.email")}: {" "}
              <a
                href={CONTACT_LINKS.email}
                className="hover:text-brand-highlight transition-colors"
              >
                {CONTACT_INFO.email}
              </a>
              <br />
              {t("footer.phone")}: {" "}
              <a
                href={CONTACT_LINKS.phone}
                className="hover:text-brand-highlight transition-colors"
              >
                {CONTACT_INFO.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-brand-primary/20 pt-8 text-center text-xs font-sans text-foreground/55 dark:text-brand-cloud/55">
          &copy; {new Date().getFullYear()} S&H Painting. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
