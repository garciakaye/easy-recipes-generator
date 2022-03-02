import './styles/App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './components/Navigation/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import Home from './components/Home/Home';
import Profile from "./components/Profile/Profile";
import { baseUrl, headers, getToken } from "./Globals";
import { useSelector, useDispatch } from 'react-redux';
import { userLoggedIn, userLogout, ingredientsFetched } from "./components/User/userSlice";
=======
import Home from "./components/Home/Home";
import Profile from "./components/User/Profile";
>>>>>>> development
import About from "./components/About/About";
import Forms from "./components/User/Forms";
import { baseUrl, headers, getToken } from "./Globals";


const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  function loginUser(user) {
    setCurrentUser(user);
    setLoggedIn(user);
  }

  function logoutUser() {
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.removeItem('jwt');
  }

  useEffect(() => {
    const token = localStorage.getItem('jwt')
    if (token && !loggedIn) {
      // fetch to rails backend
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
        loginUser={loginUser}
        logoutUser={logoutUser}
        currentUser={currentUser}
      />
      <Routes>
        <Route
          path='/home'
          element={<Home
            loggedIn={loggedIn}
            loginUser={loginUser}
            logoutUser={logoutUser}
            currentUser={currentUser}
          />
          }
        />
        <Route
          path="/"
          element={<About />}
        />
        <Route
          path="/profile"
          element={<Profile />}
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
            loginUser={loginUser}
            logoutUser={logoutUser}
            currentUser={currentUser}
          />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;