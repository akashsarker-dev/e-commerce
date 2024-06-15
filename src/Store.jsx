import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/UserSlice'; // Import userReducer

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
