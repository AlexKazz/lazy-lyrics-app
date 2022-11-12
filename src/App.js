import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import LyricInput from './components/LyricInput';
import UserLyrics from './components/UserLyrics';
import Footer from './components/Footer';

function App() {
  const [lyrics, setLyrics] = useState('');

  return (
    <BrowserRouter>
      <main className='bg-hero bg-no-repeat bg-cover flex flex-col w-screen h-screen min-w-fit min-h-fit'>
        <Navbar />
        <div className='flex flex-col items-center grow mb-60'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <LyricInput lyrics={lyrics} setLyrics={setLyrics} />
                  <UserLyrics lyrics={lyrics} setLyrics={setLyrics} />
                  <Footer lyrics={lyrics} setLyrics={setLyrics} />
                </>
              }
            />
            <Route exact path='/about' element={<About />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
