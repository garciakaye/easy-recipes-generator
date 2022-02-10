import { configureStore } from "@reduxjs/toolkit";
import userIngredientsReducer from "./components/Ingredients/userIngredientsSlice";
import userReducer from "./components/User/userSlice";
import recipesReducer from "./components/Recipes/recipesSlice";


const store = configureStore({
  reducer: {
    userIngredients: userIngredientsReducer,
    user: userReducer,
    recipes: recipesReducer
  },
});

export default store;
