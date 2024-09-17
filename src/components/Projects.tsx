'use client';

import React, { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { useActiveSectionContext } from '@/app/contexts/ActiveSection';
import { projects } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Project from './Project';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25 });
  const { setActiveTab } = useActiveSectionContext();

  useEffect(() => {
    if (isInView) {
      setActiveTab('Projects');
    }
  }, [isInView, setActiveTab]);

  return (
    <section ref={ref} id='projects' className='mb-8 scroll-mt-28'>
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
