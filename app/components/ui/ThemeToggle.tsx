'use client';

import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '@/app/contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => {
        const themes = ['light', 'dark', 'system'] as const;
        const currentIndex = themes.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        setTheme(themes[nextIndex]);
      }}
      className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground-tertiary hover:text-foreground-secondary transition-all duration-200"
      title={`Current: ${theme}. Click to switch`}
    >
      {theme === 'light' && <Sun className="w-4 h-4" />}
      {theme === 'dark' && <Moon className="w-4 h-4" />}
      {theme === 'system' && <Monitor className="w-4 h-4" />}
    </button>
  );
}