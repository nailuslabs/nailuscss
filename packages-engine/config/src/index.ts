import type { NailusConfig } from '@nailuscss/core';
import { resolveConfig as coreResolveConfig, defaultConfig, defaultTheme } from '@nailuscss/core';

export type { NailusConfig };
export { defaultConfig, defaultTheme };

export function resolveConfig(config: NailusConfig = {}): NailusConfig {
  return coreResolveConfig(config);
}

export function mergeConfigs(...configs: NailusConfig[]): NailusConfig {
  return configs.reduce((acc, config) => ({
    ...acc,
    ...config,
    theme: {
      ...acc.theme,
      ...(config.theme || {}),
    },
  }), {} as NailusConfig);
}