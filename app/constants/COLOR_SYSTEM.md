# Centralized Color System Documentation

## Overview

This document describes the professional, centralized color system implemented for the QuantumQuote application. The system provides consistent, semantic color tokens that support both light and dark themes while maintaining design coherence across all components.

## Architecture

The color system is built on three foundational files:

### 1. `/app/constants/colors.ts`
- **Primitive colors**: Base color palette with neutral and brand scales
- **Semantic tokens**: Context-aware color mappings for backgrounds, text, borders
- **Component tokens**: Specific color definitions for buttons, cards, badges
- **Theme utility**: Functions to get theme-specific colors

### 2. `/app/globals.css`
- **CSS variables**: Runtime theme switching with CSS custom properties
- **Centralized tokens**: All semantic colors available as `var(--*)` variables
- **Theme variants**: Complete light/dark theme definitions

### 3. `/tailwind.config.ts`
- **Tailwind integration**: Direct access to color primitives in utility classes
- **Extended palette**: Custom color scales available as `bg-neutral-*`, `text-brand-*`
- **Semantic utilities**: Theme-aware classes like `bg-background`, `text-foreground`

## Color Palette

### Neutral Scale
```typescript
neutral: {
  0: '#FFFFFF',    // Pure white
  50: '#FAFAFA',   // Light backgrounds, cards (light theme)
  100: '#F5F5F5',  // Hover states (light theme)
  200: '#E5E5E5',  // Borders (light theme)
  300: '#D4D4D4',  // Secondary borders
  400: '#A3A3A3',  // Tertiary text
  500: '#737373',  // Muted text
  600: '#525252',  // Secondary text (light theme)
  700: '#404040',  // Primary text (light theme)  
  800: '#262626',  // Hover states, borders (dark theme)
  900: '#171717',  // Cards, elevated surfaces (dark theme)
  950: '#0F0F0F',  // Primary text (dark theme)
  1000: '#000000', // Pure black
}
```

### Brand Scale
```typescript
green: {
  50: '#E6FAF2',   // Light brand backgrounds
  100: '#B3F0D8',  // Subtle brand elements
  200: '#80E6BD',  // Light brand accents
  300: '#4DDCA3',  // Brand hover states (dark theme)
  400: '#3ECF8E',  // Primary brand color ⭐
  500: '#2EBF7E',  // Brand hover states (light theme)
  600: '#1EAF6E',  // Pressed states
  700: '#0E9F5E',  // Dark brand elements
  800: '#008F4E',  // Success backgrounds
  900: '#006139',  // Deep success states
}
```

## Semantic Tokens

### Light Theme
```css
--background: #FFFFFF           /* Page backgrounds */
--background-secondary: #FAFAFA /* Cards, elevated surfaces */
--background-tertiary: #F5F5F5  /* Hover states */

--foreground: #0F0F0F           /* Primary text */
--foreground-secondary: #404040  /* Secondary text */
--foreground-tertiary: #525252   /* Muted text */
--foreground-quaternary: #737373 /* Very muted text */

--border: #E5E5E5               /* Default borders */
--border-secondary: #D4D4D4     /* Emphasized borders */

--primary: #3ECF8E              /* Brand actions */
```

### Dark Theme (User Specified)
```css
--background: #121212           /* Page backgrounds */
--background-secondary: #171717 /* Cards, elevated surfaces */
--background-tertiary: #262626  /* Hover states */

--foreground: #FAFAFA           /* Primary text (white titles) */
--foreground-secondary: #B4B4B4 /* Text1 - rgb(180,180,180) */
--foreground-tertiary: #A3A3A3  /* Muted text */
--foreground-quaternary: #898989 /* Text2 - rgb(137,137,137) */

--border: #262626               /* Default borders */
--border-secondary: #404040     /* Emphasized borders */

--primary: #3ECF8E              /* Brand actions */
```

## Usage Guidelines

### 1. Tailwind Classes (Preferred)
```tsx
// Backgrounds
<div className="bg-background">          {/* Page background */}
<div className="bg-card">                {/* Cards */}
<div className="bg-neutral-800">         {/* Specific neutral */}
<div className="bg-brand">               {/* Brand color */}

// Text
<h1 className="text-foreground">         {/* Main headings */}
<p className="text-foreground-secondary">{/* Body text */}
<span className="text-brand">            {/* Brand text */}

// Borders
<div className="border-border">          {/* Default borders */}
<div className="border-brand">           {/* Brand borders */}
```

### 2. CSS Variables (Dynamic Cases)
```tsx
// When you need runtime theme switching
<div style={{ backgroundColor: 'var(--background)' }}>
<div style={{ color: 'var(--foreground-secondary)' }}>
<div style={{ borderColor: 'var(--primary)' }}>
```

