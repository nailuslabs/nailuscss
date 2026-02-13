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
const core_src = './packages-engine/core/src';
const cli_src = './packages-engine/cli/src';
const config_src = './packages-engine/config/src';
const autocomplete_src = './packages-engine/autocomplete/src';
const preset_src = './packages-presets/preset-nailus/src';
const plugin_src = `${core_src}/utils/plugin`;
const prod = process.env.NODE_ENV === 'production';

const ts_plugin = prod
  ? typescript({
    target: 'es5',
    include: [ `${core_src}/**`, `${cli_src}/**`, `${config_src}/**`, `${autocomplete_src}/**`, `${preset_src}/**` ],
    outDir: output_dir,
    typescript: require('typescript'),
  })
  : sucrase({
    exclude: ['node_modules/**'],
    transforms: ['typescript'],
  });

const dump = (file) => path.join(output_dir, file);

const copy = (files) => files.forEach((file) => fs.copyFileSync(file, dump(file)));

const rmdir = (dir) => fs.existsSync(dir) && fs.statSync(dir).isDirectory() && fs.rmdirSync(dir, { recursive: true });

const mkdir = (dir) => !(fs.existsSync(dir) && fs.statSync(dir).isDirectory()) && fs.mkdirSync(dir);

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

const types = (dest = "index.d.ts", src = "../types/index", module = "*") => {
  return {
    writeBundle() {
      fs.writeFileSync(dump(dest), `export ${module} from "${src}";`);
    },
  };
};

