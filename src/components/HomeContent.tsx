"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Clock3,
  type LucideIcon,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ScrollVideo from "@/components/ScrollVideo";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/ScrollReveal";
import { CONTACT_LINKS } from "@/lib/contact";
import { BRAND_ASSETS, FEATURED_GALLERY_ASSETS } from "@/lib/siteAssets";

const BEFORE_AFTER_FRAME_COUNT = 603;
const beforeAfterFramePath = (index: number) =>
  `/frames/before-after/optimized/raw-${String(index + 1).padStart(4, "0")}.webp`;

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
  featured?: boolean;
};

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

type ProcessStep = {
  title: string;
  description: string;
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
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: ProcessStep[];
  };
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
  imageAlts: {
    logo: string;
    heroShowcase: string;
    bottomCard: string;
    ctaBackground: string;
    precisionArtboard: string;
    qualityArtboard: string;
  };
};

const HOME_COPY: Record<"en" | "es", HomeCopy> = {
  en: {
    hero: {
      eyebrow: "Interior • Exterior • Commercial",
      title1: "Perfect finishes.",
      title2: "Built to last.",
      description:
        "Detail-first painting for homes, storefronts, and workspaces in Tampa, St. Petersburg, and all surrounding cities. We speak Spanish! Perfect finishes built to last through thoughtful prep, clean execution, and color decisions that feel intentional in every room.",
      primaryCta: "Get a free estimate",
      secondaryCta: "See recent work",
      stats: [
        { value: "Clean lines", label: "Prep-driven process" },
        { value: "Respectful crews", label: "Low-disruption workdays" },
        { value: "Final walkthrough", label: "Nothing left unfinished" },
      ],
      panelTag: "Signature finish",
      panelTitle: "A polished result without the renovation chaos.",
      panelDescription:
        "We plan the prep, protect the space, and deliver the kind of consistency clients notice the moment they walk back in.",
      floatingCard:
        "Spaces that feel sharper, brighter, and more put together.",
      floatingDetail:
        "Interior repaints, exterior protection, and commercial refreshes guided by a calm process.",
      bottomCardTitle: "Color choices that work with the light",
      bottomCardDescription:
        "We help clients avoid flat tones, rushed coats, and finishes that look tired too soon.",
    },
    trustStrip: [
      "Interior repainting",
      "Exterior protection",
      "Commercial refreshes",
      "Cabinet refinishing",
    ],
    process: {
      eyebrow: "What to expect",
      title: "A smoother project starts with a clearer plan.",
      description:
        "We keep projects organized from the first walkthrough to the final touchups so your home or property stays protected and the finish stays consistent.",
      steps: [
        {
          title: "Walkthrough & estimate",
          description:
            "We review surfaces, note repairs, talk color direction, and map the scope before work begins.",
        },
        {
          title: "Prep & protection",
          description:
            "Floors, furniture, fixtures, and adjacent surfaces are covered while patching, sanding, caulking, and priming happen where needed.",
        },
        {
          title: "Paint & final review",
          description:
            "We apply durable coats, keep the site tidy, and close with a walkthrough so nothing feels rushed or unfinished.",
        },
      ],
    },
    craft: {
      eyebrow: "Why clients call us back",
      title: "Craftsmanship starts long before the first coat.",
      description:
        "A sharp finish depends on surface prep, clean masking, premium products, and a crew that communicates clearly from estimate to walkthrough.",
      checklist: [
        "Thoughtful protection for floors, furniture, and fixtures.",
        "Surface repair, sanding, caulking, and priming where it matters.",
        "Consistent cut lines and a close-out walkthrough before we leave.",
      ],
      features: [
        {
          title: "Detailed prep",
          description:
            "Patching, sanding, caulking, and priming so color lays down evenly and lasts.",
          icon: ShieldCheck,
        },
        {
          title: "Clear scheduling",
          description:
            "You know when we are arriving, what gets done each day, and how the project is progressing.",
          icon: Clock3,
        },
        {
          title: "Premium finishes",
          description:
            "Durable coatings and cleaner application techniques for a more refined final look.",
          icon: Sparkles,
        },
        {
          title: "Residential to commercial",
          description:
            "The same level of care scales from lived-in homes to customer-facing business spaces.",
          icon: Building2,
        },
      ],
    },
    services: {
      eyebrow: "Where we do our best work",
      title: "Tailored painting solutions for every surface and schedule.",
      description:
        "From lived-in family rooms to exterior facades and rental-ready refreshes, we bring the same discipline, protection, and finish quality to every project type.",
      cards: [
        {
          title: "Interior painting",
          description:
            "Walls, ceilings, trim, and lived-in spaces that need a cleaner, brighter reset.",
          image: FEATURED_GALLERY_ASSETS.interiorService,
          alt: "Freshly painted open-plan interior with bright walls, clean trim, and an updated everyday living space.",
          featured: true,
        },
        {
          title: "Exterior painting",
          description:
            "Durable protection and curb appeal for siding, trim, doors, and outdoor surfaces.",
          image: FEATURED_GALLERY_ASSETS.exteriorService,
          alt: "Completed exterior repaint on a two-story stucco home with soft gray tones and crisp trim.",
        },
        {
          title: "Home refreshes",
          description:
            "Lived-in homes and rental-ready properties refreshed with clean prep and dependable finishes.",
          image: FEATURED_GALLERY_ASSETS.refreshService,
          alt: "Refreshed bedroom with soft neutral paint, bright trim, and a clean move-in-ready finish.",
        },
      ],
      cta: "Explore all services",
    },
    testimonials: {
      eyebrow: "Client perspective",
      title: "A calm process. A crisp result. A space that feels complete.",
      description:
        "We focus on what people remember: clear communication, cleaner work areas, and a finish that still feels intentional after the crew packs up.",
      badge: "Careful prep. Clean execution. Lasting finish.",
      items: [
        {
          name: "Sarah Jenkins",
          role: "Homeowner",
          quote:
            "They treated our home with care from day one. The walls look sharper, the trim looks cleaner, and the whole place finally feels finished.",
        },
        {
          name: "Marcus Chen",
          role: "Property manager",
          quote:
            "The schedule was clear, the crew stayed organized, and the final walkthrough was thorough. It felt like working with people who value details as much as we do.",
        },
        {
          name: "Elena Rodriguez",
          role: "Owner",
          quote:
            "We refreshed cabinets and multiple rooms at the same time. The finish feels high-end, and the process never felt chaotic or rushed.",
        },
      ],
    },
    finalCta: {
      title: "Ready to give your space a better finish?",
      description:
        "Tell us which rooms, surfaces, or property you want to refresh. We will help you define scope, timing, and the best next step.",
      primary: "Request estimate",
      secondary: "Call now",
    },
    imageAlts: {
      logo: "S&H Painting logo",
      heroShowcase: "Freshly painted open-concept living room by S&H Painting",
      bottomCard: "Color and finish inspiration from an S&H Painting project",
      ctaBackground: "Exterior architectural detail during painting prep",
      precisionArtboard: "Brand artboard reading Precision in Every Stroke",
      qualityArtboard: "Brand artboard reading Quality Meets Color",
    },
  },
  es: {
    hero: {
      eyebrow: "Interiores • Exteriores • Comercial",
      title1: "Acabados impecables.",
      title2: "Hechos para durar.",
      description:
        "Pintura con enfoque en el detalle para hogares, negocios y espacios de trabajo en Tampa, St. Petersburg y todas las ciudades circundantes. ¡Hablamos español! Acabados impecables hechos para durar con preparación cuidadosa, ejecución limpia y decisiones de color que se sienten intencionales en cada ambiente.",
      primaryCta: "Solicitar cotización gratis",
      secondaryCta: "Ver trabajos recientes",
      stats: [
        { value: "Líneas limpias", label: "Proceso guiado por preparación" },
        {
          value: "Equipos respetuosos",
          label: "Jornadas con poca interrupción",
        },
        { value: "Revisión final", label: "Nada queda incompleto" },
      ],
      panelTag: "Acabados únicos",
      panelTitle: "Un resultado pulido sin el caos de una remodelación.",
      panelDescription:
        "Planificamos la preparación, protegemos el espacio y entregamos la consistencia que los clientes notan apenas vuelven a entrar.",
      floatingCard:
        "Espacios que se sienten más definidos, luminosos y arreglados.",
      floatingDetail:
        "Renovaciones interiores, protección exterior y proyectos comerciales guiados por un proceso sereno.",
      bottomCardTitle: "Colores que funcionan con la luz",
      bottomCardDescription:
        "Ayudamos a evitar tonos planos, capas apuradas y acabados que se ven cansados demasiado pronto.",
    },
    trustStrip: [
      "Repintado interior",
      "Protección exterior",
      "Renovación comercial",
      "Gabinetes y molduras",
    ],
    process: {
      eyebrow: "Qué puede esperar",
      title: "Un proyecto más fluido comienza con un plan más claro.",
      description:
        "Mantenemos cada proyecto organizado desde la primera visita hasta los retoques finales para proteger su hogar o propiedad y mantener un acabado consistente.",
      steps: [
        {
          title: "Recorrido y cotización",
          description:
            "Revisamos superficies, identificamos reparaciones, conversamos sobre la dirección del color y definimos el alcance antes de comenzar.",
        },
        {
          title: "Preparación y protección",
          description:
            "Cubrimos pisos, muebles, accesorios y áreas cercanas mientras hacemos resanes, lijado, sellado e imprimación donde haga falta.",
        },
        {
          title: "Pintura y revisión final",
          description:
            "Aplicamos capas duraderas, mantenemos el área ordenada y cerramos con una revisión para que nada se sienta apresurado o incompleto.",
        },
      ],
    },
    craft: {
      eyebrow: "Por qué los clientes nos vuelven a llamar",
      title: "La artesanía empieza mucho antes de la primera capa.",
      description:
        "La artesanía empieza mucho antes de la primera capa. Un acabado preciso depende de la preparación de superficies, el enmascarado limpio, productos premium y un equipo que comunica con claridad desde la cotización hasta la revisión final.",
      checklist: [
        "Protección cuidadosa para pisos, muebles y accesorios.",
        "Reparación de superficies, lijado, sellado e imprimación donde realmente importa.",
        "Líneas consistentes y una revisión de cierre antes de retirarnos.",
      ],
      features: [
        {
          title: "Preparación detallada",
          description:
            "Resanes, lijado, sellado e imprimación para que el color se aplique parejo y dure más.",
          icon: ShieldCheck,
        },
        {
          title: "Cronograma claro",
          description:
            "Usted sabe cuándo llegamos, qué se completa cada día y cómo avanza el proyecto.",
          icon: Clock3,
        },
        {
          title: "Acabados premium",
          description:
            "Recubrimientos duraderos y técnicas más limpias para un resultado final más refinado.",
          icon: Sparkles,
        },
        {
          title: "Hogar y comercial",
          description:
            "El mismo nivel de cuidado se adapta a casas habitadas y espacios de negocio frente al público.",
          icon: Building2,
        },
      ],
    },
    services: {
      eyebrow: "Dónde mejor trabajamos",
      title:
        "Soluciones de pintura para cada superficie y cada ritmo de trabajo.",
      description:
        "Desde salas familiares hasta espacios comerciales de atención al cliente, llevamos la misma disciplina, protección y calidad de acabado a cada tipo de proyecto.",
      cards: [
        {
          title: "Pintura interior",
          description:
            "Paredes, techos, molduras y espacios vividos que necesitan un reinicio más limpio y luminoso.",
          image: FEATURED_GALLERY_ASSETS.interiorService,
          alt: "Interior de concepto abierto recién pintado con paredes luminosas, molduras limpias y un ambiente renovado.",
          featured: true,
        },
        {
          title: "Pintura exterior",
          description:
            "Protección duradera y mejor presencia para siding, molduras, puertas y superficies exteriores.",
          image: FEATURED_GALLERY_ASSETS.exteriorService,
          alt: "Repintado exterior terminado en una casa de dos pisos con estuco, tonos grises suaves y molduras definidas.",
        },
        {
          title: "Renovación del hogar",
          description:
            "Hogares habitados y propiedades listas para renta renovados con preparación cuidadosa y acabados confiables.",
          image: FEATURED_GALLERY_ASSETS.refreshService,
          alt: "Dormitorio renovado con pintura en tono neutro suave, molduras claras y un acabado limpio listo para habitar.",
        },
      ],
      cta: "Explorar todos los servicios",
    },
    testimonials: {
      eyebrow: "La perspectiva del cliente",
      title:
        "Un proceso tranquilo. Un resultado nítido. Un espacio que se siente completo.",
      description:
        "Nos enfocamos en lo que la gente recuerda: comunicación clara, áreas de trabajo más limpias y un acabado que sigue viéndose intencional después de que el equipo se va.",
      badge: "Preparación cuidadosa. Ejecución limpia. Acabado sólido.",
      items: [
        {
          name: "Sarah Jenkins",
          role: "Cliente residencial",
          quote:
            "Trataron nuestra casa con cuidado desde el primer día. Las paredes se ven más definidas, la moldura más limpia y todo el lugar finalmente se siente resuelto.",
        },
        {
          name: "Marcus Chen",
          role: "Administrador de propiedades",
          quote:
            "El cronograma fue claro, el equipo estuvo organizado y la revisión final fue muy completa. Se sintió como trabajar con personas que valoran los detalles tanto como nosotros.",
        },
        {
          name: "Elena Rodriguez",
          role: "Propietaria",
          quote:
            "Renovamos gabinetes y varios cuartos al mismo tiempo. El acabado se siente de alta gama y el proceso nunca fue caótico ni apresurado.",
        },
      ],
    },
    finalCta: {
      title: "¿Listo para darle al espacio un mejor acabado?",
      description:
        "Cuéntenos qué habitaciones, superficies o propiedad quiere renovar. Le ayudaremos a definir alcance, tiempos y el mejor siguiente paso.",
      primary: "Solicitar cotización",
      secondary: "Llamar ahora",
    },
    imageAlts: {
      logo: "Logo de S&H Painting",
      heroShowcase: "Sala de concepto abierto recién pintada por S&H Painting",
      bottomCard:
        "Inspiración de color y acabado de un proyecto de S&H Painting",
      ctaBackground: "Detalle exterior en preparación para pintura",
      precisionArtboard: "Arte de marca con el lema Precision in Every Stroke",
      qualityArtboard: "Arte de marca con el lema Quality Meets Color",
    },
  },
};

