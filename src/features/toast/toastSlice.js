import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
  message: '',
  color: '',
};

const toastSlice = createSlice({
  initialState,
  name: 'toast',
  reducers: {
    showToast: (state, action) => {
      state.show = true;
      state.message = action.payload.message;
      state.color = action.payload.color;
    },
    hiddenToast: () => initialState,
  },
});

export const { showToast, hiddenToast } = toastSlice.actions;
export default toastSlice.reducer;
