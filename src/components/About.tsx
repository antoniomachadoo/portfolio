import React from 'react';
import { GraduationCap, Globe, Award, Users } from 'lucide-react';
import { skills } from '../data/portfolio';

const About: React.FC = () => {
  const skillCategories = {
    design: { name: 'Design', color: 'bg-teal-600' },
    development: { name: 'Development', color: 'bg-blue-600' },
    strategy: { name: 'Strategy', color: 'bg-purple-600' },
    tools: { name: 'Tools', color: 'bg-green-600' }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Mim</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combino criatividade com expertise técnica para criar soluções digitais que fazem a diferença
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-gray-600 leading-relaxed">
                Com mais de 6 anos de experiência em design digital, especializei-me em criar experiências 
                que conectam marcas aos seus utilizadores. A minha abordagem combina pesquisa de utilizador, 
                design centrado no humano e as mais recentes tecnologias web.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Formação</h3>
                  <p className="text-sm text-gray-600">Eng. Informática (UTAD)</p>
                  <p className="text-sm text-gray-600">Erasmus (CVUT, Praga)</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Idiomas</h3>
                  <p className="text-sm text-gray-600">Português (Nativo)</p>
                  <p className="text-sm text-gray-600">Inglês (Fluente)</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Certificações</h3>
                  <p className="text-sm text-gray-600">Google Analytics IQ</p>
                  <p className="text-sm text-gray-600">Adobe Certified Expert</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Colaborações</h3>
                  <p className="text-sm text-gray-600">Equipas Internacionais</p>
                  <p className="text-sm text-gray-600">Projetos Remotos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Skills & Expertise</h3>
            
            <div className="space-y-6">
              {Object.entries(skillCategories).map(([category, config]) => (
                <div key={category}>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">{config.name}</h4>
                  <div className="space-y-3">
                    {skills.filter(skill => skill.category === category).map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all duration-1000 ${config.color}`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;