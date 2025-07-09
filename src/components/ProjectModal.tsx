import React, { useState } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  modalImage?: string;
  images?: string[];
}

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  if (!isOpen) return null;

  const getCategoryColor = (category: string) => {
    const colors = {
      'Web': 'bg-blue-600',
      'Mobile': 'bg-green-600',
      'IA': 'bg-purple-600',
      'Branding': 'bg-pink-600'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-600';
  };

  const hasCarousel = project.images && project.images.length > 1;
  const images = project.images || (project.modalImage ? [project.modalImage] : [project.image]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCarouselIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCarouselIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-75"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-gray-800 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-gray-700">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-gray-700 hover:bg-gray-600 rounded-full text-gray-300 hover:text-white"
        >
          <X size={20} />
        </button>

        <div className="p-6">
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${getCategoryColor(project.category)}`}>
                {project.category}
              </span>
            </div>
              <div className="aspect-square bg-gray-700 rounded-lg flex items-center justify-center mb-6 overflow-hidden relative">
                {hasCarousel ? (
                  <>
                    <img
                      src={images[carouselIndex]}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Setas */}
                    <button onClick={handlePrev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-60 hover:bg-opacity-90 text-white rounded-full p-2 z-10">
                      {'<'}
                    </button>
                    <button onClick={handleNext} className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-60 hover:bg-opacity-90 text-white rounded-full p-2 z-10">
                      {'>'}
                    </button>
                    {/* Indicadores */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                      {images.map((_, idx) => (
                        <span key={idx} className={`w-2 h-2 rounded-full ${carouselIndex === idx ? 'bg-blue-400' : 'bg-gray-400'} inline-block`}></span>
                      ))}
                    </div>
                  </>
                ) : (
                  <img
                    src={images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Descrição</h3>
            <p className="text-gray-300 leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Funcionalidades</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Tecnologias</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-700">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm"
              >
                <Github size={16} />
                <span>Ver Código</span>
              </a>
            )}
            
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;