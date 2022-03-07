import { createSlice } from "@reduxjs/toolkit";



const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {
    ingredientsLoading(state, action) {
      state.status = "loading"
    },
    setIngredients(state, action) {
      state.items = action.payload
      state.status = 'idle'
    },
  }
});


export const { setIngredients } = ingredientsSlice.actions;

export function getAllIngredients() {
  return (dispatch) => {
    dispatch({ type: "ingredients/ingredientsLoading" });
    fetch('/ingredients')
      .then((response) => response.json())
      .then((ingredients) => dispatch(setIngredients(ingredients)))
  }
}

export default ingredientsSlice.reducer;





