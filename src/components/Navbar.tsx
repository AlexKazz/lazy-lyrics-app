import React from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className='font-fell flex text-slate-600 items-center mt-5 shadow-black drop-shadow-lg'>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        <div className='text-3xl ml-8 link link-underline link-underline-black hover:text-slate-400'>
          Lazy Lyrics
        </div>
      </button>
      <div className='flex'>
        <div className='mx-10 link link-underline link-underline-black hover:text-slate-400'>
          <a
            href='https://github.com/AlexKazz/lazy-lyrics-app'
            target='_blank'
            rel='noreferrer'
            className='link link-underline  hover:text-slate-300'
          >
            About
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
