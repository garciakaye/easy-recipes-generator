import { createSlice } from "@reduxjs/toolkit";
import { baseUrl, headers } from "../../Globals";

export function logInFetch(strongParams) {
  return function (dispatch) {
    
    dispatch({ type: "users/userLoginLoading"});
    fetch(baseUrl + '/login', {
      method: "POST",
      headers,
      body: JSON.stringify(strongParams)
    })
    .then(res => {
      if(res.ok) {
        res.json()
        .then(data => {
          dispatch(userLoggedIn(data.user));
          localStorage.setItem('jwt', data.token)
        })
      }else{
        res.json().then(errors => dispatch(setErrors(errors)))
      }
    })
  }
}

  

const userSlice = createSlice({
  name: 'user',
  initialState: {
    entities: [],
    status: 'idle',
    loggedIn: false,
    errors: null
  },
  reducers: {
    resetErrors(state, action) {
      state.errors = null
    },
    userLoggedIn(state, action) {
      state.entities.push({
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        username: action.payload.username,
        password: action.payload.password,
      });
      state.status = "idle"
      state.loggedIn = true
      state.errors = null
    },
    userLogout(state, action) {
      state.loggedIn = false
      state.entities = state.entities.filter( user => user.id !== action.payload)
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
export const { userLoggedIn, userLogout, resetErrors, setErrors } = userSlice.actions;

export default userSlice.reducer;