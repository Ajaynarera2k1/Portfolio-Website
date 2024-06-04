import React from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
  {
    img: 'https://via.placeholder.com/600x400',
    name: 'Project One',
    techStack: ['React', 'CSS', 'JavaScript'],
    description: 'This is a detailed description of Project One. It includes information about the project goals, challenges, and outcomes.',
    link: 'https://example.com/project-one'
  },
  {
    img: 'https://via.placeholder.com/600x400',
    name: 'Project Two',
    techStack: ['React', 'Node.js', 'MongoDB'],
    description: 'This is a detailed description of Project Two. It includes information about the project goals, challenges, and outcomes.',
    link: 'https://example.com/project-two'
  },
  {
    img: 'https://via.placeholder.com/600x400',
    name: 'Project One',
    techStack: ['React', 'CSS', 'JavaScript'],
    description: 'This is a detailed description of Project One. It includes information about the project goals, challenges, and outcomes.',
    link: 'https://example.com/project-one'
  },
  {
    img: 'https://via.placeholder.com/600x400',
    name: 'Project Two',
    techStack: ['React', 'Node.js', 'MongoDB'],
    description: 'This is a detailed description of Project Two. It includes information about the project goals, challenges, and outcomes.',
    link: 'https://example.com/project-two'
  },
  {
    img: 'https://via.placeholder.com/600x400',
    name: 'Project One',
    techStack: ['React', 'CSS', 'JavaScript'],
    description: 'This is a detailed description of Project One. It includes information about the project goals, challenges, and outcomes.',
    link: 'https://example.com/project-one'
  },
  {
    img: 'https://via.placeholder.com/600x400',
    name: 'Project Two',
    techStack: ['React', 'Node.js', 'MongoDB'],
    description: 'This is a detailed description of Project Two. It includes information about the project goals, challenges, and outcomes.',
    link: 'https://example.com/project-two'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="p-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold inline-flex items-center gap-4">
          <span>Featured Projects.</span>
        
        </h2>
      </div>
      <div className="flex flex-wrap justify-center">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
