import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Filter } from 'lucide-react';
import ProjectModal from './ProjectModal';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  modalImage: string;
  description: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  images: string[];
}

interface ProjectsGalleryProps {
  onBack: () => void;
}

const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dados dos projetos (20 projetos de exemplo)
  const projects: Project[] = [
    { 
      id: 1,
      title: 'Os Primos – Identidade Visual', 
      category: 'Branding', 
      image: '/osprimos1.jpg', 
      modalImage: '/osprimos1.jpg',
      description: 'Identidade visual urbana e irreverente para dupla de criadores de conteúdo',
      fullDescription: 'Criação da identidade visual para a marca Os Primos, dupla de criadores de conteúdo com forte presença digital e comunidade ativa. O projeto teve como objetivo transmitir uma imagem urbana, irreverente e próxima da comunidade, com aplicações práticas em vestuário e redes sociais. "Os Primos" são uma dupla de criadores de conteúdo portugueses com mais de 190 mil seguidores no Instagram e milhares de membros pagos no Patreon.',
      features: ['Logotipo original com ilustração personalizada', 'Aplicação da marca em hoodie (streetwear)', 'Mockup digital para mobile e redes sociais', 'Alinhamento com a linguagem visual da comunidade', 'Ficheiros finais preparados para impressão e digital'],
      technologies: ['Adobe Illustrator', 'Photoshop', 'Mockups de produto'],
      liveUrl: 'https://www.instagram.com/osprimosboy/',
      images: [
        '/osprimos1.jpg',
        '/osprimos2.jpg',
        '/osprimos3.jpg',
      ],
    },
    { 
      id: 2,
      title: 'UltraShirts – E-commerce',
      category: 'Web',
      image: '/ultra.jpg',
      modalImage: '/ultra2.jpg',
      description: 'Loja de e-commerce desenvolvida em Shopify para a marca UltraShirts.',
      fullDescription: 'Desenvolvimento de uma loja online na plataforma Shopify para a marca UltraShirts. A loja foi concebida para facilitar a navegação e maximizar a conversão de vendas, com especial atenção à organização dos produtos, campanhas promocionais e responsividade em dispositivos móveis.',
      features: [
        'Homepage com destaques promocionais',
        'Catálogo de produtos com variantes',
        'Integração com sistema de pagamentos e envios',
        'Design responsivo e otimizado para mobile',
        'Gestão fácil de campanhas e inventário'
      ],
      technologies: [
        'Shopify',
        'Liquid',
        'HTML/CSS'
      ],
      liveUrl: 'https://ultrashirts.shop',
      images: ['/ultra.jpg', '/ultra2.jpg']
    },
    { 
      id: 3,
      title: 'Teatro Vila Real – App Fictícia',
      category: 'Mobile',
      image: '/teatro.jpg', // substitui pelo caminho correto da imagem de capa
      modalImage: '/teatro2.jpg', // substitui pelo detalhe/modal, se houver
      description: 'Aplicação fictícia multiplataforma para eventos do Teatro de Vila Real.',
      fullDescription: 'Aplicação fictícia desenvolvida em React Native com Expo para representar uma solução moderna e intuitiva para o Teatro de Vila Real. A app permite explorar eventos culturais, guardar favoritos, aplicar filtros por categoria e aceder a bilhetes através de integrações externas como a Ticketline. O design foi pensado com foco na experiência do utilizador, com uma navegação fluida e uma estética moderna com degradês vermelhos e tipografia personalizada.',
      features: [
        'Navegação intuitiva por tabs (Início, Explorar, Favoritos)',
        'Sistema de favoritos persistente',
        'Filtros por categoria de evento',
        'Pesquisa em tempo real',
        'Design responsivo com degradês modernos',
        'Integração com Ticketline para compra de bilhetes'
      ],
      technologies: [
        'React Native',
      ],
      liveUrl: undefined,

      images: [
        '/teatro.jpg',
        '/teatro2.jpg',
        '/teatro3.jpg',
      ],
    },
    { 
      id: 4, 
      title: 'AI Dashboard', 
      category: 'IA', 
      image: '/project3.jpg', 
      modalImage: '/project3.jpg',
      description: 'Dashboard com IA integrada',
      fullDescription: 'Dashboard avançado com integração de inteligência artificial para análise de dados em tempo real e geração de insights automáticos.',
      features: ['Análise preditiva', 'Dashboard interativo', 'API de machine learning', 'Visualizações dinâmicas', 'Relatórios automáticos'],
      technologies: ['Vue', 'Python', 'TensorFlow', 'D3.js'],
      githubUrl: 'https://github.com/exemplo',
      images: ['/project3.jpg'],
    },
    { 
      id: 5, 
      title: 'Corporate Website', 
      category: 'Web', 
      image: '/project4.jpg', 
      modalImage: '/project4.jpg',
      description: 'Website corporativo elegante',
      fullDescription: 'Website corporativo moderno com design elegante e funcionalidades avançadas para apresentação de serviços e captação de leads.',
      features: ['Design moderno', 'SEO otimizado', 'Formulários de contacto', 'Design responsive', 'Performance otimizada'],
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://exemplo.com',
      images: ['/project4.jpg'],
    },
    { 
      id: 6, 
      title: 'Food Delivery App', 
      category: 'Mobile', 
      image: '/project5.jpg', 
      modalImage: '/project5.jpg',
      description: 'App de entrega de comida',
      fullDescription: 'Aplicação móvel para entrega de comida com sistema de pedidos em tempo real, tracking de entrega e integração com pagamentos.',
      features: ['Pedidos em tempo real', 'Tracking de entrega', 'Sistema de pagamentos', 'Design responsive', 'Avaliações e reviews'],
      technologies: ['React Native', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/exemplo',
      liveUrl: 'https://exemplo.com',
      images: ['/project5.jpg'],
    },
    { 
      id: 7,
      title: 'Associação 31 – Cartazes',
      category: 'Branding',
      image: '/infantario.png',
      modalImage: '/infantario2.jpg',
      description: 'Design de cartazes informativos para eventos no Infantário de Vila Real.',
      fullDescription: 'Criação de cartazes promocionais para sessões informativas organizadas pela Associação 31 – Infantário e Lar de Vila Real. O objetivo foi comunicar de forma clara e apelativa temas importantes ligados ao bem-estar infantil, com uma estética suave, empática e profissional, alinhada com o público-alvo (pais e educadores).',
      features: [
        'Design visual centrado na comunicação com pais e educadores',
        'Uso de imagem realista e tipografia acessível',
        'Coerência com a identidade da Associação 31',
        'Exportação para formatos digitais e impressão'
      ],
      technologies: [
        'Corel Draw'
      ],
      liveUrl: undefined,
      images: ['/infantario.png', '/infantario2.jpg'],
    },
    { 
      id: 8, 
      title: 'SaaS Platform', 
      category: 'Web', 
      image: '/project7.jpg', 
      modalImage: '/project7.jpg',
      description: 'Plataforma SaaS B2B',
      fullDescription: 'Plataforma SaaS completa para empresas com dashboard administrativo, gestão de utilizadores e sistema de subscrições.',
      features: ['Dashboard administrativo', 'Gestão multi-utilizador', 'Sistema de subscrições', 'API REST', 'Relatórios avançados'],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubUrl: 'https://github.com/exemplo',
      liveUrl: 'https://exemplo.com',
      images: ['/project7.jpg'],
    },
    { 
      id: 9, 
      title: 'Fitness App', 
      category: 'Mobile', 
      image: '/project8.jpg', 
      modalImage: '/project8.jpg',
      description: 'App de fitness e saúde',
      fullDescription: 'Aplicação móvel de fitness com tracking de exercícios, planos de treino personalizados e integração com dispositivos wearables.',
      features: ['Tracking de exercícios', 'Planos personalizados', 'Integração wearables', 'Estatísticas detalhadas', 'Comunidade social'],
      technologies: ['React Native', 'Firebase', 'HealthKit'],
      liveUrl: 'https://exemplo.com',
      images: ['/project8.jpg'],
    },
    { 
      id: 10, 
      title: 'Chatbot Interface', 
      category: 'IA', 
      image: '/project9.jpg', 
      modalImage: '/project9.jpg',
      description: 'Interface de chatbot avançado',
      fullDescription: 'Interface moderna para chatbot com processamento de linguagem natural e integração com múltiplas plataformas de messaging.',
      features: ['Processamento NLP', 'Interface conversacional', 'Multi-plataforma', 'Aprendizagem automática', 'Analytics de conversas'],
      technologies: ['React', 'Python', 'TensorFlow', 'WebSocket'],
      githubUrl: 'https://github.com/exemplo',
      images: ['/project9.jpg'],
    },
    { 
      id: 11, 
      title: 'Portfolio Website', 
      category: 'Web', 
      image: '/project10.jpg', 
      modalImage: '/project10.jpg',
      description: 'Website portfólio criativo',
      fullDescription: 'Website portfólio criativo com animações avançadas, galeria interativa e sistema de contacto integrado.',
      features: ['Animações avançadas', 'Galeria interativa', 'Design responsivo', 'SEO otimizado', 'Formulário de contacto'],
      technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
      liveUrl: 'https://exemplo.com',
      images: ['/project10.jpg'],
    },
    { 
      id: 12, 
      title: 'Travel App', 
      category: 'Mobile', 
      image: '/project11.jpg', 
      modalImage: '/project11.jpg',
      description: 'App de viagens e turismo',
      fullDescription: 'Aplicação móvel de viagens com reservas de hotéis, voos e atividades, incluindo guias offline e recomendações personalizadas.',
      features: ['Reservas integradas', 'Guias offline', 'Recomendações IA', 'Mapas interativos', 'Planeamento de viagens'],
      technologies: ['React Native', 'Node.js', 'Google Maps API'],
      githubUrl: 'https://github.com/exemplo',
      liveUrl: 'https://exemplo.com',
      images: ['/project11.jpg'],
    },
    { 
      id: 13, 
      title: 'Logo Design', 
      category: 'Branding', 
      image: '/project12.jpg', 
      modalImage: '/project12.jpg',
      description: 'Design de logótipo único',
      fullDescription: 'Criação de logótipo único e memorável com conceito forte, incluindo variações e aplicações em diferentes contextos.',
      features: ['Conceito único', 'Múltiplas variações', 'Aplicações diversas', 'Vetorial escalável', 'Manual de uso'],
      technologies: ['Adobe Illustrator', 'Photoshop'],
      liveUrl: 'https://exemplo.com',
      images: ['/project12.jpg'],
    },
    { 
      id: 14, 
      title: 'Analytics Dashboard', 
      category: 'Web', 
      image: '/project13.jpg', 
      modalImage: '/project13.jpg',
      description: 'Dashboard de analytics',
      fullDescription: 'Dashboard avançado de analytics com visualizações interativas, relatórios customizáveis e integração com múltiplas fontes de dados.',
      features: ['Visualizações interativas', 'Relatórios customizáveis', 'Múltiplas fontes de dados', 'Exportação de dados', 'Alertas automáticos'],
      technologies: ['Vue', 'D3.js', 'Node.js', 'PostgreSQL'],
      githubUrl: 'https://github.com/exemplo',
      images: ['/project13.jpg'],
    },
    { 
      id: 15, 
      title: 'Social Media App', 
      category: 'Mobile', 
      image: '/project14.jpg', 
      modalImage: '/project14.jpg',
      description: 'Rede social inovadora',
      fullDescription: 'Aplicação de rede social com funcionalidades inovadoras, stories, chat em tempo real e algoritmo de feed personalizado.',
      features: ['Feed personalizado', 'Stories interativas', 'Chat em tempo real', 'Notificações push', 'Algoritmo de recomendação'],
      technologies: ['React Native', 'Node.js', 'Socket.io', 'Redis'],
      liveUrl: 'https://exemplo.com',
      images: ['/project14.jpg'],
    },
    { 
      id: 16, 
      title: 'ML Prediction Tool', 
      category: 'IA', 
      image: '/project15.jpg', 
      modalImage: '/project15.jpg',
      description: 'Ferramenta de predição ML',
      fullDescription: 'Ferramenta de machine learning para predições avançadas com interface intuitiva e modelos de IA treinados customizados.',
      features: ['Modelos ML customizados', 'Predições em tempo real', 'Interface intuitiva', 'Visualização de dados', 'API de predição'],
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      githubUrl: 'https://github.com/exemplo',
      images: ['/project15.jpg'],
    },
    { 
      id: 17, 
      title: 'E-learning Platform', 
      category: 'Web', 
      image: '/project16.jpg', 
      modalImage: '/project16.jpg',
      description: 'Plataforma de ensino online',
      fullDescription: 'Plataforma completa de e-learning com cursos interativos, sistema de avaliação, certificados e tracking de progresso.',
      features: ['Cursos interativos', 'Sistema de avaliação', 'Certificados digitais', 'Tracking de progresso', 'Fóruns de discussão'],
      technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
      githubUrl: 'https://github.com/exemplo',
      images: ['/project16.jpg'],
    },
    { 
      id: 18, 
      title: 'Shopping App', 
      category: 'Mobile', 
      image: '/project17.jpg', 
      modalImage: '/project17.jpg',
      description: 'App de compras online',
      fullDescription: 'Aplicação móvel de compras com catálogo interativo, wishlist, comparação de produtos e checkout simplificado.',
      features: ['Catálogo interativo', 'Wishlist personalizada', 'Comparação de produtos', 'Checkout simplificado', 'Notificações de ofertas'],
      technologies: ['React Native', 'Shopify API', 'Stripe'],
      liveUrl: 'https://exemplo.com',
      images: ['/project17.jpg'],
    },
    { 
      id: 19, 
      title: 'Visual Identity', 
      category: 'Branding', 
      image: '/project18.jpg', 
      modalImage: '/project18.jpg',
      description: 'Identidade visual moderna',
      fullDescription: 'Identidade visual moderna e coesa para startup tecnológica, incluindo branding digital e aplicações em diversos touchpoints.',
      features: ['Branding digital', 'Aplicações diversas', 'Coerência visual', 'Adaptabilidade', 'Guidelines completas'],
      technologies: ['Figma', 'Adobe Creative Suite'],
      liveUrl: 'https://exemplo.com',
      images: ['/project18.jpg'],
    },
    { 
      id: 20, 
      title: 'CRM System', 
      category: 'Web', 
      image: '/project19.jpg', 
      modalImage: '/project19.jpg',
      description: 'Sistema CRM completo',
      fullDescription: 'Sistema CRM completo para gestão de clientes, vendas e marketing com automações, relatórios e integrações com ferramentas externas.',
      features: ['Gestão de clientes', 'Pipeline de vendas', 'Automações de marketing', 'Relatórios avançados', 'Integrações externas'],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
      githubUrl: 'https://github.com/exemplo',
      liveUrl: 'https://exemplo.com',
      images: ['/project19.jpg'],
    },
    { 
      id: 21, 
      title: 'Voice Assistant', 
      category: 'IA', 
      image: '/project20.jpg', 
      modalImage: '/project20.jpg',
      description: 'Assistente de voz inteligente',
      fullDescription: 'Assistente de voz inteligente com processamento de linguagem natural, integração com smart home e comandos personalizáveis.',
      features: ['Reconhecimento de voz', 'Processamento NLP', 'Integração smart home', 'Comandos personalizáveis', 'Aprendizagem contínua'],
      technologies: ['Python', 'TensorFlow', 'Speech Recognition', 'IoT'],
      githubUrl: 'https://github.com/exemplo',
      images: ['/project20.jpg'],
    }
  ];

  const categories = ['Todos', 'Web', 'Mobile', 'IA', 'Branding'];

  const filteredProjects = selectedCategory === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Web': 'bg-blue-600',
      'Mobile': 'bg-green-600',
      'IA': 'bg-purple-600',
      'Branding': 'bg-pink-600'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-600';
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              <span>Voltar</span>
            </button>
            
            <h1 className="text-3xl font-bold text-white">Projetos</h1>
            
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Image Placeholder */}
                <div className="aspect-square bg-gray-700 flex items-center justify-center relative group">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-gray-500 text-center">
                      <div className="w-16 h-16 mx-auto mb-2 bg-gray-600 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🖼️</span>
                      </div>
                      <p className="text-sm">Imagem do Projeto</p>
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-white mb-2 text-sm">{project.title}</h3>
                  <p className="text-gray-400 text-xs mb-4 line-clamp-2">{project.description}</p>
                  
                  <button 
                    onClick={() => handleProjectClick(project)}
                    className="w-full flex items-center justify-center space-x-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 text-sm"
                  >
                    <ExternalLink size={14} />
                    <span>Ver Projeto</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Results Counter */}
          <div className="text-center mt-8">
            <p className="text-gray-400">
              A mostrar {filteredProjects.length} de {projects.length} projetos
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default ProjectsGallery;