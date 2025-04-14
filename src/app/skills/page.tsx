'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaLaptopCode, FaDatabase, FaTools, FaPaintBrush, FaMobileAlt, FaQuestionCircle } from 'react-icons/fa';

const skillsData = [
  {
    category: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TypeScript'],
    color: 'bg-primary',
    icon: <FaLaptopCode className="text-gray-500" />
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Java', 'Python', 'C++', 'SQL', 'R'],
    color: 'bg-primary',
    icon: <FaDatabase className="text-gray-500" />
  },
  {
    category: 'DevOps',
    skills: ['Docker', 'Git', 'GitHub', 'Postman', 'AWS', 'Azure'],
    color: 'bg-primary',
    icon: <FaTools className="text-gray-500" />
  },
  {
    category: 'Design',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Tailwind CSS'],
    color: 'bg-primary',
    icon: <FaPaintBrush className="text-gray-500" />
  },
  {
    category: 'Mobile',
    skills: ['React Native', 'Flutter', 'Swift'],
    color: 'bg-primary',
    icon: <FaMobileAlt className="text-gray-500" />
  },
  {
    category: 'Miscellaneous',
    skills: ['REST APIs', 'GraphQL'],
    color: 'bg-primary',
    icon: <FaQuestionCircle className="text-gray-500" />
  },
];

export default function Skills() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-primary bg-gradient-to-r">
            Skills
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Technologies and tools I work with to create amazing digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl overflow-hidden border border-gray-700 p-6 backdrop-blur-sm transition-all duration-300 ${hoveredCard === index ? 'scale-105 shadow-xl' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h2 className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-gray-500 ${category.color}`}>
                  {category.category}
                </h2>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${hoveredCard === index ? 'text-primary' : 'text-primary'}`}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      duration: 0.3,
                      delay: index * 0.1 + skillIndex * 0.05
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: hoveredCard === index ? '#ffffff' : '#4f46e5'
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
              
              {hoveredCard === index && (
                <motion.div 
                  className="absolute inset-0 -z-10 bg-gradient-to-br opacity-20 from-primary to-accent rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}