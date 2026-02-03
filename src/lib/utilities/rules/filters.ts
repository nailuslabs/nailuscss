import { 
  generateFromTemplates,
  generateSimpleUtilities,
  type createSuffixTemplate,
  type createSimpleTemplate,
  combineUtilities,
  UtilityTemplate
} from "../handlers/template-generator";

export const FILTER_CONFIGS:              UtilityTemplate[] = [];
export const BLUR_CONFIGS:                UtilityTemplate[] = [];
export const BRIGHTNESS_CONFIGS:          UtilityTemplate[] = [];
export const CONTRAST_CONFIGS:            UtilityTemplate[] = [];
export const DROP_SHADOW_CONFIGS:         UtilityTemplate[] = [];
export const GRAYSCALE_CONFIGS:           UtilityTemplate[] = [];
export const HUE_ROTATE_CONFIGS:          UtilityTemplate[] = [];
export const INVERT_CONFIGS:              UtilityTemplate[] = [];
export const SATURATE_CONFIGS:            UtilityTemplate[] = [];
export const SEPIA_CONFIGS:               UtilityTemplate[] = [];
export const BACKDROP_FILTER_CONFIGS:     UtilityTemplate[] = [];
export const BACKDROP_BLUR_CONFIGS:       UtilityTemplate[] = [];
export const BACKDROP_BRIGHTNESS_CONFIGS: UtilityTemplate[] = [];
export const BACKDROP_CONTRAST_CONFIGS:   UtilityTemplate[] = [];
export const BACKDROP_GRAYSCALE_CONFIGS:  UtilityTemplate[] = [];
export const BACKDROP_HUE_ROTATE_CONFIGS: UtilityTemplate[] = [];
export const BACKDROP_INVERT_CONFIGS:     UtilityTemplate[] = [];
export const BACKDROP_OPACITY_CONFIGS:    UtilityTemplate[] = [];
export const BACKDROP_SATURATE_CONFIGS:   UtilityTemplate[] = [];
export const BACKDROP_SEPIA_CONFIGS:      UtilityTemplate[] = [];