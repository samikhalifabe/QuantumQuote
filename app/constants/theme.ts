import { designTokens } from './design-tokens';

// Legacy theme - utilise maintenant le système de design tokens
export const theme = {
  colors: {
    primary: designTokens.colors.brand[500],
    secondary: designTokens.backgroundColors.overlay,
    accent: designTokens.colors.semantic.success,
    dark: designTokens.backgroundColors.base,
    border: designTokens.borderColors.default,
    text: {
      primary: designTokens.textColors.primary,
      secondary: designTokens.textColors.secondary,
      muted: designTokens.textColors.tertiary,
      light: designTokens.colors.neutral[0],
    },
    background: {
      primary: designTokens.backgroundColors.base,
      secondary: designTokens.backgroundColors.raised,
      card: designTokens.backgroundColors.overlay,
      hover: designTokens.backgroundColors.hover,
    },
  },
  fonts: {
    primary: designTokens.typography.fontFamily.sans,
  },
  spacing: designTokens.spacing,
  borderRadius: designTokens.radius,
} as const