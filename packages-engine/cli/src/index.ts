import { resolveConfig } from '@nailuscss/config';
import { generateCSS } from '@nailuscss/core';
import type { NailusConfig } from '@nailuscss/core';
import { cliStart } from './cli-start';

export async function run(config: NailusConfig): Promise<void> {
  const resolved = resolveConfig(config);
  const css = generateCSS(resolved);
  console.log(css);
}

export { cliStart };