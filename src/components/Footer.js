import React from 'react';

function Footer({ lyrics, setLyrics }) {
  const clearLyrics = () => {
    setLyrics('');
  };

  return (
    <div className='font-fell flex-grow flex justify-around'>
      <button
        onClick={() => {
          navigator.clipboard.writeText(
            lyrics ? lyrics.map((lyric) => ' ' + lyric.lyric) : ''
          );
        }}
        className='bg-custom-white border shadow-md shadow-slate-600 border-slate-700 px-6 m-16 rounded-lg hover:bg-orange-300 hover:scale-90'
      >
        Copy
      </button>
      <button
        onClick={() => clearLyrics()}
        className='bg-custom-white border shadow-md shadow-slate-600 border-slate-700 px-6 m-16 rounded-lg hover:bg-orange-300 hover:scale-90'
      >
        Start Fresh
      </button>
    </div>
  );
}

export default Footer;
