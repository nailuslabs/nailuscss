import type { DynamicUtility } from '@/interfaces';

import  { accentColor } from './dynamic_Ua/accentColor';
import  { anchor }      from './dynamic_Ua/anchor';
import  { animation }   from './dynamic_Ua/animations';
import  { aspectRatio } from './dynamic_Ua/aspectRatio';

import  { backdrop }    from './dynamic_Ub/backdrop';

import  { container }   from './dynamic_Uc/container';

export function isNumberLead(i: string) {
  return /^\d/.test(i) ? i : undefined;
}

export function notNumberLead(i: string) {
  return /^\d/.test(i) ? undefined : i;
}

export const dynamicUtilities: DynamicUtility = {
  accent:      accentColor,
  anchor:      anchor,
  animate:     animation,
  aspect:      aspectRatio,
  backdrop:    backdrop,

  container:   container,
};
