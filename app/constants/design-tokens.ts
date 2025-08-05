/**
 * Design Tokens - Système de design unifié
 * Basé sur les conventions de Supabase
 */

// Palette de couleurs de base
const colors = {
  // Couleurs neutres
  neutral: {
    0: '#FFFFFF',
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#121212',
  },
  
  // Couleur d'accent principal (vert Supabase)
  brand: {
    50: '#E6FFF0',
    100: '#CCFFE2',
    200: '#99FFC4',
    300: '#66FFA7',
    400: '#3ECF8E',
    500: '#3ECF8E', // Couleur principale
    600: '#32A671',
    700: '#267D55',
    800: '#1A5438',
    900: '#0D2A1C',
  },
  
  // Couleurs sémantiques
  semantic: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  }
} as const;

// Tokens sémantiques pour le texte
const textColors = {
  // Hiérarchie du texte
  primary: colors.neutral[0],      // Blanc pour les titres
  secondary: '#B4B4B4',           // rgb(180,180,180) pour texte principal
  tertiary: '#898989',            // rgb(137,137,137) pour texte secondaire
  muted: colors.neutral[500],     // Pour texte très discret
  disabled: colors.neutral[600],  // Pour éléments désactivés
  
  // États
  inverse: colors.neutral[950],   // Texte sur fond clair
  brand: colors.brand[500],       // Texte accent
  success: colors.semantic.success,
  error: colors.semantic.error,
} as const;

// Tokens pour les backgrounds
const backgroundColors = {
  // Niveaux de profondeur
  base: '#121212',                // Fond principal
  raised: '#171717',              // Sidebar
  overlay: '#171717',             // Cards
  hover: colors.neutral[800],     // État hover (#262626)
  
  // États spéciaux
  brand: colors.brand[500],
  brandSubtle: `${colors.brand[500]}20`, // 20% opacity
  brandHover: `${colors.brand[500]}E6`,  // 90% opacity
} as const;

// Tokens pour les bordures
const borderColors = {
  default: colors.neutral[800],   // #262626
  hover: colors.brand[500],       // Hover vert
  focus: colors.brand[500],       // Focus vert
  subtle: `${colors.neutral[800]}50`, // Bordure très subtile
} as const;

// Système de spacing (en rem)
const spacing = {
  0: '0',
  px: '1px',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',     // 4px
  1.5: '0.375rem',  // 6px
  2: '0.5rem',      // 8px
  2.5: '0.625rem',  // 10px
  3: '0.75rem',     // 12px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  8: '2rem',        // 32px
  10: '2.5rem',     // 40px
  12: '3rem',       // 48px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
} as const;

// Système de typographie
const typography = {
  fontFamily: {
    sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono', 'SF Mono', Monaco, monospace",
  },
  
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
  },
  
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
} as const;

// Styles de texte prédéfinis
const textStyles = {
  // Headings
  h1: {
    fontSize: typography.fontSize['4xl'],  // 36px
    lineHeight: '40px',
    fontWeight: typography.fontWeight.normal,
    color: textColors.primary,
  },
  h2: {
    fontSize: '1.75rem',  // 28px
    lineHeight: '32px',
    fontWeight: typography.fontWeight.normal,
    color: textColors.primary,
  },
  h3: {
    fontSize: typography.fontSize['2xl'],
    lineHeight: typography.lineHeight.tight,
    fontWeight: typography.fontWeight.medium,
    color: textColors.primary,
  },
  
  // Body
  body: {
    fontSize: typography.fontSize.base,
    lineHeight: typography.lineHeight.normal,
    fontWeight: typography.fontWeight.normal,
    color: textColors.secondary,
  },
  bodyLarge: {
    fontSize: typography.fontSize.lg,  // 18px
    lineHeight: '28px',
    fontWeight: typography.fontWeight.normal,
    color: textColors.secondary,
  },
  bodySmall: {
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.normal,
    fontWeight: typography.fontWeight.normal,
    color: textColors.tertiary,
  },
  
  // Utility
  caption: {
    fontSize: typography.fontSize.xs,
    lineHeight: typography.lineHeight.normal,
    fontWeight: typography.fontWeight.normal,
    color: textColors.tertiary,
  },
  label: {
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.none,
    fontWeight: typography.fontWeight.medium,
    color: textColors.secondary,
  },
} as const;

// Système de radius
const radius = {
  none: '0',
  sm: '0.125rem',    // 2px
  base: '0.25rem',   // 4px
  md: '0.375rem',    // 6px
  lg: '0.5rem',      // 8px
  xl: '0.75rem',     // 12px
  '2xl': '1rem',     // 16px
  full: '9999px',
} as const;

// Système d'ombres
const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
} as const;

// Export du système de design tokens
export const designTokens = {
  colors,
  textColors,
  backgroundColors,
  borderColors,
  spacing,
  typography,
  textStyles,
  radius,
  shadows,
} as const;

// Helper pour créer des classes Tailwind custom
export const tw = {
  text: (style: keyof typeof textStyles) => {
    const s = textStyles[style];
    return `text-[${s.fontSize}] leading-[${s.lineHeight}] font-[${s.fontWeight}]`;
  },
  
  // Générer les variables CSS pour le root
  getCSSVariables: () => {
    return Object.entries(colors.neutral).map(([key, value]) => 
      `--color-neutral-${key}: ${value};`
    ).join('\n');
  }
};

// Export type-safe des tokens
export type ColorToken = keyof typeof colors;
export type TextColorToken = keyof typeof textColors;
export type BackgroundColorToken = keyof typeof backgroundColors;
export type BorderColorToken = keyof typeof borderColors;
export type SpacingToken = keyof typeof spacing;
export type TextStyleToken = keyof typeof textStyles;