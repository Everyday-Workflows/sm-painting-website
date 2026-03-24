'use client';

import React from 'react';
import { Mail, PhoneCall, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';
import { buildMailtoUrl, CONTACT_INFO, CONTACT_LINKS } from '@/lib/contact';

type EstimateFormData = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  details: string;
};

const SERVICE_FEATURES: Record<'en' | 'es', string[][]> = {
  en: [
    ['Wall & ceiling painting', 'Trim & door refinishing', 'Cabinet painting', 'Color consultation'],
    ['Siding & stucco painting', 'Deck & fence staining', 'Pressure washing', 'Surface preparation'],
    ['Office spaces', 'Retail stores', 'Industrial facilities', 'Maintenance painting'],
    ['Faux finishes', 'Texture application', 'Wallpaper removal', 'Drywall repair'],
  ],
  es: [
    ['Pintura de paredes y techos', 'Renovación de molduras y puertas', 'Pintura de gabinetes', 'Asesoría de color'],
    ['Pintura de siding y estuco', 'Teñido de terrazas y cercas', 'Lavado a presión', 'Preparación de superficies'],
    ['Espacios de oficina', 'Tiendas', 'Instalaciones industriales', 'Pintura de mantenimiento'],
    ['Acabados decorativos', 'Aplicación de textura', 'Retiro de papel tapiz', 'Reparación de paneles de yeso'],
  ],
};

const FAQ_ITEMS: Record<'en' | 'es', { question: string; answer: string }[]> = {
  en: [
    {
      question: "What areas do you serve?",
      answer: "We serve Tampa, St. Petersburg, Brandon, Riverview, Wesley Chapel, Clearwater, Lutz, Land O' Lakes, Valrico, Seffner, Largo, Pinellas Park, Dunedin, Oldsmar, Safety Harbor, and surrounding areas in Hillsborough and Pinellas counties."
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes, we provide free, no-obligation estimates for all residential and commercial projects."
    },
    {
      question: "What types of paint do you use?",
      answer: "We use premium, durable coatings from top brands to ensure a long-lasting and high-quality finish."
    },
    {
      question: "How do I get started?",
      answer: "Simply fill out our estimate request form or give us a call. We'll schedule a walkthrough to discuss your project and provide a free quote."
    }
  ],
  es: [
    {
      question: "¿Qué áreas atienden?",
      answer: "Atendemos Tampa, St. Petersburg, Brandon, Riverview, Wesley Chapel, Clearwater, Lutz, Land O' Lakes, Valrico, Seffner, Largo, Pinellas Park, Dunedin, Oldsmar, Safety Harbor y áreas circundantes en los condados de Hillsborough y Pinellas."
    },
    {
      question: "¿Ofrecen presupuestos gratuitos?",
      answer: "Sí, proporcionamos presupuestos gratuitos y sin compromiso para todos los proyectos residenciales y comerciales."
    },
    {
      question: "¿Qué tipos de pintura utilizan?",
      answer: "Utilizamos recubrimientos premium y duraderos de las mejores marcas para garantizar un acabado de alta calidad y larga duración."
    },
    {
      question: "¿Cómo empiezo?",
      answer: "Simplemente complete nuestro formulario de solicitud de presupuesto o llámenos. Programaremos una visita para analizar su proyecto y proporcionarle un presupuesto gratuito."
    }
  ]
};

