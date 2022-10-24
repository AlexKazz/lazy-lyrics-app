import React from 'react';

function About() {
  return (
    <div className='text-slate-400 font-fell m-24 text-center text-3xl'>
      <p>
        Lazy Lyrics uses a third party lyric API to grab a random lyric snippet
        based on one word you input. The lyrics are from real songs.
      </p>
      <p className='mt-20'>
        <a
          href='https://github.com/AlexKazz/lazy-lyrics-app'
          target='_blank'
          rel='noreferrer'
          className='link link-underline link-underline-black hover:text-slate-300'
        >
          Click here to view the source code
        </a>
      </p>
    </div>
  );
}

export default About;
