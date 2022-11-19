import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const lyricsSlice = createSlice({
  name: 'lyrics',
  initialState,
  reducers: {
    clear: (state) => {
      return [];
    },
    add: (state, action) => {
      state.push({
        id: action.payload.id,
        snippet: action.payload.snippet,
        song: action.payload.song,
        artist: action.payload.artist,
        prompt: action.payload.prompt,
      });
    },
    remove: (state, action) => {},
  },
});

export const selectLyrics = (state) => state.lyrics;

export const { clear, add, remove } = lyricsSlice.actions;

export default lyricsSlice.reducer;
