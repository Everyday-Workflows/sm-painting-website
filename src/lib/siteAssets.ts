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
  ctaTexture: '/images/gallery/015.jpeg',
  interiorService: '/images/gallery/012.jpeg',
  exteriorService: '/images/gallery/015.jpeg',
  commercialService: '/images/gallery/009.jpeg',
  cabinetsService: '/images/gallery/002.jpeg',
} as const;

export type PortfolioCategory = 'interior' | 'exterior';
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
    category: 'exterior',
    alt: {
      en: 'Exterior painting prep on a two-story stucco home with masked windows, trim, and entry details',
      es: 'Preparación de pintura exterior en una casa de dos pisos con estuco, ventanas protegidas, molduras y detalles de entrada cubiertos',
    },
  },
  {
    src: '/images/gallery/002.jpeg',
    category: 'interior',
    alt: {
      en: 'Interior room carefully masked and protected before painting walls, trim, and cabinets',
      es: 'Habitación interior cuidadosamente protegida y cubierta antes de pintar paredes, molduras y gabinetes',
    },
  },
  {
    src: '/images/gallery/003.jpeg',
    category: 'interior',
    alt: {
      en: 'Painter applying a fresh coat in a fully protected living space during interior repainting',
      es: 'Pintor aplicando una capa nueva en una sala completamente protegida durante un repintado interior',
    },
  },
  {
    src: '/images/gallery/004.jpeg',
    category: 'interior',
    alt: {
      en: 'Interior repaint prep with furniture wrapped, floors covered, and surfaces ready for a clean finish',
      es: 'Preparación para repintado interior con muebles cubiertos, pisos protegidos y superficies listas para un acabado limpio',
    },
  },
  {
    src: '/images/gallery/005.jpeg',
    category: 'interior',
    alt: {
      en: 'Finished bedroom repaint with bright white walls, doors, trim, and a clean modern look',
      es: 'Dormitorio terminado con paredes, puertas y molduras blancas y una apariencia limpia y moderna',
    },
  },
  {
    src: '/images/gallery/006.jpeg',
    category: 'interior',
    alt: {
      en: 'Open living area repaint with warm neutral walls, clean lines, and updated flooring',
      es: 'Repintado de sala abierta con paredes en tonos neutros cálidos, líneas limpias y piso renovado',
    },
  },
  {
    src: '/images/gallery/007.jpeg',
    category: 'exterior',
    alt: {
      en: 'Before photo of a two-story exterior repaint showing original yellow siding and active prep work',
      es: 'Foto de antes de un repintado exterior de dos pisos con siding amarillo original y preparación en proceso',
    },
    relationship: {
      type: 'before',
      groupId: 'pair-007-015',
    },
  },
  {
    src: '/images/gallery/008.jpeg',
    category: 'interior',
    alt: {
      en: 'Interior repaint with rich blue-green paneling, matching doors, and crisp white upper walls',
      es: 'Repintado interior con paneles azul verdoso intenso, puertas a juego y paredes superiores blancas bien definidas',
    },
  },
  {
    src: '/images/gallery/009.jpeg',
    category: 'exterior',
    alt: {
      en: 'Finished exterior transformation with white siding, black trim, and a refreshed front deck',
      es: 'Transformación exterior terminada con siding blanco, molduras negras y una terraza frontal renovada',
    },
    relationship: {
      type: 'after',
      groupId: 'pair-014-009',
    },
  },
  {
    src: '/images/gallery/010.jpeg',
    category: 'exterior',
    alt: {
      en: 'Two-story stucco exterior repaint in a soft gray tone with bright trim and dark shutters',
      es: 'Repintado exterior de casa de dos pisos con estuco en tono gris suave, molduras claras y contraventanas oscuras',
    },
  },
  {
    src: '/images/gallery/011.jpeg',
    category: 'interior',
    alt: {
      en: 'Bright open-concept interior with fresh white walls and a clean finished look across the main living space',
      es: 'Interior abierto y luminoso con paredes blancas recién pintadas y un acabado limpio en la sala principal',
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
      en: 'Double-height stair hall repaint with bright walls, dark rails, and a crisp modern contrast',
      es: 'Repintado de área de escalera de doble altura con paredes claras, barandales oscuros y un contraste moderno definido',
    },
    relationship: {
      type: 'same-project',
      groupId: 'project-011-012-013',
    },
  },
  {
    src: '/images/gallery/013.jpeg',
    category: 'interior',
    alt: {
      en: 'Interior staircase finish with dark wood treads, white risers, and freshly painted surrounding walls',
      es: 'Acabado de escalera interior con peldaños oscuros, contrahuellas blancas y paredes recién pintadas alrededor',
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
      en: 'Before photo of a small home exterior with green siding and natural wood deck rails before repainting',
      es: 'Foto de antes de una casa pequeña con siding verde y barandales de madera natural antes del repintado',
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
      en: 'Finished two-story exterior repaint with bright siding, white columns, and a cleaner curb-facing presentation',
      es: 'Repintado exterior terminado de casa de dos pisos con siding claro, columnas blancas y una fachada más limpia y definida',
    },
    relationship: {
      type: 'after',
      groupId: 'pair-007-015',
    },
  },
  {
    src: '/images/gallery/016.jpeg',
    category: 'interior',
    alt: {
      en: 'Finished open-plan interior with fresh white walls, tile flooring, and a bright updated kitchen-living area',
      es: 'Interior de concepto abierto terminado con paredes blancas frescas, piso de loseta y una cocina-sala renovada y luminosa',
    },
  },
  {
    src: '/images/gallery/017.jpeg',
    category: 'exterior',
    alt: {
      en: 'Exterior repaint in progress on a two-story stucco home with ladders, masking, and active prep work',
      es: 'Repintado exterior en proceso en una casa de dos pisos con estuco, escaleras, enmascarado y preparación activa',
    },
  },
  {
    src: '/images/gallery/019.jpeg',
    category: 'interior',
    alt: {
      en: 'Finished bedroom repaint in a soft neutral tone with white trim and updated flooring',
      es: 'Dormitorio terminado en un tono neutro suave con molduras blancas y piso renovado',
    },
  },
];
