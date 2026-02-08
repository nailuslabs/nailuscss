// /**
//  * ALIGNMENT STATIC UTILITIES
//  * 
//  * Utilities statiques pour l'alignement (justify, align, place, vertical-align)
//  * avec des alias cohérents inspirés de Bootstrap, Tailwind CSS, UnoCSS et Atomizer
//  */

// import {
//   generateFromTemplates,
//   generateSimpleUtilities,
//   combineUtilities,
//   type UtilityTemplate,
//   type SimpleUtilityConfig
// } from '../handlers/template-generator';

// export const JUSTIFY_CONTENT_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'justify',
//     aliases: [],
//     suffixes: [
//       'normal', 'start', 'end', 'center', 'between', 'around', 'evenly', 
//       'stretch', 'flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly'
//     ],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'start': 'flex-start',
//         'end': 'flex-end',
//         'between': 'space-between',
//         'around': 'space-around',
//         'evenly': 'space-evenly',
//         'flex-start': 'flex-start',
//         'flex-end': 'flex-end',
//         'space-between': 'space-between',
//         'space-around': 'space-around',
//         'space-evenly': 'space-evenly',
//       };
//       return { 'justify-content': values[suffix] || suffix };
//     },
//     meta: { group: 'alignment', order: 1 },
//   },
// ];

// export const JUSTIFY_ITEMS_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'justify-items',
//     aliases: [],
//     suffixes: ['start', 'end', 'center', 'stretch', 'flex-start', 'flex-end'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'start': 'start',
//         'end': 'end',
//         'center': 'center',
//         'stretch': 'stretch',
//         'flex-start': 'flex-start',
//         'flex-end': 'flex-end',
//       };
//       return { 'justify-items': values[suffix] };
//     },
//     meta: { group: 'alignment', order: 2 },
//   },
// ];

// export const JUSTIFY_SELF_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'justify-self',
//     aliases: [],
//     suffixes: ['auto', 'start', 'end', 'center', 'stretch', 'flex-start', 'flex-end'],
//     utility: (suffix) => ({ 'justify-self': suffix }),
//     meta: { group: 'alignment', order: 3 },
//   },
// ];

// export const ALIGN_CONTENT_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'content',
//     aliases: [],
//     suffixes: [
//       'normal', 'start', 'end', 'center', 'between', 'around', 'evenly', 
//       'baseline', 'stretch', 'flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly'
//     ],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'start': 'flex-start',
//         'end': 'flex-end',
//         'between': 'space-between',
//         'around': 'space-around',
//         'evenly': 'space-evenly',
//         'flex-start': 'flex-start',
//         'flex-end': 'flex-end',
//         'space-between': 'space-between',
//         'space-around': 'space-around',
//         'space-evenly': 'space-evenly',
//       };
//       return { 'align-content': values[suffix] || suffix };
//     },
//     meta: { group: 'alignment', order: 4 },
//   },
// ];

// export const ALIGN_ITEMS_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'items',
//     aliases: [],
//     suffixes: ['start', 'end', 'center', 'baseline', 'stretch', 'flex-start', 'flex-end'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'start': 'flex-start',
//         'end': 'flex-end',
//         'flex-start': 'flex-start',
//         'flex-end': 'flex-end',
//       };
//       return { 'align-items': values[suffix] || suffix };
//     },
//     meta: { group: 'alignment', order: 5 },
//   },
// ];

// export const ALIGN_SELF_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'self',
//     aliases: [],
//     suffixes: ['auto', 'start', 'end', 'center', 'stretch', 'baseline', 'flex-start', 'flex-end'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'start': 'flex-start',
//         'end': 'flex-end',
//         'flex-start': 'flex-start',
//         'flex-end': 'flex-end',
//       };
//       return { 'align-self': values[suffix] || suffix };
//     },
//     meta: { group: 'alignment', order: 6 },
//   },
// ];

// export const PLACE_CONTENT_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'place-content',
//     aliases: [],
//     suffixes: ['center', 'start', 'end', 'between', 'around', 'evenly', 'baseline', 'stretch'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'between': 'space-between',
//         'around': 'space-around',
//         'evenly': 'space-evenly',
//       };
//       return { 'place-content': values[suffix] || suffix };
//     },
//     meta: { group: 'alignment', order: 7 },
//   },
// ];

// export const PLACE_ITEMS_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'place-items',
//     aliases: [],
//     suffixes: ['start', 'end', 'center', 'baseline', 'stretch'],
//     utility: (suffix) => ({ 'place-items': suffix }),
//     meta: { group: 'alignment', order: 8 },
//   },
// ];

// export const PLACE_SELF_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'place-self',
//     aliases: [],
//     suffixes: ['auto', 'start', 'end', 'center', 'stretch'],
//     utility: (suffix) => ({ 'place-self': suffix }),
//     meta: { group: 'alignment', order: 9 },
//   },
// ];

// const STATIC_JUSTIFY_CONTENT_CONFIGS = generateFromTemplates(JUSTIFY_CONTENT_CONFIGS);

// const STATIC_JUSTIFY_ITEMS_CONFIGS = generateFromTemplates(JUSTIFY_ITEMS_CONFIGS);

// const STATIC_JUSTIFY_SELF_CONFIGS = generateFromTemplates(JUSTIFY_SELF_CONFIGS);

// const STATIC_ALIGN_CONTENT_CONFIGS = generateFromTemplates(ALIGN_CONTENT_CONFIGS);

// const STATIC_ALIGN_ITEMS_CONFIGS = generateFromTemplates(ALIGN_ITEMS_CONFIGS);

// const STATIC_ALIGN_SELF_CONFIGS = generateFromTemplates(ALIGN_SELF_CONFIGS);

// const STATIC_PLACE_CONTENT_CONFIGS = generateFromTemplates(PLACE_CONTENT_CONFIGS);

// const STATIC_PLACE_ITEMS_CONFIGS = generateFromTemplates(PLACE_ITEMS_CONFIGS);

// const STATIC_PLACE_SELF_CONFIGS = generateFromTemplates(PLACE_SELF_CONFIGS);

// export const allAlignUtilityConfigs = combineUtilities(
//   STATIC_JUSTIFY_CONTENT_CONFIGS,
//   STATIC_JUSTIFY_ITEMS_CONFIGS,
//   STATIC_JUSTIFY_SELF_CONFIGS,
//   STATIC_ALIGN_CONTENT_CONFIGS,
//   STATIC_ALIGN_ITEMS_CONFIGS,
//   STATIC_ALIGN_SELF_CONFIGS,
//   STATIC_PLACE_CONTENT_CONFIGS,
//   STATIC_PLACE_CONTENT_CONFIGS,
//   STATIC_PLACE_ITEMS_CONFIGS,
//   STATIC_PLACE_SELF_CONFIGS,
// );