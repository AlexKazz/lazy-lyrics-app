import React, { useState, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

function LyricInput() {
  const [lyrics, setLyrics] = useState('');

  const addLyric = (e) => {
    e.preventDefault();
    if (e.target[0].value) {
      const newArr = [...lyrics, { id: uuidv4(), lyric: e.target[0].value }];
      setLyrics(newArr);
      e.target[0].value = '';
      //   console.log(newArr);
    }
  };

  const deleteLyric = (lyricId) => {
    let newArr = lyrics.filter((lyric) => lyricId !== lyric.id);
    setLyrics(newArr);
  };

  return (
    <div className='bg-red-400 w-1/3 flex-col justify-center px-2'>
      <form onSubmit={addLyric}>
        <input placeholder='Start typing!' type='text' />
        <input type='submit' value='' />
      </form>
      <div>
        {lyrics
          ? lyrics.map((lyric) => (
              <p key={uuidv4()}>
                {lyric.lyric}{' '}
                <button onClick={() => deleteLyric(lyric.id)}>❌</button>
              </p>
            ))
          : null}{' '}
      </div>
    </div>
  );
}

export default LyricInput;
