// /**
//  * ASPECT RATIO CONFIGURATIONS - COMPLETE WORLD FORMATS
//  * Compatible avec: TailwindCSS, Bootstrap, UnoCSS, Atomizer
//  * 
//  * Couvre tous les formats standard: vidéo, cinéma, photo, social media,
//  * devices, papier, broadcast, et formats professionnels
//  */

// // const ASPECT_RATIO_CONFIGS: UtilityTemplate[] = [
// //   // ============================================================================
// //   // BASIC & UTILITY
// //   // ============================================================================
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['auto', 'full'],
// //     utility: (suffix: string) => {
// //       const valueMap: Record<string, string> = {
// //         'auto': 'auto',
// //         'full': '100%',
// //       };
// //       return { 'aspect-ratio': valueMap[suffix] };
// //     },
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 1,
// //       description: 'Automatic and full aspect ratios',
// //     },
// //   },

// //   // ============================================================================
// //   // SQUARE FORMATS (1:1)
// //   // ============================================================================
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['square', '1/1', '1-1', '1x1', '1:1'],
// //     utility: () => ({ 'aspect-ratio': '1 / 1' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 2,
// //       description: 'Square - Instagram post, profile pictures, QR codes',
// //     },
// //   },

// //   // ============================================================================
// //   // VIDEO STANDARD FORMATS
// //   // ============================================================================
  
// //   // 16:9 - Standard HD Video
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['video', '16/9', '16-9', '16x9', '16:9', 'hdtv', 'youtube', 'hd', 'fhd', '1080p'],
// //     utility: () => ({ 'aspect-ratio': '16 / 9' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 3,
// //       description: 'Standard HD video - YouTube, HDTV, Full HD, most monitors',
// //     },
// //   },

// //   // 4:3 - Classic TV
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['classic', '4/3', '4-3', '4x3', '4:3', 'tv', 'standard', 'sdtv', 'ntsc'],
// //     utility: () => ({ 'aspect-ratio': '4 / 3' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 4,
// //       description: 'Classic TV - Old monitors, iPad, SDTV, NTSC',
// //     },
// //   },

// //   // 5:4 - Old Monitors
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['5/4', '5-4', '5x4', '5:4', 'sxga'],
// //     utility: () => ({ 'aspect-ratio': '5 / 4' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 5,
// //       description: 'Old computer monitors - SXGA (1280×1024)',
// //     },
// //   },

// //   // ============================================================================
// //   // CINEMA FORMATS
// //   // ============================================================================

// //   // 21:9 - Ultrawide Cinema
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['cinema', '21/9', '21-9', '21x9', '21:9', 'ultrawide', 'cinematic', 'uw'],
// //     utility: () => ({ 'aspect-ratio': '21 / 9' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 6,
// //       description: 'Ultrawide cinema - Cinematic videos, ultrawide monitors (2.33:1)',
// //     },
// //   },

// //   // 2.39:1 - Anamorphic/CinemaScope
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['anamorphic', '2.39/1', '239-100', '2.39:1', 'scope', 'cinemascope', 'panavision'],
// //     utility: () => ({ 'aspect-ratio': '2.39 / 1' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 7,
// //       description: 'Anamorphic - CinemaScope, Panavision, modern blockbusters',
// //     },
// //   },

// //   // 2.4:1 - Full Aperture
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['2.4/1', '24-10', '2.4:1', 'full-aperture'],
// //     utility: () => ({ 'aspect-ratio': '2.4 / 1' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 8,
// //       description: 'Full aperture cinema',
// //     },
// //   },

// //   // 2.35:1 - Classic Anamorphic
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['2.35/1', '235-100', '2.35:1', 'classic-scope'],
// //     utility: () => ({ 'aspect-ratio': '2.35 / 1' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 9,
// //       description: 'Classic anamorphic cinema',
// //     },
// //   },

// //   // 2.2:1 - Todd-AO
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['2.2/1', '22-10', '2.2:1', 'todd-ao', 'super-panavision'],
// //     utility: () => ({ 'aspect-ratio': '2.2 / 1' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 10,
// //       description: 'Todd-AO, Super Panavision 70',
// //     },
// //   },

// //   // 1.85:1 - US Theatrical
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['cinema-classic', '1.85/1', '185-100', '1.85:1', 'theatrical', 'us-theatrical'],
// //     utility: () => ({ 'aspect-ratio': '1.85 / 1' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 11,
// //       description: 'US theatrical standard - Common cinema format',
// //     },
// //   },

// //   // 1.66:1 - European Theatrical
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['1.66/1', '166-100', '1.66:1', 'european', 'euro-theatrical'],
// //     utility: () => ({ 'aspect-ratio': '1.66 / 1' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 12,
// //       description: 'European theatrical standard',
// //     },
// //   },

// //   // 1.43:1 - IMAX
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['imax', '1.43/1', '143-100', '1.43:1', 'imax-70mm'],
// //     utility: () => ({ 'aspect-ratio': '1.43 / 1' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 13,
// //       description: 'IMAX 70mm - Premium large format cinema',
// //     },
// //   },

// //   // 1.9:1 - IMAX Digital / DCI
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['dci', '1.9/1', '19-10', '1.9:1', 'imax-digital', 'digital-cinema'],
// //     utility: () => ({ 'aspect-ratio': '1.9 / 1' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 14,
// //       description: 'DCI digital cinema / IMAX Digital standard',
// //     },
// //   },

// //   // 1.375:1 - Academy Ratio
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['academy', '1.375/1', '1375-1000', '1.375:1', 'academy-ratio'],
// //     utility: () => ({ 'aspect-ratio': '1.375 / 1' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 15,
// //       description: 'Academy ratio - Classic Hollywood silent films',
// //     },
// //   },

// //   // ============================================================================
// //   // PORTRAIT VIDEO FORMATS
// //   // ============================================================================

// //   // 9:16 - Portrait Video
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['portrait', '9/16', '9-16', '9x16', '9:16', 'story', 'vertical', 'stories'],
// //     utility: () => ({ 'aspect-ratio': '9 / 16' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 16,
// //       description: 'Portrait video - Instagram Stories, TikTok, Reels, Snapchat',
// //     },
// //   },

// //   // 3:4 - Portrait Classic
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['portrait-classic', '3/4', '3-4', '3x4', '3:4'],
// //     utility: () => ({ 'aspect-ratio': '3 / 4' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 17,
// //       description: 'Classic portrait - Instagram vertical posts',
// //     },
// //   },

// //   // 4:5 - Instagram Portrait
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['4/5', '4-5', '4x5', '4:5', 'instagram-portrait', 'ig-portrait'],
// //     utility: () => ({ 'aspect-ratio': '4 / 5' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 18,
// //       description: 'Instagram portrait post - Medium format photo',
// //     },
// //   },

// //   // 2:3 - Pinterest
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['pinterest', '2/3', '2-3', '2x3', '2:3', 'pin'],
// //     utility: () => ({ 'aspect-ratio': '2 / 3' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 19,
// //       description: 'Pinterest pin - Optimal vertical ratio',
// //     },
// //   },

// //   // 9:21 - Ultra Portrait
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['vertical-long', '9/21', '9-21', '9x21', '9:21', 'ultra-portrait'],
// //     utility: () => ({ 'aspect-ratio': '9 / 21' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 20,
// //       description: 'Extended vertical video format',
// //     },
// //   },

// //   // ============================================================================
// //   // WIDESCREEN MONITOR FORMATS
// //   // ============================================================================

// //   // 16:10 - Widescreen
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['widescreen', '16/10', '16-10', '16x10', '16:10', 'wxga', 'wuxga'],
// //     utility: () => ({ 'aspect-ratio': '16 / 10' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 21,
// //       description: 'Widescreen - MacBook, productivity monitors, WUXGA',
// //     },
// //   },

// //   // 8:5 (same as 16:10)
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['8/5', '8-5', '8x5', '8:5'],
// //     utility: () => ({ 'aspect-ratio': '8 / 5' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 22,
// //       description: 'Alternative notation for 16:10',
// //     },
// //   },

// //   // 32:9 - Super Ultrawide
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['super-wide', '32/9', '32-9', '32x9', '32:9', 'dual-monitor', 'superwide'],
// //     utility: () => ({ 'aspect-ratio': '32 / 9' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 23,
// //       description: 'Super ultrawide monitors - Dual monitor replacement',
// //     },
// //   },

// //   // 32:10 - Super Ultrawide Tall
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['32/10', '32-10', '32x10', '32:10'],
// //     utility: () => ({ 'aspect-ratio': '32 / 10' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 24,
// //       description: 'Super ultrawide with extra height',
// //     },
// //   },

// //   // ============================================================================
// //   // MOBILE & DEVICE FORMATS
// //   // ============================================================================

// //   // 19.5:9 - Modern Smartphone
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['smartphone', '19.5/9', '195-90', '19.5:9', 'mobile', 'phone'],
// //     utility: () => ({ 'aspect-ratio': '19.5 / 9' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 25,
// //       description: 'Modern smartphone screens - iPhone X and later',
// //     },
// //   },

// //   // 20:9 - Tall Smartphone
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['20/9', '20-9', '20x9', '20:9', 'tall-phone'],
// //     utility: () => ({ 'aspect-ratio': '20 / 9' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 26,
// //       description: 'Tall smartphone format - Many Android devices',
// //     },
// //   },

// //   // 9:19.5 - Smartphone Portrait
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['mobile-portrait', '9/19.5', '9-195', '9:19.5', 'smartphone-portrait', 'phone-portrait'],
// //     utility: () => ({ 'aspect-ratio': '9 / 19.5' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 27,
// //       description: 'Modern smartphone portrait orientation',
// //     },
// //   },

// //   // 9:20 - Tall Phone Portrait
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['9/20', '9-20', '9x20', '9:20'],
// //     utility: () => ({ 'aspect-ratio': '9 / 20' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 28,
// //       description: 'Tall phone portrait orientation',
// //     },
// //   },

// //   // 3:2 - Tablet
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['tablet', '3/2', '3-2', '3x2', '3:2', 'surface'],
// //     utility: () => ({ 'aspect-ratio': '3 / 2' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 29,
// //       description: 'Tablet format - Microsoft Surface, some iPads',
// //     },
// //   },

// //   // 2:3 - Tablet Portrait
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['2/3-tablet', 'tablet-portrait'],
// //     utility: () => ({ 'aspect-ratio': '2 / 3' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 30,
// //       description: 'Tablet portrait orientation',
// //     },
// //   },

// //   // ============================================================================
// //   // PHOTOGRAPHY FORMATS
// //   // ============================================================================

// //   // 3:2 - 35mm Film
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['photo', '35mm', 'camera', 'film', 'dslr'],
// //     utility: () => ({ 'aspect-ratio': '3 / 2' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 31,
// //       description: '35mm film photography - DSLR standard',
// //     },
// //   },

// //   // 2:3 - 35mm Portrait
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['photo-portrait', '35mm-portrait'],
// //     utility: () => ({ 'aspect-ratio': '2 / 3' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 32,
// //       description: '35mm film portrait orientation',
// //     },
// //   },

// //   // 4:5 - Medium Format
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['medium-format', 'mf', '645'],
// //     utility: () => ({ 'aspect-ratio': '4 / 5' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 33,
// //       description: 'Medium format photography - 6×4.5cm',
// //     },
// //   },

// //   // 5:4 - Large Format
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['large-format', '5x4', 'view-camera'],
// //     utility: () => ({ 'aspect-ratio': '5 / 4' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 34,
// //       description: 'Large format photography - 5×4 view camera',
// //     },
// //   },

// //   // 6:7 - Medium Format 6x7
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['6/7', '6-7', '6x7', '6:7', 'mamiya'],
// //     utility: () => ({ 'aspect-ratio': '6 / 7' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 35,
// //       description: 'Medium format 6×7cm - Ideal portrait ratio',
// //     },
// //   },

// //   // 7:6 - Medium Format 6x7 Landscape
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['7/6', '7-6', '7x6', '7:6'],
// //     utility: () => ({ 'aspect-ratio': '7 / 6' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 36,
// //       description: 'Medium format 6×7cm landscape',
// //     },
// //   },

// //   // ============================================================================
// //   // SOCIAL MEDIA SPECIFIC FORMATS
// //   // ============================================================================

// //   // 1.91:1 - Instagram Landscape
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['instagram-landscape', '1.91/1', 'ig-landscape'],
// //     utility: () => ({ 'aspect-ratio': '1.91 / 1' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 37,
// //       description: 'Instagram landscape post (max width)',
// //     },
// //   },

// //   // 205:78 - Facebook Cover
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['facebook-cover', '205/78', 'fb-cover', '205:78'],
// //     utility: () => ({ 'aspect-ratio': '205 / 78' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 38,
// //       description: 'Facebook cover photo (≈2.63:1)',
// //     },
// //   },

// //   // 3:1 - Twitter/X Header
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['twitter-header', '3/1', '3-1', '3x1', '3:1', 'x-header'],
// //     utility: () => ({ 'aspect-ratio': '3 / 1' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 39,
// //       description: 'Twitter/X header banner',
// //     },
// //   },

// //   // 4:1 - LinkedIn Cover
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['linkedin-cover', '4/1', '4-1', '4x1', '4:1', 'linkedin-banner'],
// //     utility: () => ({ 'aspect-ratio': '4 / 1' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 40,
// //       description: 'LinkedIn cover photo / banner',
// //     },
// //   },

// //   // 2:1 - Facebook Event
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['2/1', '2-1', '2x1', '2:1', 'facebook-event', 'fb-event'],
// //     utility: () => ({ 'aspect-ratio': '2 / 1' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 41,
// //       description: 'Facebook event cover - Wide banner',
// //     },
// //   },

// //   // 1.5:1 - Twitter Card
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['1.5/1', '15-10', '1.5:1', 'twitter-card'],
// //     utility: () => ({ 'aspect-ratio': '1.5 / 1' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 42,
// //       description: 'Twitter card summary with large image',
// //     },
// //   },

// //   // ============================================================================
// //   // DOCUMENT & PAPER FORMATS
// //   // ============================================================================

// //   // 1:1.414 - A4 Portrait (ISO 216)
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['a4', 'paper', '1/1.414', 'iso-paper', 'a-series'],
// //     utility: () => ({ 'aspect-ratio': '1 / 1.414' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 43,
// //       description: 'A4 paper portrait - ISO 216 standard (√2:1)',
// //     },
// //   },

