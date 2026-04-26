import React from 'react';
import { FaGraduationCap, FaTooth } from 'react-icons/fa6';
import { SiHiveBlockchain } from 'react-icons/si';
import { PiDetectiveFill } from 'react-icons/pi';
import type { ProjectItem } from '@/types/Project';
import {
  CHAIN_DETECTIVE_URL,
  GLEANER_CODE_URL,
  GLEANER_URL,
  HABIT_TRACKER_CODE_URL,
  HABIT_TRACKER_URL,
  MY_SNIPPETS_CODE_URL,
  MY_SNIPPETS_URL,
  SUPERNOVA_URL,
} from '@/constants/urls';

export const skills = [
  'JavaScript',
  'TypeScript',
  'HTML5',
  'CSS3',
  'React',
  'Next.js',
  'Node.js',
  'Tanstack',
  'Prisma',
  'Express',
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
  'Firebase',
  'OAuth',
  'JWT Authentication',
  'Socket.IO',
] as const;

export const links = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Skills', link: '#skills' },
  { name: 'Experience', link: '#experience' },
  { name: 'Contact', link: '#contact' },
] as const;

export const projects: ProjectItem[] = [
  {
    name: 'Supernova Dental',
    description:
      'A modern, responsive website built for a dental practice, Supernova Dental showcases services, provides appointment scheduling, and offers an intuitive user experience.',
    thumbnail: '',
    liveUrl: SUPERNOVA_URL,
    codeUrl: false,
    tags: ['React', 'Next.js', 'Prisma', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    // image: SupernovaImg,
    icon: {
      kind: 'image',
      src: '/images/SN-logo.jpg',
      alt: 'Supernova Dental logo',
    },
    year: 2024,
  },
  {
    name: 'Chain Detective',
    description:
      'A web3 analytics platform that provides users with insights into blockchain data, enabling them to track and analyze transactions, wallets, and smart contracts.',
    thumbnail: '',
    liveUrl: CHAIN_DETECTIVE_URL,
    codeUrl: false,
    tags: ['React', 'NodeJs', 'AlchemySDK', 'Thirdweb', 'Socket.io', 'Postgres', 'Tailwind CSS'],
    // image: '',
    icon: {
      kind: 'image',
      src: '/images/CD-logo.jpg',
      alt: 'Chain Detective logo',
    },
    year: '2023',
  },
  {
    name: 'Streaks',
    description:
      'Built a full-stack Habit Tracker web application that enables users to create an account, log daily habits, and monitor progress over time with dynamic tracking and visual feedback.',
    thumbnail: '',
    liveUrl: HABIT_TRACKER_URL,
    codeUrl: HABIT_TRACKER_CODE_URL,
    tags: ['React', 'Prisma', 'Shadcn', 'Tanstack Start', 'Supabase', 'Tailwind CSS', 'TypeScript'],
    // image: '',
    icon: {
      kind: 'image',
      src: '/images/streaks-logo.png',
      alt: 'Streaks logo',
    },
    year: '2025',
  },
  {
    name: 'Gleaner',
    description:
      'Gleaner is a tool that lets you search for online articles and news, then use Firecrawl to scrape their content. You can also directly input a URL to scrape any webpage, after which the app generates an AI-powered summary and relevant tags for the content.',
    thumbnail: '',
    liveUrl: GLEANER_URL,
    codeUrl: GLEANER_CODE_URL,
    tags: [
      'React',
      'Tanstack',
      'TypeScript',
      'Prisma',
      'Firecrawl',
      'OpenRouter',
      'Shadcn',
      'Supabase',
      'Tailwind CSS',
    ],
    // image: '',
    icon: {
      kind: 'image',
      src: '/images/gleaner.png',
      alt: 'Gleaner logo',
    },
    year: '2025',
  },
  {
    name: 'Snipp',
    description:
      'A snippet management tool that allows users to save, organize, and share code snippets across various programming languages, enhancing productivity and collaboration.',
    thumbnail: '',
    liveUrl: MY_SNIPPETS_URL,
    codeUrl: MY_SNIPPETS_CODE_URL,
    tags: ['React', 'Next.js', 'Shadcn', 'Prisma', 'Tailwind CSS', 'TypeScript'],
    // image: '',
    icon: {
      kind: 'image',
      src: '/images/snipp-logo.jpg',
      alt: 'Snipp logo',
    },
    year: 2025,
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
    icon: { kind: 'emoji', value: '🕹️' },
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
    icon: { kind: 'emoji', value: '🃏' },
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
    icon: { kind: 'emoji', value: '0️⃣' },
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
    icon: { kind: 'emoji', value: '🔎' },
    year: '2024',
  },
];

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
    date: '2024 - 2026',
  },
] as const;
