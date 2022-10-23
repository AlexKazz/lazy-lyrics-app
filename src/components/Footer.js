import React from 'react';

function Footer({ lyrics, setLyrics }) {
  const clearLyrics = () => {
    setLyrics('');
  };

  return (
    <div className='font-fell flex flex-wrap items-center mb-10 mt-32 pt-10 justify-evenly text-slate-500'>
      <button
        onClick={() => {
          navigator.clipboard.writeText(
            lyrics ? lyrics.map((lyric) => ' ' + lyric.lyric) : ''
          );
        }}
        className='shadow-lg bg-opacity-95 bg-white border border-slate-700 px-6 py-2 rounded-sm hover:bg-slate-100'
      >
        Copy
      </button>
      <button
        onClick={() => clearLyrics()}
        className='shadow-lg bg-opacity-95 bg-white border border-slate-700 px-6 py-2 rounded-sm hover:bg-slate-100'
      >
        Start Fresh
      </button>
    </div>
  );
}

export default Footer;
