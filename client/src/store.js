import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./features/IngredientsSlice";
import userReducer from "./features/userSlice";
import errorsReducer from './features/errorsSlice';
import recipesReducer from "./features/recipesSlice";


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
