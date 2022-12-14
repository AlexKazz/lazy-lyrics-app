import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, selectLyrics } from './lyricsSlice';

function UserLyrics() {
  const lyrics = useSelector(selectLyrics);
  const dispatch = useDispatch();

  return (
    <div className='font-fell w-2/3 shadow-md grow shadow-slate-400 overflow-y-auto max-h-0 min-h-full bg-white bg-opacity-95 rounded-sm py-9 px-10 text-center'>
      {lyrics
        ? lyrics.map((lyric) => (
            <div key={lyric.id} className='py-1 group'>
              <p className='group-hover:hidden'>{lyric.snippet}</p>
              <div className='hidden group-hover:block hover:bg-slate-200'>
                <p className='italic'>{lyric.prompt}</p>
                <p>
                  "{lyric.song}" by {lyric.artist}
                </p>
                <button
                  className='opacity-50 text-sm hover:underline items-center'
                  onClick={() => dispatch(remove(lyric))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default UserLyrics;
