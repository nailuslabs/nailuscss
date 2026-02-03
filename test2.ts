// /**
//  * LAYOUT STATIC UTILITIES
//  * utilities statique pour la gestion des mises en page
//  * avec des alias cohérents inspirés de Bootstrap et TailwindCSS, unocss
//  */

// import {
//   generateFromTemplates,
//   generateSimpleUtilities,
//   type UtilityTemplate,
//   type SimpleUtilityConfig,
//   combineUtilities
// } from "../handlers/template-generator";

// /**
//  * aspect-ratio utilities.
//  *
//  * Example:
//  * - `.aspect-auto`
//  * - `.aspect-full`
//  */

// export const ASPECT_RATIO_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'aspect',
//     aliases: ['aspect-ratio', 'ratio'],
//     suffixes: ['auto', 'full'],
//     utility: (suffix: string) => {
//       const valueMap: Record<string, string> = {
//         'auto': 'auto',
//         'full': '100%',
//       };
//       return { 'aspect-ratio': valueMap[suffix] };
//     },
//     meta: {
//       group: 'aspectRatio',
//       order: 1
//     },
//   },
//   {
//     base: 'aspect',
//     aliases: ['aspect-ratio', 'ratio'],
//     suffixes: ['square', '1/1', '1-1', '1x1', '1:1'],
//     utility: () => ({ 'aspect-ratio': '1 / 1' }),
//     meta: {
//       group: 'aspectRatio',
//       order: 2
//     },
//   },
//   // 16:9 - Standard HD Video
//   {
//     base: 'aspect',
//     aliases: ['aspect-ratio', 'ratio'],
//     suffixes: ['video', '16/9', '16-9', '16x9', '16:9', 'hdtv', 'youtube', 'hd', 'fhd', '1080p'],
//     utility: () => ({ 'aspect-ratio': '16 / 9' }),
//     meta: {
//       group: 'aspectRatio',
//       order: 3
//     },
//   },

//   // 4:3 - Classic TV
//   {
//     base: 'aspect',
//     aliases: ['aspect-ratio', 'ratio'],
//     suffixes: ['classic', '4/3', '4-3', '4x3', '4:3', 'tv', 'standard', 'sdtv', 'ntsc'],
//     utility: () => ({ 'aspect-ratio': '4 / 3' }),
//     meta: {
//       group: 'aspectRatio',
//       order: 4
//     },
//   },
//   // 5:4 - Old Monitors
//   {
//     base: 'aspect',
//     aliases: ['aspect-ratio', 'ratio'],
//     suffixes: ['5/4', '5-4', '5x4', '5:4', 'sxga'],
//     utility: () => ({ 'aspect-ratio': '5 / 4' }),
//     meta: {
//       group: 'aspectRatio',
//       order: 5
//     },
//   },
//   // 21:9 - Ultrawide Cinema
//   {
//     base: 'aspect',
//     aliases: ['aspect-ratio', 'ratio'],
//     suffixes: ['cinema', '21/9', '21-9', '21x9', '21:9', 'ultrawide', 'cinematic'],
//     utility: () => ({ 'aspect-ratio': '21 / 9' }),
//     meta: {
//       group: 'aspectRatio',
//       order: 6
//     },
//   },
//   // 9:16 - Portrait Video
//   {
//     base: 'aspect',
//     aliases: ['aspect-ratio', 'ratio'],
//     suffixes: ['portrait', '9/16', '9-16', '9x16', '9:16', 'story', 'vertical', 'stories'],
//     utility: () => ({ 'aspect-ratio': '9 / 16' }),
//     meta: {
//       group: 'aspectRatio',
//       order: 7
//     },
//   },
//   // 9:21 - Ultra Portrait
//   {
//     base: 'aspect',
//     aliases: ['aspect-ratio', 'ratio'],
//     suffixes: ['vertical-long', '9/21', '9-21', '9x21', '9:21', 'ultra-portrait'],
//     utility: () => ({ 'aspect-ratio': '9 / 21' }),
//     meta: {
//       group: 'aspectRatio',
//       order: 8
//     },
//   },
// ];

// export const BREAK_AFTER_TEMPLATES: UtilityTemplate[] = [
//   {
//     base: 'break-after',
//     aliases: ['bka'],
//     suffixes: ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
//     utility: (suffix: string) => ({
//       'break-after': suffix,
//     }),
//     meta: { group: 'breakAfter', order: 1 },
//   },
// ];

// export const BREAK_BEFORE_TEMPLATES: UtilityTemplate[] = [
//   {
//     base: 'break-before',
//     aliases: ['bkb'],
//     suffixes: ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
//     utility: (suffix: string) => ({
//       'break-before': suffix,
//     }),
//     meta: { group: 'breakBefore', order: 1 },
//   },
// ];

