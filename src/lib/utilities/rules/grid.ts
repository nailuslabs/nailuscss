/**
 * GRID STATIC UTILITIES
 * 
 * Utilities statiques pour CSS Grid avec des alias cohérents
 * inspirés de Bootstrap, Tailwind CSS, UnoCSS et Atomizer
 */

import {
  generateFromTemplates,
  generateSimpleUtilities,
  combineUtilities,
  type UtilityTemplate,
  type SimpleUtilityConfig
} from '../handlers/template-generator';


export const GRID_TEMPLATE_COLUMNS_CONFIGS: UtilityTemplate[] = [];
export const GRID_COLUMN_CONFIGS:           UtilityTemplate[] = [];
export const GRID_TEMPLATE_ROWS_CONFIGS:    UtilityTemplate[] = [];
export const GRID_ROW_CONFIGS:              UtilityTemplate[] = [];
export const GRID_AUTO_FLOW_CONFIGS:        UtilityTemplate[] = [];
export const GRID_AUTO_COLUMNS_CONFIGS:     UtilityTemplate[] = [];
export const GRID_AUTO_ROWS_CONFIGS:        UtilityTemplate[] = [];

export const GAP_CONFIGS:                   UtilityTemplate[] = [];