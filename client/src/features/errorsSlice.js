import { createSlice } from "@reduxjs/toolkit";

const errorsSlice = createSlice({
  name: 'errors',
  initialState: {
    entities: [],
    status: "idle"
  },
  reducers: {
    setErrors(state, action) {
      state.entities = action.payload
    },
    resetErrors(state, action) {
      state.entities = []
    },
  },
});


export const { resetErrors, setErrors } = errorsSlice.actions;

export default errorsSlice.reducer;