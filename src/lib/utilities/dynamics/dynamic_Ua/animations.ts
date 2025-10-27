import { Utility } from '../../handler';
import { pluginOrder } from '../../../../config/order';
import { toType } from '../../../../utils/tools';
import { Property, Style, Keyframes } from '../../../../utils/style';

import type { PluginUtils, Output } from '../../../../interfaces';

export function animation(utility: Utility, { theme }: PluginUtils): Output {
  const raw = utility.raw;
  const body = utility.body;

  // === 1. animation-name ===
  if (raw.startsWith('animate-name-')) {
    return utility.clone(raw.slice(13)).handler
      .handleSquareBrackets()
      .handleVariable()
      .createProperty(['animation-name'])
      ?.updateMeta('utilities', 'animation', pluginOrder.animationName, 1, true);
  }

  // === 2. animation-duration ===
  if (raw.startsWith('animate-duration-')) {
    return utility.clone(raw.slice(16)).handler
      .handleStatic(theme('animationDuration'))
      .handleSquareBrackets()
      .handleTime(0, undefined, 'float')
      .handleNumber(0, undefined, 'int', (num: number) => `${num}ms`)
      .handleVariable()
      .createProperty(['animation-duration'])
      ?.updateMeta('utilities', 'animation', pluginOrder.animationDuration, 1, true);
  }

  // === 3. animation-delay ===
  if (raw.startsWith('animate-delay-')) {
    return utility.clone(raw.slice(13)).handler
      .handleStatic(theme('animationDelay'))
      .handleSquareBrackets()
      .handleTime(0, undefined, 'float')
      .handleNumber(0, undefined, 'int', (num: number) => `${num}ms`)
      .handleVariable()
      .createProperty(['animation-delay'])
      ?.updateMeta('utilities', 'animation', pluginOrder.animationDelay, 1, true);
  }

  // === 4. animation-iteration-count ===
  if (raw.startsWith('animate-iteration-')) {
    return utility.clone(raw.slice(17)).handler
      .handleBody(theme('animationIterationCount'))
      .handleNumber(0, undefined, 'int')
      .handleSquareBrackets()
      .createProperty(['animation-iteration-count'])
      ?.updateMeta('utilities', 'animation', pluginOrder.animationIterationCount, 1, true);
  }

  // === 5. animation-timing-function ===
  // → (animate-ease-* / animate-step-*)
  if (raw.startsWith('animate-ease-')) {
    return utility.clone(raw.slice(12)).handler
      .handleBody(theme('animationTimingFunction'))
      .handleSquareBrackets()
      .createProperty(['animation-timing-function'])
      ?.updateMeta('utilities', 'animation', pluginOrder.animationTimingFunction, 1, true);
  }

  // steps() et jump-* syntaxe (ex: animate-step-jump-start-4, animate-step-end-[5])
  if (raw.startsWith('animate-step')) {
    const bodyValue = body.replace(/^step-/, '');
    const parts = bodyValue.split('-');
    const last = parts[parts.length - 1];
    const valueMatch = last.match(/\[(.+)\]/);
    const value = valueMatch ? valueMatch[1] : last;
    let timing = '';

    if (parts[0] === 'jump') {
      const jumpType = parts[1] || 'start';
      timing = `steps(${value}, jump-${jumpType})`;
    } else {
      const jumpType = parts[0] || 'start';
      timing = `steps(${value}, ${jumpType})`;
    }

    return new Style(utility.class, new Property('animation-timing-function', timing))
      .updateMeta('utilities', 'animation', pluginOrder.animationTimingFunction, 2, true);
  }

  // === 6. animation-timeline ===
  if (raw.startsWith('animate-timeline-')) {
    const value = body.trim();

    if (value.startsWith('--')) {
      return new Style(utility.class, new Property('animation-timeline', value))
        .updateMeta('utilities', 'animation', pluginOrder.animationTimeline, 2, true);
    }

    if (value.startsWith('scroll')) {
      const args = value.match(/\((.*)\)/)?.[1] || '';
      return new Style(utility.class, new Property('animation-timeline', `scroll(${args})`))
        .updateMeta('utilities', 'animation', pluginOrder.animationTimeline, 3, true);
    }

    if (value.startsWith('view')) {
      const args = value.match(/\((.*)\)/)?.[1] || '';
      return new Style(utility.class, new Property('animation-timeline', `view(${args})`))
        .updateMeta('utilities', 'animation', pluginOrder.animationTimeline, 4, true);
    }

    return utility.clone(raw.slice(16)).handler
      .handleBody(theme('animationTimeline'))
      .handleSquareBrackets()
      .createProperty(['animation-timeline'])
      ?.updateMeta('utilities', 'animation', pluginOrder.animationPlayState, 1, true);
  }

  // === 7. animation-range ===
  if (raw.startsWith('animate-range-start-')) {
    const value = raw.slice(20);
    if (value.includes('%') && !value.startsWith('['))
      return new Style(utility.class, new Property('animation-range-start', value))
        .updateMeta('utilities', 'animation', pluginOrder.animationRangeStart, 2, true);

    return utility.clone(raw.slice(19)).handler
      .handleBody(theme('animationRangeStart'))
      .handleSquareBrackets()
      .handleFraction()
      .createProperty(['animation-range-start'])
      ?.updateMeta('utilities', 'animation', pluginOrder.animationRangeStart, 1, true);
  }

  if (raw.startsWith('animate-range-end-')) {
    const value = raw.slice(18);
    if (value.includes('%') && !value.startsWith('['))
      return new Style(utility.class, new Property('animation-range-end', value))
        .updateMeta('utilities', 'animation', pluginOrder.animationRangeEnd, 2, true);

    return utility.clone(raw.slice(17)).handler
      .handleBody(theme('animationRangeEnd'))
      .handleSquareBrackets()
      .handleFraction()
      .createProperty(['animation-range-end'])
      ?.updateMeta('utilities', 'animation', pluginOrder.animationRangeEnd, 1, true);
  }

  if (raw.startsWith('animate-range-')) {
    const value = raw.slice(14);
    if (value.includes('%') && !value.startsWith('['))
      return new Style(utility.class, new Property('animation-range', value))
        .updateMeta('utilities', 'animation', pluginOrder.animationRange, 2, true);

    return utility.clone(raw.slice(13)).handler
      .handleBody(theme('animationRange'))
      .handleSquareBrackets()
      .handleFraction()
      .createProperty(['animation-range'])
      ?.updateMeta('utilities', 'animation', pluginOrder.animationRange, 1, true);
  }

  // === 8. Fallback (ex: animate-spin)
  const animations = toType(theme('animation'), 'object') as Record<string, string | Record<string, string>>;
  if (animations[body]) {
    const value = animations[body];
    let styles: Style[];
    let keyframe: string | undefined;

    if (typeof value === 'string') {
      keyframe = value.match(/^\w+/)?.[0];
      styles = [new Style(utility.class, new Property(['animation'], value))];
    } else {
      keyframe = value['animation'] || value['animationName'] || value['animation-name'];
      styles = Style.generate(utility.class, value).map(i =>
        i.updateMeta('utilities', 'animation', pluginOrder.animation, 1, true)
      );
    }

    return [
      ...styles,
      ...(keyframe
        ? Keyframes.generate(
            keyframe,
            (theme(`keyframes.${keyframe}`) ?? {}) as Record<string, Record<string, string>>,
            undefined,
            false
          ).map(i => i.updateMeta('utilities', 'keyframes', pluginOrder.animation, 1, true))
        : []),
    ];
  }

  return;
}
