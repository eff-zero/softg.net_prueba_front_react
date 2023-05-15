import { createSlice } from '@reduxjs/toolkit';

const loaderSlice = createSlice({
  initialState: false,
  name: 'loader',
  reducers: {
    toggleLoader: (state) => !state,
  },
});

export const { toggleLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
