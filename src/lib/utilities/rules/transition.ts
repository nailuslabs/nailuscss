import { 
  generateFromTemplates,
  generateSimpleUtilities,
  type createSuffixTemplate,
  type createSimpleTemplate,
  combineUtilities,
  UtilityTemplate
} from "../handlers/template-generator";

export const TRANSITION_PROPERTY_CONFIGS:          UtilityTemplate[] = [];
export const TRANSITION_BEHAVIOR_CONFIGS:          UtilityTemplate[] = [];
export const TRANSITION_DURATION_CONFIGS:          UtilityTemplate[] = [];
export const TRANSITION_TIMING_FUNCTION_CONFIGS:   UtilityTemplate[] = [];
export const TRANSITION_DELAY_CONFIGS:             UtilityTemplate[] = [];