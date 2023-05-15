import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Modules/AuthModule/features/authSlice';
import toastSlice from '../features/toast/toastSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    toast: toastSlice,
  },
});