// //   // 1.414:1 - A4 Landscape
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['a4-landscape', '1.414/1', 'paper-landscape'],
// //     utility: () => ({ 'aspect-ratio': '1.414 / 1' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 44,
// //       description: 'A4 paper landscape orientation',
// //     },
// //   },

// //   // 1:1.294 - US Letter Portrait
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['letter', 'us-letter', '1/1.294', '8.5x11'],
// //     utility: () => ({ 'aspect-ratio': '1 / 1.294' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 45,
// //       description: 'US Letter paper portrait (8.5×11 inches)',
// //     },
// //   },

// //   // 1.294:1 - US Letter Landscape
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['letter-landscape', '1.294/1', '11x8.5'],
// //     utility: () => ({ 'aspect-ratio': '1.294 / 1' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 46,
// //       description: 'US Letter landscape orientation',
// //     },
// //   },

// //   // 1:1.545 - Legal Paper Portrait
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['legal', 'us-legal', '1/1.545', '8.5x14'],
// //     utility: () => ({ 'aspect-ratio': '1 / 1.545' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 47,
// //       description: 'US Legal paper portrait (8.5×14 inches)',
// //     },
// //   },

// //   // ============================================================================
// //   // MATHEMATICAL & SPECIAL RATIOS
// //   // ============================================================================

// //   // 1.618:1 - Golden Ratio (φ)
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['golden', 'phi', '1.618/1', '1618-1000', '1.618:1'],
// //     utility: () => ({ 'aspect-ratio': '1.618 / 1' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 48,
// //       description: 'Golden ratio (φ) - Divine proportion, aesthetically pleasing',
// //     },
// //   },

// //   // 1:1.618 - Golden Ratio Portrait
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['golden-portrait', '1/1.618', 'phi-portrait'],
// //     utility: () => ({ 'aspect-ratio': '1 / 1.618' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 49,
// //       description: 'Golden ratio portrait orientation',
// //     },
// //   },

// //   // 1.414:1 - Silver Ratio (√2)
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['silver', 'sqrt2', '1.414/1', 'silver-ratio'],
// //     utility: () => ({ 'aspect-ratio': '1.414 / 1' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 50,
// //       description: 'Silver ratio (√2) - ISO paper standard',
// //     },
// //   },

// //   // ============================================================================
// //   // BROADCAST & TV FORMATS
// //   // ============================================================================

// //   // 14:9 - Compromise Format
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['14/9', '14-9', '14x9', '14:9', 'compromise'],
// //     utility: () => ({ 'aspect-ratio': '14 / 9' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 51,
// //       description: 'Compromise format - Between 4:3 and 16:9',
// //     },
// //   },

// //   // 5:3 - European HDTV
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['5/3', '5-3', '5x3', '5:3', 'super-16mm'],
// //     utility: () => ({ 'aspect-ratio': '5 / 3' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 52,
// //       description: 'Super 16mm film - European HDTV (≈1.67:1)',
// //     },
// //   },

// //   // 2:1 - Univisium
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['univisium', '18/9', '18-9', '18:9'],
// //     utility: () => ({ 'aspect-ratio': '2 / 1' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 53,
// //       description: 'Univisium - Proposed universal format',
// //     },
// //   },

// //   // ============================================================================
// //   // GAME & VIRTUAL REALITY
// //   // ============================================================================

// //   // 48:9 - Triple Monitor Setup
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['48/9', '48-9', '48x9', '48:9', 'triple-monitor', 'surround'],
// //     utility: () => ({ 'aspect-ratio': '48 / 9' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 54,
// //       description: 'Triple monitor gaming setup - NVIDIA Surround',
// //     },
// //   },

// //   // 64:27 - Ultra-wide Gaming
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['64/27', '64-27', '64x27', '64:27'],
// //     utility: () => ({ 'aspect-ratio': '64 / 27' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 55,
// //       description: 'Ultra-wide gaming monitors (≈2.37:1)',
// //     },
// //   },

// //   // ============================================================================
// //   // VINTAGE & HISTORICAL FORMATS
// //   // ============================================================================

// //   // 1.33:1 - Movietone
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['1.33/1', '133-100', '1.33:1', 'movietone'],
// //     utility: () => ({ 'aspect-ratio': '1.33 / 1' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 56,
// //       description: 'Movietone - Early sound film (same as 4:3)',
// //     },
// //   },

// //   // 1.19:1 - Movietone (Pre-1932)
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: ['1.19/1', '119-100', '1.19:1'],
// //     utility: () => ({ 'aspect-ratio': '1.19 / 1' }),
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 57,
// //       description: 'Early Movietone (pre-1932)',
// //     },
// //   },

// //   // ============================================================================
// //   // CUSTOM & ARBITRARY VALUES
// //   // ============================================================================

// //   // Custom Arbitrary (Tailwind-style)
// //   {
// //     base: 'aspect',
// //     aliases: ['aspect-ratio', 'ratio'],
// //     suffixes: [],
// //     utility: (suffix: string) => {
// //       // Handle arbitrary values: aspect-[4/3] or aspect-[1.5]
// //       const match = suffix.match(/^\[([0-9.]+)\/([0-9.]+)\]$/) || 
// //                     suffix.match(/^\[([0-9.]+)\]$/);
      
// //       if (match) {
// //         if (match[2]) {
// //           return { 'aspect-ratio': `${match[1]} / ${match[2]}` };
// //         }
// //         return { 'aspect-ratio': match[1] };
// //       }
      
// //       return {};
// //     },
// //     meta: {
// //       group: 'aspectRatio',
// //       order: 100,
// //       description: 'Custom arbitrary aspect ratios - e.g., aspect-[4/3]',
// //     },
// //   },
// // ];

// export default ASPECT_RATIO_CONFIGS;

// /**
//  * COMPLETE CSS UTILITIES GENERATOR
//  * Génère tous les utilitaires CSS standard compatibles avec:
//  * TailwindCSS, Bootstrap, UnoCSS, Atomizer
//  */

// import type { UtilityTemplate } from './generator';

// // ============================================================================
// // LAYOUT - DISPLAY
// // ============================================================================

// export const DISPLAY_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'block',
//     aliases: ['d-block', 'display-block'],
//     utility: { display: 'block' },
//     meta: { group: 'display', order: 1 },
//   },
//   {
//     base: 'inline-block',
//     aliases: ['d-inline-block', 'inline-b'],
//     utility: { display: 'inline-block' },
//     meta: { group: 'display', order: 2 },
//   },
//   {
//     base: 'inline',
//     aliases: ['d-inline'],
//     utility: { display: 'inline' },
//     meta: { group: 'display', order: 3 },
//   },
//   {
//     base: 'flex',
//     aliases: ['d-flex', 'flx'],
//     utility: { display: 'flex' },
//     meta: { group: 'display', order: 4 },
//   },
//   {
//     base: 'inline-flex',
//     aliases: ['d-inline-flex', 'inline-flx'],
//     utility: { display: 'inline-flex' },
//     meta: { group: 'display', order: 5 },
//   },
//   {
//     base: 'grid',
//     aliases: ['d-grid', 'grd'],
//     utility: { display: 'grid' },
//     meta: { group: 'display', order: 6 },
//   },
//   {
//     base: 'inline-grid',
//     aliases: ['d-inline-grid'],
//     utility: { display: 'inline-grid' },
//     meta: { group: 'display', order: 7 },
//   },
//   {
//     base: 'table',
//     aliases: ['d-table'],
//     utility: { display: 'table' },
//     meta: { group: 'display', order: 8 },
//   },
//   {
//     base: 'table-row',
//     aliases: ['d-table-row'],
//     utility: { display: 'table-row' },
//     meta: { group: 'display', order: 9 },
//   },
//   {
//     base: 'table-cell',
//     aliases: ['d-table-cell'],
//     utility: { display: 'table-cell' },
//     meta: { group: 'display', order: 10 },
//   },
//   {
//     base: 'contents',
//     aliases: ['d-contents'],
//     utility: { display: 'contents' },
//     meta: { group: 'display', order: 11 },
//   },
//   {
//     base: 'list-item',
//     aliases: ['d-list-item'],
//     utility: { display: 'list-item' },
//     meta: { group: 'display', order: 12 },
//   },
//   {
//     base: 'hidden',
//     aliases: ['d-none', 'hide'],
//     utility: { display: 'none' },
//     meta: { group: 'display', order: 13 },
//   },
//   {
//     base: 'flow-root',
//     aliases: ['d-flow-root'],
//     utility: { display: 'flow-root' },
//     meta: { group: 'display', order: 14 },
//   },
// ];

// // ============================================================================
// // LAYOUT - FLOAT
// // ============================================================================

// export const FLOAT_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'float',
//     aliases: ['fl'],
//     suffixes: ['left', 'right', 'none', 'inline-start', 'inline-end'],
//     utility: (suffix) => ({ float: suffix }),
//     meta: { group: 'float', order: 1 },
//   },
// ];

// // ============================================================================
// // LAYOUT - CLEAR
// // ============================================================================

// export const CLEAR_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'clear',
//     aliases: ['clr'],
//     suffixes: ['left', 'right', 'both', 'none', 'inline-start', 'inline-end'],
//     utility: (suffix) => ({ clear: suffix }),
//     meta: { group: 'clear', order: 1 },
//   },
// ];

// // ============================================================================
// // LAYOUT - ISOLATION
// // ============================================================================

// export const ISOLATION_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'isolate',
//     aliases: [],
//     utility: { isolation: 'isolate' },
//     meta: { group: 'isolation', order: 1 },
//   },
//   {
//     base: 'isolation-auto',
//     aliases: [],
//     utility: { isolation: 'auto' },
//     meta: { group: 'isolation', order: 2 },
//   },
// ];

// // ============================================================================
// // LAYOUT - OBJECT FIT
// // ============================================================================

// export const OBJECT_FIT_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'object',
//     aliases: ['obj'],
//     suffixes: ['contain', 'cover', 'fill', 'none', 'scale-down'],
//     utility: (suffix) => ({ 'object-fit': suffix }),
//     meta: { group: 'objectFit', order: 1 },
//   },
// ];

// // ============================================================================
// // LAYOUT - OBJECT POSITION
// // ============================================================================

// export const OBJECT_POSITION_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'object',
//     aliases: ['obj-pos'],
//     suffixes: [
//       'bottom', 'center', 'left', 'left-bottom', 'left-top',
//       'right', 'right-bottom', 'right-top', 'top'
//     ],
//     utility: (suffix) => {
//       const positions: Record<string, string> = {
//         'bottom': 'bottom',
//         'center': 'center',
//         'left': 'left',
//         'left-bottom': 'left bottom',
//         'left-top': 'left top',
//         'right': 'right',
//         'right-bottom': 'right bottom',
//         'right-top': 'right top',
//         'top': 'top',
//       };
//       return { 'object-position': positions[suffix] };
//     },
//     meta: { group: 'objectPosition', order: 1 },
//   },
// ];

// // ============================================================================
// // LAYOUT - OVERFLOW
// // ============================================================================

// export const OVERFLOW_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'overflow',
//     aliases: ['ovf'],
//     suffixes: ['auto', 'hidden', 'clip', 'visible', 'scroll'],
//     utility: (suffix) => ({ overflow: suffix }),
//     meta: { group: 'overflow', order: 1 },
//   },
//   {
//     base: 'overflow-x',
//     aliases: ['ovf-x'],
//     suffixes: ['auto', 'hidden', 'clip', 'visible', 'scroll'],
//     utility: (suffix) => ({ 'overflow-x': suffix }),
//     meta: { group: 'overflow', order: 2 },
//   },
//   {
//     base: 'overflow-y',
//     aliases: ['ovf-y'],
//     suffixes: ['auto', 'hidden', 'clip', 'visible', 'scroll'],
//     utility: (suffix) => ({ 'overflow-y': suffix }),
//     meta: { group: 'overflow', order: 3 },
//   },
// ];

// // ============================================================================
// // LAYOUT - OVERSCROLL BEHAVIOR
// // ============================================================================

// export const OVERSCROLL_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'overscroll',
//     aliases: ['overscroll-behavior'],
//     suffixes: ['auto', 'contain', 'none'],
//     utility: (suffix) => ({ 'overscroll-behavior': suffix }),
//     meta: { group: 'overscroll', order: 1 },
//   },
//   {
//     base: 'overscroll-x',
//     aliases: [],
//     suffixes: ['auto', 'contain', 'none'],
//     utility: (suffix) => ({ 'overscroll-behavior-x': suffix }),
//     meta: { group: 'overscroll', order: 2 },
//   },
//   {
//     base: 'overscroll-y',
//     aliases: [],
//     suffixes: ['auto', 'contain', 'none'],
//     utility: (suffix) => ({ 'overscroll-behavior-y': suffix }),
//     meta: { group: 'overscroll', order: 3 },
//   },
// ];

// // ============================================================================
// // LAYOUT - POSITION
// // ============================================================================

// export const POSITION_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'static',
//     aliases: ['pos-static'],
//     utility: { position: 'static' },
//     meta: { group: 'position', order: 1 },
//   },
//   {
//     base: 'fixed',
//     aliases: ['pos-fixed'],
//     utility: { position: 'fixed' },
//     meta: { group: 'position', order: 2 },
//   },
//   {
//     base: 'absolute',
//     aliases: ['pos-absolute', 'abs'],
//     utility: { position: 'absolute' },
//     meta: { group: 'position', order: 3 },
//   },
//   {
//     base: 'relative',
//     aliases: ['pos-relative', 'rel'],
//     utility: { position: 'relative' },
//     meta: { group: 'position', order: 4 },
//   },
//   {
//     base: 'sticky',
//     aliases: ['pos-sticky'],
//     utility: { position: 'sticky' },
//     meta: { group: 'position', order: 5 },
//   },
// ];

// // ============================================================================
// // LAYOUT - VISIBILITY
// // ============================================================================

// export const VISIBILITY_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'visible',
//     aliases: ['vis-visible'],
//     utility: { visibility: 'visible' },
//     meta: { group: 'visibility', order: 1 },
//   },
//   {
//     base: 'invisible',
//     aliases: ['vis-hidden'],
//     utility: { visibility: 'hidden' },
//     meta: { group: 'visibility', order: 2 },
//   },
//   {
//     base: 'collapse',
//     aliases: ['vis-collapse'],
//     utility: { visibility: 'collapse' },
//     meta: { group: 'visibility', order: 3 },
//   },
// ];

// // ============================================================================
// // LAYOUT - Z-INDEX
// // ============================================================================

