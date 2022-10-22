import React from 'react';

function UserLyrics({ lyrics, setLyrics }) {
  // const deleteLyric = (lyricId) => {
  //   let newArr = lyrics.filter((lyric) => lyricId !== lyric.id);
  //   setLyrics(newArr);
  // };

  return (
    <div className='font-fell w-2/3 flex-col min-h-full shadow-lg overflow-y-auto bg-white bg-opacity-90 rounded-sm py-9 px-10 text-center'>
      {lyrics
        ? lyrics.map((lyric) => (
            <div key={lyric.id} className='py-1'>
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
