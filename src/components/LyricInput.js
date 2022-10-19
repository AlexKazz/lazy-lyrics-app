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
    <div className='font-raleway border border-slate-700 rounded-xl mx-4 bg-custom-white w-1/3 flex justify-center'>
      <form onSubmit={addLyric}>
        <input
          className='my-5 ml-3 w-10/12 rounded-md p-1'
          placeholder='Enter a word!'
          type='text'
        />
        <input type='submit' value='' />
      </form>
      {/* <button onClick={() => addLyric()}>Submit</button> */}
    </div>
  );
}

export default LyricInput;
