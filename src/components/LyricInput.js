import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

function fixer(str) {
  const punctuation = ['.', ',', '!', '?', ':', ';', '('];
  for (const el of punctuation)
    if (str.includes(el)) {
      return str.substring(0, str.indexOf(el));
    }
  return str;
}

function LyricInput({ setLyrics, lyrics }) {
  async function getTrackIdBtn(e) {
    const randomPage = Math.ceil(Math.random() * 10);
    const randomIndex = Math.floor(Math.random() * 10);
    if (e.target[0].value)
      try {
        const res = await axios.get(
          `http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${e}&page=${randomPage}&apikey=${process.env.REACT_APP_MM_KEY}`
        );
        const trackId =
          res.data.message.body.track_list[randomIndex].track.track_id;

        const artist =
          res.data.message.body.track_list[randomIndex].track.artist_name;

        const song =
          res.data.message.body.track_list[randomIndex].track.track_name;

        getTrackLyrics();
        async function getTrackLyrics() {
          try {
            const newRes = await axios.get(
              `http://api.musixmatch.com/ws/1.1/track.snippet.get?track_id=${trackId}&apikey=${process.env.REACT_APP_MM_KEY}`
            );
            const snippet = newRes.data.message.body.snippet.snippet_body;
            const fixedSnippet = fixer(snippet);
            const newArr = [
              ...lyrics,
              {
                id: uuidv4(),
                lyric: fixedSnippet,
                song: song,
                artist: artist,
                prompt: e.target[0].value,
              },
            ];

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
    const randomPage = Math.ceil(Math.random() * 10);
    const randomIndex = Math.floor(Math.random() * 10);
    if (e.target[0].value)
      try {
        const res = await axios.get(
          `http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${e.target[0].value}&page=${randomPage}&apikey=${process.env.REACT_APP_MM_KEY}`
        );
        const trackId =
          res.data.message.body.track_list[randomIndex].track.track_id;

        const artist =
          res.data.message.body.track_list[randomIndex].track.artist_name;

        const song =
          res.data.message.body.track_list[randomIndex].track.track_name;

        getTrackLyrics();
        async function getTrackLyrics() {
          try {
            const newRes = await axios.get(
              `http://api.musixmatch.com/ws/1.1/track.snippet.get?track_id=${trackId}&apikey=${process.env.REACT_APP_MM_KEY}`
            );
            const snippet = newRes.data.message.body.snippet.snippet_body;
            const fixedSnippet = fixer(snippet);
            const newArr = [
              ...lyrics,
              {
                id: uuidv4(),
                lyric: fixedSnippet,
                song: song,
                artist: artist,
                prompt: e.target[0].value,
              },
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
    <div className='font-fell flex text-slate-500 shadow-black drop-shadow-lg'>
      <form onSubmit={getTrackId}>
        <input
          className='mt-10 mr-2 rounded-sm p-1 shadow-md opacity-95 shadow-slate-400'
          placeholder='Enter a word'
          type='text'
        />
        <input type='submit' value='' />
        <button
          onClick={() => getTrackIdBtn()}
          className='bg-white shadow-lg bg-opacity-95 border border-slate-400 px-2 py-1 my-5 rounded-sm hover:bg-slate-100'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LyricInput;
