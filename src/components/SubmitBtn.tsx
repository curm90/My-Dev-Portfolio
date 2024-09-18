import { useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa6';

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      className='group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-none outline transition-all hover:scale-105 hover:bg-gray-800 focus:scale-105 active:scale-100 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10'
      type='submit'
      disabled={pending}
    >
      {pending ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
      ) : (
        <>
          Submit
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1' />
        </>
      )}
    </button>
  );
}
