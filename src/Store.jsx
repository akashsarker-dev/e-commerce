import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/UserSlice';
import CartSlice from './slices/CartSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    cartDetails: CartSlice,
  },
});
