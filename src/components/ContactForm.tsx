import { FaPaperPlane } from 'react-icons/fa6';
import SectionHeader from './SectionHeader';

export default function ContactForm() {
  return (
    <section id='contact' className='w-[min(100%, 38rem)] mb-28 text-center sm:mb-40'>
      <SectionHeader header='Contact me' />
      <p className='-mt-6 text-gray-700'>
        Please contact me directly at{' '}
        <a href='mailto:sutton.liam77@gmail.com' className='underline'>
          sutton.liam77@gmail.com
        </a>{' '}
        or through this form
      </p>
      <form className='mt-10 flex flex-col'>
        <input
          type='email'
          className='borderBlack h-14 rounded-lg p-4'
          placeholder='Your email...'
        />
        <textarea
          placeholder='Your message...'
          className='borderBlack my-3 h-52 rounded-lg p-4'
        ></textarea>
        <button
          className='group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline transition-all hover:scale-105 hover:bg-gray-800 focus:scale-105 active:scale-100'
          type='submit'
        >
          Submit{' '}
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1' />
        </button>
      </form>
    </section>
  );
}
