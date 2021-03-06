import { createSlice } from "@reduxjs/toolkit";






const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    entities: [],
    status: 'idle',
  },
  reducers: {
    recipesGet(state, action) {
      state.entities = action.payload
    },
    recipesLoading(state, action) {
      state.status = "loading"
    },
  },
});


export const { recipesGet } = recipesSlice.actions;

export default recipesSlice.reducer;