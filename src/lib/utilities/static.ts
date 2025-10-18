import type { StaticUtility } from '../../interfaces';

export const staticUtilities: StaticUtility = {
  // alignContent
  // Utilities for controlling how rows are positioned in multi-row flex and grid containers.
  // Normal alignment
  'content-normal': {
    'utility': {
      'align-content': 'normal',
    },
    'meta': {
      'group': 'alignContent',
      'order': 1,
    },
  },
  // Basic positional alignment
  'content-start': {
    'utility': {
      'align-content': 'start',
    },
    'meta': {
      'group': 'alignContent',
      'order': 2,
    },
  },
  'content-center': {
    'utility': {
      'align-content': 'center',
    },
    'meta': {
      'group': 'alignContent',
      'order': 3,
    },
  },
  'content-end': {
    'utility': {
      'align-content': 'end',
    },
    'meta': {
      'group': 'alignContent',
      'order': 4,
    },
  },
  'content-flex-start': {
    'utility': {
      'align-content': 'flex-start',
    },
    'meta': {
      'group': 'alignContent',
      'order': 5,
    },
  },
  'content-flex-end':   {
    'utility': {
      'align-content': 'flex-end',
    },
    'meta': {
      'group': 'alignContent',
      'order': 6,
    },
  },
  // Baseline alignment
  'content-baseline':       {
    'utility': {
      'align-content': 'baseline',
    },
    'meta': {
      'group': 'alignContent',
      'order': 7,
    },
  },
  'content-first-baseline': {
    'utility': {
      'align-content': 'first baseline',
    },
    'meta': {
      'group': 'alignContent',
      'order': 8,
    },
  },
  'content-last-baseline':  {
    'utility': {
      'align-content': 'last baseline',
    },
    'meta': {
      'group': 'alignContent',
      'order': 9,
    },
  },
  // Distributed alignment
  'content-between': {
    'utility': {
      'align-content': 'space-between',
    },
    'meta': {
      'group': 'alignContent',
      'order': 10,
    },
  },
  'content-around':  {
    'utility': {
      'align-content': 'space-around',
    },
    'meta': {
      'group': 'alignContent',
      'order': 11,
    },
  },
  'content-evenly':  {
    'utility': {
      'align-content': 'space-evenly',
    },
    'meta': {
      'group': 'alignContent',
      'order': 12,
    },
  },
  'content-stretch': {
    'utility': {
      'align-content': 'space-stretch',
    },
    'meta': {
      'group': 'alignContent',
      'order': 13,
    },
  },
  // Overflow alignment
  'content-safe-center':   {
    'utility': {
      'align-content': 'safe center',
    },
    'meta': {
      'group': 'alignContent',
      'order': 14,
    },
  },
  'content-unsafe-center': {
    'utility': {
      'align-content': 'unsafe center',
    },
    'meta': {
      'group': 'alignContent',
      'order': 15,
    },
  },
  // Global values
  'content-inherit': {
    'utility': {
      'align-content': 'inherit',
    },
    'meta': {
      'group': 'alignContent',
      'order': 16,
    },
  },
  'content-initial': {
    'utility': {
      'align-content': 'initial',
    },
    'meta': {
      'group': 'alignContent',
      'order': 17,
    },
  },
  'content-revert':  {
    'utility': {
      'align-content': 'revert',
    },
    'meta': {
      'group': 'alignContent',
      'order': 18,
    },
  },
  'content-revert-layer': {
    'utility': {
      'align-content': 'revert-layer',
    },
    'meta': {
      'group': 'alignContent',
      'order': 19,
    },
  },
  'content-unset': {
    'utility': {
      'align-content': 'unset',
    },
    'meta': {
      'group': 'alignContent',
      'order': 20,
    },
  },

  // alignItems
  // Utilities for controlling how flex and grid items are positioned along a container's cross axis.
  'items-normal': {
    'utility': {
      'align-items': 'normal',
    },
    'meta': {
      'group': 'alignItems',
      'order': 1,
    },
  },
  'items-stretch': {
    'utility': {
      'align-items': 'stretch',
    },
    'meta': {
      'group': 'alignItems',
      'order': 2,
    },
  },
  'items-center': {
    'utility': {
      'align-items': 'center',
    },
    'meta': {
      'group': 'alignItems',
      'order': 3,
    },
  },
  'items-start': {
    'utility': {
      'align-items': 'start',
    },
    'meta': {
      'group': 'alignItems',
      'order': 4,
    },
  },
  'items-end': {
    'utility': {
      'align-items': 'end',
    },
    'meta': {
      'group': 'alignItems',
      'order': 5,
    },
  },
  'items-flex-start': {
    'utility': {
      'align-items': 'flex-start',
    },
    'meta': {
      'group': 'alignItems',
      'order': 6,
    },
  },
  'items-flex-end': {
    'utility': {
      'align-items': 'flex-end',
    },
    'meta': {
      'group': 'alignItems',
      'order': 7,
    },
  },
  'items-self-start': {
    'utility': {
      'align-items': 'self-start',
    },
    'meta': {
      'group': 'alignItems',
      'order': 8,
    },
  },
  'items-self-end': {
    'utility': {
      'align-items': 'self-end',
    },
    'meta': {
      'group': 'alignItems',
      'order': 9,
    },
  },
  'items-first': {
    'utility': {
      'align-items': 'first',
    },
    'meta': {
      'group': 'alignItems',
      'order': 10,
    },
  },
  'items-first-baseline': {
    'utility': {
      'align-items': 'first-baseline',
    },
    'meta': {
      'group': 'alignItems',
      'order': 11,
    },
  },
  'items-last-baseline': {
    'utility': {
      'align-items': 'last-baseline',
    },
    'meta': {
      'group': 'alignItems',
      'order': 12,
    },
  },
  'items-safe-center': {
    'utility': {
      'align-items': 'safe center',
    },
    'meta': {
      'group': 'alignItems',
      'order': 13,
    },
  },
  'items-unsafe-center': {
    'utility': {
      'align-items': 'unsafe center',
    },
    'meta': {
      'group': 'alignItems',
      'order': 14,
    },
  },
  'items-inherit': {
    'utility': {
      'align-items': 'inherit',
    },
    'meta': {
      'group': 'alignItems',
      'order': 15,
    },
  },
  'items-initial': {
    'utility': {
      'align-items': 'initial',
    },
    'meta': {
      'group': 'alignItems',
      'order': 16,
    },
  },
  'items-unset': {
    'utility': {
      'align-items': 'unset',
    },
    'meta': {
      'group': 'alignItems',
      'order': 17,
    },
  },

  // alignSelf
  // Utilities for controlling ....
  'self-auto': {
    'utility': {
      'align-self': 'auto',
    },
    'meta': {
      'group': 'alignSelf',
      'order': 1,
    },
  },
  'self-normal': {
    'utility': {
      'align-self': 'normal',
    },
    'meta': {
      'group': 'alignSelf',
      'order': 2,
    },
  },
  'self-center': {
    'utility': {
      'align-self': 'center',
    },
    'meta': {
      'group': 'alignSelf',
      'order': 3,
    },
  },
  'self-start': {
    'utility': {
      'align-self': 'start',
    },
    'meta': {
      'group': 'alignSelf',
      'order': 4,
    },
  },
  'self-end': {
    'utility': {
      'align-self': 'end',
    },
    'meta': {
      'group': 'alignSelf',
      'order': 5,
    },
  },
  'self-flex-start': {
    'utility': {
      'align-self': 'flex-start',
    },
    'meta': {
      'group': 'alignSelf',
      'order': 6,
    },
  },
  'self-flex-end': {
    'utility': {
      'align-self': 'flex-end',
    },
    'meta': {
      'group': 'alignSelf',
      'order': 7,
    },
  },
  'self-baseline': {
    'utility': {
      'align-self': 'baseline',
    },
    'meta': {
      'group': 'alignSelf',
      'order': 8,
    },
  },
  'self-first-baseline': {
    'utility': {
      'align-self': 'first baseline',
    },
    'meta': {
      'group': 'alignSelf',
      'order': 9,
    },
  },
  'self-last-baseline': {
    'utility': {
      'align-self': 'last baseline',
    },
    'meta': {
      'group': 'alignSelf',
      'order': 10,
    },
  },
  'self-stretch': {
    'utility': {
      'align-self': 'stretch',
    },
    'meta': {
      'group': 'alignSelf',
      'order': 11,
    },
  },
  'self-safe-center': {
    'utility': {
      'align-self': 'safe center',
    },
    'meta': {
      'group': 'alignSelf',
      'order': 12,
    },
  },
  'self-unsafe-center': {
    'utility': {
      'align-self': 'unsafe center',
    },
    'meta': {
      'group': 'alignSelf',
      'order': 13,
    },
  },
  'self-inherit': {
    'utility': {
      'align-self': 'inherit',
    },
    'meta': {
      'group': 'alignSelf',
      'order': 14,
    },
  },
  'self-initial': {
    'utility': {
      'align-self': 'initial',
    },
    'meta': {
      'group': 'alignSelf',
      'order': 15,
    },
  },
  'self-unset': {
    'utility': {
      'align-self': 'unset',
    },
    'meta': {
      'group': 'alignSelf',
      'order': 16,
    },
  },

  // end export
};
