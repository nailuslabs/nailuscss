/**
 * GRID STATIC UTILITIES
 * 
 * Utilities statiques pour CSS Grid avec des alias cohérents
 * inspirés de Bootstrap, Tailwind CSS, UnoCSS et Atomizer
 */

import {
  generateFromTemplates,
  generateSimpleUtilities,
  combineUtilities,
  type UtilityTemplate,
  type SimpleUtilityConfig
} from '../handlers/template-generator';

// ============================================================================
// GRID TEMPLATE COLUMNS
// ============================================================================

const GRID_TEMPLATE_COLUMNS_CONFIGS: SimpleUtilityConfig[] = [
  {
    name: 'grid-cols-none',
    aliases: ['grid-template-columns-none', 'gtc-none'],
    utility: { 'grid-template-columns': 'none' },
    meta: { group: 'gridTemplateColumns', order: 1 },
  },
  {
    name: 'grid-cols-1',
    aliases: ['grid-template-columns-1', 'gtc-1'],
    utility: { 'grid-template-columns': 'repeat(1, minmax(0, 1fr))' },
    meta: { group: 'gridTemplateColumns', order: 2 },
  },
  {
    name: 'grid-cols-2',
    aliases: ['grid-template-columns-2', 'gtc-2'],
    utility: { 'grid-template-columns': 'repeat(2, minmax(0, 1fr))' },
    meta: { group: 'gridTemplateColumns', order: 3 },
  },
  {
    name: 'grid-cols-3',
    aliases: ['grid-template-columns-3', 'gtc-3'],
    utility: { 'grid-template-columns': 'repeat(3, minmax(0, 1fr))' },
    meta: { group: 'gridTemplateColumns', order: 4 },
  },
  {
    name: 'grid-cols-4',
    aliases: ['grid-template-columns-4', 'gtc-4'],
    utility: { 'grid-template-columns': 'repeat(4, minmax(0, 1fr))' },
    meta: { group: 'gridTemplateColumns', order: 5 },
  },
  {
    name: 'grid-cols-5',
    aliases: ['grid-template-columns-5', 'gtc-5'],
    utility: { 'grid-template-columns': 'repeat(5, minmax(0, 1fr))' },
    meta: { group: 'gridTemplateColumns', order: 6 },
  },
  {
    name: 'grid-cols-6',
    aliases: ['grid-template-columns-6', 'gtc-6'],
    utility: { 'grid-template-columns': 'repeat(6, minmax(0, 1fr))' },
    meta: { group: 'gridTemplateColumns', order: 7 },
  },
  {
    name: 'grid-cols-12',
    aliases: ['grid-template-columns-12', 'gtc-12'],
    utility: { 'grid-template-columns': 'repeat(12, minmax(0, 1fr))' },
    meta: { group: 'gridTemplateColumns', order: 8 },
  },
];

// ============================================================================
// GRID COLUMN
// ============================================================================

const GRID_COLUMN_CONFIGS: SimpleUtilityConfig[] = [
  {
    name: 'col-auto',
    aliases: ['grid-col-auto', 'gc-auto'],
    utility: { 'grid-column': 'auto' },
    meta: { group: 'gridColumn', order: 1 },
  },
  {
    name: 'col-span-1',
    aliases: ['grid-col-span-1', 'gc-span-1'],
    utility: { 'grid-column': 'span 1 / span 1' },
    meta: { group: 'gridColumn', order: 2 },
  },
  {
    name: 'col-span-2',
    aliases: ['grid-col-span-2', 'gc-span-2'],
    utility: { 'grid-column': 'span 2 / span 2' },
    meta: { group: 'gridColumn', order: 3 },
  },
  {
    name: 'col-span-3',
    aliases: ['grid-col-span-3', 'gc-span-3'],
    utility: { 'grid-column': 'span 3 / span 3' },
    meta: { group: 'gridColumn', order: 4 },
  },
  {
    name: 'col-span-full',
    aliases: ['grid-col-span-full', 'gc-span-full', 'col-full'],
    utility: { 'grid-column': '1 / -1' },
    meta: { group: 'gridColumn', order: 5 },
  },
];

// ============================================================================
// GRID TEMPLATE ROWS
// ============================================================================

