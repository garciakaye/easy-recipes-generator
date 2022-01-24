import './styles/App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './components/Navigation/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
import Profile from "./Profile/Profile";
import { baseUrl, headers, getToken } from "./Globals";

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const loginUser = user => {
    setCurrentUser(user);
    setLoggedIn(user);
  }

  function logoutUser(){
    setCurrentUser({});
    setLoggedIn(false);
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
      .then(user => loginUser(user))
    // setLoggedIn(true);
  }
}, [loggedIn])

  return (
    <Router>
      <NavBar
        loggedIn={loggedIn}
        logoutUser={logoutUser}
        currentUser={currentUser}
      />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/signup"
          element={<Signup
            loginUser={loginUser}
          />}
        />
        <Route
          path="/login"
          element={<Login
            loggedIn={loggedIn}
            loginUser={loginUser}
            currentUser={currentUser}
          />}
        />
        <Route
          path="/profile"
          element={<Profile
            loggedIn={loggedIn}
            loginUser={loginUser}
            currentUser={currentUser}
          />}
        />
      </Routes>
    </Router>
  );
}

export default App;
