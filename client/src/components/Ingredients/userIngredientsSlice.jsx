import { createSlice } from "@reduxjs/toolkit";
import { baseUrl, headers } from "../../Globals";
import { ingredientsFetched } from "../User/userSlice";

// export function userIngredientsPost(strongParams) {
//   return function (dispatch) {
//     dispatch({ type: "userIngredients/userIngredientsLoading" });
//     fetch(baseUrl + "/user_ingredients", {
//       method: "POST",
//       headers,
//       body: JSON.stringify(strongParams)
//     })
//       .then(res => res.json())
//       .then(data => {

//         dispatch(userIngredientAdd(data))
//       })
//   }
// }

// export function userIngredientsDelete(id) {
//   return function (dispatch) {
//     dispatch({ type: "userIngredients/userIngredientsRemoving" });
//     debugger
//     fetch(baseUrl + `/user_ingredients/${id}`, {
//       method: "DELETE",
//     })
//       .then(dispatch(userIngredientRemove(id)))
//   }
// }

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





