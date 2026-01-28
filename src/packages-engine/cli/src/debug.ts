// src/cli/debug.ts

import { Console } from '../../../utils/tools';

export class Logger {
  private static timers: Map<string, number> = new Map();

  static log(...args: unknown[]): void {
    Console.log(...args);
  }

  static error(...args: unknown[]): void {
    Console.error(...args);
  }

  static time(label: string): void {
    this.timers.set(label, Date.now());
  }

  static timeEnd(label: string): void {
    const start = this.timers.get(label);
    if (start) {
      const duration = Date.now() - start;
      Console.log(`${label}: ${duration}ms`);
      this.timers.delete(label);
    } else {
      Console.log(label);
    }
  }

  static fileChange(file: string): void {
    Console.log('File', `'${file}'`, 'has been changed');
  }

  static fileDelete(file: string): void {
    Console.log('File', `'${file}'`, 'has been deleted');
  }

  static fileRename(oldFile: string, newFile: string): void {
    Console.log('File', `'${oldFile}'`, 'has been renamed to', `'${newFile}'`);
  }

  static fileCreate(file: string): void {
    Console.log('New file', `'${file}'`, 'added');
  }

  static configChange(file: string): void {
    Console.log('Config', `'${file}'`, 'has been changed');
  }

  static matchedFiles(files: string[]): void {
    Console.log('Matched files:', files);
  }

  static outputFile(file: string): void {
    Console.log('Output file:', file);
  }

  static fileTransform(input: string, output: string): void {
    Console.log(`${input} -> ${output}`);
  }

  static configFile(file: string): void {
    Console.log('Config file:', file);
  }
}