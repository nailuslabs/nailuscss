import type { StaticUtility, DynamicUtility } from '../../../interfaces';
import { allStaticFlexUtilities } from './flex';
import { allStaticGridUtilities } from './grid';
import { allStaticAlignUtilities } from './align';

export const staticUtilities: StaticUtility = {
  ...allStaticFlexUtilities,
  ...allStaticGridUtilities,
  ...allStaticAlignUtilities,
};