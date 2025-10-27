import type { StaticUtility } from '../../interfaces';

import { static_Ua, static_Uc } from "./statics/index";

export const staticUtilities: StaticUtility = {
  // Utilities for alignments in flexbox and grid layouts
  ...static_Ua,
  ...static_Uc
};
