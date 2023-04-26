import React from "react";
import { useDispatch } from "react-redux";
import { add } from "./lyricsSlice";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { fixer } from "../utils/lyricFunctions";
import ToolTip from "./ToolTip";

function LyricInput({ theme }) {
  const dispatch = useDispatch();

  async function getTrackId(e) {
    e.preventDefault();

    if (e.target[0].value) {
      const userInput = e.target[0].value.toLowerCase();

      let attempts = 0;
      let found = false;

      while (attempts < 5 && !found) {
        try {
          const res = await axios.get("/track", {
            params: {
              userInput: userInput,
            },
          });

          let randomIndex = Math.floor(
            Math.random() * res.data.message.body.track_list.length
          );
          const trackId =
            res.data.message.body.track_list[randomIndex].track.track_id;
          const artist =
            res.data.message.body.track_list[randomIndex].track.artist_name;
          const song =
            res.data.message.body.track_list[randomIndex].track.track_name;

          const newRes = await axios.get("/lyrics", {
            params: {
              trackId: trackId,
            },
          });

          const lyrics = newRes.data.message.body.lyrics.lyrics_body;
          const lines = lyrics.split("\n");

          let lineContainingWord = "";
          for (let line of lines) {
            if (line.toLowerCase().includes(userInput)) {
              lineContainingWord = line;
              break;
            }
          }

          if (lineContainingWord) {
            found = true;
            dispatch(
              add({
                id: uuidv4(),
                snippet: lineContainingWord,
                song: song,
                artist: artist,
                prompt: `"` + userInput + `"`,
              })
            );
          }

          e.target[0].value = "";
        } catch (err) {
          console.log(err);
        }
        attempts++;
      }

      if (!found) {
        alert("Couldn't find a lyric containing your word. Please try again.");
      }
    }
  }

  return (
    <div className="font-fell m-5 flex-col text-slate-600 shadow-black drop-shadow-lg">
      {window.innerWidth > 600 ? (
        <p
          className={`text-base italic text-center ${
            theme === "bg-hero" ? "text-slate-500" : "text-slate-300"
          }`}
        >
          Enter a word. Get back a lyric from a real song.
        </p>
      ) : null}
      <form
        onSubmit={getTrackId}
        className="justify-center content-center flex"
      >
        <input
          className="border h-8 border-slate-600 mt-5 mr-2 rounded-sm p-1 shadow-md opacity-95 shadow-slate-400"
          placeholder="Enter a word"
          type="text"
        />
        <input type="submit" value="" />

        <button
          onClick={() => getTrackId}
          className="border border-slate-600 bg-white shadow-lg bg-opacity-95 px-2 py-1 my-5 rounded-sm hover:bg-slate-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LyricInput;
