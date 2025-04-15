'use client';

import { motion } from 'framer-motion';
import { ThemeBackground } from '@/components/ThemeBackground';
import Link from 'next/link';
import Avatar from '@/components/Avatar';
import AudioPlayer from '@/components/AudioPlayer';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const sections = [
  {
    title: 'Project',
    description: 'Explore my latest projects and work',
    href: '/projects',
    icon: '💻'
  },
  {
    title: 'Skills',
    description: 'View my technical expertise and capabilities',
    href: '/skills',
    icon: '🎯'
  },
  {
    title: 'Blog',
    description: 'Read my thoughts and insights',
    href: '/blog',
    icon: '📝'
  },
  {
    title: 'Contact',
    description: 'Get in touch with me',
    href: '/contact',
    icon: '📧'
  }
];
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/3 flex justify-center items-center pt-24 md:pt-0">
        <AudioPlayer />
        <Avatar />
      </div>
      <div className="w-full md:w-2/3 flex flex-col items-center justify-center pt-8 md:pt-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center z-10 px-4"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Yash Tiwary
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl text-text/80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Software Engineer
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-text/60 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Building modern web applications with a focus on user experience and clean code.
          </motion.p>
       
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
           
          </motion.div>
        </motion.div>
       
      </div>
    </div>
  );
}