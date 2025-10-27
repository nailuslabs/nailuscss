import type { StaticUtility } from '@/interfaces';

export const animationFillMode: StaticUtility = {
  // animation
  // Utilis..............
  'animate-fill-none': {
    'utility': {
      'animation-fill-mode': 'none',
    },
    'meta': {
      'group': 'animationFillMode',
      'order': 1,
    }
  },
  'animate-fill-forwards': {
    'utility': {
      'animation-fill-mode': 'forwards',
    },
    'meta': {
      'group': 'animationFillMode',
      'order': 2,
    }
  },
  'animate-fill-backwards': {
    'utility': {
      'animation-fill-mode': 'backwards',
    },
    'meta': {
      'group': 'animationFillMode',
      'order': 2,
    }
  },
  'animate-fill-both': {
    'utility': {
      'animation-fill-mode': 'both',
    },
    'meta': {
      'group': 'animationFillMode',
      'order': 2,
    }
  },
};
