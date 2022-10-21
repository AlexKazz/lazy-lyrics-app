import React from 'react';

function UserLyrics({ lyrics, setLyrics }) {
  // const deleteLyric = (lyricId) => {
  //   let newArr = lyrics.filter((lyric) => lyricId !== lyric.id);
  //   setLyrics(newArr);
  // };
  console.log(lyrics);

  return (
    <div className='font-fell w-2/3 bg-custom-white border border-slate-700 rounded-xl text-center'>
      {lyrics
        ? lyrics.map((lyric) => (
            <div key={lyric.id}>
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