const GRID_TEMPLATE_ROWS_CONFIGS: SimpleUtilityConfig[] = [
  {
    name: 'grid-rows-none',
    aliases: ['grid-template-rows-none', 'gtr-none'],
    utility: { 'grid-template-rows': 'none' },
    meta: { group: 'gridTemplateRows', order: 1 },
  },
  {
    name: 'grid-rows-1',
    aliases: ['grid-template-rows-1', 'gtr-1'],
    utility: { 'grid-template-rows': 'repeat(1, minmax(0, 1fr))' },
    meta: { group: 'gridTemplateRows', order: 2 },
  },
  {
    name: 'grid-rows-2',
    aliases: ['grid-template-rows-2', 'gtr-2'],
    utility: { 'grid-template-rows': 'repeat(2, minmax(0, 1fr))' },
    meta: { group: 'gridTemplateRows', order: 3 },
  },
  {
    name: 'grid-rows-3',
    aliases: ['grid-template-rows-3', 'gtr-3'],
    utility: { 'grid-template-rows': 'repeat(3, minmax(0, 1fr))' },
    meta: { group: 'gridTemplateRows', order: 4 },
  },
  {
    name: 'grid-rows-4',
    aliases: ['grid-template-rows-4', 'gtr-4'],
    utility: { 'grid-template-rows': 'repeat(4, minmax(0, 1fr))' },
    meta: { group: 'gridTemplateRows', order: 5 },
  },
  {
    name: 'grid-rows-6',
    aliases: ['grid-template-rows-6', 'gtr-6'],
    utility: { 'grid-template-rows': 'repeat(6, minmax(0, 1fr))' },
    meta: { group: 'gridTemplateRows', order: 6 },
  },
];

// ============================================================================
// GRID ROW
// ============================================================================

const GRID_ROW_CONFIGS: SimpleUtilityConfig[] = [
  {
    name: 'row-auto',
    aliases: ['grid-row-auto', 'gr-auto'],
    utility: { 'grid-row': 'auto' },
    meta: { group: 'gridRow', order: 1 },
  },
  {
    name: 'row-span-1',
    aliases: ['grid-row-span-1', 'gr-span-1'],
    utility: { 'grid-row': 'span 1 / span 1' },
    meta: { group: 'gridRow', order: 2 },
  },
  {
    name: 'row-span-2',
    aliases: ['grid-row-span-2', 'gr-span-2'],
    utility: { 'grid-row': 'span 2 / span 2' },
    meta: { group: 'gridRow', order: 3 },
  },
  {
    name: 'row-span-3',
    aliases: ['grid-row-span-3', 'gr-span-3'],
    utility: { 'grid-row': 'span 3 / span 3' },
    meta: { group: 'gridRow', order: 4 },
  },
  {
    name: 'row-span-full',
    aliases: ['grid-row-span-full', 'gr-span-full', 'row-full'],
    utility: { 'grid-row': '1 / -1' },
    meta: { group: 'gridRow', order: 5 },
  },
];

// ============================================================================
// GRID AUTO FLOW
// ============================================================================

const GRID_AUTO_FLOW_CONFIGS: SimpleUtilityConfig[] = [
  {
    name: 'grid-flow-row',
    aliases: ['grid-auto-flow-row', 'gaf-row'],
    utility: { 'grid-auto-flow': 'row' },
    meta: { group: 'gridAutoFlow', order: 1 },
  },
  {
    name: 'grid-flow-col',
    aliases: ['grid-auto-flow-col', 'grid-flow-column', 'gaf-col'],
    utility: { 'grid-auto-flow': 'column' },
    meta: { group: 'gridAutoFlow', order: 2 },
  },
  {
    name: 'grid-flow-dense',
    aliases: ['grid-auto-flow-dense', 'gaf-dense'],
    utility: { 'grid-auto-flow': 'dense' },
    meta: { group: 'gridAutoFlow', order: 3 },
  },
  {
    name: 'grid-flow-row-dense',
    aliases: ['grid-auto-flow-row-dense', 'gaf-row-dense'],
    utility: { 'grid-auto-flow': 'row dense' },
    meta: { group: 'gridAutoFlow', order: 4 },
  },
  {
    name: 'grid-flow-col-dense',
    aliases: ['grid-auto-flow-col-dense', 'gaf-col-dense'],
    utility: { 'grid-auto-flow': 'column dense' },
    meta: { group: 'gridAutoFlow', order: 5 },
  },
];

// ============================================================================
// GRID AUTO COLUMNS
// ============================================================================

