'use client';

import React from 'react';
import { projects } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Project from './Project';
import useSectionView from '@/app/hooks/useSectionInView';

export default function Projects() {
  const { ref } = useSectionView('Projects', 0.5);

  return (
    <section ref={ref} id='projects' className='mb-28 scroll-mt-28'>
      <SectionHeader header='My projects' />
      <div className='flex flex-col gap-6'>
        {projects.map((project) => (
          <React.Fragment key={project.name}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
