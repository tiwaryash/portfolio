'use client';

import { useThemeStore } from '@/store/themeStore';
import { Theme } from '@/lib/theme';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const themes: { icon: string; value: Theme; label: string }[] = [
  { icon: '🌙', value: 'dark', label: 'Dark Mode' },
  { icon: '☀️', value: 'light', label: 'Light Mode' },
  { icon: '🌳', value: 'nature', label: 'Nature Mode' },
  { icon: '🏙️', value: 'urban', label: 'Urban Mode' },
];

const soundEffects: { [key: string]: string } = {
  dark: '/sounds/rock_guitar.mp3',
  light: '/sounds/sun_pop.mp3',
  nature: '/sounds/leaf_fall.mp3',
  urban: '/sounds/car_horn.mp3',
};

export function ThemeSwitcher() {
  const { currentTheme, setTheme } = useThemeStore();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = (theme: Theme) => {
    if (audioRef.current) {
      audioRef.current.src = soundEffects[theme];
      audioRef.current.play();
    }
  };

  const handleThemeChange = (theme: Theme) => {
    setTheme(theme);
    playSound(theme);
  };

  return (
    <div className="fixed top-24 right-4 z-50">
      <div className="flex gap-2 p-2 bg-background/80 backdrop-blur-sm rounded-full shadow-lg">
        {themes.map((theme) => (
          <motion.button
            key={theme.value}
            onClick={() => handleThemeChange(theme.value)}
            className={`p-2 rounded-full text-xl transition-colors ${
              currentTheme === theme.value
                ? 'bg-primary text-white'
                : 'text-text/60 hover:text-text'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={theme.label}
          >
            {theme.icon}
          </motion.button>
        ))}
      </div>
      <audio ref={audioRef} style={{ display: 'none' }} />
    </div>
  );
} 