import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

function LyricInput({ setLyrics, lyrics }) {
  async function getTrackId(e) {
    e.preventDefault();

    const randomNum = Math.floor(Math.random() * 10);

    if (e.target[0].value)
      try {
        const res = await axios.get(
          `http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${e.target[0].value}&apikey=${process.env.REACT_APP_MM_KEY}`
        );
        const trackId =
          res.data.message.body.track_list[randomNum].track.track_id;
        console.log(res.data.message.body.track_list);
        getTrackLyrics();
        async function getTrackLyrics() {
          try {
            const newRes = await axios.get(
              `http://api.musixmatch.com/ws/1.1/track.snippet.get?track_id=${trackId}&apikey=${process.env.REACT_APP_MM_KEY}`
            );
            const snippet = newRes.data.message.body.snippet.snippet_body;
            const newArr = [...lyrics, { id: uuidv4(), lyric: snippet }];
            setLyrics(newArr);
          } catch (err) {
            console.log(err);
          }
        }
      } catch (err) {
        console.log(err);
      }
  }

  return (
    <div className='font-fell border border-slate-700 rounded-xl mx-4 bg-custom-white w-1/3 flex justify-center'>
      <form onSubmit={getTrackId}>
        <input
          className='my-5 ml-3 w-10/12 rounded-md p-1'
          placeholder='Enter a word!'
          type='text'
        />
        <input type='submit' value='' />
      </form>
    </div>
  );
}

export default LyricInput;
