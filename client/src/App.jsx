import './styles/App.css';
import React, { useEffect } from 'react';
import NavBar from './components/Navigation/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
// import Login from './components/User/Login';
import Profile from "./components/Profile/Profile";
import { baseUrl, headers, getToken } from "./Globals";
import { useSelector, useDispatch } from 'react-redux';
import { userLoggedIn, userLogout, ingredientsFetched } from "./components/User/userSlice";
import About from "./components/About/About";
import Forms from "./components/User/Forms";
import { userIngredientsGet, userIngredientsName } from "./components/Ingredients/userIngredientsSlice";


const App = () => {
  const loggedIn = useSelector(state => state.user.loggedIn)
  const user = useSelector(state => state.user.entities[0])
  const dispatch = useDispatch()


  const logOut = () => {
    dispatch(userLogout(user.id));
    localStorage.removeItem('jwt');

  }

  useEffect(() => {
    const token = localStorage.getItem('jwt')
    if (token && !loggedIn) {
      fetch(baseUrl + '/get-current-user', {
        method: "GET",
        headers: {
          ...headers,
          ...getToken()

        }
      })
        .then(resp => resp.json())
        .then(user => {
          dispatch(userLoggedIn(user.user))
          dispatch(userIngredientsGet(user.user_ingredients))
          dispatch(userIngredientsName(user.ingredients))
          dispatch(ingredientsFetched(user.all_ingredients))
        })

    }
  }, [loggedIn, dispatch])


  return (
    <Router>
      <NavBar
        loggedIn={loggedIn}
        logOut={logOut}
        user={user}
      />
      <Routes>
        <Route
          path='/home'
          element={<Home
            loggedIn={loggedIn}
            logOut={logOut}
            user={user}
          />
          }
        />
        <Route
          path="/"
          element={<About
          />
          }
        />
        <Route
          path="/profile"
          element={<Profile
            loggedIn={loggedIn}
            logOut={logOut}
            user={user}
          />
          }
        />
        {/* <Route
          path="/login"
          element={<Login
          />
          }
        /> */}
        <Route
          path="/signup"
          element={<Forms
            loggedIn={loggedIn}
            user={user}
          />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
