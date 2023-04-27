import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

const initialState = {
  lyricsList: [],
  loading: false,
};

export const lyricsSlice = createSlice({
  name: "lyrics",
  initialState,
  reducers: {
    clear: (state) => {
      state.lyricsList = [];
    },
    add: produce((state, action) => {
      state.lyricsList.push(action.payload);
    }),

    remove: (state, action) => {
      state.lyricsList = state.lyricsList.filter(
        (lyric) => lyric.id !== action.payload.id
      );
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const selectLyrics = (state) => ({
  lyricsList: state.lyrics.lyricsList,
  loading: state.lyrics.loading,
});

export const { clear, add, remove, setLoading } = lyricsSlice.actions;

export default lyricsSlice.reducer;
