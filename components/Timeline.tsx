
import React from 'react';
import { EDUCATION, EXPERIENCE } from '../constants';

const Timeline: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600 mb-4">RESUME</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Career Progress</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Education Column */}
        <div>
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-10 flex items-center transition-colors duration-300">
            <span className="w-8 h-[2px] bg-orange-600 mr-4"></span>
            Education
          </h4>
          <div className="space-y-12">
            {EDUCATION.map((item, index) => (
              <div key={item.id} className="relative pl-12">
                {/* Visual Line */}
                <div className="absolute left-[11px] top-0 bottom-[-48px] w-[2px] bg-gray-100 dark:bg-gray-800 transition-colors duration-300"></div>
                {/* Dot */}
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-white bg-orange-600 shadow-sm z-10"></div>
                
                <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-500 dark:border-gray-800 hover:shadow-md transition-all duration-300">
                  <span className="text-orange-600 dark:text-orange-500 font-bold text-sm tracking-widest uppercase block mb-3">Step #{index + 1}</span>
                  <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-300">{item.degree}</h5>
                  <p className="text-gray-500 dark:text-gray-400 font-medium mb-4 transition-colors duration-300">{item.institution} | {item.duration}</p>
                  <ul className="space-y-2">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="text-gray-600 dark:text-gray-300 flex items-start transition-colors duration-300">
                        <span className="text-orange-600 mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Column */}
        <div>
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-10 flex items-center transition-colors duration-300">
            <span className="w-8 h-[2px] bg-orange-600 mr-4"></span>
            Experience
          </h4>
          <div className="space-y-12">
            {EXPERIENCE.map((item, index) => (
              <div key={item.id} className="relative pl-12">
                <div className="absolute left-[11px] top-0 bottom-[-48px] w-[2px] bg-gray-100 dark:bg-gray-800 transition-colors duration-300"></div>
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 bg-black dark:bg-orange-600 shadow-sm z-10 transition-colors duration-300"></div>
                
                <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-500 dark:border-gray-800 hover:shadow-md transition-all duration-300">
                  <span className="text-gray-400 dark:text-gray-500 font-bold text-sm tracking-widest uppercase block mb-3">Phase #{index + 1}</span>
                  <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-300">{item.role}</h5>
                  <p className="text-gray-500 dark:text-gray-400 font-medium mb-4 transition-colors duration-300">{item.company} | {item.duration}</p>
                  <ul className="space-y-2">
                    {item.description.map((detail, dIdx) => (
                      <li key={dIdx} className="text-gray-600 dark:text-gray-300 flex items-start transition-colors duration-300">
                        <span className="text-orange-600 mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
