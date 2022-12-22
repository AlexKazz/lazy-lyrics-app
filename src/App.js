import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LyricInput from './components/LyricInput';
import UserLyrics from './components/UserLyrics';
import Footer from './components/Footer';

function App() {
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
                  <LyricInput />
                  <UserLyrics />
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
