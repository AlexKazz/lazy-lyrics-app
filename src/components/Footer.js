import React from 'react';

function Footer({ lyrics, setLyrics }) {
  const clearLyrics = () => {
    setLyrics('');
  };

  return (
    <div className='font-fell flex flex-wrap items-center my-16 mt-32 justify-evenly'>
      <button
        onClick={() => {
          navigator.clipboard.writeText(
            lyrics ? lyrics.map((lyric) => ' ' + lyric.lyric) : ''
          );
        }}
        className='bg-white border border-black px-6 py-2 rounded-sm hover:bg-slate-100'
      >
        Copy
      </button>
      <button
        onClick={() => clearLyrics()}
        className='bg-white border border-black px-6 py-2 rounded-sm hover:bg-slate-100'
      >
        Start Fresh
      </button>
    </div>
  );
}

export default Footer;
