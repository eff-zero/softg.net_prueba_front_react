import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Modules/AuthModule/features/authSlice';
import toastSlice from '../features/toast/toastSlice';
import loaderSlice from '../features/loader/loaderSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    toast: toastSlice,
    loader: loaderSlice,
  },
});
