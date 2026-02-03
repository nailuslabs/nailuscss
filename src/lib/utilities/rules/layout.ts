import {
  generateFromTemplates,
  combineUtilities,
  UtilityTemplate
} from "../handlers/template-generator";

export const ASPECT_RATIO_CONFIGS: UtilityTemplate[] = [
  {
    base: 'aspect',
    aliases: ['asp', 'asp-r', 'ratio', 'aspect-ratio'],
    suffixes: ['auto', 'full'],
    utility: (suffix: string) => {
      const valueMap: Record<string, string> = {
        'auto': 'auto',
        'full': '100%',
      };
      return { 'aspect-ratio': valueMap[suffix] };
    },
    meta: {
      group: 'aspectRatio',
      order: 1,
    },
  },

  // Square - Instagram post, profile pictures, QR codes
  {
    base: 'aspect',
    aliases: ['asp', 'asp-r', 'ratio', 'aspect-ratio'],
    suffixes: ['square', '1/1', '1-1', '1x1', '1:1'],
    utility: () => ({ 'aspect-ratio': '1 / 1' }),
    meta: {
      group: 'aspectRatio',
      order: 2,
    },
  },

  // 16:9 - Standard HD Video, YouTube, HDTV, Full HD, most monitors
  {
    base: 'aspect',
    aliases: ['asp', 'asp-r', 'ratio', 'aspect-ratio'],
    suffixes: ['video', '16/9', '16-9', '16x9', '16:9', 'hdtv', 'youtube', 'hd', 'fhd', '1080p'],
    utility: () => ({ 'aspect-ratio': '16 / 9' }),
    meta: {
      group: 'aspectRatio',
      order: 3,
    },
  },

  // 21:9 - Ultrawide Cinema, Cinematic videos, ultrawide monitors (2.33:1)
  {
    base: 'aspect',
    aliases: ['asp', 'asp-r', 'ratio', 'aspect-ratio'],
    suffixes: ['cinema', '21/9', '21-9', '21x9', '21:9', 'ultrawide', 'cinematic', 'uw'],
    utility: () => ({ 'aspect-ratio': '21 / 9' }),
    meta: {
      group: 'aspectRatio',
      order: 4,
    },
  },

  // 9:16 - Portrait video - Instagram Stories, TikTok, Reels, Snapchat
  {
    base: 'aspect',
    aliases: ['asp', 'asp-r', 'ratio', 'aspect-ratio'],
    suffixes: ['portrait', '9/16', '9-16', '9x16', '9:16', 'story', 'vertical', 'stories'],
    utility: () => ({ 'aspect-ratio': '9 / 16' }),
    meta: {
      group: 'aspectRatio',
      order: 5,
    },
  },
];

