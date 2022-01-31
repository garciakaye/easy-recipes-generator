import { configureStore } from "@reduxjs/toolkit";
import userIngredientsReducer from "./components/Ingredients/userIngredientsSlice";

// import restaurantsReducer from "./features/restaurants/restaurantsSlice";
// import reviewsReducer from "./features/reviews/reviewsSlice";

const store = configureStore({
  reducer: {
    userIngredients: userIngredientsReducer,
    // reviews: reviewsReducer,
  },
});

export default store;
