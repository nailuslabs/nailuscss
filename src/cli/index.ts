// src/cli/index.ts

import { resolve, dirname } from 'path';
import { Processor } from '../lib';
import { StyleSheet } from '../utils/style';
import { parseArgs, DOC, getVersion } from './cli-start';
import { loadConfig, globArray, generateTemplate, CLIProcessor } from './cli';
import { FileWatcher } from './watcher';
import { Logger } from './debug';
import { handleError, NoFilesMatchedError } from './errors';
import type { CLIArgs, CLIConfig } from './types';

const args: CLIArgs = parseArgs();

// Handle help and version
if (args['--help'] || (args._.length === 0 && Object.keys(args).length === 1)) {
  Logger.log(DOC);
  process.exit(0);
}

if (args['--version']) {
  Logger.log(getVersion());
  process.exit(0);
}

// Handle init
if (args['--init']) {
  const template = generateTemplate(args['--init'], args['--output']);
  args._.push(template.html);
  args['--preflight'] = true;
  args['--output'] = template.css;
}

// Global configuration state
const config: CLIConfig = {
  configFile: args['--config'] ? resolve(args['--config']) : undefined,
  preflights: {},
  styleSheets: {},
  processor: new Processor(),
  safelist: undefined,
  patterns: [],
  matchFiles: [],
};

/**
 * Initialize the CLI configuration
 */
async function initialize(): Promise<void> {
  try {
    const loadedConfig = config.configFile
      ? await loadConfig(config.configFile, args['--dev'] ?? false)
      : undefined;
    
    config.processor = new Processor(loadedConfig);
    config.safelist = config.processor.config('safelist');
    
    if (config.configFile) {
      Logger.configFile(config.configFile);
    }
  } catch (error) {
    handleError(error as Error);
  }
}

/**
 * Reload configuration (for dev mode)
 */
async function reloadConfig(): Promise<void> {
  if (!config.configFile) return;
  
  const loadedConfig = await loadConfig(config.configFile, true);
  config.processor = new Processor(loadedConfig);
  config.safelist = config.processor.config('safelist');
  
  // Reset stylesheets
  config.styleSheets = {};
  config.preflights = {};
  
  // Rebuild
  const cliProcessor = new CLIProcessor(config, args);
  cliProcessor.buildSafeList();
  cliProcessor.build(config.matchFiles, true);
}

/**
 * Main CLI entry point
 */
async function main(): Promise<void> {
  try {
    await initialize();
    
    // Build patterns
    config.patterns = args._
      .concat(config.processor.config('extract.include', []) as string[])
      .concat(
        (config.processor.config('extract.exclude', []) as string[]).map((i: string) => '!' + i)
      );

    config.matchFiles = globArray(config.patterns);

    if (config.matchFiles.length === 0) {
      throw new NoFilesMatchedError();
    }

    // Build
    const cliProcessor = new CLIProcessor(config, args);
    cliProcessor.buildSafeList();
    cliProcessor.build(config.matchFiles);

    // Watch mode
    if (args['--dev']) {
      const watcher = new FileWatcher({
        onFileChange: (file: string) => {
          Logger.time('Building');
          const processor = new CLIProcessor(config, args);
          processor.build([file], true);
          Logger.timeEnd('Building');
        },
        
        onFileRename: (oldFile: string, newFile: string) => {
          config.matchFiles = globArray(config.patterns);
          Logger.matchedFiles(config.matchFiles);
        },
        
        onFileDelete: (file: string) => {
          delete config.styleSheets[file];
          delete config.preflights[file];
          config.matchFiles = globArray(config.patterns);
          
          if (config.matchFiles.length > 0) {
            Logger.matchedFiles(config.matchFiles);
            Logger.time('Building');
            const processor = new CLIProcessor(config, args);
            processor.build([], true);
            Logger.timeEnd('Building');
          } else {
            throw new NoFilesMatchedError();
          }
        },
        
        onFileCreate: (newFile: string) => {
          config.matchFiles.push(newFile);
          Logger.matchedFiles(config.matchFiles);
          Logger.time('Building');
          const processor = new CLIProcessor(config, args);
          processor.build([newFile], true);
          Logger.timeEnd('Building');
          watcher.watchFile(newFile, config.patterns, config.matchFiles, globArray);
        },
        
        onConfigChange: async () => {
          await reloadConfig();
        },
      });

      // Watch config file
      watcher.watchConfig(config.configFile);

      // Watch matched files
      for (const file of config.matchFiles) {
        watcher.watchFile(file, config.patterns, config.matchFiles, globArray);
      }

      // Watch directories for new files
      const uniqueDirs = Array.from(new Set(config.matchFiles.map((f: string) => dirname(f))));
      for (const dir of uniqueDirs) {
        watcher.watchDirectory(dir, config.patterns, config.matchFiles, globArray);
      }
    }
  } catch (error) {
    handleError(error as Error);
  }
}

// Execute CLI
main();