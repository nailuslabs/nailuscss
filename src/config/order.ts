export const pseudoClassNames = [
  // États d’interaction
  'hover', 'focus', 'active', 'visited', 'link', 'target',
  'focus-visible', 'focus-within', 'checked',

  // États des formulaires
  'default', 'disabled', 'enabled', 'indeterminate', 'invalid', 'valid',
  'optional', 'required', 'placeholder-shown', 'read-only', 'read-write',

  // Sélecteurs de structure
  'first-of-type', 'last-of-type', 'only-child', 'only-of-type',

  // Racine / contenu vide
  'root', 'empty',

  // Nouveaux pseudo-classes pour Tailwind v4+
  'open',  'group-open',  'peer-open',  'has-*',  'group-has-*',  'peer-has-*',

  // aria-*
  'aria-checked', 'aria-disabled', 'aria-expanded', 'aria-selected', 'aria-pressed', 'aria-readonly', 'aria-required', 'aria-hidden',

  // data-*
  'data-*',
];

export const variantOrder = [
  // Pseudo-classes classiques
  ...pseudoClassNames,

  // Négation / not
  'not-checked', 'not-disabled', 'not-first-of-type', 'not-last-of-type',
  'not-only-child', 'not-only-of-type', 'not-first', 'not-last',

  // Sélecteurs positionnels
  'first', 'last', 'even', 'odd', 'even-of-type', 'odd-of-type',

  // Pseudo-éléments
  'before', 'after', 'first-letter', 'first-line', 'file-selector-button', 'file',
  'selection', 'marker', 'svg', 'all',

  // Sélecteurs relationnels
  'children', 'siblings', 'sibling',

  // Direction
  'ltr', 'rtl',

  // group-*, peer-*, peer-not-*
  ...pseudoClassNames.map(pseudoClassName => `group-${pseudoClassName}`), 'group-open', 'group-has-*',

  ...pseudoClassNames.map(pseudoClassName => `peer-${pseudoClassName}`), 'peer-open', 'peer-has-*',

  ...pseudoClassNames.map(pseudoClassName => `peer-not-${pseudoClassName}`),

  // Motion
  'motion-safe', 'motion-reduce',

  // aria-*,
  'aria-checked', 'aria-disabled', 'aria-expanded', 'aria-selected', 'aria-pressed', 'aria-readonly', 'aria-required', 'aria-hidden',

  // data-* / Supports /
  'data-*', 'open', '@supports',

  // has-*
  'has-*',
];

export enum layerOrder {
  // ────────────── Core layers ──────────────
  base         = 0,   // reset / preflight
  components   = 10,  // UI components
  utilities    = 20,  // utilitaires générés
  variants     = 30,  // pseudo-classes, responsive, etc.

  // ────────────── Sub-layers ──────────────
  defaults     = 40,  // styles par défaut
  screens      = 50,  // sm:, md:, lg:, xl:
  darkMode     = 60,  // dark:
  supports     = 70,  // @supports()
  container    = 75,  // @container queries
  print        = 80,  // @media print

  // États / Interaction
  hover        = 90,
  focus        = 100,
  active       = 110,
  disabled     = 120,

  // Motion
  motionSafe   = 130,
  motionReduce = 140,

  // Direction
  rtl          = 150,
  ltr          = 151,

  // Attributs
  aria         = 160, // aria-[state]
  data         = 170, // data-[attr]
  group        = 180, // group-/peer-

  // Special
  containerData = 190, // data-[] inside container queries
  shortcuts = 200, // shortcuts
}

export enum pluginOrder {
  'accentColor'                 = 10,
  'alignContent'                = 20,
  'alignItems'                  = 30,
  'alignSelf'                   = 40,
  'alignBaseline'               = 50,
  'all'                         = 60,