const GRID_AUTO_COLUMNS_CONFIGS: SimpleUtilityConfig[] = [
  {
    name: 'auto-cols-auto',
    aliases: ['grid-auto-cols-auto', 'gac-auto'],
    utility: { 'grid-auto-columns': 'auto' },
    meta: { group: 'gridAutoColumns', order: 1 },
  },
  {
    name: 'auto-cols-min',
    aliases: ['grid-auto-cols-min', 'gac-min'],
    utility: { 'grid-auto-columns': 'min-content' },
    meta: { group: 'gridAutoColumns', order: 2 },
  },
  {
    name: 'auto-cols-max',
    aliases: ['grid-auto-cols-max', 'gac-max'],
    utility: { 'grid-auto-columns': 'max-content' },
    meta: { group: 'gridAutoColumns', order: 3 },
  },
  {
    name: 'auto-cols-fr',
    aliases: ['grid-auto-cols-fr', 'gac-fr'],
    utility: { 'grid-auto-columns': 'minmax(0, 1fr)' },
    meta: { group: 'gridAutoColumns', order: 4 },
  },
];

// ============================================================================
// GRID AUTO ROWS
// ============================================================================

const GRID_AUTO_ROWS_CONFIGS: SimpleUtilityConfig[] = [
  {
    name: 'auto-rows-auto',
    aliases: ['grid-auto-rows-auto', 'gar-auto'],
    utility: { 'grid-auto-rows': 'auto' },
    meta: { group: 'gridAutoRows', order: 1 },
  },
  {
    name: 'auto-rows-min',
    aliases: ['grid-auto-rows-min', 'gar-min'],
    utility: { 'grid-auto-rows': 'min-content' },
    meta: { group: 'gridAutoRows', order: 2 },
  },
  {
    name: 'auto-rows-max',
    aliases: ['grid-auto-rows-max', 'gar-max'],
    utility: { 'grid-auto-rows': 'max-content' },
    meta: { group: 'gridAutoRows', order: 3 },
  },
  {
    name: 'auto-rows-fr',
    aliases: ['grid-auto-rows-fr', 'gar-fr'],
    utility: { 'grid-auto-rows': 'minmax(0, 1fr)' },
    meta: { group: 'gridAutoRows', order: 4 },
  },
];

// ============================================================================
// GAP
// ============================================================================

const GAP_CONFIGS: SimpleUtilityConfig[] = [
  {
    name: 'gap-0',
    aliases: ['g-0'],
    utility: { 'gap': '0' },
    meta: { group: 'gap', order: 1 },
  },
  {
    name: 'gap-x-0',
    aliases: ['gx-0', 'column-gap-0'],
    utility: { 
      '-webkit-column-gap': '0',
      '-moz-column-gap': '0',
      'grid-column-gap': '0',
      'column-gap': '0',
    },
    meta: { group: 'gap', order: 2 },
  },
  {
    name: 'gap-y-0',
    aliases: ['gy-0', 'row-gap-0'],
    utility: { 
      '-webkit-row-gap': '0',
      '-moz-row-gap': '0',
      'grid-row-gap': '0',
      'row-gap': '0',
    },
    meta: { group: 'gap', order: 3 },
  },
];

// ============================================================================
// GÉNÉRATION ET EXPORT
// ============================================================================

const staticGridTemplateColumnsUtilities = generateSimpleUtilities(GRID_TEMPLATE_COLUMNS_CONFIGS);
const staticGridColumnUtilities = generateSimpleUtilities(GRID_COLUMN_CONFIGS);
const staticGridTemplateRowsUtilities = generateSimpleUtilities(GRID_TEMPLATE_ROWS_CONFIGS);
const staticGridRowUtilities = generateSimpleUtilities(GRID_ROW_CONFIGS);
const staticGridAutoFlowUtilities = generateSimpleUtilities(GRID_AUTO_FLOW_CONFIGS);
const staticGridAutoColumnsUtilities = generateSimpleUtilities(GRID_AUTO_COLUMNS_CONFIGS);
const staticGridAutoRowsUtilities = generateSimpleUtilities(GRID_AUTO_ROWS_CONFIGS);
const staticGapUtilities = generateSimpleUtilities(GAP_CONFIGS);

export const allStaticGridUtilities = combineUtilities(
  staticGridTemplateColumnsUtilities,
  staticGridColumnUtilities,
  staticGridTemplateRowsUtilities,
  staticGridRowUtilities,
  staticGridAutoFlowUtilities,
  staticGridAutoColumnsUtilities,
  staticGridAutoRowsUtilities,
  staticGapUtilities
);