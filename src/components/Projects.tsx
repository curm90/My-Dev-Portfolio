import React from 'react';
import { projects } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Project from './Project';

export default function Projects() {
  return (
    <section id='projects' className='mb-8 scroll-mt-28'>
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
