// src/cli/cli-start.ts

import arg from 'arg';
import type { CLIArgs } from './types';

export const DOC = `Generate css from text files that containing nailus classes.
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

export function parseArgs(): CLIArgs {
  return arg({
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
  }) as CLIArgs;
}

export function getVersion(): string {
  // eslint-disable-next-line quotes
  return `__NAME__ __VERSION__`; // replace by rollup
}

export function fuzzy(content: string): string[] {
  return content.match(/([^<>"'`\s]*[^<>"'`\s:])|([^<>"'`\s.(){}[\]#=%]*[^<>"'`\s.(){}[\]#=%:])/g) ?? [];
}