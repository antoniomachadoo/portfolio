import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Licenciatura em Engenharia Informática',
      institution: 'UTAD – Universidade de Trás-os-Montes e Alto Douro',
      period: '2020 – 2024'
    },
    {
      degree: 'Erasmus em Computer Science',
      institution: 'CVÜT – Praga',
      period: 'Set 2023 – Fev 2024'
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white flex items-center">
        <GraduationCap className="mr-2" size={20} />
        Formação Académica
      </h2>
      
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <h3 className="font-medium text-white mb-1">{edu.degree}</h3>
            <p className="text-gray-300 text-sm mb-1">{edu.institution}</p>
            <p className="text-gray-400 text-sm">{edu.period}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;