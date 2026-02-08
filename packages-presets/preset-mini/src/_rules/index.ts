import { 
  StaticUtility,
  DynamicUtility,
} from '@nailuscss/core/interfaces';

import {
  staticSvgUtilities,
  dynamicSvgUtilities
} from "./svg";

export const staticUtilities: StaticUtility = {
  ...staticSvgUtilities,
};

export const dynamicUtilities: DynamicUtility = {
  ...dynamicSvgUtilities,
};