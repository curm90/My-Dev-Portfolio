import { projects } from '@/lib/data';
import Image from 'next/image';

type TProject = (typeof projects)[number];

export default function Project({ name, description, tags, image }: TProject) {
  return (
    <article className='group relative max-w-[50rem] overflow-hidden border border-black/5 bg-gray-100 transition even:pl-8 hover:bg-gray-200 sm:h-[21.25rem]'>
      <div className='flex h-full flex-col px-5 pb-7 pt-4 group-even:ml-[18rem] sm:max-w-[60%] sm:pl-10 sm:pr-2 sm:pt-10'>
        <h3 className='text-2xl font-semibold'>{name}</h3>
        <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
        <ul className='mt-auto flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <li
              className='rounded-full bg-black/[0.7] px-3 py-2 text-[0.7rem] uppercase tracking-wider text-gray-50'
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
        className='absolute -right-36 top-8 w-[28rem] rounded-t-md object-cover shadow-xl transition group-even:-left-36 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2'
      />
    </article>
  );
}
