
import React from 'react';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-500 mb-4">RECOGNITION</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Certifications</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CERTIFICATIONS.map((cert, index) => (
          <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-500 dark:border-gray-800 hover:shadow-xl transition-all duration-300 shadow-[5px_5px_0px_0px_rgba(17,24,39)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,1)]">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
              {cert.icon}
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{cert.title}</h4>
            <p className="text-orange-600 dark:text-orange-500 font-semibold text-sm mb-1">{cert.issuer}</p>
            <p className="text-gray-400 dark:text-gray-500 text-sm font-medium tracking-tight">{cert.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
