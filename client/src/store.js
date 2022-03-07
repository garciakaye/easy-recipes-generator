import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./components/Ingredients/IngredientsSlice";
import userReducer from "./components/User/userSlice";
import errorsReducer from './errorHandling/errorsSlice';
import recipesReducer from "./components/Recipes/recipesSlice";


const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    user: userReducer,
    errors: errorsReducer,
    recipes: recipesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
