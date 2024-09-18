'use client';

import { useThemeContext } from '@/contexts/ThemeContext';
import { BsMoon, BsSun } from 'react-icons/bs';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      className='fixed bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-[1.05] dark:bg-gray-950'
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
}
