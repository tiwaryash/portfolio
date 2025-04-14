'use client';

import { useThemeStore } from '@/store/themeStore';
import { themes } from '@/lib/theme';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useSidebarStore } from '@/store/sidebarStore';
import { usePathname } from 'next/navigation';

const themeOptions = [
  { icon: '🌙', value: 'dark' as const, label: 'Dark Mode' },
  { icon: '☀️', value: 'light' as const, label: 'Light Mode' },
  { icon: '🌳', value: 'nature' as const, label: 'Nature Mode' },
  { icon: '🏙️', value: 'urban' as const, label: 'Urban Mode' },
];

const soundEffects: { [key: string]: string } = {
  dark: '/sounds/beer_opening.mp3',
  light: '/sounds/sun_pop.mp3',
  nature: '/sounds/leaf_fall.mp3',
  urban: '/sounds/car_pass.mp3',
};

export function ThemeSwitcher() {
  const { currentTheme, setTheme } = useThemeStore();
  const { isOpen } = useSidebarStore();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const pathname = usePathname();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const getPosition = () => {
    if (isMobile ) {
      return isOpen 
        ? 'top-auto bottom-24 left-1/2 -translate-x-1/2'
        : 'top-0 right-16 h-20 items-center';
    }
    return isOpen 
      ? 'top-auto bottom-24 left-1/2 -translate-x-1/2'
      : 'top-24 right-4';
  };

  const playSound = (theme: keyof typeof soundEffects) => {
    if (audioRef.current) {
      audioRef.current.src = soundEffects[theme];
      audioRef.current.play();
    }
  };

  const handleThemeChange = (theme: 'dark' | 'light' | 'nature' | 'urban') => {
    setTheme(theme);
    playSound(theme);
  };

  return (
    <div className={`fixed z-50 transition-all duration-300 flex ${getPosition()}`}>
      <div className="flex gap-2 p-2 bg-background/80 backdrop-blur-sm rounded-full shadow-lg">
        {themeOptions.map((theme) => (
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