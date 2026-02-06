import { PatternRegistry } from "./template-generator";

PatternRegistry.registerMany([
  {
    name: 'fill',
    pattern: /^(fill|fl|f)(?:-|$)/,
    normalizer: (raw) => raw.replace(/^(fl|f)(?=-|$)/, 'fill'),
    aliases: ['fl', 'f'],
  },
  {
    name: 'stroke',
    pattern: /^(stroke|strk|sk)(?:-|$)/,
    normalizer: (raw) => raw.replace(/^(strk|sk)(?=-|$)/, 'stroke'),
    aliases: ['strk', 'sk'],
  },
]);

export { PatternRegistry } from "./template-generator";