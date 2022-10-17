import React from 'react';
import allGenres from '../data';

function GenreButtons() {
  return (
    <div className='h-1/6 mt-11 flex justify-center'>
      {allGenres.map((genre) => (
        <button className='bg-cyan-600 rounded-full p-10 m-5'>
          {genre.genre}
        </button>
      ))}
    </div>
  );
}

export default GenreButtons;
