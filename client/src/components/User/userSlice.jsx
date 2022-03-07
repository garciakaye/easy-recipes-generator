import { createSlice } from "@reduxjs/toolkit";
import { headers, getToken } from "../../Globals";
import { setErrors } from "../../errorHandling/errorsSlice";


const initialState = {
  id: -1,
  firstName: '',
  lastName: '',
  username: '',
  isLoggedIn: false,
  status: 'idle',
  ingredientIds: []
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoginLoading(state, action) {
      state.status = "loading"
    },
    userFetchRejected(state, action) {
      state.status = "rejected"
    },
    setUser(state, action) {
      const { id, firstName, lastName, username } = action.payload
      state = {
        id,
        firstName,
        lastName,
        username,
        status: 'succeeded',
        isLoggedIn: true,
        errors: []
      }
      return state
    },
    clearUser(state, action) {
      return initialState
    },
    ingredientAdd(state, action) {
      state.ingredientIds.push({
        user_id: action.payload.user_id,
        ingredient_id: action.payload.ingredient_id
      })
    },
    ingredientRemove(state, action) {
      if (state.ingredientIds.find(ingred => ingred.id === action.payload)) {
        state.ingredientIds = state.ingredientIds.filter(ingred => ingred.id !== action.payload)
      }
    },
    setUserIngredients(state, action) {
      state.ingredientIds = action.payload
      state.status = 'idle'
    }
  },
});

// export the action creators
export const {
  userFetchRejected,
  usersFetched,
  setUser,
  clearUser,
  setUserIngredients
} = userSlice.actions;

export function login(strongParams) {
  return function (dispatch) {
    dispatch({ type: "users/userLoginLoading" });
    fetch('/login', {
      method: "POST",
      headers: {
        ...headers,
        ...getToken()
      },
      body: JSON.stringify(strongParams)
    })
      .then(res => {
        if (res.ok) {
          res.json()
            .then(data => {
              localStorage.setItem('jwt', data.token)
              dispatch(setUser(data))
            })
        } else {
          res.json().then(errors => {
            dispatch(userFetchRejected())
            dispatch(setErrors(errors))
          })
        }
      })
  }
}

export function signup(user) {
  return (dispatch) => {
    //dispatch signing up status
    fetch('/users', {
      method: "POST",
      headers: headers,
      body: JSON.stringify(user)
    }).then((response) => response.json())
      .then((data) => {
        localStorage.setItem("jwt", data.token)
        dispatch(setUser(data.user))
      })

  }
}


export function verifyLoggedIn() {
  return function (dispatch) {
    dispatch({ type: "users/userLoginLoading" });
    fetch('/get-current-user', {
      method: "GET",
      headers: {
        ...headers,
        ...getToken()
      }
    })
      .then(res => {
        if (res.ok) {
          res.json()
            .then(data => {
              dispatch(setUser(data))
            })
        } else {
          res.json().then(errors => {
            dispatch(userFetchRejected())
            dispatch(setErrors(errors))
          })
        }
      })
  }
}

export function getUserIngredients() {
  return (dispatch) => {
    dispatch({ type: "userIngredients/userIngredientsLoading" });
    fetch('/user_ingredients')
      .then((response) => response.json())
      .then((ingredients) => dispatch(setUserIngredients(ingredients)))
  }
}

// const handleUserIngredientAdd = () => {
//   const userIngredient = {
//     user_id: user.id,
//     ingredient_id: ingredient.id
//   }
//   fetch(baseUrl + "/user_ingredients", {
//     method: "POST",
//     headers,
//     body: JSON.stringify(userIngredient)
//   })
//     .then(res => res.json())
//     .then(data => {
//       setFindUserIngredient(data)
//       dispatch(userIngredientAdd(data))
//     })
// }


export default userSlice.reducer;

export const selectAllUsers = state => state.user.entities

export const selectUserById = (state, userId) => state.user.entities.find(user => user.id === parseInt(userId))