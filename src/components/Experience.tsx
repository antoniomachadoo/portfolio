import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Freelancer — Design & Estratégia Digital',
      period: '2018 – presente',
      description: [
        'Criação de identidades visuais e soluções digitais para clientes em vários setores',
        'Projetos de branding, e-commerce e UI/UX com foco em resultados e conversão',
        'Especialização no crescimento de marcas através de estratégias digitais integradas'
      ]
    },
    {
      title: 'HypeGrade — Fundador',
      period: '2021 – presente',
      description: [
        'Marca de streetwear especializada na venda de sapatilhas exclusivas, com mais de 500 vendas em Portugal e no estrangeiro',
        'Responsável pela gestão de produto, definição de preços, sourcing e experiência do cliente',
        'Organização de eventos pop-up em colaboração com negócios locais em Vila Real, reforçando a notoriedade da marca e a ligação à comunidade'
      ]
    },
    {
      title: 'Ultrashirts — Fundador',
      period: 'Mar 2024 – presente',
      description: [
        'Lançamento e escalamento de uma loja online internacional via Shopify, com vendas para Europa, EUA, América Latina, Austrália e Arábia Saudita',
        'Planeamento e otimização de fluxos de experiência do utilizador (UX) para melhorar taxas de conversão'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white flex items-center">
        <Briefcase className="mr-2" size={20} />
        Experiência Profissional
      </h2>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
              <h3 className="text-lg font-medium text-white">{exp.title}</h3>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={14} className="mr-1" />
                {exp.period}
              </div>
            </div>
            
            <ul className="space-y-2">
              {exp.description.map((item, idx) => (
                <li key={idx} className="text-gray-300 flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;