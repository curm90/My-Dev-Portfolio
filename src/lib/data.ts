import React from 'react';
import { FaGraduationCap } from 'react-icons/fa6';
import { SiHiveBlockchain } from 'react-icons/si';
import { PiDetectiveFill } from 'react-icons/pi';
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
      'A modern, responsive website built for a dental practice, Supernova Dental showcases services, provides appointment scheduling, and offers an intuitive user experience.',
    tags: ['React', 'Next.js', 'Prisma', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    image: SupernovaImg,
  },
  {
    name: 'Social Ai',
    description:
      'A web app designed to track and analyze crypto wallet activity. Users can monitor wallet balances, transactions, and performance trends over time.',
    tags: ['React', 'Next.js', 'NodeJs', 'Postgres', 'Tailwind CSS', 'TypeScript'],
    image: SocialImg,
  },
  {
    name: 'Wallet Ai',
    description:
      'A modern, responsive website built for a dental practice, Supernova Dental showcases services, provides appointment scheduling, and offers an intuitive user experience.',
    tags: ['React', 'Next.js', 'Prisma', 'Tailwind CSS', 'TypeScript'],
    image: walletImg,
  },
] as const;

export const experience = [
  {
    title: 'Graduated online bootcamp',
    location: 'Online',
    description:
      'Completed a comprehensive software development program, specializing in full-stack development, gaining proficiency in JavaScript, React, Node.js, and more.',
    icon: React.createElement(FaGraduationCap),
    date: '2020',
  },
  {
    title: 'Frontend Web3 Developer',
    location: 'Dcentralab - Hord',
    description:
      'Developed and maintained decentralized web applications, focusing on blockchain integration and user interfaces in the Web3 space.',
    icon: React.createElement(SiHiveBlockchain),
    date: '2021 - 2023',
  },
  {
    title: 'Co-founder & Full Stack Developer',
    location: 'Chain Detective',
    description:
      'Built and managed a web3 analytics platform, focusing on blockchain data analysis and delivering insights to users through intuitive web applications.',
    icon: React.createElement(PiDetectiveFill),
    date: '2023 - Present',
  },
] as const;
