import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clear } from "./lyricsSlice";
import { copyLyrics } from "../utils/lyricFunctions";
import { ToastContainer } from "react-toastify";
import ToolTip from "./ToolTip";

function Footer() {
  const lyrics = useSelector((state) => state.lyrics);
  const dispatch = useDispatch();

  return (
    <div className="font-fell mt-6 text-slate-600 flex">
      <button
        onClick={() => copyLyrics(lyrics)}
        className="shadow-lg bg-opacity-95 bg-white border border-slate-600 px-5 py-1 mr-5 rounded-sm hover:bg-slate-200"
      >
        Copy All
      </button>

      <ToastContainer position="bottom-left" theme="light" autoClose={1000} />

      <button
        onClick={() => dispatch(clear())}
        className="shadow-lg bg-opacity-95 bg-white border border-slate-600 px-5 py-1 rounded-sm hover:bg-slate-200"
      >
        Delete All
      </button>
    </div>
  );
}

export default Footer;