export const BREAK_AFTER_CONFIGS: UtilityTemplate[] = [
  {
    base: 'break-after',
    aliases: ['bka'],
    suffixes: ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
    utility: (suffix: string) => ({
      'break-after': suffix,
    }),
    meta: { group: 'breakAfter', order: 1 },
  },
];
export const BREAK_BEFORE_CONFIGS: UtilityTemplate[] = [
  {
    base: 'break-before',
    aliases: ['bkb'],
    suffixes: ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
    utility: (suffix: string) => ({
      'break-before': suffix,
    }),
    meta: { group: 'breakBefore', order: 1 },
  },
];
export const BREAK_INSIDE_CONFIGS: UtilityTemplate[] = [
  {
    base: 'break-inside',
    aliases: ['bki'],
    suffixes: ['auto', 'avoid', 'avoid-page', 'avoid-column'],
    utility: (suffix: string) => ({
      'break-inside': suffix,
    }),
    meta: { group: 'breakInside', order: 1 },
  },
];
export const BOX_DECORATION_CONFIGS: UtilityTemplate[] = [
  {
    base: 'box-decoration',
    aliases: ['bxd'],
    suffixes: ['clone', 'slice'],
    utility: (suffix: string) => ({
      'box-decoration-break': suffix,
    }),
    meta: { group: 'boxDecoration', order: 1 },
  },
];
export const BOX_SIZING_CONFIGS: UtilityTemplate[] = [
  {
    base: 'box-sizing',
    aliases: ['bxs'],
    suffixes: ['content-box', 'border-box'],
    utility: (suffix: string) => ({
      'box-sizing': suffix,
    }),
    meta: { group: 'boxSizing', order: 1 },
  },
];
export const DISPLAY_CONFIGS: UtilityTemplate[] = [
  {
    base: 'inline',
    aliases: ['d-inline', 'inl'],
    utility: { display: 'inline' },
    meta: { group: 'display', order: 1 },
  },
  {
    base: 'block',
    aliases: ['d-block', 'blk'],
    utility: { display: 'block' },
    meta: { group: 'display', order: 2 },
  },
  {
    base: 'inline-block',
    aliases: ['d-inline-block', 'inl-blk'],
    utility: { display: 'inline-block' },
    meta: { group: 'display', order: 3 },
  },
  {
    base: 'flow-root',
    aliases: ['d-flow-root', 'flo-rot'],
    utility: { display: 'flow-root' },
    meta: { group: 'display', order: 4 },
  },
  {
    base: 'flex',
    aliases: ['d-flex', 'flx'],
    utility: { display: 'flex' },
    meta: { group: 'display', order: 5 },
  },
  {
    base: 'inline-flex',
    aliases: ['d-inline-flex', 'inl-flx'],
    utility: { display: 'inline-flex' },
    meta: { group: 'display', order: 6 },
  },
  {
    base: 'grid',
    aliases: ['d-grid', 'grd'],
    utility: { display: 'grid' },
    meta: { group: 'display', order: 7 },
  },
  {
    base: 'inline-grid',
    aliases: ['d-inline-grid', 'inl-grd'],
    utility: { display: 'inline-grid' },
    meta: { group: 'display', order: 8 },
  },
  {
    base: 'contents',
    aliases: ['d-contents', 'cnts'],
    utility: { display: 'contents' },
    meta: { group: 'display', order: 9 },
  },
  {
    base: 'table',
    aliases: ['d-table', 'tbl'],
    utility: { display: 'table' },
    meta: { group: 'display', order: 10 },
  },
  {
    base: 'inline-table',
    aliases: ['d-inline-table', 'inl-tbl'],
    utility: { display: 'inline-table' },
    meta: { group: 'display', order: 11 },
  },
  {
    base: 'table-caption',
    aliases: ['d-table-caption', 'tbl-cptn'],
    utility: { display: 'table-caption' },
    meta: { group: 'display', order: 12 },
  },
  {
    base: 'table-cell',
    aliases: ['d-table-cell', 'tbl-cll'],
    utility: { display: 'table-cell' },
    meta: { group: 'display', order: 13 },
  },
  {
    base: 'table-column',
    aliases: ['d-table-column', 'tbl-col'],
    utility: { display: 'table-column' },
    meta: { group: 'display', order: 14 },
  },
  {
    base: 'table-column-group',
    aliases: ['d-table-column-group', 'tbl-col-grp'],
    utility: { display: 'table-column-group' },
    meta: { group: 'display', order: 15 },
  },
  {
    base: 'table-footer-group',
    aliases: ['d-table-footer-group', 'tbl-ftr-grp'],
    utility: { display: 'table-footer-group' },
    meta: { group: 'display', order: 16 },
  },
  {
    base: 'table-header-group',
    aliases: ['d-table-header-group', 'tbl-hdr-grp'],
    utility: { display: 'table-header-group' },
    meta: { group: 'display', order: 17 },
  },
  {
    base: 'table-row-group',
    aliases: ['d-table-row-group', 'tbl-row-grp'],
    utility: { display: 'table-row-group' },
    meta: { group: 'display', order: 18 },
  },
  {
    base: 'table-row',
    aliases: ['d-table-row', 'tbl-row'],
    utility: { display: 'table-row' },
    meta: { group: 'display', order: 19 },
  },
  {
    base: 'list-item',
    aliases: ['d-list-item', 'lst-itm'],
    utility: { display: 'list-item' },
    meta: { group: 'display', order: 20 },
  },
  {
    base: 'hidden',
    aliases: ['d-none', 'none'],
    utility: { display: 'none' },
    meta: { group: 'display', order: 21 },
  },
  {
    base: 'sr-only',
    aliases: ['sr-only'],
    utility: {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: '0',
      margin: '-1px',
      overflow: 'hidden',
      clipPath: 'inset(50%)',
      whiteSpace: 'nowrap',
      borderWidth: 0,
    },
    meta: { group: 'display', order: 22 },
  },
  {
    base: 'not-sr-only',
    aliases: ['not-sr-only'],
    utility: {
      position: 'static',
      width: 'auto',
      height: 'auto',
      padding: '0',
      margin: '0',
      overflow: 'visible',
      clip: 'auto',
      whiteSpace: 'normal'
    },
    meta: { group: 'display', order: 23 },
  },
];
export const FLOAT_CONFIGS: UtilityTemplate[] = [
  {
    base: 'float',
    aliases: ['flt'],
    suffixes: [
      'l', 'r', 'n', 's', 'e',
      'left', 'right', 'none', 'start', 'end'
    ],
    utility: (suffix: string) => {
      const valueMap: Record<string, string> = {
        // short aliases
        'l': 'left', 'r': 'right', 'n': 'none', 's': 'inline-start', 'e': 'inline-end',

        // long aliases (backward compatible)
        'left': 'left', 'right': 'right', 'none': 'none', 'start': 'inline-start', 'end': 'inline-end',
      };
      const value = valueMap[suffix];
      return {
        'float': value,
      };
    },
    meta: { group: 'float', order: 1 },
  },
];
export const CLEAR_CONFIGS: UtilityTemplate[] = [
  {
    base: 'clear',
    aliases: ['clr'],
    suffixes: [
      'l', 'r', 'n', 'b', 's', 'e',
      'left', 'right', 'none', 'start', 'end'
    ],
    utility: (suffix: string) => {
      const valueMap: Record<string, string> = {
        // short aliases
        'l': 'left', 'r': 'right', 'n': 'none', 'b': 'both', 's': 'inline-start', 'e': 'inline-end',

        // long aliases (backward compatible)
        'left': 'left', 'right': 'right', 'none': 'none', 'both': 'both', 'start': 'inline-start', 'end': 'inline-end',
      };
      const value = valueMap[suffix];
      return {
        'clear': value,
      };
    },
    meta: { group: 'clear', order: 1 },
  },
];
export const ISOLATION_CONFIGS: UtilityTemplate[] = [
  {
    base: 'isolate',
    aliases: [],
    utility: { isolation: 'isolate' },
    meta: { group: 'isolation', order: 1 },
  },
  {
    base: 'isolation-auto',
    aliases: [],
    utility: { isolation: 'auto' },
    meta: { group: 'isolation', order: 2 },
  },
];
export const OBJECT_FIT_CONFIGS: UtilityTemplate[] = [
  {
    base: 'object',
    aliases: ['obj'],
    suffixes: ['contain', 'cover', 'fill', 'none', 'scale-down'],
    utility: (suffix) => ({ 'object-fit': suffix }),
    meta: { group: 'objectFit', order: 1 },
  },
];
export const OBJECT_POSITION_CONFIGS: UtilityTemplate[] = [
  {
    base: 'object',
    aliases: ['obj', 'obj-pos'],
    suffixes: [
      't', 'b', 'l', 'r', 'c',
      'lt', 'lb',
      'rt', 'rb',
      'top', 'bottom', 'left', 'right', 'center',
      'left-top', 'left-bottom',
      'right-top', 'right-bottom',
    ],
    utility: (suffix) => {
      const map: Record<string, string> = {
        // short aliases
        t: 'top', b: 'bottom', l: 'left', r: 'right', c: 'center',

        lt: 'left top', lb: 'left bottom', rt: 'right top',   rb: 'right bottom',

        // long aliases (backward compatible)
        top: 'top', bottom: 'bottom', left: 'left', right: 'right', center: 'center',

        'left-top': 'left top',
        'left-bottom': 'left bottom',
        'right-top': 'right top',
        'right-bottom': 'right bottom',
      };

      return { 'object-position': map[suffix] };
    },
    meta: { group: 'objectPosition', order: 1 },
  },
];
export const OVERFLOW_CONFIGS: UtilityTemplate[] = [
  {
    base: 'overflow',
    aliases: ['ovf'],
    suffixes: ['auto', 'hidden', 'clip', 'visible', 'scroll'],
    utility: (suffix) => ({ overflow: suffix }),
    meta: { group: 'overflow', order: 1 },
  },
  {
    base: 'overflow-x',
    aliases: ['ovf-x'],
    suffixes: ['auto', 'hidden', 'clip', 'visible', 'scroll'],
    utility: (suffix) => ({ 'overflow-x': suffix }),
    meta: { group: 'overflow', order: 2 },
  },
  {
    base: 'overflow-y',
    aliases: ['ovf-y'],
    suffixes: ['auto', 'hidden', 'clip', 'visible', 'scroll'],
    utility: (suffix) => ({ 'overflow-y': suffix }),
    meta: { group: 'overflow', order: 3 },
  },
];
export const OVERSCROLL_CONFIGS: UtilityTemplate[] = [
  {
    base: 'overscroll',
    aliases: ['ovs'],
    suffixes: ['auto', 'contain', 'none'],
    utility: (suffix) => ({ 'overscroll-behavior': suffix }),
    meta: { group: 'overscroll', order: 1 },
  },
  {
    base: 'overscroll-x',
    aliases: ['ovs-x'],
    suffixes: ['auto', 'contain', 'none'],
    utility: (suffix) => ({ 'overscroll-behavior-x': suffix }),
    meta: { group: 'overscroll', order: 2 },
  },
  {
    base: 'overscroll-y',
    aliases: ['ovs-y'],
    suffixes: ['auto', 'contain', 'none'],
    utility: (suffix) => ({ 'overscroll-behavior-y': suffix }),
    meta: { group: 'overscroll', order: 3 },
  },
];
export const POSITION_CONFIGS: UtilityTemplate[] = [
  {
    base: 'static',
    aliases: ['pos-static'],
    utility: { position: 'static' },
    meta: { group: 'position', order: 1 },
  },
  {
    base: 'fixed',
    aliases: ['pos-fixed'],
    utility: { position: 'fixed' },
    meta: { group: 'position', order: 2 },
  },
  {
    base: 'absolute',
    aliases: ['pos-absolute', 'abs'],
    utility: { position: 'absolute' },
    meta: { group: 'position', order: 3 },
  },
  {
    base: 'relative',
    aliases: ['pos-relative', 'rel'],
    utility: { position: 'relative' },
    meta: { group: 'position', order: 4 },
  },
  {
    base: 'sticky',
    aliases: ['pos-sticky'],
    utility: { position: 'sticky' },
    meta: { group: 'position', order: 5 },
  },
];
export const VISIBILITY_CONFIGS: UtilityTemplate[] = [
  {
    base: 'visible',
    aliases: ['vis-visible'],
    utility: { visibility: 'visible' },
    meta: { group: 'visibility', order: 1 },
  },
  {
    base: 'invisible',
    aliases: ['vis-hidden'],
    utility: { visibility: 'hidden' },
    meta: { group: 'visibility', order: 2 },
  },
  {
    base: 'collapse',
    aliases: ['vis-collapse'],
    utility: { visibility: 'collapse' },
    meta: { group: 'visibility', order: 3 },
  },
];
export const Z_INDEX_CONFIGS: UtilityTemplate[] = [
  {
    base: 'z',
    aliases: ['z-index'],
    suffixes: ['0', '10', '20', '30', '40', '50', 'auto'],
    utility: (suffix) => ({ 'z-index': suffix }),
    meta: { group: 'zIndex', order: 1 },
  },
];

