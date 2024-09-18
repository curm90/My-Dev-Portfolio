'use client';

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeader from './SectionHeader';
import { experience } from '@/lib/data';
import useSectionView from '@/hooks/useSectionInView';
import { useThemeContext } from '@/contexts/ThemeContext';

export default function Experience() {
  const { ref, isInView } = useSectionView('Experience', 0.25);
  const { theme } = useThemeContext();

  return (
    <section ref={ref} id='experience' className='mb-28 scroll-mt-28 sm:mb-40'>
      <SectionHeader header='My experience' />
      <VerticalTimeline lineColor={theme === 'light' ? '#e5e7eb' : 'rgba(255, 255, 255, 0.2)'}>
        {experience.map((exp, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={isInView}
              contentStyle={{
                background: theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0,0,0,0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgba(255, 255, 255, 0.5)',
              }}
              date={exp.date}
              icon={exp.icon}
              iconStyle={{
                background: theme === 'light' ? 'white' : '#1D2432',
                fontSize: '1.5rem',
              }}
            >
              <h3 className='font-semibold capitalize'>{exp.title}</h3>
              <p className='!mt-0 font-normal'>{exp.location}</p>
              <p className='!mt-0 font-normal text-gray-600 dark:text-white/75'>
                {exp.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
