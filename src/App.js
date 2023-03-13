import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LyricInput from "./components/LyricInput";
import UserLyrics from "./components/UserLyrics";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
// import { toggleTheme } from './utils/lyricFunctions';

function App() {
  const [theme, setTheme] = useState("bg-hero");

  const toggleTheme = () => {
    if (theme === "bg-hero") {
      setTheme("bg-darkHero");
    } else {
      setTheme("bg-hero");
    }
  };

  return (
    <BrowserRouter>
      <main
        className={`${theme} bg-no-repeat bg-cover flex flex-col w-screen h-screen min-w-fit min-h-fit`}
      >
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <div className="flex flex-col items-center grow mb-60">
          <Routes>
            <Route
              exact
              path="/"
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
        <Sidebar theme={theme} toggleTheme={toggleTheme} />
      </main>
    </BrowserRouter>
  );
}

export default App;
