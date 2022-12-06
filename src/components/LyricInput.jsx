import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from './lyricsSlice';
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

function LyricInput() {
  const dispatch = useDispatch();

  let randomIndex = Math.floor(Math.random() * 10);
  async function getTrackId(e) {
    e.preventDefault();
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

        getTrackLyrics();
        async function getTrackLyrics() {
          try {
            const newRes = await axios.get('/lyrics', {
              params: {
                trackId: trackId,
              },
            });

            const snippet = newRes.data.message.body.snippet.snippet_body;
            const fixedSnippet = fixer(snippet);
            dispatch(
              add({
                id: uuidv4(),
                snippet: fixedSnippet,
                song: song,
                artist: artist,
                prompt: e.target[0].value,
              })
            );

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
    <div className='font-fell flex text-slate-600 shadow-black drop-shadow-lg'>
      <form onSubmit={getTrackId}>
        <input
          className='border border-slate-600 mt-10 mr-2 rounded-sm p-1 shadow-md opacity-95 shadow-slate-400'
          placeholder='Enter a word'
          type='text'
        />
        <input type='submit' value='' />
        <button
          onClick={() => getTrackId}
          // onClick={() =>
          //   dispatch(
          //     add({
          //       id: uuidv4(),
          //       snippet: 'fixedSnippet',
          //       song: 'song',
          //       artist: 'artist',
          //       prompt: 'e.target[0].value',
          //     })
          //   )
          // }
          className='border border-slate-600 bg-white shadow-lg bg-opacity-95 px-2 py-1 my-5 rounded-sm hover:bg-slate-100'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LyricInput;
