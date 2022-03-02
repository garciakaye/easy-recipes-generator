import { createSlice } from "@reduxjs/toolkit";
import { headers, getToken } from "../../Globals";
import { setErrors } from "../../errorHandling/errorsSlice";


export function logInFetch(strongParams) {
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
              dispatch(userLogInFetch(data.user))
              dispatch(setErrors([]))
              dispatch(userFetchSucceeded())
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
              dispatch(userLogInFetch(data))
              dispatch(setErrors([]))
              dispatch(userFetchSucceeded())
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





// export function logInFetch(strongParams) {
//   return function (dispatch) {

//     dispatch({ type: "users/userLoginLoading" });
//     fetch(baseUrl + '/login', {
//       method: "POST",
//       headers,
//       body: JSON.stringify(strongParams)
//     })
//       .then(res => {
//         if (res.ok) {
//           res.json()
//             .then(data => {
//               localStorage.setItem('jwt', data.token)
//               dispatch(userLoggedIn(data.user))
//               // dispatch(userIngredientsGet(data.user_ingredients))
//               // dispatch(userIngredientsName(data.ingredients))
//               // dispatch(ingredientsFetched(data.all_ingredients))

//             })
//         } else {
//           res.json().then(errors => dispatch(setErrors(errors)))
//         }
//       })
//   }
// }


const userSlice = createSlice({
  name: 'user',
  initialState: {
    entities: [],
    status: 'idle',
  },
  reducers: {
    userLoginLoading(state, action) {
      state.status = "loading"
    },
    userFetchRejected(state, action) {
      state.status = "rejected"
    },
    userFetchSucceeded(state, action) {
      state.status = "succeeded"
    },
    usersFetched(state, action) {
      state.entities = action.payload;
    },
    userLogInFetch(state, action) {
      state.entities = [...state.entities, {
        id: action.payload.id,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        username: action.payload.username,
        password: action.payload.password
      }];
    },
    userLoggedIn(state, action) {
      state.loggedIn = action.payload
    },
    userLogout(state, action) {
      state.entities = action.payload
    },
    userLogoutStatus(state, action) {
      state.status = 'idle'
    },
  },
});

// export the action creators
export const {
  userLoggedIn,
  userLogout,
  userLogoutStatus,
  userFetchSucceeded,
  userFetchRejected,
  usersFetched,
  userLogInFetch
} = userSlice.actions;

export default userSlice.reducer;

export const selectAllUsers = state => state.user.entities

export const selectUserById = (state, userId) => state.user.entities.find(user => user.id === parseInt(userId))