const ServicesContent = () => {
  const { language, t } = useLanguage();
  const [estimateForm, setEstimateForm] = React.useState<EstimateFormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    details: '',
  });
  const [formStatus, setFormStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(null);

  const formCopy = language === 'en'
    ? {
        title: 'Request an estimate',
        description: 'Fill this out and we will open an email draft addressed to us with your project details already included.',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        projectType: 'Project type',
        details: 'Project details',
        placeholders: {
          name: 'Your name',
          email: 'you@example.com',
          phone: '(813) 325-3931',
          projectType: 'Interior repaint, exterior refresh, cabinets...',
          details: 'Tell us about the rooms, surfaces, timing, and anything else you want quoted.',
        },
        submit: 'Send email',
        success: `If an email draft did not open, email us directly at ${CONTACT_INFO.email}.`,
        error: 'Please add your name, email, and project details before submitting.',
        directEmail: 'Email us directly',
        directCall: 'Call now',
      }
    : {
        title: 'Solicitar una cotización',
        description: 'Complete este formulario y abriremos un borrador de correo dirigido a nosotros con los detalles de su proyecto ya incluidos.',
        name: 'Nombre',
        email: 'Correo',
        phone: 'Teléfono',
        projectType: 'Tipo de proyecto',
        details: 'Detalles del proyecto',
        placeholders: {
          name: 'Su nombre',
          email: 'usted@ejemplo.com',
          phone: '(813) 325-3931',
          projectType: 'Interior, exterior, gabinetes...',
          details: 'Cuéntenos sobre los espacios, superficies, tiempos y cualquier detalle que quiera incluir en la cotización.',
        },
        submit: 'Enviar correo',
        success: `Si no se abrió un borrador, escríbanos directamente a ${CONTACT_INFO.email}.`,
        error: 'Agregue su nombre, correo y detalles del proyecto antes de enviar.',
        directEmail: 'Escribir por correo',
        directCall: 'Llamar ahora',
      };

  const handleEstimateChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setEstimateForm((current) => ({ ...current, [name]: value }));
    if (formStatus !== 'idle') {
      setFormStatus('idle');
    }
  };

  const scrollToEstimateForm = (projectType?: string) => {
    if (projectType) {
      setEstimateForm((current) => ({ ...current, projectType }));
    }

    requestAnimationFrame(() => {
      document.getElementById('estimate-form')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  };

  const handleEstimateSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!estimateForm.name.trim() || !estimateForm.email.trim() || !estimateForm.details.trim()) {
      setFormStatus('error');
      return;
    }

    const subject = language === 'en'
      ? `Estimate request${estimateForm.projectType ? ` - ${estimateForm.projectType}` : ''}`
      : `Solicitud de cotización${estimateForm.projectType ? ` - ${estimateForm.projectType}` : ''}`;
    const body = [
      language === 'en' ? 'Name' : 'Nombre',
      estimateForm.name,
      '',
      language === 'en' ? 'Email' : 'Correo',
      estimateForm.email,
      '',
      language === 'en' ? 'Phone' : 'Teléfono',
      estimateForm.phone || '-',
      '',
      language === 'en' ? 'Project type' : 'Tipo de proyecto',
      estimateForm.projectType || '-',
      '',
      language === 'en' ? 'Project details' : 'Detalles del proyecto',
      estimateForm.details,
    ].join('\n');

    setFormStatus('success');
    window.location.href = buildMailtoUrl(subject, body);
  };

  const services = [
    {
      title: t('service.interior.title'),
      description: t('service.interior.desc'),
    },
    {
      title: t('service.exterior.title'),
      description: t('service.exterior.desc'),
    },
    {
      title: t('service.commercial.title'),
      description: t('service.commercial.desc'),
    },
    {
      title: t('service.specialty.title'),
      description: t('service.specialty.desc'),
    }
  ];

  return (
    <div className="relative py-12 sm:py-20 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <ScrollReveal>
            <h1 className="text-3xl sm:text-4xl font-display text-brand-secondary dark:text-brand-accent-1 lg:text-5xl leading-tight">
              {t('services.title')}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-sans text-brand-tertiary/72 dark:text-brand-cloud/68 sm:text-xl">
              {t('services.subtitle')}
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <StaggerItem key={service.title}>
              <div 
                className="group flex h-full flex-col rounded-2xl border border-brand-tertiary/12 bg-brand-cloud/54 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl dark:border-border dark:bg-surface-muted sm:p-8"
              >
                <h2 className="mb-4 text-xl font-display text-brand-accent-2 transition-colors duration-300 group-hover:text-brand-highlight dark:text-white sm:text-2xl">
                  {service.title}
                </h2>
                <p className="mb-6 flex-grow text-base font-sans leading-relaxed text-brand-tertiary/78 dark:text-brand-cloud/70 sm:text-lg">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {SERVICE_FEATURES[language][index].map((feature) => (
                    <li key={feature} className="flex items-center text-sm font-sans text-brand-accent-2 dark:text-brand-cloud/84 sm:text-base">
                      <svg aria-hidden="true" className="h-5 w-5 text-brand-highlight mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => scrollToEstimateForm(service.title)}
                  className="mt-auto inline-flex w-fit max-w-full items-center rounded-md bg-brand-highlight px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-highlight/15 transition-all duration-300 hover:bg-brand-primary hover:shadow-brand-highlight/25"
                >
                  {t('services.cta')} {service.title}
                </button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <section className="mt-24 sm:mt-32">
          <ScrollReveal>
            <h2 className="text-3xl font-display text-brand-secondary dark:text-brand-accent-1 text-center mb-12">
              {language === 'en' ? 'Frequently Asked Questions' : 'Preguntas Frecuentes'}
            </h2>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQ_ITEMS[language].map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="rounded-2xl border border-brand-tertiary/12 bg-white/50 dark:bg-white/5 overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-highlight/5 transition-colors"
                  >
                    <span className="font-semibold text-brand-secondary dark:text-white">{faq.question}</span>
                    {openFaqIndex === index ? <ChevronUp className="h-5 w-5 text-brand-highlight" /> : <ChevronDown className="h-5 w-5 text-brand-highlight" />}
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-6 pb-6 text-brand-tertiary/80 dark:text-brand-cloud/80 animate-in fade-in slide-in-from-top-2 duration-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <ScrollReveal delay={0.4}>
          <div className="mt-16 rounded-3xl border border-brand-primary/14 bg-surface-muted p-8 backdrop-blur-md sm:mt-20 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.85fr)] lg:items-start">
              <div className="text-center lg:text-left">
                <h2 className="mb-4 text-2xl font-display leading-tight text-brand-accent-2 dark:text-white sm:mb-6 sm:text-3xl">{t('services.footer.title')}</h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg font-sans text-brand-tertiary/78 opacity-90 dark:text-brand-cloud/72 lg:mx-0 sm:text-xl">
                  {t('services.footer.description')}
                </p>
                <div className="flex flex-col items-center gap-4 lg:items-start">
                  <a
                    href={CONTACT_LINKS.email}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-secondary transition-colors hover:text-brand-highlight dark:text-white dark:hover:text-brand-highlight"
                  >
                    <Mail className="h-4 w-4" />
                    {CONTACT_INFO.email}
                  </a>
                  <a
                    href={CONTACT_LINKS.phone}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-secondary transition-colors hover:text-brand-highlight dark:text-white dark:hover:text-brand-highlight"
                  >
                    <PhoneCall className="h-4 w-4" />
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <form
                id="estimate-form"
                onSubmit={handleEstimateSubmit}
                className="rounded-[1.75rem] border border-brand-primary/12 bg-surface p-6 text-left shadow-[0_24px_60px_-42px_rgba(26,20,58,0.45)] dark:border-border dark:bg-surface"
              >
                <h3 className="text-2xl font-display text-brand-accent-2 dark:text-white">{formCopy.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-tertiary/78 dark:text-brand-cloud/72">{formCopy.description}</p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-brand-accent-2 dark:text-brand-cloud/90">
                    <span>{formCopy.name}</span>
                    <input
                      type="text"
                      name="name"
                      required
                      value={estimateForm.name}
                      onChange={handleEstimateChange}
                      placeholder={formCopy.placeholders.name}
                      className="mt-2 w-full rounded-2xl border border-brand-tertiary/12 bg-brand-cloud/82 px-4 py-3 text-sm text-brand-accent-2 outline-none transition focus:border-brand-highlight focus:ring-2 focus:ring-brand-highlight/20 dark:border-border dark:bg-surface dark:text-white"
                    />
                  </label>
                  <label className="block text-sm font-medium text-brand-accent-2 dark:text-brand-cloud/90">
                    <span>{formCopy.email}</span>
                    <input
                      type="email"
                      name="email"
                      required
                      value={estimateForm.email}
                      onChange={handleEstimateChange}
                      placeholder={formCopy.placeholders.email}
                      className="mt-2 w-full rounded-2xl border border-brand-tertiary/12 bg-brand-cloud/82 px-4 py-3 text-sm text-brand-accent-2 outline-none transition focus:border-brand-highlight focus:ring-2 focus:ring-brand-highlight/20 dark:border-border dark:bg-surface dark:text-white"
                    />
                  </label>
                  <label className="block text-sm font-medium text-brand-accent-2 dark:text-brand-cloud/90">
                    <span>{formCopy.phone}</span>
                    <input
                      type="tel"
                      name="phone"
                      value={estimateForm.phone}
                      onChange={handleEstimateChange}
                      placeholder={formCopy.placeholders.phone}
                      className="mt-2 w-full rounded-2xl border border-brand-tertiary/12 bg-brand-cloud/82 px-4 py-3 text-sm text-brand-accent-2 outline-none transition focus:border-brand-highlight focus:ring-2 focus:ring-brand-highlight/20 dark:border-border dark:bg-surface dark:text-white"
                    />
                  </label>
                  <label className="block text-sm font-medium text-brand-accent-2 dark:text-brand-cloud/90">
                    <span>{formCopy.projectType}</span>
                    <input
                      type="text"
                      name="projectType"
                      value={estimateForm.projectType}
                      onChange={handleEstimateChange}
                      placeholder={formCopy.placeholders.projectType}
                      className="mt-2 w-full rounded-2xl border border-brand-tertiary/12 bg-brand-cloud/82 px-4 py-3 text-sm text-brand-accent-2 outline-none transition focus:border-brand-highlight focus:ring-2 focus:ring-brand-highlight/20 dark:border-border dark:bg-surface dark:text-white"
                    />
                  </label>
                </div>

                <label className="mt-4 block text-sm font-medium text-brand-accent-2 dark:text-brand-cloud/90">
                  <span>{formCopy.details}</span>
                  <textarea
                    name="details"
                    required
                    rows={5}
                    value={estimateForm.details}
                    onChange={handleEstimateChange}
                    placeholder={formCopy.placeholders.details}
                    className="mt-2 w-full rounded-[1.5rem] border border-brand-tertiary/12 bg-brand-cloud/82 px-4 py-3 text-sm text-brand-accent-2 outline-none transition focus:border-brand-highlight focus:ring-2 focus:ring-brand-highlight/20 dark:border-border dark:bg-surface dark:text-white"
                  />
                </label>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-brand-highlight px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-primary"
                  >
                    {formCopy.submit}
                  </button>
                  <div className="flex flex-wrap gap-3 text-sm font-medium">
                    <a href={CONTACT_LINKS.email} className="text-brand-secondary hover:text-brand-highlight dark:text-white dark:hover:text-brand-highlight">{formCopy.directEmail}</a>
                    <a href={CONTACT_LINKS.phone} className="text-brand-secondary hover:text-brand-highlight dark:text-white dark:hover:text-brand-highlight">{formCopy.directCall}</a>
                  </div>
                </div>
                {formStatus === 'error' && (
                  <p className="mt-3 text-sm font-medium text-red-600 dark:text-red-400">{formCopy.error}</p>
                )}
                {formStatus === 'success' && (
                  <p className="mt-3 text-sm font-medium text-brand-highlight dark:text-brand-highlight">{formCopy.success}</p>
                )}
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default ServicesContent;
