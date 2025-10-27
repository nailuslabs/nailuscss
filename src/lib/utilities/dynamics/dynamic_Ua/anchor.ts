import { Utility } from '../../handler';
import { pluginOrder } from '../../../../config/order';
import { Property, Style } from '../../../../utils/style';
import type { PluginUtils, Output } from '../../../../interfaces';

export function anchor(utility: Utility, { theme }: PluginUtils): Output {
	const raw = utility.raw;

	// Gestion de anchor-name
	if (raw.startsWith('anchor-name')) {
		if (raw === 'anchor-name') {
			// Rien à définir sans valeur
			return;
		}
		// Après `anchor-name-`
		const u = utility.clone(raw.slice(12));
		const val = u.handler.handleSquareBrackets().handleVariable().handleBody(theme('anchorName')).value;
		if (!val) return;
		return new Style(utility.class, new Property('anchor-name', val))
			.updateMeta('utilities', 'anchorName', pluginOrder.anchorName, 1, true);
	}

	// Gestion de position-anchor
	if (raw.startsWith('position-anchor')) {
		if (raw === 'position-anchor') {
			// Rien à définir sans valeur
			return;
		}
		// Après `position-anchor-`
		const u = utility.clone(raw.slice(15));
		const val = u.handler.handleSquareBrackets().handleVariable().handleBody(theme('anchorName')).value;
		if (!val) return;
		return new Style(utility.class, new Property('position-anchor', val))
			.updateMeta('utilities', 'anchorPosition', pluginOrder.anchorPosition, 1, true);
	}

	// Gestion de anchor-position (alias)
	if (raw.startsWith('anchor-position')) {
		if (raw === 'anchor-position') {
			// Rien à définir sans valeur
			return;
		}
		// Après `anchor-position-`
		const u = utility.clone(raw.slice(16));
		const val = u.handler.handleSquareBrackets().handleVariable().handleBody(theme('anchorName')).value;
		if (!val) return;
		return new Style(utility.class, new Property('position-anchor', val))
			.updateMeta('utilities', 'anchorPosition', pluginOrder.anchorPosition, 1, true);
	}

	// Fonction helper pour gérer toutes les directions d'ancrage
	const handleAnchorDirection = (prefix: string, cssProp: string, compatibleSides: string[], pluginName: string, order: number) => {
		// Cas: anchor-{prefix} (sans valeur) - utilise le côté par défaut
		if (raw === `anchor-${prefix}`) {
			// Utilise le premier côté compatible comme défaut
			const defaultSide = compatibleSides[0];
			const value = `anchor(${defaultSide})`;
			return new Style(utility.class, new Property(cssProp, value))
				.updateMeta('utilities', pluginName, order, 1, true);
		}

		// Cas: anchor-{prefix}-[valeur]
		const token = `anchor-${prefix}-`;
		if (raw.startsWith(token)) {
			const u = utility.clone(raw.slice(token.length));
			const val = u.handler.handleSquareBrackets().handleVariable().handleBody(theme('anchor')).value;
			if (!val) return;

			// Vérifie si la valeur est déjà une expression complexe
			const isComplexExpression = /^(calc\(|anchor\(|anchor-size\(|var\(|--)/.test(val) || /\(.+\)/.test(val);
			const finalValue = isComplexExpression ? val : `anchor(${val})`;

			return new Style(utility.class, new Property(cssProp, finalValue))
				.updateMeta('utilities', pluginName, order, 1, true);
		}

		return;
	};

	// Fonction helper pour gérer les propriétés avec anchor-size()
	const handleAnchorSize = (prefix: string, cssProp: string, pluginName: string, order: number, defaultSize?: string) => {
		// Cas: anchor-size-{prefix} (sans valeur) - utilise la dimension par défaut
		if (raw === `anchor-size-${prefix}`) {
			if (defaultSize) {
				const value = `anchor-size(${defaultSize})`;
				return new Style(utility.class, new Property(cssProp, value))
					.updateMeta('utilities', pluginName, order, 1, true);
			}
			return;
		}

		// Cas: anchor-size-{prefix}-[valeur]
		const token = `anchor-size-${prefix}-`;
		if (raw.startsWith(token)) {
			const u = utility.clone(raw.slice(token.length));
			const val = u.handler.handleSquareBrackets().handleVariable().handleBody(theme('anchorSize')).value;
			if (!val) return;

			// Détermine la valeur finale pour anchor-size()
			let finalValue;
			if (/^(width|height|block|inline|self-block|self-inline)$/.test(val)) {
				// Valeur simple de dimension
				finalValue = `anchor-size(${val})`;
			} else if (/^--[a-zA-Z0-9-]+/.test(val)) {
				// Nom d'anchor personnalisé sans dimension spécifiée
				// La dimension sera déduite de la propriété CSS
				finalValue = `anchor-size(${val})`;
			} else if (val.includes(',')) {
				// Valeur avec anchor-name et dimension, ou avec fallback
				const parts = val.split(',').map(part => part.trim());
				if (parts.length === 2) {
					// Vérifie si le deuxième paramètre est une dimension ou un fallback
					if (/^(width|height|block|inline|self-block|self-inline)$/.test(parts[1])) {
						finalValue = `anchor-size(${parts[0]} ${parts[1]})`;
					} else {
						finalValue = `anchor-size(${parts[0]}, ${parts[1]})`;
					}
				} else if (parts.length === 3) {
					// anchor-name, dimension, et fallback
					finalValue = `anchor-size(${parts[0]} ${parts[1]}, ${parts[2]})`;
				} else {
					// Expression complexe
					finalValue = val;
				}
			} else {
				// Expression complexe ou valeur non reconnue
				finalValue = val;
			}

			return new Style(utility.class, new Property(cssProp, finalValue))
				.updateMeta('utilities', pluginName, order, 1, true);
		}

		return;
	};

	// Définition des côtés compatibles pour chaque type de propriété
	const physicalVerticalSides = ['top', 'bottom', 'start', 'end', 'self-start', 'self-end', 'center'];
	const physicalHorizontalSides = ['left', 'right', 'start', 'end', 'self-start', 'self-end', 'center'];

	// Directions physiques avec côtés compatibles
	const top = handleAnchorDirection('top', 'top', physicalVerticalSides, 'anchorTop', pluginOrder.anchorTop);
	if (top) return top;

	const bottom = handleAnchorDirection('bottom', 'bottom', physicalVerticalSides, 'anchorBottom', pluginOrder.anchorBottom);
	if (bottom) return bottom;

	const left = handleAnchorDirection('left', 'left', physicalHorizontalSides, 'anchorLeft', pluginOrder.anchorLeft);
	if (left) return left;

	const right = handleAnchorDirection('right', 'right', physicalHorizontalSides, 'anchorRight', pluginOrder.anchorRight);
	if (right) return right;

	// Directions logiques - block (compatibles avec les côtés verticaux en mode d'écriture horizontal)
	const blockStart = handleAnchorDirection('start', 'inset-block-start', physicalVerticalSides, 'anchorStart', pluginOrder.anchorStart);
	if (blockStart) return blockStart;

	const blockEnd = handleAnchorDirection('end', 'inset-block-end', physicalVerticalSides, 'anchorEnd', pluginOrder.anchorEnd);
	if (blockEnd) return blockEnd;

	// Directions logiques - inline (compatibles avec les côtés horizontaux en mode d'écriture horizontal)
	const inlineStart = handleAnchorDirection('inline-start', 'inset-inline-start', physicalHorizontalSides, 'anchorInlineStart', pluginOrder.anchorInlineStart);
	if (inlineStart) return inlineStart;

	const inlineEnd = handleAnchorDirection('inline-end', 'inset-inline-end', physicalHorizontalSides, 'anchorInlineEnd', pluginOrder.anchorInlineEnd);
	if (inlineEnd) return inlineEnd;

	// Propriétés raccourcies - toutes acceptent center et les pourcentages

	// Gestion de anchor-inset
	if (raw === 'anchor-inset') {
		// Pour la propriété raccourcie inset, utilise center comme défaut
		return new Style(utility.class, new Property('inset', 'anchor(center)'))
			.updateMeta('utilities', 'anchorInset', pluginOrder.anchorInset, 1, true);
	}
	if (raw.startsWith('anchor-inset-')) {
		const u = utility.clone(raw.slice('anchor-inset-'.length));
		const val = u.handler.handleSquareBrackets().handleVariable().handleBody(theme('anchor')).value;
		if (!val) return;
		const isComplexExpression = /^(calc\(|anchor\(|anchor-size\(|var\(|--)/.test(val) || /\(.+\)/.test(val);
		const finalValue = isComplexExpression ? val : `anchor(${val})`;
		return new Style(utility.class, new Property('inset', finalValue))
			.updateMeta('utilities', 'anchorInset', pluginOrder.anchorInset, 1, true);
	}

	// Gestion de anchor-inset-block
	if (raw === 'anchor-inset-block') {
		return new Style(utility.class, new Property('inset-block', 'anchor(center)'))
			.updateMeta('utilities', 'anchorInsetBlock', pluginOrder.anchorInsetBlock, 1, true);
	}
	if (raw.startsWith('anchor-inset-block-')) {
		const u = utility.clone(raw.slice('anchor-inset-block-'.length));
		const val = u.handler.handleSquareBrackets().handleVariable().handleBody(theme('anchor')).value;
		if (!val) return;
		const isComplexExpression = /^(calc\(|anchor\(|anchor-size\(|var\(|--)/.test(val) || /\(.+\)/.test(val);
		const finalValue = isComplexExpression ? val : `anchor(${val})`;
		return new Style(utility.class, new Property('inset-block', finalValue))
			.updateMeta('utilities', 'anchorInsetBlock', pluginOrder.anchorInsetBlock, 1, true);
	}

	// Gestion de anchor-inset-inline
	if (raw === 'anchor-inset-inline') {
		return new Style(utility.class, new Property('inset-inline', 'anchor(center)'))
			.updateMeta('utilities', 'anchorInsetInline', pluginOrder.anchorInsetInline, 1, true);
	}
	if (raw.startsWith('anchor-inset-inline-')) {
		const u = utility.clone(raw.slice('anchor-inset-inline-'.length));
		const val = u.handler.handleSquareBrackets().handleVariable().handleBody(theme('anchor')).value;
		if (!val) return;
		const isComplexExpression = /^(calc\(|anchor\(|anchor-size\(|var\(|--)/.test(val) || /\(.+\)/.test(val);
		const finalValue = isComplexExpression ? val : `anchor(${val})`;
		return new Style(utility.class, new Property('inset-inline', finalValue))
			.updateMeta('utilities', 'anchorInsetInline', pluginOrder.anchorInsetInline, 1, true);
	}

	// Gestion des propriétés de taille avec anchor-size()

	// Propriétés de sizing
	const width = handleAnchorSize('width', 'width', 'anchorSizeWidth', pluginOrder.anchorSizeWidth, 'width');
	if (width) return width;

	const height = handleAnchorSize('height', 'height', 'anchorSizeHeight', pluginOrder.anchorSizeHeight, 'height');
	if (height) return height;

	const minWidth = handleAnchorSize('min-width', 'min-width', 'anchorSizeMinWidth', pluginOrder.anchorSizeMinWidth, 'width');
	if (minWidth) return minWidth;

	const minHeight = handleAnchorSize('min-height', 'min-height', 'anchorSizeMinHeight', pluginOrder.anchorSizeMinHeight, 'height');
	if (minHeight) return minHeight;

	const maxWidth = handleAnchorSize('max-width', 'max-width', 'anchorSizeMaxWidth', pluginOrder.anchorSizeMaxWidth, 'width');
	if (maxWidth) return maxWidth;

	const maxHeight = handleAnchorSize('max-height', 'max-height', 'anchorSizeMaxHeight', pluginOrder.anchorSizeMaxHeight, 'height');
	if (maxHeight) return maxHeight;

	// Propriétés logiques de sizing
	const blockSize = handleAnchorSize('block', 'block-size', 'anchorSizeBlock', pluginOrder.anchorSizeBlock, 'block');
	if (blockSize) return blockSize;

	const inlineSize = handleAnchorSize('inline', 'inline-size', 'anchorSizeInline', pluginOrder.anchorSizeInline, 'inline');
	if (inlineSize) return inlineSize;

	const minBlockSize = handleAnchorSize('min-block', 'min-block-size', 'anchorSizeMinBlock', pluginOrder.anchorSizeMinBlock, 'block');
	if (minBlockSize) return minBlockSize;

	const minInlineSize = handleAnchorSize('min-inline', 'min-inline-size', 'anchorSizeMinInline', pluginOrder.anchorSizeMinInline, 'inline');
	if (minInlineSize) return minInlineSize;

	const maxBlockSize = handleAnchorSize('max-block', 'max-block-size', 'anchorSizeMaxBlock', pluginOrder.anchorSizeMaxBlock, 'block');
	if (maxBlockSize) return maxBlockSize;

	const maxInlineSize = handleAnchorSize('max-inline', 'max-inline-size', 'anchorSizeMaxInline', pluginOrder.anchorSizeMaxInline, 'inline');
	if (maxInlineSize) return maxInlineSize;

	// Gestion des marges avec anchor-size()
	const margin = handleAnchorSize('margin', 'margin', 'anchorSizeMargin', pluginOrder.anchorSizeMargin);
	if (margin) return margin;

	const marginTop = handleAnchorSize('margin-top', 'margin-top', 'anchorSizeMarginTop', pluginOrder.anchorSizeMarginTop, 'height');
	if (marginTop) return marginTop;

	const marginBottom = handleAnchorSize('margin-bottom', 'margin-bottom', 'anchorSizeMarginBottom', pluginOrder.anchorSizeMarginBottom, 'height');
	if (marginBottom) return marginBottom;

	const marginLeft = handleAnchorSize('margin-left', 'margin-left', 'anchorSizeMarginLeft', pluginOrder.anchorSizeMarginLeft, 'width');
	if (marginLeft) return marginLeft;

	const marginRight = handleAnchorSize('margin-right', 'margin-right', 'anchorSizeMarginRight', pluginOrder.anchorSizeMarginRight, 'width');
	if (marginRight) return marginRight;

	// Marges logiques
	const marginBlock = handleAnchorSize('margin-block', 'margin-block', 'anchorSizeMarginBlock', pluginOrder.anchorSizeMarginBlock);
	if (marginBlock) return marginBlock;

	const marginInline = handleAnchorSize('margin-inline', 'margin-inline', 'anchorSizeMarginInline', pluginOrder.anchorSizeMarginInline);
	if (marginInline) return marginInline;

	const marginBlockStart = handleAnchorSize('margin-block-start', 'margin-block-start', 'anchorSizeMarginBlockStart', pluginOrder.anchorSizeMarginBlockStart);
	if (marginBlockStart) return marginBlockStart;

	const marginBlockEnd = handleAnchorSize('margin-block-end', 'margin-block-end', 'anchorSizeMarginBlockEnd', pluginOrder.anchorSizeMarginBlockEnd);
	if (marginBlockEnd) return marginBlockEnd;

	const marginInlineStart = handleAnchorSize('margin-inline-start', 'margin-inline-start', 'anchorSizeMarginInlineStart', pluginOrder.anchorSizeMarginInlineStart);
	if (marginInlineStart) return marginInlineStart;

	const marginInlineEnd = handleAnchorSize('margin-inline-end', 'margin-inline-end', 'anchorSizeMarginInlineEnd', pluginOrder.anchorSizeMarginInlineEnd);
	if (marginInlineEnd) return marginInlineEnd;

	return;
}