const STATIC_ASPECT_RATIO_CONFIGS = generateFromTemplates(ASPECT_RATIO_CONFIGS);
const STATIC_BOX_DECORATION_CONFIGS = generateFromTemplates(BOX_DECORATION_CONFIGS);
const STATIC_BOX_SIZING_CONFIGS = generateFromTemplates(BOX_SIZING_CONFIGS);
const STATIC_BREAK_AFTER_CONFIGS = generateFromTemplates(BREAK_AFTER_CONFIGS);
const STATIC_BREAK_BEFORE_CONFIGS = generateFromTemplates(BREAK_BEFORE_CONFIGS);
const STATIC_BREAK_INSIDE_CONFIGS = generateFromTemplates(BREAK_INSIDE_CONFIGS);
const STATIC_DISPLAY_CONFIGS = generateFromTemplates(DISPLAY_CONFIGS);
const STATIC_FLOAT_CONFIGS = generateFromTemplates(FLOAT_CONFIGS);
const STATIC_CLEAR_CONFIGS = generateFromTemplates(CLEAR_CONFIGS);
const STATIC_ISOLATION_CONFIGS = generateFromTemplates(ISOLATION_CONFIGS);
const STATIC_OBJECT_FIT_CONFIGS = generateFromTemplates(OBJECT_FIT_CONFIGS);
const STATIC_OBJECT_POSITION_CONFIGS = generateFromTemplates(OBJECT_POSITION_CONFIGS);
const STATIC_OVERFLOW_CONFIGS = generateFromTemplates(OVERFLOW_CONFIGS);
const STATIC_OVERSCROLL_CONFIGS = generateFromTemplates(OVERSCROLL_CONFIGS);
const STATIC_POSITION_CONFIGS = generateFromTemplates(POSITION_CONFIGS);
const STATIC_VISIBILITY_CONFIGS = generateFromTemplates(VISIBILITY_CONFIGS);
const STATIC_Z_INDEX_CONFIGS = generateFromTemplates(Z_INDEX_CONFIGS);

export const allLayoutUtilityConfigs = combineUtilities(
  STATIC_ASPECT_RATIO_CONFIGS,
  STATIC_BOX_DECORATION_CONFIGS,
  STATIC_BOX_SIZING_CONFIGS,
  STATIC_BREAK_AFTER_CONFIGS,
  STATIC_BREAK_BEFORE_CONFIGS,
  STATIC_BREAK_INSIDE_CONFIGS,
  STATIC_CLEAR_CONFIGS,
  STATIC_DISPLAY_CONFIGS,
  STATIC_FLOAT_CONFIGS,
  STATIC_ISOLATION_CONFIGS,
  STATIC_OBJECT_FIT_CONFIGS,
  STATIC_OBJECT_POSITION_CONFIGS,
  STATIC_OVERFLOW_CONFIGS,
  STATIC_OVERSCROLL_CONFIGS,
  STATIC_POSITION_CONFIGS,
  STATIC_VISIBILITY_CONFIGS,
  STATIC_Z_INDEX_CONFIGS
);