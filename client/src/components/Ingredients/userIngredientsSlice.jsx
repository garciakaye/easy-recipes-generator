import { createSlice } from "@reduxjs/toolkit";
import { baseUrl, headers } from "../../Globals";

export function userIngredientsPost(strongParams) {
  return function (dispatch) {
    dispatch({ type: "userIngredients/userIngredientsLoading" });
    fetch(baseUrl + "/user_ingredients", {
      method: "POST",
      headers,
      body: JSON.stringify(strongParams)
    })
      .then(res => res.json())
      .then(data => dispatch(userIngredientAdd(data)))
  }
}

export function userIngredientsDelete(id) {
  return function (dispatch) {
    dispatch({ type: "userIngredients/userIngredientsRemoving" });
    fetch(baseUrl + `/user_ingredients/${id}`, {
      method: "DELETE",
    })
      .then(dispatch(userIngredientRemove(id)))
  }
}

const userIngredientsSlice = createSlice({
  name: "userIngredients",
  initialState: {
    entities: [],
    status: 'idle',
  },
  reducers: {
    userIngredientAdd(state, action) {
      state.entities.push({
        user_id: action.payload.user_id,
        ingredient_id: action.payload.ingredient_id,
        ingredient: action.payload.ingredient
      });
    },
    userIngredientsGet(state, action) {
      state.entities = action.payload
    },
    userIngredientRemove(state, action) {
      state.entities.filter(ingred => ingred.id !== action.payload)
    },
  },
});

export const { userIngredientAdd, userIngredientRemove, userIngredientsGet } = userIngredientsSlice.actions;

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
