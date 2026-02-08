// src/cli/cli.ts

import { resolve, dirname, extname } from 'path';
import { pathToFileURL } from 'url';
import { mkdirSync, readFileSync, writeFile, existsSync } from 'fs';
import fg from 'fast-glob';
import { minimatch } from 'minimatch';
import Processor from '@nailuscss/core';
import { deepCopy, guessClassName } from '@nailuscss/core';
import { HTMLParser, CSSParser } from '@nailuscss/core';
import { StyleSheet } from '@nailuscss/core';
import { Logger } from './debug';
import { ConfigLoadError } from './errors';
import { fuzzy } from './cli-start';
import type { CLIArgs, CLIConfig, TemplateResult } from './types';
import type { Extractor } from '../../../interfaces';

export function globArray(patterns: string[], options?: fg.Options): string[] {
  const list: string[] = [];

  patterns.forEach(pattern => {
    if (pattern[0] === '!') {
      let i = list.length - 1;
      while (i > -1) {
        if (!minimatch(list[i], pattern)) {
          list.splice(i, 1);
        }
        i--;
      }
    } else {
      const newList = fg.sync(pattern, options);
      newList.forEach(item => {
        if (list.indexOf(item) === -1) {
          list.push(item);
        }
      });
    }
  });

  return list;
}

export function generateTemplate(
  folder: string,
  outputPath = 'nailus.css'
): TemplateResult {
  if (!(existsSync(folder) && require('fs').lstatSync(folder).isDirectory())) {
    mkdirSync(folder);
    if (!existsSync(folder))
      throw new Error(`Folder ${folder} creation failed.`);
  }
  folder = resolve(folder);
  const template = `<!DOCTYPE html>
  <html lang="en">

  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${require('path').basename(folder)}</title>
      <link rel="stylesheet" href="${outputPath}">
  </head>

  <body class="bg-gray-100">
      <div class="container mx-auto flex flex-col justify-center items-center h-screen">
          <div class="lg:flex shadow rounded-lg">
              <div class="bg-blue-500 rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg lg:w-4/12 py-4 h-full flex flex-col justify-center">
                  <div class="text-center tracking-wide">
                      <div class="text-white font-bold text-8xl lg:text-4xl">24</div>
                      <div class="text-white font-normal text-4xl pt-4 lg:pt-0 lg:text-2xl">Sept</div>
                  </div>
              </div>
              <div class="w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
                  <div class="flex flex-row lg:justify-start justify-center">
                      <div class="text-gray-700 font-light text-sm text-center lg:text-left px-2">
                          1:30 PM
                      </div>
                      <div class="text-gray-700 font-light text-sm text-center lg:text-left px-2">
                          Organiser : IHC
                      </div>
                  </div>
                  <div class="text-gray-700 text-xl pb-1 text-center lg:text-left px-2">
                      International Conference Dubai
                  </div>

                  <div class="text-gray-800 font-light text-sm pt-1 text-center lg:text-left px-2">
                      A-142/1, A-142, Ganesh Nagar, Tilak Nagar, New Delhi, 110018
                  </div>
              </div>
              <div class="flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-center px-2 py-4 lg:px-0 rounded-lg">
                  <span class="tracking-wider text-gray-600 cursor-pointer bg-gray-100 hover:bg-gray-200 px-4 py-2 text-sm rounded-lg leading-loose mx-2">
                      Going
                  </span>
              </div>
          </div>
      </div>
  </body>
  </html>`;
  const inputPath = require('path').join(folder, 'index.html');
  outputPath = require('path').join(folder, outputPath);
  require('fs').writeFileSync(inputPath, template);
  require('fs').writeFileSync(outputPath, '');
  return { html: inputPath, css: outputPath };
}

export async function loadConfig(configPath: string, isDev: boolean): Promise<any> {
  try {
    const ext = extname(configPath);

    if (ext === '.cjs') {
      if (isDev) {
        const moduleId = require.resolve(configPath);
        delete require.cache[moduleId];
      }
      const config = await import(pathToFileURL(configPath).href + `?update=${Date.now()}`);
      return config.default || config;
    }

    if (ext === '.mjs' || ext === '.js') {
      const importPath = isDev
        ? `${pathToFileURL(configPath).href}?update=${Date.now()}`
        : pathToFileURL(configPath).href;
      const config = await import(importPath);
      return config.default || config;
    }

    const config = await import(pathToFileURL(configPath).href);
    return config.default || config;
  } catch (error) {
    throw new ConfigLoadError(configPath, error as Error);
  }
}

export class CLIProcessor {
  private config: CLIConfig;
  private args: CLIArgs;

  constructor(config: CLIConfig, args: CLIArgs) {
    this.config = config;
    this.args = args;
  }

  compile(files: string[]): void {
    const prefix = this.args['--prefix'] ?? 'nailus-';
    files.forEach((file) => {
      let indexStart = 0;
      const outputStyle: StyleSheet[] = [];
      const outputHTML: string[] = [];
      const html = readFileSync(file).toString();
      const parser = new HTMLParser(html);

      parser.parseClasses().forEach((p) => {
        outputHTML.push(html.substring(indexStart, p.start));
        const utility = this.config.processor.compile(
          p.result,
          prefix,
          true,
          this.args['--dev']
        );
        outputStyle.push(utility.styleSheet);
        outputHTML.push([utility.className, ...utility.ignored].join(' '));
        indexStart = p.end;
      });
      outputHTML.push(html.substring(indexStart));
      
      const added = outputStyle.reduce(
        (previousValue: StyleSheet, currentValue: StyleSheet) =>
          previousValue.extend(currentValue),
        new StyleSheet()
      );
      
      this.config.styleSheets[file] = this.args['--dev']
        ? (this.config.styleSheets[file]
            ? this.config.styleSheets[file].extend(added)
            : added)
        : added;

      const outputFile = file.replace(/(?=\.\w+$)/, '.nailus');
      writeFile(outputFile, outputHTML.join(''), () => null);
      Logger.fileTransform(file, outputFile);
      
      if (this.args['--preflight']) {
        if (this.args['--dev']) {
          const preflight = this.config.processor.preflight(html, true, true, true, true);
          this.config.preflights[file] = this.config.preflights[file]
            ? this.config.preflights[file].extend(preflight)
            : preflight;
        } else {
          this.config.preflights[file] = this.config.processor.preflight(html);
        }
      }
    });
  }

