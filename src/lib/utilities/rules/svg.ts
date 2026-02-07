import {
  // Générateurs
  generateStaticUtilities,
  generateDynamicUtilities,

  // Pattern Registry
  PatternRegistry,
  registerPattern,

  // Types
  type StaticTemplate,
  type DynamicConfig,
} from "../handlers/template-generator";

import type { StaticUtility, DynamicUtility, PluginUtils, Output } from '../../../interfaces';
import { Utility } from '../handler';

import { pluginOrder } from '../../../config/order';
import { Property } from '../../../utils/style';

export const prefixer = '--ns-';

// Fill Rule
export const SVG_FILL_RULE: StaticTemplate[] = [
  {
    base: 'fill-rule-nonzero',
    aliases: ['fil-rle-nzro', 'flr-nzo'],
    utility: {
      'fill-rule': 'nonzero',
    },
    meta: { group: 'fillRule', order: 1 },
  },
  {
    base: 'fill-rule-evenodd',
    aliases: ['fil-rle-evnd', 'flr-evnod'],
    utility: {
      'fill-rule': 'evenodd',
    },
    meta: { group: 'fillRule', order: 2 },
  },
];

// Stroke Width (valeurs communes)
export const SVG_STROKE_WIDTH: StaticTemplate[] = [
  {
    base: 'stroke-0',
    aliases: ['strk-0', 'sw-0', 'sk-0'],
    utility: {
      [prefixer + 'stroke-width']: '0',
      'stroke-width': 'var(' + prefixer + 'stroke-width)',
    },
    meta: { group: 'strokeWidth', order: 1 },
  },
  {
    base: 'stroke-1',
    aliases: ['strk-1', 'sw-1', 'sk-1'],
    utility: {
      [prefixer + 'stroke-width']: '1',
      'stroke-width': 'var(' + prefixer + 'stroke-width)',
    },
    meta: { group: 'strokeWidth', order: 2 },
  },
  {
    base: 'stroke-2',
    aliases: ['strk-2', 'sw-2', 'sk-2'],
    utility: {
      [prefixer + 'stroke-width']: '2',
      'stroke-width': 'var(' + prefixer + 'stroke-width)',
    },
    meta: { group: 'strokeWidth', order: 3 },
  },
  {
    base: 'stroke-3',
    aliases: ['strk-3', 'sw-3', 'sk-3'],
    utility: {
      [prefixer + 'stroke-width']: '3',
      'stroke-width': 'var(' + prefixer + 'stroke-width)',
    },
    meta: { group: 'strokeWidth', order: 4 },
  },
  {
    base: 'stroke-4',
    aliases: ['strk-4', 'sw-4', 'sk-4'],
    utility: {
      [prefixer + 'stroke-width']: '4',
      'stroke-width': 'var(' + prefixer + 'stroke-width)',
    },
    meta: { group: 'strokeWidth', order: 5 },
  },
  {
    base: 'stroke-5',
    aliases: ['strk-5', 'sw-5', 'sk-5'],
    utility: {
      [prefixer + 'stroke-width']: '5',
      'stroke-width': 'var(' + prefixer + 'stroke-width)',
    },
    meta: { group: 'strokeWidth', order: 6 },
  },
  {
    base: 'stroke-6',
    aliases: ['strk-6', 'sw-6', 'sk-6'],
    utility: {
      [prefixer + 'stroke-width']: '6',
      'stroke-width': 'var(' + prefixer + 'stroke-width)',
    },
    meta: { group: 'strokeWidth', order: 7 },
  },
  {
    base: 'stroke-7',
    aliases: ['strk-7', 'sw-7', 'sk-7'],
    utility: {
      [prefixer + 'stroke-width']: '7',
      'stroke-width': 'var(' + prefixer + 'stroke-width)',
    },
    meta: { group: 'strokeWidth', order: 8 },
  },
  {
    base: 'stroke-8',
    aliases: ['strk-8', 'sw-8', 'sk-8'],
    utility: {
      [prefixer + 'stroke-width']: '8',
      'stroke-width': 'var(' + prefixer + 'stroke-width)',
    },
    meta: { group: 'strokeWidth', order: 9 },
  },
  {
    base: 'stroke-9',
    aliases: ['strk-9', 'sw-9', 'sk-9'],
    utility: {
      [prefixer + 'stroke-width']: '9',
      'stroke-width': 'var(' + prefixer + 'stroke-width)',
    },
    meta: { group: 'strokeWidth', order: 10 },
  },
  {
    base: 'stroke-10',
    aliases: ['strk-10', 'sw-10', 'sk-10'],
    utility: {
      [prefixer + 'stroke-width']: '10',
      'stroke-width': 'var(' + prefixer + 'stroke-width)',
    },
    meta: { group: 'strokeWidth', order: 11 },
  },
  {
    base: 'stroke-11',
    aliases: ['strk-11', 'sw-11', 'sk-11'],
    utility: {
      [prefixer + 'stroke-width']: '11',
      'stroke-width': 'var(' + prefixer + 'stroke-width)',
    },
    meta: { group: 'strokeWidth', order: 12 },
  },
  {
    base: 'stroke-12',
    aliases: ['strk-12', 'sw-12', 'sk-12'],
    utility: {
      [prefixer + 'stroke-width']: '12',
      'stroke-width': 'var(' + prefixer + 'stroke-width)',
    },
    meta: { group: 'strokeWidth', order: 13 },
  },
];

