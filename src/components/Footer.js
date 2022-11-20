import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clear } from './lyricsSlice';

function Footer() {
  const lyrics = useSelector((state) => state.lyrics);
  const dispatch = useDispatch();
  // const clearLyrics = () => {
  //   setLyrics('');
  // };

  const copyLyrics = (lyrics) => {
    console.log(lyrics[0].snippet);
    const array = lyrics.map((lyric) => lyric.snippet + '\n');
    const string = array.toString();
    const finalString = string.replaceAll(',', '');
    navigator.clipboard.writeText(finalString);
  };

  // px-5 mx-10 py-2

  return (
    <div className='font-fell mt-6 pt-10 text-slate-500'>
      <button
        onClick={() => copyLyrics(lyrics)}
        className='shadow-lg bg-opacity-95 bg-white border border-slate-400 px-5 py-1 mr-5 rounded-sm hover:bg-slate-100'
      >
        Copy
      </button>

      <button
        onClick={() => dispatch(clear())}
        className='shadow-lg bg-opacity-95 bg-white border border-slate-400 px-5 py-1 rounded-sm hover:bg-slate-100'
      >
        Clear
      </button>
    </div>
  );
}

export default Footer;
