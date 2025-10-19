// nailuscss/src/cli/index.ts

import arg from 'arg';
import { deepCopy, Console } from '../utils/tools';
import { resolve, dirname, join, extname } from 'path';
import { Processor } from '../lib';
import { mkdirSync, readFileSync, writeFile, watch, unwatchFile, existsSync } from 'fs';
import { HTMLParser, CSSParser } from '../utils/parser';
import { StyleSheet } from '../utils/style';
import {
  getVersion,
  globArray,
  generateTemplate,
  fuzzy,
} from './utils';
import type { Extractor } from '../interfaces';

const doc = `Generate css from text files that containing nailus classes.
By default, it will use interpretation mode to generate a single css file.

Usage:
  nailuscss [filenames]
  nailuscss [filenames] -c -m -d
  nailuscss [filenames] -c -s -m -d
  nailuscss [filenames] [-c | -i] [-a] [-b | -s] [-m] [-d] [-p <prefix:string>] [-o <path:string>] [--args arguments]

Options:
  -h, --help            Print this help message and exit.
  -v, --version         Print nailuscss current version and exit.

  -i, --interpret       Interpretation mode, generate class selectors. This is the default behavior.
  -c, --compile         Compilation mode, combine the class name in each row into a single class.
  -a, --attributify     Attributify mode, generate attribute selectors. Attributify mode can be mixed with the other two modes.
  -t, --preflight       Add preflights, default is false.

  -b, --combine         Combine all css into one single file. This is the default behavior.
  -s, --separate        Generate a separate css file for each input file.

  -d, --dev             Enable hot reload and watch mode.
  -m, --minify          Generate minimized css file.
  -z, --fuzzy           Enable fuzzy match, only works in interpration mode.
  -p, --prefix PREFIX   Set the css class name prefix, only valid in compilation mode. The default prefix is 'nailus-'.
  -o, --output PATH     Set output css file path.
  -f, --config PATH     Set config file path.

  --style               Parse and transform nailus style block.
  --init PATH           Start a new project on the path.
`;

// Fonction pour charger la configuration avec support ESM et CommonJS
async function loadConfig(configPath: string): Promise<any> {
  if (!existsSync(configPath)) {
    return undefined;
  }

  try {
    // Essayer d'abord avec require (CommonJS)
    const config = require(configPath);

    // Gérer les deux syntaxes
    if (config && typeof config === 'object') {
      // Cas CommonJS: module.exports = { ... }
      if (!config.__esModule) {
        return config;
      }
      // Cas ESM avec interop: export default { ... }
      if (config.default) {
        return config.default;
      }
    }

    return config;
  } catch (error) {
    // Si require échoue (fichier ESM pur), utiliser import dynamique
    try {
      const config = await import(configPath);

      // Gérer les exports ESM
      if (config && typeof config === 'object') {
        // export default
        if (config.default) {
          return config.default;
        }
        // export nommés
        return config;
      }

      return config;
    } catch (importError) {
      Console.error(`Error loading config file ${configPath}:`, importError);
      return undefined;
    }
  }
}

const args = arg({
  // Types
  '--help': Boolean,
  '--version': Boolean,
  '--compile': Boolean,
  '--interpret': Boolean,
  '--attributify': Boolean,
  '--preflight': Boolean,
  '--combine': Boolean,
  '--separate': Boolean,
  '--dev': Boolean,
  '--minify': Boolean,
  '--fuzzy': Boolean,
  '--style': Boolean,
  '--init': String,
  '--prefix': String,
  '--output': String,
  '--config': String,

  // Aliases
  '-h': '--help',
  '-v': '--version',
  '-i': '--interpret',
  '-c': '--compile',
  '-a': '--attributify',
  '-t': '--preflight',
  '-b': '--combine',
  '-s': '--separate',
  '-d': '--dev',
  '-m': '--minify',
  '-p': '--prefix',
  '-o': '--output',
  '-f': '--config',
  '-z': '--fuzzy',
});

if (args['--help'] || (args._.length === 0 && Object.keys(args).length === 1)) {
  Console.log(doc);
  process.exit();
}

if (args['--version']) {
  Console.log(getVersion());
  process.exit();
}

if (args['--init']) {
  const template = generateTemplate(args['--init'], args['--output']);
  args._.push(template.html);
  args['--preflight'] = true;
  args['--output'] = template.css;
}

const configFile = args['--config'] ? resolve(args['--config']) : undefined;
let preflights: { [key:string]: StyleSheet } = {};
let styleSheets: { [key:string]: StyleSheet } = {};
let processor: Processor;
let safelist: unknown;

// Fonction asynchrone pour initialiser le processeur avec la configuration
async function initializeProcessor() {
  let config;
  if (configFile) {
    Console.log('Config file:', configFile);
    config = await loadConfig(configFile);
  }

  processor = new Processor(config);
  safelist = processor.config('safelist');
}

