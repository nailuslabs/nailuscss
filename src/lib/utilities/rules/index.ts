import { 
  StaticUtility,
  DynamicUtility,
} from "../../../interfaces";

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