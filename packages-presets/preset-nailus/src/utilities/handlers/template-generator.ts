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

import type {
  StaticUtility,
  DynamicUtility,
  Utility,
  PluginUtils,
  Output
} from '@nailuscss/core/interfaces';

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
  handler: DynamicUtilityHandler;
  
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

/**
 * Génère des StaticUtility à partir de templates
 * 
 * @example
 * // Sans suffixes
 * const utilities = generateStaticUtilities([
 *   {
 *     base: 'flex',
 *     aliases: ['flx', 'fx'],
 *     utility: { display: 'flex' },
 *     meta: { group: 'display', order: 1 }
 *   }
 * ]);
 * 
 * @example
 * // Avec suffixes
 * const utilities = generateStaticUtilities([
 *   {
 *     base: 'justify',
 *     aliases: ['jc'],
 *     suffixes: ['start', 'center', 'end'],
 *     utility: (suffix) => ({ 'justify-content': suffix }),
 *     meta: { group: 'justifyContent', order: 1 }
 *   }
 * ]);
 */
export function generateStaticUtilities(templates: StaticTemplate[]): StaticUtility {
  const result: StaticUtility = {};
  
  templates.forEach(template => {
    const allBases = [template.base, ...(template.aliases || [])];
    
    if (template.suffixes && template.suffixes.length > 0) {
      // CAS 1 : Avec suffixes
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
      // CAS 2 : Sans suffixes
      allBases.forEach(base => {
        const utility = typeof template.utility === 'function'
          ? template.utility()
          : template.utility;
          
        result[base] = { utility, meta: template.meta };
      });
    }
  });
  
  return result;
}

/**
 * Alias pour rétrocompatibilité
 */
export const generateFromTemplates = generateStaticUtilities;

/**
 * Type pour les handlers de dynamic utilities
 */
export type DynamicUtilityHandler = (utility: Utility, context: PluginUtils) => Output;

/**
 * Génère des DynamicUtility à partir de configurations
 * 
 * @example
 * const dynamicUtils = generateDynamicUtilities([
 *   {
 *     name: 'fill',
 *     aliases: ['fl', 'f'],
 *     handler: fillFunction,
 *     pattern: {
 *       regex: /^(fill|fl|f)(?:-|$)/,
 *       normalizer: (raw) => raw.replace(/^(fl|f)(?=-|$)/, 'fill')
 *     }
 *   }
 * ]);
 * 
 * // Résultat :
 * // { fill: fillFunction, fl: fillFunction, f: fillFunction }
 */
export function generateDynamicUtilities(configs: DynamicConfig[]): DynamicUtility {
  const result: DynamicUtility = {};
  
  configs.forEach(config => {
    // Enregistrer le pattern si fourni
    if (config.pattern) {
      PatternRegistry.register({
        name: config.name,
        pattern: config.pattern.regex,
        normalizer: config.pattern.normalizer,
        aliases: config.aliases,
      });
    }
    
    // Ajouter le handler principal
    result[config.name] = config.handler;
    
    // Ajouter les aliases
    if (config.aliases) {
      config.aliases.forEach(alias => {
        result[alias] = config.handler;
      });
    }
  });
  
  return result;
}

/**
 * Combine plusieurs StaticUtility en un seul
 */
export function combineStaticUtilities(...utilities: StaticUtility[]): StaticUtility {
  return Object.assign({}, ...utilities);
}

/**
 * Combine plusieurs DynamicUtility en un seul
 */
export function combineDynamicUtilities(...utilities: DynamicUtility[]): DynamicUtility {
  return Object.assign({}, ...utilities);
}

/**
 * Alias pour rétrocompatibilité
 */
export const combineUtilities = combineStaticUtilities;

/**
 * Crée un template static simple (sans suffixes)
 * 
 * @example
 * const template = createStaticTemplate(
 *   'flex',
 *   ['flx', 'fx'],
 *   { display: 'flex' },
 *   'display',
 *   1
 * );
 */
export function createStaticTemplate(
  base: string,
  aliases: string[],
  utility: Record<string, any>,
  group: string,
  order: number = 1
): StaticTemplate {
  return { base, aliases, utility, meta: { group, order } };
}

/**
 * Crée un template static avec suffixes
 * 
 * @example
 * const template = createStaticTemplateWithSuffixes(
 *   'justify',
 *   ['jc'],
 *   ['start', 'center', 'end'],
 *   (suffix) => ({ 'justify-content': suffix }),
 *   'justifyContent',
 *   1
 * );
 */
export function createStaticTemplateWithSuffixes(
  base: string,
  aliases: string[],
  suffixes: string[],
  utilityFn: (suffix: string) => Record<string, any>,
  group: string,
  order: number = 1
): StaticTemplate {
  return { base, aliases, suffixes, utility: utilityFn, meta: { group, order } };
}

/**
 * Crée une config dynamic
 * 
 * @example
 * const config = createDynamicConfig(
 *   'fill',
 *   ['fl', 'f'],
 *   fillFunction
 * );
 */
export function createDynamicConfig(
  name: string,
  aliases: string[],
  handler: DynamicUtilityHandler,
  pattern?: { regex: RegExp; normalizer: (raw: string) => string }
): DynamicConfig {
  return { name, aliases, handler, pattern };
}

/**
 * Enregistre facilement un nouveau pattern d'alias
 * 
 * @example
 * registerPattern('opacity', ['op', 'alpha']);
 * // Génère automatiquement le pattern et le normalizer
 */
export function registerPattern(
  canonical: string,
  aliases: string[]
): void {
  const allVariants = [canonical, ...aliases];
  const pattern = new RegExp(`^(${allVariants.join('|')})(?:-|$)`);
  
  const aliasesToReplace = aliases.filter(a => a !== canonical);
  const normalizer = (raw: string) => {
    for (const alias of aliasesToReplace) {
      if (raw.startsWith(alias + '-') || raw === alias) {
        return raw.replace(new RegExp(`^${alias}(?=-|$)`), canonical);
      }
    }
    return raw;
  };
  
  PatternRegistry.register({
    name: canonical,
    pattern,
    normalizer,
    aliases,
  });
}

/**
 * Valide qu'un template est bien formé
 */
export function validateStaticTemplate(template: StaticTemplate): boolean {
  if (!template.base) return false;
  if (!template.utility) return false;
  if (!template.meta || !template.meta.group) return false;
  
  if (template.suffixes && template.suffixes.length > 0) {
    // Avec suffixes : utility doit être une fonction
    if (typeof template.utility !== 'function') {
      console.warn(`Template "${template.base}" has suffixes but utility is not a function`);
      return false;
    }
  }
  
  return true;
}

/**
 * Valide qu'une config dynamic est bien formée
 */
export function validateDynamicConfig(config: DynamicConfig): boolean {
  if (!config.name) return false;
  if (!config.handler || typeof config.handler !== 'function') return false;
  return true;
}

/**
 * Affiche les patterns enregistrés (debug)
 */
export function debugPatterns(): void {
  console.log('=== REGISTERED PATTERNS ===');
  const patterns = PatternRegistry.getAll();
  
  patterns.forEach((config, name) => {
    console.log(`\n${name}:`);
    console.log(`  Pattern: ${config.pattern}`);
    console.log(`  Aliases: ${config.aliases?.join(', ') || 'none'}`);
  });
  
  console.log(`\nTotal: ${patterns.size} patterns`);
}

/**
 * Teste la normalisation d'un utilitaire
 */
export function testNormalization(raw: string): void {
  const normalized = PatternRegistry.normalize(raw);
  console.log(`"${raw}" → "${normalized}"`);
}