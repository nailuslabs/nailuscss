import { 
  generateFromTemplates,
  generateSimpleUtilities,
  type createSuffixTemplate,
  type createSimpleTemplate,
  combineUtilities,
  UtilityTemplate
} from "../handlers/template-generator";

export const BACKFACE_VISIBILITY_CONFIGS:  UtilityTemplate[] = [];
export const PERSPECTIVE_CONFIGS:          UtilityTemplate[] = [];
export const PERSPECTIVE_ORIGIN_CONFIGS:   UtilityTemplate[] = [];
export const ROTATE_CONFIGS:               UtilityTemplate[] = [];
export const SCALE_CONFIGS:                UtilityTemplate[] = [];
export const SKEW_CONFIGS:                 UtilityTemplate[] = [];
export const TRANSFORM_CONFIGS:            UtilityTemplate[] = [];
export const TRANSFORM_ORIGIN_CONFIGS:     UtilityTemplate[] = [];
export const TRANSFORM_STYLE_CONFIGS:      UtilityTemplate[] = [];
export const TRANSLATE_CONFIGS:            UtilityTemplate[] = [];