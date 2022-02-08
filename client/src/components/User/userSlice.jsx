import { createSlice } from "@reduxjs/toolkit";
import { baseUrl, headers } from "../../Globals";
import { userIngredientsGet } from "../Ingredients/userIngredientsSlice";

export function logInFetch(strongParams) {
  return function (dispatch) {

    dispatch({ type: "users/userLoginLoading" });
    fetch(baseUrl + '/login', {
      method: "POST",
      headers,
      body: JSON.stringify(strongParams)
    })
      .then(res => {
        if (res.ok) {
          res.json()
            .then(data => {
              localStorage.setItem('jwt', data.token)
              dispatch(userLoggedIn(data.user))
              dispatch(userIngredientsGet(data.user_ingredients))
              dispatch(ingredientsFetched(data.all_ingredients))
            })
        } else {
          res.json().then(errors => dispatch(setErrors(errors)))
        }
      })
  }
}


const userSlice = createSlice({
  name: 'user',
  initialState: {
    entities: [],
    all_ingredients: [],
    status: 'idle',
    loggedIn: false,
    errors: null
  },
  reducers: {
    resetErrors(state, action) {
      state.errors = null
    },
    userLoggedIn(state, action) {
      console.log("state: ", state, "action: ", action)
      state.entities.push({
        id: action.payload.id,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        username: action.payload.username,
        password: action.payload.password,
        user_ingredients: action.payload.user,
        ingredients: action.payload.ingredients
      });
      state.status = "idle"
      state.loggedIn = true
      state.errors = null
    },
    ingredientsFetched(state, action) {
      state.all_ingredients = action.payload
    },
    userLogout(state, action) {
      state.loggedIn = false
      state.entities = state.entities.filter(user => user.id !== action.payload)
    },
    setErrors(state, action) {
      state.errors = action.payload
    },
    userLoginLoading(state, action) {
      state.status = "loading"
    },
  },
});

// export the action creators
export const { ingredientsFetched, userLoggedIn, userLogout, resetErrors, setErrors } = userSlice.actions;

export default userSlice.reducer;