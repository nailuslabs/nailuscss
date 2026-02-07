import { PatternRegistry } from "./template-generator";

PatternRegistry.registerMany([
  {
    name: 'fill',
    pattern: /^(fill|fl|f)(?:-|$)/,
    normalizer: (raw) => raw.replace(/^(fl|f)(?=-|$)/, 'fill'),
    aliases: ['fl', 'f'],
  },
  {
    name: 'fill-opacity',
    pattern: /^(fill-opacity|fill-op|f-op|fo)(?:-|$)/,
    normalizer: (raw) => raw.replace(/^(fill-op|f-op|fo)(?=-|$)/, 'fill-opacity'),
    aliases: ['fill-op', 'f-op', 'fo'],
  },
  {
    name: 'fill-rule',
    pattern: /^(fill-rule|fill-r|fr)(?:-|$)/,
    normalizer: (raw) => raw.replace(/^(fill-r|fr)(?=-|$)/, 'fill-rule'),
    aliases: ['fill-r', 'fr'],
  },
  {
    name: 'stroke',
    pattern: /^(stroke|strk|sk|s)(?:-|$)/,
    normalizer: (raw) => raw.replace(/^(strk|sk|s)(?=-|$)/, 'stroke'),
    aliases: ['strk', 'sk', 's'],
  },
  {
    name: 'stroke-width',
    pattern: /^(stroke-width|stroke-w|strk-w|sw)(?:-|$)/,
    normalizer: (raw) => raw.replace(/^(stroke-w|strk-w|sw)(?=-|$)/, 'stroke-width'),
    aliases: ['stroke-w', 'strk-w', 'sw'],
  },
  {
    name: 'stroke-opacity',
    pattern: /^(stroke-opacity|stroke-op|strk-op|so)(?:-|$)/,
    normalizer: (raw) => raw.replace(/^(stroke-op|strk-op|so)(?=-|$)/, 'stroke-opacity'),
    aliases: ['stroke-op', 'strk-op', 'so'],
  },
  {
    name: 'stroke-linecap',
    pattern: /^(stroke-linecap|stroke-cap|strk-cap|slc)(?:-|$)/,
    normalizer: (raw) => raw.replace(/^(stroke-cap|strk-cap|slc)(?=-|$)/, 'stroke-linecap'),
    aliases: ['stroke-cap', 'strk-cap', 'slc'],
  },
  {
    name: 'stroke-linejoin',
    pattern: /^(stroke-linejoin|stroke-join|strk-join|slj)(?:-|$)/,
    normalizer: (raw) => raw.replace(/^(stroke-join|strk-join|slj)(?=-|$)/, 'stroke-linejoin'),
    aliases: ['stroke-join', 'strk-join', 'slj'],
  },
  {
    name: 'stroke-dasharray',
    pattern: /^(stroke-dasharray|stroke-dash|strk-dash|sda)(?:-|$)/,
    normalizer: (raw) => raw.replace(/^(stroke-dash|strk-dash|sda)(?=-|$)/, 'stroke-dasharray'),
    aliases: ['stroke-dash', 'strk-dash', 'sda'],
  },
  {
    name: 'stroke-dashoffset',
    pattern: /^(stroke-dashoffset|stroke-offset|strk-offset|sdo)(?:-|$)/,
    normalizer: (raw) => raw.replace(/^(stroke-offset|strk-offset|sdo)(?=-|$)/, 'stroke-dashoffset'),
    aliases: ['stroke-offset', 'strk-offset', 'sdo'],
  },
  {
    name: 'stroke-miterlimit',
    pattern: /^(stroke-miterlimit|stroke-miter|strk-miter|sml)(?:-|$)/,
    normalizer: (raw) => raw.replace(/^(stroke-miter|strk-miter|sml)(?=-|$)/, 'stroke-miterlimit'),
    aliases: ['stroke-miter', 'strk-miter', 'sml'],
  },
  {
    name: 'clip-path',
    pattern: /^(clip-path|clip-p|cp)(?:-|$)/,
    normalizer: (raw) => raw.replace(/^(clip-p|cp)(?=-|$)/, 'clip-path'),
    aliases: ['clip-p', 'cp'],
  },
  {
    name: 'clip-rule',
    pattern: /^(clip-rule|clip-r|cr)(?:-|$)/,
    normalizer: (raw) => raw.replace(/^(clip-r|cr)(?=-|$)/, 'clip-rule'),
    aliases: ['clip-r', 'cr'],
  }
]);

export { PatternRegistry } from "./template-generator";