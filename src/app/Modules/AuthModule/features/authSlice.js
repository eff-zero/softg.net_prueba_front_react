import { createSlice } from '@reduxjs/toolkit';
import { setToken, clearToken } from '../../../../helpers/handleLocalStorage';
import checkAuth from '../helpers/checkAuth';

const initialState = await checkAuth();

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.data.data;
      setToken(action.payload.data.token);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      clearToken();
    },
    loadUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.data;
    },
  },
});

export const { login, logout, loadUser } = authSlice.actions;
export default authSlice.reducer;
