import type { StaticUtility } from "@/interfaces";

export const all: StaticUtility = {
  'all-initial': {
    'utility': {
      'all': 'initial',
    },
    'meta': {
      'group': 'all',
      'order': 1,
    }
  },
  'all-inherit': {
    'utility': {
      'all': 'inherit',
    },
    'meta': {
      'group': 'all',
      'order': 2,
    }
  },
  'all-unset': {
    'utility': {
      'all': 'unset',
    },
    'meta': {
      'group': 'all',
      'order': 3,
    }
  },
  'all-revert': {
    'utility': {
      'all': 'revert',
    },
    'meta': {
      'group': 'all',
      'order': 4,
    }
  }
};