// export const Z_INDEX_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'z',
//     aliases: ['z-index'],
//     suffixes: ['0', '10', '20', '30', '40', '50', 'auto'],
//     utility: (suffix) => ({ 'z-index': suffix }),
//     meta: { group: 'zIndex', order: 1 },
//   },
// ];

// // ============================================================================
// // FLEXBOX - FLEX BASIS
// // ============================================================================

// export const FLEX_BASIS_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'basis',
//     aliases: ['flex-basis'],
//     suffixes: ['0', 'auto', 'full', '1/2', '1/3', '2/3', '1/4', '3/4'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         '0': '0',
//         'auto': 'auto',
//         'full': '100%',
//         '1/2': '50%',
//         '1/3': '33.333333%',
//         '2/3': '66.666667%',
//         '1/4': '25%',
//         '3/4': '75%',
//       };
//       return { 'flex-basis': values[suffix] };
//     },
//     meta: { group: 'flexbox', order: 1 },
//   },
// ];

// // ============================================================================
// // FLEXBOX - FLEX DIRECTION
// // ============================================================================

// export const FLEX_DIRECTION_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'flex',
//     aliases: ['flex-dir'],
//     suffixes: ['row', 'row-reverse', 'col', 'col-reverse', 'column', 'column-reverse'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'row': 'row',
//         'row-reverse': 'row-reverse',
//         'col': 'column',
//         'col-reverse': 'column-reverse',
//         'column': 'column',
//         'column-reverse': 'column-reverse',
//       };
//       return { 'flex-direction': values[suffix] };
//     },
//     meta: { group: 'flexbox', order: 2 },
//   },
// ];

// // ============================================================================
// // FLEXBOX - FLEX WRAP
// // ============================================================================

// export const FLEX_WRAP_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'flex',
//     aliases: [],
//     suffixes: ['wrap', 'wrap-reverse', 'nowrap'],
//     utility: (suffix) => ({ 'flex-wrap': suffix }),
//     meta: { group: 'flexbox', order: 3 },
//   },
// ];

// // ============================================================================
// // FLEXBOX - FLEX
// // ============================================================================

// export const FLEX_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'flex',
//     aliases: [],
//     suffixes: ['1', 'auto', 'initial', 'none'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         '1': '1 1 0%',
//         'auto': '1 1 auto',
//         'initial': '0 1 auto',
//         'none': 'none',
//       };
//       return { flex: values[suffix] };
//     },
//     meta: { group: 'flexbox', order: 4 },
//   },
// ];

// // ============================================================================
// // FLEXBOX - FLEX GROW
// // ============================================================================

// export const FLEX_GROW_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'flex-grow',
//     aliases: ['grow'],
//     suffixes: ['0', '1'],
//     utility: (suffix) => ({ 'flex-grow': suffix }),
//     meta: { group: 'flexbox', order: 5 },
//   },
// ];

// // ============================================================================
// // FLEXBOX - FLEX SHRINK
// // ============================================================================

// export const FLEX_SHRINK_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'flex-shrink',
//     aliases: ['shrink'],
//     suffixes: ['0', '1'],
//     utility: (suffix) => ({ 'flex-shrink': suffix }),
//     meta: { group: 'flexbox', order: 6 },
//   },
// ];

// // ============================================================================
// // FLEXBOX - ORDER
// // ============================================================================

// export const ORDER_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'order',
//     aliases: [],
//     suffixes: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'first', 'last', 'none'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'first': '-9999',
//         'last': '9999',
//         'none': '0',
//       };
//       return { order: values[suffix] || suffix };
//     },
//     meta: { group: 'flexbox', order: 7 },
//   },
// ];

// // ============================================================================
// // GRID - TEMPLATE COLUMNS
// // ============================================================================

// export const GRID_TEMPLATE_COLUMNS_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'grid-cols',
//     aliases: ['grid-template-cols'],
//     suffixes: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'none', 'subgrid'],
//     utility: (suffix) => {
//       if (suffix === 'none') return { 'grid-template-columns': 'none' };
//       if (suffix === 'subgrid') return { 'grid-template-columns': 'subgrid' };
//       return { 'grid-template-columns': `repeat(${suffix}, minmax(0, 1fr))` };
//     },
//     meta: { group: 'grid', order: 1 },
//   },
// ];

// // ============================================================================
// // GRID - COLUMN SPAN
// // ============================================================================

// export const GRID_COLUMN_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'col-span',
//     aliases: ['grid-col-span'],
//     suffixes: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto', 'full'],
//     utility: (suffix) => {
//       if (suffix === 'auto') return { 'grid-column': 'auto' };
//       if (suffix === 'full') return { 'grid-column': '1 / -1' };
//       return { 'grid-column': `span ${suffix} / span ${suffix}` };
//     },
//     meta: { group: 'grid', order: 2 },
//   },
//   {
//     base: 'col-start',
//     aliases: [],
//     suffixes: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', 'auto'],
//     utility: (suffix) => ({ 'grid-column-start': suffix }),
//     meta: { group: 'grid', order: 3 },
//   },
//   {
//     base: 'col-end',
//     aliases: [],
//     suffixes: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', 'auto'],
//     utility: (suffix) => ({ 'grid-column-end': suffix }),
//     meta: { group: 'grid', order: 4 },
//   },
// ];

// // ============================================================================
// // GRID - TEMPLATE ROWS
// // ============================================================================

// export const GRID_TEMPLATE_ROWS_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'grid-rows',
//     aliases: ['grid-template-rows'],
//     suffixes: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'none', 'subgrid'],
//     utility: (suffix) => {
//       if (suffix === 'none') return { 'grid-template-rows': 'none' };
//       if (suffix === 'subgrid') return { 'grid-template-rows': 'subgrid' };
//       return { 'grid-template-rows': `repeat(${suffix}, minmax(0, 1fr))` };
//     },
//     meta: { group: 'grid', order: 5 },
//   },
// ];

// // ============================================================================
// // GRID - ROW SPAN
// // ============================================================================

// export const GRID_ROW_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'row-span',
//     aliases: ['grid-row-span'],
//     suffixes: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto', 'full'],
//     utility: (suffix) => {
//       if (suffix === 'auto') return { 'grid-row': 'auto' };
//       if (suffix === 'full') return { 'grid-row': '1 / -1' };
//       return { 'grid-row': `span ${suffix} / span ${suffix}` };
//     },
//     meta: { group: 'grid', order: 6 },
//   },
//   {
//     base: 'row-start',
//     aliases: [],
//     suffixes: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', 'auto'],
//     utility: (suffix) => ({ 'grid-row-start': suffix }),
//     meta: { group: 'grid', order: 7 },
//   },
//   {
//     base: 'row-end',
//     aliases: [],
//     suffixes: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', 'auto'],
//     utility: (suffix) => ({ 'grid-row-end': suffix }),
//     meta: { group: 'grid', order: 8 },
//   },
// ];

// // ============================================================================
// // GRID - AUTO FLOW
// // ============================================================================

// export const GRID_AUTO_FLOW_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'grid-flow',
//     aliases: ['grid-auto-flow'],
//     suffixes: ['row', 'col', 'dense', 'row-dense', 'col-dense', 'column', 'column-dense'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'row': 'row',
//         'col': 'column',
//         'column': 'column',
//         'dense': 'dense',
//         'row-dense': 'row dense',
//         'col-dense': 'column dense',
//         'column-dense': 'column dense',
//       };
//       return { 'grid-auto-flow': values[suffix] };
//     },
//     meta: { group: 'grid', order: 9 },
//   },
// ];

// // ============================================================================
// // GRID - AUTO COLUMNS
// // ============================================================================

// export const GRID_AUTO_COLUMNS_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'auto-cols',
//     aliases: ['grid-auto-cols'],
//     suffixes: ['auto', 'min', 'max', 'fr'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'auto': 'auto',
//         'min': 'min-content',
//         'max': 'max-content',
//         'fr': 'minmax(0, 1fr)',
//       };
//       return { 'grid-auto-columns': values[suffix] };
//     },
//     meta: { group: 'grid', order: 10 },
//   },
// ];

// // ============================================================================
// // GRID - AUTO ROWS
// // ============================================================================

// export const GRID_AUTO_ROWS_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'auto-rows',
//     aliases: ['grid-auto-rows'],
//     suffixes: ['auto', 'min', 'max', 'fr'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'auto': 'auto',
//         'min': 'min-content',
//         'max': 'max-content',
//         'fr': 'minmax(0, 1fr)',
//       };
//       return { 'grid-auto-rows': values[suffix] };
//     },
//     meta: { group: 'grid', order: 11 },
//   },
// ];

// // ============================================================================
// // SPACING - GAP
// // ============================================================================

// export const GAP_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'gap',
//     aliases: ['g'],
//     suffixes: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32'],
//     utility: (suffix) => {
//       const pxValue = suffix === '0' ? '0' : `${parseInt(suffix) * 4}px`;
//       return { gap: pxValue };
//     },
//     meta: { group: 'spacing', order: 1 },
//   },
//   {
//     base: 'gap-x',
//     aliases: ['gx'],
//     suffixes: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32'],
//     utility: (suffix) => {
//       const pxValue = suffix === '0' ? '0' : `${parseInt(suffix) * 4}px`;
//       return { 'column-gap': pxValue };
//     },
//     meta: { group: 'spacing', order: 2 },
//   },
//   {
//     base: 'gap-y',
//     aliases: ['gy'],
//     suffixes: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32'],
//     utility: (suffix) => {
//       const pxValue = suffix === '0' ? '0' : `${parseInt(suffix) * 4}px`;
//       return { 'row-gap': pxValue };
//     },
//     meta: { group: 'spacing', order: 3 },
//   },
// ];


// // ============================================================================
// // TYPOGRAPHY - FONT FAMILY
// // ============================================================================

// export const FONT_FAMILY_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'font',
//     aliases: ['ff'],
//     suffixes: ['sans', 'serif', 'mono', 'system'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'sans': 'ui-sans-serif, system-ui, sans-serif',
//         'serif': 'ui-serif, Georgia, serif',
//         'mono': 'ui-monospace, monospace',
//         'system': 'system-ui, -apple-system, sans-serif',
//       };
//       return { 'font-family': values[suffix] };
//     },
//     meta: { group: 'typography', order: 1 },
//   },
// ];

// // ============================================================================
// // TYPOGRAPHY - FONT SIZE
// // ============================================================================

// export const FONT_SIZE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'text',
//     aliases: ['fs'],
//     suffixes: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
//     utility: (suffix) => {
//       const sizes: Record<string, { fontSize: string; lineHeight: string }> = {
//         'xs': { fontSize: '0.75rem', lineHeight: '1rem' },
//         'sm': { fontSize: '0.875rem', lineHeight: '1.25rem' },
//         'base': { fontSize: '1rem', lineHeight: '1.5rem' },
//         'lg': { fontSize: '1.125rem', lineHeight: '1.75rem' },
//         'xl': { fontSize: '1.25rem', lineHeight: '1.75rem' },
//         '2xl': { fontSize: '1.5rem', lineHeight: '2rem' },
//         '3xl': { fontSize: '1.875rem', lineHeight: '2.25rem' },
//         '4xl': { fontSize: '2.25rem', lineHeight: '2.5rem' },
//         '5xl': { fontSize: '3rem', lineHeight: '1' },
//         '6xl': { fontSize: '3.75rem', lineHeight: '1' },
//         '7xl': { fontSize: '4.5rem', lineHeight: '1' },
//         '8xl': { fontSize: '6rem', lineHeight: '1' },
//         '9xl': { fontSize: '8rem', lineHeight: '1' },
//       };
//       return sizes[suffix];
//     },
//     meta: { group: 'typography', order: 2 },
//   },
// ];

// // ============================================================================
// // TYPOGRAPHY - FONT SMOOTHING
// // ============================================================================

// export const FONT_SMOOTHING_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'antialiased',
//     aliases: [],
//     utility: {
//       '-webkit-font-smoothing': 'antialiased',
//       '-moz-osx-font-smoothing': 'grayscale',
//     },
//     meta: { group: 'typography', order: 3 },
//   },
//   {
//     base: 'subpixel-antialiased',
//     aliases: [],
//     utility: {
//       '-webkit-font-smoothing': 'auto',
//       '-moz-osx-font-smoothing': 'auto',
//     },
//     meta: { group: 'typography', order: 4 },
//   },
// ];

// // ============================================================================
// // TYPOGRAPHY - FONT STYLE
// // ============================================================================

// export const FONT_STYLE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'italic',
//     aliases: ['font-italic'],
//     utility: { 'font-style': 'italic' },
//     meta: { group: 'typography', order: 5 },
//   },
//   {
//     base: 'not-italic',
//     aliases: [],
//     utility: { 'font-style': 'normal' },
//     meta: { group: 'typography', order: 6 },
//   },
// ];

// // ============================================================================
// // TYPOGRAPHY - FONT WEIGHT
// // ============================================================================

// export const FONT_WEIGHT_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'font',
//     aliases: ['fw'],
//     suffixes: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'],
//     utility: (suffix) => {
//       const weights: Record<string, string> = {
//         'thin': '100',
//         'extralight': '200',
//         'light': '300',
//         'normal': '400',
//         'medium': '500',
//         'semibold': '600',
//         'bold': '700',
//         'extrabold': '800',
//         'black': '900',
//       };
//       return { 'font-weight': weights[suffix] };
//     },
//     meta: { group: 'typography', order: 7 },
//   },
// ];

// // ============================================================================
// // TYPOGRAPHY - FONT STRETCH
// // ============================================================================

// export const FONT_STRETCH_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'font-stretch',
//     aliases: [],
//     suffixes: [
//       'ultra-condensed', 'extra-condensed', 'condensed', 'semi-condensed',
//       'normal', 'semi-expanded', 'expanded', 'extra-expanded', 'ultra-expanded'
//     ],
//     utility: (suffix) => ({ 'font-stretch': suffix }),
//     meta: { group: 'typography', order: 8 },
//   },
// ];

// // ============================================================================
// // TYPOGRAPHY - FONT VARIANT NUMERIC
// // ============================================================================

