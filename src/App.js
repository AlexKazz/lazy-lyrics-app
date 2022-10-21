import React, { useState } from 'react';
import Title from './components/Title';
import GenreButtons from './components/GenreButtons';
import LyricInput from './components/LyricInput';
import UserLyrics from './components/UserLyrics';
import Footer from './components/Footer';

function App() {
  const [lyrics, setLyrics] = useState('');

  return (
    <main className='bg-hero bg-no-repeat bg-cover bg-center bg-fixed flex flex-col h-screen'>
      <Title />
      {/* <GenreButtons /> */}
      <LyricInput lyrics={lyrics} setLyrics={setLyrics} />
      <div className='flex justify-center h-2/3'>
        <UserLyrics lyrics={lyrics} setLyrics={setLyrics} />
      </div>
      <Footer lyrics={lyrics} setLyrics={setLyrics} />
    </main>
  );
}

export default App;
