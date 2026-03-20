'use client';

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Clock3,
  type LucideIcon,
  Paintbrush2,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ScrollVideo from "@/components/ScrollVideo";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

const BEFORE_AFTER_FRAME_COUNT = 603;
const beforeAfterFramePath = (index: number) => `/frames/before-after/optimized/raw-${String(index + 1).padStart(4, '0')}.webp`;

type HeroStat = {
  value: string;
  label: string;
};

type FeatureCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type ServiceCard = {
  title: string;
  description: string;
  image: string;
  alt: string;
  className?: string;
};

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

type HomeCopy = {
  hero: {
    eyebrow: string;
    title1: string;
    title2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    stats: HeroStat[];
    panelTag: string;
    panelTitle: string;
    panelDescription: string;
    floatingCard: string;
    floatingDetail: string;
    bottomCardTitle: string;
    bottomCardDescription: string;
  };
  trustStrip: string[];
  craft: {
    eyebrow: string;
    title: string;
    description: string;
    checklist: string[];
    features: FeatureCard[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    cards: ServiceCard[];
    cta: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    description: string;
    badge: string;
    items: Testimonial[];
  };
  finalCta: {
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
};

const HOME_COPY: Record<'en' | 'es', HomeCopy> = {
  en: {
    hero: {
      eyebrow: 'Interior • Exterior • Commercial',
      title1: 'Perfect finishes.',
      title2: 'Built to last.',
      description:
        'Detail-first painting for homes, storefronts, and workspaces. Thoughtful prep, clean execution, and color decisions that feel intentional in every room.',
      primaryCta: 'Get a free estimate',
      secondaryCta: 'See recent work',
      stats: [
        { value: 'Clean lines', label: 'Prep-driven process' },
        { value: 'Respectful crews', label: 'Low-disruption workdays' },
        { value: 'Final walkthrough', label: 'Nothing left unfinished' },
      ],
      panelTag: 'Signature finish',
      panelTitle: 'A polished result without the renovation chaos.',
      panelDescription:
        'We plan the prep, protect the space, and deliver the kind of consistency clients notice the moment they walk back in.',
      floatingCard: 'Spaces that feel sharper, brighter, and more put together.',
      floatingDetail: 'Interior repaints, exterior protection, and commercial refreshes guided by a calm process.',
      bottomCardTitle: 'Color choices that work with the light',
      bottomCardDescription: 'We help clients avoid flat tones, rushed coats, and finishes that look tired too soon.',
    },
    trustStrip: ['Interior repainting', 'Exterior protection', 'Commercial refreshes', 'Cabinet refinishing'],
    craft: {
      eyebrow: 'Why clients call us back',
      title: 'Craftsmanship starts long before the first coat.',
      description:
        'A sharp finish depends on surface prep, clean masking, premium products, and a crew that communicates clearly from estimate to walkthrough.',
      checklist: [
        'Thoughtful protection for floors, furniture, and fixtures.',
        'Surface repair, sanding, caulking, and priming where it matters.',
        'Consistent cut lines and a close-out walkthrough before we leave.',
      ],
      features: [
        {
          title: 'Detailed prep',
          description: 'Patching, sanding, caulking, and priming so color lays down evenly and lasts.',
          icon: ShieldCheck,
        },
        {
          title: 'Clear scheduling',
          description: 'You know when we are arriving, what gets done each day, and how the project is progressing.',
          icon: Clock3,
        },
        {
          title: 'Premium finishes',
          description: 'Durable coatings and cleaner application techniques for a more refined final look.',
          icon: Sparkles,
        },
        {
          title: 'Residential to commercial',
          description: 'The same level of care scales from lived-in homes to customer-facing business spaces.',
          icon: Building2,
        },
      ],
    },
    services: {
      eyebrow: 'Where we do our best work',
      title: 'Tailored painting solutions for every surface and schedule.',
      description:
        'From lived-in family rooms to customer-facing commercial spaces, we bring the same discipline, protection, and finish quality to every project type.',
      cards: [
        {
          title: 'Interior painting',
          description: 'Walls, ceilings, trim, and lived-in spaces that need a cleaner, brighter reset.',
          image: '/images/gallery/c02cf30a-4ea3-4e7e-b6e6-71e96cd2cedd.jpeg',
          alt: 'Freshly painted modern interior with a clean, bright finish.',
          className: 'md:col-span-2 md:row-span-2',
        },
        {
          title: 'Exterior painting',
          description: 'Durable protection and curb appeal for siding, trim, doors, and outdoor surfaces.',
          image: '/images/gallery/8510a805-0725-415e-a482-d3b7fe91cfe4.jpeg',
          alt: 'Exterior painting project completed by S&M Painting.',
        },
        {
          title: 'Commercial spaces',
          description: 'Offices, storefronts, and rental properties refreshed with minimal disruption.',
          image: '/images/gallery/8cf01e68-8464-4091-bab9-69c94208c746.jpeg',
          alt: 'Commercial painting project with crisp architectural lines.',
        },
        {
          title: 'Cabinets & trim',
          description: 'Factory-smooth updates that modernize high-touch surfaces without full replacement.',
          image: '/images/gallery/3248cf5d-16fe-4d74-b57b-a7030ff5908d.jpeg',
          alt: 'Detailed cabinet and trim painting with a smooth finish.',
          className: 'md:col-span-2',
        },
      ],
      cta: 'Explore all services',
    },
    testimonials: {
      eyebrow: 'Client perspective',
      title: 'Un proceso tranquilo. Un resultado nítido. Un espacio que se siente completo.',
      description:
        'Nos enfocamos en lo que la gente recuerda: comunicación clara, áreas de trabajo más limpias y un acabado que sigue viéndose intencional después de que el equipo se va.',
      badge: 'Preparación cuidadosa. Ejecución limpia. Acabado sólido.',
      items: [
        {
          name: 'Sarah Jenkins',
          role: 'Cliente residencial',
          quote:
            'Trataron nuestra casa con cuidado desde el primer día. Las paredes se ven más definidas, la moldura más limpia y todo el lugar finalmente se siente resuelto.',
        },
        {
          name: 'Marcus Chen',
          role: 'Administrador de propiedades',
          quote:
            'El cronograma fue claro, el equipo estuvo organizado y la revisión final fue muy completa. Se sintió como trabajar con personas que valoran los detalles tanto como nosotros.',
        },
        {
          name: 'Elena Rodriguez',
          role: 'Propietaria',
          quote:
            'Renovamos gabinetes y varios cuartos al mismo tiempo. El acabado se siente de alta gama y el proceso nunca fue caótico ni apresurado.',
        },
      ],
    },
    finalCta: {
      title: '¿Listo para darle al espacio un mejor acabado?',
      description:
        'Cuéntenos qué habitaciones, superficies o propiedad quiere renovar. Le ayudaremos a definir alcance, tiempos y el mejor siguiente paso.',
      primary: 'Solicitar estimado',
      secondary: 'Llamar ahora',
    },
  },
  es: {
    hero: {
      eyebrow: 'Interiores • Exteriores • Comercial',
      title1: 'Acabados impecables.',
      title2: 'Hechos para durar.',
      description:
        'Pintura con enfoque en el detalle para hogares, negocios y espacios de trabajo. Preparación cuidadosa, ejecución limpia y decisiones de color que se sienten intencionales en cada ambiente.',
      primaryCta: 'Solicitar estimado gratis',
      secondaryCta: 'Ver trabajos recientes',
      stats: [
        { value: 'Líneas limpias', label: 'Proceso guiado por preparación' },
        { value: 'Equipos respetuosos', label: 'Jornadas con poca interrupción' },
        { value: 'Revisión final', label: 'Nada queda incompleto' },
      ],
      panelTag: 'Acabado distintivo',
      panelTitle: 'Un resultado pulido sin el caos de una remodelación.',
      panelDescription:
        'Planificamos la preparación, protegemos el espacio y entregamos la consistencia que los clientes notan apenas vuelven a entrar.',
      floatingCard: 'Espacios que se sienten más definidos, luminosos y bien resueltos.',
      floatingDetail: 'Renovaciones interiores, protección exterior y proyectos comerciales guiados por un proceso sereno.',
      bottomCardTitle: 'Colores que funcionan con la luz',
      bottomCardDescription: 'Ayudamos a evitar tonos planos, capas apuradas y acabados que se ven cansados demasiado pronto.',
    },
    trustStrip: ['Repintado interior', 'Protección exterior', 'Renovación comercial', 'Gabinetes y molduras'],
    craft: {
      eyebrow: 'Por qué los clientes nos vuelven a llamar',
      title: 'La artesanía empieza mucho antes de la primera capa.',
      description:
        'Un acabado preciso depende de la preparación de superficies, el enmascarado limpio, productos premium y un equipo que comunica con claridad desde el estimado hasta la revisión final.',
      checklist: [
        'Protección cuidadosa para pisos, muebles y accesorios.',
        'Reparación de superficies, lijado, sellado e imprimación donde realmente importa.',
        'Líneas consistentes y una revisión de cierre antes de retirarnos.',
      ],
      features: [
        {
          title: 'Preparación detallada',
          description: 'Resanes, lijado, sellado e imprimación para que el color se aplique parejo y dure más.',
          icon: ShieldCheck,
        },
        {
          title: 'Cronograma claro',
          description: 'Usted sabe cuándo llegamos, qué se completa cada día y cómo avanza el proyecto.',
          icon: Clock3,
        },
        {
          title: 'Acabados premium',
          description: 'Recubrimientos duraderos y técnicas más limpias para un resultado final más refinado.',
          icon: Sparkles,
        },
        {
          title: 'Hogar y comercial',
          description: 'El mismo nivel de cuidado se adapta a casas habitadas y espacios de negocio frente al público.',
          icon: Building2,
        },
      ],
    },
    services: {
      eyebrow: 'Dónde mejor trabajamos',
      title: 'Soluciones de pintura para cada superficie y cada ritmo de trabajo.',
      description:
        'Desde salas familiares hasta espacios comerciales de atención al cliente, llevamos la misma disciplina, protección y calidad de acabado a cada tipo de proyecto.',
      cards: [
        {
          title: 'Pintura interior',
          description: 'Paredes, techos, molduras y espacios vividos que necesitan un reinicio más limpio y luminoso.',
          image: '/images/gallery/c02cf30a-4ea3-4e7e-b6e6-71e96cd2cedd.jpeg',
          alt: 'Interior moderno recién pintado con un acabado limpio y luminoso.',
          className: 'md:col-span-2 md:row-span-2',
        },
        {
          title: 'Pintura exterior',
          description: 'Protección duradera y mejor presencia para siding, molduras, puertas y superficies exteriores.',
          image: '/images/gallery/8510a805-0725-415e-a482-d3b7fe91cfe4.jpeg',
          alt: 'Proyecto de pintura exterior terminado por S&M Painting.',
        },
        {
          title: 'Espacios comerciales',
          description: 'Oficinas, locales y propiedades de renta renovadas con mínima interrupción.',
          image: '/images/gallery/8cf01e68-8464-4091-bab9-69c94208c746.jpeg',
          alt: 'Proyecto comercial con líneas arquitectónicas definidas.',
        },
        {
          title: 'Gabinetes y molduras',
          description: 'Actualizaciones suaves tipo fábrica para modernizar superficies de alto uso sin reemplazar todo.',
          image: '/images/gallery/3248cf5d-16fe-4d74-b57b-a7030ff5908d.jpeg',
          alt: 'Pintura detallada de gabinetes y molduras con acabado suave.',
          className: 'md:col-span-2',
        },
      ],
      cta: 'Explorar todos los servicios',
    },
    testimonials: {
      eyebrow: 'La perspectiva del cliente',
      title: 'Un proceso tranquilo. Un resultado nítido. Un espacio que se siente completo.',
      description:
        'Nos enfocamos en lo que la gente recuerda: comunicación clara, áreas de trabajo más limpias y un acabado que sigue viéndose intencional después de que el equipo se va.',
      badge: 'Preparación cuidadosa. Ejecución limpia. Acabado sólido.',
      items: [
        {
          name: 'Sarah Jenkins',
          role: 'Cliente residencial',
          quote:
            'Trataron nuestra casa con cuidado desde el primer día. Las paredes se ven más definidas, la moldura más limpia y todo el lugar finalmente se siente resuelto.',
        },
        {
          name: 'Marcus Chen',
          role: 'Administrador de propiedades',
          quote:
            'El cronograma fue claro, el equipo estuvo organizado y la revisión final fue muy completa. Se sintió como trabajar con personas que valoran los detalles tanto como nosotros.',
        },
        {
          name: 'Elena Rodriguez',
          role: 'Propietaria',
          quote:
            'Renovamos gabinetes y varios cuartos al mismo tiempo. El acabado se siente de alta gama y el proceso nunca fue caótico ni apresurado.',
        },
      ],
    },
    finalCta: {
      title: '¿Listo para darle al espacio un mejor acabado?',
      description:
        'Cuéntenos qué habitaciones, superficies o propiedad quiere renovar. Le ayudaremos a definir alcance, tiempos y el mejor siguiente paso.',
      primary: 'Solicitar estimado',
      secondary: 'Llamar ahora',
    },
  },
};

export default function Home() {
  const { language } = useLanguage();
  const copy = HOME_COPY[language];

  return (
    <div className="flex flex-col bg-background text-foreground">
      <section className="relative overflow-hidden bg-brand-secondary text-white">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_35%,rgba(113,100,204,0.22)_100%)]" />
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-brand-accent-1/20 blur-3xl" />
        <div className="absolute -right-16 top-0 h-96 w-96 rounded-full bg-brand-primary/35 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-4 pb-20 pt-24 sm:px-6 sm:pb-24 sm:pt-28 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] lg:px-8 lg:pb-28 lg:pt-32">
          <div className="flex flex-col justify-center text-center lg:text-left">
            <ScrollReveal direction="right" delay={0.05} className="mx-auto lg:mx-0">
              <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
                <Image
                  src="/images/logos/Logo_White.webp"
                  alt="S&M Painting logo"
                  width={34}
                  height={34}
                  className="h-8 w-8 object-contain"
                  priority
                />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                  {copy.hero.eyebrow}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.12}>
              <h1 className="max-w-3xl text-4xl font-display leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[0.98] lg:tracking-[-0.04em]">
                <span className="block">{copy.hero.title1}</span>
                <span className="mt-2 block text-brand-accent-1">{copy.hero.title2}</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <p className="mt-6 mx-auto lg:mx-0 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                {copy.hero.description}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.28}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-brand-secondary transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {copy.hero.primaryCta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/15"
                >
                  {copy.hero.secondaryCta}
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="left" delay={0.18} className="hidden lg:block">
            <div className="relative mx-auto w-full max-w-xl pb-16 lg:pb-20">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_35px_90px_-40px_rgba(12,10,30,0.85)]">
                <Image
                  src="/images/gallery/03f36018-e2da-49ff-a7d3-ce16ebcd2127.jpeg"
                  alt="Freshly painted interior by S&M Painting"
                  fill
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,12,45,0.12)_0%,rgba(18,12,45,0.7)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-6 pb-40 sm:p-8 sm:pb-44">
                  <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                    {copy.hero.panelTag}
                  </div>
                  <h2 className="mt-4 max-w-md text-2xl font-display text-white sm:text-3xl">
                    {copy.hero.panelTitle}
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-7 text-white/75 sm:text-base">
                    {copy.hero.panelDescription}
                  </p>
                </div>
              </div>

              <div className="absolute -right-3 top-7 hidden max-w-[14rem] rounded-[1.35rem] border border-white/10 bg-white/15 p-5 backdrop-blur-md sm:block lg:-right-8">
                <div className="mb-3 flex items-center gap-2 text-brand-accent-1">
                  <Paintbrush2 className="h-4 w-4" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                    S&amp;M Painting
                  </span>
                </div>
                <p className="text-sm font-medium leading-6 text-white">{copy.hero.floatingCard}</p>
                <p className="mt-3 text-xs leading-6 text-white/70">{copy.hero.floatingDetail}</p>
              </div>

              <div className="absolute -bottom-3 left-4 right-4 rounded-[1.5rem] border border-white/10 bg-brand-tertiary/80 p-4 shadow-xl shadow-black/20 backdrop-blur-sm sm:left-8 sm:right-auto sm:w-[18rem]">
                <div className="relative h-24 overflow-hidden rounded-[1rem] border border-white/10">
                  <Image
                    src="/images/gallery/589deba1-7a7b-496e-b8be-3ba64166a15e.jpeg"
                    alt="Color and finish inspiration from an S&M Painting project"
                    fill
                    sizes="18rem"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,12,36,0.1)_0%,rgba(17,12,36,0.48)_100%)]" />
                </div>
                <p className="mt-4 text-sm font-semibold text-white">{copy.hero.bottomCardTitle}</p>
                <p className="mt-2 text-xs leading-6 text-white/70">{copy.hero.bottomCardDescription}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-brand-secondary/10 bg-brand-secondary/[0.04] py-6 dark:bg-brand-accent-1/[0.06]">
        <div className="mx-auto flex flex-wrap justify-center gap-x-8 gap-y-4 px-4 sm:grid sm:grid-cols-2 sm:gap-3 sm:px-6 lg:grid-cols-4 lg:px-8">
          {copy.trustStrip.map((item) => (
            <div
              key={item}
              className="flex items-center justify-center gap-2 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-secondary dark:text-white/80 sm:rounded-full sm:border sm:border-brand-secondary/10 sm:bg-white/80 sm:px-4 sm:py-3 sm:text-xs dark:sm:border-white/10 dark:sm:bg-white/5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-primary sm:h-2 sm:w-2" aria-hidden="true" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/15 to-transparent" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8">
          <div>
            <ScrollReveal direction="right">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary">
                {copy.craft.eyebrow}
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.08}>
              <h2 className="mt-4 max-w-xl text-4xl font-display text-brand-secondary dark:text-brand-accent-1 sm:text-5xl">
                {copy.craft.title}
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.16}>
              <p className="mt-6 max-w-xl text-base leading-8 text-foreground/70 dark:text-white/70 sm:text-lg">
                {copy.craft.description}
              </p>
            </ScrollReveal>

            <div className="mt-8 space-y-6 sm:space-y-4">
              {copy.craft.checklist.map((item, index) => (
                <ScrollReveal key={item} direction="right" delay={0.2 + index * 0.08}>
                  <div className="flex items-start gap-3 sm:rounded-[1.2rem] sm:border sm:border-brand-secondary/10 sm:bg-brand-secondary/[0.03] sm:p-4 dark:sm:border-white/10 dark:sm:bg-white/[0.03]">
                    <CheckCircleIcon />
                    <p className="text-sm leading-7 text-foreground/80 dark:text-white/70">{item}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <StaggerContainer className="grid gap-5 sm:grid-cols-2" delay={0.12} staggerDelay={0.08}>
            {copy.craft.features.map((feature) => {
              const Icon = feature.icon;

              return (
                <StaggerItem key={feature.title}>
                  <div className="group h-full rounded-[1.75rem] border border-brand-secondary/10 bg-white p-6 shadow-[0_22px_50px_-38px_rgba(26,20,58,0.5)] transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.03]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary dark:bg-brand-accent-1/15 dark:text-brand-accent-1">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-2xl font-display text-brand-secondary dark:text-white">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-foreground/70 dark:text-white/65">{feature.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <ScrollVideo frameCount={BEFORE_AFTER_FRAME_COUNT} framePath={beforeAfterFramePath} />

      <section className="relative overflow-hidden pb-8 pt-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/15 to-transparent" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8">
          <div>
            <ScrollReveal direction="right">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary">
                {copy.services.eyebrow}
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.08}>
              <h2 className="mt-4 max-w-3xl text-3xl font-display text-brand-secondary dark:text-brand-accent-1 sm:text-5xl">
                {copy.services.title}
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.16}>
              <p className="mt-6 max-w-2xl text-base leading-8 text-foreground/70 dark:text-white/70 sm:text-lg">
                {copy.services.description}
              </p>
            </ScrollReveal>
          </div>

          <StaggerContainer className="mt-12 grid gap-5 md:grid-cols-3 md:auto-rows-[300px]" delay={0.12} staggerDelay={0.08}>
            {copy.services.cards.map((card) => (
              <StaggerItem key={card.title} className={card.className}>
                <div className="group relative h-[300px] md:h-full overflow-hidden rounded-[1.9rem]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,14,40,0.12)_0%,rgba(17,14,40,0.8)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65 sm:text-xs">S&amp;M Painting</p>
                    <h3 className="mt-2 text-2xl font-display text-white sm:mt-3 sm:text-3xl">{card.title}</h3>
                    <p className="mt-2 max-w-md text-xs leading-6 text-white/75 sm:mt-3 sm:text-sm sm:leading-7">{card.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.18}>
            <div className="mt-8 flex justify-end">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary transition-colors hover:text-brand-secondary dark:hover:text-brand-accent-1"
              >
                {copy.services.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-secondary/[0.04] py-20 dark:bg-white/[0.03] sm:py-24">
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-brand-accent-1/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <ScrollReveal>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary">
                  {copy.testimonials.eyebrow}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h2 className="mt-4 max-w-3xl text-4xl font-display text-brand-secondary dark:text-brand-accent-1 sm:text-5xl">
                  {copy.testimonials.title}
                </h2>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.16}>
              <div className="rounded-full border border-brand-secondary/10 bg-white/80 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-secondary shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/75">
                {copy.testimonials.badge}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.12}>
            <p className="mt-6 max-w-3xl text-base leading-8 text-foreground/70 dark:text-white/70 sm:text-lg">
              {copy.testimonials.description}
            </p>
          </ScrollReveal>

          <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-3" delay={0.16} staggerDelay={0.08}>
            {copy.testimonials.items.map((item) => (
              <StaggerItem key={`${item.name}-${item.role}`}>
                <div className="flex h-full flex-col rounded-[1.8rem] border border-brand-secondary/10 bg-white p-7 shadow-[0_24px_60px_-42px_rgba(26,20,58,0.45)] dark:border-white/10 dark:bg-brand-accent-2/20">
                  <div className="flex items-center gap-1 text-brand-primary">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 flex-1 text-base leading-8 text-foreground/80 dark:text-white/75">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-6 border-t border-brand-secondary/10 pt-5 dark:border-white/10">
                    <p className="text-lg font-display text-brand-secondary dark:text-white">{item.name}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-foreground/55 dark:text-white/45">
                      {item.role}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[2.4rem] bg-brand-secondary text-white shadow-[0_40px_100px_-50px_rgba(23,16,49,0.9)]">
              <div className="absolute inset-0 opacity-20">
                <Image
                  src="/images/gallery/7b51ddca-47a8-4380-80b4-d3189b80b6af.jpeg"
                  alt="Painted texture and finish detail"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(23,16,49,0.82)_0%,rgba(52,30,104,0.86)_55%,rgba(74,62,157,0.74)_100%)]" />
              <div className="relative z-10 grid gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:px-14">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent-1">
                    S&amp;M Painting
                  </p>
                  <h2 className="mt-4 max-w-3xl text-4xl font-display text-white sm:text-5xl lg:text-6xl">
                    {copy.finalCta.title}
                  </h2>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                    {copy.finalCta.description}
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-end">
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-brand-secondary transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    {copy.finalCta.primary}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="tel:5551234567"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/15"
                  >
                    <PhoneCall className="h-4 w-4" />
                    {copy.finalCta.secondary}
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

function CheckCircleIcon() {
  return (
    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary dark:bg-brand-accent-1/15 dark:text-brand-accent-1">
      <ShieldCheck className="h-3.5 w-3.5" />
    </div>
  );
}