export default [
  // main
  {
    input: `${core_src}/index.ts`,
    output: [
      {
        file: dump('index.cjs'),
        format: 'cjs',
        exports: 'named',
        paths: (id) => `./${path.relative(core_src, id)}/index.cjs`,
      },
      {
        file: dump('index.mjs'),
        format: 'esm',
        paths: (id) => `./${path.relative(core_src, id)}/index.mjs`,
      },
    ],
    external: (id) =>
      id.startsWith('./') ||
      id.startsWith('@nailuscss/preset-nailus') ||
      id.startsWith('@nailuscss/config'),
    plugins: [
      ts_plugin,
      rmdir(output_dir),
      mkdir(output_dir),
      copy(['package.json', 'README.md', 'LICENSE']),
      types("index.d.ts", "./types/lib", "{ Processor as default }"),
    ],
  },

  // colors
  {
    input: `${core_src}/colors.ts`,
    output: [
      {
        file: dump('colors.cjs'),
        format: 'cjs',
        exports: 'default',
        paths: (id) => `./${path.relative(core_src, id)}/index.cjs`,
      },
      {
        file: dump('colors.mjs'),
        format: 'esm',
        paths: (id) => `./${path.relative(core_src, id)}/index.mjs`,
      },
    ],
    external: (id) => id.startsWith('./'),
    plugins: [
      ts_plugin,
      types("colors.d.ts", "./types/config", "{ colors as default }"),
    ],
  },

  // config (package)
  {
    input: `${config_src}/index.ts`,
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
    plugins: [
      ts_plugin,
      json(),
      resolve(),
      commonjs(),
      pack('config'),
      types(`config/index.d.ts`, `../types/config/index`),
    ],
  },

  // autocomplete (package)
  {
    input: `${autocomplete_src}/index.ts`,
    output: [
      {
        file: dump('autocomplete/index.cjs'),
        format: 'cjs',
      },
      {
        file: dump('autocomplete/index.mjs'),
        format: 'esm',
      },
    ],
    external: (id) => id.startsWith('@nailuscss/core'),
    plugins: [
      ts_plugin,
      resolve(),
      commonjs(),
      pack('autocomplete'),
      types(`autocomplete/index.d.ts`, `../types/autocomplete/index`),
    ],
  },

  // preset-nailus (package)
  {
    input: `${preset_src}/index.ts`,
    output: [
      {
        file: dump('preset-nailus/index.cjs'),
        format: 'cjs',
      },
      {
        file: dump('preset-nailus/index.mjs'),
        format: 'esm',
      },
    ],
    external: (id) =>
      id.startsWith('@nailuscss/core') ||
      id.startsWith('@nailuscss/config'),
    plugins: [
      ts_plugin,
      resolve(),
      commonjs(),
      pack('preset-nailus'),
      types(`preset-nailus/index.d.ts`, `../types/preset-nailus/index`),
    ],
  },

  // defaultConfig
  {
    input: `${core_src}/defaultConfig.ts`,
    output: [
      {
        file: dump('defaultConfig.cjs'),
        format: 'cjs',
        exports: 'default',
        paths: (id) => `./${path.relative(core_src, id)}/index.cjs`,
      },
      {
        file: dump('defaultConfig.mjs'),
        format: 'esm',
        paths: (id) => `./${path.relative(core_src, id)}/index.mjs`,
      },
    ],
    external: (id) => id.startsWith('./'),
    plugins: [
      ts_plugin,
      types("defaultConfig.d.ts", "./types/defaultConfig", "{ default }")
    ],
  },

  // defaultTheme
  {
    input: `${core_src}/defaultTheme.ts`,
    output: [
      {
        file: dump('defaultTheme.cjs'),
        format: 'cjs',
        exports: 'default',
        paths: (id) => `./${path.relative(core_src, id)}/index.cjs`,
      },
      {
        file: dump('defaultTheme.mjs'),
        format: 'esm',
        paths: (id) => `./${path.relative(core_src, id)}/index.mjs`,
      },
    ],
    external: (id) => id.startsWith('./'),
    plugins: [
      ts_plugin,
      types("defaultTheme.d.ts", "./types/defaultTheme", "{ default }")
    ],
  },

  // resolveConfig
  {
    input: `${core_src}/resolveConfig.ts`,
    output: [
      {
        file: dump('resolveConfig.cjs'),
        format: 'cjs',
        exports: 'default',
        paths: (id) => `./${path.relative(core_src, id)}/index.cjs`,
      },
      {
        file: dump('resolveConfig.mjs'),
        format: 'esm',
        paths: (id) => `./${path.relative(core_src, id)}/index.mjs`,
      },
    ],
    external: (id) => id.startsWith('./'),
    plugins: [
      ts_plugin,
      types("resolveConfig.d.ts", "./types/resolveConfig", "{ default }")
    ],
  },

  // plugin
  {
    input: `${plugin_src}/index.ts`,
    output: [
      {
        file: dump('plugin/index.cjs'),
        exports: 'default',
        format: 'cjs',
      },
      {
        file: dump('plugin/index.mjs'),
        format: 'esm',
      },
    ],
    external: (id) => id.startsWith('@nailuscss/preset-nailus'),
    plugins: [
      ts_plugin,
      resolve(),
      pack('plugin'),
      types(`plugin/index.d.ts`, `../types/plugin/index`, "{ default }"),
    ],
  },

  // plugin deep
  ...fs.readdirSync(plugin_src).filter(dir => fs.statSync(`${plugin_src}/${dir}`).isDirectory())
    .map((dir) => ({
      input: `${plugin_src}/${dir}/index.ts`,
      output: [
        {
          file: dump(`plugin/${dir}/index.cjs`),
          exports: 'default',
          format: 'cjs',
        },
        {
          file: dump(`plugin/${dir}/index.mjs`),
          exports: 'default',
          format: 'esm',
        },
      ],
      external: (id) => id.startsWith('@nailuscss/preset-nailus'),
      plugins: [
        ts_plugin,
        resolve(),
        commonjs(),
        types(`plugin/${dir}/index.d.ts`, `../../types/plugin/${dir}/index`, "{ default }"),
      ],
    })),

  // cli - CHEMIN CORRIGÉ
  {
    input: `${cli_src}/index.ts`,
    output: [
      {
        file: dump('cli/index.mjs'),
        banner: '#!/usr/bin/env node',
        format: 'esm',
        paths: (id) => {
          if (id.match(/\/packages-engine\/config\/src/)) return '../config/index.mjs';
          if (id.match(/\/packages-engine\/core\/src\/(lib|utils|plugin|colors)/))
            return `../${path.dirname(path.relative(core_src, id))}/index.mjs`;
          return undefined;
        },
      },
    ],
    onwarn: (warning) => {
      if (warning.code === 'CIRCULAR_DEPENDENCY') return;
    },
    external: (id) =>
      id.match(/\/packages-engine\/core\/src\/(lib|utils|plugin|colors)/) ||
      id.match(/\/packages-engine\/config\/src/) ||
      id.startsWith('@nailuscss/preset-nailus') ||
      id.match(/@nailuscss\/core/),
    plugins: [
      replace({
        preventAssignment: true,
        __NAME__: pkg.name,
        __VERSION__: pkg.version,
      }),
      ts_plugin,
      resolve(),
      commonjs(),
    ],
  },

  // utils
  ...fs.readdirSync(core_src).filter((dir) => ['lib', 'utils', 'helpers'].includes(dir) && fs.statSync(`${core_src}/${dir}`).isDirectory())
    .map((dir) => ({
      input: `${core_src}/${dir}/index.ts`,
      output: [
        {
          file: dump(`${dir}/index.cjs`),
          format: 'cjs',
        },
        {
          file: dump(`${dir}/index.mjs`),
          format: 'esm',
        },
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

  // utils deep
  ...fs
    .readdirSync(`${core_src}/utils`)
    .filter(
      (dir) =>
        dir !== 'algorithm' &&
        dir !== 'plugin' &&
        fs.statSync(`${core_src}/utils/${dir}`).isDirectory()
    )
    .map((dir) => ({
      input: `${core_src}/utils/${dir}/index.ts`,
      output: [
        {
          file: dump(`utils/${dir}/index.cjs`),
          format: 'cjs',
        },
        {
          file: dump(`utils/${dir}/index.mjs`),
          format: 'esm',
        },
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
