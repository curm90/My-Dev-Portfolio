import { skills } from '@/lib/data';
import SectionHeader from './SectionHeader';

export default function Skills() {
  return (
    <section id='skills' className='mb-28 max-w-[53rem] scroll-mt-28 sm:mb-40'>
      <SectionHeader header='My skills' />
      <ul className='flex flex-wrap items-center justify-center gap-2 text-lg text-gray-600'>
        {skills.map((skill, index) => (
          <li
            key={index}
            className='mb-2 rounded-lg border border-black/[0.1] bg-white px-4 py-2 text-center'
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
