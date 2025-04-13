// portfolio/src/components/Navigation.tsx
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Updated import
import { FaHome, FaLaptopCode, FaTools, FaBlog, FaEnvelope } from 'react-icons/fa'; // Importing icons

const sections = [
  { name: 'Home', href: '/', icon: <FaHome /> },
  { name: 'Projects', href: '/projects', icon: <FaLaptopCode /> },
  { name: 'Skills', href: '/skills', icon: <FaTools /> },
  { name: 'Blog', href: '/blog', icon: <FaBlog /> },
  { name: 'Contact', href: '/contact', icon: <FaEnvelope /> },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('Home');
  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100; // Adjust for navbar height

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId || 'Home');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Update active section based on the current route
    const currentSection = sections.find(section => section.href === pathname);
    if (currentSection) {
      setActiveSection(currentSection.name);
    }
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-text/10 h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
            >
              YT
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {sections.map((section) => (
                <motion.a
                  key={section.name}
                  href={section.href}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === section.name
                      ? 'text-primary'
                      : 'text-text/60 hover:text-text'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.icon} {/* Render the icon */}
                  <span className="ml-2">{section.name}</span> {/* Section name */}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}