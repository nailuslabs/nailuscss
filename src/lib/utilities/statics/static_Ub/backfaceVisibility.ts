import { StaticUtility } from "../../../../interfaces";

export const backfaceVisibility : StaticUtility = {
  'backface-visible': {
    'utility': {
      'backface-visibility': 'visible',
    },
    'meta': {
      'group': 'backfaceVisibility',
      'order': 1,
    },
  },
  'backface-hidden': {
    'utility': {
      'backface-visibility': 'hidden',
    },
    'meta': {
      'group': 'backfaceVisibility',
      'order': 2,
    },
  },
}
