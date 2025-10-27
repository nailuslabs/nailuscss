import type { StaticUtility } from '../../../../interfaces';

export const backgroundAttachment: StaticUtility = {
  'bg-fixed': {
    'utility': {
      'background-attachment': 'fixed',
    },
    'meta': {
      'group': 'backgroundAttachment',
      'order': 1,
    }
  },
  'bg-local': {
    'utility': {
      'background-attachment': 'local',
    },
    'meta': {
      'group': 'backgroundAttachment',
      'order': 2,
    }
  },
  'bg-scroll': {
    'utility': {
      'background-attachment': 'scroll',
    },
    'meta': {
      'group': 'backgroundAttachment',
      'order': 3,
    }
  },
}
