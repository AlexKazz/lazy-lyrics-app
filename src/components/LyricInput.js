import React, { useState, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

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

  async function getAPILyric() {
    try {
      const res = await axios.get(
        `http://api.musixmatch.com/ws/1.1/track.search?q_artist=Toto&q_track=Rosanna&apikey=${process.env.REACT_APP_MM_KEY}`
      );
      console.log('res 👉', res);
      setLyrics(res.data.message.body.lyrics);
    } catch (err) {
      console.log(err);
    }
  }

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
      {/* <button
        className='bg-custom-white h-2/5 border shadow-md shadow-slate-600 border-slate-700 px-6 mt-52 mr-10 rounded-2xl hover:bg-orange-300 hover:scale-90'
        onClick={() => getAPILyric()}
      >
        Get API Lyric
      </button> */}
    </div>
  );
}

export default LyricInput;
