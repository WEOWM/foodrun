import { configureStore } from '@reduxjs/toolkit';
import mealsReducer from '../features/meals/mealSlice'; 
import cartReducer from '../features/meals/cartSlice';    

const store = configureStore({
  reducer: {
    meals: mealsReducer, // state.meals
    cart: cartReducer,   
  },
});

export default store;
