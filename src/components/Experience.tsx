'use client';

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeader from './SectionHeader';
import { experience } from '@/lib/data';
import useSectionView from '@/app/hooks/useSectionInView';

export default function Experience() {
  const { ref, isInView } = useSectionView('Experience', 0.5);

  return (
    <section ref={ref} id='experience' className='mb-28 sm:mb-40'>
      <SectionHeader header='My experience' />
      <VerticalTimeline lineColor='#e5e7eb'>
        {experience.map((exp, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={isInView}
              contentStyle={{
                background: '#f3f4f6',
                boxShadow: 'none',
                border: '1px solid rgba(0,0,0,0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight: '0.4rem solid #9ca3af',
              }}
              date={exp.date}
              icon={exp.icon}
              iconStyle={{
                background: 'white',
                fontSize: '1.5rem',
              }}
            >
              <h3 className='font-semibold capitalize'>{exp.title}</h3>
              <p className='!mt-0 font-normal'>{exp.location}</p>
              <p className='!mt-0 font-normal text-gray-600'>{exp.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
