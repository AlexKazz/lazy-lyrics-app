import React from 'react';

function Footer({ lyrics, setLyrics }) {
  const clearLyrics = () => {
    setLyrics('');
  };

  const copyLyrics = (lyrics) => {
    const array = lyrics.map((lyric) => lyric.lyric + '\n');
    const string = array.toString();
    const finalString = string.replaceAll(',', '');
    navigator.clipboard.writeText(finalString);
  };

  return (
    <div className='font-fell flex mt-6 pt-10 text-slate-500'>
      <button
        onClick={() => copyLyrics(lyrics)}
        className='shadow-lg bg-opacity-95 bg-white border border-slate-400 px-5 mx-10 py-2 rounded-sm hover:bg-slate-100'
      >
        Copy
      </button>
      {/* <button
        onClick={() => {
          navigator.clipboard.writeText(
            lyrics ? lyrics.map((lyric) => lyric.lyric + '\n') : ''
          );
        }}
        className='shadow-lg bg-opacity-95 bg-white border border-slate-400 px-5 mx-10 py-2 rounded-sm hover:bg-slate-100'
      >
        Copy
      </button> */}
      <button
        onClick={() => clearLyrics()}
        className='shadow-lg bg-opacity-95 bg-white border border-slate-400 px-5 mx-10 py-2 rounded-sm hover:bg-slate-100'
      >
        Clear
      </button>
    </div>
  );
}

export default Footer;
