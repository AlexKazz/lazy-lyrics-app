import { useSelector, useDispatch } from "react-redux";
import { remove, selectLyrics } from "./lyricsSlice";

function LyricsMobile({ theme }) {
  const { lyricsList } = useSelector(selectLyrics);

  const dispatch = useDispatch();

  return (
    <div
      className={`font-fell w-2/3 shadow-md grow shadow-slate-400 overflow-y-auto max-h-0 min-h-full ${
        theme === "bg-hero"
          ? "text-slate-700 bg-white bg-opacity-95"
          : "text-white bg-slate-500"
      } rounded-sm py-9 px-10 text-center`}
    >
      {lyricsList
        ? lyricsList.map((lyric) => (
            <div key={lyric.id} className="py-1 group">
              <p className="group-hover:hidden">{lyric.snippet}</p>
              <div
                className={`hidden group-hover:block ${
                  theme === "bg-hero"
                    ? "hover:bg-slate-200"
                    : "text-white hover:bg-slate-400"
                }`}
              >
                <p className="italic">{lyric.prompt}</p>
                <p>
                  "{lyric.song}" by {lyric.artist}
                </p>
                <button
                  className="opacity-95 text-sm hover:underline items-center"
                  onClick={() => dispatch(remove(lyric))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default LyricsMobile;
