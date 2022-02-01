import './styles/App.css';
import React, { useEffect } from 'react';
import NavBar from './components/Navigation/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Signup from './components/User/Signup';
import Login from './components/User/Login';
import Profile from "./components/Profile/Profile";
import { baseUrl, headers, getToken } from "./Globals";
import { useSelector, useDispatch } from 'react-redux';
import { userLoggedIn, userLogout } from "./components/User/userSlice";

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
        .then(user => dispatch(userLoggedIn(user)))
    }
  }, [loggedIn, dispatch])


  return (
    <Router>
      <NavBar
        loggedIn={ loggedIn }
        logOut={ logOut }
        user={ user }
      />
      <Routes>
        <Route
          path="/"
          element={ <Home
            loggedIn={ loggedIn }
          />
          }
        />
        <Route
          path="/signup"
          element={<Signup
          />
          }
        />
        <Route
          path="/login"
          element={ <Login
            loggedIn={loggedIn}
          />
          }
        />
        <Route
          path="/profile"
          element={ <Profile
            loggedIn={loggedIn}
          />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
