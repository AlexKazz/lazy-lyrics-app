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
  async function getTrackId(e) {
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * 10);
    if (e.target[0].value)
      try {
        const res = await axios.get('/track', {
          params: {
            userInput: e.target[0].value,
          },
        });

        const trackId =
          res.data.message.body.track_list[randomIndex].track.track_id;
        const artist =
          res.data.message.body.track_list[randomIndex].track.artist_name;
        const song =
          res.data.message.body.track_list[randomIndex].track.track_name;

        console.log('trackId inside func 1️⃣', trackId);

        getTrackLyrics();
        async function getTrackLyrics() {
          try {
            console.log('trackId inside func 2️⃣', trackId);
            const newRes = await axios.get('/lyrics', {
              params: {
                trackId: trackId,
              },
            });

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
          onClick={() => getTrackId}
          className='bg-white shadow-lg bg-opacity-95 border border-slate-400 px-2 py-1 my-5 rounded-sm hover:bg-slate-100'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LyricInput;
