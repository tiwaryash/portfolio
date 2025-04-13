import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { themes } from '@/lib/theme';

interface ThemeState {
  currentTheme: keyof typeof themes;
  setTheme: (theme: keyof typeof themes) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      currentTheme: 'dark',
      setTheme: (theme) => set({ currentTheme: theme }),
    }),
    {
      name: 'theme-storage',
    }
  )
); 