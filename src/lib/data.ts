import React from 'react';
import { FaGraduationCap, FaTooth } from 'react-icons/fa6';
import { SiHiveBlockchain } from 'react-icons/si';
import { PiDetectiveFill } from 'react-icons/pi';
import { SUPERNOVA_URL } from '@/constants/urls';

export const skills = [
  'JavaScript',
  'TypeScript',
  'HTML5',
  'CSS3',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'Prisma',
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
    thumbnail: '',
    liveUrl: SUPERNOVA_URL,
    codeUrl: false,
    tags: ['React', 'Next.js', 'Prisma', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    // image: SupernovaImg,
    icon: '🦷',
    year: 2024,
  },
  {
    name: 'Chain Detective',
    description:
      'A web3 analytics platform that provides users with insights into blockchain data, enabling them to track and analyze transactions, wallets, and smart contracts.',
    thumbnail: '',
    liveUrl: 'https://chain-detective-dex-frontend.pages.dev/',
    codeUrl: false,
    tags: ['React', 'NodeJs', 'AlchemySDK', 'Thirdweb', 'Socket.io', 'Postgres', 'Tailwind CSS'],
    // image: '',
    icon: '🕵',
    year: '2023',
  },
  {
    name: 'Hangman',
    description:
      ' A fun and interactive hangman game built with vanilla JavaScript, allowing users to guess letters and complete words while keeping track of their attempts.',
    thumbnail: '',
    liveUrl: 'https://hangman-vanilla-js-liam.netlify.app/',
    codeUrl: 'https://github.com/curm90/Toy-Projects/tree/main/hangman',
    tags: ['JavaScript', 'html', 'css'],
    // image:
    icon: '🕹️',
    year: 2024,
  },
  {
    name: 'Memory Card Game',
    description:
      'A simple memory card flip game where users try to match pairs of cards in the least number of turns. The game is built with JavaScript, HTML, and CSS.',
    thumbnail: '',
    liveUrl: 'https://memory-card-game-liam.netlify.app/',
    codeUrl: 'https://github.com/curm90/Toy-Projects/tree/main/memory-cards',
    tags: ['JavaScript', 'html', 'css'],
    // image: '',
    icon: '🃏',
    year: '2024',
  },
  {
    name: 'Tic-Tac-Toe',
    description:
      'A classic tic-tac-toe game built with JavaScript, HTML, and CSS. Players can enjoy a simple yet engaging experience of the timeless game.',
    thumbnail: '',
    liveUrl: 'https://tic-tac-toe-liam.netlify.app/',
    codeUrl: 'https://github.com/curm90/Toy-Projects/tree/main/tic-tac-toe',
    tags: ['JavaScript', 'html', 'css'],
    // image: '',
    icon: '0️⃣',
    year: '2024',
  },
  {
    name: 'Word Search',
    description:
      'A word search puzzle game where users can find hidden words in a grid of letters. The game is built with JavaScript, HTML, and CSS.',
    thumbnail: '',
    liveUrl: 'https://word-search-liam.netlify.app/',
    codeUrl: 'https://github.com/curm90/Toy-Projects/tree/main/word-search',
    tags: ['JavaScript', 'html', 'css'],
    // image: '',
    icon: '🔎',
    year: '2024',
  },

  // {
  //   name: 'Crypto Wallet Tracker',
  //   description:
  //     'A web app designed to track and analyze crypto wallet activity. Users can monitor wallet balances, transactions, and performance trends over time.',
  //   thumbnail: '',
  //   liveUrl: '#',
  //   codeUrl: '#',
  //   tags: ['React', 'Next.js', 'NodeJs', 'Postgres', 'Tailwind CSS', 'TypeScript'],
  //   // image: CryptoImg,
  //   icon: '💰',
  //   year: 2024,
  // },
  // {
  //   name: 'Social Ai',
  //   description:
  //     'A web app designed to track and analyze crypto wallet activity. Users can monitor wallet balances, transactions, and performance trends over time.',
  //   thumbnail: '',
  //   liveUrl: '#',
  //   codeUrl: '#',
  //   tags: ['React', 'Next.js', 'NodeJs', 'Postgres', 'Tailwind CSS', 'TypeScript'],
  //   // image: SocialImg,
  //   icon: '🔥',
  //   year: 2024,
  // },
  // {
  //   name: 'Wallet Ai',
  //   description:
  //     'A modern, responsive website built for a dental practice, Supernova Dental showcases services, provides appointment scheduling, and offers an intuitive user experience.',
  //   thumbnail: '',
  //   liveUrl: '#',
  //   codeUrl: '#',
  //   tags: ['React', 'Next.js', 'Prisma', 'Tailwind CSS', 'TypeScript'],
  //   // image: walletImg,
  //   icon: '🔥',
  //   year: 2024,
  // },
] as const;

export const experience = [
  {
    title: 'Graduated online bootcamp',
    location: 'Online',
    description:
      'Completed a comprehensive software development program, specializing in full-stack development, gaining proficiency in JavaScript, React, Node.js, and more.',
    thumbnail: '',
    liveUrl: '#',
    codeUrl: '#',
    icon: React.createElement(FaGraduationCap),
    date: '2020',
  },
  {
    title: 'Frontend Web3 Developer',
    location: 'Dcentralab - Hord',
    description:
      'Developed and maintained decentralized web applications, focusing on blockchain integration and user interfaces in the Web3 space.',
    thumbnail: '',
    liveUrl: '#',
    codeUrl: '#',
    icon: React.createElement(SiHiveBlockchain),
    date: '2021 - 2023',
  },
  {
    title: 'Co-founder & Full Stack Developer',
    location: 'Chain Detective',
    description:
      'Built and managed a web3 analytics platform, focusing on blockchain data analysis and delivering insights to users through intuitive web applications.',
    thumbnail: '',
    liveUrl: '#',
    codeUrl: '#',
    icon: React.createElement(PiDetectiveFill),
    date: '2023 - 2025',
  },
  {
    title: 'Full Stack Developer & Designer',
    location: 'Supernova Dental',
    description:
      'Designed and developed a modern dental practice website with responsive UI/UX, smooth animations, and seamless appointment booking integration. Built to showcase professional healthcare services with a clean, user-friendly interface.',
    thumbnail: '',
    liveUrl: 'https://www.supernovadental.co.uk/',
    codeUrl: 'https://github.com/Supernova-Dentist/Supernova-Dentist-FE-TS',
    icon: React.createElement(FaTooth),
    date: '2024 - Present',
  },
] as const;
