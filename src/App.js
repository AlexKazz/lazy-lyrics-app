import React from 'react';
import Title from './components/Title';
import GenreButtons from './components/GenreButtons';
import LyricInput from './components/LyricInput';
import UserLyrics from './components/UserLyrics';
import Footer from './components/Footer';

function App() {
  return (
    <main className='bg-slate-300 flex flex-col h-screen justify-between'>
      <Title />
      <GenreButtons />
      <div className='flex h-2/3'>
        <LyricInput />
        <UserLyrics />
      </div>
      <Footer />
    </main>
  );
}

export default App;
