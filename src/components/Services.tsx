import React from 'react';
import { ShoppingCart, TrendingUp, Palette, Code, ArrowRight } from 'lucide-react';
import { services } from '../data/portfolio';

const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    const icons = {
      ShoppingCart: ShoppingCart,
      TrendingUp: TrendingUp,
      Palette: Palette,
      Code: Code
    };
    const IconComponent = icons[iconName as keyof typeof icons];
    return IconComponent ? <IconComponent size={24} /> : null;
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Serviços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções digitais completas para o crescimento do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-lg mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                <div className="text-teal-600 group-hover:text-white transition-colors duration-300">
                  {getIcon(service.icon)}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2 mb-6">
                <h4 className="font-semibold text-gray-900 text-sm">Resultados típicos:</h4>
                <ul className="space-y-1">
                  {service.results.map((result, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2"></div>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium group-hover:translate-x-1 transition-transform duration-200">
                Saber mais
                <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;