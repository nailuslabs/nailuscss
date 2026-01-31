/**
 * GÉNÉRATEUR UNIVERSEL DE STATIC UTILITIES
 * 
 * Ce fichier contient les fonctions réutilisables pour générer
 * des static utilities à partir de templates avec des expressions régulières (patterns).
 * 
 * À utiliser dans TOUS les modules (align.ts background.ts border.ts flex.ts etc.)
 */

import type { StaticUtility } from '../../../interfaces';

// ============================================================================
// TYPES
// ============================================================================

/**
 * Template pour générer des variantes automatiquement
 */
export interface UtilityTemplate {
  /** Nom de base (ex: 'flex', 'justify', 'border') */
  base: string;
  
  /** Aliases du nom de base (ex: ['flx', 'f'] pour 'flex') */
  aliases?: string[];
  
  /** Suffixes optionnels (ex: ['start', 'center', 'end']) */
  /** Suffixes optionnels c'est a dire peuvent ne pas ou etre utiliser */
  suffixes?: string[];
  
  /** 
   * CSS utility à générer
   * - Peut être un objet fixe : { display: 'flex' }
   * - Ou une fonction qui génère l'objet : (suffix) => ({ ... })
   */
  utility: Record<string, any> | ((suffix: string) => Record<string, any>);
  
  /** Metadata pour l'ordering et le grouping */
  meta: {
    group: string;
    order: number;
  };
}

/**
 * Configuration simple sans suffixes (cas le plus commun)
 */
export interface SimpleUtilityConfig {
  /** Nom complet de l'utility */
  name: string;
  
  /** Aliases (optionnel) */
  aliases?: string[];
  
  /** CSS properties */
  utility: Record<string, any>;
  
  /** Metadata */
  meta: {
    group: string;
    order: number;
  };
}

// ============================================================================
// FONCTION UNIVERSELLE DE GÉNÉRATION
// ============================================================================

/**
 * Génère toutes les combinaisons à partir d'un tableau de templates
 * 
 * @param templates - Tableau de templates à générer
 * @returns Object StaticUtility avec toutes les variantes
 * 
 * @example
 * const utilities = generateFromTemplates([
 *   {
 *     base: 'flex',
 *     aliases: ['flx', 'f'],
 *     utility: { display: 'flex' },
 *     meta: { group: 'display', order: 4 },
 *   }
 * ]);
 */
export function generateFromTemplates(templates: UtilityTemplate[]): StaticUtility {
  const result: StaticUtility = {};
  
  templates.forEach(template => {
    // Liste complète des bases (nom complet + aliases)
    const allBases = [template.base, ...(template.aliases || [])];
    
    if (template.suffixes && template.suffixes.length > 0) {
      // CAS 1 : Avec suffixes (ex: justify-start, justify-center, etc.)
      allBases.forEach(base => {
        template.suffixes!.forEach(suffix => {
          const key = `${base}-${suffix}`;
          const utility = typeof template.utility === 'function'
            ? template.utility(suffix)
            : template.utility;
          
          result[key] = { utility, meta: template.meta };
        });
      });
    } else {
      // CAS 2 : Sans suffixes (ex: flex, grid, hidden)
      allBases.forEach(base => {
        result[base] = {
          utility: template.utility as Record<string, any>,
          meta: template.meta,
        };
      });
    }
  });
  
  return result;
}

/**
 * Génère des utilities simples (sans suffixes)
 * Version simplifiée pour le cas le plus commun
 * 
 * @example
 * const utilities = generateSimpleUtilities([
 *   { name: 'flex', aliases: ['flx', 'f'], utility: { display: 'flex' }, meta: {...} },
 *   { name: 'grid', aliases: ['grd', 'g'], utility: { display: 'grid' }, meta: {...} },
 * ]);
 */
export function generateSimpleUtilities(configs: SimpleUtilityConfig[]): StaticUtility {
  const result: StaticUtility = {};
  
  configs.forEach(config => {
    const allNames = [config.name, ...(config.aliases || [])];
    
    allNames.forEach(name => {
      result[name] = {
        utility: config.utility,
        meta: config.meta,
      };
    });
  });
  
  return result;
}

/**
 * Combine plusieurs objets StaticUtility en un seul
 * 
 * @example
 * const combined = combineUtilities(
 *   displayUtilities,
 *   positionUtilities,
 *   borderUtilities
 * );
 */
export function combineUtilities(...utilities: StaticUtility[]): StaticUtility {
  return Object.assign({}, ...utilities);
}

/**
 * Crée un template simple (sans suffixes)
 */
export function createSimpleTemplate(
  base: string,
  aliases: string[],
  utility: Record<string, any>,
  group: string,
  order: number = 1
): UtilityTemplate {
  return {
    base,
    aliases,
    utility,
    meta: { group, order },
  };
}

/**
 * Crée un template avec suffixes
 */
export function createSuffixTemplate(
  base: string,
  aliases: string[],
  suffixes: string[],
  utilityFn: (suffix: string) => Record<string, any>,
  group: string,
  order: number = 1
): UtilityTemplate {
  return {
    base,
    aliases,
    suffixes,
    utility: utilityFn,
    meta: { group, order },
  };
}

