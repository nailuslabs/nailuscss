import typescript from '@rollup/plugin-typescript';
import { createRequire } from 'module';
import path from 'path';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  external: Object.keys(pkg.dependencies || {}),
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
    }),
  ],
};