export default function HomeContent() {
  const { language, t } = useLanguage();
  const copy = HOME_COPY[language];
  const processStepBackgrounds = [
    FEATURED_GALLERY_ASSETS.exteriorService,
    FEATURED_GALLERY_ASSETS.interiorService,
    FEATURED_GALLERY_ASSETS.commercialService,
  ] as const;
  const heroPanelTitleClassName =
    language === "es"
      ? "max-w-[8.75ch] text-[1.65rem] leading-[0.88] text-balance sm:max-w-[8.6ch] sm:text-[1.95rem] lg:max-w-[7ch] lg:text-[2rem]"
      : "max-w-[9.8ch] text-[1.7rem] leading-[0.9] text-balance sm:text-[1.55rem] sm:leading-8 lg:text-[2.05rem]";

  return (
    <div className="flex flex-col bg-background text-foreground">
      <section className="relative overflow-hidden bg-brand-secondary text-white">
        <div className="absolute inset-0 lg:hidden">
          <Image
            src={FEATURED_GALLERY_ASSETS.heroShowcase}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklch,var(--brand-secondary)_42%,transparent)_0%,color-mix(in_oklch,var(--brand-secondary)_74%,transparent)_28%,color-mix(in_oklch,var(--brand-secondary)_90%,transparent)_62%,color-mix(in_oklch,var(--brand-secondary)_96%,black_4%)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,color-mix(in_oklch,var(--brand-highlight)_16%,transparent)_0%,transparent_42%)]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_35%,rgba(113,100,204,0.22)_100%)]" />
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-brand-highlight/18 blur-3xl" />
        <div className="absolute -right-16 top-0 h-96 w-96 rounded-full bg-brand-primary/35 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-4 pb-20 pt-24 sm:px-6 sm:pb-24 sm:pt-28 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] lg:px-8 lg:pb-28 lg:pt-32">
          <div className="flex flex-col justify-center text-center lg:text-left">
            <ScrollReveal
              direction="right"
              delay={0.05}
              className="mx-auto lg:mx-0"
            >
              <div className="mx-auto mb-6 hidden w-28 sm:block sm:w-32 lg:mx-0">
                <Image
                  src={BRAND_ASSETS.anniversarySealArtboard}
                  alt={t("common.sealAlt")}
                  width={160}
                  height={160}
                  className="mx-auto h-auto w-full object-contain lg:mx-0"
                  priority
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.08}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white">
                {copy.hero.eyebrow}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.14}>
              <h1 className="max-w-3xl text-4xl font-display leading-[1.1] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] sm:text-6xl lg:text-7xl lg:leading-[0.98] lg:tracking-[-0.04em]">
                <span className="block">{copy.hero.title1}</span>
                <span className="mt-2 block text-brand-highlight">
                  {copy.hero.title2}
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <p className="mt-6 mx-auto lg:mx-0 max-w-2xl text-base leading-7 text-white sm:text-lg sm:leading-8">
                {copy.hero.description}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.28}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="/services#estimate-form"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-highlight px-7 py-4 text-sm font-semibold text-white shadow-[0_20px_45px_-24px_color-mix(in_oklch,var(--brand-highlight)_72%,transparent)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-accent-1"
                >
                  {copy.hero.primaryCta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:border-brand-highlight/60 hover:bg-white/15"
                >
                  {copy.hero.secondaryCta}
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal
            direction="left"
            delay={0.18}
            className="hidden lg:block"
          >
            <div className="relative mx-auto w-full max-w-xl pb-16 lg:pb-20">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_35px_90px_-40px_rgba(12,10,30,0.85)]">
                <Image
                  src={FEATURED_GALLERY_ASSETS.heroShowcase}
                  alt={copy.imageAlts.heroShowcase}
                  fill
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,12,45,0.12)_0%,rgba(18,12,45,0.7)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 z-10 p-6 pb-40 sm:p-8 sm:pb-44 lg:pr-[17rem]">
                  <div className="relative z-10 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                    {copy.hero.panelTag}
                  </div>
                  <h2
                    className={`mt-3 font-display text-white ${heroPanelTitleClassName}`}
                  >
                    {copy.hero.panelTitle}
                  </h2>
                  <p className="mt-2 max-w-md text-sm leading-6 text-white/75 sm:text-[0.95rem] sm:leading-7">
                    {copy.hero.panelDescription}
                  </p>
                </div>
              </div>

              <div className="absolute -right-3 top-7 hidden max-w-[13.25rem] rounded-[1.35rem] border border-brand-accent-1/24 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent_38%)] p-5 shadow-[0_28px_70px_-42px_rgba(28,23,79,0.78)] backdrop-blur-xl sm:block lg:-right-14">
                <div className="absolute inset-0 rounded-[1.35rem] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_38%)] opacity-80" />
                <p className="relative text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-cloud/78">
                  S&amp;H Painting
                </p>
                <p className="relative mt-4 text-[1.05rem] font-medium leading-7 text-white/96">
                  {copy.hero.floatingCard}
                </p>
                <p className="relative mt-3 text-[0.92rem] leading-7 text-white/80">
                  {copy.hero.floatingDetail}
                </p>
              </div>

              <div className="absolute -bottom-3 left-4 right-4 rounded-[1.5rem] border border-brand-accent-1/18 bg-[color-mix(in_oklch,var(--brand-tertiary)_86%,var(--brand-accent-1)_14%)] p-4 shadow-[0_24px_60px_-36px_rgba(28,23,79,0.55)] backdrop-blur-sm sm:left-8 sm:right-auto sm:w-[18rem]">
                <div className="relative h-24 overflow-hidden rounded-[1rem] border border-white/12">
                  <Image
                    src={FEATURED_GALLERY_ASSETS.colorInspiration}
                    alt={copy.imageAlts.bottomCard}
                    fill
                    sizes="18rem"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,12,36,0.12)_0%,rgba(17,12,36,0.52)_100%)]" />
                </div>
                <p className="mt-4 text-sm font-semibold text-white">
                  {copy.hero.bottomCardTitle}
                </p>
                <p className="mt-2 text-xs leading-6 text-white/70">
                  {copy.hero.bottomCardDescription}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-brand-secondary/10 bg-brand-secondary/[0.04] py-6 dark:bg-surface-muted">
        <div className="mx-auto flex flex-wrap justify-center gap-x-8 gap-y-4 px-4 sm:px-6 lg:px-8">
          {copy.trustStrip.map((item) => (
            <div
              key={item}
              className="flex items-center justify-center gap-2 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-secondary dark:text-white/80 sm:rounded-full sm:border sm:border-brand-highlight/14 sm:bg-white/80 sm:px-4 sm:py-3 sm:text-xs dark:sm:border-white/10 dark:sm:bg-white/[0.03]"
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-brand-highlight sm:h-2 sm:w-2"
                aria-hidden="true"
              />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-highlight/25 to-transparent" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:px-8">
          <div>
            <ScrollReveal direction="right">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-highlight">
                {copy.process.eyebrow}
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.08}>
              <h2 className="mt-4 max-w-3xl text-4xl font-display text-brand-secondary dark:text-brand-accent-1 sm:text-5xl">
                {copy.process.title}
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.16}>
              <p className="mt-6 max-w-3xl text-base leading-8 text-foreground/70 dark:text-white/70 sm:text-lg">
                {copy.process.description}
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {copy.process.steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={0.12 + index * 0.08} className="h-full">
              <div className="relative h-full min-h-[260px] overflow-hidden rounded-[1.8rem] border border-brand-secondary/10 shadow-[0_22px_50px_-38px_rgba(26,20,58,0.5)] transition-transform duration-300 hover:-translate-y-1 dark:border-white/10">
                <Image
                  src={processStepBackgrounds[index]}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,12,45,0.12)_0%,rgba(18,12,45,0.7)_100%)]" />
                <div className="relative z-10 flex h-full min-h-[260px] flex-col justify-end p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-highlight">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 text-2xl font-display text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/78">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-highlight/25 to-transparent" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8">
          <div>
            <ScrollReveal direction="right">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-highlight">
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
                <ScrollReveal
                  key={item}
                  direction="right"
                  delay={0.2 + index * 0.08}
                >
                  <div className="flex items-start gap-3 sm:rounded-[1.2rem] sm:border sm:border-brand-highlight/12 sm:bg-brand-highlight/[0.05] sm:p-4 dark:sm:border-white/10 dark:sm:bg-white/[0.03]">
                    <CheckCircleIcon />
                    <p className="text-sm leading-7 text-foreground/80 dark:text-white/70">
                      {item}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {copy.craft.features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <ScrollReveal key={feature.title} delay={0.12 + index * 0.08} className="h-full">
                  <div className="group h-full rounded-[1.75rem] border border-brand-secondary/10 bg-white p-6 shadow-[0_22px_50px_-38px_rgba(26,20,58,0.5)] transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.03]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-highlight/12 text-brand-highlight dark:bg-brand-highlight/16 dark:text-brand-highlight">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-2xl font-display text-brand-secondary dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-foreground/70 dark:text-white/65">
                      {feature.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <ScrollVideo
        frameCount={BEFORE_AFTER_FRAME_COUNT}
        framePath={beforeAfterFramePath}
      />

      <section className="relative overflow-hidden pb-8 pt-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-highlight/25 to-transparent" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8">
          <div>
            <ScrollReveal direction="right" delay={0.04}>
              <Image
                src={BRAND_ASSETS.qualityColorArtboard}
                alt={copy.imageAlts.qualityArtboard}
                width={260}
                height={260}
                sizes="(min-width: 1024px) 14rem, 40vw"
                className="mb-8 h-auto w-full max-w-[11rem] object-contain opacity-95 sm:max-w-[13rem]"
              />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-highlight">
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

          <div className="grid gap-5 md:grid-cols-[minmax(0,1.18fr)_minmax(0,0.82fr)] md:auto-rows-[208px]">
            {copy.services.cards.map((card) => (
              <div
                key={card.title}
                className={card.featured ? "md:row-span-2" : ""}
              >
                <div
                  className={`group relative overflow-hidden rounded-[1.9rem] ${card.featured ? "h-[360px] sm:h-[420px] md:h-full" : "h-[240px] sm:h-[260px] md:h-full"}`}
                >
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,12,45,0.12)_0%,rgba(18,12,45,0.8)_100%)]" />
                  <div
                    className={`absolute inset-0 flex flex-col justify-end ${card.featured ? "p-6 sm:p-7" : "p-4 sm:p-5"}`}
                  >
                    <p
                      className={`font-semibold uppercase tracking-[0.18em] text-white/65 text-[9px] ${card.featured ? "sm:text-xs" : "sm:text-[10px]"}`}
                    >
                      S&amp;H Painting
                    </p>
                    <h3
                      className={`font-display text-balance text-white text-[1.15rem] leading-[1] ${card.featured ? "mt-2 sm:mt-3 max-w-[9ch] sm:text-[2.45rem] sm:leading-[0.94] lg:text-[2.85rem]" : "mt-1.5 sm:mt-2 max-w-[12ch] sm:text-[1.35rem] lg:text-[1.55rem]"}`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`max-w-md text-white/75 text-[0.72rem] leading-[1.4] ${card.featured ? "mt-2 sm:mt-3 sm:text-sm sm:leading-7" : "mt-1.5 sm:mt-2 sm:text-[0.8rem] sm:leading-5"}`}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-secondary/[0.04] py-20 dark:bg-surface sm:py-24">
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-brand-highlight/12 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] lg:items-start lg:gap-14">
            <div>
              <ScrollReveal>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-highlight">
                  {copy.testimonials.eyebrow}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h2 className="mt-4 max-w-3xl text-4xl font-display text-brand-secondary dark:text-brand-accent-1 sm:text-5xl">
                  {copy.testimonials.title}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.12}>
                <p className="mt-6 max-w-3xl text-base leading-8 text-foreground/70 dark:text-white/70 sm:text-lg">
                  {copy.testimonials.description}
                </p>
              </ScrollReveal>
            </div>

            <div className="flex flex-col items-center gap-5 lg:pt-6">
              <ScrollReveal delay={0.08}>
                <Image
                  src={BRAND_ASSETS.precisionStrokeArtboard}
                  alt={copy.imageAlts.precisionArtboard}
                  width={720}
                  height={250}
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  className="h-auto w-full object-contain opacity-95"
                />
              </ScrollReveal>
              <ScrollReveal delay={0.16}>
                <div className="inline-flex whitespace-nowrap rounded-full border border-brand-highlight/18 bg-brand-highlight/8 px-5 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-highlight shadow-sm dark:border-brand-highlight/24 dark:bg-brand-highlight/10 dark:text-brand-highlight sm:text-xs lg:translate-x-22">
                  {copy.testimonials.badge}
                </div>
              </ScrollReveal>
            </div>
          </div>

          <StaggerContainer
            className="mt-12 grid gap-6 md:grid-cols-3"
            delay={0.16}
            staggerDelay={0.08}
          >
            {copy.testimonials.items.map((item) => (
              <StaggerItem key={`${item.name}-${item.role}`}>
                <div className="flex h-full flex-col rounded-[1.8rem] border border-brand-secondary/10 bg-white p-7 shadow-[0_24px_60px_-42px_rgba(26,20,58,0.45)] dark:border-border dark:bg-surface">
                  <div className="flex items-center gap-1 text-brand-highlight">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={`${item.name}-star-${index}`}
                        className="h-4 w-4 fill-current"
                      />
                    ))}
                  </div>
                  <p className="mt-5 flex-1 text-base leading-8 text-foreground/80 dark:text-white/75">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-6 border-t border-brand-secondary/10 pt-5 dark:border-white/10">
                    <p className="text-lg font-display text-brand-secondary dark:text-white">
                      {item.name}
                    </p>
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
                  src={FEATURED_GALLERY_ASSETS.ctaTexture}
                  alt={copy.imageAlts.ctaBackground}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_24%,rgba(113,100,204,0.12)_100%)]" />
              <div className="relative z-10 grid gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:px-14">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-highlight">
                    S&amp;H Painting
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
                    href="/services#estimate-form"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-highlight px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-accent-1"
                  >
                    {copy.finalCta.primary}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={CONTACT_LINKS.phone}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:border-brand-highlight/60 hover:bg-white/15"
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
    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-highlight/12 text-brand-highlight dark:bg-brand-highlight/16 dark:text-brand-highlight">
      <ShieldCheck className="h-3.5 w-3.5" />
    </div>
  );
}