// export const FONT_VARIANT_NUMERIC_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'normal-nums',
//     aliases: [],
//     utility: { 'font-variant-numeric': 'normal' },
//     meta: { group: 'typography', order: 9 },
//   },
//   {
//     base: 'ordinal',
//     aliases: [],
//     utility: { 'font-variant-numeric': 'ordinal' },
//     meta: { group: 'typography', order: 10 },
//   },
//   {
//     base: 'slashed-zero',
//     aliases: [],
//     utility: { 'font-variant-numeric': 'slashed-zero' },
//     meta: { group: 'typography', order: 11 },
//   },
//   {
//     base: 'lining-nums',
//     aliases: [],
//     utility: { 'font-variant-numeric': 'lining-nums' },
//     meta: { group: 'typography', order: 12 },
//   },
//   {
//     base: 'oldstyle-nums',
//     aliases: [],
//     utility: { 'font-variant-numeric': 'oldstyle-nums' },
//     meta: { group: 'typography', order: 13 },
//   },
//   {
//     base: 'proportional-nums',
//     aliases: [],
//     utility: { 'font-variant-numeric': 'proportional-nums' },
//     meta: { group: 'typography', order: 14 },
//   },
//   {
//     base: 'tabular-nums',
//     aliases: [],
//     utility: { 'font-variant-numeric': 'tabular-nums' },
//     meta: { group: 'typography', order: 15 },
//   },
//   {
//     base: 'diagonal-fractions',
//     aliases: [],
//     utility: { 'font-variant-numeric': 'diagonal-fractions' },
//     meta: { group: 'typography', order: 16 },
//   },
//   {
//     base: 'stacked-fractions',
//     aliases: [],
//     utility: { 'font-variant-numeric': 'stacked-fractions' },
//     meta: { group: 'typography', order: 17 },
//   },
// ];

// // ============================================================================
// // TYPOGRAPHY - LETTER SPACING
// // ============================================================================

// export const LETTER_SPACING_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'tracking',
//     aliases: ['letter-spacing'],
//     suffixes: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'tighter': '-0.05em',
//         'tight': '-0.025em',
//         'normal': '0em',
//         'wide': '0.025em',
//         'wider': '0.05em',
//         'widest': '0.1em',
//       };
//       return { 'letter-spacing': values[suffix] };
//     },
//     meta: { group: 'typography', order: 18 },
//   },
// ];

// // ============================================================================
// // TYPOGRAPHY - LINE CLAMP
// // ============================================================================

// export const LINE_CLAMP_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'line-clamp',
//     aliases: [],
//     suffixes: ['1', '2', '3', '4', '5', '6', 'none'],
//     utility: (suffix) => {
//       if (suffix === 'none') {
//         return {
//           'overflow': 'visible',
//           'display': 'block',
//           '-webkit-box-orient': 'horizontal',
//           '-webkit-line-clamp': 'none',
//         };
//       }
//       return {
//         'overflow': 'hidden',
//         'display': '-webkit-box',
//         '-webkit-box-orient': 'vertical',
//         '-webkit-line-clamp': suffix,
//       };
//     },
//     meta: { group: 'typography', order: 19 },
//   },
// ];

// // ============================================================================
// // TYPOGRAPHY - LINE HEIGHT
// // ============================================================================

// export const LINE_HEIGHT_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'leading',
//     aliases: ['lh'],
//     suffixes: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', '3', '4', '5', '6', '7', '8', '9', '10'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'none': '1',
//         'tight': '1.25',
//         'snug': '1.375',
//         'normal': '1.5',
//         'relaxed': '1.625',
//         'loose': '2',
//         '3': '.75rem',
//         '4': '1rem',
//         '5': '1.25rem',
//         '6': '1.5rem',
//         '7': '1.75rem',
//         '8': '2rem',
//         '9': '2.25rem',
//         '10': '2.5rem',
//       };
//       return { 'line-height': values[suffix] };
//     },
//     meta: { group: 'typography', order: 20 },
//   },
// ];

// // ============================================================================
// // TYPOGRAPHY - LIST STYLE
// // ============================================================================

// export const LIST_STYLE_IMAGE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'list-image',
//     aliases: [],
//     suffixes: ['none'],
//     utility: (suffix) => ({ 'list-style-image': suffix }),
//     meta: { group: 'typography', order: 21 },
//   },
// ];

// export const LIST_STYLE_POSITION_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'list',
//     aliases: [],
//     suffixes: ['inside', 'outside'],
//     utility: (suffix) => ({ 'list-style-position': suffix }),
//     meta: { group: 'typography', order: 22 },
//   },
// ];

// export const LIST_STYLE_TYPE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'list',
//     aliases: [],
//     suffixes: ['none', 'disc', 'decimal', 'circle', 'square', 'lower-alpha', 'upper-alpha', 'lower-roman', 'upper-roman'],
//     utility: (suffix) => ({ 'list-style-type': suffix }),
//     meta: { group: 'typography', order: 23 },
//   },
// ];

// // ============================================================================
// // TYPOGRAPHY - TEXT ALIGN
// // ============================================================================

// export const TEXT_ALIGN_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'text',
//     aliases: ['ta'],
//     suffixes: ['left', 'center', 'right', 'justify', 'start', 'end'],
//     utility: (suffix) => ({ 'text-align': suffix }),
//     meta: { group: 'typography', order: 24 },
//   },
// ];

// // ============================================================================
// // TYPOGRAPHY - TEXT DECORATION
// // ============================================================================

// export const TEXT_DECORATION_LINE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'underline',
//     aliases: [],
//     utility: { 'text-decoration-line': 'underline' },
//     meta: { group: 'typography', order: 25 },
//   },
//   {
//     base: 'overline',
//     aliases: [],
//     utility: { 'text-decoration-line': 'overline' },
//     meta: { group: 'typography', order: 26 },
//   },
//   {
//     base: 'line-through',
//     aliases: [],
//     utility: { 'text-decoration-line': 'line-through' },
//     meta: { group: 'typography', order: 27 },
//   },
//   {
//     base: 'no-underline',
//     aliases: [],
//     utility: { 'text-decoration-line': 'none' },
//     meta: { group: 'typography', order: 28 },
//   },
// ];

// export const TEXT_DECORATION_STYLE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'decoration',
//     aliases: [],
//     suffixes: ['solid', 'double', 'dotted', 'dashed', 'wavy'],
//     utility: (suffix) => ({ 'text-decoration-style': suffix }),
//     meta: { group: 'typography', order: 29 },
//   },
// ];

// export const TEXT_DECORATION_THICKNESS_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'decoration',
//     aliases: [],
//     suffixes: ['auto', 'from-font', '0', '1', '2', '4', '8'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'auto': 'auto',
//         'from-font': 'from-font',
//         '0': '0px',
//         '1': '1px',
//         '2': '2px',
//         '4': '4px',
//         '8': '8px',
//       };
//       return { 'text-decoration-thickness': values[suffix] };
//     },
//     meta: { group: 'typography', order: 30 },
//   },
// ];

// export const TEXT_UNDERLINE_OFFSET_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'underline-offset',
//     aliases: [],
//     suffixes: ['auto', '0', '1', '2', '4', '8'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'auto': 'auto',
//         '0': '0px',
//         '1': '1px',
//         '2': '2px',
//         '4': '4px',
//         '8': '8px',
//       };
//       return { 'text-underline-offset': values[suffix] };
//     },
//     meta: { group: 'typography', order: 31 },
//   },
// ];

// // ============================================================================
// // TYPOGRAPHY - TEXT TRANSFORM
// // ============================================================================

// export const TEXT_TRANSFORM_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'uppercase',
//     aliases: [],
//     utility: { 'text-transform': 'uppercase' },
//     meta: { group: 'typography', order: 32 },
//   },
//   {
//     base: 'lowercase',
//     aliases: [],
//     utility: { 'text-transform': 'lowercase' },
//     meta: { group: 'typography', order: 33 },
//   },
//   {
//     base: 'capitalize',
//     aliases: [],
//     utility: { 'text-transform': 'capitalize' },
//     meta: { group: 'typography', order: 34 },
//   },
//   {
//     base: 'normal-case',
//     aliases: [],
//     utility: { 'text-transform': 'none' },
//     meta: { group: 'typography', order: 35 },
//   },
// ];

// // ============================================================================
// // TYPOGRAPHY - TEXT OVERFLOW
// // ============================================================================

// export const TEXT_OVERFLOW_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'truncate',
//     aliases: [],
//     utility: {
//       'overflow': 'hidden',
//       'text-overflow': 'ellipsis',
//       'white-space': 'nowrap',
//     },
//     meta: { group: 'typography', order: 36 },
//   },
//   {
//     base: 'text-ellipsis',
//     aliases: [],
//     utility: { 'text-overflow': 'ellipsis' },
//     meta: { group: 'typography', order: 37 },
//   },
//   {
//     base: 'text-clip',
//     aliases: [],
//     utility: { 'text-overflow': 'clip' },
//     meta: { group: 'typography', order: 38 },
//   },
// ];

// // ============================================================================
// // TYPOGRAPHY - TEXT WRAP
// // ============================================================================

// export const TEXT_WRAP_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'text',
//     aliases: [],
//     suffixes: ['wrap', 'nowrap', 'balance', 'pretty'],
//     utility: (suffix) => ({ 'text-wrap': suffix }),
//     meta: { group: 'typography', order: 39 },
//   },
// ];

// // ============================================================================
// // TYPOGRAPHY - TEXT INDENT
// // ============================================================================

// export const TEXT_INDENT_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'indent',
//     aliases: [],
//     suffixes: ['0', '1', '2', '4', '8', '16', '32'],
//     utility: (suffix) => {
//       const pxValue = suffix === '0' ? '0' : `${parseInt(suffix) * 4}px`;
//       return { 'text-indent': pxValue };
//     },
//     meta: { group: 'typography', order: 40 },
//   },
// ];

// // ============================================================================
// // TYPOGRAPHY - VERTICAL ALIGN
// // ============================================================================

// export const VERTICAL_ALIGN_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'align',
//     aliases: ['va'],
//     suffixes: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super'],
//     utility: (suffix) => ({ 'vertical-align': suffix }),
//     meta: { group: 'typography', order: 41 },
//   },
// ];

// // ============================================================================
// // TYPOGRAPHY - WHITE SPACE
// // ============================================================================

// export const WHITE_SPACE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'whitespace',
//     aliases: ['ws'],
//     suffixes: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'],
//     utility: (suffix) => ({ 'white-space': suffix }),
//     meta: { group: 'typography', order: 42 },
//   },
// ];

// // ============================================================================
// // TYPOGRAPHY - WORD BREAK
// // ============================================================================

// export const WORD_BREAK_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'break',
//     aliases: [],
//     suffixes: ['normal', 'words', 'all', 'keep'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'normal': 'normal',
//         'words': 'break-word',
//         'all': 'break-all',
//         'keep': 'keep-all',
//       };
//       return { 'word-break': values[suffix] };
//     },
//     meta: { group: 'typography', order: 43 },
//   },
// ];

// // ============================================================================
// // TYPOGRAPHY - OVERFLOW WRAP
// // ============================================================================

// export const OVERFLOW_WRAP_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'break',
//     aliases: [],
//     suffixes: ['normal', 'words', 'all'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'normal': 'normal',
//         'words': 'break-word',
//         'all': 'break-word',
//       };
//       return { 'overflow-wrap': values[suffix] };
//     },
//     meta: { group: 'typography', order: 44 },
//   },
// ];

// // ============================================================================
// // TYPOGRAPHY - HYPHENS
// // ============================================================================

// export const HYPHENS_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'hyphens',
//     aliases: [],
//     suffixes: ['none', 'manual', 'auto'],
//     utility: (suffix) => ({ hyphens: suffix }),
//     meta: { group: 'typography', order: 45 },
//   },
// ];

// // ============================================================================
// // TYPOGRAPHY - CONTENT
// // ============================================================================

// export const CONTENT_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'content',
//     aliases: [],
//     suffixes: ['none'],
//     utility: (suffix) => ({ content: suffix }),
//     meta: { group: 'typography', order: 46 },
//   },
// ];

// // ============================================================================
// // BACKGROUNDS - ATTACHMENT
// // ============================================================================

// export const BACKGROUND_ATTACHMENT_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'bg',
//     aliases: [],
//     suffixes: ['fixed', 'local', 'scroll'],
//     utility: (suffix) => ({ 'background-attachment': suffix }),
//     meta: { group: 'backgrounds', order: 1 },
//   },
// ];

// // ============================================================================
// // BACKGROUNDS - CLIP
// // ============================================================================

// export const BACKGROUND_CLIP_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'bg-clip',
//     aliases: [],
//     suffixes: ['border', 'padding', 'content', 'text'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'border': 'border-box',
//         'padding': 'padding-box',
//         'content': 'content-box',
//         'text': 'text',
//       };
//       return { 'background-clip': values[suffix] };
//     },
//     meta: { group: 'backgrounds', order: 2 },
//   },
// ];

// // ============================================================================
// // BACKGROUNDS - IMAGE
// // ============================================================================

// export const BACKGROUND_IMAGE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'bg',
//     aliases: [],
//     suffixes: ['none'],
//     utility: (suffix) => ({ 'background-image': suffix }),
//     meta: { group: 'backgrounds', order: 3 },
//   },
//   {
//     base: 'bg-gradient-to',
//     aliases: [],
//     suffixes: ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'],
//     utility: (suffix) => {
//       const gradients: Record<string, string> = {
//         't': 'linear-gradient(to top, var(--tw-gradient-stops))',
//         'tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
//         'r': 'linear-gradient(to right, var(--tw-gradient-stops))',
//         'br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
//         'b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
//         'bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
//         'l': 'linear-gradient(to left, var(--tw-gradient-stops))',
//         'tl': 'linear-gradient(to top left, var(--tw-gradient-stops))',
//       };
//       return { 'background-image': gradients[suffix] };
//     },
//     meta: { group: 'backgrounds', order: 4 },
//   },
// ];

// // ============================================================================
// // BACKGROUNDS - ORIGIN
// // ============================================================================

// export const BACKGROUND_ORIGIN_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'bg-origin',
//     aliases: [],
//     suffixes: ['border', 'padding', 'content'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'border': 'border-box',
//         'padding': 'padding-box',
//         'content': 'content-box',
//       };
//       return { 'background-origin': values[suffix] };
//     },
//     meta: { group: 'backgrounds', order: 5 },
//   },
// ];

// // ============================================================================
// // BACKGROUNDS - POSITION
// // ============================================================================

// export const BACKGROUND_POSITION_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'bg',
//     aliases: [],
//     suffixes: ['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'],
//     utility: (suffix) => {
//       const positions: Record<string, string> = {
//         'bottom': 'bottom',
//         'center': 'center',
//         'left': 'left',
//         'left-bottom': 'left bottom',
//         'left-top': 'left top',
//         'right': 'right',
//         'right-bottom': 'right bottom',
//         'right-top': 'right top',
//         'top': 'top',
//       };
//       return { 'background-position': positions[suffix] };
//     },
//     meta: { group: 'backgrounds', order: 6 },
//   },
// ];

