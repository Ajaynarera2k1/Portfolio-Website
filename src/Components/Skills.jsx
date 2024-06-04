import React from 'react';

const skillsData = [
  { name: 'HTML', description: 'Markup language for structuring web content.', icon: '🌐' },
  { name: 'CSS', description: 'Stylesheet language for designing web pages.', icon: '🎨' },
  { name: 'JavaScript', description: 'Programming language for web development.', icon: '💻' },
  { name: 'React JS', description: 'Library for building user interfaces.', icon: '⚛️' },
  { name: 'React Router', description: 'Routing library for React applications.', icon: '🚦' },
  { name: 'Redux', description: 'State management library.', icon: '📦' },
  { name: 'Redux Toolkit', description: 'Toolset for efficient Redux development.', icon: '🛠️' },
  { name: 'Tailwind CSS', description: 'Utility-first CSS framework.', icon: '💨' },
  { name: 'Clean Code', description: 'Writing readable and maintainable code.', icon: '🧼' },
  { name: 'Single Responsibility Principle', description: 'Ensuring each module has one responsibility.', icon: '🔗' },
];

const Skills = () => {
  return (
    <div id='Skills' className="p-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Skills</h2>
      </div>
      <div className="flex flex-wrap justify-center">
        {skillsData.map((skill, index) => (
          <div key={index} className="max-w-xs m-4 p-6 border border-gray-3-00 rounded-lg shadow-md text-center transition-transform transform hover:scale-105">
            <div className="text-4xl mb-4">{skill.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{skill.name}</h3>
            <p className="text-lg text-gray-700">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
