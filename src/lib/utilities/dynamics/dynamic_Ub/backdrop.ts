import { Utility } from '../../handler';
import { pluginOrder } from '../../../../config/order';

import type { PluginUtils, Output } from '../../../../interfaces';
import { Property, Style } from '../../../../utils/style';

export function backdrop(utility: Utility, { theme }: PluginUtils): Output {
  utility = utility.clone(utility.raw.slice(9));
  const filterVars = [
    'var(--ns-backdrop-blur,)',
    'var(--ns-backdrop-brightness,)',
    'var(--ns-backdrop-contrast,)',
    'var(--ns-backdrop-grayscale,)',
    'var(--ns-backdrop-hue-rotate,)',
    'var(--ns-backdrop-invert,)',
    'var(--ns-backdrop-opacity,)',
    'var(--ns-backdrop-saturate,)',
    'var(--ns-backdrop-sepia,)',
  ].join(' ');

  const createBackdropStyle = (property: string, value: string, metaName: string, order: number) => {
    const s = new Style(utility.class, [
      new Property(property, value),
      new Property('-webkit-backdrop-filter', filterVars),
      new Property('backdrop-filter', filterVars),
    ]);
    return s.updateMeta('utilities', metaName, pluginOrder[metaName as keyof typeof pluginOrder], order, true);
  };

  switch (utility.match(/[^-]+/)) {
    case 'blur': {
      if (utility.raw === 'blur') utility.raw = 'blur-DEFAULT';
      const val = utility.handler
        .handleBody(theme('backdropBlur'))
        .handleSquareBrackets()
        .handleNumber(0, undefined, 'int', (number) => `${number}px`)
        .handleSize()
        .value;
      if (val)
        return createBackdropStyle('--ns-backdrop-blur', `blur(${val})`, 'backdropBlur', 1);
      break;
    }
    case 'brightness': {
      const val = utility.handler
        .handleBody(theme('backdropBrightness'))
        .handleSquareBrackets()
        .handleNumber(0, undefined, 'int', (number) => `${number / 100}`)
        .value;
      if (val)
        return createBackdropStyle('--ns-backdrop-brightness', `brightness(${val})`, 'backdropBrightness', 1);
      break;
    }
    case 'contrast': {
      const val = utility.handler
        .handleBody(theme('backdropContrast'))
        .handleSquareBrackets()
        .handleNumber(0, undefined, 'int', (number) => `${number / 100}`)
        .value;
      if (val)
        return createBackdropStyle('--ns-backdrop-contrast', `contrast(${val})`, 'backdropContrast', 1);
      break;
    }
    case 'grayscale': {
      if (utility.raw === 'grayscale') utility.raw = 'grayscale-DEFAULT';
      const val = utility.handler
        .handleBody(theme('backdropGrayscale'))
        .handleSquareBrackets()
        .handleNumber(0, 100, 'int', (number) => `${number / 100}`)
        .value;
      if (val)
        return createBackdropStyle('--ns-backdrop-grayscale', `grayscale(${val})`, 'backdropGrayscale', 1);
      break;
    }
    case 'hue': {
      const val = utility.handler
        .handleBody(theme('backdropHueRotate'))
        .handleSquareBrackets()
        .handleNumber(0, undefined, 'float', (number) => `${number}deg`)
        .handleNegative()
        .value;
      if (val)
        return createBackdropStyle('--ns-backdrop-hue-rotate', `hue-rotate(${val})`, 'backdropHueRotate', 1);
      break;
    }
    case 'invert': {
      if (utility.raw === 'invert') utility.raw = 'invert-DEFAULT';
      const val = utility.handler
        .handleBody(theme('backdropInvert'))
        .handleSquareBrackets()
        .handleNumber(0, 100, 'int', (number) => `${number / 100}`)
        .value;
      if (val)
        return createBackdropStyle('--ns-backdrop-invert', `invert(${val})`, 'backdropInvert', 1);
      break;
    }
    case 'opacity': {
      const val = utility.handler
        .handleBody(theme('backdropOpacity'))
        .handleSquareBrackets()
        .handleNumber(0, 100, 'int', (number) => `${number / 100}`)
        .value;
      if (val)
        return createBackdropStyle('--ns-backdrop-opacity', `opacity(${val})`, 'backdropOpacity', 1);
      break;
    }
    case 'saturate': {
      const val = utility.handler
        .handleBody(theme('backdropSaturate'))
        .handleSquareBrackets()
        .handleNumber(0, undefined, 'int', (number) => `${number / 100}`)
        .value;
      if (val)
        return createBackdropStyle('--ns-backdrop-saturate', `saturate(${val})`, 'backdropSaturate', 1);
      break;
    }
    case 'sepia': {
      if (utility.raw === 'sepia') utility.raw = 'sepia-DEFAULT';
      const val = utility.handler
        .handleBody(theme('backdropSepia'))
        .handleSquareBrackets()
        .handleNumber(0, 100, 'int', (number) => `${number / 100}`)
        .value;
      if (val)
        return createBackdropStyle('--ns-backdrop-sepia', `sepia(${val})`, 'backdropSepia', 1);
      break;
    }
    case 'filter': {
      // .backdrop-filter utility: only outputs the filter properties
      // Only match exact `backdrop-filter` (no arbitrary values like backdrop-filter-[...])
      if (utility.raw !== 'filter') return;
      const s = new Style(utility.class, [
        new Property('-webkit-backdrop-filter', filterVars),
        new Property('backdrop-filter', filterVars),
      ]);
      return s.updateMeta('utilities', 'backdropFilter', pluginOrder['backdropFilter' as keyof typeof pluginOrder], 1, true);
    }
  }
  return undefined;
}
