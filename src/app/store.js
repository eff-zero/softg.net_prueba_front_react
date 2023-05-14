import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Modules/AuthModule/features/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
