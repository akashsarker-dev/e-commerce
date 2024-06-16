import { createSlice } from '@reduxjs/toolkit';
const localStorageitem = localStorage.getItem('cartTotal')

export const CartSlice = createSlice({
  name: 'cartTotal',
  initialState: {
    value: localStorageitem ? JSON.parse(localStorageitem) : [],
  },
  reducers: {
    
    cartTotal: (state, action) => {
      // Check if state.value is an array before using findIndex
     const findIndex = state.value.findIndex((item) => item._id === action.payload._id);
      if (findIndex === -1) {
        state.value.push(action.payload);
      }
      else {
        // state.value[findIndex] = action.payload;
        console.log('item already in cart');
       
      }
      localStorage.setItem('cartTotal', JSON.stringify(state.value));
      console.log(state.value);
    },
  },
});

export const { cartTotal } = CartSlice.actions;

export default CartSlice.reducer;
