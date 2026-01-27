// Migrer depuis src/interfaces.ts
export interface NailusConfig {
  theme?: Record<string, any>;
  rules?: any[];
  variants?: any[];
  presets?: any[];
  safelist?: string[];
  blocklist?: string[];
  extractors?: any[];
  transformers?: any[];
  postprocess?: any[];
}

export interface NailusTheme {
  colors?: Record<string, string>;
  spacing?: Record<string, string>;
  fontSize?: Record<string, string>;
  fontWeight?: Record<string, string>;
  [key: string]: any;
}

export type RuleContext = {
  theme: NailusTheme;
  config: NailusConfig;
  e: (str: string) => string;
};