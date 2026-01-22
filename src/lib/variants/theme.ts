import { Style } from '../../utils/style';
import { DarkModeConfig } from '../../interfaces';

export function generateThemes(
  darkMode?: DarkModeConfig
): Record<string, () => Style> {
  if (!darkMode) return {};

  const media = (mode: 'dark' | 'light') =>
    new Style().atRule(`@media (prefers-color-scheme: ${mode})`);

  const parent = (mode: 'dark' | 'light') =>
    new Style().parent(`.${mode}`);

  const auto = (mode: 'dark' | 'light') =>
    darkMode === 'media' ? media(mode) : parent(mode);

  return {
    '@dark':  () => media('dark'),
    '@light': () => media('light'),
    '.dark':  () => parent('dark'),
    '.light': () => parent('light'),
    dark:     () => auto('dark'),
    light:    () => auto('light'),
  };
}
