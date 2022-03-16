import { createSlice } from "@reduxjs/toolkit";
import { headers, getToken } from "../Globals";
import { setErrors } from "./errorsSlice";


const initialState = {
  id: -1,
  firstName: '',
  lastName: '',
  username: '',
  isLoggedIn: false,
  status: 'idle',
  ingredients: [],
  shoppingList: []
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoginLoading(state, action) {
      return {
        ...state,
        status: 'loading'
      }
    },
    userFetchRejected(state, action) {
      return {
        ...state,
        status: 'rejected'
      }
    },
    setUser(state, action) {
      if (action.payload.user) {
        const { id, first_name, last_name, username, ingredients } = action.payload.user
        state = {
          ...state,
          id,
          firstName: first_name,
          lastName: last_name,
          username,
          status: 'succeeded',
          isLoggedIn: true,
          // errors: [],
          ingredients,
        }
        localStorage.setItem("current_user", state);
        return state;
      }
    },
    clearUser(state, action) {
      return initialState
    },
    ingredientAdd(state, action) {
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      }
    },
    ingredientRemove(state, action) {
      return {
        ...state,
        ingredients: [...state.ingredients].filter(ingred => ingred.id !== action.payload)
      }
    },
    setUserIngredients(state, action) {
      return {
        ...state,
        ingredients: action.payload,
        status: 'idle'
      }
    },
    shoppingListAdd(state, action) {
      return {
        ...state,
        shoppingList: [...state.shoppingList, action.payload]
      }
    }
  },
});

// export the action creators
export const {
  userFetchRejected,
  usersFetched,
  setUser,
  clearUser,
  setUserIngredients,
  ingredientAdd,
  ingredientRemove,
  shoppingListAdd
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
              dispatch(verifyLoggedIn(data))
            })
        } else {
          res.json().then(errors => {
            dispatch(userFetchRejected())
            dispatch(setErrors(errors.errors))
          })
        }
      })
  }
}

export function signup(user) {
  return (dispatch) => {
    fetch('/users', {
      method: "POST",
      headers: headers,
      body: JSON.stringify(user)
    }).then(res => {
      if (res.ok) {
        res.json()
          .then(data => {
            localStorage.setItem("jwt", data.token)
            dispatch(verifyLoggedIn(data.user))
          })
      } else {
        res.json().then(errors => {
          dispatch(userFetchRejected())
          dispatch(setErrors(errors.error))
        })
      }
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
              dispatch(setUser({ user: data }));
            }).catch(errors => {
              dispatch(userFetchRejected())
              dispatch(setErrors(errors))
            })
        }
      })
  }
}

export default userSlice.reducer;