  interpret(files: string[]): void {
    files.forEach((file) => {
      const content = readFileSync(file).toString();
      let classes: string[] = [];
      
      if (this.args['--fuzzy']) {
        classes = fuzzy(content);
      } else {
        const parser = new HTMLParser(content);
        classes = parser.parseClasses().map((i) => i.result);
      }
      
      const extractors = this.config.processor.config('extract.extractors') as Extractor[] | undefined;
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
      
      if (this.args['--dev']) {
        const utility = this.config.processor.interpret(classes.join(' '), true);
        this.config.styleSheets[file] = this.config.styleSheets[file]
          ? this.config.styleSheets[file].extend(utility.styleSheet)
          : utility.styleSheet;
        if (this.args['--preflight']) {
          const preflight = this.config.processor.preflight(content, true, true, true, true);
          this.config.preflights[file] = this.config.preflights[file]
            ? this.config.preflights[file].extend(preflight)
            : preflight;
        }
      } else {
        const utility = this.config.processor.interpret(classes.join(' '));
        this.config.styleSheets[file] = utility.styleSheet;
        if (this.args['--preflight']) {
          this.config.preflights[file] = this.config.processor.preflight(content);
        }
      }
    });
  }

  attributify(files: string[]): void {
    files.forEach((file) => {
      const parser = new HTMLParser(readFileSync(file).toString());
      const attrs: { [key: string]: string | string[] } = parser
        .parseAttrs()
        .reduceRight((a: { [key: string]: string | string[] }, b) => {
          if (b.key === 'class' || b.key === 'className') return a;
          if (b.key in a) {
            a[b.key] = Array.isArray(a[b.key])
              ? Array.isArray(b.value)
                ? [...(a[b.key] as string[]), ...b.value]
                : [...(a[b.key] as string[]), b.value]
              : [a[b.key] as string, ...(Array.isArray(b.value) ? b.value : [b.value])];
            return a;
          }
          return Object.assign(a, { [b.key]: b.value });
        }, {});
        
      if (this.args['--dev']) {
        const utility = this.config.processor.attributify(attrs, true);
        this.config.styleSheets[file] = this.config.styleSheets[file]
          ? this.config.styleSheets[file].extend(utility.styleSheet)
          : utility.styleSheet;
      } else {
        const utility = this.config.processor.attributify(attrs);
        this.config.styleSheets[file] = utility.styleSheet;
      }
    });
  }

  styleBlock(files: string[]): void {
    files.forEach((file) => {
      const content = readFileSync(file).toString();
      const block = content.match(/(?<=<style[\r\n]*\s*lang\s?=\s?['"]nailus["']>)[\s\S]*(?=<\/style>)/);
      if (block && block.index) {
        const css = content.slice(block.index, block.index + block[0].length);
        const parser = new CSSParser(css, this.config.processor);
        this.config.styleSheets[file] = this.config.styleSheets[file].extend(parser.parse());
      }
    });
  }

  build(files: string[], update = false): void {
    if (this.args['--compile']) {
      this.compile(files);
    } else {
      this.interpret(files);
    }
    
    if (this.args['--attributify']) this.attributify(files);
    if (this.args['--style']) this.styleBlock(files);
    
    if (this.args['--separate']) {
      for (const [file, sheet] of Object.entries(this.config.styleSheets)) {
        const outfile = file.replace(/\.\w+$/, '.nailus.css');
        writeFile(
          outfile,
          (this.args['--preflight']
            ? deepCopy(sheet).extend(this.config.preflights[file], false)
            : sheet
          ).build(this.args['--minify']),
          () => null
        );
        Logger.fileTransform(file, outfile);
      }
    } else {
      let outputStyle = Object.values(this.config.styleSheets)
        .reduce(
          (previousValue: StyleSheet, currentValue: StyleSheet) =>
            previousValue.extend(currentValue),
          new StyleSheet()
        )
        .sort()
        .combine();
        
      if (this.args['--preflight']) {
        outputStyle = Object.values(this.config.preflights)
          .reduce(
            (previousValue: StyleSheet, currentValue: StyleSheet) =>
              previousValue.extend(currentValue),
            new StyleSheet()
          )
          .sort()
          .combine()
          .extend(outputStyle);
      }
      
      const filePath = this.args['--output'] ?? 'nailus.css';
      const dir = dirname(filePath);
      if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
      writeFile(filePath, outputStyle.build(this.args['--minify']), () => null);
      
      if (!update) {
        Logger.matchedFiles(files);
        Logger.outputFile(resolve(filePath));
      }
    }
  }

  buildSafeList(): void {
    if (this.config.safelist) {
      let classes: string[] = [];
      if (typeof this.config.safelist === 'string') {
        classes = this.config.safelist.split(/\s/).filter(i => i);
      }
      if (Array.isArray(this.config.safelist)) {
        for (const item of this.config.safelist) {
          if (typeof item === 'string') {
            classes.push(item);
          } else if (Array.isArray(item)) {
            classes = classes.concat(item);
          }
        }
      }
      this.config.styleSheets['safelist'] = this.config.processor.interpret(classes.join(' ')).styleSheet;
    }
  }
}