// export const BREAK_INSIDE_TEMPLATES: UtilityTemplate[] = [
//   {
//     base: 'break-inside',
//     aliases: ['bki'],
//     suffixes: ['auto', 'avoid', 'avoid-page', 'avoid-column'],
//     utility: (suffix: string) => ({
//       'break-inside': suffix,
//     }),
//     meta: { group: 'breakInside', order: 1 },
//   },
// ];

// export const BOX_DECORATION_TEMPLATES: UtilityTemplate[] = [
//   {
//     base: 'box-decoration',
//     aliases: ['bxd'],
//     suffixes: ['clone', 'slice'],
//     utility: (suffix: string) => ({
//       'box-decoration-break': suffix,
//     }),
//     meta: { group: 'boxDecoration', order: 1 },
//   },
// ];

// export const BOX_SIZING_TEMPLATES: UtilityTemplate[] = [
//   {
//     base: 'box-sizing',
//     aliases: ['bxs'],
//     suffixes: ['content-box', 'border-box'],
//     utility: (suffix: string) => ({
//       'box-sizing': suffix,
//     }),
//     meta: { group: 'boxSizing', order: 1 },
//   },
// ];

// export const DISPLAY_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'inline',
//     aliases: ['d-inline', 'inl'],
//     utility: { display: 'inline' },
//     meta: { group: 'display', order: 1 },
//   },
//   {
//     base: 'block',
//     aliases: ['d-block', 'blk'],
//     utility: { display: 'block' },
//     meta: { group: 'display', order: 2 },
//   },
//   {
//     base: 'inline-block',
//     aliases: ['d-inline-block', 'inl-blk'],
//     utility: { display: 'inline-block' },
//     meta: { group: 'display', order: 3 },
//   },
//   {
//     base: 'flow-root',
//     aliases: ['d-flow-root', 'flo-root'],
//     utility: { display: 'flow-root' },
//     meta: { group: 'display', order: 4 },
//   },
//   {
//     base: 'flex',
//     aliases: ['d-flex', 'flx'],
//     utility: { display: 'flex' },
//     meta: { group: 'display', order: 5 },
//   },
//   {
//     base: 'inline-flex',
//     aliases: ['d-inline-flex', 'inl-flx'],
//     utility: { display: 'inline-flex' },
//     meta: { group: 'display', order: 6 },
//   },
//   {
//     base: 'grid',
//     aliases: ['d-grid', 'grd'],
//     utility: { display: 'grid' },
//     meta: { group: 'display', order: 7 },
//   },
//   {
//     base: 'inline-grid',
//     aliases: ['d-inline-grid', 'inl-grd'],
//     utility: { display: 'inline-grid' },
//     meta: { group: 'display', order: 8 },
//   },
//   {
//     base: 'contents',
//     aliases: ['d-contents', 'cnts'],
//     utility: { display: 'contents' },
//     meta: { group: 'display', order: 9 },
//   },
//   {
//     base: 'table',
//     aliases: ['d-table', 'tbl'],
//     utility: { display: 'table' },
//     meta: { group: 'display', order: 10 },
//   },
//   {
//     base: 'inline-table',
//     aliases: ['d-inline-table', 'inl-tbl'],
//     utility: { display: 'inline-table' },
//     meta: { group: 'display', order: 11 },
//   },
//   {
//     base: 'table-caption',
//     aliases: ['d-table-caption', 'tbl-cptn'],
//     utility: { display: 'table-caption' },
//     meta: { group: 'display', order: 12 },
//   },
//   {
//     base: 'table-cell',
//     aliases: ['d-table-cell', 'tbl-cll'],
//     utility: { display: 'table-cell' },
//     meta: { group: 'display', order: 13 },
//   },
//   {
//     base: 'table-column',
//     aliases: ['d-table-column', 'tbl-col'],
//     utility: { display: 'table-column' },
//     meta: { group: 'display', order: 14 },
//   },
//   {
//     base: 'table-column-group',
//     aliases: ['d-table-column-group', 'tbl-col-grp'],
//     utility: { display: 'table-column-group' },
//     meta: { group: 'display', order: 15 },
//   },
//   {
//     base: 'table-footer-group',
//     aliases: ['d-table-footer-group', 'tbl-ftr-grp'],
//     utility: { display: 'table-footer-group' },
//     meta: { group: 'display', order: 16 },
//   },
//   {
//     base: 'table-header-group',
//     aliases: ['d-table-header-group', 'tbl-hdr-grp'],
//     utility: { display: 'table-header-group' },
//     meta: { group: 'display', order: 17 },
//   },
//   {
//     base: 'table-row-group',
//     aliases: ['d-table-row-group', 'tbl-row-grp'],
//     utility: { display: 'table-row-group' },
//     meta: { group: 'display', order: 18 },
//   },
//   {
//     base: 'table-row',
//     aliases: ['d-table-row', 'tbl-row'],
//     utility: { display: 'table-row' },
//     meta: { group: 'display', order: 19 },
//   },
//   {
//     base: 'list-item',
//     aliases: ['d-list-item', 'lst-itm'],
//     utility: { display: 'list-item' },
//     meta: { group: 'display', order: 20 },
//   },
//   {
//     base: 'hidden',
//     aliases: ['d-none', 'none'],
//     utility: { display: 'none' },
//     meta: { group: 'display', order: 21 },
//   },
//   {
//     base: 'sr-only',
//     aliases: ['sr-only'],
//     utility: {
//       position: 'absolute',
//       width: '1px',
//       height: '1px',
//       padding: '0',
//       margin: '-1px',
//       overflow: 'hidden',
//       clipPath: 'inset(50%)',
//       whiteSpace: 'nowrap',
//       borderWidth: 0,
//     },
//     meta: { group: 'display', order: 22 },
//   },
//   {
//     base: 'not-sr-only',
//     aliases: ['not-sr-only'],
//     utility: {
//       position: 'static',
//       width: 'auto',
//       height: 'auto',
//       padding: '0',
//       margin: '0',
//       overflow: 'visible',
//       clip: 'auto',
//       whiteSpace: 'normal'
//     },
//     meta: { group: 'display', order: 23 },
//   },
// ];

