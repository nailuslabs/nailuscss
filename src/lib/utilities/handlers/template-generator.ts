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

/**
 * Template pour générer des utilitaires statiques
 */
export interface StaticTemplate {
  /** Nom de base (ex: 'flex', 'stroke-2', 'bg-cover') */
  base: string;
  
  /** Aliases du nom de base */
  aliases?: string[];
  
  /** Suffixes optionnels (peuvent ne pas être utilisés) */
  suffixes?: string[];
  
  /** 
   * CSS utility à générer
   * - Objet fixe : { display: 'flex' }
   * - Fonction avec suffix : (suffix) => ({ ... })
   * - Fonction sans suffix : () => ({ ... })
   */
  utility: Record<string, any> | ((suffix?: string) => Record<string, any>);
  
  /** Metadata */
  meta: {
    group: string;
    order: number;
  };
}

/**
 * Configuration d'un utilitaire dynamique
 */
export interface DynamicConfig {
  /** Nom de la fonction (ex: 'fill', 'background') */
  name: string;
  
  /** Aliases (ex: ['fl', 'f'] pour 'fill') */
  aliases?: string[];
  
  /** La fonction handler elle-même */
  handler: Function;
  
  /** 
   * Pattern de détection optionnel
   * Si fourni, sera automatiquement enregistré dans PatternRegistry
   */
  pattern?: {
    regex: RegExp;
    normalizer: (raw: string) => string;
  };
}

/**
 * Registre centralisé pour tous les patterns d'aliases
 * UN SEUL endroit pour définir TOUS les patterns !
 */
export class PatternRegistry {
  private static patterns: Map<string, PatternConfig> = new Map();

  /**
   * Enregistre un nouveau pattern
   * 
   * @example
   * PatternRegistry.register({
   *   name: 'fill',
   *   pattern: /^(fill|fl|f)(?:-|$)/,
   *   normalizer: (raw) => raw.replace(/^(fl|f)(?=-|$)/, 'fill'),
   *   aliases: ['fl', 'f']
   * });
   */
  static register(config: PatternConfig): void {
    this.patterns.set(config.name, config);
  }

  /**
   * Enregistre plusieurs patterns en une fois
   */
  static registerMany(configs: PatternConfig[]): void {
    configs.forEach(config => this.register(config));
  }

  /**
   * Normalise un utilitaire en utilisant tous les patterns
   * 
   * @example
   * PatternRegistry.normalize('fl-red-500')  // → 'fill-red-500'
   * PatternRegistry.normalize('sk-2')        // → 'stroke-2'
   */
  static normalize(raw: string): string {
    for (const config of this.patterns.values()) {
      if (config.pattern.test(raw)) {
        return config.normalizer(raw);
      }
    }
    return raw;
  }

  /**
   * Vérifie si un utilitaire correspond à un pattern spécifique
   * 
   * @example
   * PatternRegistry.matches('fl-red-500', 'fill')  // → true
   * PatternRegistry.matches('sk-2', 'stroke')      // → true
   */
  static matches(raw: string, patternName: string): boolean {
    const normalized = this.normalize(raw);
    const config = this.patterns.get(patternName);
    
    if (!config) return false;
    
    // Vérifier si le normalized commence par le nom du pattern
    return normalized.startsWith(patternName);
  }

  /**
   * Récupère tous les patterns enregistrés
   */
  static getAll(): Map<string, PatternConfig> {
    return new Map(this.patterns);
  }

  /**
   * Récupère un pattern spécifique
   */
  static get(name: string): PatternConfig | undefined {
    return this.patterns.get(name);
  }

  /**
   * Réinitialise tous les patterns (utile pour les tests)
   */
  static reset(): void {
    this.patterns.clear();
  }

  /**
   * Compte le nombre de patterns enregistrés
   */
  static count(): number {
    return this.patterns.size;
  }
}