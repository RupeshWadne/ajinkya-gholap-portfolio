
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto mb-16">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-500 mb-4">EXPERTISE</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">Tailored Tech, Impactful Engineering</h2>
        <p className="text-xl text-gray-500 dark:text-gray-400 font-light transition-colors duration-300">Delivering innovative, back-end driven solutions that power the modern web ecosystem.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map((skill, index) => (
          <div 
            key={index} 
            className="group bg-white dark:bg-gray-900 p-10 rounded-[2.5rem] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-500 dark:border-gray-800 hover:border-orange-100 dark:hover:border-orange-900/50 shadow-[5px_5px_0px_0px_rgba(17,24,39)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,1)]"
          >
            <div className="relative w-20 h-20 mx-auto mb-8">
              <div className="absolute inset-0 bg-orange-50 dark:bg-orange-900/20 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform"></div>
              <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-3xl border border-orange-300 dark:border-orange-500/30 flex items-center justify-center text-orange-600 dark:text-orange-500 shadow-sm transition-colors duration-300">
                {React.cloneElement(skill.icon as React.ReactElement, { size: 32 })}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{skill.name}</h3>
            <p className="text-gray-400 dark:text-gray-500 uppercase text-xs font-bold tracking-widest transition-colors duration-300">{skill.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