// export const FLOAT_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'float',
//     aliases: ['flt'],
//     suffixes: ['left', 'right', 'none', 'start', 'end'],
//     utility: (suffix: string) => {
//       const valueMap: Record<string, string> = {
//         'left': 'left',
//         'right': 'right',
//         'none': 'none',
//         'start': 'inline-start',
//         'end': 'inline-end',
//       };
//       const value = valueMap[suffix];
//       return {
//         'float': value,
//       };
//     },
//     meta: { group: 'float', order: 1 },
//   },
// ];

// export const CLEAR_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'clear',
//     aliases: ['clr'],
//     suffixes: ['left', 'right', 'both', 'start', 'end','none'],
//     utility: (suffix: string) => {
//       const valueMap: Record<string, string> = {
//         'left': 'left',
//         'right': 'right',
//         'both': 'both',
//         'start': 'inline-start',
//         'end': 'inline-end',
//         'none': 'none',
//       };
//       const value = valueMap[suffix];
//       return {
//         'clear': value,
//       };
//     },
//     meta: { group: 'clear', order: 1 },
//   },
// ];

// export const ISOLATION_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'isolate',
//     aliases: [],
//     utility: { isolation: 'isolate' },
//     meta: { group: 'isolation', order: 1 },
//   },
//   {
//     base: 'isolation-auto',
//     aliases: [],
//     utility: { isolation: 'auto' },
//     meta: { group: 'isolation', order: 2 },
//   },
// ];

// export const OBJECT_FIT_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'object',
//     aliases: ['obj'],
//     suffixes: ['contain', 'cover', 'fill', 'none', 'scale-down'],
//     utility: (suffix) => ({ 'object-fit': suffix }),
//     meta: { group: 'objectFit', order: 1 },
//   },
// ];

// export const OBJECT_POSITION_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'object',
//     aliases: ['obj-pos'],
//     suffixes: [
//       'bottom', 'center', 'left', 'left-bottom', 'left-top',
//       'right', 'right-bottom', 'right-top', 'top'
//     ],
//     utility: (suffix) => {
//       const positions: Record<string, string> = {
//         'bottom': 'bottom',
//         'center': 'center',
//         'left': 'left',
//         'left-bottom': 'left bottom',
//         'left-top': 'left top',
//         'right': 'right',
//         'right-bottom': 'right bottom',
//         'right-top': 'right top',
//         'top': 'top',
//       };
//       return { 'object-position': positions[suffix] };
//     },
//     meta: { group: 'objectPosition', order: 1 },
//   },
// ];

// const staticAspectRatioUtilities = generateFromTemplates(ASPECT_RATIO_CONFIGS);

// const staticBreakAfterUtilities = generateFromTemplates(BREAK_AFTER_TEMPLATES);

// const staticBreakBeforeUtilities = generateFromTemplates(BREAK_BEFORE_TEMPLATES);

// const staticBreakInsideUtilities = generateFromTemplates(BREAK_INSIDE_TEMPLATES);

// const staticBoxDecorationUtilities = generateFromTemplates(BOX_DECORATION_TEMPLATES);

// const staticBoxSizingUtilities = generateFromTemplates(BOX_SIZING_TEMPLATES);

// export const allStaticLayoutUtilities = combineUtilities(
//   staticAspectRatioUtilities,
//   staticBreakAfterUtilities,
//   staticBreakBeforeUtilities,
//   staticBreakInsideUtilities,
//   staticBoxDecorationUtilities,
//   staticBoxSizingUtilities,
// );