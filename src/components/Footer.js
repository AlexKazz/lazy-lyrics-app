import React from 'react';

function Footer({ lyrics, setLyrics }) {
  const clearLyrics = () => {
    setLyrics('');
  };

  return (
    <div className='font-raleway bg-gray-300 flex-grow flex justify-around'>
      <button
        onClick={() => {
          navigator.clipboard.writeText(
            lyrics ? lyrics.map((lyric) => ' ' + lyric.lyric) : ''
          );
        }}
        className='bg-custom-white border shadow-md shadow-slate-600 border-slate-700 px-6 m-10 rounded-2xl hover:bg-orange-300 hover:scale-90'
      >
        Copy
      </button>
      <button
        onClick={() => clearLyrics()}
        className='bg-custom-white border shadow-md shadow-slate-600 border-slate-700 px-6 m-10 rounded-2xl hover:bg-orange-300 hover:scale-90'
      >
        Start Fresh
      </button>
    </div>
  );
}

export default Footer;