// // ============================================================================
// // BACKGROUNDS - REPEAT
// // ============================================================================

// export const BACKGROUND_REPEAT_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'bg',
//     aliases: [],
//     suffixes: ['repeat', 'no-repeat', 'repeat-x', 'repeat-y', 'repeat-round', 'repeat-space'],
//     utility: (suffix) => ({ 'background-repeat': suffix }),
//     meta: { group: 'backgrounds', order: 7 },
//   },
// ];

// // ============================================================================
// // BACKGROUNDS - SIZE
// // ============================================================================

// export const BACKGROUND_SIZE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'bg',
//     aliases: [],
//     suffixes: ['auto', 'cover', 'contain'],
//     utility: (suffix) => ({ 'background-size': suffix }),
//     meta: { group: 'backgrounds', order: 8 },
//   },
// ];

// // ============================================================================
// // BORDERS - RADIUS
// // ============================================================================

// export const BORDER_RADIUS_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'rounded',
//     aliases: ['br'],
//     suffixes: ['none', 'sm', '', 'md', 'lg', 'xl', '2xl', '3xl', 'full'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'none': '0',
//         'sm': '0.125rem',
//         '': '0.25rem',
//         'md': '0.375rem',
//         'lg': '0.5rem',
//         'xl': '0.75rem',
//         '2xl': '1rem',
//         '3xl': '1.5rem',
//         'full': '9999px',
//       };
//       return { 'border-radius': values[suffix] };
//     },
//     meta: { group: 'borders', order: 1 },
//   },
//   // Individual corners
//   {
//     base: 'rounded',
//     aliases: [],
//     suffixes: ['t', 'r', 'b', 'l', 'tl', 'tr', 'br', 'bl'],
//     utility: (suffix) => {
//       const corners: Record<string, string[]> = {
//         't': ['border-top-left-radius', 'border-top-right-radius'],
//         'r': ['border-top-right-radius', 'border-bottom-right-radius'],
//         'b': ['border-bottom-left-radius', 'border-bottom-right-radius'],
//         'l': ['border-top-left-radius', 'border-bottom-left-radius'],
//         'tl': ['border-top-left-radius'],
//         'tr': ['border-top-right-radius'],
//         'br': ['border-bottom-right-radius'],
//         'bl': ['border-bottom-left-radius'],
//       };
//       const props = corners[suffix];
//       const result: Record<string, string> = {};
//       props.forEach(prop => {
//         result[prop] = '0.25rem';
//       });
//       return result;
//     },
//     meta: { group: 'borders', order: 2 },
//   },
// ];

// // ============================================================================
// // BORDERS - WIDTH
// // ============================================================================

// export const BORDER_WIDTH_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'border',
//     aliases: ['bw'],
//     suffixes: ['0', '', '2', '4', '8'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         '0': '0',
//         '': '1px',
//         '2': '2px',
//         '4': '4px',
//         '8': '8px',
//       };
//       return { 'border-width': values[suffix] };
//     },
//     meta: { group: 'borders', order: 3 },
//   },
//   // Individual sides
//   {
//     base: 'border',
//     aliases: [],
//     suffixes: ['t', 'r', 'b', 'l', 'x', 'y'],
//     utility: (suffix) => {
//       const sides: Record<string, string | string[]> = {
//         't': 'border-top-width',
//         'r': 'border-right-width',
//         'b': 'border-bottom-width',
//         'l': 'border-left-width',
//         'x': ['border-left-width', 'border-right-width'],
//         'y': ['border-top-width', 'border-bottom-width'],
//       };
//       const prop = sides[suffix];
//       if (Array.isArray(prop)) {
//         return Object.fromEntries(prop.map(p => [p, '1px']));
//       }
//       return { [prop]: '1px' };
//     },
//     meta: { group: 'borders', order: 4 },
//   },
// ];

// // ============================================================================
// // BORDERS - STYLE
// // ============================================================================

// export const BORDER_STYLE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'border',
//     aliases: [],
//     suffixes: ['solid', 'dashed', 'dotted', 'double', 'hidden', 'none'],
//     utility: (suffix) => ({ 'border-style': suffix }),
//     meta: { group: 'borders', order: 5 },
//   },
// ];

// // ============================================================================
// // OUTLINE - WIDTH
// // ============================================================================

// export const OUTLINE_WIDTH_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'outline',
//     aliases: [],
//     suffixes: ['0', '1', '2', '4', '8'],
//     utility: (suffix) => ({ 'outline-width': `${suffix}px` }),
//     meta: { group: 'borders', order: 6 },
//   },
// ];

// // ============================================================================
// // OUTLINE - STYLE
// // ============================================================================

// export const OUTLINE_STYLE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'outline',
//     aliases: [],
//     suffixes: ['none', 'solid', 'dashed', 'dotted', 'double'],
//     utility: (suffix) => ({ 'outline-style': suffix }),
//     meta: { group: 'borders', order: 7 },
//   },
// ];

// // ============================================================================
// // OUTLINE - OFFSET
// // ============================================================================

// export const OUTLINE_OFFSET_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'outline-offset',
//     aliases: [],
//     suffixes: ['0', '1', '2', '4', '8'],
//     utility: (suffix) => ({ 'outline-offset': `${suffix}px` }),
//     meta: { group: 'borders', order: 8 },
//   },
// ];

// // ============================================================================
// // EFFECTS - BOX SHADOW
// // ============================================================================

// export const BOX_SHADOW_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'shadow',
//     aliases: [],
//     suffixes: ['sm', '', 'md', 'lg', 'xl', '2xl', 'inner', 'none'],
//     utility: (suffix) => {
//       const shadows: Record<string, string> = {
//         'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
//         '': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
//         'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
//         'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
//         'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
//         '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
//         'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
//         'none': 'none',
//       };
//       return { 'box-shadow': shadows[suffix] };
//     },
//     meta: { group: 'effects', order: 1 },
//   },
// ];

// // ============================================================================
// // EFFECTS - TEXT SHADOW (non-standard but useful)
// // ============================================================================

// export const TEXT_SHADOW_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'text-shadow',
//     aliases: [],
//     suffixes: ['sm', '', 'md', 'lg', 'none'],
//     utility: (suffix) => {
//       const shadows: Record<string, string> = {
//         'sm': '0 1px 2px rgb(0 0 0 / 0.3)',
//         '': '0 2px 4px rgb(0 0 0 / 0.3)',
//         'md': '0 4px 8px rgb(0 0 0 / 0.3)',
//         'lg': '0 8px 16px rgb(0 0 0 / 0.3)',
//         'none': 'none',
//       };
//       return { 'text-shadow': shadows[suffix] };
//     },
//     meta: { group: 'effects', order: 2 },
//   },
// ];

// // ============================================================================
// // EFFECTS - OPACITY
// // ============================================================================

// export const OPACITY_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'opacity',
//     aliases: ['op'],
//     suffixes: ['0', '5', '10', '20', '25', '30', '40', '50', '60', '70', '75', '80', '90', '95', '100'],
//     utility: (suffix) => ({ opacity: (parseInt(suffix) / 100).toString() }),
//     meta: { group: 'effects', order: 3 },
//   },
// ];

// // ============================================================================
// // EFFECTS - BLEND MODES
// // ============================================================================

// export const MIX_BLEND_MODE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'mix-blend',
//     aliases: [],
//     suffixes: [
//       'normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten',
//       'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference',
//       'exclusion', 'hue', 'saturation', 'color', 'luminosity', 'plus-lighter'
//     ],
//     utility: (suffix) => ({ 'mix-blend-mode': suffix }),
//     meta: { group: 'effects', order: 4 },
//   },
// ];

// export const BACKGROUND_BLEND_MODE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'bg-blend',
//     aliases: [],
//     suffixes: [
//       'normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten',
//       'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference',
//       'exclusion', 'hue', 'saturation', 'color', 'luminosity'
//     ],
//     utility: (suffix) => ({ 'background-blend-mode': suffix }),
//     meta: { group: 'effects', order: 5 },
//   },
// ];

// // Note: Je continue dans le prochain message avec les filtres, tables, transitions, transforms, interactivité, SVG et accessibilité car la réponse devient très longue.

// // ============================================================================
// // EFFECTS - MASK PROPERTIES
// // ============================================================================

// export const MASK_CLIP_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'mask-clip',
//     aliases: [],
//     suffixes: ['border', 'padding', 'content', 'text', 'fill', 'stroke', 'view-box', 'no-clip'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'border': 'border-box',
//         'padding': 'padding-box',
//         'content': 'content-box',
//         'text': 'text',
//         'fill': 'fill-box',
//         'stroke': 'stroke-box',
//         'view-box': 'view-box',
//         'no-clip': 'no-clip',
//       };
//       return { 'mask-clip': values[suffix] };
//     },
//     meta: { group: 'effects', order: 6 },
//   },
// ];

// export const MASK_COMPOSITE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'mask-composite',
//     aliases: [],
//     suffixes: ['add', 'subtract', 'intersect', 'exclude'],
//     utility: (suffix) => ({ 'mask-composite': suffix }),
//     meta: { group: 'effects', order: 7 },
//   },
// ];

// export const MASK_IMAGE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'mask-image',
//     aliases: [],
//     suffixes: ['none'],
//     utility: (suffix) => ({ 'mask-image': suffix }),
//     meta: { group: 'effects', order: 8 },
//   },
// ];

// export const MASK_MODE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'mask-mode',
//     aliases: [],
//     suffixes: ['alpha', 'luminance', 'match-source'],
//     utility: (suffix) => ({ 'mask-mode': suffix }),
//     meta: { group: 'effects', order: 9 },
//   },
// ];

// export const MASK_ORIGIN_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'mask-origin',
//     aliases: [],
//     suffixes: ['border', 'padding', 'content', 'fill', 'stroke', 'view-box'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'border': 'border-box',
//         'padding': 'padding-box',
//         'content': 'content-box',
//         'fill': 'fill-box',
//         'stroke': 'stroke-box',
//         'view-box': 'view-box',
//       };
//       return { 'mask-origin': values[suffix] };
//     },
//     meta: { group: 'effects', order: 10 },
//   },
// ];

// export const MASK_POSITION_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'mask',
//     aliases: [],
//     suffixes: ['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'],
//     utility: (suffix) => {
//       const positions: Record<string, string> = {
//         'bottom': 'bottom',
//         'center': 'center',
//         'left': 'left',
//         'left-bottom': 'left bottom',
//         'left-top': 'left top',
//         'right': 'right',
//         'right-bottom': 'right bottom',
//         'right-top': 'right top',
//         'top': 'top',
//       };
//       return { 'mask-position': positions[suffix] };
//     },
//     meta: { group: 'effects', order: 11 },
//   },
// ];

// export const MASK_REPEAT_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'mask',
//     aliases: [],
//     suffixes: ['repeat', 'no-repeat', 'repeat-x', 'repeat-y', 'repeat-round', 'repeat-space'],
//     utility: (suffix) => ({ 'mask-repeat': suffix }),
//     meta: { group: 'effects', order: 12 },
//   },
// ];

// export const MASK_SIZE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'mask',
//     aliases: [],
//     suffixes: ['auto', 'cover', 'contain'],
//     utility: (suffix) => ({ 'mask-size': suffix }),
//     meta: { group: 'effects', order: 13 },
//   },
// ];

// export const MASK_TYPE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'mask-type',
//     aliases: [],
//     suffixes: ['alpha', 'luminance'],
//     utility: (suffix) => ({ 'mask-type': suffix }),
//     meta: { group: 'effects', order: 14 },
//   },
// ];

// // ============================================================================
// // FILTERS - FILTER
// // ============================================================================

// export const FILTER_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'filter',
//     aliases: [],
//     suffixes: ['none'],
//     utility: (suffix) => ({ filter: suffix }),
//     meta: { group: 'filters', order: 1 },
//   },
// ];

// export const BLUR_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'blur',
//     aliases: [],
//     suffixes: ['none', 'sm', '', 'md', 'lg', 'xl', '2xl', '3xl'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'none': 'blur(0)',
//         'sm': 'blur(4px)',
//         '': 'blur(8px)',
//         'md': 'blur(12px)',
//         'lg': 'blur(16px)',
//         'xl': 'blur(24px)',
//         '2xl': 'blur(40px)',
//         '3xl': 'blur(64px)',
//       };
//       return { filter: values[suffix] };
//     },
//     meta: { group: 'filters', order: 2 },
//   },
// ];

// export const BRIGHTNESS_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'brightness',
//     aliases: [],
//     suffixes: ['0', '50', '75', '90', '95', '100', '105', '110', '125', '150', '200'],
//     utility: (suffix) => ({ filter: `brightness(${parseInt(suffix) / 100})` }),
//     meta: { group: 'filters', order: 3 },
//   },
// ];

// export const CONTRAST_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'contrast',
//     aliases: [],
//     suffixes: ['0', '50', '75', '100', '125', '150', '200'],
//     utility: (suffix) => ({ filter: `contrast(${parseInt(suffix) / 100})` }),
//     meta: { group: 'filters', order: 4 },
//   },
// ];

// export const DROP_SHADOW_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'drop-shadow',
//     aliases: [],
//     suffixes: ['sm', '', 'md', 'lg', 'xl', '2xl', 'none'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'sm': 'drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))',
//         '': 'drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))',
//         'md': 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))',
//         'lg': 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',
//         'xl': 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))',
//         '2xl': 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))',
//         'none': 'drop-shadow(0 0 #0000)',
//       };
//       return { filter: values[suffix] };
//     },
//     meta: { group: 'filters', order: 5 },
//   },
// ];

// export const GRAYSCALE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'grayscale',
//     aliases: [],
//     suffixes: ['0', '50', '100'],
//     utility: (suffix) => ({ filter: `grayscale(${parseInt(suffix) / 100})` }),
//     meta: { group: 'filters', order: 6 },
//   },
// ];

// export const HUE_ROTATE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'hue-rotate',
//     aliases: [],
//     suffixes: ['0', '15', '30', '60', '90', '180'],
//     utility: (suffix) => ({ filter: `hue-rotate(${suffix}deg)` }),
//     meta: { group: 'filters', order: 7 },
//   },
// ];

