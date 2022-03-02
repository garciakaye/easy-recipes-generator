import { configureStore } from "@reduxjs/toolkit";
import userIngredientsReducer from "./components/Ingredients/userIngredientsSlice";
import userReducer from "./components/User/userSlice";
import errorsReducer from './errorHandling/errorsSlice';
import recipesReducer from "./components/Recipes/recipesSlice";


const store = configureStore({
  reducer: {
    userIngredients: userIngredientsReducer,
    user: userReducer,
    errors: errorsReducer,
    recipes: recipesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
