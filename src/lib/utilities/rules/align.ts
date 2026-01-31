/**
 * ALIGNMENT STATIC UTILITIES
 * 
 * Utilities statiques pour l'alignement (justify, align, place, vertical-align)
 * avec des alias cohérents inspirés de Bootstrap, Tailwind CSS, UnoCSS et Atomizer
 */

import {
  generateFromTemplates,
  generateSimpleUtilities,
  combineUtilities,
  type UtilityTemplate,
  type SimpleUtilityConfig
} from '../handlers/template-generator';

// ============================================================================
// JUSTIFY CONTENT
// ============================================================================

const JUSTIFY_CONTENT_TEMPLATES: UtilityTemplate[] = [
  {
    base: 'justify',
    aliases: ['justify-content', 'jc'],
    suffixes: ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'],
    utility: (suffix: string) => {
      const valueMap: Record<string, any> = {
        'start': 'flex-start',
        'end': 'flex-end',
        'center': 'center',
        'between': 'space-between',
        'around': 'space-around',
        'evenly': 'space-evenly',
        'stretch': 'stretch',
      };
      
      const value = valueMap[suffix];
      const prefixedValue = suffix === 'between' ? 'justify' : (suffix === 'around' ? 'distribute' : suffix);
      
      return {
        '-webkit-box-pack': suffix === 'stretch' ? 'stretch' : prefixedValue,
        '-ms-flex-pack': prefixedValue,
        '-webkit-justify-content': value,
        'justify-content': value,
      };
    },
    meta: { group: 'justifyContent', order: 1 },
  },
];

// ============================================================================
// JUSTIFY ITEMS
// ============================================================================

const JUSTIFY_ITEMS_TEMPLATES: UtilityTemplate[] = [
  {
    base: 'justify-items',
    aliases: ['ji'],
    suffixes: ['start', 'end', 'center', 'stretch', 'auto'],
    utility: (suffix: string) => ({
      'justify-items': suffix,
    }),
    meta: { group: 'justifyItems', order: 1 },
  },
];

// ============================================================================
// JUSTIFY SELF
// ============================================================================

const JUSTIFY_SELF_TEMPLATES: UtilityTemplate[] = [
  {
    base: 'justify-self',
    aliases: ['js'],
    suffixes: ['start', 'end', 'center', 'stretch', 'auto'],
    utility: (suffix: string) => ({
      '-ms-grid-column-align': suffix,
      'justify-self': suffix,
    }),
    meta: { group: 'justifySelf', order: 1 },
  },
];

// ============================================================================
// ALIGN CONTENT
// ============================================================================

const ALIGN_CONTENT_TEMPLATES: UtilityTemplate[] = [
  {
    base: 'content',
    aliases: ['align-content', 'ac'],
    suffixes: ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'],
    utility: (suffix: string) => {
      const valueMap: Record<string, string> = {
        'start': 'flex-start',
        'end': 'flex-end',
        'center': 'center',
        'between': 'space-between',
        'around': 'space-around',
        'evenly': 'space-evenly',
        'stretch': 'stretch',
      };
      
      const value = valueMap[suffix];
      const prefixedValue = suffix === 'between' ? 'justify' : (suffix === 'around' ? 'distribute' : suffix);
      
      return {
        '-ms-flex-line-pack': prefixedValue,
        '-webkit-align-content': value,
        'align-content': value,
      };
    },
    meta: { group: 'alignContent', order: 1 },
  },
];

// ============================================================================
// ALIGN ITEMS
// ============================================================================

const ALIGN_ITEMS_TEMPLATES: UtilityTemplate[] = [
  {
    base: 'items',
    aliases: ['align-items', 'ai'],
    suffixes: ['start', 'end', 'center', 'baseline', 'stretch'],
    utility: (suffix: string) => {
      const valueMap: Record<string, string> = {
        'start': 'flex-start',
        'end': 'flex-end',
        'center': 'center',
        'baseline': 'baseline',
        'stretch': 'stretch',
      };
      
      return {
        '-webkit-box-align': suffix,
        '-ms-flex-align': suffix,
        '-webkit-align-items': valueMap[suffix],
        'align-items': valueMap[suffix],
      };
    },
    meta: { group: 'alignItems', order: 1 },
  },
];

// ============================================================================
// ALIGN SELF
// ============================================================================

const ALIGN_SELF_TEMPLATES: UtilityTemplate[] = [
  {
    base: 'self',
    aliases: ['align-self', 'as'],
    suffixes: ['start', 'end', 'center', 'stretch', 'auto', 'baseline'],
    utility: (suffix: string) => {
      const valueMap: Record<string, string> = {
        'start': 'flex-start',
        'end': 'flex-end',
        'center': 'center',
        'stretch': 'stretch',
        'auto': 'auto',
        'baseline': 'baseline',
      };
      
      return {
        '-ms-flex-item-align': suffix,
        '-ms-grid-row-align': suffix,
        '-webkit-align-self': valueMap[suffix],
        'align-self': valueMap[suffix],
      };
    },
    meta: { group: 'alignSelf', order: 1 },
  },
];

