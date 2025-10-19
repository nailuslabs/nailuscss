import type { StaticUtility } from '../../interfaces';
import { alignUtilities } from "./align";

export const staticUtilities: StaticUtility = {
  // Utilities for alignments in flexbox and grid layouts
  ...alignUtilities,

  // end export
};
