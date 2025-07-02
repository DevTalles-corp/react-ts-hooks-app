export interface User {
  id: number;
  name: string;
  title: string;
  tags: string[];
  contact: Contact;
  about: string;
  experience: Experience[];
  stats: Stats;
  skills: string[];
}

interface Contact {
  email: string;
  phone: string;
  location: string;
  website: string;
  joined: string;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface Stats {
  projects: number;
  connections: number;
  reviews: number;
}

export const users: User[] = [
  {
    id: 1001,
    name: 'Ana García',
    title: 'Desarrolladora Frontend Principal',
    tags: ['React', 'TypeScript', 'Next.js'],
    contact: {
      email: 'ana.garcia@email.com',
      phone: '+1 (555) 987-6543',
      location: 'Nueva York, NY',
      website: 'anagarcia.dev',
      joined: 'Abril 2018',
    },
    about:
      'Desarrolladora frontend creativa con 6 años de experiencia creando interfaces web modernas. Entusiasta de los sistemas de diseño y optimización de rendimiento.',
    experience: [
      {
        role: 'Desarrolladora Frontend Principal',
        company: 'Laboratorios Creativos',
        period: '2020 - Presente',
        description:
          'Desarrollé bibliotecas de componentes y lideré rediseños de arquitectura frontend.',
      },
      {
        role: 'Desarrolladora Frontend',
        company: 'Webify',
        period: '2017 - 2020',
        description:
          'Construí sitios web responsivos y colaboré con equipos de UX.',
      },
    ],
    stats: {
      projects: 30,
      connections: 210,
      reviews: 4.8,
    },
    skills: ['JavaScript', 'React', 'TypeScript', 'Next.js', 'CSS', 'HTML'],
  },
  {
    id: 1002,
    name: 'Miguel Rodríguez',
    title: 'Ingeniero Backend Senior',
    tags: ['Node.js', 'Python', 'AWS'],
    contact: {
      email: 'miguel.rodriguez@email.com',
      phone: '+1 (555) 234-5678',
      location: 'Seattle, WA',
      website: 'mrodriguez.dev',
      joined: 'Enero 2017',
    },
    about:
      'Ingeniero backend experimentado especializado en sistemas distribuidos y desarrollo de APIs.',
    experience: [
      {
        role: 'Ingeniero Backend Senior',
        company: 'ScaleUp',
        period: '2019 - Presente',
        description:
          'Lideré la adopción de microservicios y mejoré la escalabilidad del sistema.',
      },
      {
        role: 'Desarrollador Backend',
        company: 'CloudTech',
        period: '2016 - 2019',
        description:
          'Implementé APIs RESTful y gestioné infraestructura en la nube.',
      },
    ],
    stats: {
      projects: 18,
      connections: 145,
      reviews: 4.7,
    },
    skills: ['Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL'],
  },
  {
    id: 1003,
    name: 'Sofía Martínez',
    title: 'Desarrolladora Full Stack',
    tags: ['Vue.js', 'Node.js', 'TypeScript'],
    contact: {
      email: 'sofia.martinez@email.com',
      phone: '+1 (555) 456-7890',
      location: 'Austin, TX',
      website: 'sofia.dev',
      joined: 'Junio 2020',
    },
    about:
      'Desarrolladora full stack apasionada por el código limpio y soluciones escalables.',
    experience: [
      {
        role: 'Desarrolladora Full Stack',
        company: 'TechForge',
        period: '2020 - Presente',
        description:
          'Desarrollé soluciones integrales usando Vue.js y Node.js.',
      },
      {
        role: 'Desarrolladora Frontend',
        company: 'Aplicaciones Creativas',
        period: '2018 - 2020',
        description: 'Construí aplicaciones web interactivas.',
      },
    ],
    stats: {
      projects: 22,
      connections: 180,
      reviews: 4.9,
    },
    skills: ['Vue.js', 'Node.js', 'TypeScript', 'JavaScript', 'Docker'],
  },
  {
    id: 1004,
    name: 'David López',
    title: 'Ingeniero DevOps',
    tags: ['AWS', 'Docker', 'Kubernetes'],
    contact: {
      email: 'david.lopez@email.com',
      phone: '+1 (555) 321-6549',
      location: 'Chicago, IL',
      website: 'davidlopez.dev',
      joined: 'Marzo 2016',
    },
    about:
      'Ingeniero DevOps con enfoque en automatización e infraestructura en la nube.',
    experience: [
      {
        role: 'Ingeniero DevOps',
        company: 'Soluciones CloudOps',
        period: '2018 - Presente',
        description:
          'Implementé pipelines CI/CD y gestioné clusters de Kubernetes.',
      },
      {
        role: 'Ingeniero de Sistemas',
        company: 'TechNova',
        period: '2015 - 2018',
        description:
          'Mantuve entornos en la nube y flujos de trabajo de despliegue.',
      },
    ],
    stats: {
      projects: 15,
      connections: 132,
      reviews: 4.6,
    },
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Linux'],
  },
  {
    id: 1005,
    name: 'Emma Fernández',
    title: 'Ingeniera de Software',
    tags: ['React', 'Node.js', 'GraphQL'],
    contact: {
      email: 'emma.fernandez@email.com',
      phone: '+1 (555) 987-1234',
      location: 'Boston, MA',
      website: 'emmafernandez.dev',
      joined: 'Febrero 2019',
    },
    about:
      'Ingeniera de software apasionada por construir aplicaciones web performantes y accesibles.',
    experience: [
      {
        role: 'Ingeniera de Software',
        company: 'BrightCode',
        period: '2019 - Presente',
        description: 'Desarrollé SPAs modernas usando React y GraphQL.',
      },
      {
        role: 'Desarrolladora Junior',
        company: 'DevStudio',
        period: '2017 - 2019',
        description: 'Apoyé el desarrollo de proyectos de clientes.',
      },
    ],
    stats: {
      projects: 20,
      connections: 160,
      reviews: 4.8,
    },
    skills: ['JavaScript', 'React', 'Node.js', 'GraphQL', 'TypeScript'],
  },
  {
    id: 1006,
    name: 'Carlos Rivera',
    title: 'Ingeniero de Software Senior',
    tags: ['Angular', 'TypeScript', 'Node.js'],
    contact: {
      email: 'carlos.rivera@email.com',
      phone: '+1 (555) 654-7891',
      location: 'Miami, FL',
      website: 'carlos.dev',
      joined: 'Mayo 2017',
    },
    about:
      'Ingeniero senior con sólida experiencia en aplicaciones web empresariales.',
    experience: [
      {
        role: 'Ingeniero de Software Senior',
        company: 'EnterpriseSoft',
        period: '2019 - Presente',
        description:
          'Lideré el desarrollo frontend usando Angular y TypeScript.',
      },
      {
        role: 'Desarrollador de Software',
        company: 'CodeWorks',
        period: '2015 - 2019',
        description: 'Desarrollé servicios web y APIs.',
      },
    ],
    stats: {
      projects: 25,
      connections: 175,
      reviews: 4.7,
    },
    skills: ['Angular', 'TypeScript', 'Node.js', 'JavaScript'],
  },
  {
    id: 1007,
    name: 'Linda Blanco',
    title: 'Ingeniera Full Stack',
    tags: ['React', 'Node.js', 'AWS'],
    contact: {
      email: 'linda.blanco@email.com',
      phone: '+1 (555) 321-9876',
      location: 'Denver, CO',
      website: 'lindablanco.dev',
      joined: 'Julio 2018',
    },
    about:
      'Ingeniera enfocada en entregar aplicaciones escalables y mentorizar equipos.',
    experience: [
      {
        role: 'Ingeniera Full Stack',
        company: 'Innovatech',
        period: '2018 - Presente',
        description: 'Desarrollé aplicaciones nativas en la nube y APIs.',
      },
    ],
    stats: {
      projects: 19,
      connections: 140,
      reviews: 4.6,
    },
    skills: ['React', 'Node.js', 'AWS', 'Docker', 'GraphQL'],
  },
  {
    id: 1008,
    name: 'Carlos Mendoza',
    title: 'Ingeniero Frontend',
    tags: ['Vue.js', 'JavaScript', 'TypeScript'],
    contact: {
      email: 'carlos.mendoza@email.com',
      phone: '+1 (555) 789-4321',
      location: 'San Diego, CA',
      website: 'carlosmendoza.dev',
      joined: 'Agosto 2019',
    },
    about:
      'Ingeniero frontend con un ojo agudo para el detalle y la experiencia de usuario.',
    experience: [
      {
        role: 'Ingeniero Frontend',
        company: 'PixelWorks',
        period: '2019 - Presente',
        description:
          'Construí componentes de interfaz de usuario de alto rendimiento con Vue.js.',
      },
    ],
    stats: {
      projects: 17,
      connections: 130,
      reviews: 4.5,
    },
    skills: ['Vue.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    id: 1009,
    name: 'Valentina Herrera',
    title: 'Desarrolladora de Software',
    tags: ['React', 'Node.js', 'TypeScript'],
    contact: {
      email: 'valentina.herrera@email.com',
      phone: '+1 (555) 654-1234',
      location: 'Portland, OR',
      website: 'valentinaherrera.dev',
      joined: 'Octubre 2020',
    },
    about:
      'Desarrolladora enfocada en construir aplicaciones web accesibles y responsivas.',
    experience: [
      {
        role: 'Desarrolladora de Software',
        company: 'WebWorks',
        period: '2020 - Presente',
        description:
          'Desarrollé aplicaciones full-stack usando React y Node.js.',
      },
    ],
    stats: {
      projects: 14,
      connections: 110,
      reviews: 4.9,
    },
    skills: ['React', 'Node.js', 'TypeScript', 'GraphQL', 'Docker'],
  },
  {
    id: 1010,
    name: 'Diego Torres',
    title: 'Arquitecto de Soluciones en la Nube',
    tags: ['AWS', 'Terraform', 'Python'],
    contact: {
      email: 'diego.torres@email.com',
      phone: '+1 (555) 987-3210',
      location: 'Los Angeles, CA',
      website: 'diegotorres.dev',
      joined: 'Septiembre 2015',
    },
    about:
      'Arquitecto diseñando infraestructuras en la nube seguras y escalables.',
    experience: [
      {
        role: 'Arquitecto de Soluciones en la Nube',
        company: 'CloudSphere',
        period: '2017 - Presente',
        description: 'Diseñé infraestructura para aplicaciones de gran escala.',
      },
      {
        role: 'Ingeniero DevOps',
        company: 'SysOps Inc.',
        period: '2014 - 2017',
        description:
          'Gestioné despliegues en la nube y flujos de trabajo de automatización.',
      },
    ],
    stats: {
      projects: 28,
      connections: 200,
      reviews: 4.8,
    },
    skills: ['AWS', 'Terraform', 'Python', 'Docker', 'Linux'],
  },
];
