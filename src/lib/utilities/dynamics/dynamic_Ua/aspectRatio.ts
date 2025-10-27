import { Utility } from '../../handler';
import { pluginOrder } from '../../../../config/order';
import type { PluginUtils, Output } from '../../../../interfaces';

export function aspectRatio(utility: Utility, { theme }: PluginUtils): Output {
  if (!utility.raw.startsWith('aspect-')) return;

  // gestion statique via theme()
  const staticMatch = utility.handler
    .handleStatic(theme('aspectRatio'))
    .handleSquareBrackets()
    .handleFraction()
    .handleNumber(0, 9999, 'float') // supporte 1.85, 2.39, etc.
    .handleVariable()
    .createProperty('aspect-ratio');

  if (staticMatch) {
    return staticMatch.updateMeta(
      'utilities',
      'aspectRatio',
      pluginOrder.aspectRatio,
      1,
      true
    );
  }
}
