'use client';

import { motion } from 'framer-motion';
import { useThemeStore } from '@/store/themeStore';

const ThemeElements = {
  dark: {
    animation: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 1 }
    }
  },
  light: {
    animation: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 1 }
    }
  },
  nature: {
    animation: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 1 }
    }
  },
  urban: {
    animation: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 1 }
    }
  }
};

export function ThemeBackground() {
  const { currentTheme } = useThemeStore();
  const themeElement = ThemeElements[currentTheme as keyof typeof ThemeElements];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        {...themeElement.animation}
      >
        {/* Background patterns */}
        <div className="absolute inset-0 opacity-10">
          {currentTheme === 'dark' && (
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent" />
          )}
          {currentTheme === 'light' && (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
          )}
          {currentTheme === 'nature' && (
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-primary/20" />
          )}
          {currentTheme === 'urban' && (
            <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-primary/20" />
          )}
        </div>
      </motion.div>
    </div>
  );
} 