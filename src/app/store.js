import { configureStore } from '@reduxjs/toolkit';
import lyricsReducer from '../components/lyricsSlice';

export const store = configureStore({
  reducer: {
    lyrics: lyricsReducer,
  },
});
