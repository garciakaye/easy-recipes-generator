import { configureStore } from "@reduxjs/toolkit";
import userIngredientsReducer from "./components/Ingredients/userIngredientsSlice";
import userReducer from "./components/User/userSlice";


const store = configureStore({
  reducer: {
    userIngredients: userIngredientsReducer,
    user: userReducer
  },
});

export default store;
