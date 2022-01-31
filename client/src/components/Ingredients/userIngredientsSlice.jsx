import { createAyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl, headers } from "../../Globals";

const fetchUserIngredients = createAyncThunk(
  
)

const userIngredientsSlice = createSlice({
  name: "userIngredients",
  initialState: {
    entities: [],
  },
  reducers: {
    userIngredientAdded(state, action) {
      state.entities.push({ ...action.payload });
    },
    userIngredientRemoved(state, action) {
      const index = state.entities.findIndex((r) => r.id === action.payload);
      state.entities.splice(index, 1);
    },
  },
});

export const { userIngredientAdded, userIngredientRemoved } = userIngredientsSlice.actions;

export default userIngredientsSlice.reducer;




// export function fetchCats() {
//   return function (dispatch) { 
//     dispatch({ type: "cats/catsLoading" });
//     fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
//       .then((response) => response.json())
//       .then((data) => {
//         dispatch({ type: "cats/catsLoaded", payload: data.images });
//       });
//   };
// }

// const initialState = {
//   entities: [], // array of cats
//   status: "idle", // loading state
// };

// export default function catsReducer(state = initialState, action) {
//   switch (action.type) {
//     case "cats/catsLoading":
//       return {
//         ...state,
//         status: "loading",
//       };
//     case "cats/catsLoaded":
//       return {
//         ...state,
//         entities: action.payload,
//         status: "idle",
//       };
//     default:
//       return state;
//   }
// }