// ============================================================================
// PLACE CONTENT
// ============================================================================

const PLACE_CONTENT_TEMPLATES: UtilityTemplate[] = [
  {
    base: 'place-content',
    aliases: ['pc'],
    suffixes: ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'],
    utility: (suffix: string) => {
      const value = suffix === 'between' ? 'space-between' 
                  : suffix === 'around' ? 'space-around'
                  : suffix === 'evenly' ? 'space-evenly'
                  : suffix;
      
      return {
        'place-content': value,
      };
    },
    meta: { group: 'placeContent', order: 1 },
  },
];

// ============================================================================
// PLACE ITEMS
// ============================================================================

const PLACE_ITEMS_TEMPLATES: UtilityTemplate[] = [
  {
    base: 'place-items',
    aliases: ['pi'],
    suffixes: ['start', 'end', 'center', 'stretch', 'auto'],
    utility: (suffix: string) => ({
      'place-items': suffix,
    }),
    meta: { group: 'placeItems', order: 1 },
  },
];

// ============================================================================
// PLACE SELF
// ============================================================================

const PLACE_SELF_TEMPLATES: UtilityTemplate[] = [
  {
    base: 'place-self',
    aliases: ['ps'],
    suffixes: ['start', 'end', 'center', 'stretch', 'auto'],
    utility: (suffix: string) => ({
      '-ms-grid-row-align': suffix,
      '-ms-grid-column-align': suffix,
      'place-self': suffix,
    }),
    meta: { group: 'placeSelf', order: 1 },
  },
];

// ============================================================================
// VERTICAL ALIGN
// ============================================================================

const VERTICAL_ALIGN_CONFIGS: SimpleUtilityConfig[] = [
  {
    name: 'align-baseline',
    aliases: ['vertical-align-baseline', 'va-baseline'],
    utility: { 'vertical-align': 'baseline' },
    meta: { group: 'verticalAlign', order: 1 },
  },
  {
    name: 'align-top',
    aliases: ['vertical-align-top', 'va-top'],
    utility: { 'vertical-align': 'top' },
    meta: { group: 'verticalAlign', order: 2 },
  },
  {
    name: 'align-middle',
    aliases: ['vertical-align-middle', 'va-middle'],
    utility: { 'vertical-align': 'middle' },
    meta: { group: 'verticalAlign', order: 3 },
  },
  {
    name: 'align-bottom',
    aliases: ['vertical-align-bottom', 'va-bottom'],
    utility: { 'vertical-align': 'bottom' },
    meta: { group: 'verticalAlign', order: 4 },
  },
  {
    name: 'align-text-top',
    aliases: ['vertical-align-text-top', 'va-text-top'],
    utility: { 'vertical-align': 'text-top' },
    meta: { group: 'verticalAlign', order: 5 },
  },
  {
    name: 'align-text-bottom',
    aliases: ['vertical-align-text-bottom', 'va-text-bottom'],
    utility: { 'vertical-align': 'text-bottom' },
    meta: { group: 'verticalAlign', order: 6 },
  },
  {
    name: 'align-sub',
    aliases: ['vertical-align-sub', 'va-sub'],
    utility: { 'vertical-align': 'sub' },
    meta: { group: 'verticalAlign', order: 7 },
  },
  {
    name: 'align-super',
    aliases: ['vertical-align-super', 'va-super'],
    utility: { 'vertical-align': 'super' },
    meta: { group: 'verticalAlign', order: 8 },
  },
];

// ============================================================================
// GÉNÉRATION ET EXPORT
// ============================================================================

const staticJustifyContentUtilities = generateFromTemplates(JUSTIFY_CONTENT_TEMPLATES);
const staticJustifyItemsUtilities = generateFromTemplates(JUSTIFY_ITEMS_TEMPLATES);
const staticJustifySelfUtilities = generateFromTemplates(JUSTIFY_SELF_TEMPLATES);
const staticAlignContentUtilities = generateFromTemplates(ALIGN_CONTENT_TEMPLATES);
const staticAlignItemsUtilities = generateFromTemplates(ALIGN_ITEMS_TEMPLATES);
const staticAlignSelfUtilities = generateFromTemplates(ALIGN_SELF_TEMPLATES);
const staticPlaceContentUtilities = generateFromTemplates(PLACE_CONTENT_TEMPLATES);
const staticPlaceItemsUtilities = generateFromTemplates(PLACE_ITEMS_TEMPLATES);
const staticPlaceSelfUtilities = generateFromTemplates(PLACE_SELF_TEMPLATES);
const staticVerticalAlignUtilities = generateSimpleUtilities(VERTICAL_ALIGN_CONFIGS);

export const allStaticAlignUtilities = combineUtilities(
  staticJustifyContentUtilities,
  staticJustifyItemsUtilities,
  staticJustifySelfUtilities,
  staticAlignContentUtilities,
  staticAlignItemsUtilities,
  staticAlignSelfUtilities,
  staticPlaceContentUtilities,
  staticPlaceItemsUtilities,
  staticPlaceSelfUtilities,
  staticVerticalAlignUtilities
);