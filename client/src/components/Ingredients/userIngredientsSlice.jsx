import { createSlice } from "@reduxjs/toolkit";



const userIngredientsSlice = createSlice({
  name: "userIngredients",
  initialState: {
    entities: [],
    ingredients: [],
    status: 'idle',
  },
  reducers: {
    userIngredientAdd(state, action) {
      state.entities.push({
        user_id: action.payload.user_id,
        ingredient_id: action.payload.ingredient_id,
      });
    },
    userIngredientsGet(state, action) {
      state.entities = action.payload
    },
    userIngredientsName(state, action) {
      state.ingredients = action.payload
    },
    userIngredientRemove(state, action) {
      if (state.entities.find(ingred => ingred.id === action.payload)) {
        state.entities = state.entities.filter(ingred => ingred.id !== action.payload)
      }
    },
  },
});

export const { userIngredientsName, userIngredientAdd, userIngredientRemove, userIngredientsGet } = userIngredientsSlice.actions;

export default userIngredientsSlice.reducer;





