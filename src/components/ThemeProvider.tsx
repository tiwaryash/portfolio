'use client';

import { useEffect } from 'react';
import { useThemeStore } from '@/store/themeStore';
import { themes } from '@/lib/theme';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { currentTheme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    const themeColors = themes[currentTheme as keyof typeof themes];

    Object.entries(themeColors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });

    root.classList.remove('dark', 'light', 'nature', 'urban');
    root.classList.add(currentTheme);
  }, [currentTheme]);

  return <>{children}</>;
} 