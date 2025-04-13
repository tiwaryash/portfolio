// portfolio/src/components/Avatar.tsx
'use client';

import { useThemeStore } from '@/store/themeStore';

const Avatar = () => {
  const { currentTheme } = useThemeStore();

  // Map themes to corresponding avatar images
  const avatarImages = {
    dark: '/avatars/dark.png',
    light: '/avatars/light.png',
    nature: '/avatars/nature.png',
    urban: '/avatars/urban.png',
  };

  return (
    <div className="flex justify-center items-center">
      <img
        src={avatarImages[currentTheme as keyof typeof avatarImages]}
        alt="Avatar"
        className="w-82 h-92 rounded-full transition-all duration-500 mt-6 ml-8" // Adjust size as needed
      />
    </div>
  );
};

export default Avatar;