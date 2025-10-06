import Project from '../models/Project';
import Skill from '../models/Skill';

export const sampleProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
    longDescription: 'This comprehensive e-commerce platform was built from scratch using modern web technologies. The frontend is built with React and TypeScript, providing a smooth and responsive user experience. The backend uses Node.js with Express and MongoDB for data persistence. Key features include secure user authentication, real-time inventory management, integrated payment processing with Stripe, and a comprehensive admin dashboard for managing products, orders, and customers.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    images: ['/images/ecommerce-1.jpg', '/images/ecommerce-2.jpg'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    featured: true,
    category: 'web',
    status: 'completed',
    startDate: new Date('2023-01-15'),
    endDate: new Date('2023-06-30')
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    longDescription: 'Built with React and Socket.io for real-time collaboration, this task management app allows teams to work together seamlessly. Features include drag-and-drop task organization, real-time updates, file attachments, comments, and deadline tracking. The app uses a modern tech stack with React for the frontend, Node.js for the backend, and Socket.io for real-time communication.',
    technologies: ['React', 'Socket.io', 'Node.js', 'PostgreSQL', 'Material-UI', 'Redux'],
    images: ['/images/taskapp-1.jpg', '/images/taskapp-2.jpg'],
    githubUrl: 'https://github.com/yourusername/task-management-app',
    liveUrl: 'https://taskapp-demo.netlify.app',
    featured: true,
    category: 'web',
    status: 'completed',
    startDate: new Date('2023-03-01'),
    endDate: new Date('2023-08-15')
  },
  {
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
    longDescription: 'This weather dashboard provides comprehensive weather information with an intuitive interface. It integrates with multiple weather APIs to provide accurate forecasts, interactive maps showing weather patterns, and detailed analytics. The app features location-based services, customizable widgets, and responsive design that works perfectly on all devices.',
    technologies: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API', 'Leaflet', 'CSS Modules'],
    images: ['/images/weather-1.jpg', '/images/weather-2.jpg'],
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://weather-dashboard.vercel.app',
    featured: true,
    category: 'web',
    status: 'completed',
    startDate: new Date('2023-05-01'),
    endDate: new Date('2023-07-15')
  },
  {
    title: 'Mobile Banking App',
    description: 'A secure mobile banking application with biometric authentication, transaction history, and money transfer capabilities.',
    longDescription: 'Developed using React Native, this mobile banking app provides a secure and user-friendly banking experience. Key features include biometric authentication, secure transaction processing, real-time balance updates, transaction history, money transfers, bill payments, and push notifications. The app follows banking security standards and includes features like transaction limits and fraud detection.',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Biometric Auth', 'Redux Toolkit', 'React Navigation'],
    images: ['/images/banking-1.jpg', '/images/banking-2.jpg'],
    githubUrl: 'https://github.com/yourusername/mobile-banking-app',
    featured: true,
    category: 'mobile',
    status: 'in-progress',
    startDate: new Date('2023-09-01')
  },
  {
    title: 'Blog CMS',
    description: 'A headless CMS for bloggers with markdown support, SEO optimization, and content scheduling features.',
    longDescription: 'This headless CMS is designed specifically for bloggers and content creators. It features a rich text editor with markdown support, SEO optimization tools, content scheduling, media management, and analytics. The system is built with a modern architecture that separates content management from presentation, making it flexible and scalable.',
    technologies: ['Next.js', 'Strapi', 'PostgreSQL', 'GraphQL', 'Tailwind CSS', 'Prisma'],
    images: ['/images/cms-1.jpg', '/images/cms-2.jpg'],
    githubUrl: 'https://github.com/yourusername/blog-cms',
    liveUrl: 'https://blog-cms-demo.vercel.app',
    featured: false,
    category: 'web',
    status: 'completed',
    startDate: new Date('2023-02-01'),
    endDate: new Date('2023-04-30')
  },
  {
    title: 'Desktop File Manager',
    description: 'A cross-platform desktop file manager with cloud sync, file preview, and advanced search capabilities.',
    longDescription: 'Built with Electron and React, this desktop file manager provides a modern interface for managing files and folders. Features include cloud synchronization with Google Drive and Dropbox, file preview for various formats, advanced search with filters, batch operations, and customizable themes. The app works seamlessly across Windows, macOS, and Linux.',
    technologies: ['Electron', 'React', 'TypeScript', 'Node.js', 'SQLite', 'Electron Store'],
    images: ['/images/filemanager-1.jpg', '/images/filemanager-2.jpg'],
    githubUrl: 'https://github.com/yourusername/desktop-file-manager',
    featured: false,
    category: 'desktop',
    status: 'planned',
    startDate: new Date('2024-01-01')
  }
];

