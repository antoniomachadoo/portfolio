import React from 'react';

interface HeaderProps {
  onShowProjects: () => void;
}

const Header: React.FC<HeaderProps> = ({ onShowProjects }) => {
  return (
    <div className="text-center space-y-6">
      {/* Avatar */}
      <div className="flex justify-center">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-lg">
          AM
        </div>
      </div>

      {/* Headline */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white mb-4">António Machado</h2>
        <h1 className="text-2xl md:text-3xl font-light text-gray-100 leading-relaxed max-w-3xl mx-auto">
          Engenheiro informático com foco em soluções digitais. Tenho experiência em desenvolvimento web, e-commerce, design visual e análise de dados centrada no utilizador.
        </h1>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <button 
          onClick={onShowProjects}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
        >
          Ver Projetos
        </button>
        <button className="px-8 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg font-medium transition-colors duration-200">
          Entrar em Contacto
        </button>
      </div>
    </div>
  );
};

export default Header;