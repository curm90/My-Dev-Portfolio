'use client';

import { links } from '@/lib/data';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='relative z-[999px]'>
      <motion.div
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        className='fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'
      >
        <nav className='flex h-full items-center justify-center'>
          <ul className='flex h-full w-full flex-wrap items-center justify-center gap-1 text-gray-500'>
            {links.map((link) => (
              <li key={link.link}>
                <Link className='p-3 transition hover:text-gray-400' href={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
