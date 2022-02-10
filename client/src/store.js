import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import userIngredientsReducer from "./components/Ingredients/userIngredientsSlice";
import userReducer from "./components/User/userSlice";
import recipesReducer from "./components/Recipes/recipesSlice";


const store = configureStore({
  reducer: {
    userIngredients: userIngredientsReducer,
    user: userReducer,
    recipes: recipesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    })
});

export default store;
