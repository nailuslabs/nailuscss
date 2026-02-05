import type {
  StaticUtility,
  DynamicUtility
} from '../../../interfaces';
import { generateFromTemplates } from '../handlers/template-generator';
import { allAlignUtilityConfigs } from './align';
import { allflexUtilityConfigs } from './flex';
import {allLayoutUtilityConfigs } from './layout';


import { staticSvgConfigs } from './svg';
import { staticAccessibilityConfigs } from './accessibility';

export const staticUtilities: StaticUtility = {
  ...allLayoutUtilityConfigs,
  ...allflexUtilityConfigs,
  ...allAlignUtilityConfigs,


  // ACCESSIBILITY - FORCED COLOR ADJUST
  ...staticSvgConfigs

  // ACCESSIBILITY - FORCED COLOR ADJUST
  ...staticAccessibilityConfigs
};