'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { motion } from 'framer-motion';
import useSectionView from '@/hooks/useSectionInView';
import { useActiveSectionContext } from '@/contexts/ActiveSection';

export default function Intro() {
  const { ref } = useSectionView('Home', 0.5);
  const { setActiveTab, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id='home' className='scroll-mt-96'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src='/images/me.jpeg'
              alt='Me'
              width={200}
              height={200}
              className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl'
              quality={95}
              priority
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', duration: 0.7, delay: 0.1, stiffness: 125 }}
            className='absolute -bottom-2 right-1 text-4xl'
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className='mx-auto my-8 max-w-[60rem] text-center text-2xl sm:text-4xl'
      >
        <span className='font-bold'>Hi, I&apos;m Liam.</span> I&apos;m a{' '}
        <span className='font-bold'>full-stack developer</span> with{' '}
        <span className='font-bold'>5 years</span> of experience building dynamic and{' '}
        <span className='italic'>scalable web applications.</span> I specialize in{' '}
        <span className='italic underline'>React (Next.js)</span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className='flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium text-gray-700 sm:flex-row'
      >
        <Link
          className='group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-gray-50 shadow-lg outline-none transition hover:scale-105 hover:bg-gray-800 focus:scale-105 active:scale-100'
          href='#contact'
          onClick={() => {
            setActiveTab('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{' '}
          <BsArrowRight className='opacity-70 transition group-hover:translate-x-1' />
        </Link>
        <a
          href='/cv.pdf'
          download
          className='group flex cursor-pointer items-center gap-2 rounded-full bg-gray-50 px-7 py-3 shadow-lg transition hover:scale-105 hover:text-gray-950 focus:scale-105 active:scale-100 dark:bg-white/10 dark:text-gray-50'
        >
          Download CV <HiDownload className='opacity-60 transition group-hover:translate-y-1' />
        </a>
        <div className='flex items-center gap-2'>
          <a
            href='https://www.linkedin.com/in/liam-sutton90/'
            rel='noreferer'
            target='_blank'
            className='flex cursor-pointer items-center rounded-full bg-gray-50 p-4 shadow-lg transition hover:scale-[1.15] hover:text-gray-900 focus:scale-[1.15] dark:bg-white/10 dark:text-gray-50'
          >
            <BsLinkedin />
          </a>
          <a
            href='https://github.com/curm90'
            rel='noreferer'
            target='_blank'
            className='flex cursor-pointer items-center rounded-full bg-gray-50 p-4 shadow-lg transition hover:scale-[1.15] hover:text-gray-900 focus:scale-[1.15] dark:bg-white/10 dark:text-gray-50'
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
