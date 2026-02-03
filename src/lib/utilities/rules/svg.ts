import { 
  generateFromTemplates,
  generateSimpleUtilities,
  type createSuffixTemplate,
  type createSimpleTemplate,
  combineUtilities,
  UtilityTemplate
} from "../handlers/template-generator";

export const FILL_CONFIGS:          UtilityTemplate[] = [];
export const STROKE_CONFIGS:        UtilityTemplate[] = [];
export const STROKE_WIDTH_CONFIGS:  UtilityTemplate[] = [];