import { Skill } from '../types';

export const skills: Skill[] = [
  // Frontend
  {
    id: 1,
    name: 'React',
    icon: 'ReactIcon',
    category: 'frontend',
    proficiency: 90,
  },
  {
    id: 2,
    name: 'JavaScript',
    icon: 'Code2',
    category: 'frontend',
    proficiency: 85,
  },
  {
    id: 3,
    name: 'TypeScript',
    icon: 'FileType',
    category: 'frontend',
    proficiency: 80,
  },
  {
    id: 4,
    name: 'HTML5',
    icon: 'FileHtml',
    category: 'frontend',
    proficiency: 95,
  },
  {
    id: 5,
    name: 'CSS3',
    icon: 'FileCss',
    category: 'frontend',
    proficiency: 90,
  },
  {
    id: 6,
    name: 'Redux',
    icon: 'Combine',
    category: 'frontend',
    proficiency: 85,
  },
  
  // Backend
  {
    id: 7,
    name: 'Node.js',
    icon: 'Server',
    category: 'backend',
    proficiency: 85,
  },
  {
    id: 8,
    name: 'Express',
    icon: 'ServerCog',
    category: 'backend',
    proficiency: 80,
  },
  {
    id: 9,
    name: 'REST API',
    icon: 'Network',
    category: 'backend',
    proficiency: 90,
  },
  // {
  //   id: 10,
  //   name: 'GraphQL',
  //   icon: 'Webhook',
  //   category: 'backend',
  //   proficiency: 75,
  // },
  
  // Database
  {
    id: 11,
    name: 'MongoDB',
    icon: 'Database',
    category: 'database',
    proficiency: 85,
  },
  {
    id: 12,
    name: 'MySQL',
    icon: 'TableProperties',
    category: 'database',
    proficiency: 80,
  },
  {
    id: 13,
    name: 'PostgreSQL',
    icon: 'DatabaseZap',
    category: 'database',
    proficiency: 70,
  },
  
  // Tools
  {
    id: 14,
    name: 'Git',
    icon: 'GitBranch',
    category: 'tools',
    proficiency: 90,
  },
  {
    id: 15,
    name: 'Docker',
    icon: 'Container',
    category: 'tools',
    proficiency: 70,
  },
  {
    id: 16,
    name: 'AWS',
    icon: 'Cloud',
    category: 'tools',
    proficiency: 70,
  },
  {
    id: 17,
    name: 'CI/CD',
    icon: 'Workflow',
    category: 'tools',
    proficiency: 80,
  },
  // {
  //   id: 18,
  //   name: 'Jest',
  //   icon: 'TestTube',
  //   category: 'tools',
  //   proficiency: 85,
  // },
];

export default skills;