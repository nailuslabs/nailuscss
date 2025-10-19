import fs from 'fs';
import path from 'path';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import sucrase from '@rollup/plugin-sucrase';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import pkg from './package.json' with { type: 'json' };

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

const copy = (files) => files.forEach((file) => fs.copyFileSync(file, dump(file)));

const rmdir = (dir) => {
  if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
};

const mkdir = (dir) =>
  !(fs.existsSync(dir) && fs.statSync(dir).isDirectory()) &&
  fs.mkdirSync(dir);

const pack = (dir) => ({
  writeBundle() {
    fs.writeFileSync(
      `${dump(dir)}/package.json`,
      JSON.stringify(
        {
          main: './index.js',
          module: './index.mjs',
          types: './index.d.ts',
        },
        null,
        '  '
      )
    );
  },
});

const types = (dest = 'index.d.ts', src = '../types/index', module = '*') => ({
  writeBundle() {
    fs.writeFileSync(dump(dest), `export ${module} from "${src}";`);
  },
});

export default [
  // MAIN
  {
    input: 'src/index.ts',
    output: [
      {
        file: dump('index.js'),
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
      rmdir(output_dir),
      mkdir(output_dir),
      copy(['package.json', 'README.md', 'LICENSE']),
      types('index.d.ts', './types/lib', '{ Processor as default }'),
    ],
  },

  // COLORS
  {
    input: 'src/colors.ts',
    output: [
      { file: dump('colors.js'), format: 'cjs', exports: 'default' },
      { file: dump('colors.mjs'), format: 'esm' },
    ],
    external: (id) => id.startsWith('./'),
    plugins: [ts_plugin, types('colors.d.ts', './types/config', '{ colors as default }')],
  },

  // DEFAULT CONFIG
  {
    input: 'src/defaultConfig.ts',
    output: [
      { file: dump('defaultConfig.js'), format: 'cjs', exports: 'default' },
      { file: dump('defaultConfig.mjs'), format: 'esm' },
    ],
    external: (id) => id.startsWith('./'),
    plugins: [ts_plugin, types('defaultConfig.d.ts', './types/defaultConfig', '{ default }')],
  },

  // DEFAULT THEME
  {
    input: 'src/defaultTheme.ts',
    output: [
      { file: dump('defaultTheme.js'), format: 'cjs', exports: 'default' },
      { file: dump('defaultTheme.mjs'), format: 'esm' },
    ],
    external: (id) => id.startsWith('./'),
    plugins: [ts_plugin, types('defaultTheme.d.ts', './types/defaultTheme', '{ default }')],
  },

  // RESOLVECONFIG
  {
    input: 'src/resolveConfig.ts',
    output: [
      { file: dump('resolveConfig.js'), format: 'cjs', exports: 'default' },
      { file: dump('resolveConfig.mjs'), format: 'esm' },
    ],
    external: (id) => id.startsWith('./'),
    plugins: [ts_plugin, types('resolveConfig.d.ts', './types/resolveConfig', '{ default }')],
  },

  // PLUGIN
  {
    input: 'src/plugin/index.ts',
    output: [
      { file: dump('plugin/index.js'), format: 'cjs', exports: 'default' },
      { file: dump('plugin/index.mjs'), format: 'esm' },
    ],
    plugins: [ts_plugin, resolve(), pack('plugin'), types('plugin/index.d.ts', '../types/plugin/index', '{ default }')],
  },

  // PLUGIN DEEP
  ...fs
    .readdirSync('src/plugin')
    .filter((dir) => fs.statSync(`src/plugin/${dir}`).isDirectory())
    .map((dir) => ({
      input: `src/plugin/${dir}/index.ts`,
      output: [{ file: dump(`plugin/${dir}/index.js`), format: 'cjs', exports: 'default' }],
      plugins: [
        ts_plugin,
        resolve(),
        commonjs(),
        types(`plugin/${dir}/index.d.ts`, `../../types/plugin/${dir}/index`, '{ default }'),
      ],
    })),

  // CLI avec 3 formats : .js, .mjs, .d.ts
  {
    input: 'src/cli/index.ts',
    output: [
      {
        file: dump('cli/index.js'),
        banner: '#!/usr/bin/env node',
        format: 'cjs',
        exports: 'auto',
      },
      {
        file: dump('cli/index.mjs'),
        banner: '#!/usr/bin/env node',
        format: 'esm',
      },
    ],
    onwarn: (warning) => {
      if (warning.code === 'CIRCULAR_DEPENDENCY') return;
    },
    external: (id) => id.match(/\/src\/(lib|utils|plugin|config|colors)/),
    plugins: [
      replace({
        preventAssignment: true,
        __NAME__: pkg.name,
        __VERSION__: pkg.version,
      }),
      ts_plugin,
      resolve(),
      commonjs(),
      pack('cli'), // crée package.json local pour CLI
      types('cli/index.d.ts', '../types/cli/index', '{ default }'),
    ],
  },

  // UTILS
  ...fs
    .readdirSync('src/')
    .filter((dir) => ['config', 'lib', 'utils', 'helpers'].includes(dir) && fs.statSync(`src/${dir}`).isDirectory())
    .map((dir) => ({
      input: `src/${dir}/index.ts`,
      output: [
        { file: dump(`${dir}/index.js`), format: 'cjs' },
        { file: dump(`${dir}/index.mjs`), format: 'esm' },
      ],
      plugins: [
        ts_plugin,
        json(),
        resolve(),
        commonjs(),
        pack(dir),
        types(`${dir}/index.d.ts`, `../types/${dir}/index`),
      ],
    })),

  // UTILS DEEP
  ...fs
    .readdirSync('src/utils')
    .filter((dir) => dir !== 'algorithm' && fs.statSync(`src/utils/${dir}`).isDirectory())
    .map((dir) => ({
      input: `src/utils/${dir}/index.ts`,
      output: [
        { file: dump(`utils/${dir}/index.js`), format: 'cjs' },
        { file: dump(`utils/${dir}/index.mjs`), format: 'esm' },
      ],
      plugins: [
        ts_plugin,
        json(),
        resolve(),
        commonjs(),
        pack(`utils/${dir}`),
        types(`utils/${dir}/index.d.ts`, `../../types/utils/${dir}/index`),
      ],
    })),
];
