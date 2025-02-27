import React from 'react';

interface Technology {
  name: string;
  colorClass: string;
}

interface ProjectItemProps {
  title: string;
  description: string;
  technologies: Technology[];
}

function ProjectItem({ title, description, technologies }: ProjectItemProps) {
  return (
    <div className="rounded-lg shadow-md overflow-hidden border border-white/5 bg-white/5 hover:border-white/10 transition-all duration-300 cursor-pointer">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-white/60 mb-4">{description}</p>
        <div className="flex space-x-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-2 py-1 ${tech.colorClass} rounded text-sm`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
