import './styles/App.css';
import React, { useEffect } from 'react';
import NavBar from './components/Navigation/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
// import Signup from './components/User/Signup';
import Login from './components/User/Login';
import Profile from "./components/Profile/Profile";
import { baseUrl, headers, getToken } from "./Globals";
import { useSelector, useDispatch } from 'react-redux';
import { userLoggedIn, userLogout } from "./components/User/userSlice";
import { userIngredientsGet } from "./components/Ingredients/userIngredientsSlice";
import About from "./components/About/About";
import Forms from "./components/User/Forms";

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
          dispatch(userLoggedIn(user))
          dispatch(userIngredientsGet(user.user_ingredients)) //this is undefined
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
        <Route
          path="/login"
          element={<Forms
          />
          }
        />
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
