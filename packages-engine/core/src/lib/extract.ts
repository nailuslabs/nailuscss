import { Utility, staticUtilities, dynamicUtilities } from '@nailuscss/preset-nailus';
import { deepCopy } from '../utils/tools';
import { Style, Property } from '../utils/style';
import { pluginOrder } from '@nailuscss/config';
import type { Processor } from './index';

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function matchDynamicKey(className: string, keys: string[]): string | undefined {
  let best: string | undefined;
  for (const key of keys) {
    const exp = new RegExp(`^-?${escapeRegExp(key)}(?:-|$)`);
    if (exp.test(className)) {
      if (!best || key.length > best.length) best = key;
    }
  }
  return best;
}

export function generateStaticStyle(processor: Processor, className:string, addComment = false): Style | undefined {
  // eslint-disable-next-line no-prototype-builtins
  if (!staticUtilities.hasOwnProperty(className))
    return;

  const style = new Style('.' + className);
  const comment = addComment ? className : undefined;
  const { utility, meta } = staticUtilities[className];
  for (const [key, value] of Object.entries(utility)) {
    style.add(
      Array.isArray(value)
        ? value.map((i) => new Property(key, i, comment))
        : new Property(key, value, comment)
    );
  }
  if (processor._plugin.core && !processor._plugin.core[meta.group]) return;
  return style.updateMeta('utilities', meta.group, pluginOrder[meta.group as keyof typeof pluginOrder], meta.order, true);
}

export default function extract(
  processor: Processor,
  className: string,
  addComment = false,
  prefix?: string,
): Style | Style[] | undefined {
  if (prefix && !className.startsWith(prefix)) return;

  // handle static base utilities
  if (!prefix && className in staticUtilities) return generateStaticStyle(processor, className, addComment);
  if (prefix && className.startsWith(prefix)) {
    className = className.replace(new RegExp(`^${prefix}`), '');
    if (className in staticUtilities) return generateStaticStyle(processor, className, addComment);
  }
  // handle static plugin utilities & components
  const staticPlugins = { ...processor._plugin.utilities, ...processor._plugin.components, ...processor._plugin.shortcuts };
  if (className in staticPlugins) return deepCopy(staticPlugins[className]);

  const utility = new Utility(className, processor._handler);


  // handle dynamic plugin utilities
  for (const [key, generator] of Object.entries(processor._plugin.dynamic)) {
    if (className.match(new RegExp(`^-?${key}`))) {
      let style = generator(utility);
      if (style instanceof Property) style = style.toStyle(utility.class);
      if (style && addComment)
        Array.isArray(style)
          ? style.map((i) => i.property.forEach((p) => (p.comment = className)))
          : style.property.forEach((p) => (p.comment = className));
      if (style) return style;
    }
  }

  // handle dynamic base utilities
  const key = matchDynamicKey(className, Object.keys(dynamicUtilities));
  // eslint-disable-next-line no-prototype-builtins
  if (key && dynamicUtilities.hasOwnProperty(key)) {
    let style = dynamicUtilities[key](utility, processor.pluginUtils);
    if (!style) return;
    if (processor._plugin.core && !processor._plugin.core[Array.isArray(style) ? style[0].meta.group : style.meta.group]) return;
    if (style instanceof Property) style = style.toStyle(utility.class);
    if (addComment) Array.isArray(style)? style.map((i) => i.property.forEach((p) => (p.comment = className))): style.property.forEach((p) => (p.comment = className));
    return style;
  }
}
