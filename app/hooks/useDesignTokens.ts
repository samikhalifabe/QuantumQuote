import { designTokens } from '@/app/constants/design-tokens';

/**
 * Hook pour accéder aux design tokens
 * Fournit des helpers pour appliquer les styles de manière consistante
 */
export const useDesignTokens = () => {
  // Helper pour obtenir les classes Tailwind d'un style de texte
  const getTextStyle = (style: keyof typeof designTokens.textStyles) => {
    const s = designTokens.textStyles[style];
    return {
      fontSize: s.fontSize,
      lineHeight: s.lineHeight,
      fontWeight: s.fontWeight,
      color: s.color,
    };
  };

  // Helper pour obtenir une couleur avec opacité
  const getColorWithOpacity = (color: string, opacity: number) => {
    const hex = Math.round(opacity * 255).toString(16).padStart(2, '0');
    return `${color}${hex}`;
  };

  // Classes utilitaires pré-définies
  const classes = {
    // Typographie
    text: {
      h1: 'text-[36px] leading-[40px] font-normal text-white',
      h2: 'text-[28px] leading-[32px] font-normal text-white',
      h3: 'text-2xl leading-tight font-medium text-white',
      body: 'text-base leading-normal font-normal text-[#B4B4B4]',
      bodyLarge: 'text-[18px] leading-[28px] font-normal text-[#B4B4B4]',
      bodySmall: 'text-sm leading-normal font-normal text-[#898989]',
      caption: 'text-xs leading-normal font-normal text-[#898989]',
      label: 'text-sm leading-none font-medium text-[#B4B4B4]',
    },
    
    // Containers
    container: {
      base: 'bg-[#121212]',
      raised: 'bg-[#171717]',
      card: 'bg-[#171717] border border-[#262626] rounded-xl',
      cardHover: 'hover:border-[#3ECF8E] transition-all duration-200',
    },
    
    // Boutons
    button: {
      primary: 'bg-[#3ECF8E] text-black hover:bg-[#3ECF8E]/90 font-semibold rounded-lg px-4 py-2 transition-colors',
      secondary: 'bg-transparent text-[#3ECF8E] border border-[#3ECF8E] hover:bg-[#3ECF8E]/10 font-semibold rounded-lg px-4 py-2 transition-colors',
      ghost: 'bg-transparent text-[#B4B4B4] hover:bg-[#262626] hover:text-white rounded-lg px-4 py-2 transition-colors',
      danger: 'bg-red-600 text-white hover:bg-red-700 font-semibold rounded-lg px-4 py-2 transition-colors',
    },
    
    // États
    states: {
      disabled: 'opacity-50 cursor-not-allowed',
      loading: 'animate-pulse',
      focus: 'focus:outline-none focus:ring-2 focus:ring-[#3ECF8E] focus:ring-offset-2 focus:ring-offset-[#121212]',
    },
    
    // Utilitaires
    utils: {
      brandGlow: 'shadow-[0_0_20px_rgba(62,207,142,0.3)]',
      divider: 'border-t border-[#262626]',
      icon: {
        brand: 'text-[#3ECF8E]',
        muted: 'text-[#898989]',
        white: 'text-white',
      },
    },
  };

  return {
    tokens: designTokens,
    getTextStyle,
    getColorWithOpacity,
    classes,
    
    // Raccourcis pour les couleurs les plus utilisées
    colors: {
      text: designTokens.textColors,
      bg: designTokens.backgroundColors,
      border: designTokens.borderColors,
      brand: designTokens.colors.brand[500],
    },
  };
};