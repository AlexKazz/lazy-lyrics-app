import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const lyricsSlice = createSlice({
  name: 'lyrics',
  initialState,
  reducers: {
    clear: (state) => {
      state.value = '';
    },
    add: (state, action) => {
      state.value += action.payload;
    },
    remove: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { clear, add, remove } = lyricsSlice.actions;

export default lyricsSlice.reducer;
