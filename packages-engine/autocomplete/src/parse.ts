import ClassParser from '@nailuscss/core/utils/parser/class';

export function parseClassNames(source: string, separator = ':', variants: string[] = []): ReturnType<ClassParser['parse']> {
  return new ClassParser(source, separator, variants).parse();
}
