import type {
  StaticUtility,
  DynamicUtility
} from '../../../interfaces';
import { allflexUtilityConfigs } from './flex';
import {allLayoutUtilityConfigs } from './layout';

export const staticUtilities: StaticUtility = {
  ...allLayoutUtilityConfigs,
  ...allflexUtilityConfigs
};