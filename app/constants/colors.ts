/**
 * Centralized Color System
 * 
 * This file contains all color definitions for the application.
 * All colors should be referenced from this file to ensure consistency.
 * 
 * @author Claude
 * @version 2.0.0
 */

// Primitive colors - Base palette
const primitives = {
  // Greens (Brand colors)
  green: {
    50: '#E6FAF2',
    100: '#B3F0D8',
    200: '#80E6BD',
    300: '#4DDCA3',
    400: '#3ECF8E', // Primary brand
    500: '#2EBF7E',
    600: '#1EAF6E',
    700: '#0E9F5E',
    800: '#008F4E',
    900: '#006139',
  },
  
  // Neutrals (Grays)
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
    950: '#0F0F0F',
    1000: '#000000',
  },
  
  // Semantic colors
  red: {
    500: '#EF4444',
    600: '#DC2626',
  },
  
  yellow: {
    500: '#F59E0B',
    600: '#D97706',
  },
  
  blue: {
    400: '#3B82F6',
    500: '#2563EB',
    600: '#1D4ED8',
  },
} as const;

// Semantic color tokens - These map to actual use cases
export const semanticColors = {
  // Light theme
  light: {
    // Backgrounds
    background: {
      primary: primitives.neutral[0],      // Main background
      secondary: primitives.neutral[50],   // Cards, elevated surfaces
      tertiary: primitives.neutral[100],   // Hover states
      inverse: primitives.neutral[950],    // Inverted elements
    },
    
    // Foregrounds (Text)
    foreground: {
      primary: primitives.neutral[950],    // Main text
      secondary: primitives.neutral[700],  // Secondary text
      tertiary: primitives.neutral[600],   // Muted text
      quaternary: primitives.neutral[500], // Very muted text
      inverse: primitives.neutral[0],      // Text on dark backgrounds
    },
    
    // Borders
    border: {
      primary: primitives.neutral[200],    // Default borders
      secondary: primitives.neutral[300],  // Emphasized borders
      tertiary: primitives.neutral[100],   // Subtle borders
    },
    
    // Brand
    brand: {
      primary: primitives.green[400],      // Primary actions
      secondary: primitives.green[500],    // Secondary brand
      tertiary: primitives.green[600],     // Hover states
    },
    
    // Interactive states
    interactive: {
      hover: primitives.neutral[100],      // Hover backgrounds
      pressed: primitives.neutral[200],    // Pressed state
      focus: primitives.green[400],        // Focus rings
      disabled: primitives.neutral[100],   // Disabled backgrounds
    },
  },
  
  // Dark theme
  dark: {
    // Backgrounds
    background: {
      primary: primitives.neutral[950],    // Main background
      secondary: primitives.neutral[900],  // Cards, elevated surfaces
      tertiary: primitives.neutral[800],   // Hover states
      inverse: primitives.neutral[0],      // Inverted elements
    },
    
    // Foregrounds (Text)
    foreground: {
      primary: primitives.neutral[50],     // Main text
      secondary: primitives.neutral[300],  // Secondary text (#B4B4B4 approx)
      tertiary: primitives.neutral[400],   // Muted text (#A1A1AA approx)
      quaternary: primitives.neutral[500], // Very muted text (#898989 approx)
      inverse: primitives.neutral[950],    // Text on light backgrounds
    },
    
    // Borders
    border: {
      primary: primitives.neutral[800],    // Default borders
      secondary: primitives.neutral[700],  // Emphasized borders
      tertiary: primitives.neutral[900],   // Subtle borders
    },
    
    // Brand
    brand: {
      primary: primitives.green[400],      // Primary actions
      secondary: primitives.green[500],    // Secondary brand
      tertiary: primitives.green[300],     // Hover states
    },
    
    // Interactive states
    interactive: {
      hover: primitives.neutral[800],      // Hover backgrounds
      pressed: primitives.neutral[700],    // Pressed state
      focus: primitives.green[400],        // Focus rings
      disabled: primitives.neutral[800],   // Disabled backgrounds
    },
  },
} as const;

// Component-specific tokens
export const componentColors = {
  button: {
    primary: {
      light: {
        background: primitives.green[400],
        foreground: primitives.neutral[0],
        border: primitives.green[400],
        hover: {
          background: primitives.green[500],
          border: primitives.green[500],
        },
      },
      dark: {
        background: primitives.green[400],
        foreground: primitives.neutral[950],
        border: primitives.green[400],
        hover: {
          background: primitives.green[300],
          border: primitives.green[300],
        },
      },
    },
    secondary: {
      light: {
        background: primitives.neutral[100],
        foreground: primitives.neutral[950],
        border: primitives.neutral[200],
        hover: {
          background: primitives.neutral[200],
          border: primitives.neutral[300],
        },
      },
      dark: {
        background: primitives.neutral[800],
        foreground: primitives.neutral[50],
        border: primitives.neutral[700],
        hover: {
          background: primitives.neutral[700],
          border: primitives.neutral[600],
        },
      },
    },
    ghost: {
      light: {
        background: 'transparent',
        foreground: primitives.neutral[700],
        border: 'transparent',
        hover: {
          background: primitives.neutral[100],
          border: 'transparent',
        },
      },
      dark: {
        background: 'transparent',
        foreground: primitives.neutral[300],
        border: 'transparent',
        hover: {
          background: primitives.neutral[800],
          border: 'transparent',
        },
      },
    },
  },
  
  card: {
    light: {
      background: primitives.neutral[50],
      border: primitives.neutral[200],
      shadow: 'rgba(0, 0, 0, 0.05)',
    },
    dark: {
      background: primitives.neutral[900],
      border: primitives.neutral[800],
      shadow: 'rgba(0, 0, 0, 0.2)',
    },
  },
  
  badge: {
    success: {
      light: {
        background: `${primitives.green[400]}20`,
        foreground: primitives.green[700],
        border: `${primitives.green[400]}30`,
      },
      dark: {
        background: `${primitives.green[400]}20`,
        foreground: primitives.green[400],
        border: `${primitives.green[400]}30`,
      },
    },
    warning: {
      light: {
        background: `${primitives.yellow[500]}20`,
        foreground: primitives.yellow[700],
        border: `${primitives.yellow[500]}30`,
      },
      dark: {
        background: `${primitives.yellow[500]}20`,
        foreground: primitives.yellow[500],
        border: `${primitives.yellow[500]}30`,
      },
    },
    error: {
      light: {
        background: `${primitives.red[500]}20`,
        foreground: primitives.red[700],
        border: `${primitives.red[500]}30`,
      },
      dark: {
        background: `${primitives.red[500]}20`,
        foreground: primitives.red[500],
        border: `${primitives.red[500]}30`,
      },
    },
  },
};

// Utility function to get colors based on theme
export function getThemeColors(theme: 'light' | 'dark') {
  return {
    ...semanticColors[theme],
    components: Object.entries(componentColors).reduce((acc, [component, values]) => {
      acc[component] = values[theme] || values;
      return acc;
    }, {} as Record<string, any>),
  };
}

// Export all color values for use in CSS
export const colors = {
  primitives,
  semantic: semanticColors,
  components: componentColors,
};

// Type exports
export type Theme = 'light' | 'dark';
export type SemanticColors = typeof semanticColors;
export type ComponentColors = typeof componentColors;