// export const INVERT_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'invert',
//     aliases: [],
//     suffixes: ['0', '50', '100'],
//     utility: (suffix) => ({ filter: `invert(${parseInt(suffix) / 100})` }),
//     meta: { group: 'filters', order: 8 },
//   },
// ];

// export const SATURATE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'saturate',
//     aliases: [],
//     suffixes: ['0', '50', '100', '150', '200'],
//     utility: (suffix) => ({ filter: `saturate(${parseInt(suffix) / 100})` }),
//     meta: { group: 'filters', order: 9 },
//   },
// ];

// export const SEPIA_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'sepia',
//     aliases: [],
//     suffixes: ['0', '50', '100'],
//     utility: (suffix) => ({ filter: `sepia(${parseInt(suffix) / 100})` }),
//     meta: { group: 'filters', order: 10 },
//   },
// ];

// // ============================================================================
// // FILTERS - BACKDROP FILTER
// // ============================================================================

// export const BACKDROP_FILTER_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'backdrop-filter',
//     aliases: [],
//     suffixes: ['none'],
//     utility: (suffix) => ({ 'backdrop-filter': suffix }),
//     meta: { group: 'filters', order: 11 },
//   },
// ];

// export const BACKDROP_BLUR_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'backdrop-blur',
//     aliases: [],
//     suffixes: ['none', 'sm', '', 'md', 'lg', 'xl', '2xl', '3xl'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'none': 'blur(0)',
//         'sm': 'blur(4px)',
//         '': 'blur(8px)',
//         'md': 'blur(12px)',
//         'lg': 'blur(16px)',
//         'xl': 'blur(24px)',
//         '2xl': 'blur(40px)',
//         '3xl': 'blur(64px)',
//       };
//       return { 'backdrop-filter': values[suffix] };
//     },
//     meta: { group: 'filters', order: 12 },
//   },
// ];

// export const BACKDROP_BRIGHTNESS_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'backdrop-brightness',
//     aliases: [],
//     suffixes: ['0', '50', '75', '90', '95', '100', '105', '110', '125', '150', '200'],
//     utility: (suffix) => ({ 'backdrop-filter': `brightness(${parseInt(suffix) / 100})` }),
//     meta: { group: 'filters', order: 13 },
//   },
// ];

// export const BACKDROP_CONTRAST_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'backdrop-contrast',
//     aliases: [],
//     suffixes: ['0', '50', '75', '100', '125', '150', '200'],
//     utility: (suffix) => ({ 'backdrop-filter': `contrast(${parseInt(suffix) / 100})` }),
//     meta: { group: 'filters', order: 14 },
//   },
// ];

// export const BACKDROP_GRAYSCALE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'backdrop-grayscale',
//     aliases: [],
//     suffixes: ['0', '50', '100'],
//     utility: (suffix) => ({ 'backdrop-filter': `grayscale(${parseInt(suffix) / 100})` }),
//     meta: { group: 'filters', order: 15 },
//   },
// ];

// export const BACKDROP_HUE_ROTATE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'backdrop-hue-rotate',
//     aliases: [],
//     suffixes: ['0', '15', '30', '60', '90', '180'],
//     utility: (suffix) => ({ 'backdrop-filter': `hue-rotate(${suffix}deg)` }),
//     meta: { group: 'filters', order: 16 },
//   },
// ];

// export const BACKDROP_INVERT_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'backdrop-invert',
//     aliases: [],
//     suffixes: ['0', '50', '100'],
//     utility: (suffix) => ({ 'backdrop-filter': `invert(${parseInt(suffix) / 100})` }),
//     meta: { group: 'filters', order: 17 },
//   },
// ];

// export const BACKDROP_OPACITY_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'backdrop-opacity',
//     aliases: [],
//     suffixes: ['0', '5', '10', '20', '25', '30', '40', '50', '60', '70', '75', '80', '90', '95', '100'],
//     utility: (suffix) => ({ 'backdrop-filter': `opacity(${parseInt(suffix) / 100})` }),
//     meta: { group: 'filters', order: 18 },
//   },
// ];

// export const BACKDROP_SATURATE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'backdrop-saturate',
//     aliases: [],
//     suffixes: ['0', '50', '100', '150', '200'],
//     utility: (suffix) => ({ 'backdrop-filter': `saturate(${parseInt(suffix) / 100})` }),
//     meta: { group: 'filters', order: 19 },
//   },
// ];

// export const BACKDROP_SEPIA_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'backdrop-sepia',
//     aliases: [],
//     suffixes: ['0', '50', '100'],
//     utility: (suffix) => ({ 'backdrop-filter': `sepia(${parseInt(suffix) / 100})` }),
//     meta: { group: 'filters', order: 20 },
//   },
// ];

// // ============================================================================
// // TABLES
// // ============================================================================

// export const BORDER_COLLAPSE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'border',
//     aliases: [],
//     suffixes: ['collapse', 'separate'],
//     utility: (suffix) => ({ 'border-collapse': suffix }),
//     meta: { group: 'tables', order: 1 },
//   },
// ];

// export const BORDER_SPACING_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'border-spacing',
//     aliases: [],
//     suffixes: ['0', '1', '2', '4', '8', '16', '32'],
//     utility: (suffix) => {
//       const pxValue = suffix === '0' ? '0' : `${parseInt(suffix) * 4}px`;
//       return { 'border-spacing': pxValue };
//     },
//     meta: { group: 'tables', order: 2 },
//   },
//   {
//     base: 'border-spacing-x',
//     aliases: [],
//     suffixes: ['0', '1', '2', '4', '8', '16', '32'],
//     utility: (suffix) => {
//       const pxValue = suffix === '0' ? '0' : `${parseInt(suffix) * 4}px`;
//       return { 'border-spacing': `${pxValue} 0` };
//     },
//     meta: { group: 'tables', order: 3 },
//   },
//   {
//     base: 'border-spacing-y',
//     aliases: [],
//     suffixes: ['0', '1', '2', '4', '8', '16', '32'],
//     utility: (suffix) => {
//       const pxValue = suffix === '0' ? '0' : `${parseInt(suffix) * 4}px`;
//       return { 'border-spacing': `0 ${pxValue}` };
//     },
//     meta: { group: 'tables', order: 4 },
//   },
// ];

// export const TABLE_LAYOUT_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'table',
//     aliases: [],
//     suffixes: ['auto', 'fixed'],
//     utility: (suffix) => ({ 'table-layout': suffix }),
//     meta: { group: 'tables', order: 5 },
//   },
// ];

// export const CAPTION_SIDE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'caption',
//     aliases: [],
//     suffixes: ['top', 'bottom'],
//     utility: (suffix) => ({ 'caption-side': suffix }),
//     meta: { group: 'tables', order: 6 },
//   },
// ];

// // ============================================================================
// // TRANSITIONS & ANIMATION - TRANSITION PROPERTY
// // ============================================================================

// export const TRANSITION_PROPERTY_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'transition',
//     aliases: [],
//     suffixes: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform'],
//     utility: (suffix) => {
//       const properties: Record<string, string> = {
//         'none': 'none',
//         'all': 'all',
//         '': 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
//         'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
//         'opacity': 'opacity',
//         'shadow': 'box-shadow',
//         'transform': 'transform',
//       };
//       return { 'transition-property': properties[suffix] };
//     },
//     meta: { group: 'transitions', order: 1 },
//   },
// ];

// // ============================================================================
// // TRANSITIONS & ANIMATION - TRANSITION BEHAVIOR
// // ============================================================================

// export const TRANSITION_BEHAVIOR_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'transition-behavior',
//     aliases: [],
//     suffixes: ['normal', 'allow-discrete'],
//     utility: (suffix) => ({ 'transition-behavior': suffix }),
//     meta: { group: 'transitions', order: 2 },
//   },
// ];

// // ============================================================================
// // TRANSITIONS & ANIMATION - TRANSITION DURATION
// // ============================================================================

// export const TRANSITION_DURATION_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'duration',
//     aliases: [],
//     suffixes: ['0', '75', '100', '150', '200', '300', '500', '700', '1000'],
//     utility: (suffix) => ({ 'transition-duration': `${suffix}ms` }),
//     meta: { group: 'transitions', order: 3 },
//   },
// ];

// // ============================================================================
// // TRANSITIONS & ANIMATION - TRANSITION TIMING FUNCTION
// // ============================================================================

// export const TRANSITION_TIMING_FUNCTION_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'ease',
//     aliases: [],
//     suffixes: ['linear', 'in', 'out', 'in-out'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'linear': 'linear',
//         'in': 'cubic-bezier(0.4, 0, 1, 1)',
//         'out': 'cubic-bezier(0, 0, 0.2, 1)',
//         'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
//       };
//       return { 'transition-timing-function': values[suffix] };
//     },
//     meta: { group: 'transitions', order: 4 },
//   },
// ];

// // ============================================================================
// // TRANSITIONS & ANIMATION - TRANSITION DELAY
// // ============================================================================

// export const TRANSITION_DELAY_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'delay',
//     aliases: [],
//     suffixes: ['0', '75', '100', '150', '200', '300', '500', '700', '1000'],
//     utility: (suffix) => ({ 'transition-delay': `${suffix}ms` }),
//     meta: { group: 'transitions', order: 5 },
//   },
// ];

// // ============================================================================
// // TRANSITIONS & ANIMATION - ANIMATION
// // ============================================================================

// export const ANIMATION_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'animate',
//     aliases: [],
//     suffixes: ['none', 'spin', 'ping', 'pulse', 'bounce'],
//     utility: (suffix) => {
//       const animations: Record<string, string> = {
//         'none': 'none',
//         'spin': 'spin 1s linear infinite',
//         'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
//         'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
//         'bounce': 'bounce 1s infinite',
//       };
//       return { animation: animations[suffix] };
//     },
//     meta: { group: 'transitions', order: 6 },
//   },
// ];

// // ============================================================================
// // TRANSFORMS - BACKFACE VISIBILITY
// // ============================================================================

// export const BACKFACE_VISIBILITY_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'backface',
//     aliases: [],
//     suffixes: ['visible', 'hidden'],
//     utility: (suffix) => ({ 'backface-visibility': suffix }),
//     meta: { group: 'transforms', order: 1 },
//   },
// ];

// // ============================================================================
// // TRANSFORMS - PERSPECTIVE
// // ============================================================================

// export const PERSPECTIVE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'perspective',
//     aliases: [],
//     suffixes: ['none', '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'],
//     utility: (suffix) => {
//       if (suffix === 'none') return { perspective: 'none' };
//       return { perspective: `${suffix}px` };
//     },
//     meta: { group: 'transforms', order: 2 },
//   },
// ];

// // ============================================================================
// // TRANSFORMS - PERSPECTIVE ORIGIN
// // ============================================================================

// export const PERSPECTIVE_ORIGIN_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'perspective-origin',
//     aliases: [],
//     suffixes: ['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left'],
//     utility: (suffix) => {
//       const origins: Record<string, string> = {
//         'center': 'center',
//         'top': 'top',
//         'top-right': 'top right',
//         'right': 'right',
//         'bottom-right': 'bottom right',
//         'bottom': 'bottom',
//         'bottom-left': 'bottom left',
//         'left': 'left',
//         'top-left': 'top left',
//       };
//       return { 'perspective-origin': origins[suffix] };
//     },
//     meta: { group: 'transforms', order: 3 },
//   },
// ];

// // ============================================================================
// // TRANSFORMS - ROTATE
// // ============================================================================

// export const ROTATE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'rotate',
//     aliases: [],
//     suffixes: ['0', '1', '2', '3', '6', '12', '45', '90', '180'],
//     utility: (suffix) => ({ rotate: `${suffix}deg` }),
//     meta: { group: 'transforms', order: 4 },
//   },
//   {
//     base: 'rotate',
//     aliases: [],
//     suffixes: ['-180', '-90', '-45', '-12', '-6', '-3', '-2', '-1'],
//     utility: (suffix) => ({ rotate: `${suffix}deg` }),
//     meta: { group: 'transforms', order: 5 },
//   },
// ];

// // ============================================================================
// // TRANSFORMS - SCALE
// // ============================================================================

// export const SCALE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'scale',
//     aliases: [],
//     suffixes: ['0', '50', '75', '90', '95', '100', '105', '110', '125', '150'],
//     utility: (suffix) => ({ scale: (parseInt(suffix) / 100).toString() }),
//     meta: { group: 'transforms', order: 6 },
//   },
//   {
//     base: 'scale-x',
//     aliases: [],
//     suffixes: ['0', '50', '75', '90', '95', '100', '105', '110', '125', '150'],
//     utility: (suffix) => ({ 'scale-x': (parseInt(suffix) / 100).toString() }),
//     meta: { group: 'transforms', order: 7 },
//   },
//   {
//     base: 'scale-y',
//     aliases: [],
//     suffixes: ['0', '50', '75', '90', '95', '100', '105', '110', '125', '150'],
//     utility: (suffix) => ({ 'scale-y': (parseInt(suffix) / 100).toString() }),
//     meta: { group: 'transforms', order: 8 },
//   },
// ];

// // ============================================================================
// // TRANSFORMS - SKEW
// // ============================================================================

// export const SKEW_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'skew-x',
//     aliases: [],
//     suffixes: ['0', '1', '2', '3', '6', '12'],
//     utility: (suffix) => ({ 'skew-x': `${suffix}deg` }),
//     meta: { group: 'transforms', order: 9 },
//   },
//   {
//     base: 'skew-x',
//     aliases: [],
//     suffixes: ['-12', '-6', '-3', '-2', '-1'],
//     utility: (suffix) => ({ 'skew-x': `${suffix}deg` }),
//     meta: { group: 'transforms', order: 10 },
//   },
//   {
//     base: 'skew-y',
//     aliases: [],
//     suffixes: ['0', '1', '2', '3', '6', '12'],
//     utility: (suffix) => ({ 'skew-y': `${suffix}deg` }),
//     meta: { group: 'transforms', order: 11 },
//   },
//   {
//     base: 'skew-y',
//     aliases: [],
//     suffixes: ['-12', '-6', '-3', '-2', '-1'],
//     utility: (suffix) => ({ 'skew-y': `${suffix}deg` }),
//     meta: { group: 'transforms', order: 12 },
//   },
// ];

// // ============================================================================
// // TRANSFORMS - TRANSFORM
// // ============================================================================

// export const TRANSFORM_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'transform',
//     aliases: [],
//     utility: { transform: 'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))' },
//     meta: { group: 'transforms', order: 13 },
//   },
//   {
//     base: 'transform-none',
//     aliases: [],
//     utility: { transform: 'none' },
//     meta: { group: 'transforms', order: 14 },
//   },
//   {
//     base: 'transform-gpu',
//     aliases: [],
//     utility: { transform: 'translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))' },
//     meta: { group: 'transforms', order: 15 },
//   },
// ];

