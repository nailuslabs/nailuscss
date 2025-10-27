import type { StaticUtility } from '@/interfaces';

export const animationDirection: StaticUtility = {
  // animation
  // Utilis..............
  'animate-direction-normal': {
    'utility': {
      'animation-direction': 'normal',
    },
    'meta': {
      'group': 'animationDirection',
      'order': 1,
    }
  },
  'animate-direction-reverse': {
    'utility': {
      'animation-direction': 'reverse',
    },
    'meta': {
      'group': 'animationDirection',
      'order': 2,
    }
  },
  'animate-direction-alternate': {
    'utility': {
      'animation-direction': 'alternate',
    },
    'meta': {
      'group': 'animationDirection',
      'order': 3,
    }
  },
  'animate-direction-alternate-reverse': {
    'utility': {
      'animation-direction': 'alternate-reverse',
    },
    'meta': {
      'group': 'animationDirection',
      'order': 4,
    }
  },
};
