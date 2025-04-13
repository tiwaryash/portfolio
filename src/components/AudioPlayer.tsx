'use client';

import { useEffect, useRef } from 'react';

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const songs = [
    '/audio/ligh3.mp3',
    // '/audio/song2.mp3',
    // '/audio/song3.mp3',
    // '/audio/song4.mp3',
  ];

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
        } catch (error) {
          console.error("Autoplay failed:", error);
        }
      }
    };

    const handleEnded = () => {
      if (audioRef.current) {
        const currentIndex = songs.indexOf(audioRef.current.src);
        const nextIndex = (currentIndex + 1) % songs.length;
        audioRef.current.src = songs[nextIndex];
        audioRef.current.play();
      }
    };

    audioRef.current?.addEventListener('ended', handleEnded);

    // Add event listener to play audio on user interaction
    const handleUserInteraction = () => {
      playAudio();
      document.removeEventListener('click', handleUserInteraction); // Remove listener after first interaction
    };

    document.addEventListener('click', handleUserInteraction);

    // Set volume to a lower value (for example, 0.3)
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Adjust this value to set the volume level
    }

    return () => {
      audioRef.current?.removeEventListener('ended', handleEnded);
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  return <audio ref={audioRef} src={songs[0]} loop />;
};

export default AudioPlayer;
