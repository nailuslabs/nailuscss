/**
 * FLEXBOX STATIC UTILITIES
 * 
 * Contains all static Flexbox-related utilities:
 * - flex-basis
 * - flex-direction
 * - flex-wrap
 * - flex shorthand
 * - grow / shrink
 * - order
 * 
 * Utilities statiques pour Flexbox avec des alias cohérents
 * inspirés de Bootstrap, Tailwind CSS, UnoCSS et Atomizer
 */

import {
  generateFromTemplates,
  generateSimpleUtilities,
  combineUtilities,
  type UtilityTemplate,
  type SimpleUtilityConfig
} from '../handlers/template-generator';

/**
 * Flex-basis utilities.
 *
 * Example:
 * - `.basis-auto`
 * - `.basis-full`
 */

const FLEX_BASIS_CONFIGS: SimpleUtilityConfig[] = [
  {
    name: 'basis-auto',
    aliases: ['flex-basis-auto', 'fb-auto'],
    utility: { 'flex-basis': 'auto' },
    meta: { group: 'flexBasis', order: 1 },
  },
  {
    name: 'basis-full',
    aliases: ['flex-basis-full', 'fb-full', 'basis-100'],
    utility: { 'flex-basis': '100%' },
    meta: { group: 'flexBasis', order: 2 },
  },
  {
    name: 'basis-0',
    aliases: ['flex-basis-0', 'fb-0'],
    utility: { 'flex-basis': '0' },
    meta: { group: 'flexBasis', order: 3 },
  },
];

/**
 * Flex-direction utilities.
 *
 * Example:
 * - `.flex-row`
 * - `.flex-col`
 */

const FLEX_DIRECTION_CONFIGS: SimpleUtilityConfig[] = [
  {
    name: 'flex-row',
    aliases: ['flex-dir-row', 'fd-row', 'flex-horizontal'],
    utility: {
      '-webkit-box-orient': 'horizontal',
      '-webkit-box-direction': 'normal',
      '-ms-flex-direction': 'row',
      '-webkit-flex-direction': 'row',
      'flex-direction': 'row',
    },
    meta: { group: 'flexDirection', order: 1 },
  },
  {
    name: 'flex-row-reverse',
    aliases: ['flex-dir-row-reverse', 'fd-row-reverse', 'fd-rr'],
    utility: {
      '-webkit-box-orient': 'horizontal',
      '-webkit-box-direction': 'reverse',
      '-ms-flex-direction': 'row-reverse',
      '-webkit-flex-direction': 'row-reverse',
      'flex-direction': 'row-reverse',
    },
    meta: { group: 'flexDirection', order: 2 },
  },
  {
    name: 'flex-col',
    aliases: ['flex-column', 'flex-dir-col', 'fd-col', 'flex-vertical'],
    utility: {
      '-webkit-box-orient': 'vertical',
      '-webkit-box-direction': 'normal',
      '-ms-flex-direction': 'column',
      '-webkit-flex-direction': 'column',
      'flex-direction': 'column',
    },
    meta: { group: 'flexDirection', order: 3 },
  },
  {
    name: 'flex-col-reverse',
    aliases: ['flex-column-reverse', 'flex-dir-col-reverse', 'fd-col-reverse', 'fd-cr'],
    utility: {
      '-webkit-box-orient': 'vertical',
      '-webkit-box-direction': 'reverse',
      '-ms-flex-direction': 'column-reverse',
      '-webkit-flex-direction': 'column-reverse',
      'flex-direction': 'column-reverse',
    },
    meta: { group: 'flexDirection', order: 4 },
  },
];

// ============================================================================
// FLEX WRAP
// ============================================================================

const FLEX_WRAP_CONFIGS: SimpleUtilityConfig[] = [
  {
    name: 'flex-wrap',
    aliases: ['flex-wrap-on', 'fw-wrap'],
    utility: {
      '-ms-flex-wrap': 'wrap',
      '-webkit-flex-wrap': 'wrap',
      'flex-wrap': 'wrap',
    },
    meta: { group: 'flexWrap', order: 1 },
  },
  {
    name: 'flex-wrap-reverse',
    aliases: ['fw-wrap-reverse', 'fw-wr'],
    utility: {
      '-ms-flex-wrap': 'wrap-reverse',
      '-webkit-flex-wrap': 'wrap-reverse',
      'flex-wrap': 'wrap-reverse',
    },
    meta: { group: 'flexWrap', order: 2 },
  },
  {
    name: 'flex-nowrap',
    aliases: ['flex-wrap-off', 'fw-nowrap', 'fw-nw'],
    utility: {
      '-ms-flex-wrap': 'nowrap',
      '-webkit-flex-wrap': 'nowrap',
      'flex-wrap': 'nowrap',
    },
    meta: { group: 'flexWrap', order: 3 },
  },
];

