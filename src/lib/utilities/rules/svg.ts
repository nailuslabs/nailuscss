import { 
  generateFromTemplates,
  generateSimpleUtilities,
  type createSuffixTemplate,
  type createSimpleTemplate,
  combineUtilities,
  UtilityTemplate
} from "../handlers/template-generator";

export const STROKE_WIDTH_CONFIGS: UtilityTemplate[] = [
  {base: 'stroke', aliases: [], suffixes: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '10'], utility: (suffix) => ({ 'stroke-width': suffix }), meta: { group: 'svg', order: 3 },
  },
];

export const staticSvgConfigs = combineUtilities(
  generateFromTemplates(STROKE_WIDTH_CONFIGS)
);