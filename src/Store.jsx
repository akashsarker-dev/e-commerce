import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/UserSlice'; // Import userReducer
import CartSlice from './slices/CartSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    cartDetails: CartSlice,
  },
});
