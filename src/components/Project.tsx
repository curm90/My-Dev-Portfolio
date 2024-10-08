'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import { projects } from '@/lib/data';

type TProject = (typeof projects)[number];

export default function Project({ name, description, tags, image }: TProject) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1.33], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1.33], [0.6, 1]);

  return (
    <motion.div
      className='group'
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      ref={ref}
    >
      <article className='relative max-w-[50rem] overflow-hidden rounded-md border border-black/5 bg-gray-100 transition hover:bg-gray-200 sm:h-[21.25rem] sm:group-even:pl-8 dark:bg-white/10 dark:hover:bg-white/20'>
        <div className='flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[53%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]'>
          <h3 className='text-2xl font-semibold'>{name}</h3>
          <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
          <ul className='mt-4 flex flex-wrap gap-2 sm:mt-auto'>
            {tags.map((tag) => (
              <li
                className='rounded-full bg-black/[0.7] px-3 py-2 text-[0.7rem] uppercase tracking-wider text-gray-50 dark:text-white/70'
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={image}
          alt='Project'
          quality={95}
          className='absolute -right-32 top-8 hidden w-[28rem] rounded-t-md object-cover shadow-xl transition group-even:-left-36 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:block'
        />
      </article>
    </motion.div>
  );
}
