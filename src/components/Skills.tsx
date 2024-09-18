'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import useSectionView from '@/hooks/useSectionInView';
import SectionHeader from './SectionHeader';

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({ opacity: 1, y: 0, transition: { delay: 0.03 * index } }),
};

export default function Skills() {
  const { ref } = useSectionView('Skills');

  return (
    <section ref={ref} id='skills' className='mb-28 max-w-[53rem] scroll-mt-28 sm:mb-40'>
      <SectionHeader header='My skills' />
      <ul className='flex flex-wrap items-center justify-center gap-2 text-lg text-gray-600'>
        {skills.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            custom={index}
            key={index}
            className='borderBlack mb-2 rounded-lg bg-white px-4 py-2 text-center dark:bg-white/10 dark:text-white/80'
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
