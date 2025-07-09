import React from 'react';
import { Palette, BarChart3, Globe } from 'lucide-react';

const Interests: React.FC = () => {
  const interests = [
    { icon: BarChart3, label: 'Web/ Software', color: 'bg-green-600' },
    { icon: Palette, label: 'Design', color: 'bg-pink-600' },
    { icon: Globe, label: 'Negócios Digitais', color: 'bg-blue-600' }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {interests.map((interest, index) => {
        const IconComponent = interest.icon;
        return (
          <div
            key={index}
            className={`flex items-center space-x-2 px-4 py-2 ${interest.color} rounded-full text-white font-medium`}
          >
            <IconComponent size={18} />
            <span>{interest.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Interests;