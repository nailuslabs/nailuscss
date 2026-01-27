import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

const prod = process.env.NODE_ENV === 'production';

export default {
  input: 'src/index.ts',
  output: {
    file: pkg.main,
    format: 'esm',
    banner: '#!/usr/bin/env node',
  },
  external: Object.keys(pkg.dependencies || {}),
  plugins: [
    replace({
      preventAssignment: true,
      __VERSION__: pkg.version,
    }),
    typescript({
      tsconfig: './tsconfig.json',
      target: prod ? 'es5' : 'es2024',
    }),
    resolve(),
    commonjs(),
  ],
};