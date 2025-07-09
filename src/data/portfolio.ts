import { Project, Service, Experience, Skill } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform Redesign',
    category: 'ecommerce',
    description: 'Complete redesign of a major e-commerce platform, improving conversion rates by 40%',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: ['40% increase in conversions', '25% reduction in bounce rate', '60% improvement in mobile UX'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js']
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    category: 'mobile',
    description: 'User-centered design for a fintech mobile application with focus on security and usability',
    image: 'https://images.pexels.com/photos/893896/pexels-photo-893896.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: ['4.8 app store rating', '30% increase in user engagement', '50% reduction in support tickets'],
    technologies: ['Figma', 'React Native', 'Firebase', 'Analytics']
  },
  {
    id: '3',
    title: 'SaaS Dashboard Interface',
    category: 'ux-ui',
    description: 'Intuitive dashboard design for a B2B SaaS platform with complex data visualization',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: ['35% faster task completion', '90% user satisfaction', '20% increase in feature adoption'],
    technologies: ['Vue.js', 'D3.js', 'SCSS', 'REST API']
  },
  {
    id: '4',
    title: 'Digital Strategy Implementation',
    category: 'strategy',
    description: 'Complete digital transformation strategy for a traditional retail company',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: ['300% increase in online sales', '150% growth in digital presence', '80% improvement in customer retention'],
    technologies: ['Google Analytics', 'SEO', 'Content Strategy', 'Social Media']
  },
  {
    id: '5',
    title: 'Healthcare Platform UX',
    category: 'ux-ui',
    description: 'Patient-centered design for a telemedicine platform with accessibility focus',
    image: 'https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: ['99.9% accessibility compliance', '40% increase in patient satisfaction', '25% reduction in consultation time'],
    technologies: ['React', 'WCAG 2.1', 'TypeScript', 'WebRTC']
  },
  {
    id: '6',
    title: 'Startup MVP Development',
    category: 'strategy',
    description: 'End-to-end product development from concept to market launch',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: ['Successfully launched in 3 months', '1000+ early adopters', '€50K seed funding secured'],
    technologies: ['Lean UX', 'MVP Strategy', 'User Testing', 'Agile Development']
  }
];

export const services: Service[] = [
  {
    id: '1',
    title: 'E-commerce & Otimização',
    icon: 'ShoppingCart',
    description: 'Desenvolvimento e otimização de plataformas de e-commerce com foco em conversão e experiência do utilizador.',
    results: ['Aumento médio de 35% nas conversões', 'Redução de 40% na taxa de abandono', 'Melhoria de 50% no mobile UX']
  },
  {
    id: '2',
    title: 'Estratégia Digital & Analytics',
    icon: 'TrendingUp',
    description: 'Definição de estratégias digitais baseadas em dados e implementação de sistemas de análise avançada.',
    results: ['ROI médio de 250%', 'Crescimento de 200% no tráfego orgânico', 'Redução de 60% no CAC']
  },
  {
    id: '3',
    title: 'UI/UX Design',
    icon: 'Palette',
    description: 'Design centrado no utilizador com foco em usabilidade, acessibilidade e experiência visual moderna.',
    results: ['Satisfação do utilizador >90%', 'Redução de 45% no tempo de conclusão de tarefas', 'Aumento de 30% na retenção']
  },
  {
    id: '4',
    title: 'Desenvolvimento Web',
    icon: 'Code',
    description: 'Desenvolvimento de aplicações web modernas, responsivas e otimizadas para performance.',
    results: ['PageSpeed Score >90', 'Tempo de carregamento <3s', '99.9% uptime garantido']
  }
];

export const experience: Experience[] = [
  {
    id: '1',
    title: 'Senior Digital Design Specialist',
    company: 'Tech Solutions International',
    period: '2021 - Presente',
    description: 'Liderança de projetos de transformação digital para clientes internacionais.',
    achievements: [
      'Gestão de portfólio de €2M+ em projetos digitais',
      'Implementação de processos que reduziram o time-to-market em 40%',
      'Mentoria de equipa de 8 designers e developers'
    ]
  },
  {
    id: '2',
    title: 'UX/UI Designer',
    company: 'Digital Agency Porto',
    period: '2019 - 2021',
    description: 'Design e desenvolvimento de interfaces para startups e PMEs.',
    achievements: [
      'Criação de +50 interfaces para diferentes sectores',
      'Aumento médio de 60% na satisfação do utilizador',
      'Redução de 35% no tempo de desenvolvimento'
    ]
  },
  {
    id: '3',
    title: 'Frontend Developer',
    company: 'Startup Incubator',
    period: '2018 - 2019',
    description: 'Desenvolvimento frontend para múltiplas startups em fase inicial.',
    achievements: [
      'Desenvolvimento de 10+ MVPs bem-sucedidos',
      'Contribuição para €500K em funding secured',
      'Implementação de best practices de desenvolvimento'
    ]
  }
];

export const skills: Skill[] = [
  { name: 'UI/UX Design', level: 95, category: 'design' },
  { name: 'React/TypeScript', level: 90, category: 'development' },
  { name: 'Figma/Adobe XD', level: 95, category: 'tools' },
  { name: 'Digital Strategy', level: 85, category: 'strategy' },
  { name: 'Node.js', level: 80, category: 'development' },
  { name: 'Google Analytics', level: 90, category: 'tools' },
  { name: 'SEO/SEM', level: 85, category: 'strategy' },
  { name: 'Tailwind CSS', level: 95, category: 'development' }
];