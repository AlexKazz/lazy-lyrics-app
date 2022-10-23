import React from 'react';

function Navbar() {
  return (
    <div className='font-fell flex text-slate-500 items-center mt-5'>
      <a
        href='https://github.com/AlexKazz/lazy-lyrics-app'
        target='_blank'
        rel='noreferrer'
      >
        <div className='text-3xl ml-8 link link-underline link-underline-black hover:text-slate-400'>
          Lazy Lyrics
        </div>
      </a>
      <div className='flex'>
        <div className='mx-10 link link-underline link-underline-black hover:text-slate-400'>
          About
        </div>
      </div>
    </div>
  );
}

export default Navbar;
