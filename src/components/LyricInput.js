import React, { useState, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

function LyricInput({ setLyrics, lyrics }) {
  // const [lyrics, setLyrics] = useState('');

  const addLyric = (e) => {
    e.preventDefault();
    if (e.target[0].value) {
      const newArr = [...lyrics, { id: uuidv4(), lyric: e.target[0].value }];
      setLyrics(newArr);
      e.target[0].value = '';
    }
  };

  return (
    <div className='bg-red-400 w-1/3 '>
      <form onSubmit={addLyric}>
        <input className='flex m-3' placeholder='Start typing!' type='text' />
        <input type='submit' value='' />
      </form>
    </div>
  );
}

export default LyricInput;
