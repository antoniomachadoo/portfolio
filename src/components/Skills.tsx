import React from 'react';
import { Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: 'Tecnologia',
      skills: ['C/C++', 'JavaScript', 'HTML/CSS', 'React', 'Vue'],
      color: 'text-blue-400'
    },
    {
      category: 'Design',
      skills: ['Figma', 'Photoshop', 'Corel Draw'],
      color: 'text-pink-400'
    },
    {
      category: 'Plataformas',
      skills: ['Shopify', 'Wordpress'],
      color: 'text-green-400'
    },
    {
      category: 'Metodologias',
      skills: ['Scrum', 'Git'],
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white flex items-center">
        <Wrench className="mr-2" size={20} />
        Ferramentas e Tecnologias
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <h3 className={`font-medium mb-3 ${category.color}`}>
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;