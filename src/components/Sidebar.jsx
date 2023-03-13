import { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-3xl text-black items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed z-30 flex items-center cursor-pointer right-10 top-6"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <AiOutlineQuestionCircle className="text-6xl text-slate-500" />
        </svg>
      )}

      <div
        className={`overflow-y-auto shadow-md shadow-slate-400 top-0 right-0 w-[35vw] bg-white  p-10 pl-20 text-white fixed h-full z-40 ease-in-out duration-300
        ${showSidebar ? "translate-x-0 " : "translate-x-full"}`}
      >
        <h3 className="mt-10 text-lg font-fell text-black">
          <p className="mb-5">
            • Lazy Lyrics uses the Musixmatch API to grab lyric snippets based
            on text input.
          </p>
          <p className="mb-5">
            • When you submit a word, an API call is made from the Lazy Lyrics
            server to Musixmatch, which then returns the song information.
          </p>
          <p className="mb-5">
            • Lazy lyrics generates a random index and random page number for
            each submission to provide ~100 different results for the same word.
          </p>
          <p className="mb-5">
            • Due to limitations on how Musixmatch makes its data available, the
            lyrics returned may not always contain your prompt word. In those
            cases, your prompt word is somewhere else in the song, typically
            shortly before or after the lyric returned.
          </p>
        </h3>
      </div>
    </>
  );
};

export default Sidebar;
