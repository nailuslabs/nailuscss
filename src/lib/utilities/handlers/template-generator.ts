/**
 * GÉNÉRATEUR UNIVERSEL DE UTILITIES
 * 
 * Supporte :
 * StaticUtility (utilitaires statiques)
 * DynamicUtility (utilitaires dynamiques avec fonctions)
 * Regex patterns pour détection automatique
 * Aliases centralisés (ZERO duplication)
 * Avec ET sans suffixes
 * Normalisation automatique
 * 
 * À utiliser dans TOUS les modules (svg.ts, background.ts, flex.ts, etc.)
 */

import type { StaticUtility, DynamicUtility } from '../../../interfaces';

/**
 * Configuration d'un pattern de détection
 */
export interface PatternConfig {
  /** Nom du pattern (ex: 'fill', 'stroke', 'bg') */
  name: string;
  
  /** Regex pour détecter le pattern */
  pattern: RegExp;
  
  /** Fonction de normalisation (alias → nom canonique) */
  normalizer: (raw: string) => string;
  
  /** Liste des alias (pour documentation) */
  aliases?: string[];
}