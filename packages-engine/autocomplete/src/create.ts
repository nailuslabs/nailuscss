import type Processor from '@nailuscss/core';
import type { AutocompleteResult } from './types';
import { generateCompletions } from './utils';

export function createAutocomplete(processor: Processor): AutocompleteResult {
  return generateCompletions(processor);
}
