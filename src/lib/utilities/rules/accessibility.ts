import { 
  generateFromTemplates,
  type UtilityTemplate,
  combineUtilities
} from "../handlers/template-generator";

export const FORCED_COLOR_CONFIGS: UtilityTemplate[] = [
  { base: 'forced-color-adjust', aliases: [], suffixes: ['auto', 'none'], utility: (suffix) => ({ 'forced-color-adjust': suffix }), meta: { group: 'accessibility', order: 1 },
  },
];

export const staticAccessibilityConfigs = combineUtilities(
  generateFromTemplates(FORCED_COLOR_CONFIGS)
);