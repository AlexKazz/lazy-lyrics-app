import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const lyricsSlice = createSlice({
  name: 'lyrics',
  initialState,
  reducers: {
    clear: () => {
      return [];
    },
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter((lyric) => lyric.id !== action.payload.id);
    },
  },
});

export const selectLyrics = (state) => state.lyrics;

export const { clear, add, remove } = lyricsSlice.actions;

export default lyricsSlice.reducer;
