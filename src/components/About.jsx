import React from 'react';

function About() {
  return (
    <div className='flex flex-col text-slate-400 font-fell text-center text-base shadow-black drop-shadow-lg mt-24 mb-40 mx-6 overflow-hidden'>
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