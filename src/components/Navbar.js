import React from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import About from './About';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className='font-fell flex text-slate-500 items-center mt-5 shadow-black drop-shadow-lg'>
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
          <button
            onClick={() => {
              navigate('/about');
            }}
          >
            About
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
