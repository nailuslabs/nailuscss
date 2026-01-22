// src/cli/watcher.ts

import { watch, unwatchFile, existsSync } from 'fs';
import { dirname, join } from 'path';
import { Logger } from './debug';
import type { WatcherCallbacks } from './types';

export class FileWatcher {
  private callbacks: WatcherCallbacks;
  private configStamp = 0;

  constructor(callbacks: WatcherCallbacks) {
    this.callbacks = callbacks;
  }

  watchFile(file: string, patterns: string[], matchFiles: string[], globArray: (patterns: string[]) => string[]): void {
    watch(file, (event, path) => {
      if (event === 'rename') {
        const newFiles = globArray(patterns);
        const renamed = matchFiles.filter((i: string) => !newFiles.includes(i))[0];
        
        if (path && existsSync(path)) {
          Logger.fileRename(renamed, path);
          this.callbacks.onFileRename(renamed, path);
        } else {
          Logger.fileDelete(file);
          unwatchFile(file);
          this.callbacks.onFileDelete(file);
        }
      }

      if (event === 'change' && path) {
        Logger.fileChange(path);
        this.callbacks.onFileChange(file);
      }
    });
  }

  watchDirectory(dir: string, patterns: string[], matchFiles: string[], globArray: (patterns: string[]) => string[]): void {
    watch(dir, (event, path) => {
      if (event === 'rename' && path && existsSync(join(dir, path))) {
        const newFiles = globArray(patterns);
        if (newFiles.length > matchFiles.length) {
          const newFile = newFiles.filter((i: string) => !matchFiles.includes(i))[0];
          Logger.fileCreate(newFile);
          this.callbacks.onFileCreate(newFile);
        }
      }
    });
  }

  watchConfig(configFile?: string): void {
    if (!configFile) return;

    watch(configFile, async (event, path) => {
      if (event === 'change' && (this.configStamp === 0 || Date.now() - this.configStamp > 500)) {
        // Fix fire twice event when change config file
        this.configStamp = Date.now();
        Logger.configChange(path || configFile);
        Logger.time('Building');
        
        await this.callbacks.onConfigChange();
        
        Logger.timeEnd('Building');
      }
    });
  }
}