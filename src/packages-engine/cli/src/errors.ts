// src/cli/errors.ts

export class CLIError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CLIError';
  }
}

export class ConfigLoadError extends CLIError {
  constructor(configPath: string, originalError?: Error) {
    super(`Failed to load config file: ${configPath}\n${originalError?.message || ''}`);
    this.name = 'ConfigLoadError';
  }
}

export class NoFilesMatchedError extends CLIError {
  constructor() {
    super('No files were matched!');
    this.name = 'NoFilesMatchedError';
  }
}

export class InvalidTemplateError extends CLIError {
  constructor(folder: string) {
    super(`Folder ${folder} creation failed.`);
    this.name = 'InvalidTemplateError';
  }
}

export function handleError(error: Error): void {
  if (error instanceof CLIError) {
    console.error(`Error: ${error.message}`);
  } else {
    console.error('Fatal error:', error);
  }
  process.exit(1);
}