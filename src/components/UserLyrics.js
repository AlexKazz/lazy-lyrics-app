import React from 'react';

function UserLyrics({ lyrics, setLyrics }) {
  const deleteLyric = (lyricId) => {
    let newArr = lyrics.filter((lyric) => lyricId !== lyric.id);
    setLyrics(newArr);
  };

  return (
    <div className='font-raleway w-2/3 bg-lime-400 text-center'>
      {lyrics
        ? lyrics.map((lyric) => (
            <div key={lyric.id} className=''>
              {lyric.lyric}
              <button
                className='opacity-25 text-xs pl-5'
                onClick={() => deleteLyric(lyric.id)}
              >
                ❌
              </button>
            </div>
          ))
        : null}
    </div>
  );
}

export default UserLyrics;
