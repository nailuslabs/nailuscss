import type { StaticUtility } from '@/interfaces';

export const animationComposition: StaticUtility = {
  // animation
  // Utilis..............
  'animate-compose-add': {
    'utility': {
      'animation-composition': 'add',
    },
    'meta': {
      'group': 'animationComposition',
      'order': 1,
    }
  },
  'animate-compose-replace': {
    'utility': {
      'animation-composition': 'replace',
    },
    'meta': {
      'group': 'animationComposition',
      'order': 2,
    }
  },
  'animate-compose-accumulate': {
    'utility': {
      'animation-composition': 'accumulate',
    },
    'meta': {
      'group': 'animationComposition',
      'order': 3,
    }
  },
};
