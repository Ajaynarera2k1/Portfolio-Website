import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-[40rem] mx-4 my-8 p-2 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
      <img src={project.img} alt={`${project.name} screenshot`} className="w-full h-64 object-cover rounded-t-lg" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
        <p className="text-lg text-gray-700 italic mb-4">{project.techStack.join(', ')}</p>
        <button 
          className="bg-[#284659] text-white py-2 px-4 rounded transition-colors hover:bg-[#162935]"
          onClick={handleToggle}
        >
          {isExpanded ? 'Hide Details' : 'Show Details'}
        </button>
        {isExpanded && <p className="mt-4 text-gray-800">{project.description}</p>}
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block mt-4 bg-[#284659] text-white py-2 px-4 rounded transition-colors hover:bg-[#162935]"
        >
          Visit Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