// // ============================================================================
// // TRANSFORMS - TRANSFORM ORIGIN
// // ============================================================================

// export const TRANSFORM_ORIGIN_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'origin',
//     aliases: [],
//     suffixes: ['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left'],
//     utility: (suffix) => {
//       const origins: Record<string, string> = {
//         'center': 'center',
//         'top': 'top',
//         'top-right': 'top right',
//         'right': 'right',
//         'bottom-right': 'bottom right',
//         'bottom': 'bottom',
//         'bottom-left': 'bottom left',
//         'left': 'left',
//         'top-left': 'top left',
//       };
//       return { 'transform-origin': origins[suffix] };
//     },
//     meta: { group: 'transforms', order: 16 },
//   },
// ];

// // ============================================================================
// // TRANSFORMS - TRANSFORM STYLE
// // ============================================================================

// export const TRANSFORM_STYLE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'transform-style',
//     aliases: [],
//     suffixes: ['flat', 'preserve-3d'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'flat': 'flat',
//         'preserve-3d': 'preserve-3d',
//       };
//       return { 'transform-style': values[suffix] };
//     },
//     meta: { group: 'transforms', order: 17 },
//   },
// ];

// // ============================================================================
// // TRANSFORMS - TRANSLATE
// // ============================================================================

// export const TRANSLATE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'translate-x',
//     aliases: [],
//     suffixes: ['0', '1', '2', '4', '8', '16', '32', '64', '1/2', '1/3', '2/3', '1/4', '3/4', 'full'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         '0': '0',
//         '1': '0.25rem',
//         '2': '0.5rem',
//         '4': '1rem',
//         '8': '2rem',
//         '16': '4rem',
//         '32': '8rem',
//         '64': '16rem',
//         '1/2': '50%',
//         '1/3': '33.333333%',
//         '2/3': '66.666667%',
//         '1/4': '25%',
//         '3/4': '75%',
//         'full': '100%',
//       };
//       return { 'translate-x': values[suffix] };
//     },
//     meta: { group: 'transforms', order: 18 },
//   },
//   {
//     base: 'translate-y',
//     aliases: [],
//     suffixes: ['0', '1', '2', '4', '8', '16', '32', '64', '1/2', '1/3', '2/3', '1/4', '3/4', 'full'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         '0': '0',
//         '1': '0.25rem',
//         '2': '0.5rem',
//         '4': '1rem',
//         '8': '2rem',
//         '16': '4rem',
//         '32': '8rem',
//         '64': '16rem',
//         '1/2': '50%',
//         '1/3': '33.333333%',
//         '2/3': '66.666667%',
//         '1/4': '25%',
//         '3/4': '75%',
//         'full': '100%',
//       };
//       return { 'translate-y': values[suffix] };
//     },
//     meta: { group: 'transforms', order: 19 },
//   },
//   // Negative values
//   {
//     base: 'translate-x',
//     aliases: [],
//     suffixes: ['-1', '-2', '-4', '-8', '-16', '-32', '-64', '-1/2', '-1/3', '-2/3', '-1/4', '-3/4', '-full'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         '-1': '-0.25rem',
//         '-2': '-0.5rem',
//         '-4': '-1rem',
//         '-8': '-2rem',
//         '-16': '-4rem',
//         '-32': '-8rem',
//         '-64': '-16rem',
//         '-1/2': '-50%',
//         '-1/3': '-33.333333%',
//         '-2/3': '-66.666667%',
//         '-1/4': '-25%',
//         '-3/4': '-75%',
//         '-full': '-100%',
//       };
//       return { 'translate-x': values[suffix] };
//     },
//     meta: { group: 'transforms', order: 20 },
//   },
//   {
//     base: 'translate-y',
//     aliases: [],
//     suffixes: ['-1', '-2', '-4', '-8', '-16', '-32', '-64', '-1/2', '-1/3', '-2/3', '-1/4', '-3/4', '-full'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         '-1': '-0.25rem',
//         '-2': '-0.5rem',
//         '-4': '-1rem',
//         '-8': '-2rem',
//         '-16': '-4rem',
//         '-32': '-8rem',
//         '-64': '-16rem',
//         '-1/2': '-50%',
//         '-1/3': '-33.333333%',
//         '-2/3': '-66.666667%',
//         '-1/4': '-25%',
//         '-3/4': '-75%',
//         '-full': '-100%',
//       };
//       return { 'translate-y': values[suffix] };
//     },
//     meta: { group: 'transforms', order: 21 },
//   },
// ];

// // ============================================================================
// // INTERACTIVITY - ACCENT COLOR
// // ============================================================================

// export const ACCENT_COLOR_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'accent',
//     aliases: [],
//     suffixes: ['auto', 'current', 'transparent', 'black', 'white'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'auto': 'auto',
//         'current': 'currentColor',
//         'transparent': 'transparent',
//         'black': '#000',
//         'white': '#fff',
//       };
//       return { 'accent-color': values[suffix] };
//     },
//     meta: { group: 'interactivity', order: 1 },
//   },
// ];

// // ============================================================================
// // INTERACTIVITY - APPEARANCE
// // ============================================================================

// export const APPEARANCE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'appearance',
//     aliases: [],
//     suffixes: ['none', 'auto'],
//     utility: (suffix) => ({ appearance: suffix }),
//     meta: { group: 'interactivity', order: 2 },
//   },
// ];

// // ============================================================================
// // INTERACTIVITY - CARET COLOR
// // ============================================================================

// export const CARET_COLOR_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'caret',
//     aliases: [],
//     suffixes: ['auto', 'current', 'transparent', 'black', 'white'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'auto': 'auto',
//         'current': 'currentColor',
//         'transparent': 'transparent',
//         'black': '#000',
//         'white': '#fff',
//       };
//       return { 'caret-color': values[suffix] };
//     },
//     meta: { group: 'interactivity', order: 3 },
//   },
// ];

// // ============================================================================
// // INTERACTIVITY - COLOR SCHEME
// // ============================================================================

// export const COLOR_SCHEME_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'color-scheme',
//     aliases: [],
//     suffixes: ['normal', 'light', 'dark', 'light-dark'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'normal': 'normal',
//         'light': 'light',
//         'dark': 'dark',
//         'light-dark': 'light dark',
//       };
//       return { 'color-scheme': values[suffix] };
//     },
//     meta: { group: 'interactivity', order: 4 },
//   },
// ];

// // ============================================================================
// // INTERACTIVITY - CURSOR
// // ============================================================================

// export const CURSOR_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'cursor',
//     aliases: [],
//     suffixes: [
//       'auto', 'default', 'pointer', 'wait', 'text', 'move', 'help',
//       'not-allowed', 'none', 'context-menu', 'progress', 'cell',
//       'crosshair', 'vertical-text', 'alias', 'copy', 'no-drop',
//       'grab', 'grabbing', 'all-scroll', 'col-resize', 'row-resize',
//       'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize',
//       'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize',
//       'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out'
//     ],
//     utility: (suffix) => ({ cursor: suffix }),
//     meta: { group: 'interactivity', order: 5 },
//   },
// ];

// // ============================================================================
// // INTERACTIVITY - FIELD SIZING
// // ============================================================================

// export const FIELD_SIZING_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'field-sizing',
//     aliases: [],
//     suffixes: ['content', 'fixed'],
//     utility: (suffix) => ({ 'field-sizing': suffix }),
//     meta: { group: 'interactivity', order: 6 },
//   },
// ];

// // ============================================================================
// // INTERACTIVITY - POINTER EVENTS
// // ============================================================================

// export const POINTER_EVENTS_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'pointer-events',
//     aliases: [],
//     suffixes: ['none', 'auto'],
//     utility: (suffix) => ({ 'pointer-events': suffix }),
//     meta: { group: 'interactivity', order: 7 },
//   },
// ];

// // ============================================================================
// // INTERACTIVITY - RESIZE
// // ============================================================================

// export const RESIZE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'resize',
//     aliases: [],
//     suffixes: ['none', 'both', 'horizontal', 'vertical', 'x', 'y'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'none': 'none',
//         'both': 'both',
//         'horizontal': 'horizontal',
//         'vertical': 'vertical',
//         'x': 'horizontal',
//         'y': 'vertical',
//       };
//       return { resize: values[suffix] };
//     },
//     meta: { group: 'interactivity', order: 8 },
//   },
// ];

// // ============================================================================
// // INTERACTIVITY - SCROLL BEHAVIOR
// // ============================================================================

// export const SCROLL_BEHAVIOR_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'scroll',
//     aliases: [],
//     suffixes: ['auto', 'smooth'],
//     utility: (suffix) => ({ 'scroll-behavior': suffix }),
//     meta: { group: 'interactivity', order: 9 },
//   },
// ];

// // ============================================================================
// // INTERACTIVITY - SCROLL MARGIN
// // ============================================================================

// export const SCROLL_MARGIN_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'scroll-m',
//     aliases: [],
//     suffixes: ['0', '1', '2', '4', '8', '16', '32', '64'],
//     utility: (suffix) => {
//       const pxValue = suffix === '0' ? '0' : `${parseInt(suffix) * 4}px`;
//       return { 'scroll-margin': pxValue };
//     },
//     meta: { group: 'interactivity', order: 10 },
//   },
//   {
//     base: 'scroll-mx',
//     aliases: [],
//     suffixes: ['0', '1', '2', '4', '8', '16', '32', '64'],
//     utility: (suffix) => {
//       const pxValue = suffix === '0' ? '0' : `${parseInt(suffix) * 4}px`;
//       return {
//         'scroll-margin-left': pxValue,
//         'scroll-margin-right': pxValue,
//       };
//     },
//     meta: { group: 'interactivity', order: 11 },
//   },
//   {
//     base: 'scroll-my',
//     aliases: [],
//     suffixes: ['0', '1', '2', '4', '8', '16', '32', '64'],
//     utility: (suffix) => {
//       const pxValue = suffix === '0' ? '0' : `${parseInt(suffix) * 4}px`;
//       return {
//         'scroll-margin-top': pxValue,
//         'scroll-margin-bottom': pxValue,
//       };
//     },
//     meta: { group: 'interactivity', order: 12 },
//   },
//   {
//     base: 'scroll-mt',
//     aliases: [],
//     suffixes: ['0', '1', '2', '4', '8', '16', '32', '64'],
//     utility: (suffix) => {
//       const pxValue = suffix === '0' ? '0' : `${parseInt(suffix) * 4}px`;
//       return { 'scroll-margin-top': pxValue };
//     },
//     meta: { group: 'interactivity', order: 13 },
//   },
//   {
//     base: 'scroll-mr',
//     aliases: [],
//     suffixes: ['0', '1', '2', '4', '8', '16', '32', '64'],
//     utility: (suffix) => {
//       const pxValue = suffix === '0' ? '0' : `${parseInt(suffix) * 4}px`;
//       return { 'scroll-margin-right': pxValue };
//     },
//     meta: { group: 'interactivity', order: 14 },
//   },
//   {
//     base: 'scroll-mb',
//     aliases: [],
//     suffixes: ['0', '1', '2', '4', '8', '16', '32', '64'],
//     utility: (suffix) => {
//       const pxValue = suffix === '0' ? '0' : `${parseInt(suffix) * 4}px`;
//       return { 'scroll-margin-bottom': pxValue };
//     },
//     meta: { group: 'interactivity', order: 15 },
//   },
//   {
//     base: 'scroll-ml',
//     aliases: [],
//     suffixes: ['0', '1', '2', '4', '8', '16', '32', '64'],
//     utility: (suffix) => {
//       const pxValue = suffix === '0' ? '0' : `${parseInt(suffix) * 4}px`;
//       return { 'scroll-margin-left': pxValue };
//     },
//     meta: { group: 'interactivity', order: 16 },
//   },
// ];

// // ============================================================================
// // INTERACTIVITY - SCROLL PADDING
// // ============================================================================

// export const SCROLL_PADDING_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'scroll-p',
//     aliases: [],
//     suffixes: ['0', '1', '2', '4', '8', '16', '32', '64'],
//     utility: (suffix) => {
//       const pxValue = suffix === '0' ? '0' : `${parseInt(suffix) * 4}px`;
//       return { 'scroll-padding': pxValue };
//     },
//     meta: { group: 'interactivity', order: 17 },
//   },
//   {
//     base: 'scroll-px',
//     aliases: [],
//     suffixes: ['0', '1', '2', '4', '8', '16', '32', '64'],
//     utility: (suffix) => {
//       const pxValue = suffix === '0' ? '0' : `${parseInt(suffix) * 4}px`;
//       return {
//         'scroll-padding-left': pxValue,
//         'scroll-padding-right': pxValue,
//       };
//     },
//     meta: { group: 'interactivity', order: 18 },
//   },
//   {
//     base: 'scroll-py',
//     aliases: [],
//     suffixes: ['0', '1', '2', '4', '8', '16', '32', '64'],
//     utility: (suffix) => {
//       const pxValue = suffix === '0' ? '0' : `${parseInt(suffix) * 4}px`;
//       return {
//         'scroll-padding-top': pxValue,
//         'scroll-padding-bottom': pxValue,
//       };
//     },
//     meta: { group: 'interactivity', order: 19 },
//   },
//   {
//     base: 'scroll-pt',
//     aliases: [],
//     suffixes: ['0', '1', '2', '4', '8', '16', '32', '64'],
//     utility: (suffix) => {
//       const pxValue = suffix === '0' ? '0' : `${parseInt(suffix) * 4}px`;
//       return { 'scroll-padding-top': pxValue };
//     },
//     meta: { group: 'interactivity', order: 20 },
//   },
//   {
//     base: 'scroll-pr',
//     aliases: [],
//     suffixes: ['0', '1', '2', '4', '8', '16', '32', '64'],
//     utility: (suffix) => {
//       const pxValue = suffix === '0' ? '0' : `${parseInt(suffix) * 4}px`;
//       return { 'scroll-padding-right': pxValue };
//     },
//     meta: { group: 'interactivity', order: 21 },
//   },
//   {
//     base: 'scroll-pb',
//     aliases: [],
//     suffixes: ['0', '1', '2', '4', '8', '16', '32', '64'],
//     utility: (suffix) => {
//       const pxValue = suffix === '0' ? '0' : `${parseInt(suffix) * 4}px`;
//       return { 'scroll-padding-bottom': pxValue };
//     },
//     meta: { group: 'interactivity', order: 22 },
//   },
//   {
//     base: 'scroll-pl',
//     aliases: [],
//     suffixes: ['0', '1', '2', '4', '8', '16', '32', '64'],
//     utility: (suffix) => {
//       const pxValue = suffix === '0' ? '0' : `${parseInt(suffix) * 4}px`;
//       return { 'scroll-padding-left': pxValue };
//     },
//     meta: { group: 'interactivity', order: 23 },
//   },
// ];

