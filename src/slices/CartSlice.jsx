import { createSlice } from '@reduxjs/toolkit';

// Retrieve and parse the cart data from localStorage
const localStorageItem = localStorage.getItem('cartTotal');
const initialState = {
  value: localStorageItem ? JSON.parse(localStorageItem) : [], // Default to empty array if null/undefined
};

export const CartSlice = createSlice({
  name: 'cartDetails',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Ensure state.value is always an array
      if (!Array.isArray(state.value)) {
        state.value = [];
      }

      const existingIndex = state.value.findIndex(item => item._id === action.payload._id);
      if (existingIndex === -1) {
        state.value.push(action.payload);
        localStorage.setItem('cartTotal', JSON.stringify(state.value)); // Update localStorage
      } else {
        console.log('Item already in cart');
      }
    },
    updateQuantity: (state, action) => {
      console.log('action.payload:', action.payload);
      console.log('state.value:', state.value);
      if(action.payload.act == 'add' ){
        state.value[action.payload.id].qun ++;
     }else if(action.payload.act == 'sub' ){
        if (state.value[action.payload.id].qun > 1) {
          state.value[action.payload.id].qun --;
        }
     }
    
  }
  }
});


export const { addToCart , updateQuantity} = CartSlice.actions;

export default CartSlice.reducer;
