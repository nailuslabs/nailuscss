import typescript from '@rollup/plugin-typescript';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

export default {
  input: 'src/index.ts',
  output: {
    file: pkg.main,
    format: 'es',
    sourcemap: true,
  },
  external: [...Object.keys(pkg.dependencies || {}), '@nailuscss/core', '@nailuscss/config'],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
    }),
  ],
};