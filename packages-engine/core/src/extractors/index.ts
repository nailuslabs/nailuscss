export { splitExtractor } from './split';

export type ExtractorFunction = (content: string) => string[];

export const DEFAULT_EXTRACTORS: ExtractorFunction[] = [];