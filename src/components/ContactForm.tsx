'use client';

import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import useSectionView from '@/hooks/useSectionInView';
import { sendEmail } from '@/actions/contactForm';
import SectionHeader from './SectionHeader';
import SubmitBtn from './SubmitBtn';

export default function ContactForm() {
  const { ref } = useSectionView('Contact');

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id='contact'
      className='w-[min(100%, 38rem)] mb-28 text-center sm:mb-40'
    >
      <SectionHeader header='Contact me' />
      <p className='-mt-6 text-gray-700 dark:text-white/80'>
        Please contact me directly at{' '}
        <a href='mailto:sutton.liam77@gmail.com' className='underline'>
          sutton.liam77@gmail.com
        </a>{' '}
        or through this form
      </p>
      <form
        className='mt-10 flex flex-col dark:text-gray-950'
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully');
        }}
      >
        <input
          name='email'
          type='email'
          className='borderBlack h-14 rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100'
          placeholder='Your email...'
          required
          maxLength={500}
        />
        <textarea
          name='message'
          placeholder='Your message...'
          className='borderBlack my-3 h-52 rounded-lg p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100'
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