// ============================================================================
// FLEX (SHORTHAND)
// ============================================================================

const FLEX_CONFIGS: SimpleUtilityConfig[] = [
  {
    name: 'flex-1',
    aliases: ['flex-auto', 'f-1'],
    utility: {
      '-webkit-box-flex': '1',
      '-ms-flex': '1 1 0%',
      '-webkit-flex': '1 1 0%',
      'flex': '1 1 0%',
    },
    meta: { group: 'flex', order: 1 },
  },
  {
    name: 'flex-initial',
    aliases: ['f-initial'],
    utility: {
      '-webkit-box-flex': '0',
      '-ms-flex': '0 1 auto',
      '-webkit-flex': '0 1 auto',
      'flex': '0 1 auto',
    },
    meta: { group: 'flex', order: 2 },
  },
  {
    name: 'flex-none',
    aliases: ['f-none'],
    utility: {
      '-webkit-box-flex': '0',
      '-ms-flex': 'none',
      '-webkit-flex': 'none',
      'flex': 'none',
    },
    meta: { group: 'flex', order: 3 },
  },
];

// ============================================================================
// FLEX GROW
// ============================================================================

const FLEX_GROW_CONFIGS: SimpleUtilityConfig[] = [
  {
    name: 'flex-grow',
    aliases: ['flex-grow-1', 'fg-1', 'grow'],
    utility: {
      '-webkit-box-flex': '1',
      '-ms-flex-positive': '1',
      '-webkit-flex-grow': '1',
      'flex-grow': '1',
    },
    meta: { group: 'flexGrow', order: 1 },
  },
  {
    name: 'flex-grow-0',
    aliases: ['fg-0', 'grow-0'],
    utility: {
      '-webkit-box-flex': '0',
      '-ms-flex-positive': '0',
      '-webkit-flex-grow': '0',
      'flex-grow': '0',
    },
    meta: { group: 'flexGrow', order: 2 },
  },
];

// ============================================================================
// FLEX SHRINK
// ============================================================================

const FLEX_SHRINK_CONFIGS: SimpleUtilityConfig[] = [
  {
    name: 'flex-shrink',
    aliases: ['flex-shrink-1', 'fs-1', 'shrink'],
    utility: {
      '-ms-flex-negative': '1',
      '-webkit-flex-shrink': '1',
      'flex-shrink': '1',
    },
    meta: { group: 'flexShrink', order: 1 },
  },
  {
    name: 'flex-shrink-0',
    aliases: ['fs-0', 'shrink-0'],
    utility: {
      '-ms-flex-negative': '0',
      '-webkit-flex-shrink': '0',
      'flex-shrink': '0',
    },
    meta: { group: 'flexShrink', order: 2 },
  },
];

// ============================================================================
// ORDER
// ============================================================================

const ORDER_CONFIGS: SimpleUtilityConfig[] = [
  {
    name: 'order-first',
    aliases: ['order--1', 'ord-first'],
    utility: {
      '-webkit-box-ordinal-group': '0',
      '-webkit-order': '-9999',
      '-ms-flex-order': '-9999',
      'order': '-9999',
    },
    meta: { group: 'order', order: 1 },
  },
  {
    name: 'order-last',
    aliases: ['order-99', 'ord-last'],
    utility: {
      '-webkit-box-ordinal-group': '10000',
      '-webkit-order': '9999',
      '-ms-flex-order': '9999',
      'order': '9999',
    },
    meta: { group: 'order', order: 2 },
  },
  {
    name: 'order-none',
    aliases: ['order-0', 'ord-none'],
    utility: {
      '-webkit-box-ordinal-group': '1',
      '-webkit-order': '0',
      '-ms-flex-order': '0',
      'order': '0',
    },
    meta: { group: 'order', order: 3 },
  },
];

// ============================================================================
// GÉNÉRATION ET EXPORT
// ============================================================================

const staticFlexBasisUtilities = generateSimpleUtilities(FLEX_BASIS_CONFIGS);
const staticFlexDirectionUtilities = generateSimpleUtilities(FLEX_DIRECTION_CONFIGS);
const staticFlexWrapUtilities = generateSimpleUtilities(FLEX_WRAP_CONFIGS);
const staticFlexUtilities = generateSimpleUtilities(FLEX_CONFIGS);
const staticFlexGrowUtilities = generateSimpleUtilities(FLEX_GROW_CONFIGS);
const staticFlexShrinkUtilities = generateSimpleUtilities(FLEX_SHRINK_CONFIGS);
const staticOrderUtilities = generateSimpleUtilities(ORDER_CONFIGS);

export const allStaticFlexUtilities = combineUtilities(
  staticFlexBasisUtilities,
  staticFlexDirectionUtilities,
  staticFlexWrapUtilities,
  staticFlexUtilities,
  staticFlexGrowUtilities,
  staticFlexShrinkUtilities,
  staticOrderUtilities
);