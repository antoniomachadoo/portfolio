import React from 'react';
import { ExternalLink, Linkedin, Instagram } from 'lucide-react';

const Portfolio: React.FC = () => {
  const links = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/antonioamachado/', color: 'hover:text-blue-400' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white flex items-center">
        <ExternalLink className="mr-2" size={20} />
        Links
      </h2>
      
      <div className="flex flex-wrap gap-4">
        {links.map((link, index) => {
          const IconComponent = link.icon;
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 ${link.color} transition-colors duration-200`}
            >
              <IconComponent size={18} />
              <span>{link.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;