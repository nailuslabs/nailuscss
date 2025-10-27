import { Utility } from '../../handler';
import { pluginOrder } from '../../../../config/order';
import { Property, Style } from '../../../../utils/style';
import type { PluginUtils, Output } from '../../../../interfaces';

export function accentColor(utility: Utility, { theme }: PluginUtils): Output {
  const handler = utility.handler
    // nailuscss prend ses couleurs depuis `theme('accentColor')` si dispo,
    // sinon `theme('colors')`
    .handleColor(theme('accentColor') ?? theme('colors'))
    .handleOpacity(theme('opacity'))
    .handleSquareBrackets() // permet accent-[#ff0] ou accent-[rgb(20,30,40)]
    .handleVariable() // pour accent-[var(--my-color)]

  const color = handler.createColorValue('1')

  // Si aucun color trouvé, nailuscss accepte aussi les mots-clés CSS valides
  if (!color) {
    const keyword = utility.raw.replace(/^accent-/, '')
    if (
      ['auto', 'current', 'inherit', 'transparent']
        .includes(keyword)
    ) {
      return new Style(utility.class, new Property('accent-color', keyword))
        .updateMeta('utilities', 'accentColor', pluginOrder.accentColor, 1, true)
    }
    return // aucune correspondance → ne génère rien
  }

  // Si une couleur a été résolue
  return new Style(utility.class, new Property('accent-color', color))
    .updateMeta('utilities', 'accentColor', pluginOrder.accentColor, 0, true)
}
