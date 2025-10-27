import { Utility } from '../../handler';
import { pluginOrder } from '../../../../config/order';
import { toType } from '../../../../utils';
import { Property, Container } from '../../../../utils/style';
import { isString } from '../../../../utils';
import type { PluginUtils, Output, } from '../../../../interfaces';

export function container(utility: Utility, { theme }: PluginUtils): Output {
  if (utility.raw.startsWith('container')) {
    const className = utility.class;
    const [, variant] = utility.raw.split('-');

    // Si c'est un variant spécifique (container-sm, container-xl, etc.)
    if (variant) {
      const screens = toType(theme('container.screens', theme('screens')), 'object');
      const screenSize = screens[variant];

      if (!screenSize || !isString(screenSize)) {
        return [];
      }

      // Pour les variants, on crée seulement la media query avec max-width
      const containerStyle = new Container(className, [
        new Property('max-width', screenSize)
      ]).atRule(`@media (min-width: ${screenSize})`);

      containerStyle.updateMeta('utilities', 'container', pluginOrder.container, 0, true);
      return [containerStyle];
    }

    // Container de base (sans variant) - version sans padding/margin
    const baseStyle = new Container(className, [
      new Property('width', '100%')
    ]);

    const output: Container[] = [baseStyle];
    const screens = toType(theme('container.screens', theme('screens')), 'object');

    // Ajoute seulement les media queries avec max-width (sans padding)
    for (const [screen, size] of Object.entries(screens)) {
      if (!isString(size)) continue;

      const props = [new Property('max-width', `${size}`)];
      output.push(new Container(className, props).atRule(`@media (min-width: ${size})`));
    }

    output.forEach(style => style.updateMeta('utilities', 'container', pluginOrder.container, 0, true));
    return output;
  }

  return [];
}
