'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section>
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
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className='mx-auto my-8 max-w-[60rem] text-center text-2xl sm:text-4xl'
      >
        <span className='font-bold'>Hi, I&apos;m Liam.</span> I&apos;m a{' '}
        <span className='font-bold'>full-stack developer</span> with{' '}
        <span className='font-bold'>5 years</span> of experience building dynamic and{' '}
        <span className='italic'>scalable web applications.</span> I specialize in creating{' '}
        <span className='italic underline'>React (Next.js)</span>
      </motion.p>
    </section>
  );
}
