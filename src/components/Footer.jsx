import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clear } from './lyricsSlice';
import { copyLyrics } from '../utils/lyricFunctions';
import { ToastContainer } from 'react-toastify';
import ToolTip from './ToolTip';

function Footer() {
  const lyrics = useSelector((state) => state.lyrics);
  const dispatch = useDispatch();

  return (
    <div className='font-fell mt-6 pt-10 text-slate-600 flex'>
      <ToolTip tooltip='Copy all lyrics to clipboard'>
        <button
          onClick={() => copyLyrics(lyrics)}
          className='shadow-lg bg-opacity-95 bg-white border border-slate-600 px-5 py-1 mr-5 rounded-sm hover:bg-slate-100'
        >
          Copy
        </button>
      </ToolTip>
      <ToastContainer position='bottom-left' theme='colored' autoClose={1000} />
      <ToolTip tooltip='Delete all lyrics'>
        <button
          onClick={() => dispatch(clear())}
          className='shadow-lg bg-opacity-95 bg-white border border-slate-600 px-5 py-1 rounded-sm hover:bg-slate-100'
        >
          Clear
        </button>
      </ToolTip>
    </div>
  );
}

export default Footer;
