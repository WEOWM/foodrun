// features/meals/mealSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// ✅ Fetch all categories
export const fetchCategories = createAsyncThunk(
  'meals/fetchCategories',
  async () => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await res.json();
    return data.categories;
  }
);

// ✅ Fetch meals by category with caching
export const fetchMealsByCategory = createAsyncThunk(
  'meals/fetchMealsByCategory',
  async (category, { getState }) => {
    const { mealsByCategory } = getState().meals;

    // 🔥 If cached, return directly
    if (mealsByCategory[category]) {
      return { category, meals: mealsByCategory[category], fromCache: true };
    }

    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    const data = await res.json();
    return { category, meals: data.meals, fromCache: false };
  }
);

// ✅ Fetch meals by ingredient (no cache for now)
export const fetchMealsByIngredient = createAsyncThunk(
  'meals/fetchMealsByIngredient',
  async (ingredient) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await res.json();
    return data.meals;
  }
);

const mealSlice = createSlice({
  name: 'meals',
  initialState: {
    categories: [],
    meals: [],              // 👈 currently visible meals
    mealsByCategory: {},    // 👈 cache for category meals
    loadingCategories: false,
    loadingMeals: false,
    error: null,
    selectedCategory: null,
  },
  reducers: {
    setCategoryId: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // ✅ Categories
      .addCase(fetchCategories.pending, (state) => {
        state.loadingCategories = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loadingCategories = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loadingCategories = false;
        state.error = action.error.message;
      })

      // ✅ Meals by Category
      .addCase(fetchMealsByCategory.pending, (state) => {
        state.loadingMeals = true;
        state.error = null;
      })
      .addCase(fetchMealsByCategory.fulfilled, (state, action) => {
        state.loadingMeals = false;
        const { category, meals, fromCache } = action.payload;

        // Cache new meals
        if (!fromCache) {
          state.mealsByCategory[category] = meals;
        }

        // Show current meals
        state.meals = state.mealsByCategory[category];
      })
      .addCase(fetchMealsByCategory.rejected, (state, action) => {
        state.loadingMeals = false;
        state.error = action.error.message;
      })

      // ✅ Meals by Ingredient
      .addCase(fetchMealsByIngredient.pending, (state) => {
        state.loadingMeals = true;
        state.error = null;
      })
      .addCase(fetchMealsByIngredient.fulfilled, (state, action) => {
        state.loadingMeals = false;
        state.meals = action.payload || [];
      })
      .addCase(fetchMealsByIngredient.rejected, (state, action) => {
        state.loadingMeals = false;
        state.error = action.error.message;
      });
  },
});

export const { setCategoryId } = mealSlice.actions;
export default mealSlice.reducer;
