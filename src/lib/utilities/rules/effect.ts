import { 
  generateFromTemplates,
  generateSimpleUtilities,
  type createSuffixTemplate,
  type createSimpleTemplate,
  combineUtilities,
  UtilityTemplate
} from "../handlers/template-generator";

export const BOX_SHADOW_CONFIGS:             UtilityTemplate[] = [];
export const TEXT_SHADOW_CONFIGS:            UtilityTemplate[] = [];
export const OPACITY_CONFIGS:                UtilityTemplate[] = [];
export const MIX_BLEND_MODE_CONFIGS:         UtilityTemplate[] = [];
export const BACKGROUND_BLEND_MODE_CONFIGS:  UtilityTemplate[] = [];
export const MASK_CLIP_CONFIGS:              UtilityTemplate[] = [];
export const MASK_COMPOSITE_CONFIGS:         UtilityTemplate[] = [];
export const MASK_IMAGE_CONFIGS:             UtilityTemplate[] = [];
export const MASK_MODE_CONFIGS:              UtilityTemplate[] = [];
export const MASK_ORIGIN_CONFIGS:            UtilityTemplate[] = [];
export const MASK_POSITION_CONFIGS:          UtilityTemplate[] = [];
export const MASK_REPEAT_CONFIGS:            UtilityTemplate[] = [];
export const MASK_SIZE_CONFIGS:              UtilityTemplate[] = [];
export const MASK_TYPE_CONFIGS:              UtilityTemplate[] = [];