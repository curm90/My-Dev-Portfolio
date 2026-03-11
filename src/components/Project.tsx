'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import { BiCode } from 'react-icons/bi';
import { projects } from '@/lib/data';

type TProject = (typeof projects)[number];

const projectAnimationVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: 'easeOut',
    },
  },
};

export default function Project({
  name,
  description,
  tags,
  icon,
  codeUrl,
  liveUrl,
  year,
}: TProject) {
  return (
    <motion.div
      variants={projectAnimationVariants}
      className='bg-card group flex flex-col rounded-lg border border-gray-200 p-4 transition-all duration-300 hover:shadow-sm dark:border-gray-600'
    >
      <div className='mb-3 flex items-start justify-between'>
        <div className='flex h-8 w-8 items-center justify-center rounded-md bg-gray-200 text-xl dark:bg-gray-600'>
          {icon || <BiCode className='h-4 w-4' />}
        </div>

        <div className='flex space-x-1'>
          {/* {featured && (
            <div className='text-primary flex items-center'>
              <Bookmark className='h-4 w-4' />
            </div>
          )} */}
          <span className='text-sm text-gray-700 dark:text-white/60'>{year}</span>
        </div>
      </div>

      <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white/75'>{name}</h3>
      <p className='text-muted-foreground text-md mb-3 text-gray-600 dark:text-white/75'>
        {description}
      </p>

      <div className='mt-auto'>
        <div className='mb-6 flex flex-wrap gap-1.5'>
          {tags.map((tag) => (
            <span
              key={tag}
              className='text-muted-foreground inline-flex items-center rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-700 dark:bg-gray-600 dark:text-gray-200'
            >
              {tag}
            </span>
          ))}
        </div>

        <div className='flex items-center justify-between'>
          <Link
            href={liveUrl || codeUrl || '#'}
            target='_blank'
            rel='noopener noreferrer'
            className='group inline-flex items-center text-sm font-semibold text-gray-700 transition hover:text-gray-900 dark:text-white/75 dark:hover:text-white/90'
          >
            View project
            <BsArrowUpRight className='ml-1 h-3 w-3 text-gray-700 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-white/75 dark:hover:text-white/90' />
          </Link>

          <div className='flex items-center gap-2'>
            {codeUrl && (
              <a
                href={codeUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 transition-colors hover:text-gray-900 dark:text-white/60 dark:hover:text-white/90'
                aria-label={`View ${name} code on GitHub`}
              >
                <BsGithub className='h-4 w-4' />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 transition-colors hover:text-gray-900 dark:text-white/60 dark:hover:text-white/90'
                aria-label={`View ${name} live demo`}
              >
                <FiExternalLink className='h-4 w-4' />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
