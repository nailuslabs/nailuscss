import { addHook } from 'pirates';
import { createRequire } from 'module';

export function convert(code: string): string {
  const map = {
    '@tailwindcss\\/typography': 'nailuscss/plugin/typography',
    '@tailwindcss\\/forms': 'nailuscss/plugin/forms',
    '@tailwindcss\\/aspect-ratio': 'nailuscss/plugin/aspect-ratio',
    '@tailwindcss\\/line-clamp': 'nailuscss/plugin/line-clamp',
    'tailwindcss\\/plugin': 'nailuscss/plugin',
    'tailwindcss\\/colors': 'nailuscss/colors',
    'tailwindcss\\/resolveConfig': 'nailuscss/resolveConfig',
    'tailwindcss\\/defaultConfig': 'nailuscss/defaultConfig',
    'tailwindcss\\/defaultTheme': 'nailuscss/defaultTheme',
  };
  for (const [key, value] of Object.entries(map)) {
    code = code.replace(new RegExp(key, 'g'), value);
  }
  return code;
}

export function transform(path: string): any {
  const require = createRequire(import.meta.url);
  const matcher = (filename: string) => !/\/nailuscss\//.test(filename);
  const revert = addHook(
    (code, ) => convert(code),
    { exts: ['.js'], matcher, ignoreNodeModules: false }
  );
  const mod = require(path);
  revert();
  return mod;
}