// Stroke Linecap
export const SVG_STROKE_LINECAP: StaticTemplate[] = [
  {
    base: 'stroke-cap-butt',
    aliases: ['strk-cap-butt', 'sk-lc-butt'],
    utility: {
      [prefixer + '-stroke-linecap']: 'butt',
      'stroke-linecap': 'var(' + prefixer + '-stroke-linecap)',
    },
    meta: { group: 'strokeLinecap', order: 1 },
  },
  {
    base: 'stroke-cap-round',
    aliases: ['strk-cap-round', 'sk-lc-round'],
    utility: {
      [prefixer + '-stroke-linecap']: 'round',
      'stroke-linecap': 'var(' + prefixer + '-stroke-linecap)',
    },
    meta: { group: 'strokeLinecap', order: 2 },
  },
  {
    base: 'stroke-cap-square',
    aliases: ['strk-cap-square', 'sk-lc-square'],
    utility: {
      [prefixer + '-stroke-linecap']: 'square',
      'stroke-linecap': 'var(' + prefixer + '-stroke-linecap)',
    },
    meta: { group: 'strokeLinecap', order: 3 },
  },
];

// Stroke Linejoin
export const SVG_STROKE_LINEJOIN: StaticTemplate[] = [
  {
    base: 'stroke-join-miter',
    aliases: ['strk-join-miter', 'sk-lj-miter'],
    utility: {
      [prefixer + '-stroke-linejoin']: 'miter',
      'stroke-linejoin': 'var(' + prefixer + '-stroke-linejoin)',
    },
    meta: { group: 'strokeLinejoin', order: 1 },
  },
  {
    base: 'stroke-join-round',
    aliases: ['strk-join-round', 'sk-lj-round'],
    utility: {
      [prefixer + '-stroke-linejoin']: 'round',
      'stroke-linejoin': 'var(' + prefixer + '-stroke-linejoin)',
    },
    meta: { group: 'strokeLinejoin', order: 2 },
  },
  {
    base: 'stroke-join-bevel',
    aliases: ['strk-join-bevel', 'sk-lj-bevel'],
    utility: {
      [prefixer + '-stroke-linejoin']: 'bevel',
      'stroke-linejoin': 'var(' + prefixer + '-stroke-linejoin)',
    },
    meta: { group: 'strokeLinejoin', order: 3 },
  },
];

// Clip Rule
export const SVG_CLIP_RULE: StaticTemplate[] = [
  {
    base: 'clip-rule-nonzero',
    aliases: ['clp-rul-nzro'],
    utility: {
      'clip-rule': 'nonzero',
    },
    meta: { group: 'clipRule', order: 1 },
  },
  {
    base: 'clip-rule-evenodd',
    aliases: ['clp-rul-evnod'],
    utility: {
      'clip-rule': 'evenodd',
    },
    meta: { group: 'clipRule', order: 2 },
  },
];

