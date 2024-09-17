import { projects } from '@/lib/data';
import SectionHeader from './SectionHeader';
import React from 'react';
import Project from './Project';

export default function Projects() {
  return (
    <section className='mb-8'>
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