  // Propriétés d'ancrage - regroupées et ordonnées logiquement
  'anchor'                      = 70,
  'anchorName'                  = 80,
  'anchorPosition'              = 90,
  'anchorTop'                   = 100,
  'anchorBottom'                = 110,
  'anchorLeft'                  = 120,
  'anchorRight'                 = 130,
  'anchorStart'                 = 140,
  'anchorEnd'                   = 150,
  'anchorInlineStart'           = 160,
  'anchorInlineEnd'             = 170,
  'anchorInset'                 = 180,
  'anchorInsetBlock'            = 190,
  'anchorInsetInline'           = 200,
  'anchorSizeWidth'             = 210,
  'anchorSizeHeight'            = 220,
  'anchorSizeMinWidth'          = 230,
  'anchorSizeMinHeight'         = 240,
  'anchorSizeMaxWidth'          = 250,
  'anchorSizeMaxHeight'         = 260,
  'anchorSizeBlock'             = 270,
  'anchorSizeInline'            = 280,
  'anchorSizeMinBlock'          = 290,
  'anchorSizeMinInline'         = 300,
  'anchorSizeMaxBlock'          = 310,
  'anchorSizeMaxInline'         = 320,
  'anchorSizeMargin'            = 330,
  'anchorSizeMarginTop'         = 340,
  'anchorSizeMarginBottom'      = 350,
  'anchorSizeMarginLeft'        = 360,
  'anchorSizeMarginRight'       = 370,
  'anchorSizeMarginBlock'       = 380,
  'anchorSizeMarginInline'      = 390,
  'anchorSizeMarginBlockStart'  = 400,
  'anchorSizeMarginBlockEnd'    = 410,
  'anchorSizeMarginInlineStart' = 420,
  'anchorSizeMarginInlineEnd'   = 430,

  'animation'                   = 450,
  'animationComposition'        = 460,
  'animationDelay'              = 470,
  'animationDirection'          = 480,
  'animationDuration'           = 490,
  'animationFillMode'           = 500,
  'animationIterationCount'     = 510,
  'animationName'               = 520,
  'animationPlayState'          = 530,
  'animationRange'              = 540,
  'animationRangeEnd'           = 550,
  'animationRangeStart'         = 560,
  'animationTimeline'           = 570,
  'animationTimingFunction'     = 580,
  'appearance'                  = 590,
  'aspectRatio'                 = 600,

  'backdropFilter'              = 610,
  'backdropBlur'                = 620,
  'backdropBrightness'          = 630,
  'backdropContrast'            = 640,
  'backdropGrayscale'           = 650,
  'backdropHueRotate'           = 660,
  'backdropInvert'              = 670,
  'backdropOpacity'             = 680,
  'backdropSaturate'            = 690,
  'backdropSepia'               = 700,
  'backfaceVisibility'          = 710,

