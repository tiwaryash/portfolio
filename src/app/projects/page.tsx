'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink, Github } from 'lucide-react';

const projects = [
  { 
    id: 1,
    name: 'Nexus Mind: AI-Powered Knowledge Discovery',
    description: 'An AI platform that connects disparate information sources to discover hidden patterns and insights.',
    image: '/project_images/nexus.png',
    tags: ['AI', 'Machine Learning', 'Knowledge Graph'],
    links: {
      demo: 'https://example.com/nexus',
      github: 'https://github.com/example/nexus'
    }
  },
  { 
    id: 2,
    name: 'Quantum Visualizer',
    description: 'Interactive visualizations of quantum computing concepts for educational purposes.',
    image: '/api/placeholder/800/450',
    tags: ['Quantum', 'Education', 'Visualization'],
    links: {
      demo: 'https://example.com/quantum',
      github: 'https://github.com/example/quantum'
    }
  },
  { 
    id: 3,
    name: 'EcoTrack',
    description: 'Mobile application for tracking and reducing personal carbon footprint with community features.',
    image: '/api/placeholder/800/450',
    tags: ['Mobile', 'Sustainability', 'Community'],
    links: {
      demo: 'https://example.com/ecotrack',
      github: 'https://github.com/example/ecotrack'
    }
  },
  { 
    id: 4,
    name: 'Neural Canvas',
    description: 'AI-assisted digital art creation platform combining user input with machine learning models.',
    image: '/api/placeholder/800/450',
    tags: ['Creative AI', 'Art', 'Design'],
    links: {
      demo: 'https://example.com/neural-canvas',
      github: 'https://github.com/example/neural-canvas'
    }
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [selectedProject]);

  const handleProjectClick = (project: typeof projects[number]) => {
    setIsLoading(true);
    setSelectedProject(project);
  };

  return (
    <div className="min-h-screen bg-background text-text pt-20 px-4 md:px-8">
      <div className="flex flex-col lg:flex-row gap-8 pt-28">
        {/* Project List */}
        <motion.div 
          className="lg:w-1/3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="bg-opacity-50 rounded-xl overflow-hidden backdrop-filter backdrop-blur-lg border border-gray-700">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className={`p-5 cursor-pointer border-b border-gray-700 last:border-none transition-all duration-300 ${selectedProject.id === project.id ? 'bg-primary' : 'bg-transparent hover:bg-opacity-30'}`}
                onClick={() => handleProjectClick(project)}
                whileHover={{ 
                  x: 10,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{project.name}</h3>
                  <ChevronRight size={16} className={`transition-transform duration-300 ${selectedProject.id === project.id ? 'rotate-90' : ''}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Project Details */}
        <motion.div 
          className="lg:w-2/3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="bg-opacity-50 rounded-xl overflow-hidden backdrop-filter backdrop-blur-lg border border-gray-700 h-full min-h-[650px]">
            <motion.div 
className="relative overflow-hidden h-[32rem] md:h-[30rem]"              initial={{ opacity: 0 }}
              animate={{ opacity: isLoading ? 0 : 1 }}
              transition={{ duration: 0.5 }}
            >
              {isLoading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-12 h-12 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              ) : (
                <motion.img 
                  src={selectedProject.image} 
                  alt={selectedProject.name}
                  className="w-full h-full object-cover transition-all duration-500"
                  initial={{ scale: 1.1, filter: 'blur(10px)' }}
                  animate={{ scale: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.6 }}
                />
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80" />
              
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedProject.name}</h2>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="p-6"
              key={selectedProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="mb-8">{selectedProject.description}</p>
              
              <div className="flex gap-4">
                <motion.a 
                  href={selectedProject.links.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center text-white gap-2 px-4 py-2 rounded-lg ${isLoading ? 'bg-secondary' : 'bg-primary'} hover:bg-opacity-80 transition-all duration-300`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </motion.a>
                
                <motion.a 
                  href={selectedProject.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-white rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={16} />
                  <span>Source Code</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Project Navigation Dots */}
      <motion.div 
        className="flex justify-center mt-10 gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        {projects.map((project) => (
          <motion.button
            key={project.id}
            className={`w-3 h-3 rounded-full ${selectedProject.id === project.id ? 'bg-primary' : 'bg-gray-600'}`}
            onClick={() => handleProjectClick(project)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>
    </div>
  );
}