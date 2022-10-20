import React from 'react';
import allGenres from '../data';

function GenreButtons() {
  return (
    <div className='font-raleway flex justify-center h-10 my-3'>
      {allGenres.map((genre) => (
        <button
          key={genre.id}
          className='bg-custom-white border shadow-md shadow-slate-600 border-slate-700 hover:bg-orange-300 hover:scale-90 rounded-lg px-2 mx-2 flex-grow-1'
        >
          {genre.genre}
        </button>
      ))}
    </div>
  );
}

export default GenreButtons;
