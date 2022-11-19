import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  lyric: '',
  song: '',
  artist: '',
  prompt: '',
};

export const lyricsSlice = createSlice({
  name: 'lyrics',
  initialState,
  reducers: {
    clear: (state) => {
      state.id = '';
      state.lyric = '';
      state.song = '';
      state.artist = '';
      state.prompt = '';
    },
    add: (state, action) => {
      state.id += action.payload.id;
      state.lyric += action.payload.lyric;
      state.song += action.payload.song;
      state.artist += action.payload.artist;
      state.prompt += action.payload.prompt;
    },
    remove: (state, action) => {
      state.id -= action.payload.id;
      state.lyric -= action.payload.lyric;
      state.song -= action.payload.song;
      state.artist -= action.payload.artist;
      state.prompt -= action.payload.prompt;
    },
  },
});

export const selectLyrics = (state) => state.lyrics;

export const { clear, add, remove } = lyricsSlice.actions;

export default lyricsSlice.reducer;