function compile(files: string[]) {
  // compilation mode
  const prefix = args['--prefix'] ?? 'nailus-';
  files.forEach((file) => {
    let indexStart = 0;
    const outputStyle: StyleSheet[] = [];
    const outputHTML: string[] = [];
    const html = readFileSync(file).toString();
    const parser = new HTMLParser(html);

    // Match ClassName then replace with new ClassName
    parser.parseClasses().forEach((p) => {
      outputHTML.push(html.substring(indexStart, p.start));
      const utility = processor.compile(p.result, prefix, true, args['--dev']); // Set third argument to false to hide comments;
      outputStyle.push(utility.styleSheet);
      outputHTML.push([utility.className, ...utility.ignored].join(' '));
      indexStart = p.end;
    });
    outputHTML.push(html.substring(indexStart));
    const added = (
      outputStyle.reduce(
        (previousValue: StyleSheet, currentValue: StyleSheet) =>
          previousValue.extend(currentValue),
        new StyleSheet()
      )
    );
    styleSheets[file] = args['--dev'] ? (styleSheets[file]? styleSheets[file].extend(added) : added) : added;

    const outputFile = file.replace(/(?=\.\w+$)/, '.nailus');
    writeFile(outputFile, outputHTML.join(''), () => null);
    Console.log(`${file} -> ${outputFile}`);
    if (args['--preflight']) {
      if (args['--dev']) {
        const preflight = processor.preflight(html, true, true, true, true);
        preflights[file] = preflights[file] ? preflights[file].extend(preflight) : preflight;
      } else {
        preflights[file] = processor.preflight(html);
      }
    }
  });
}

function interpret(files: string[]) {
  // interpretation mode
  files.forEach((file) => {
    const content = readFileSync(file).toString();
    let classes: string[] = [];
    if (args['--fuzzy']) {
      classes = fuzzy(content);
    } else {
      const parser = new HTMLParser(content);
      classes = parser.parseClasses().map((i) => i.result);
    }
    const extractors = processor.config('extract.extractors') as Extractor[] | undefined;
    if (extractors) {
      for (const { extractor, extensions } of extractors) {
        if (extensions.includes(extname(file).slice(1))) {
          const result = extractor(content);
          if ('classes' in result && result.classes) {
            classes = [...classes, ...result.classes];
          }
        }
      }
    }
    if (args['--dev']) {
      const utility = processor.interpret(classes.join(' '), true);
      styleSheets[file] = styleSheets[file] ? styleSheets[file].extend(utility.styleSheet) : utility.styleSheet;
      if (args['--preflight']) {
        const preflight = processor.preflight(content, true, true, true, true);
        preflights[file] = preflights[file] ? preflights[file].extend(preflight) : preflight;
      }
    } else {
      const utility = processor.interpret(classes.join(' '));
      styleSheets[file] = utility.styleSheet;
      if (args['--preflight']) preflights[file] = processor.preflight(content);
    }
  });
}

function attributify(files: string[]) {
  // attributify mode
  files.forEach((file) => {
    const parser = new HTMLParser(readFileSync(file).toString());
    const attrs: { [key: string]: string | string[] } = parser
      .parseAttrs()
      .reduceRight((a: { [key: string]: string | string[] }, b) => {
        if (b.key === 'class' || b.key === 'className') return a;
        if (b.key in a) {
          a[b.key] = Array.isArray(a[b.key])
            ? Array.isArray(b.value)? [ ...(a[b.key] as string[]), ...b.value ]: [ ...(a[b.key] as string[]), b.value ]
            : [ a[b.key] as string, ...(Array.isArray(b.value) ? b.value : [b.value]) ];
          return a;
        }
        return Object.assign(a, { [b.key]: b.value });
      }, {});
    if (args['--dev']) {
      const utility = processor.attributify(attrs, true);
      styleSheets[file] = styleSheets[file] ? styleSheets[file].extend(utility.styleSheet) : utility.styleSheet;
    } else {
      const utility = processor.attributify(attrs);
      styleSheets[file] = utility.styleSheet;
    }
  });
}

function styleBlock(files: string[]) {
  files.forEach((file) => {
    const content = readFileSync(file).toString();
    const block = content.match(/(?<=<style[\r\n]*\s*lang\s?=\s?['"]nailus["']>)[\s\S]*(?=<\/style>)/);
    if (block && block.index) {
      const css = content.slice(block.index, block.index + block[0].length);
      const parser = new CSSParser(css, processor);
      styleSheets[file] = styleSheets[file].extend(parser.parse());
    }
  });
}

