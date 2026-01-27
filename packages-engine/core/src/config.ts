// Migrer depuis src/defaultConfig.ts et src/defaultTheme.ts
import type { NailusConfig, NailusTheme } from './types';

export const defaultTheme: NailusTheme = {
  colors: {
    inherit: 'inherit',
    current: 'currentColor',
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
  },
  spacing: {
    0: '0px',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    6: '1.5rem',
    8: '2rem',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
  },
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
};

export const defaultConfig: NailusConfig = {
  theme: defaultTheme,
  rules: [],
  variants: [],
  presets: [],
  safelist: [],
  blocklist: [],
  extractors: [],
  transformers: [],
  postprocess: [],
};

export function resolveConfig(config: NailusConfig = {}): NailusConfig {
  return {
    ...defaultConfig,
    ...config,
    theme: {
      ...defaultTheme,
      ...(config.theme || {}),
    },
  };
}