export const sampleSkills = [
  // Frontend
  { name: 'React', category: 'frontend', proficiency: 95, icon: '⚛️', color: '#61DAFB', featured: true },
  { name: 'TypeScript', category: 'frontend', proficiency: 90, icon: '🔷', color: '#3178C6', featured: true },
  { name: 'Next.js', category: 'frontend', proficiency: 85, icon: '▲', color: '#000000', featured: true },
  { name: 'Vue.js', category: 'frontend', proficiency: 80, icon: '💚', color: '#4FC08D', featured: false },
  { name: 'Angular', category: 'frontend', proficiency: 75, icon: '🔴', color: '#DD0031', featured: false },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 90, icon: '🎨', color: '#06B6D4', featured: true },
  { name: 'Sass', category: 'frontend', proficiency: 85, icon: '💅', color: '#CC6699', featured: false },
  { name: 'Material-UI', category: 'frontend', proficiency: 80, icon: '🎭', color: '#0081CB', featured: false },

  // Backend
  { name: 'Node.js', category: 'backend', proficiency: 90, icon: '🟢', color: '#339933', featured: true },
  { name: 'Express.js', category: 'backend', proficiency: 88, icon: '🚀', color: '#000000', featured: true },
  { name: 'Python', category: 'backend', proficiency: 85, icon: '🐍', color: '#3776AB', featured: true },
  { name: 'Django', category: 'backend', proficiency: 80, icon: '🎯', color: '#092E20', featured: false },
  { name: 'FastAPI', category: 'backend', proficiency: 75, icon: '⚡', color: '#009688', featured: false },
  { name: 'GraphQL', category: 'backend', proficiency: 82, icon: '🔺', color: '#E10098', featured: false },
  { name: 'REST APIs', category: 'backend', proficiency: 90, icon: '🌐', color: '#FF6B6B', featured: true },

  // Database
  { name: 'MongoDB', category: 'database', proficiency: 85, icon: '🍃', color: '#47A248', featured: true },
  { name: 'PostgreSQL', category: 'database', proficiency: 80, icon: '🐘', color: '#336791', featured: true },
  { name: 'MySQL', category: 'database', proficiency: 75, icon: '🐬', color: '#4479A1', featured: false },
  { name: 'Redis', category: 'database', proficiency: 70, icon: '🔴', color: '#DC382D', featured: false },
  { name: 'Firebase', category: 'database', proficiency: 85, icon: '🔥', color: '#FFCA28', featured: true },

  // Tools & Others
  { name: 'Git', category: 'tools', proficiency: 90, icon: '📚', color: '#F05032', featured: true },
  { name: 'Docker', category: 'tools', proficiency: 80, icon: '🐳', color: '#2496ED', featured: true },
  { name: 'AWS', category: 'tools', proficiency: 75, icon: '☁️', color: '#FF9900', featured: true },
  { name: 'Vercel', category: 'tools', proficiency: 85, icon: '▲', color: '#000000', featured: false },
  { name: 'Netlify', category: 'tools', proficiency: 80, icon: '🌐', color: '#00C7B7', featured: false },
  { name: 'Jest', category: 'tools', proficiency: 75, icon: '🧪', color: '#C21325', featured: false },
  { name: 'Webpack', category: 'tools', proficiency: 70, icon: '📦', color: '#8DD6F9', featured: false },
  { name: 'Figma', category: 'tools', proficiency: 85, icon: '🎨', color: '#F24E1E', featured: false }
];

export const seedDatabase = async () => {
  try {
    // Clear existing data
    await Project.deleteMany({});
    await Skill.deleteMany({});

    // Insert sample projects
    await Project.insertMany(sampleProjects);
    console.log('✅ Sample projects inserted');

    // Insert sample skills
    await Skill.insertMany(sampleSkills);
    console.log('✅ Sample skills inserted');

    console.log('🎉 Database seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
  }
};
