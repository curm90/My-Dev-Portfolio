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
      className='mb-28 mt-28 max-w-[45rem] scroll-mt-28 text-center text-lg leading-8 text-gray-700 sm:mt-0'
    >
      <SectionHeader header='About me' />
      <p className='mb-3'>
        I&apos;m a graduate of{' '}
        <a
          className='font-semibold italic underline'
          href='https://www.bloomtech.com/'
          target='_blank'
          rel='noreferer'
        >
          BloomTech Institute of Technology
        </a>
        , where I solidified my coding skills after spending a year teaching myself part-time. I
        quickly realized I needed more structure to push my learning forward, and BloomTech provided
        the foundation I needed. I love the process of{' '}
        <span className='font-semibold'>problem-solving</span>, the satisfaction of finally getting
        it to work is unmatched. My primary tech stack includes{' '}
        <span className='font-semibold'> React, Next.js, and Node.js</span>, and I&apos;m always
        eager to learn new technologies and grow as a developer. Im currently looking for a{' '}
        <span className='font-semibold'>full-time position</span> as a full-stack developer.
      </p>
      <p>
        <span className='italic'>Outside of coding</span>, I&apos;m passionate about reading,
        cooking, going on mountain hikes, working out, and I&apos;m a bit of a documentary nut too.
      </p>
    </motion.section>
  );
}
