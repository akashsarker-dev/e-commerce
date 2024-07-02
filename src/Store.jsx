import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './slices/CartSlice';
import userSlice from './slices/userSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    cartDetails: CartSlice,
  },
});
