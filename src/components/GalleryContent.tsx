"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/ScrollReveal";
import {
  PORTFOLIO_ITEMS,
  type PortfolioCategory,
  type PortfolioItem,
} from "@/lib/siteAssets";

const GALLERY_CATEGORY_LABELS: Record<PortfolioCategory, { en: string; es: string }> = {
  interior: { en: "Interior", es: "Interior" },
  exterior: { en: "Exterior", es: "Exterior" },
};

const FEATURED_TRANSFORMATION_GROUPS = [
  {
    id: "pair-014-009",
    title: {
      en: "Exterior repaint transformation",
      es: "Transformación de repintado exterior",
    },
    description: {
      en: "A before-and-after exterior repaint that shows the impact of cleaner contrast, sharper trim lines, and a more finished curb-facing presentation.",
      es: "Un antes y después de repintado exterior que muestra el impacto de un contraste más limpio, molduras más definidas y una presentación exterior más terminada.",
    },
    items: [
      { id: "014", label: { en: "Before", es: "Antes" } },
      { id: "009", label: { en: "After", es: "Después" } },
    ],
  },
  {
    id: "pair-007-015",
    title: {
      en: "Exterior curb-appeal upgrade",
      es: "Mejora exterior de fachada",
    },
    description: {
      en: "Preparation, finish consistency, and color balance come together in this exterior repaint sequence.",
      es: "La preparación, la consistencia del acabado y el balance del color se unen en esta secuencia de repintado exterior.",
    },
    items: [
      { id: "007", label: { en: "Before", es: "Antes" } },
      { id: "015", label: { en: "After", es: "Después" } },
    ],
  },
] as const;

const PROJECT_SPOTLIGHT = {
  id: "project-011-012-013",
  title: {
    en: "One home, multiple spaces",
    es: "Un hogar, múltiples espacios",
  },
  description: {
    en: "Three views from the same project show consistency across rooms, trim lines, and finish quality.",
    es: "Tres vistas del mismo proyecto muestran consistencia entre habitaciones, molduras y calidad del acabado.",
  },
  itemIds: ["011", "012", "013"],
} as const;

const CATEGORY_SECTION_COPY: Record<
  PortfolioCategory,
  {
    title: { en: string; es: string };
    description: { en: string; es: string };
  }
> = {
  interior: {
    title: { en: "Interior finishes", es: "Acabados interiores" },
    description: {
      en: "Fresh walls, clean trim lines, and updated rooms that feel brighter, sharper, and more complete.",
      es: "Paredes frescas, molduras limpias y espacios renovados que se sienten más luminosos, definidos y terminados.",
    },
  },
  exterior: {
    title: { en: "Exterior painting", es: "Pintura exterior" },
    description: {
      en: "Prep, protection, and durable finish work across full-home repaints and curb-facing updates.",
      es: "Preparación, protección y acabados duraderos en repintados completos y mejoras visibles desde la fachada.",
    },
  },
};

const CATEGORY_ORDER: PortfolioCategory[] = [
  "interior",
  "exterior",
];

const getPortfolioId = (src: string) => {
  const fileName = src.split("/").pop() ?? src;
  return fileName.split(".")[0] ?? fileName;
};

const GalleryImageCard = ({
  item,
  locale,
  label,
  sizes,
}: {
  item: PortfolioItem;
  locale: "en" | "es";
  label?: string;
  sizes: string;
}) => {
  const categoryLabel = GALLERY_CATEGORY_LABELS[item.category][locale];

  return (
    <figure className="group overflow-hidden rounded-[1.75rem] border border-brand-tertiary/12 bg-surface shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1 dark:border-border dark:bg-surface-muted dark:shadow-[0_24px_60px_rgba(2,6,23,0.28)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.src}
          alt={item.alt[locale]}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes={sizes}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,13,38,0.02)_0%,rgba(18,13,38,0.06)_50%,rgba(18,13,38,0.18)_100%)]" />
      </div>
      <figcaption className="space-y-3 px-5 py-4 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex rounded-full bg-brand-barn-red/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-barn-red dark:bg-brand-barn-red/10 dark:text-brand-barn-red sm:text-[11px]">
            {categoryLabel}
          </span>
          {label && (
            <span className="inline-flex rounded-full bg-brand-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white sm:text-[11px] dark:bg-brand-accent-1/15 dark:text-brand-accent-1">
              {label}
            </span>
          )}
        </div>
          <p className="text-sm leading-6 text-brand-tertiary/76 dark:text-brand-cloud/74">
          {item.alt[locale]}
        </p>
      </figcaption>
    </figure>
  );
};

