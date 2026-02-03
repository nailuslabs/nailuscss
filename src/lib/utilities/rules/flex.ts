import {
  generateFromTemplates,
  generateSimpleUtilities,
  type createSuffixTemplate,
  type createSimpleTemplate,
  combineUtilities,
  UtilityTemplate
} from "../handlers/template-generator";
import { allLayoutUtilityConfigs } from "./layout";

export const FLEX_BASIS_CONFIGS: UtilityTemplate[] = [
  {
    base: 'basis',
    aliases: [],
    suffixes: ['0', 'auto'],
    utility: (suffix) => {
      const values: Record<string, string> = {
        'auto': 'auto',
        'full': '100%',
      };
      return { 'flex-basis': values[suffix] };
    },
    meta: { group: 'flexbox', order: 1 },
  },
];

export const FLEX_DIRECTION_CONFIGS: UtilityTemplate[] = [
  {
    base: 'flex',
    aliases: ['flx'],
    suffixes: [
      'row', 'row-reverse',
      'col', 'col-reverse', 
      'column', 'column-reverse'],
    utility: (suffix) => {
      const values: Record<string, string> = {
        // short aliases
        'row-r': 'row-reverse',
        'col': 'column',
        'col-r': 'column-reverse',
        // long aliases (backward compatible)
        'row': 'row',
        'row-reverse': 'row-reverse',
        'column': 'column',
        'column-reverse': 'column-reverse',
      };
      return { 'flex-direction': values[suffix] };
    },
    meta: { group: 'flexbox', order: 2 },
  },
];

export const FLEX_WRAP_CONFIGS: UtilityTemplate[] = [
  {
    base: 'flex',
    aliases: ['flx'],
    suffixes: [
      'wrp', 'wrp-r', 'nwrp',
      'wrap', 'wrap-reverse', 'nowrap'],
    utility: (suffix) => {
      const values: Record<string, string> = {
        // short aliases
        'wrp': 'wrap',
        'wrp-r': 'wrap-reverse',
        'nwrp': 'nowrap',

        // long aliases (backward compatible)
        'wrap': 'wrap',
        'wrap-reverse': 'wrap-reverse',
        'nowrap': 'nowrap',
      };
      return { flex: values[suffix] };
    },
    meta: { group: 'flexbox', order: 3 },
  },
];

export const FLEX_CONFIGS: UtilityTemplate[] = [
  {
    base: 'flex',
    aliases: ['flx'],
    suffixes: ['1', 'auto', 'initial', 'init', 'none'],
    utility: (suffix) => {
      const values: Record<string, string> = {
        '1': '1 1 0%',
        'auto': '1 1 auto',
        'initial': '0 1 auto',
        'init': '0 1 auto',
        'none': 'none',
      };
      return { flex: values[suffix] };
    },
    meta: { group: 'flexbox', order: 4 },
  },
];

export const FLEX_GROW_CONFIGS: UtilityTemplate[] = [
  {
    base: 'grow',
    aliases: ['grw'],
    suffixes: ['0', '1'],
    utility: (suffix) => ({ 'flex-grow': suffix }),
    meta: { group: 'flexbox', order: 5 },
  },
];

export const FLEX_SHRINK_CONFIGS: UtilityTemplate[] = [
  {
    base: 'shrink',
    aliases: ['shk'],
    suffixes: ['0', '1'],
    utility: (suffix) => ({ 'flex-shrink': suffix }),
    meta: { group: 'flexbox', order: 6 },
  },
];

export const ORDER_CONFIGS: UtilityTemplate[] = [
  {
    base: 'order',
    aliases: ['ord'],
    suffixes: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'first', 'last', 'none'],
    utility: (suffix) => {
      const values: Record<string, string> = {
        'first': '-9999',
        'last': '9999',
        'none': '0',
      };
      return { order: values[suffix] || suffix };
    },
    meta: { group: 'flexbox', order: 7 },
  },
];

const STATIC_FLEX_BASIS_CONFIGS = generateFromTemplates(FLEX_BASIS_CONFIGS);
const STATIC_FLEX_DIRECTION_CONFIGS = generateFromTemplates(FLEX_DIRECTION_CONFIGS);
const STATIC_FLEX_WRAP_CONFIGS = generateFromTemplates(FLEX_WRAP_CONFIGS);
const STATIC_FLEX_CONFIGS = generateFromTemplates(FLEX_CONFIGS);
const STATIC_FLEX_GROW_CONFIGS = generateFromTemplates(FLEX_GROW_CONFIGS);
const STATIC_FLEX_SHRINK_CONFIGS = generateFromTemplates(FLEX_SHRINK_CONFIGS);
const STATIC_ORDER_CONFIGS = generateFromTemplates(ORDER_CONFIGS);

export const allflexUtilityConfigs = combineUtilities(
  STATIC_FLEX_BASIS_CONFIGS,
  STATIC_FLEX_DIRECTION_CONFIGS,
  STATIC_FLEX_WRAP_CONFIGS,
  STATIC_FLEX_CONFIGS,
  STATIC_FLEX_GROW_CONFIGS,
  STATIC_FLEX_SHRINK_CONFIGS,
  STATIC_ORDER_CONFIGS
);