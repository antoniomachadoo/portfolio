import React from 'react';
import { Languages as LanguagesIcon } from 'lucide-react';

const Languages: React.FC = () => {
  const languages = [
    { flag: '🇵🇹', name: 'Português', level: 'Nativo' },
    { flag: '🇬🇧', name: 'Inglês', level: 'Fluente' }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white flex items-center">
        <LanguagesIcon className="mr-2" size={20} />
        Idiomas
      </h2>
      
      <div className="flex flex-wrap gap-4">
        {languages.map((lang, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700 flex items-center space-x-3">
            <span className="text-2xl">{lang.flag}</span>
            <div>
              <p className="text-white font-medium">{lang.name}</p>
              <p className="text-gray-400 text-sm">{lang.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;