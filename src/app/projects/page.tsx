'use client';

import { useState } from 'react';

const projects = [
  { name: 'Nexus Mind: AI-Powered Knowledge Discovery', image: '/project_images/nexus.png' },
  { name: 'Project 2', image: '/project_images/project2.png' },
  { name: 'Project 3', image: '/project_images/project3.png' },
  { name: 'Project 4', image: '/project_images/project4.png' },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen mt-20"> {/* Added mt-20 to create space for the navbar */}
      <div className="w-1/3 border-r border-gray-300">
        {projects.map((project) => (
          <div
            key={project.name}
            className="p-4 cursor-pointer hover:bg-gray-200 transition-transform transform hover:scale-105"
            onMouseEnter={() => setHoveredProject(project.image)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {project.name}
          </div>
        ))}
      </div>
      <div className="w-2/3 flex justify-center items-center">
        {hoveredProject && (
          <img src={hoveredProject} alt="Project Preview" className="max-w-full h-auto" />
        )}
      </div>
    </div>
  );
}