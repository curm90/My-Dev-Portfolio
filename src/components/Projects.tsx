'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Project from './Project';
import useSectionView from '@/hooks/useSectionInView';

const projectsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function Projects() {
  const { ref } = useSectionView('Projects', 0.5);

  return (
    <section ref={ref} id='projects' className='container mb-28 scroll-mt-28'>
      <SectionHeader header='My projects' />
      <motion.div
        className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
        variants={projectsContainerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </motion.div>
    </section>
  );
}
