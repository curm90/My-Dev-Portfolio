'use client';

import React from 'react';
import { projects } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Project from './Project';
import useSectionView from '@/hooks/useSectionInView';

export default function Projects() {
  const { ref } = useSectionView('Projects', 0.5);

  return (
    <section ref={ref} id='projects' className='container mb-28 scroll-mt-28'>
      <SectionHeader header='My projects' />
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => (
          <React.Fragment key={project.name}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
