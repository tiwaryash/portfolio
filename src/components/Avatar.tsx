// portfolio/src/components/Avatar.tsx
'use client';

import Image from 'next/image';
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
      <Image
        src={avatarImages[currentTheme as keyof typeof avatarImages]}
        alt="Avatar"
        width={502}
        height={512}
        className="rounded-full transition-all duration-500 mt-6 ml-8"
      />
    </div>
  );
};

export default Avatar;