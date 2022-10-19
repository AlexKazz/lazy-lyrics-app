import React from 'react';
import allGenres from '../data';

function GenreButtons() {
  return (
    <div className='font-raleway flex justify-center h-10 my-5'>
      {allGenres.map((genre) => (
        <button
          key={genre.id}
          className='bg-cyan-600 rounded-md px-2 mx-2 flex-grow-1'
        >
          {genre.genre}
        </button>
      ))}
    </div>
  );
}

export default GenreButtons;
