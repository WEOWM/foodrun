import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // [{idMeal, strMeal, strMealThumb, price, qty}]
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const meal = action.payload;
      const existing = state.items.find((item) => item.idMeal === meal.idMeal);

      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...meal, qty: 1, price: meal.price || 12.99 });
      }

      state.totalAmount = state.items.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
      );
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.idMeal !== id);
      state.totalAmount = state.items.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
      );
    },
    increaseQty: (state, action) => {
      const item = state.items.find((x) => x.idMeal === action.payload);
      if (item) item.qty += 1;
      state.totalAmount = state.items.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
      );
    },
    decreaseQty: (state, action) => {
      const item = state.items.find((x) => x.idMeal === action.payload);
      if (item && item.qty > 1) {
        item.qty -= 1;
      } else {
        state.items = state.items.filter((x) => x.idMeal !== action.payload);
      }
      state.totalAmount = state.items.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
      );
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