// // ============================================================================
// // INTERACTIVITY - SCROLL SNAP ALIGN
// // ============================================================================

// export const SCROLL_SNAP_ALIGN_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'snap',
//     aliases: [],
//     suffixes: ['start', 'end', 'center', 'align-none'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'start': 'start',
//         'end': 'end',
//         'center': 'center',
//         'align-none': 'none',
//       };
//       return { 'scroll-snap-align': values[suffix] };
//     },
//     meta: { group: 'interactivity', order: 24 },
//   },
// ];

// // ============================================================================
// // INTERACTIVITY - SCROLL SNAP STOP
// // ============================================================================

// export const SCROLL_SNAP_STOP_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'snap',
//     aliases: [],
//     suffixes: ['normal', 'always'],
//     utility: (suffix) => ({ 'scroll-snap-stop': suffix }),
//     meta: { group: 'interactivity', order: 25 },
//   },
// ];

// // ============================================================================
// // INTERACTIVITY - SCROLL SNAP TYPE
// // ============================================================================

// export const SCROLL_SNAP_TYPE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'snap',
//     aliases: [],
//     suffixes: ['none', 'x', 'y', 'both', 'mandatory', 'proximity'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'none': 'none',
//         'x': 'x var(--tw-scroll-snap-strictness)',
//         'y': 'y var(--tw-scroll-snap-strictness)',
//         'both': 'both var(--tw-scroll-snap-strictness)',
//         'mandatory': 'var(--tw-scroll-snap-axis) mandatory',
//         'proximity': 'var(--tw-scroll-snap-axis) proximity',
//       };
//       return { 'scroll-snap-type': values[suffix] };
//     },
//     meta: { group: 'interactivity', order: 26 },
//   },
// ];

// // ============================================================================
// // INTERACTIVITY - TOUCH ACTION
// // ============================================================================

// export const TOUCH_ACTION_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'touch',
//     aliases: [],
//     suffixes: ['auto', 'none', 'pan-x', 'pan-left', 'pan-right', 'pan-y', 'pan-up', 'pan-down', 'pinch-zoom', 'manipulation'],
//     utility: (suffix) => ({ 'touch-action': suffix }),
//     meta: { group: 'interactivity', order: 27 },
//   },
// ];

// // ============================================================================
// // INTERACTIVITY - USER SELECT
// // ============================================================================

// export const USER_SELECT_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'select',
//     aliases: [],
//     suffixes: ['none', 'text', 'all', 'auto'],
//     utility: (suffix) => ({ 'user-select': suffix }),
//     meta: { group: 'interactivity', order: 28 },
//   },
// ];

// // ============================================================================
// // INTERACTIVITY - WILL CHANGE
// // ============================================================================

// export const WILL_CHANGE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'will-change',
//     aliases: [],
//     suffixes: ['auto', 'scroll', 'contents', 'transform'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'auto': 'auto',
//         'scroll': 'scroll-position',
//         'contents': 'contents',
//         'transform': 'transform',
//       };
//       return { 'will-change': values[suffix] };
//     },
//     meta: { group: 'interactivity', order: 29 },
//   },
// ];

// // ============================================================================
// // SVG - FILL
// // ============================================================================

// export const FILL_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'fill',
//     aliases: [],
//     suffixes: ['none', 'current', 'transparent', 'black', 'white'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'none': 'none',
//         'current': 'currentColor',
//         'transparent': 'transparent',
//         'black': '#000',
//         'white': '#fff',
//       };
//       return { fill: values[suffix] };
//     },
//     meta: { group: 'svg', order: 1 },
//   },
// ];

// // ============================================================================
// // SVG - STROKE
// // ============================================================================

// export const STROKE_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'stroke',
//     aliases: [],
//     suffixes: ['none', 'current', 'transparent', 'black', 'white'],
//     utility: (suffix) => {
//       const values: Record<string, string> = {
//         'none': 'none',
//         'current': 'currentColor',
//         'transparent': 'transparent',
//         'black': '#000',
//         'white': '#fff',
//       };
//       return { stroke: values[suffix] };
//     },
//     meta: { group: 'svg', order: 2 },
//   },
// ];

// // ============================================================================
// // SVG - STROKE WIDTH
// // ============================================================================

// export const STROKE_WIDTH_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'stroke',
//     aliases: [],
//     suffixes: ['0', '1', '2', '3', '4', '5', '6', '8', '10'],
//     utility: (suffix) => ({ 'stroke-width': suffix }),
//     meta: { group: 'svg', order: 3 },
//   },
// ];

// // ============================================================================
// // ACCESSIBILITY - FORCED COLOR ADJUST
// // ============================================================================

// export const FORCED_COLOR_ADJUST_CONFIGS: UtilityTemplate[] = [
//   {
//     base: 'forced-color-adjust',
//     aliases: [],
//     suffixes: ['auto', 'none'],
//     utility: (suffix) => ({ 'forced-color-adjust': suffix }),
//     meta: { group: 'accessibility', order: 1 },
//   },
// ];

// // ============================================================================
// // EXPORT ALL CONFIGURATIONS
// // ============================================================================

// export const ALL_UTILITY_CONFIGS = [
//   // Layout
//   ...DISPLAY_CONFIGS,
//   ...FLOAT_CONFIGS,
//   ...CLEAR_CONFIGS,
//   ...ISOLATION_CONFIGS,
//   ...OBJECT_FIT_CONFIGS,
//   ...OBJECT_POSITION_CONFIGS,
//   ...OVERFLOW_CONFIGS,
//   ...OVERSCROLL_CONFIGS,
//   ...POSITION_CONFIGS,
//   ...VISIBILITY_CONFIGS,
//   ...Z_INDEX_CONFIGS,

//   // Flexbox & Grid
//   ...FLEX_BASIS_CONFIGS,
//   ...FLEX_DIRECTION_CONFIGS,
//   ...FLEX_WRAP_CONFIGS,
//   ...FLEX_CONFIGS,
//   ...FLEX_GROW_CONFIGS,
//   ...FLEX_SHRINK_CONFIGS,
//   ...ORDER_CONFIGS,
//   ...GRID_TEMPLATE_COLUMNS_CONFIGS,
//   ...GRID_COLUMN_CONFIGS,
//   ...GRID_TEMPLATE_ROWS_CONFIGS,
//   ...GRID_ROW_CONFIGS,
//   ...GRID_AUTO_FLOW_CONFIGS,
//   ...GRID_AUTO_COLUMNS_CONFIGS,
//   ...GRID_AUTO_ROWS_CONFIGS,
//   ...GAP_CONFIGS,
//   ...JUSTIFY_CONTENT_CONFIGS,
//   ...JUSTIFY_ITEMS_CONFIGS,
//   ...JUSTIFY_SELF_CONFIGS,
//   ...ALIGN_CONTENT_CONFIGS,
//   ...ALIGN_ITEMS_CONFIGS,
//   ...ALIGN_SELF_CONFIGS,
//   ...PLACE_CONTENT_CONFIGS,
//   ...PLACE_ITEMS_CONFIGS,
//   ...PLACE_SELF_CONFIGS,

//   // Typography
//   ...FONT_FAMILY_CONFIGS,
//   ...FONT_SIZE_CONFIGS,
//   ...FONT_SMOOTHING_CONFIGS,
//   ...FONT_STYLE_CONFIGS,
//   ...FONT_WEIGHT_CONFIGS,
//   ...FONT_STRETCH_CONFIGS,
//   ...FONT_VARIANT_NUMERIC_CONFIGS,
//   ...LETTER_SPACING_CONFIGS,
//   ...LINE_CLAMP_CONFIGS,
//   ...LINE_HEIGHT_CONFIGS,
//   ...LIST_STYLE_IMAGE_CONFIGS,
//   ...LIST_STYLE_POSITION_CONFIGS,
//   ...LIST_STYLE_TYPE_CONFIGS,
//   ...TEXT_ALIGN_CONFIGS,
//   ...TEXT_DECORATION_LINE_CONFIGS,
//   ...TEXT_DECORATION_STYLE_CONFIGS,
//   ...TEXT_DECORATION_THICKNESS_CONFIGS,
//   ...TEXT_UNDERLINE_OFFSET_CONFIGS,
//   ...TEXT_TRANSFORM_CONFIGS,
//   ...TEXT_OVERFLOW_CONFIGS,
//   ...TEXT_WRAP_CONFIGS,
//   ...TEXT_INDENT_CONFIGS,
//   ...VERTICAL_ALIGN_CONFIGS,
//   ...WHITE_SPACE_CONFIGS,
//   ...WORD_BREAK_CONFIGS,
//   ...OVERFLOW_WRAP_CONFIGS,
//   ...HYPHENS_CONFIGS,
//   ...CONTENT_CONFIGS,

//   // Backgrounds
//   ...BACKGROUND_ATTACHMENT_CONFIGS,
//   ...BACKGROUND_CLIP_CONFIGS,
//   ...BACKGROUND_IMAGE_CONFIGS,
//   ...BACKGROUND_ORIGIN_CONFIGS,
//   ...BACKGROUND_POSITION_CONFIGS,
//   ...BACKGROUND_REPEAT_CONFIGS,
//   ...BACKGROUND_SIZE_CONFIGS,

//   // Borders
//   ...BORDER_RADIUS_CONFIGS,
//   ...BORDER_WIDTH_CONFIGS,
//   ...BORDER_STYLE_CONFIGS,
//   ...OUTLINE_WIDTH_CONFIGS,
//   ...OUTLINE_STYLE_CONFIGS,
//   ...OUTLINE_OFFSET_CONFIGS,

//   // Effects
//   ...BOX_SHADOW_CONFIGS,
//   ...TEXT_SHADOW_CONFIGS,
//   ...OPACITY_CONFIGS,
//   ...MIX_BLEND_MODE_CONFIGS,
//   ...BACKGROUND_BLEND_MODE_CONFIGS,
//   ...MASK_CLIP_CONFIGS,
//   ...MASK_COMPOSITE_CONFIGS,
//   ...MASK_IMAGE_CONFIGS,
//   ...MASK_MODE_CONFIGS,
//   ...MASK_ORIGIN_CONFIGS,
//   ...MASK_POSITION_CONFIGS,
//   ...MASK_REPEAT_CONFIGS,
//   ...MASK_SIZE_CONFIGS,
//   ...MASK_TYPE_CONFIGS,

//   // Filters
//   ...FILTER_CONFIGS,
//   ...BLUR_CONFIGS,
//   ...BRIGHTNESS_CONFIGS,
//   ...CONTRAST_CONFIGS,
//   ...DROP_SHADOW_CONFIGS,
//   ...GRAYSCALE_CONFIGS,
//   ...HUE_ROTATE_CONFIGS,
//   ...INVERT_CONFIGS,
//   ...SATURATE_CONFIGS,
//   ...SEPIA_CONFIGS,
//   ...BACKDROP_FILTER_CONFIGS,
//   ...BACKDROP_BLUR_CONFIGS,
//   ...BACKDROP_BRIGHTNESS_CONFIGS,
//   ...BACKDROP_CONTRAST_CONFIGS,
//   ...BACKDROP_GRAYSCALE_CONFIGS,
//   ...BACKDROP_HUE_ROTATE_CONFIGS,
//   ...BACKDROP_INVERT_CONFIGS,
//   ...BACKDROP_OPACITY_CONFIGS,
//   ...BACKDROP_SATURATE_CONFIGS,
//   ...BACKDROP_SEPIA_CONFIGS,

//   // Tables
//   ...BORDER_COLLAPSE_CONFIGS,
//   ...BORDER_SPACING_CONFIGS,
//   ...TABLE_LAYOUT_CONFIGS,
//   ...CAPTION_SIDE_CONFIGS,

//   // Transitions & Animation
//   ...TRANSITION_PROPERTY_CONFIGS,
//   ...TRANSITION_BEHAVIOR_CONFIGS,
//   ...TRANSITION_DURATION_CONFIGS,
//   ...TRANSITION_TIMING_FUNCTION_CONFIGS,
//   ...TRANSITION_DELAY_CONFIGS,
//   ...ANIMATION_CONFIGS,

//   // Transforms
//   ...BACKFACE_VISIBILITY_CONFIGS,
//   ...PERSPECTIVE_CONFIGS,
//   ...PERSPECTIVE_ORIGIN_CONFIGS,
//   ...ROTATE_CONFIGS,
//   ...SCALE_CONFIGS,
//   ...SKEW_CONFIGS,
//   ...TRANSFORM_CONFIGS,
//   ...TRANSFORM_ORIGIN_CONFIGS,
//   ...TRANSFORM_STYLE_CONFIGS,
//   ...TRANSLATE_CONFIGS,

//   // Interactivity
//   ...ACCENT_COLOR_CONFIGS,
//   ...APPEARANCE_CONFIGS,
//   ...CARET_COLOR_CONFIGS,
//   ...COLOR_SCHEME_CONFIGS,
//   ...CURSOR_CONFIGS,
//   ...FIELD_SIZING_CONFIGS,
//   ...POINTER_EVENTS_CONFIGS,
//   ...RESIZE_CONFIGS,
//   ...SCROLL_BEHAVIOR_CONFIGS,
//   ...SCROLL_MARGIN_CONFIGS,
//   ...SCROLL_PADDING_CONFIGS,
//   ...SCROLL_SNAP_ALIGN_CONFIGS,
//   ...SCROLL_SNAP_STOP_CONFIGS,
//   ...SCROLL_SNAP_TYPE_CONFIGS,
//   ...TOUCH_ACTION_CONFIGS,
//   ...USER_SELECT_CONFIGS,
//   ...WILL_CHANGE_CONFIGS,

//   // SVG
//   ...FILL_CONFIGS,
//   ...STROKE_CONFIGS,
//   ...STROKE_WIDTH_CONFIGS,

//   // Accessibility
//   ...FORCED_COLOR_ADJUST_CONFIGS,
// ];

// export default ALL_UTILITY_CONFIGS;