import React, { useState } from 'react';
import Navbar from './components/Navbar';
import GenreButtons from './components/GenreButtons';
import LyricInput from './components/LyricInput';
import UserLyrics from './components/UserLyrics';
import Footer from './components/Footer';

function App() {
  const [lyrics, setLyrics] = useState('');

  return (
    <main className='bg-hero bg-no-repeat bg-cover flex flex-col h-screen max-h-screen min-w-fit'>
      <Navbar />
      {/* <GenreButtons /> */}
      <div className='flex flex-col items-center h-2/3 max-h-fit'>
        <LyricInput lyrics={lyrics} setLyrics={setLyrics} />
        <UserLyrics lyrics={lyrics} setLyrics={setLyrics} />
      </div>
      <Footer lyrics={lyrics} setLyrics={setLyrics} />
    </main>
  );
}

export default App;
