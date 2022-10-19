import React, { useState } from 'react';
import Title from './components/Title';
import GenreButtons from './components/GenreButtons';
import LyricInput from './components/LyricInput';
import UserLyrics from './components/UserLyrics';
import Footer from './components/Footer';

function App() {
  const [lyrics, setLyrics] = useState('');

  return (
    <main className='bg-slate-300 flex flex-col h-screen'>
      <Title />
      <GenreButtons />
      <div className='flex h-2/3'>
        <LyricInput lyrics={lyrics} setLyrics={setLyrics} />
        <UserLyrics lyrics={lyrics} setLyrics={setLyrics} />
      </div>
      <Footer lyrics={lyrics} setLyrics={setLyrics} />
    </main>
  );
}

export default App;
