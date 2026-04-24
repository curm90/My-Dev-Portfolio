'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import useSectionView from '@/hooks/useSectionInView';

export default function About() {
  const { ref } = useSectionView('About');

  return (
    <motion.section
      ref={ref}
      id='about'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className='mb-28 mt-28 max-w-[45rem] scroll-mt-28 text-center text-base leading-7 text-gray-700 dark:text-gray-400 sm:mt-0 sm:text-[1.02rem]'
    >
      <SectionHeader header='About me' />
      <p className='mb-3'>
        I&apos;m a graduate of{' '}
        <a
          className='font-semibold italic underline'
          href='https://www.bloomtech.com/'
          target='_blank'
          rel='noreferrer'
        >
          BloomTech Institute of Technology
        </a>
        . I spent a year teaching myself part-time before joining, and that gave me a strong
        foundation. I enjoy <span className='font-semibold'>problem-solving</span> and building with{' '}
        <span className='font-semibold'>React, Next.js, and Node.js</span>. I&apos;m currently
        looking for <span className='font-semibold'>my next role</span> as a frontend or full-stack
        developer.
      </p>
      <p>
        <span className='italic'>Outside of coding</span>, I love reading, cooking, and learning
        about health optimisation. I&apos;m a big believer in daily movement, from cardio and gym
        sessions to yoga, hiking, and swimming.
      </p>
    </motion.section>
  );
}
