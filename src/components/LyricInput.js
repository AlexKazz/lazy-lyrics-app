import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

function LyricInput({ setLyrics, lyrics }) {
  async function getTrackIdBtn(e) {
    const randomNum = Math.floor(Math.random() * 10);
    try {
      const res = await axios.get(
        `http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${e}&apikey=${process.env.REACT_APP_MM_KEY}`
      );
      const trackId =
        res.data.message.body.track_list[randomNum].track.track_id;

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

        const artist =
          res.data.message.body.track_list[randomNum].track.artist_name;

        getTrackLyrics();
        async function getTrackLyrics() {
          try {
            const newRes = await axios.get(
              `http://api.musixmatch.com/ws/1.1/track.snippet.get?track_id=${trackId}&apikey=${process.env.REACT_APP_MM_KEY}`
            );
            const snippet = newRes.data.message.body.snippet.snippet_body;
            console.log('👉', newRes.data.message.body);
            const newArr = [
              ...lyrics,
              { id: uuidv4(), lyric: snippet, artist: artist },
            ];
            setLyrics(newArr);
            e.target[0].value = '';
          } catch (err) {
            console.log(err);
          }
        }
      } catch (err) {
        console.log(err);
      }
  }

  return (
    <div className='font-fell flex justify-center'>
      <form onSubmit={getTrackId}>
        <input
          className='my-5 rounded-md p-1'
          placeholder='Enter a word!'
          type='text'
        />
        <input type='submit' value='' />
        <button
          onClick={() => getTrackIdBtn()}
          className='bg-custom-white border shadow-md shadow-slate-600 border-slate-700 px-2 my-5 mx-2 rounded-lg hover:bg-orange-300'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LyricInput;
