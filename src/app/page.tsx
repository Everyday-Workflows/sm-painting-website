'use client';

import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ScrollVideo from "@/components/ScrollVideo";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

const BEFORE_AFTER_FRAME_COUNT = 603;
const beforeAfterFramePath = (index: number) => `/frames/before-after/optimized/raw-${String(index + 1).padStart(4, '0')}.webp`;

export default function Home() {
  const { t } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  if (!mounted) return null;

  const logoSrc = resolvedTheme === 'dark'
    ? '/images/logos/Logo_Dark_Mode.webp'
    : '/images/logos/Logo_Light_Mode.webp';

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 min-h-[78vh] lg:min-h-[88vh] flex items-center overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="lg:w-1/2">
              <ScrollReveal direction="right" delay={0.2}>
                <h1 className="text-4xl font-display tracking-tight text-brand-secondary dark:text-brand-accent-1 sm:text-5xl md:text-6xl leading-tight">
                  <span className="block">{t('hero.title1')}</span>
                  <span className="block text-brand-primary">{t('hero.title2')}</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.4}>
                <p className="mt-4 text-lg font-sans text-gray-500 dark:text-gray-400 sm:mt-6 sm:text-xl sm:max-w-2xl sm:mx-auto lg:mx-0 md:text-2xl leading-relaxed">
                  {t('hero.description')}
                </p>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.6}>
                <div className="mt-10 flex flex-col items-center sm:flex-row sm:justify-center lg:justify-start gap-4">
                  <Link href="/services" className="inline-flex w-fit">
                    <Button variant="primary" className="text-lg px-8 py-3.5">
                      {t('hero.cta1')}
                    </Button>
                  </Link>
                  <Link href="/gallery" className="inline-flex w-fit">
                    <Button variant="secondary" className="text-lg px-8 py-3.5">
                      {t('hero.cta2')}
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <div className="mt-14 lg:mt-0 lg:w-1/2 hidden sm:flex justify-center">
              <ScrollReveal direction="left" delay={0.4}>
                <div className="relative w-72 h-72 sm:w-[24rem] sm:h-[24rem] md:w-[30rem] md:h-[30rem] lg:w-[34rem] lg:h-[34rem]">
                  <Image 
                    src={logoSrc} 
                    alt="S&M Painting - Professional Residential and Commercial Painting Logo" 
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Video Section */}
      <ScrollVideo frameCount={BEFORE_AFTER_FRAME_COUNT} framePath={beforeAfterFramePath} />

      {/* About Us Section */}
      <section className="relative py-12 sm:py-24 transition-colors duration-300 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2">
              <ScrollReveal direction="right">
                <h2 className="text-2xl font-display text-brand-secondary dark:text-brand-accent-1 sm:text-3xl leading-tight">
                  {t('about.title')}
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <p className="mt-4 text-lg font-sans text-gray-500 dark:text-gray-400 leading-relaxed">
                  {t('about.p1')}
                </p>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.3}>
                <p className="mt-4 text-lg font-sans text-gray-500 dark:text-gray-400 leading-relaxed">
                  {t('about.p2')}
                </p>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.4}>
                <div className="mt-8">
                  <Link href="/services" className="inline-flex w-fit">
                    <Button variant="tertiary" className="px-6 py-3 sm:py-2">
                      {t('about.cta')}
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <div className="mt-12 lg:mt-0 lg:w-1/2 grid grid-cols-2 gap-4">
              <ScrollReveal direction="up" delay={0.2}>
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                  <Image src="/images/gallery/03f36018-e2da-49ff-a7d3-ce16ebcd2127.jpeg" alt="Professional interior painting project by S&M Painting" fill className="object-cover" />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.4}>
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg mt-8">
                  <Image src="/images/gallery/3248cf5d-16fe-4d74-b57b-a7030ff5908d.jpeg" alt="High-quality exterior painting finish by S&M Painting" fill className="object-cover" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <ScrollReveal>
              <h2 className="text-2xl font-display text-gray-900 dark:text-white sm:text-3xl leading-tight">
                {t('testimonials.title')}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-4 text-lg font-subtitle text-gray-500 dark:text-gray-400">
                {t('testimonials.subtitle')}
              </p>
            </ScrollReveal>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                id: "testimonial-1",
                name: "John Smith",
                text: "S&M Painting did an incredible job on our living room. The attention to detail was impressive, and they finished ahead of schedule!",
                role: "Homeowner"
              },
              {
                id: "testimonial-2",
                name: "Sarah Johnson",
                text: "Professional, clean, and the results are stunning. Our office looks brand new. Highly recommend for any commercial project.",
                role: "Business Owner"
              },
              {
                id: "testimonial-3",
                name: "Michael Brown",
                text: "The best painting crew I've ever hired. They were respectful of our home and the final result is perfect. Five stars!",
                role: "Homeowner"
              }
            ].map((testimonial, index) => (
              <StaggerItem key={index}>
                <div className="bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md p-8 rounded-2xl border border-gray-200/30 dark:border-gray-800/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group h-full">
                  <p className="text-lg font-sans text-gray-600 dark:text-gray-400 italic mb-6 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div>
                    <p className="font-bold font-subtitle text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm font-sans text-gray-500 dark:text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="relative bg-brand-primary/10 dark:bg-brand-primary/5 backdrop-blur-sm border border-brand-primary/20 rounded-[3rem] p-12 sm:p-20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-accent-1/5 pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-2xl font-display text-brand-secondary dark:text-brand-accent-1 sm:text-3xl mb-6 sm:mb-8 leading-tight">
                  {t('cta.title')}
                </h2>
                <p className="text-lg font-subtitle mb-8 sm:mb-10 opacity-90 max-w-2xl mx-auto">
                  {t('cta.description')}
                </p>
                <Button variant="primary" className="text-lg px-10 py-4 shadow-xl shadow-brand-primary/20">
                  {t('cta.button')}
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
