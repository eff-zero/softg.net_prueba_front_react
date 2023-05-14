import { createSlice } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_KEY } from 'env';

const initialState = {
  isAuthenticated: false,
  user: {},
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      window.localStorage.setItem(LOCAL_STORAGE_KEY, action.payload.token);
    },
    logout: () => {
      window.localStorage.clear();
      return initialState;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
