import {
  // Générateurs
  generateStaticUtilities,
  generateDynamicUtilities,
  
  // Combinateurs
  combineStaticUtilities,
  combineDynamicUtilities,
  
  // Helpers de création
  createStaticTemplate,
  createStaticTemplateWithSuffixes,
  createDynamicConfig,
  
  // Pattern Registry
  PatternRegistry,
  registerPattern,
  
  // Debug
  debugPatterns,
  testNormalization,
  
  // Types
  type StaticTemplate,
  type DynamicConfig,
} from "../handlers/template-generator";

import type { StaticUtility, DynamicUtility, PluginUtils, Output } from '../../../interfaces';
import { Utility } from '../handler';

export const prefixer = '--ns';

export const SVG_STROKE_WIDTH_LONG: StaticTemplate[] = [
  {
    base: 'stroke-0',
    aliases: ['strk-0', 'sk-0'],
    utility: {
      [prefixer + '-stroke-width']: '0',
      'stroke-width': '0',
    },
    meta: { group: 'strokeWidth', order: 1 },
  },
];

export const staticSvgUtilities: StaticUtility =
  generateStaticUtilities([
    ...SVG_STROKE_WIDTH_LONG,
]);

export function fill(utility: Utility, { theme }: PluginUtils): Output {
  const normalized = PatternRegistry.normalize(utility.raw);
  utility = utility.clone(normalized);

  if (normalized.startsWith('fill-opacity')) {
    return utility.handler
    .handleStatic(theme('opacity'))
    .handleNumber(0, 100, 'int', (n: number) => (n / 100).toString())
    .createProperty(`${prefixer}-fill-opacity`);
  }

  return utility.handler
    .handleColor(theme('fill'))
    .createColorStyle(utility.class, 'fill', `${prefixer}-fill-color`);
}

export function strokeColor(utility: Utility, { theme }: PluginUtils): Output {
  const normalized = PatternRegistry.normalize(utility.raw);
  utility = utility.clone(normalized);

  if (normalized.startsWith('stroke-opacity')) {
    return utility.handler
    .handleStatic(theme('opacity'))
    .handleNumber(0, 100, 'int', (n: number) => (n / 100).toString())
    .createProperty(`${prefixer}-stroke-opacity`);
  }

  return utility.handler
    .handleColor(theme('stroke'))
    .createColorStyle(utility.class, 'stroke', `${prefixer}-stroke-color`);
}

export function strokeWidth(utility: Utility, { theme }: PluginUtils): Output {
  const normalized = PatternRegistry.normalize(utility.raw);
  utility = utility.clone(normalized);

  if (normalized.startsWith('stroke-width')) {
    return utility.handler
      .handleNumber(0, undefined, 'int')
      .createProperty(`${prefixer}-stroke-width`);
  }

  return utility.handler
    .handleStatic(theme('strokeWidth'))
    .handleNumber(0, undefined, 'int')
    .createProperty(`${prefixer}-stroke-width`);
}

export const dynamicSvgUtilities: DynamicUtility =
  generateDynamicUtilities([
    {
      name: 'fill',
      aliases: ['f', 'fl'],
      handler: fill,
    },
    {
      name: 'stroke',
      aliases: ['sk', 'strk'],
      handler: strokeColor,
    },
    {
      name: 'stroke',
      aliases: ['sw'],
      handler: strokeWidth,
    },
]);