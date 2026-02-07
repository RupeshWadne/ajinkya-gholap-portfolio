
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
        <div className="max-w-2xl">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-500 mb-4">PORTFOLIO</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Selected Projects & Labs</h2>
        </div>
        <a href="#" className="text-gray-900 dark:text-gray-200 font-bold border-b-2 border-orange-600 pb-1 hover:text-orange-600 dark:hover:text-orange-500 transition-colors">
          View all projects
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECTS.map((project, index) => (
          <div key={index} className="group flex flex-col">
            <div className="relative overflow-hidden rounded-[2rem] bg-gray-100 dark:bg-gray-800 aspect-[4/3] mb-6 transition-colors duration-300">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                <button className="p-4 bg-white rounded-full text-black hover:bg-orange-600 hover:text-white transition-colors">
                  <Github size={20} />
                </button>
                <button className="p-4 bg-white rounded-full text-black hover:bg-orange-600 hover:text-white transition-colors">
                  <ExternalLink size={20} />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-orange-600 dark:text-orange-500 text-xs font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2 font-light leading-relaxed transition-colors duration-300">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