  'columns' = 80,
  'container' = 300,
  'space' = 200,
  'divideWidth' = 300,
  'divideColor' = 400,
  'divideStyle' = 500,
  'divideOpacity' = 600,
  'accessibility' = 700,
  'backgroundClip' = 1000,
  'backgroundColor' = 1100,
  'backgroundImage' = 1200,
  'gradientColorStops' = 1300,
  'backgroundOpacity' = 1400,
  'backgroundPosition' = 1500,
  'backgroundRepeat' = 1600,
  'backgroundSize' = 1700,
  'backgroundOrigin' = 1750,
  'borderCollapse' = 1800,
  'borderColor' = 1900,
  'borderOpacity' = 2000,
  'borderRadius' = 2100,
  'borderStyle' = 2200,
  'borderWidth' = 2300,
  'boxDecorationBreak' = 2350,
  'boxSizing' = 2400,
  'cursor' = 2500,
  'captionSide' = 2550,
  'emptyCells' = 2560,
  'display' = 2600,
  'flexBasis' = 2699,
  'flexDirection' = 2700,
  'flexWrap' = 2800,
  'placeItems' = 2900,
  'placeContent' = 3000,
  'placeSelf' = 3100,
  'justifyItems' = 3500,
  'justifyContent' = 3600,
  'justifySelf' = 3700,
  'flex' = 3800,
  'flexGrow' = 3900,
  'flexShrink' = 4000,
  'order' = 4100,
  'float' = 4200,
  'clear' = 4300,
  'fontFamily' = 4400,
  'fontWeight' = 4500,
  'height' = 4600,
  'fontSize' = 4700,
  'lineHeight' = 4800,
  'listStylePosition' = 4900,
  'listStyleType' = 5000,
  'margin' = 5100,
  'maxHeight' = 5200,
  'maxWidth' = 5300,
  'minHeight' = 5400,
  'minWidth' = 5500,
  'objectFit' = 5600,
  'objectPosition' = 5700,
  'opacity' = 5800,
  'outline' = 5900,
  'overflow' = 6000,
  'overscrollBehavior' = 6100,
  'padding' = 6200,
  'placeholderColor' = 6300,
  'placeholderOpacity' = 6400,
  'caretColor' = 6450,
  'caretOpacity' = 6460,
  'tabSize' = 6470,
  'pointerEvents' = 6500,
  'position' = 6600,
  'inset' = 6700,
  'resize' = 6800,
  'boxShadow' = 6900,
  'boxShadowColor' = 6950,
  'ringWidth' = 7000,
  'ringOffsetColor' = 7100,
  'ringOffsetWidth' = 7200,
  'ringColor' = 7300,
  'ringOpacity' = 7400,
  'fill' = 7500,
  'stroke' = 7600,
  'strokeWidth' = 7700,
  'strokeDashArray' = 7750,
  'strokeDashOffset' = 7760,
  'tableLayout' = 7800,
  'textAlign' = 7900,
  'textColor' = 8000,
  'textOpacity' = 8100,
  'textOverflow' = 8200,
  'textShadow' = 8250,
  'fontStyle' = 8300,
  'textTransform' = 8400,
  'textDecorationStyle' = 8450,
  'textDecorationLength' = 8455,
  'textDecorationColor' = 8460,
  'textDecorationOpacity' = 8470,
  'textDecorationOffset' = 8480,
  'textDecorationThickness' = 8490,
  'textDecoration' = 8500,
  'textIndent' = 8550,
  'textStrokeColor' = 8560,
  'textStrokeWidth' = 8570,
  'content' = 8580,
  'fontSmoothing' = 8600,
  'fontVariantNumeric' = 8700,
  'letterSpacing' = 8800,
  'userSelect' = 8900,
  'verticalAlign' = 9000,
  'visibility' = 9100,
  'whitespace' = 9200,
  'wordBreak' = 9300,
  'writingMode' = 9340,
  'hyphens' = 9350,
  'width' = 9400,
  'zIndex' = 9500,
  'isolation' = 9550,
  'gap' = 9600,
  'gridAutoFlow' = 9700,
  'gridTemplateColumns' = 9800,
  'gridAutoColumns' = 9900,
  'gridColumn' = 10000,
  'gridColumnStart' = 10100,
  'gridColumnEnd' = 10200,
  'gridTemplateRows' = 10300,
  'gridAutoRows' = 10400,
  'gridRow' = 10500,
  'gridRowStart' = 10600,
  'gridRowEnd' = 10700,
  'transform' = 10800,
  'transformOrigin' = 10900,
  'scale' = 11000,
  'rotate' = 11100,
  'translate' = 11200,
  'skew' = 11300,
  'perspective' = 11350,
  'perspectiveOrigin' = 11360,
  'transitionProperty' = 11400,
  'transitionTimingFunction' = 11500,
  'transitionDuration' = 11600,
  'transitionDelay' = 11700,
  'keyframes' = 11800,
  'imageRendering' = 11950,
  'mixBlendMode' = 12000,
  'backgroundBlendMode' = 12100,
  'filter' = 12200,
  'blur' = 12300,
  'brightness' = 12400,
  'contrast' = 12500,
  'dropShadow' = 12600,
  'grayscale' = 12700,
  'hueRotate' = 12800,
  'invert' = 12900,
  'saturate' = 13000,
  'sepia' = 13100,
  'willChange' = 14200,
  'touchAction' = 14300,
  'scrollBehavior' = 14400,
}
