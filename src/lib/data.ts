import SocialImg from '../../public/images/social-ai.png';
import walletImg from '../../public/images/wallet-ai.png';
import SupernovaImg from '../../public/images/supernova.png';

export const skills = [
  'JavaScript',
  'TypeScript',
  'HTML5',
  'CSS3',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'GraphQL',
  'REST APIs',
  'MongoDB',
  'PostgreSQL',
  'MySQL',
  'Git',
  'GitHub',
  'CI/CD',
  'Jest',
  'Mocha',
  'Chai',
  'Tailwind CSS',
  'Redux',
  'AWS',
  'Firebase',
  'OAuth',
  'JWT Authentication',
  'SASS',
  'Socket.IO',
  'Microservices Architecture',
] as const;

export const links = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Skills', link: '#skills' },
  { name: 'Experience', link: '#experience' },
  { name: 'Contact', link: '#contact' },
] as const;

export const projects = [
  {
    name: 'Supernova Dental',
    description:
      'A modern, responsive website built for a dental practice, Supernova Dental showcases services, provides appointment scheduling, and offers an intuitive user experience. The site is optimized for performance and SEO, ensuring both functionality and visibility.',
    tags: ['React', 'Next.js', 'Prisma', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    image: SupernovaImg,
  },
  {
    name: 'Social Ai',
    description:
      'A web app designed to track and analyze crypto wallet activity. Users can monitor wallet balances, transactions, and performance trends over time, providing an in-depth view of their cryptocurrency portfolio.',
    tags: ['React', 'Next.js', 'NodeJs', 'Postgres', 'Tailwind CSS', 'TypeScript'],
    image: SocialImg,
  },
  {
    name: 'Wallet Ai',
    description:
      'A modern, responsive website built for a dental practice, Supernova Dental showcases services, provides appointment scheduling, and offers an intuitive user experience. The site is optimized for performance and SEO, ensuring both functionality and visibility.',
    tags: ['React', 'Next.js', 'Prisma', 'Tailwind CSS', 'TypeScript'],
    image: walletImg,
  },
] as const;
