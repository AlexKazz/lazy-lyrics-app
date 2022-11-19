import { configureStore } from '@reduxjs/toolkit';
import lyricsReducer from '../features/lyrics/lyricsSlice';

export const store = configureStore({
  reducer: {
    lyrics: lyricsReducer,
  },
});
