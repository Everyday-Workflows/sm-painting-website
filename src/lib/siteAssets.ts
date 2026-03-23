export const BRAND_ASSETS = {
  logoLightWordmark: '/images/logos/Logo_Light_Mode.webp',
  logoDarkWordmark: '/images/logos/Logo_Dark_Mode.webp',
  logoWhiteWordmark: '/images/logos/Logo_White.webp',
  precisionStrokeArtboard: '/images/logos/Artboard1.webp',
  qualityColorArtboard: '/images/logos/Artboard2.webp',
  anniversarySealArtboard: '/images/logos/Artboard3.webp',
  iconMarkArtboard: '/images/logos/Artboard4.webp',
  favicon: '/images/favicon.webp',
  openGraphImage: '/images/OG_Image.png',
} as const;

export const FEATURED_GALLERY_ASSETS = {
  heroShowcase: '/images/gallery/011.jpeg',
  colorInspiration: '/images/gallery/006.jpeg',
  ctaTexture: '/images/gallery/001.jpeg',
  interiorService: '/images/gallery/012.jpeg',
  exteriorService: '/images/gallery/015.jpeg',
  commercialService: '/images/gallery/009.jpeg',
  cabinetsService: '/images/gallery/002.jpeg',
} as const;

export type PortfolioCategory = 'interior' | 'exterior' | 'commercial' | 'specialty';
export type PortfolioRelationship = 'before' | 'after' | 'same-project';

export type PortfolioItem = {
  src: string;
  category: PortfolioCategory;
  alt: {
    en: string;
    es: string;
  };
  relationship?: {
    type: PortfolioRelationship;
    groupId: string;
  };
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    src: '/images/gallery/001.jpeg',
    category: 'interior',
    alt: {
      en: 'Interior living space with a smooth, even wall and trim finish',
      es: 'Espacio interior con un acabado uniforme y limpio en paredes y molduras',
    },
  },
  {
    src: '/images/gallery/002.jpeg',
    category: 'interior',
    alt: {
      en: 'Detailed interior painting work with crisp cabinetry and trim finish',
      es: 'Trabajo detallado de pintura interior con un acabado preciso en gabinetes y molduras',
    },
  },
  {
    src: '/images/gallery/003.jpeg',
    category: 'interior',
    alt: {
      en: 'Interior painting showcase with a clean, durable finish',
      es: 'Muestra de pintura interior con un acabado limpio y duradero',
    },
  },
  {
    src: '/images/gallery/004.jpeg',
    category: 'interior',
    alt: {
      en: 'Interior project highlighting smooth walls and refined trim work',
      es: 'Proyecto interior que destaca paredes lisas y molduras refinadas',
    },
  },
  {
    src: '/images/gallery/005.JPG',
    category: 'interior',
    alt: {
      en: 'Fresh white bedroom repaint with finished doors, trim, and closet panels',
      es: 'Repintado fresco de dormitorio en blanco con puertas, molduras y paneles de clóset terminados',
    },
  },
  {
    src: '/images/gallery/006.jpeg',
    category: 'interior',
    alt: {
      en: 'Interior color project showing balanced tones and polished finishing',
      es: 'Proyecto interior de color que muestra tonos equilibrados y un acabado pulido',
    },
  },
  {
    src: '/images/gallery/007.jpeg',
    category: 'exterior',
    alt: {
      en: 'Exterior painting showcase with a refreshed curb-appeal finish',
      es: 'Muestra de pintura exterior con un acabado renovado que mejora la fachada',
    },
    relationship: {
      type: 'before',
      groupId: 'pair-007-015',
    },
  },
  {
    src: '/images/gallery/008.JPG',
    category: 'interior',
    alt: {
      en: 'Moody blue-green interior repaint with paneled walls, trim, and stair detail',
      es: 'Repintado interior en azul verdoso intenso con paneles, molduras y detalle de escalera',
    },
  },
  {
    src: '/images/gallery/009.jpeg',
    category: 'exterior',
    alt: {
      en: 'Finished exterior repaint with bright siding, dark trim, and a stronger front-entry contrast',
      es: 'Repintado exterior terminado con revestimiento claro, molduras oscuras y un contraste más marcado en la entrada principal',
    },
    relationship: {
      type: 'after',
      groupId: 'pair-014-009',
    },
  },
  {
    src: '/images/gallery/010.JPG',
    category: 'exterior',
    alt: {
      en: 'Two-story exterior repaint featuring gray walls, white trim, and dark shutters',
      es: 'Repintado exterior de dos pisos con paredes grises, molduras blancas y contraventanas oscuras',
    },
  },
  {
    src: '/images/gallery/011.jpeg',
    category: 'interior',
    alt: {
      en: 'Finished interior painting project with clean lines and bright natural light',
      es: 'Proyecto de pintura interior terminado con líneas limpias y luz natural brillante',
    },
    relationship: {
      type: 'same-project',
      groupId: 'project-011-012-013',
    },
  },
  {
    src: '/images/gallery/012.jpeg',
    category: 'interior',
    alt: {
      en: 'Interior service showcase featuring neat trim work and a modern finish',
      es: 'Muestra de servicio interior con molduras precisas y un acabado moderno',
    },
    relationship: {
      type: 'same-project',
      groupId: 'project-011-012-013',
    },
  },
  {
    src: '/images/gallery/013.jpeg',
    category: 'commercial',
    alt: {
      en: 'Commercial-style painting project with durable, high-traffic finishes',
      es: 'Proyecto de pintura estilo comercial con acabados duraderos para alto tránsito',
    },
    relationship: {
      type: 'same-project',
      groupId: 'project-011-012-013',
    },
  },
  {
    src: '/images/gallery/014.jpeg',
    category: 'exterior',
    alt: {
      en: 'Exterior view before repaint with muted siding, lighter trim, and an unfinished front presentation',
      es: 'Vista exterior antes del repintado con revestimiento apagado, molduras más claras y una presentación frontal menos terminada',
    },
    relationship: {
      type: 'before',
      groupId: 'pair-014-009',
    },
  },
  {
    src: '/images/gallery/015.jpeg',
    category: 'exterior',
    alt: {
      en: 'Exterior house painting project with refreshed siding and trim',
      es: 'Proyecto de pintura exterior de vivienda con revestimiento y molduras renovadas',
    },
    relationship: {
      type: 'after',
      groupId: 'pair-007-015',
    },
  },
  {
    src: '/images/gallery/016.JPG',
    category: 'interior',
    alt: {
      en: 'Open-plan interior renovation with clean white walls, trim, and newly finished surfaces',
      es: 'Renovación interior de concepto abierto con paredes blancas limpias, molduras y superficies recién terminadas',
    },
  },
  {
    src: '/images/gallery/017.jpg',
    category: 'commercial',
    alt: {
      en: 'Room repaint with a bright blue accent wall and refreshed white side walls',
      es: 'Repintado de habitación con pared de acento azul brillante y paredes laterales blancas renovadas',
    },
  },
  {
    src: '/images/gallery/019.jpg',
    category: 'specialty',
    alt: {
      en: 'Fresh red and white shed repaint highlighting durable specialty exterior work',
      es: 'Repintado fresco de cobertizo en rojo y blanco que destaca un trabajo exterior especial y duradero',
    },
  },
];