### 3. Direct Color Access (Rare)
```tsx
import { colors } from '@/app/constants/colors';

// Only when you need direct access to primitive values
const brandColor = colors.primitives.green[400];
const neutralBg = colors.primitives.neutral[900];
```

## Component-Specific Tokens

### Button Colors
```typescript
// Primary button
background: colors.primitives.green[400]    // #3ECF8E
foreground: colors.primitives.neutral[0]    // White text
hover: colors.primitives.green[500]         // Darker on hover

// Secondary button  
background: colors.primitives.neutral[100]  // Light gray
foreground: colors.primitives.neutral[950]  // Dark text
hover: colors.primitives.neutral[200]       // Darker gray
```

### Card Colors
```typescript
// Light theme cards
background: colors.primitives.neutral[50]   // #FAFAFA
border: colors.primitives.neutral[200]      // #E5E5E5

// Dark theme cards  
background: colors.primitives.neutral[900]  // #171717
border: colors.primitives.neutral[800]      // #262626
```

## Migration Guide

### Replacing Hardcoded Colors

| Old Hardcoded Color | New Semantic Token | Tailwind Class |
|-------------------|-------------------|----------------|
| `#3ECF8E` | `var(--primary)` | `bg-brand` or `text-brand` |
| `#171717` | `var(--card)` | `bg-card` |
| `#121212` | `var(--background)` | `bg-background` |
| `#FAFAFA` | `var(--foreground)` | `text-foreground` |
| `#B4B4B4` | `var(--foreground-secondary)` | `text-foreground-secondary` |
| `#898989` | `var(--foreground-quaternary)` | `text-foreground-quaternary` |
| `#262626` | `var(--background-tertiary)` | `bg-neutral-800` |

### Before
```tsx
<div className="bg-[#171717] text-[#FAFAFA] border-[#3ECF8E]">
  <h1 className="text-[#FAFAFA]">Title</h1>
  <p className="text-[#B4B4B4]">Description</p>
</div>
```

### After
```tsx
<div className="bg-card text-card-foreground border-brand">
  <h1 className="text-foreground">Title</h1>
  <p className="text-foreground-secondary">Description</p>
</div>
```

## Best Practices

### 1. Semantic Over Specific
✅ **Good**: `bg-card`, `text-foreground`  
❌ **Avoid**: `bg-neutral-900`, `text-neutral-50`

### 2. Theme-Aware Tokens
✅ **Good**: Use CSS variables that switch with theme  
❌ **Avoid**: Hardcoded colors that don't respect theme

### 3. Consistent Hierarchy
✅ **Good**: `text-foreground` → `text-foreground-secondary` → `text-foreground-tertiary`  
❌ **Avoid**: Mixing different color scales arbitrarily

### 4. Component Consistency
✅ **Good**: All cards use `bg-card`  
❌ **Avoid**: Some cards use `bg-neutral-900`, others use `bg-card`

## Theme Switching

The system automatically handles theme switching via:

1. **CSS Variables**: All colors use `var(--*)` format
2. **Theme Context**: React context manages theme state
3. **CSS Classes**: `.dark` class switches all variables
4. **Persistence**: Theme preference saved to localStorage

```tsx
// Theme switching is automatic
const { theme, setTheme } = useTheme();
setTheme(theme === 'light' ? 'dark' : 'light');
// All components automatically update
```

## Maintenance

### Adding New Colors
1. Add primitive color to `/app/constants/colors.ts`
2. Create semantic token mapping for both themes
3. Add CSS variable to `/app/globals.css`
4. Extend Tailwind config if needed
5. Update this documentation

### Updating Existing Colors
1. Modify primitive value in `/app/constants/colors.ts`
2. Update CSS variables in `/app/globals.css`
3. Changes propagate automatically to all components

## File Status

✅ **Migrated Files** (hardcoded colors replaced):
- `/app/report/ReportPage.tsx` (85+ instances)
- `/app/transcript/TranscriptPage.tsx` (45+ instances)
- `/app/contact/ContactPage.tsx` (35+ instances)  
- `/app/dashboard/Dashboard.tsx` (25+ instances)
- `/app/components/sidebar/Sidebar.tsx` (15+ instances)

📋 **Remaining Files** (if any):
- Run `grep -r "#[0-9A-Fa-f]{6}" app/` to find remaining hardcoded colors
- Systematically migrate using the patterns above

---

*This color system was designed with senior-level architecture principles to ensure maintainability, consistency, and scalability for the QuantumQuote application.*