export default function GalleryContent() {
  const { language, t } = useLanguage();
  const locale = language === "es" ? "es" : "en";

  const portfolioById = React.useMemo(
    () => new Map(PORTFOLIO_ITEMS.map((item) => [getPortfolioId(item.src), item])),
    []
  );

  const featuredIds = React.useMemo(
    () =>
      new Set<string>([
        ...FEATURED_TRANSFORMATION_GROUPS.flatMap((group) => group.items.map((item) => item.id)),
        ...PROJECT_SPOTLIGHT.itemIds,
      ]),
    []
  );

  const additionalItemsByCategory = React.useMemo(() => {
    const grouped = new Map<PortfolioCategory, PortfolioItem[]>();

    for (const category of CATEGORY_ORDER) {
      grouped.set(category, []);
    }

    for (const item of PORTFOLIO_ITEMS) {
      const id = getPortfolioId(item.src);

      if (featuredIds.has(id)) {
        continue;
      }

      grouped.get(item.category)?.push(item);
    }

    return grouped;
  }, [featuredIds]);

  return (
    <div className="relative overflow-hidden py-12 transition-colors duration-300 sm:py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <ScrollReveal>
            <h1 className="text-3xl font-display leading-tight text-brand-secondary dark:text-brand-accent-1 sm:text-4xl lg:text-5xl">
              {t("gallery.title")}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-4 text-lg font-sans text-brand-tertiary/72 dark:text-brand-cloud/68 sm:text-xl">
              {t("gallery.subtitle")}
            </p>
          </ScrollReveal>
        </div>

        <div className="space-y-14 sm:space-y-20">
          <section className="space-y-6">
            <ScrollReveal>
              <div className="max-w-2xl space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-barn-red dark:text-brand-barn-red sm:text-sm">
                  {locale === "es" ? "Proyectos seleccionados" : "Featured transformations"}
                </p>
                <h2 className="text-2xl font-display text-brand-secondary dark:text-brand-accent-1 sm:text-3xl">
                  {locale === "es"
                    ? "Resultados claros, no una cuadrícula aleatoria"
                    : "Clear results, not a random grid"}
                </h2>
                  <p className="text-base leading-7 text-brand-tertiary/76 dark:text-brand-cloud/72">
                  {locale === "es"
                    ? "Elegimos estos proyectos para presentar los resultados de forma ordenada, intencional y fácil de apreciar."
                    : "Known related work is grouped together so the gallery feels intentional and easy to understand at a glance."}
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {FEATURED_TRANSFORMATION_GROUPS.map((group, index) => {
                const groupItems = group.items.flatMap((entry) => {
                  const item = portfolioById.get(entry.id);
                  return item ? [{ item, label: entry.label[locale] }] : [];
                });

                if (!groupItems.length) {
                  return null;
                }

                return (
                  <ScrollReveal key={group.id} delay={index * 0.08}>
                    <article className="rounded-[2rem] border border-brand-primary/12 bg-gradient-to-br from-surface via-surface to-brand-accent-1/8 p-6 shadow-[0_32px_80px_rgba(15,23,42,0.08)] dark:border-brand-highlight/15 dark:from-brand-secondary/70 dark:via-brand-secondary/55 dark:to-brand-accent-1/12 sm:p-8">
                      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-2xl space-y-2">
                          <h3 className="text-xl font-display text-brand-secondary dark:text-white sm:text-2xl">
                            {group.title[locale]}
                          </h3>
                          <p className="text-sm leading-6 text-brand-tertiary/76 dark:text-brand-cloud/72 sm:text-base">
                            {group.description[locale]}
                          </p>
                        </div>
                        <span className="inline-flex w-fit rounded-full bg-brand-barn-red/12 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-barn-red dark:bg-brand-barn-red/12 dark:text-brand-barn-red sm:text-xs">
                          {locale === "es" ? "Antes y después" : "Before & after"}
                        </span>
                      </div>

                      <div className="grid gap-5 md:grid-cols-2">
                        {groupItems.map(({ item, label }) => (
                          <GalleryImageCard
                            key={item.src}
                            item={item}
                            locale={locale}
                            label={label}
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        ))}
                      </div>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </section>

          <section className="space-y-6">
            <ScrollReveal>
              <div className="max-w-2xl space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-highlight sm:text-sm">
                  {locale === "es" ? "Proyecto destacado" : "Project spotlight"}
                </p>
                <h2 className="text-2xl font-display text-brand-secondary dark:text-brand-accent-1 sm:text-3xl">
                  {PROJECT_SPOTLIGHT.title[locale]}
                </h2>
                <p className="text-base leading-7 text-brand-tertiary/76 dark:text-brand-cloud/72">
                  {PROJECT_SPOTLIGHT.description[locale]}
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {PROJECT_SPOTLIGHT.itemIds
                .map((id) => portfolioById.get(id))
                .filter((item): item is PortfolioItem => Boolean(item))
                .map((item) => (
                  <StaggerItem key={item.src}>
                    <GalleryImageCard
                      item={item}
                      locale={locale}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                  </StaggerItem>
                ))}
            </StaggerContainer>
          </section>

          <section className="space-y-8">
            <ScrollReveal>
              <div className="max-w-2xl space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-highlight sm:text-sm">
                  {locale === "es" ? "Más transformaciones" : "More work"}
                </p>
                <h2 className="text-2xl font-display text-brand-secondary dark:text-brand-accent-1 sm:text-3xl">
                  {locale === "es"
                    ? "Organizado por tipo de proyecto"
                    : "Organized by project type"}
                </h2>
                <p className="text-base leading-7 text-brand-tertiary/76 dark:text-brand-cloud/72">
                  {locale === "es"
                    ? "Agrupamos el resto de los proyectos para que interiores y exteriores residenciales se entiendan rápido y se vean mejor organizados."
                    : "The rest of the portfolio stays grouped into clean sections so residential interiors and exteriors are easy to scan."}
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-10">
              {CATEGORY_ORDER.map((category, index) => {
                const items = additionalItemsByCategory.get(category) ?? [];

                if (!items.length) {
                  return null;
                }

                return (
                  <ScrollReveal key={category} delay={index * 0.06}>
                    <section className="space-y-5 rounded-[2rem] border border-brand-tertiary/12 bg-surface p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)] backdrop-blur-sm dark:border-border dark:bg-surface-muted sm:p-8">
                      <div className="max-w-2xl space-y-2">
                        <h3 className="text-xl font-display text-brand-secondary dark:text-white sm:text-2xl">
                          {CATEGORY_SECTION_COPY[category].title[locale]}
                        </h3>
                        <p className="text-sm leading-6 text-brand-tertiary/76 dark:text-brand-cloud/72 sm:text-base">
                          {CATEGORY_SECTION_COPY[category].description[locale]}
                        </p>
                      </div>

                      <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {items.map((item) => (
                          <StaggerItem key={item.src}>
                            <GalleryImageCard
                              item={item}
                              locale={locale}
                              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            />
                          </StaggerItem>
                        ))}
                      </StaggerContainer>
                    </section>
                  </ScrollReveal>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
