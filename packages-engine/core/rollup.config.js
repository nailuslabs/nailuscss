import fs from 'fs';
import path from 'path';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import sucrase from '@rollup/plugin-sucrase';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

const output_dir = './dist';
const prod = process.env.NODE_ENV === 'production';

const ts_plugin = prod
  ? typescript({
    target: 'es5',
    include: 'src/**',
    outDir: output_dir,
    typescript: require('typescript'),
  })
  : sucrase({
    exclude: ['node_modules/**'],
    transforms: ['typescript'],
  });

const dump = (file) => path.join(output_dir, file);
const pack = (dir) => {
  return {
    writeBundle() {
      fs.writeFileSync(
        `${dump(dir)}/package.json`,
        JSON.stringify(
          {
            main: './index.cjs',
            module: './index.mjs',
            types: './index.d.ts',
          },
          null,
          '  '
        )
      );
    },
  };
};

export default [
  // main index
  {
    input: 'src/index.ts',
    output: [
      {
        file: dump('index.cjs'),
        format: 'cjs',
        exports: 'default',
      },
      {
        file: dump('index.mjs'),
        format: 'esm',
      },
    ],
    external: (id) => id.startsWith('./'),
    plugins: [
      ts_plugin,
      json(),
      resolve(),
      commonjs(),
    ],
  },

  // config
  {
    input: 'src/config/index.ts',
    output: [
      {
        file: dump('config/index.cjs'),
        format: 'cjs',
      },
      {
        file: dump('config/index.mjs'),
        format: 'esm',
      },
    ],
    external: (id) => id.startsWith('./') || id.startsWith('@nailuscss'),
    plugins: [
      ts_plugin,
      json(),
      resolve(),
      commonjs(),
      pack('config'),
    ],
  },

  // lib
  {
    input: 'src/lib/index.ts',
    output: [
      {
        file: dump('lib/index.cjs'),
        format: 'cjs',
      },
      {
        file: dump('lib/index.mjs'),
        format: 'esm',
      },
    ],
    external: (id) => id.startsWith('./') || id.startsWith('@nailuscss'),
    plugins: [
      ts_plugin,
      json(),
      resolve(),
      commonjs(),
      pack('lib'),
    ],
  },

  // utils
  {
    input: 'src/utils/index.ts',
    output: [
      {
        file: dump('utils/index.cjs'),
        format: 'cjs',
      },
      {
        file: dump('utils/index.mjs'),
        format: 'esm',
      },
    ],
    external: (id) => id.startsWith('./') || id.startsWith('@nailuscss'),
    plugins: [
      ts_plugin,
      json(),
      resolve(),
      commonjs(),
      pack('utils'),
    ],
  },
];