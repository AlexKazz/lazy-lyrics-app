import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clear } from './lyricsSlice';
import { copyLyrics } from '../utils/lyricFunctions';

function Footer() {
  const lyrics = useSelector((state) => state.lyrics);
  const dispatch = useDispatch();

  return (
    <div className='font-fell mt-6 pt-10 text-slate-600'>
      <button
        onClick={() => copyLyrics(lyrics)}
        className='shadow-lg bg-opacity-95 bg-white border border-slate-600 px-5 py-1 mr-5 rounded-sm hover:bg-slate-100'
      >
        Copy
      </button>

      <button
        onClick={() => dispatch(clear())}
        className='shadow-lg bg-opacity-95 bg-white border border-slate-600 px-5 py-1 rounded-sm hover:bg-slate-100'
      >
        Clear
      </button>
    </div>
  );
}

export default Footer;
