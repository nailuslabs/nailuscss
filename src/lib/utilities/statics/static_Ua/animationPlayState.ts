import type { StaticUtility } from '@/interfaces';

export const animationPlayState: StaticUtility = {
  // animation
  // Utilis..............
  'animate-play-running': {
    'utility': {
      'animation-composition': 'running',
    },
    'meta': {
      'group': 'animationPlayState',
      'order': 1,
    }
  },
  'animate-play-paused': {
    'utility': {
      'animation-composition': 'paused',
    },
    'meta': {
      'group': 'animationPlayState',
      'order': 2,
    }
  },
};
