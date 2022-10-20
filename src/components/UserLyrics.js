import React from 'react';

function UserLyrics({ lyrics, setLyrics }) {
  // const deleteLyric = (lyricId) => {
  //   let newArr = lyrics.filter((lyric) => lyricId !== lyric.id);
  //   setLyrics(newArr);
  // };

  return (
    <div className='font-fell w-2/3 bg-custom-white border border-slate-700 rounded-xl text-center mr-4'>
      {lyrics
        ? lyrics.map((lyric) => (
            <div key={lyric.id} className=''>
              {lyric.lyric}
              {/* <button
                className='opacity-25 text-xs pl-5'
                onClick={() => deleteLyric(lyric.id)}
              >
                ❌
              </button> */}
            </div>
          ))
        : null}
    </div>
  );
}

export default UserLyrics;
