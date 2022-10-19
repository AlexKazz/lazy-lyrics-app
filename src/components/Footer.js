import React from 'react';

function Footer({ lyrics, setLyrics }) {
  const clearLyrics = () => {
    setLyrics('');
  };

  return (
    <div className='font-raleway bg-violet-400 flex-grow flex justify-around'>
      <button
        onClick={() => {
          navigator.clipboard.writeText(
            lyrics.map((lyric) => ' ' + lyric.lyric)
          );
        }}
        className='bg-slate-500 p-8 m-6 hover:bg-slate-400'
      >
        Copy
      </button>
      <button
        onClick={() => clearLyrics()}
        className='bg-slate-500 p-8 m-6 hover:bg-slate-400'
      >
        Start Fresh
      </button>
    </div>
  );
}

export default Footer;