function build(files: string[], update = false) {
  if (args['--compile']) {
    compile(files);
  } else {
    interpret(files);
  }
  if (args['--attributify']) attributify(files);
  if (args['--style']) styleBlock(files);
  if (args['--separate']) {
    for (const [file, sheet] of Object.entries(styleSheets)) {
      const outfile = file.replace(/\.\w+$/, '.nailus.css');
      writeFile(outfile, (args['--preflight'] ? deepCopy(sheet).extend(preflights[file], false) : sheet).build(args['--minify']), () => null);
      Console.log(`${file} -> ${outfile}`);
    }
  } else {
    let outputStyle = Object.values(styleSheets)
      .reduce(
        (previousValue: StyleSheet, currentValue: StyleSheet) =>
          previousValue.extend(currentValue),
        new StyleSheet()
      )
      .sort()
      .combine();
    if (args['--preflight'])
      outputStyle = Object.values(preflights)
        .reduce(
          (previousValue: StyleSheet, currentValue: StyleSheet) =>
            previousValue.extend(currentValue),
          new StyleSheet()
        )
        .sort()
        .combine()
        .extend(outputStyle);
    const filePath = args['--output'] ?? 'nailus.css';
    const dir = dirname(filePath);
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    writeFile(filePath, outputStyle.build(args['--minify']), () => null);
    if (!update) {
      Console.log('Matched files:', files);
      Console.log('Output file:', resolve(filePath));
    }
  }
}

function buildSafeList(safelist: unknown) {
  if (safelist) {
    let classes: string[] = [];
    if (typeof safelist === 'string') {
      classes = safelist.split(/\s/).filter(i => i);
    }
    if (Array.isArray(safelist)) {
      for (const item of safelist) {
        if (typeof item === 'string') {
          classes.push(item);
        } else if (Array.isArray(item)) {
          classes = classes.concat(item);
        }
      }
    }
    styleSheets['safelist'] = processor.interpret(classes.join(' ')).styleSheet;
  }
}

async function main() {
  await initializeProcessor();

  const patterns = args._
    .concat(processor.config('extract.include', []) as string[])
    .concat((processor.config('extract.exclude', []) as string[]).map(i => '!' + i));

  let matchFiles = globArray(patterns);

  if (matchFiles.length === 0) {
    Console.error('No files were matched!');
    process.exit();
  }

  buildSafeList(safelist);
  build(matchFiles);

  function watchBuild(file: string) {
    watch(file, (event, path) => {
      if (event === 'rename') {
        const newFiles = globArray(patterns);
        const renamed = matchFiles.filter(i => !(newFiles.includes(i)))[0];
        if (path && existsSync(path)) {
          Console.log('File', `'${renamed}'`, 'has been renamed to', `'${path}'`);
          matchFiles = newFiles;
          Console.log('Matched files:', matchFiles);
        } else {
          Console.log('File', `'${file}'`, 'has been deleted');
          unwatchFile(file);
          matchFiles = newFiles;
          delete styleSheets[file];
          delete preflights[file];
          if (matchFiles.length > 0) {
            Console.log('Matched files:', matchFiles);
            Console.time('Building');
          }
          build([], true);
          if (matchFiles.length > 0) {
            Console.timeEnd('Building');
          } else {
            Console.error('No files were matched!');
            process.exit();
          }
        }
      }
      if (event === 'change') {
        Console.log('File', `'${path}'`, 'has been changed');
        Console.time('Building');
        build([file], true);
        Console.timeEnd('Building');
      }
    });
  }

  async function watchConfig(file?: string) {
    if (!file) return;
    let stamp = 0;
    watch(file, async (event, path) => {
      if (event === 'change' && (stamp === 0 || + new Date() - stamp > 500)) {
        // fix fire twice event when change config file
        stamp = + new Date();
        Console.log('Config', `'${path}'`, 'has been changed');
        Console.time('Building');

        // Recharger la configuration
        if (configFile) {
          delete require.cache[configFile];
          const config = await loadConfig(configFile);
          processor = new Processor(config);
          safelist = processor.config('safelist');
        }

        styleSheets = {};
        preflights = {};
        buildSafeList(safelist);
        build(matchFiles, true);
        Console.timeEnd('Building');
      }
    });
  }

  if (args['--dev']) {
    watchConfig(configFile);
    for (const file of matchFiles) {
      watchBuild(file);
    }
    for (const dir of Array.from(new Set(matchFiles.map(f => dirname(f))))) {
      watch(dir, (event, path) => {
        if (event === 'rename' && path && existsSync(join(dir, path))) {
          // when create new file
          const newFiles = globArray(patterns);
          if (newFiles.length > matchFiles.length) {
            const newFile = newFiles.filter(i => !matchFiles.includes(i))[0];
            Console.log('New file', `'${newFile}'`,  'added');
            matchFiles.push(newFile);
            Console.log('Matched files:', matchFiles);
            Console.time('Building');
            build([newFile], true);
            watchBuild(newFile);
            Console.timeEnd('Building');
          }
        }
      });
    }
  }
}

// Démarrer l'application
main().catch((error) => {
  Console.error('Failed to start application:', error);
  process.exit(1);
});
