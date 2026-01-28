// src/cli/types.ts

import type { Processor } from '../../../lib';
import type { StyleSheet } from '../../../utils/style';

export interface CLIArgs {
  '--help'?: boolean;
  '--version'?: boolean;
  '--compile'?: boolean;
  '--interpret'?: boolean;
  '--attributify'?: boolean;
  '--preflight'?: boolean;
  '--combine'?: boolean;
  '--separate'?: boolean;
  '--dev'?: boolean;
  '--minify'?: boolean;
  '--fuzzy'?: boolean;
  '--style'?: boolean;
  '--init'?: string;
  '--prefix'?: string;
  '--output'?: string;
  '--config'?: string;
  _: string[];
}

export interface CLIConfig {
  configFile?: string;
  preflights: { [key: string]: StyleSheet };
  styleSheets: { [key: string]: StyleSheet };
  processor: Processor;
  safelist: unknown;
  patterns: string[];
  matchFiles: string[];
}

export interface TemplateResult {
  html: string;
  css: string;
}

export interface WatcherCallbacks {
  onFileChange: (file: string) => void;
  onFileRename: (oldFile: string, newFile: string) => void;
  onFileDelete: (file: string) => void;
  onFileCreate: (file: string) => void;
  onConfigChange: () => Promise<void>;
}