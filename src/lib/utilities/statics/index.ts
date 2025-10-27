import type { StaticUtility } from '@/interfaces';

// docs-start-static_Ua
import {
  alignContent,
  alignItems,
  alignSelf,
  alignBaseline,
  all,
  appearance,
  aspectRatio,
  animationComposition,
  animationDirection,
  animationFillMode,
  animationPlayState
} from "./static_Ua";

export const static_Ua: StaticUtility = {
  ...alignContent,
  ...alignItems,
  ...alignSelf,
  ...alignBaseline,
  ...all,
  ...animationComposition,
  ...animationDirection,
  ...animationFillMode,
  ...animationPlayState,
  ...appearance,
  ...aspectRatio,
};
// docs-end-static_Ua

import {
  backfaceVisibility,
  backgroundAttachment
} from "./static_Ub";

import { cursor } from './static_Uc/cursor';


export const static_Ub: StaticUtility = {
  ...backfaceVisibility,
  ...backgroundAttachment
};

export const static_Uc: StaticUtility = {
  ...cursor,
};