// Clip Path - Formes géométriques prédéfinies
export const SVG_CLIP_PATH_SHAPES: StaticTemplate[] = [
  // Cercle
  {
    base: 'clip-circle',
    aliases: ['clip-p-circle', 'cp-circle'],
    utility: {
      [prefixer + '-clip-path']: 'circle(50% at 50% 50%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 1 },
  },
  {
    base: 'clip-circle-sm',
    aliases: ['clip-p-circle-sm', 'cp-circle-sm'],
    utility: {
      [prefixer + '-clip-path']: 'circle(25% at 50% 50%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 2 },
  },
  {
    base: 'clip-circle-lg',
    aliases: ['clip-p-circle-lg', 'cp-circle-lg'],
    utility: {
      [prefixer + '-clip-path']: 'circle(75% at 50% 50%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 3 },
  },

  // Ellipse
  {
    base: 'clip-ellipse',
    aliases: ['clip-p-ellipse', 'cp-ellipse'],
    utility: {
      [prefixer + '-clip-path']: 'ellipse(50% 35% at 50% 50%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 4 },
  },
  {
    base: 'clip-ellipse-h',
    aliases: ['clip-p-ellipse-h', 'cp-ellipse-h'],
    utility: {
      [prefixer + '-clip-path']: 'ellipse(40% 25% at 50% 50%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 5 },
  },
  {
    base: 'clip-ellipse-v',
    aliases: ['clip-p-ellipse-v', 'cp-ellipse-v'],
    utility: {
      [prefixer + '-clip-path']: 'ellipse(25% 40% at 50% 50%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 6 },
  },

  // Triangle
  {
    base: 'clip-triangle',
    aliases: ['clip-p-triangle', 'cp-triangle'],
    utility: {
      [prefixer + '-clip-path']: 'polygon(50% 0%, 0% 100%, 100% 100%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 7 },
  },
  {
    base: 'clip-triangle-up',
    aliases: ['clip-p-triangle-up', 'cp-triangle-up'],
    utility: {
      [prefixer + '-clip-path']: 'polygon(50% 0%, 0% 100%, 100% 100%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 8 },
  },
  {
    base: 'clip-triangle-down',
    aliases: ['clip-p-triangle-down', 'cp-triangle-down'],
    utility: {
      [prefixer + '-clip-path']: 'polygon(50% 100%, 0% 0%, 100% 0%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 9 },
  },
  {
    base: 'clip-triangle-left',
    aliases: ['clip-p-triangle-left', 'cp-triangle-left'],
    utility: {
      [prefixer + '-clip-path']: 'polygon(0% 50%, 100% 0%, 100% 100%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 10 },
  },
  {
    base: 'clip-triangle-right',
    aliases: ['clip-p-triangle-right', 'cp-triangle-right'],
    utility: {
      [prefixer + '-clip-path']: 'polygon(100% 50%, 0% 0%, 0% 100%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 11 },
  },

  // Trapèze
  {
    base: 'clip-trapezoid',
    aliases: ['clip-p-trapezoid', 'cp-trapezoid'],
    utility: {
      [prefixer + '-clip-path']: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 12 },
  },
  {
    base: 'clip-trapezoid-up',
    aliases: ['clip-p-trapezoid-up', 'cp-trapezoid-up'],
    utility: {
      [prefixer + '-clip-path']: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 13 },
  },
  {
    base: 'clip-trapezoid-down',
    aliases: ['clip-p-trapezoid-down', 'cp-trapezoid-down'],
    utility: {
      [prefixer + '-clip-path']: 'polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 14 },
  },

  // Polygones
  {
    base: 'clip-pentagon',
    aliases: ['clip-p-pentagon', 'cp-pentagon'],
    utility: {
      [prefixer + '-clip-path']: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 15 },
  },
  {
    base: 'clip-hexagon',
    aliases: ['clip-p-hexagon', 'cp-hexagon'],
    utility: {
      [prefixer + '-clip-path']: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 16 },
  },
  {
    base: 'clip-hexagon-v',
    aliases: ['clip-p-hexagon-v', 'cp-hexagon-v'],
    utility: {
      [prefixer + '-clip-path']: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 17 },
  },
  {
    base: 'clip-octagon',
    aliases: ['clip-p-octagon', 'cp-octagon'],
    utility: {
      [prefixer + '-clip-path']: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 18 },
  },

  // Étoiles
  {
    base: 'clip-star',
    aliases: ['clip-p-star', 'cp-star'],
    utility: {
      [prefixer + '-clip-path']: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 19 },
  },
  {
    base: 'clip-star-6',
    aliases: ['clip-p-star-6', 'cp-star-6'],
    utility: {
      [prefixer + '-clip-path']: 'polygon(50% 0%, 66% 32%, 100% 35%, 75% 57%, 79% 91%, 50% 78%, 21% 91%, 25% 57%, 0% 35%, 34% 32%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 20 },
  },

  // Losange
  {
    base: 'clip-diamond',
    aliases: ['clip-p-diamond', 'cp-diamond'],
    utility: {
      [prefixer + '-clip-path']: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 21 },
  },

  // Chevron
  {
    base: 'clip-chevron',
    aliases: ['clip-p-chevron', 'cp-chevron'],
    utility: {
      [prefixer + '-clip-path']: 'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 22 },
  },
  {
    base: 'clip-chevron-left',
    aliases: ['clip-p-chevron-left', 'cp-chevron-left'],
    utility: {
      [prefixer + '-clip-path']: 'polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 23 },
  },
  {
    base: 'clip-chevron-right',
    aliases: ['clip-p-chevron-right', 'cp-chevron-right'],
    utility: {
      [prefixer + '-clip-path']: 'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 24 },
  },

  // Flèches
  {
    base: 'clip-arrow',
    aliases: ['clip-p-arrow', 'cp-arrow'],
    utility: {
      [prefixer + '-clip-path']: 'polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 25 },
  },
  {
    base: 'clip-arrow-right',
    aliases: ['clip-p-arrow-right', 'cp-arrow-right'],
    utility: {
      [prefixer + '-clip-path']: 'polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 26 },
  },
  {
    base: 'clip-arrow-left',
    aliases: ['clip-p-arrow-left', 'cp-arrow-left'],
    utility: {
      [prefixer + '-clip-path']: 'polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 27 },
  },

  // Message / Bulle
  {
    base: 'clip-message',
    aliases: ['clip-p-message', 'cp-message'],
    utility: {
      [prefixer + '-clip-path']: 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 28 },
  },

  // Croix
  {
    base: 'clip-cross',
    aliases: ['clip-p-cross', 'cp-cross'],
    utility: {
      [prefixer + '-clip-path']: 'polygon(40% 0%, 60% 0%, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 40% 60%, 0% 60%, 0% 40%, 40% 40%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 29 },
  },

  // Parallélogramme
  {
    base: 'clip-parallelogram',
    aliases: ['clip-p-parallelogram', 'cp-parallelogram'],
    utility: {
      [prefixer + '-clip-path']: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 30 },
  },

  // Inset (encart)
  {
    base: 'clip-inset',
    aliases: ['clip-p-inset', 'cp-inset'],
    utility: {
      [prefixer + '-clip-path']: 'inset(10% 10% 10% 10%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 31 },
  },
  {
    base: 'clip-inset-sm',
    aliases: ['clip-p-inset-sm', 'cp-inset-sm'],
    utility: {
      [prefixer + '-clip-path']: 'inset(5% 5% 5% 5%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 32 },
  },
  {
    base: 'clip-inset-lg',
    aliases: ['clip-p-inset-lg', 'cp-inset-lg'],
    utility: {
      [prefixer + '-clip-path']: 'inset(20% 20% 20% 20%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 33 },
  },

  // Rounded shapes avec border-radius
  {
    base: 'clip-rounded',
    aliases: ['clip-p-rounded', 'cp-rounded'],
    utility: {
      [prefixer + '-clip-path']: 'inset(0% 0% 0% 0% round 10%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 34 },
  },
  {
    base: 'clip-rounded-full',
    aliases: ['clip-p-rounded-full', 'cp-rounded-full'],
    utility: {
      [prefixer + '-clip-path']: 'inset(0% 0% 0% 0% round 50%)',
      'clip-path': 'var(' + prefixer + '-clip-path)',
    },
    meta: { group: 'clipPath', order: 35 },
  },

  // None
  {
    base: 'clip-none',
    aliases: ['clip-p-none', 'cp-none'],
    utility: {
      'clip-path': 'none',
    },
    meta: { group: 'clipPath', order: 36 },
  },
];

// Combiner toutes les utilities statiques
export const staticSvgUtilities: StaticUtility = generateStaticUtilities([
  ...SVG_FILL_RULE,
  ...SVG_STROKE_WIDTH,
  ...SVG_STROKE_LINECAP,
  ...SVG_STROKE_LINEJOIN,
  ...SVG_CLIP_RULE,
  ...SVG_CLIP_PATH_SHAPES,
]);

/**
 * Handler pour fill (couleur de remplissage)
 * Supporte: couleurs, opacité, variables CSS
 */
export function fill(utility: Utility, { theme }: PluginUtils): Output {
  const normalized = PatternRegistry.normalize(utility.raw);
  utility = utility.clone(normalized);

  // Fill opacity
  if (normalized.startsWith('fill-opacity') || normalized.startsWith('fill-op') || normalized.startsWith('fo-')) {
    return utility.handler
      .handleStatic(theme('opacity'))
      .handleNumber(0, 100, 'int', (n: number) => (n / 100).toString())
      .handleVariable()
      .createProperty([`${prefixer}-fill-opacity`, 'fill-opacity']);
  }

  // Fill color
  return utility.handler
    .handleColor(theme('fill'))
    .handleVariable()
    .createColorStyle(utility.class, 'fill', `${prefixer}-fill-color`);
}

/**
 * Handler pour stroke (couleur de contour)
 * Supporte: couleurs, opacité, variables CSS
 */
export function strokeColor(utility: Utility, { theme }: PluginUtils): Output {
  const normalized = PatternRegistry.normalize(utility.raw);
  utility = utility.clone(normalized);

  // Stroke opacity
  if (normalized.startsWith('stroke-opacity') || normalized.startsWith('stroke-op') || normalized.startsWith('so-')) {
    return utility.handler
      .handleStatic(theme('opacity'))
      .handleNumber(0, 100, 'int', (n: number) => (n / 100).toString())
      .handleVariable()
      .createProperty([`${prefixer}-stroke-opacity`, 'stroke-opacity']);
  }

  // Stroke color
  return utility.handler
    .handleColor(theme('stroke'))
    .handleVariable()
    .createColorStyle(utility.class, 'stroke', `${prefixer}-stroke-color`);
}

/**
 * Handler pour stroke-width (épaisseur du contour)
 * Supporte: nombres, unités, variables CSS
 */
export function strokeWidth(utility: Utility, { theme }: PluginUtils): Output {
  const normalized = PatternRegistry.normalize(utility.raw);
  utility = utility.clone(normalized);

  return utility.handler
    .handleStatic(theme('strokeWidth'))
    .handleNumber(0, undefined, 'int')
    .handleVariable()
    .handleSquareBrackets()
    .createStyle(utility.class, (value) => [
      new Property(`${prefixer}stroke-width`, value),
      new Property(['stroke-width'], `var(${prefixer}stroke-width)`), // ${value}
    ])
    ?.updateMeta('utilities', 'strokeWidth', pluginOrder.order, utility.raw.charAt(0) === '-' ? 2 : 1, true);
}

/**
 * Handler pour stroke-dasharray (motif de tirets)
 * Supporte: nombres, listes, variables CSS
 */
export function strokeDasharray(utility: Utility, { theme }: PluginUtils): Output {
  const normalized = PatternRegistry.normalize(utility.raw);
  utility = utility.clone(normalized);

  return utility.handler
    .handleStatic(theme('strokeDasharray'))
    .handleNumber(0, undefined, 'int')
    .handleVariable()
    .handleString(() => {
      const raw = utility.raw;
      const stripped = raw.replace(/^-?(stroke-dasharray|stroke-dash|strk-dash|sda)-/, '');
      const body = stripped === raw ? utility.body : stripped;
      // Supporte les listes comme "5-10" -> "5 10"
      return body.replace(/-/g, ' ');
    })
    .createProperty([`${prefixer}-stroke-dasharray`, 'stroke-dasharray']);
}

/**
 * Handler pour stroke-dashoffset (décalage du motif de tirets)
 * Supporte: nombres, unités, variables CSS
 */
export function strokeDashoffset(utility: Utility, { theme }: PluginUtils): Output {
  const normalized = PatternRegistry.normalize(utility.raw);
  utility = utility.clone(normalized);

  return utility.handler
    .handleStatic(theme('strokeDashoffset'))
    .handleNumber(undefined, undefined, 'float')
    .handleSize()
    .handleVariable()
    .createProperty([`${prefixer}-stroke-dashoffset`, 'stroke-dashoffset']);
}

/**
 * Handler pour stroke-miterlimit
 * Supporte: nombres, variables CSS
 */
export function strokeMiterlimit(utility: Utility, { theme }: PluginUtils): Output {
  const normalized = PatternRegistry.normalize(utility.raw);
  utility = utility.clone(normalized);

  return utility.handler
    .handleStatic(theme('strokeMiterlimit'))
    .handleNumber(1, undefined, 'float')
    .handleVariable()
    .createProperty([`${prefixer}-stroke-miterlimit`, 'stroke-miterlimit']);
}

/**
 * Handler pour clip-path (chemin de découpe)
 * Supporte: URLs, formes géométriques, variables CSS
 */
export function clipPath(utility: Utility, { theme }: PluginUtils): Output {
  const normalized = PatternRegistry.normalize(utility.raw);
  utility = utility.clone(normalized);

  return utility.handler
    .handleStatic(theme('clipPath'))
    .handleVariable()
    .handleString(() => {
      const raw = utility.raw;
      const stripped = raw.replace(/^-?(clip-path|clip-p|cp)-/, '');
      const body = stripped === raw ? utility.body : stripped;
      // Support pour url(#id)
      if (body.startsWith('url-')) {
        return `url(#${body.slice(4)})`;
      }
      // Support pour polygon personnalisé
      if (body.startsWith('polygon-')) {
        const coords = body.slice(8).replace(/-/g, ' ').replace(/_/g, ', ');
        return `polygon(${coords})`;
      }
      // Support pour circle personnalisé
      if (body.startsWith('circle-')) {
        const params = body.slice(7).replace(/-/g, ' ');
        return `circle(${params})`;
      }
      // Support pour ellipse personnalisé
      if (body.startsWith('ellipse-')) {
        const params = body.slice(8).replace(/-/g, ' ');
        return `ellipse(${params})`;
      }
      // Support pour inset personnalisé
      if (body.startsWith('inset-')) {
        const params = body.slice(6).replace(/-/g, ' ');
        return `inset(${params})`;
      }
      return body;
    })
    .createProperty([`${prefixer}-clip-path`, 'clip-path']);
}

export const dynamicSvgUtilities: DynamicUtility = generateDynamicUtilities([
  // Fill
  {
    name: 'fill',
    aliases: ['f', 'fl'],
    handler: fill,
  },
  {
    name: 'fill-opacity',
    aliases: ['fill-op', 'f-op', 'fo'],
    handler: fill,
  },

  // Stroke
  {
    name: 'stroke',
    aliases: ['strk', 'sk', 's'],
    handler: strokeColor,
  },
  {
    name: 'stroke-opacity',
    aliases: ['stroke-op', 'strk-op', 'so'],
    handler: strokeColor,
  },
  {
    name: 'stroke-width',
    aliases: ['stroke-w', 'strk-w', 'sw'],
    handler: strokeWidth,
  },
  {
    name: 'stroke-dasharray',
    aliases: ['stroke-dash', 'strk-dash', 'sda'],
    handler: strokeDasharray,
  },
  {
    name: 'stroke-dashoffset',
    aliases: ['stroke-offset', 'strk-offset', 'sdo'],
    handler: strokeDashoffset,
  },
  {
    name: 'stroke-miterlimit',
    aliases: ['stroke-miter', 'strk-miter', 'sml'],
    handler: strokeMiterlimit,
  },

  // Clip Path
  {
    name: 'clip-path',
    aliases: ['clip-p', 'cp'],
    handler: clipPath,
  },
]);
